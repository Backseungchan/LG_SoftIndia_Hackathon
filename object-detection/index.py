import websockets
import asyncio
import cv2
import numpy as np
import playsound
from gtts import gTTS
import json

def speak(text):
    tts = gTTS(text=text, lang='en')
    tts.save("tts.mp3")
    playsound.playsound("tts.mp3")

# Get signal from webcam
VideoSignal = cv2.VideoCapture(0)

# YOLO network configuration
net = cv2.dnn.readNet("yolov3-tiny.weights", "yolov3-tiny.cfg")
classes = []
with open("yolo.names", "r") as f:
    classes = [line.strip() for line in f.readlines()]
layer_names = net.getLayerNames()
output_layers = [layer_names[i[0] - 1] for i in net.getUnconnectedOutLayers()]
colors = np.random.uniform(0, 255, size=(len(classes), 3))

# 클라이언트 접속이 되면 호출된다.
async def accept(websocket, path):
    while True:
         # 웹캠 프레임
        ret, frame = VideoSignal.read()
        h, w, c = frame.shape
        frontCount = 0

        # YOLO 입력
        blob = cv2.dnn.blobFromImage(frame, 0.00392, (416, 416), (0, 0, 0),
        True, crop=False)
        net.setInput(blob)
        outs = net.forward(output_layers)

        class_ids = []
        confidences = []
        boxes = []

        for out in outs:
            for detection in out:
                scores = detection[5:]
                class_id = np.argmax(scores)
                confidence = scores[class_id]

                if confidence > 0.2:
                    if class_id == 1:
                        frontCount += 1
                    # Object detected
                    center_x = int(detection[0] * w)
                    center_y = int(detection[1] * h)
                    dw = int(detection[2] * w)
                    dh = int(detection[3] * h)
                    # Rectangle coordinate
                    x = int(center_x - dw / 2)
                    y = int(center_y - dh / 2)
                    boxes.append([x, y, dw, dh])
                    confidences.append(float(confidence))
                    class_ids.append(class_id)

            indexes = cv2.dnn.NMSBoxes(boxes, confidences, 0.45, 0.4)


        for i in range(len(boxes)):
            if i in indexes:
                x, y, w, h = boxes[i]
                label = str(classes[class_ids[i]])
                score = confidences[i]

                # 경계상자와 클래스 정보 이미지에 입력
                cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 0, 255), 5)
                cv2.putText(frame, label, (x, y - 20), cv2.FONT_ITALIC, 0.5, 
                (255, 255, 255), 1)

        cv2.imshow("YOLOv3-tiny", frame)
        if frontCount > 0:
            await websocket.send("Found")
            data = await websocket.recv();
            response = json.loads(data)
            
            if response['response'] == True:
                speak(response['text'])    
                await websocket.send("Done")
        

        if cv2.waitKey(100) > 0:
            break

# 웹 소켓 서버 생성.호스트는 localhost에 port는 9998로 생성한다.
start_server = websockets.serve(accept, "192.168.0.16", 9998);
# 비동기로 서버를 대기한다.
asyncio.get_event_loop().run_until_complete(start_server);
asyncio.get_event_loop().run_forever();

