import numpy as np
import cv2


class VideoCamera(object):
    def __init__(self):
        self.video = cv2.VideoCapture("http://192.168.0.4:8081/")

    def __del__(self):
        self.video.release()

    def get_frame(self):
        success, image = self.video.read()
        # We are using Motion JPEG, but OpenCV defaults to capture raw images,
        # so we must encode it into JPEG in order to correctly display the
        # video stream.
        image = cv2.medianBlur(image, 5)

        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

        ret, jpeg = cv2.imencode('.jpg', gray)

        return jpeg.tobytes()
