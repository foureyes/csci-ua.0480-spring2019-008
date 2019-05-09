not on exam
====
* ssl/tls
* socket.io *rooms*
* webpack 
* mongoose validation
* passport
* fetch (you can use it if u want)

will likely be on exam 
=====
* sessions, cookies
* mongodb
* mongoose
* css
* DOM manipulation
* events
* timers
* ajax (xhr + json, cors, sop)
* react
* socket.io
* authentication <-- conceptual
* (among other topics, of course!)

topics covered in class review
=====

* X 15 x ajax in general
* X 20 x cors, sop
* x 12 x promises
* x 12 x comparison of realtime web app tech
	* vs websockets
* x 10 x timers
* x 15 x react
* 8 x css - position
* 8 x cookie

AJAX
=====
http

* request 
* response

when we submit a form, click on a link... a new request, and a new page is sent back

* introduces some lag

make request in the background and update instead of loading an entirely new page

AJAX workflow
-----

1. make a background request - xmlhttprequest, fetch
2. some server that responds to that - express (responds with json, for example)
3. modify the ui - JavaScript + DOM 

when you make a background request you must include:
-----

1. the method
2. the url
3. what to do when request succeeds
4. what to do when it fails
5. ... optionally... have some data (if there's a body... you may need content type)
	* GET - add data to url via query string parameters
	* POST - body, you must specify content type
		* x www url form encoded name=value&name2=value2
		* json -....
6. send the request


using xmlhttprequest
-----

1. new xmlhttprequest
2. open(method, url)
3. add event listener load
4. add event listener error
5. make url has query string params if GET ... POST... add body in send method... as well as add content type header
6. send


using fetch
-----

fetch(options)
.then
.catch

why SOP?
-----

* if your client already has an active session somewhere... that remains active for other requests
	* if you're another site... that site can request a page on another site that you're already logged into
	* it can read some private data
* another issue... post request where request is not blocked outright
	1. implement sop on the browser
	2. add a unique token to each form per display of form (csrf token)

SOP
-----

* rules governing requests made when a request is for a different origin than the page that the client is on
	* same origin: same protocol, domain, port
	* in the case of background requests via js....
		* in some cases request can be made, but response cannot be read by client
		* some request don't actually happen / "pre flight" request has to happen
* implemented by client

CORS
-----

* implemented by server (running the api)
* sends headers to client saying it's ok for cross origin resources to be shared

proxy to an existing api
-----

* make requests from your server to some api (no CORS headers)
* set up an API on your own... or just use data directly

TARGET API  <------> EXPRESS <-------> Frontend


websockets, socket.io
-----

* websockets... different protocol allows 2 -way communication btwn server and client
* socket.io is implementation of websockets protocol (fallback to long polling, etc.)

socket.io api, is simple...
-----

* on(event name, callback) where callback is passed data as argument
* emit(event name, data)


socket.io server
-----

io.on.... ('connection', function(socket))
	console.log(socket.id)
	socket.on
	socket.emit


socket.io client
-----
socket = io()


react
-----
class
constructor
	this.state = {}

this.setState({})
parent component that has all state
child components that are given data via props

render
returns ReactElement

return React.createElement('h1')
return <h1></h1>
























