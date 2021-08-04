import base64
import cv2
from django.http import JsonResponse
import numpy as np
import pytesseract

# Create your views here.

def detail(request):
    if request.method == 'GET':
        print("GET")
        return JsonResponse({
            'method':request.method,
        })
    if request.method == 'POST':
        print("POST")
        imgstring = request.POST['img_url']
        imgstring = imgstring.split('base64,')[-1].strip()
        imgstring = base64.b64decode(imgstring)
        nparr = np.fromstring(imgstring, np.uint8)
        img_np = cv2.imdecode(nparr, cv2.IMREAD_GRAYSCALE)
        image_binary = image_threshold(img_np)
        content = pytesseract.image_to_string(image_binary)
        return JsonResponse({
            'content': content,
        })

def image_threshold(image):
    result = cv2.threshold(image, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)[1]
    return result
