// net module - makes tcp/ip servers and clients

const net = require('net');
// callback is only arg, and callback is called
// only when client connects!!!!



function handleConnect(serverName, sock) {
  sock.write('you are connected to ' + serverName);
  sock.on('data', (data) => {
    console.log(data); 
  });
}

const server = net.createServer(handleConnect.bind(null, 'foo'));
const server = net.createServer((sock) => handleConnect('foo', sock));


console.log('before server')
server.listen(3000, '127.0.0.1');
console.log('after started');

/*
 * what's this
 *
 * 1. global variable when function is invoked like a regular function
 * f()   someFunct(callback)
 *
 * 2. the instance that the method is called on when method is called
 *
 * 3. call/apply/bind
 *
 * 4. whatever this was in context when arrow function is created
 *
 * 5. blank object when function is invoked as a constructor
 *
 */

/*
prototype - the object that you look to if you don't have that property
prototype chain - a bunch of linked objects that look to each other as a search for a prop occurs

typically... last object in prototype chain is Object.prototype whose prototype is null

.prototype ... is not how you get the prototype of an objects

*/

function Request(s) {
  // this = {}
  this.method = method;
  this.headers = {};
  // return this
  this.set = function() {...}
}

// the [[prototype]] of every instance created by
// Request constructor
Request.prototype = {
  set: function(header, val) {
    this.headers[header] = val; 
  }
};
const req = new Request('GET /foo?bar=baz HTTP/1.1');




function Person(name) {
  this.name = name;
}

Person.protoype.eat = function(food) {
  console.log(name, 'eats', food);
}




function Student(name, netid) {
  // this is created here as
  // this = {}
  // (kind of like calling super)
  Person.call(this, name);
}

Student.prototype = Object.create(Person.prototype);
// X Student.prototype = new Person('joe');
// X Student.prototype = Person.prototype;
// X Student.prototype = OBjecdt.create(Person);



class Sprite {
  constructor(x, y) {
    .... 
  }

  move() {
    .... 
  }
}

class Player extends Sprite {
  ....

}


const reader = new HeaderReader('this is the header', 'foo.txt');
reader.read()
// this is the header
// [[content of foo.txt]]


class HeaderReader {
  constructor(header, fn) {
    this.header = header; 
    this.fn = fn;
  }

  read() {
    // this out here
    fs.readFile(this.fn, (err, data) => {
      // this does not refer to instance of HeaderReader
      console.log(this.header); 
      console.log(data);
    });
  } 
}
/*
 * typing in url in browser: www.google.com/?q=whatever
 * GET /?q=whatever HTTP/1.1
 * Host: www.google.com
 * User-Agent: mozilla
 *
 * no body!!!!
 *
 * HTTP/1.1 200 OK
 * Content-Type: text/html
 *
 * <!doctype><html>...
 *
 *
 * GET /doodle.gif HTT
 *
 *
 * <form method="GET" action="/foo">
 * <input type="text" name="q">
 *
 * GET /foo?q=whatever+I+typed+in HTTP/1.1
 *
 * <form method="POST" action="/foo">
 * <input type="text" name="q">
 *
 * POST /foo HTTP/1.1
 * Content-Type: form-url-encoded
 *
 * q=whatever+I+type
 */


GET form
<input type="text" name="filterValue">
 ?filterValue=12


POST form
<input type="number" nume="number">

app.get('/', (req, res) => {
  // req.query.filterValue // 12
  const data =  someGlobal.filter((ele) => ele >= req.query.filterValue)
  res.render('form', {data: data});
});

// gives us req.body
// parses the http request body as if it were in the format
// name=value&name2=value2
app.use(express.urlencoded({extended: false}));

app.post('/', (req, res) => {
  someGlobal.push(+req.body.number);

})
















































assume that this exists:

const express = require('express');
const app = express();
app.set('view engine', 'hbs');

//render renders a template {{}} along with layout
// send will send value based on type... 'string' text/html
// send {} will be application/json
// sendFile read from the file system and send content as is
// with correct content type

app.get('/', (req, res) => {
  res.render('');
});

app.listen(3000);


don't use arrows:

// as method
// as event handler
//
class Foo {}

Foo()

























