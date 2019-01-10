// this is built-in
// meant for:
// * creating tcp/ip clients
// * creating tcp/ip servers
//
// there's no protocol enforced: you just use some other protocol on top of it
// * for example.... smtp, ftp, whatever
// * for our case, we'll start off with an 'echo server'
// * ....create our own http server
//
// node actually has an http server... we're not using it
// (in the future, express, will use use node's http module under the hood)
//
// to make a server:
// (check the node docs for full docs)
// * net.createServer(handleConnect)
// * handleConnect is a callback.... fn(sock)
//    * sock obj represents the connected client, it has methods like:
//      * on(eventName, handleEventCallback)
//        * eventName - String - 'data', 'close' (read the docs 4 more!!!)
//        * handleEventCallback(data) - function - called when event ^^^^^^ happens
//          * data - Bytes object (binary....) ... data sent by client
//      * write(s) - writes s to client (sends data)
//      * end - tells client connection will close
//    * this sock is supplied to us when our callback is called
//    * this particular callback is called when someone connects
// * returns a server object
//    * (you can call .listen... to bind to a port and host)
//
//    data
const net = require('net');
// destructuring, creates two variables
const [PORT, HOSTNAME] = [3000, '127.0.0.1'];

function handleConnect(sock) {
  console.log(sock.remoteAddress, 'connected!');
  sock.on('data', (binaryData) => {
    // Buffer object is passed in as argument....
    // contains data sent from client
    // console.log(binaryData.constructor, binaryData + '');
    const s = binaryData + '';
    console.log(s);
    // tell client conn is closing...l
    sock.write(s);
    sock.end();
  });
  // sock.write('hi there!');
}

const server = net.createServer(handleConnect);

server.listen(PORT, HOSTNAME);



















