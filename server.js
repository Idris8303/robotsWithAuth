const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const data = require('./data');

mongoose.connect('mongoDB://localhost:27017/passportfun', {
  useMongoClient: true
});
mongoose.Promise = global.Promise

const app = express();
app.use(express.static('public'));

app.use(session({
   secret: 'aflabajabawikiwoo',
   resave: false,
   saveUninitialized: false
 }));

 app.use(passport.initialize());
 app.use(passport.session());
 require('./passportconfig').configure(passport);


app.use(bodyParser.urlencoded({extended: false}));

app.engine('mustache', mustache());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
app.use(express.static('public'))

app.use(require('./routes/general'));
 app.use(require('./routes/auth'));

app.get('/', function(req, res) {
  console.log(data);
  db.collection('users').find({}).toArray(function(err, results){
    res.render('index',{users: results});
  });
});



app.get('/details/:id',function(req, res){
  db.collection('users').find({id:Number(req.params.id)}).toArray(function(err, results){
    console.log(results);
  res.render('details', results[0]);
  });
});



  // let foundUser = data.users.find(function(user){
  //   return user.id == req.params.id;
  // });
  // res.render('details', foundUser);



let db;

mongoClient.connect('mongodb://localhost:27017/user_directory', function(err, database){
  if(err){
    console.log(err);
  } else {
    db = database;
app.listen(2315, function() {
  console.log('Listening on port 2315.');
    });
  }
});
