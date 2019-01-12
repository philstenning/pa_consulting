import openSocket from 'socket.io-client';
const socket = openSocket('http://192.168.0.4:5000');

function subscribeToTimer(cb) {
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('subscribeToTimer', 1000);
}

function sendData() {
    socket.emit('robot-data', { it: 'worked' });
}
function sendDataToControlTrain(speed, direction) {
    socket.emit('train-control', {
        speed: Number(speed),
        direction: direction
    });
}

function subscribeToProximitySensor(cb) {
    socket.on('proximity', data => {
        console.log(data);
        cb(null, data);
    });
}
function subscribeToTrainRemoteControl(cb) {
    socket.on('train-remote-control', data => {
        cb(null, data);
    });
}
function subscribeToInfo(cb) {
    socket.on('info', data => {
        cb(null, data);
    });
}

export {
    subscribeToTimer,
    sendData,
    subscribeToProximitySensor,
    subscribeToTrainRemoteControl,
    sendDataToControlTrain,
    subscribeToInfo
};
