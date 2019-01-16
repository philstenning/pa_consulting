import json
import time
import threading
import socketio
sio = socketio.Client()


class MotorController(threading.Thread):
    message = 'not running'
    direction = 'forwards'
    current_speed = 0
    requested_speed = 0
    ramp_speed = 1

    def __init__(self):
        super().__init__()
        self.running = True

    def run(self):
        while self.running:
            pass
            ##########################
            # code for controller here
            ##########################
            time.sleep(.5)
            print('Motor speed: {} direction: {} '.format(
                self.requested_speed, self.direction))

    def stop_running(self):
        self.running = False
        self.requested_speed = 0
        # Turn off motors.

    def start_running(self):
        self.running = True

    def ramp_speed(self, interval):
        self.ramp_speed = interval

    def set_message(self, message):
        self.message = message

    def set_speed(self, speed):
        self.requested_speed = speed

    def set_direction(self, direction):
        self.direction = direction


# create a new  MotorController to use
Motor = MotorController()
Motor.start()


def motor_control(jsondata):

    data = json.loads(jsondata)
    # print('dir: {}  speed: {}'.format(data['direction'], data['speed']))

    Motor.set_speed(int(data['speed']))
    Motor.set_direction(data['direction'])


@sio.on('connect')
def on_connect():
    print('connection established')


@sio.on('movement-control')
def on_movement_control(data):
    motor_control(data)


@sio.on('ping')  # we have connected. now send data about ourself
def on_con(data):
    # print('our serverId: ', data)
    sio.emit('ping', {'id': data,  'device': 'motor service'})


@sio.on('disconnect')
def on_disconnect():
    print('disconnected from server')
    # we have no connection, so wait 10 seconds and throw exception
    # to force a restart.
    time.sleep(10)
    raise Exception("Restart server connection lost")


sio.connect('http://192.168.0.10:5001')

sio.wait()
#  anything here won't get executed.!!!
