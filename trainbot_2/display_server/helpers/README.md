# Proximity Sensor Simulator

This module is used in testing the api on the robot server.

Every interval it posts a json object to the server, this object is a random number
from 1 to 100

The interval time can be changed but will also need to be changed in the UI app because of the css transition used.

To get it running first install [nodejs](https://nodejs.org/en/) and [nodemon](https://nodemon.io/) if you haven't
already done so.

```javascript
npm install -g nodemon
```

Then from this root directory

Install the dependencies:

```javascript
npm install
```

You **Will** now need to change the URI to match that of your server.

now run

```javascript
nodemon; // no need for index.js
```
