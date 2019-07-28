const dgram = require('dgram');

class Drone {
    droneHost;
    dronePort;
    
    constructor(droneHost, dronePort) {
        this.droneHost  = droneHost;
        this.dronePort  = dronePort;
        this.socket     = this.getSocket(dronePort)
    }

    start = () => {
        console.log('start');
        this.socket.on("message", this.onMessage);
        this.socket.on("error", this.onError);
        this.socket.on("listening", this.onListening);
    }

    onMessage = (msg) => {
        console.log(`Message from drone: ${msg.toString()}`);
    }

    onError = (err) => {
        console.log(`There was an error: ${err}`);
    }

    onListening = () => {
        console.log("Socket is listening");
    }

    getSocket = (port) => {
        const socket = dgram.createSocket("udp4");
        socket.bind(port);
        return socket;
    }

    sendMessage = async (message) => {
        console.log(this.dronePort, this.droneHost)
        const bufferMessage = new Buffer(message);
        try {
            await this.socket.send(bufferMessage, 0, bufferMessage.length, this.dronePort, this.droneHost);
        } catch(e) {
            throw e.message
        }
    }


    
}


module.exports= Drone;