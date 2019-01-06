# video server

## This is copied from the slack channel and is to be updated!!!

Got the pi zero to stream video to my desktop over wifi and opened it in a python app using open cv. I tried everything to get ffserver and ffmpeg to do the streaming but it just couldn't get it to work, so ended up using motion eye. You can install the motionEye OS if you just want to give it a quick play but if you want to run any other code on the pi at the same time you'll have to install it manually.

1. Get motion eye installed and running then go to the web portal it creates and log in with the username of admin, no password is needed.
2. In the top left-hand window select the camera you want to use.
3. click the advanced settings button and go to the video streaming section and click the streaming URL link this is the HTTP address you'll need for your app.

now copy your address and add it to the following code YOUR_IP_ADDRESS_HERE

````python
import numpy as np
import cv2

cap = cv2.VideoCapture("http://YOUR_IP_ADDRESS_HERE:8081/")
# cap.open('192.168.0.23:8081')
while(True):
    # Capture frame-by-frame
    ret, frame = cap.read()

    # Our operations on the frame come here
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Display the resulting frame
    cv2.imshow('frame',gray)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# When everything done, release the capture
cap.release()
cv2.destroyAllWindows()```
````
