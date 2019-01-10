/*
 * 1. same thing as sample (i'll post), w some minor mods
 * 2. wrap in obj Request, Response, App ... will allow you to add paths
 * 3. 
 */

// http and tcp/ip are difference things?
// * http - application layer protocol`
//    * protocol for the web
// * tcp/ip stack - transport layer, internet layer, physical layer protocols
//    * protocol for the internet
// Learn about HTTP by building an http server
// we'll learn enough about net module... so that we can build http on top of it
// net module is a built-in node module for creating tcp/ip servers and clients 
// we have to build http on top of this!

// net module.... has a function called:
// const myServer = net.createServer(callback)
// * function that creates (and returns) a server object (represents tcp/ip server)
// * callback is called when _something_ connects to our server object
// * callback(sock)
//    * sock represents the connected client
//    * sock has methods that you can use on it...
//      * on(event, callback) - allows you to react to a specific event
//        * event - String - 'close', 'data', etc.
//        * callback - gets called when event is triggered
//          * if event is data, then argument will be binaryData sent from client
//      * write(data) - write data to client
//      * end() - tell client connection will be closed
// * server object has a method called listen
//    * listen... bind to specific port and hostname
//    * port (application), hostname (ip address)
const net = require('net');
// fs.readFile(fileName, callback)
// err, ...
// callback(err, data that was read)
const fs = require('fs');
const path = require('path');
// path.join('foo', 'bar', 'baz')
// __dirname <--- directory that script is running in 




// destructuring
const [PORT, HOSTNAME] = [3000, '127.0.0.1'];

const HTTP_STATUS_DESC = {
  200: 'OK',
  404: 'NOT FOUND',
  500: 'SERVER ERROR'
};

function makeResponse(status, contentType, body) {
  let response = `HTTP/1.1 ${status} ${HTTP_STATUS_DESC[status]}\r\n`;
  response += 'Server: my awesome server\r\n';
  response += `Content-Type: ${contentType}\r\n\r\n`;
  response += body;
  return response
}


function handleRead(sock, err, data) {
  fn, (err, data) => {
    if(err) {
      console.log(err);
      sock.write(makeResponse(500, 'text/plain', 'uh oh!????'));
      sock.end();
    } else {
      sock.write(makeResponse(200, 'text/html', data));
      sock.end();
    }
  }
}
function handleConnect(sock) {
  console.log('connected!');
  
  // sock.write('how r u!?????😮\n');
  sock.on('data', binaryData => {
    const s = '' + binaryData;
    const [method, reqPath, ...doNotUse] = s.split(' ');
    console.log(s);
    if(reqPath === '/harry') {
      const fn = path.join(__dirname, 'public', 'harry.html.foo');
      fs.readFile(handleRead.bind(null, sock));
      fs.readFile((err, data) => {handleRead(sock, err, data)});
    } else if(reqPath === '/mouse') {
      sock.write(makeResponse(200, 'text/html', '<em>mickey mouse</em>'));
      sock.end();
    } else {
      sock.write(makeResponse(404, 'text/plain', 'i do not have wat u want1111!!11'));
      sock.end();
    
    }
  });
}

const server = net.createServer(handleConnect);


server.listen(PORT, HOSTNAME);








