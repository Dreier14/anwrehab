require('dotenv').config();
const express = require( 'express' );
const path = require('path');
const session = require( 'express-session' );
const app = express();
const massive = require( 'massive' );
const bodyParser = require( 'body-parser' );
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
const validateEvent = require('./middlewares/validateEvent');
const validateTherapist = require('./middlewares/validateTherapist');
/** Utilities */
const endpoints = require('./endpoints');
const { Orm } = require("./orm");

const {APP_PORT, DB_HOST, DB_PORT, DB, DB_USER, DB_PASS, SESSION_SECRET} = process.env

app.use( express.static( `${__dirname}/../build` ) );

app.use(express.json());

app.use(bodyParser.json());

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 60 * 60 * 24 * 14
  }
}))


setTimeout(
  () => {
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

    /*************AUTH ENDPOINT***********************/
    app.post(endpoints.LOGIN, authController.login);
    app.post(endpoints.REGISTER, checkIfUserIsLoggedIn.check, checkIfUserIsAdmin.check, authController.register);

    /**************TESTIMONIAL ENDPOINTS********************************/
    app.get(endpoints.GET_TESTIMONIALS, testimonialController.getTestimonials);
    app.post(endpoints.CREATE_TESTIMONIALS, checkIfUserIsLoggedIn.check, testimonialController.createTestimonials);
    app.put(endpoints.UPDATE_TESTIMONIALS, checkIfUserIsLoggedIn.check, checkIfUserIsAdmin.check, testimonialController.updateTestimonials);
    app.delete(endpoints.DELETE_TESTIMONIALS, checkIfUserIsLoggedIn.check, checkIfUserIsAdmin.check, testimonialController.deleteTestimonials);
    
    /*************THERAPISTS ENDPOINTS***********************/
    app.get(endpoints.GET_THERAPISTS, therapistsController.getTherapistData);
    app.put(endpoints.UPDATE_THERAPISTS, checkIfUserIsLoggedIn.check, checkIfUserIsAdmin.check, validateTherapist.check, therapistsController.updateTherapists);
    app.delete(endpoints.DELETE_THERAPISTS, checkIfUserIsLoggedIn.check, checkIfUserIsAdmin.check, therapistsController.deleteTherapists);
    
    /*************ADMIN ENDPOINTs***********************/
    app.get(endpoints.GET_EVENTS, checkIfUserIsLoggedIn.check,  eventController.getEvents);
    app.post(endpoints.CREATE_EVENT, checkIfUserIsLoggedIn.check, validateEvent.check, eventController.createEvent);
    app.put(endpoints.UPDATE_EVENT, checkIfUserIsLoggedIn.check, canModifyEvent.check, validateEvent.check, eventController.updateEvent);
    app.delete(endpoints.DELETE_EVENT, checkIfUserIsLoggedIn.check, canModifyEvent.check, validateEvent.check, eventController.deleteEvent);
    app.patch(endpoints.UPDATE_EVENT_STATUS, checkIfUserIsLoggedIn.check, canModifyEvent.check, adminController.updateEventStatus);
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