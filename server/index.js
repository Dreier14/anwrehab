require('dotenv').config()
const express = require( 'express' );
const path = require('path');
const session = require( 'express-session' );
const app = express();
const massive = require( 'massive' );
const bodyParser = require( 'body-parser' );
const sM =require('./controllers/nodeMailerController'); 
const therapists = require('./controllers/therapistsController');
const tests = require('./controllers/testimonialsController');

const {APP_PORT, DB_HOST, DB_PORT, DB, DB_USER, DB_PASS} = process.env

app.use(express.static(path.join(__dirname, '/../build')));

app.use(express.json());

app.use(bodyParser.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
      maxAge: 60 * 60 * 60 * 24 * 14
  }
}))

massive({
  host: DB_HOST,
  database: DB,
  user: DB_USER,
  password: DB_PASS,
  port:DB_PORT,
  ssl: true
}).then(db =>{
  app.set('db',db);
}).catch(err => console.log('Connection error -------------', err));

/**************TESTIMONIAL DATA********************************/
app.get('/api/getTests', tests.getTestamonials);

/*************INFO ON EMPLOYEES ENDPOINT***********************/
app.get('/api/getInfo', therapists.getTherapistData);

/*********Node Mailer Endpoint ***********************/
app.post('/api/sendmail', sM.sendMail);


app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})


app.listen(APP_PORT, () => {
    console.log(`Hey your server is up and working on port ${APP_PORT}🚀`)
})
