// a callback is a function called some other time later
// typically done for async io, where we don't know when io finishes
// so callback is used so that some functionality can be performed
// after io
// in node: your code runs in a single process
// but: all io is done async (multiple io can happen at once, you
// don't know when it'll finish.... your code can while io occurs
// in background

const net = require('net');


class EchoServer {
  constructor(port, host, name) {
    this.port = port;
    this.host = host;
    this.name = name;
    // this.server = net.createServer((s) => {this.handleConnect(s)});
    // bind is a method on function
    // where you can set what "this" is
    // along with fixing arguments
    // this.server = net.createServer(this.handleConnect.bind(this, 'hi there!'));
    this.server = net.createServer((s) => {this.handleConnect('hi there!', s)});
    // this.server = net.createServer((s) => {this.handleConnect(s)});
  }

  handleConnect(msg, sock) {
    console.log('someone connected');
    sock.write(msg + ' ' + this.name);
    // sock.on('data', (d) => {handleData(sock, d)})
  }

  /*
  handleData(sock, data) {
    sock.write('thank your 4 your data ' + data);
  }
  */

  listen() {
    this.server.listen(this.port, this.host);
  }
}

const s = new EchoServer(3000, '127.0.0.1', 'ECHO SERVER FTW!!!!');
s.listen();





/*
const obj = {x: 'foo'};
obj.f = () => {console.log(this.x)}
*/









