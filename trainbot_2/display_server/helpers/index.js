const rp = require('request-promise-native');

const uri = 'http://192.168.0.4:5000/api/proximity';

setInterval(() => {
    value = Math.floor(Math.random() * 100 + 1);

    var options = {
        method: 'POST',
        uri: uri,
        body: { proximity: value },
        json: true
    };

    rp(options)
        .then(res => {
            // console.log(res);
        })
        .catch(err => {
            console.log(
                `error sending data to: ${options.uri} data: ${options.body}`
            );
        });
}, 3000);
