require('./db.js');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const express = require('express');
const app = express();
const argon2 = require('argon2');

const session = require('express-session');

const sessionOptions = { 
    secret: 'secret for signing session id', 
    saveUninitialized: false, 
    resave: false 
};

app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: false }));

app.use(session(sessionOptions));

app.use(function(req, res, next){
  res.locals.username = req.session.username;
  next();
});

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  const {username, password} = req.body;

  // use async await to define asynchronous functions:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 
  // within those functions... instead of using regular promise syntax
  // an await expression can be used to capture the value of a resolved promise
  // using simple variable assignment
  async function register(username, password) {
    try {
      // TODO: this should be a case insenstivie search!
      const found = await User.findOne({username: username});
      if(found === null) {
        // salt is generated for us 
        // salt + password is hashed
        const hash = await argon2.hash(password);

        // salt is stored within the sash (so 
        // don't have to save explicitly
        const u = new User({ username: username, password: hash});

        const result = await u.save();

        // you may want to login immediatly or add to session at this point
        
        res.redirect('/');
      } else {
        console.log('duplicate username'); 
        res.render('register', {error: true});
      }
    } catch(err) {
       console.log(err); 
       res.render('register', {error: true});
    }
  }

  register(username, password)
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const {username, password} = req.body;
  async function login(username, password) {
    try {
      // TODO: this should be a case insenstivie search!
      const user = await User.findOne({username: username})
      const passwordMatch = await argon2.verify(user.password, password);
      if(passwordMatch) {
        req.session.username = user.username;
        res.redirect('/');
      } else {
        console.log('username or password did not match'); 
        res.render('login', {error: true});
      }
    } catch (err) {
       console.log(err); 
       res.render('login', {error: true});
    }
  }
  login(username, password);
});


app.listen(3000);
