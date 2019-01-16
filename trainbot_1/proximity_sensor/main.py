# imports to be added...
def getdistance(distance, TRIG, ECHO):
    GPIO.output(TRIG, False)
    # print 'Waiting For Sensor To Settle'
    time.sleep(0.05)
    pulse_start = 0
    pulse_end = 0

    GPIO.output(TRIG, True)
    time.sleep(0.00001)
    GPIO.output(TRIG, False)

    while GPIO.input(ECHO) == 0:
        # print 'start', GPIO.input(ECHO)
        pulse_start = time.time()

    while GPIO.input(ECHO) == 1:
        # print 'stop', GPIO.input(ECHO)
        pulse_end = time.time()

    pulse_duration = pulse_end - pulse_start
    distance = pulse_duration * 17150
    distance = round(distance, 2)
    # print 'Distance:',distance,'cm'
    return distance
