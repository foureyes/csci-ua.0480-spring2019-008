// 0480 001
// joe versoza
//
// feedback on tutoring
// feedback on hw
// what do u like?
// what could be improved?
// too easy? too difficult?



const net = require('net');

class EchoServer {

  constructor(port, host, name) {
    this.port = port;
    this.host = host;
    this.name = name;
    this.server = net.createServer((s) => {this.handleConnect('welcome to', s)});
    this.server = net.createServer(this.handleConnect.bind(this, 'welcome to')); // function with
    // 1 argument with this bound to the this in the constructor
    // this.server = net.createServer(this.handleConnect.bind(this, ));
  }

  handleConnect(msg, sock) {
    console.log('client connected');
    sock.write(msg + ' ' + this.name);
  }

  listen() {
    this.server.listen(this.port, this.host);
  }

}

const s = new EchoServer(3000, '127.0.0.1', 'ECHO SERVER FTW!!!!');
s.listen();
