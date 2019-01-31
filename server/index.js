require( 'dotenv' ).config();
const path = require('path');
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const massive = require( 'massive' );
const sM =require('./controllers/nodeMailerController'); 
const photo = require('./controllers/photoController');
const pic = require('./controllers/pictureController');
const tests = require('./controllers/testimonialsController');

const PORT = 3400;

const app = express();

app.use( express.static( `${__dirname}/../build` ) );

app.use(bodyParser.json());


massive(process.env.CONNECTION_STRING).then(db =>{
    app.set('db',db);
    
}).catch(err => console.log('Connection error -------------', err));

/**************TESTIMONIAL DATA********************************/
app.get('/api/getTests', tests.getTestamonials);

/*************PICTURE DATA ************************************/
app.get('/api/getPics', pic.getPictureData);

/*************INFO ON EMPLOYEES ENDPOINT***********************/
app.get('/api/getInfo', photo.getPhotoData);

/*********Node Mailer Endpoint ***********************/
app.post('/api/sendmail', sM.sendMail);


app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

app.listen(PORT, () => {
    console.log(`Hey your server is up and working on port ${PORT}🚀`)
})
