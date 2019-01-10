# review

* x 18 x callbacks / async
* x 14 x bind
* x 6 x net modules and connect, etc.

* x all x hof
* x all - 1 x middleware
* x 15 x prototypes
* 9 x hoisting

## Express is a bunch of functions

* each functions a req and res object
* each function has the opportunity to add to the req
* each function has the opportunity to add to the res
* each function has the opportunity to end the request / response cycle
  ...by sending back a response
 
## Routes

app.get
app.post
... add functions to your available routes / paths
typically, you match on method and path... you get a functions...
that's what gets called

## middleware

just functions
get called before your route(s)
they can send back a response
or call next to go to the next function (in your middleware stack or...
... in your route handlers)

function middleware(req, res, next) <--- next is the next function to
be called









