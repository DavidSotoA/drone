
class Drone {
    client;
    droneHost;
    dronePort;
    
    constructor(client, droneHost, dronePort) {
        this.client     = client;
        this.droneHost  = droneHost;
        this.dronePort  = dronePort;
    }

    sendMessage = (message) => {
        const bufferMessage = new Buffer(message);
        this.client.send(bufferMessage, 
                         0,
                         bufferMessage.length,
                         this.dronePort,
                         this.droneHost,
                         function(err, bytes) {
            if (err) throw err;
            // client.close();
          });
    }

    
}


module.exports= Drone;