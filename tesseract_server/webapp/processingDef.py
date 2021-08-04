import base64
import io
import cv2
import tempfile
from PIL import Image
import re
from django.http import JsonResponse
import matplotlib.pyplot as plt
from django.shortcuts import render
import numpy as np
import pytesseract

IMAGE_SIZE = 1800
BINARY_THREHOLD = 180

def viewDef(request):
    print(request.POST)
    imgstring = request.POST['img_url']
    image_type = re.search('image/(.*);base64', imgstring).group(1)
    imgstring = imgstring.split('base64,')[-1].strip()
    imgstring = base64.b64decode(imgstring)
    dataBytesIO = io.BytesIO(imgstring)
    im = Image.open(dataBytesIO)

    im.save('ocr.' + image_type, image_type)

    temp_file = set_image_dpi(im)
    im_new = remove_noise_and_smooth(temp_file)
    content = pytesseract.image_to_string(im_new)
    return JsonResponse({
        'content': content,
    })

def set_image_dpi(im):
    length_x, width_y = im.size
    factor = max(1, int(IMAGE_SIZE / length_x))
    size = factor * length_x, factor * width_y
    im_resized = im.resize(size, Image.ANTIALIAS)
    temp_file = tempfile.NamedTemporaryFile(delete=False, suffix='.jpg')
    temp_filename = temp_file.name
    im_resized.save(temp_filename, dpi=(300, 300))
    return temp_filename

def image_smoothening(img):
    ret1, th1 = cv2.threshold(img, BINARY_THREHOLD, 255, cv2.THRESH_BINARY)
    ret2, th2 = cv2.threshold(th1, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    blur = cv2.GaussianBlur(th2, (1, 1), 0)
    ret3, th3 = cv2.threshold(blur, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    return th3

def remove_noise_and_smooth(file_name):
    img = cv2.imread(file_name, 0)
    filtered = cv2.adaptiveThreshold(img.astype(np.uint8), 255, cv2.ADAPTIVE_THRESH_MEAN_C, cv2.THRESH_BINARY, 41,
                                     3)
    kernel = np.ones((1, 1), np.uint8)
    opening = cv2.morphologyEx(filtered, cv2.MORPH_OPEN, kernel)
    closing = cv2.morphologyEx(opening, cv2.MORPH_CLOSE, kernel)
    img = image_smoothening(img)
    or_image = cv2.bitwise_or(img, closing)
    return or_image

# # noise removal
# def remove_noise(image):
#     return cv2.medianBlur(image, 5)
#
# # thresholding
# def thresholding(image):
#     return cv2.threshold(image, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)[1]
#
# # dilation
# def dilate(image):
#     kernel = np.ones((5, 5), np.uint8)
#     return cv2.dilate(image, kernel, iterations=1)
#
# # erosion
# def erode(image):
#     kernel = np.ones((5, 5), np.uint8)
#     return cv2.erode(image, kernel, iterations=1)
#
# # opening - erosion followed by dilation
# def opening(image):
#     kernel = np.ones((5, 5), np.uint8)
#     return cv2.morphologyEx(image, cv2.MORPH_OPEN, kernel)
#
# # canny edge detection
# def canny(image):
#     return cv2.Canny(image, 100, 200)
#
# # skew correction
# def deskew(image):
#     coords = np.column_stack(np.where(image > 0))
#     angle = cv2.minAreaRect(coords)[-1]
#     if angle < -45:
#         angle = -(90 + angle)
#     else:
#         angle = -angle
#     (h, w) = image.shape[:2]
#     center = (w // 2, h // 2)
#     M = cv2.getRotationMatrix2D(center, angle, 1.0)
#     rotated = cv2.warpAffine(image, M, (w, h), flags=cv2.INTER_CUBIC, borderMode=cv2.BORDER_REPLICATE)
#     return rotated
#
# # template matching
# def match_template(image, template):
#     return cv2.matchTemplate(image, template, cv2.TM_CCOEFF_NORMED)