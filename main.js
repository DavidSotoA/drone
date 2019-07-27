const dgram = require('dgram');
const Drone = require('./Drone')
const client = dgram.createSocket('udp4');

const drone = new Drone(client, 8889, '192.168.10.1')