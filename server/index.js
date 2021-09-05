require('dotenv').config();
const express = require( 'express' );
const cors = require('cors');
const path = require('path');
// const redis = require('redis');
const session = require( 'express-session' );
// let RedisStore = require('connect-redis')(session);
// let redisClient = redis.createClient();
const pg = require('pg');
const app = express();
const massive = require( 'massive' );
/** Controllers */
const nodemailerController =require('./controllers/nodeMailerController'); 
const therapistsController = require('./controllers/therapistsController');
const testimonialController = require('./controllers/testimonialsController');
const authController = require('./controllers/authController');
const eventController = require('./controllers/eventController');
const adminController = require('./controllers/adminController');
/** Middlewares */
const checkIfUserIsAdmin = require('./middlewares/checkIfUserIsAdmin');
const checkIfUserIsLoggedIn = require('./middlewares/checkIfUserIsLoggedIn');
const canModifyEvent = require('./middlewares/canModifyEvent');
const canModifyTestimonial = require('./middlewares/canModifyTestimonial');
const validateEvent = require('./middlewares/validateEvent');
const validateTherapist = require('./middlewares/validateTherapist');
/** Utilities */
const endpoints = require('./endpoints');
const { Orm } = require("./orm");

const {APP_PORT, DB_HOST, DB_PORT, DB, DB_USER, DB_PASS, SESSION_SECRET} = process.env

var corsOptions = {
  origin: true,
  credentials: true,
}
app.use(cors(corsOptions));

app.use( express.static( `${__dirname}/../build` ) );

app.use(express.json());

app.use(express.urlencoded({extended: true}));

// const pgPool = new pg.Pool({
//   database: DB,
//   host: DB_HOST,
//   user: DB_USER,
//   password: DB_PASS,
//   ssl: { rejectUnauthorized: false }
// });

massive({
  host: DB_HOST,
  database: DB,
  user: DB_USER,
  password: DB_PASS,
  port: DB_PORT,
  ssl: true
}).then(db =>{
  const orm = new Orm(db);
  app.set('orm', orm);
})
.catch(err => console.log('Connection error -------------', err));

const initializedSession = session({
  // store: new (require('connect-pg-simple')(session))({ pool: pgPool }),
  secret: SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { 
    maxAge: 14 * 24 * 60 * 60 * 1000,
    secure: false
  } // 14 days
  // Insert express-session options here
});

app.use(initializedSession);

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

setTimeout(() => {  
    app.get('/api/get-user-session', authController.getUserSession);
    /*************AUTH ENDPOINT***********************/
    app.post(endpoints.LOGIN, authController.login);
    app.post(endpoints.LOGOUT, authController.logout);
    app.post(endpoints.REGISTER, [checkIfUserIsLoggedIn.check, checkIfUserIsAdmin.check], authController.register);

    /**************TESTIMONIAL ENDPOINTS********************************/
    app.get(endpoints.GET_TESTIMONIALS, testimonialController.getTestimonials);
    app.post(endpoints.CREATE_TESTIMONIALS, [checkIfUserIsLoggedIn.check], testimonialController.createTestimonials);
    app.put(endpoints.UPDATE_TESTIMONIALS, [checkIfUserIsLoggedIn.check, checkIfUserIsAdmin.check], testimonialController.updateTestimonials);
    app.delete(endpoints.DELETE_TESTIMONIALS, [checkIfUserIsLoggedIn.check, checkIfUserIsAdmin.check], testimonialController.deleteTestimonials);
    app.patch(endpoints.UPDATE_TESTIMONIAL_STATUS, [checkIfUserIsLoggedIn.check, canModifyTestimonial.check], adminController.updateTestimonialStatus);
    /*************THERAPISTS ENDPOINTS***********************/
    app.get(endpoints.GET_THERAPISTS, therapistsController.getTherapistData);
    app.put(endpoints.UPDATE_THERAPISTS, [checkIfUserIsLoggedIn.check, checkIfUserIsAdmin.check, validateTherapist.check], therapistsController.updateTherapists);
    app.delete(endpoints.DELETE_THERAPISTS, [checkIfUserIsLoggedIn.check, checkIfUserIsAdmin.check], therapistsController.deleteTherapists);
    
    /*************ADMIN ENDPOINTs***********************/
    app.get(endpoints.DASHBOARD, [checkIfUserIsLoggedIn.check], adminController.getDashboardData);
    app.get(endpoints.GET_EVENTS, [checkIfUserIsLoggedIn.check],  eventController.getEvents);
    app.post(endpoints.CREATE_EVENT, [checkIfUserIsLoggedIn.check, validateEvent.check], eventController.createEvent);
    app.put(endpoints.UPDATE_EVENT, [checkIfUserIsLoggedIn.check, canModifyEvent.check, validateEvent.check], eventController.updateEvent);
    app.delete(endpoints.DELETE_EVENT, [checkIfUserIsLoggedIn.check, canModifyEvent.check], eventController.deleteEvent);
    app.patch(endpoints.UPDATE_EVENT_STATUS, [checkIfUserIsLoggedIn.check, canModifyEvent.check], adminController.updateEventStatus);
    /*************ADMIN GET DELETED ITEMS ENDPOINTs***********************/
    app.get(endpoints.GET_DELETED_TESTIMONIALS, [checkIfUserIsLoggedIn.check, checkIfUserIsAdmin.check], adminController.getDeletedTestimonials);
    app.get(endpoints.GET_DELETED_EVENTS, [checkIfUserIsLoggedIn.check, checkIfUserIsAdmin.check], adminController.getDeletedEvents);
    app.get(endpoints.GET_DELETED_USERS, [checkIfUserIsLoggedIn.check, checkIfUserIsAdmin.check], adminController.getDeletedUsers);
    app.delete(endpoints.PERMANENTLY_DELETE_TESTIMONIAL, [checkIfUserIsLoggedIn.check, checkIfUserIsAdmin.check], adminController.permanentlyDeleteTestimonial);
    app.delete(endpoints.PERMANENTLY_DELETE_EVENT, [checkIfUserIsLoggedIn.check, checkIfUserIsAdmin.check], adminController.permanentlyDeleteEvent);
    app.delete(endpoints.PERMANENTLY_DELETE_USERS, [checkIfUserIsLoggedIn.check, checkIfUserIsAdmin.check], adminController.permanentlyDeleteUser);
    /*********Node Mailer Endpoint ***********************/
    app.post(endpoints.SENDMAIL, nodemailerController.sendMail);
    
    
    // app.get('*', (req, res)=>{
    //   res.sendFile(path.join(__dirname, '../build/index.html'));
    // })
    
    
    app.listen(APP_PORT, () => {
        console.log(`Hey your server is up and working on port ${APP_PORT || 3500}🚀`)
    })

  },
   1000
);


module.exports = { app };