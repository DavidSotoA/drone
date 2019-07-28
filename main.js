const Drone = require('./Drone')

function onKeyDown(event) {
    var key = event.keyCode || event.which;
    var keychar = String.fromCharCode(key);
    if (document.readyState === 'complete') {
        drone.sendMessage('command')
    }
    
}

const drone = new Drone(8889, '192.168.10.1')
drone.start()



