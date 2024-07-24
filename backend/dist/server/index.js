"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path = require('path');
const sM = require('./controllers/nodeMailerController');
const therapists = require('./controllers/therapistsController');
const tests = require('./controllers/testimonialsController');
const { APP_PORT, DB_HOST, DB_PORT, DB, DB_USER, DB_PASS } = process.env;
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: '*',
}), express_1.default.json());
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
app.listen(APP_PORT, () => {
    console.log(`Hey your server is up and working on port ${APP_PORT}🚀`);
});
exports.default = app;
//# sourceMappingURL=index.js.map