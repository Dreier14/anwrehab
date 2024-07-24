require('dotenv').config()
import express, { Express } from "express";
const path = require('path');
const sM =require('./controllers/nodeMailerController'); 
const therapists = require('./controllers/therapistsController');
const tests = require('./controllers/testimonialsController');

const {APP_PORT, DB_HOST, DB_PORT, DB, DB_USER, DB_PASS} = process.env

const app: Express = express();

// massive({
//   host: DB_HOST,
//   database: DB,
//   user: DB_USER,
//   password: DB_PASS,
//   port:DB_PORT,
//   ssl: true
// }).then(db =>{
//   app.set('db',db);
// }).catch((err: any)=> console.log('Connection error -------------', err));

/**************TESTIMONIAL DATA********************************/
app.get('/api/getTests', tests.getTestamonials);

/*************INFO ON EMPLOYEES ENDPOINT***********************/
app.get('/api/getInfo', therapists.getTherapistData);

/*********Node Mailer Endpoint ***********************/
// app.post('/api/sendmail', sM.sendMail);


app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})


app.listen(APP_PORT, () => {
    console.log(`Hey your server is up and working on port ${APP_PORT}🚀`)
})

export default app;
