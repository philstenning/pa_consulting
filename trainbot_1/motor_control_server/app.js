var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');

server.listen(5000);
// WARNING: app.listen(80) will NOT work here!

app.use(bodyParser.json()); // for parsing application/json

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/api/proximity/', (req, res) => {
    const value = req.body.proximity;
    res.send('working');
    // console.log(value);
    io.sockets.emit('proximity', value);
});
app.post('/api/info/', (req, res) => {
    const bodyData = req.body.proximity;
    res.send(bodyData);
    // console.log(value);
    io.sockets.emit('info', bodyData);
});
app.post('/api/control_train/', (req, res) => {
    const { speed, direction } = req.body;

    res.send({ speed: speed, direction: direction });
    console.log(`{ speed: ${speed}, direction: ${direction} }`);
    io.sockets.emit('train-remote-control', {
        speed: speed,
        direction: direction
    });
});

io.on('connection', client => {
    client.on('subscribeToTimer', interval => {
        console.log('client is subscribing to timer with interval ', interval);
        setInterval(() => {
            client.emit('timer', new Date());
        }, interval);
    });

    client.on('robot-data', data => {
        console.log(data);
        client.emit('proximity', Date());
    });

    client.on('train-control', data => {
        console.log(data);
        // client.emit('proximity', Date());
    });
});
