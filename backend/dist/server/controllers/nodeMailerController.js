"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
require("dotenv").config();
const nodemailer = require('nodemailer');
const sendMail = (req, res, next) => {
    const { name, email, text } = req.body;
    // const db = req.app.get('db');
    console.log();
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "aquaticnwritingrehab@gmail.com",
            pass: process.env.NODE_MAILER_PASS,
            // clientId: process.env.OAUTH_CLIENT_ID,
            // clientSecret: process.env.OAUTH_CLIENT_SECRET,
            // refreshToken: process.env.OAUTH_REFRESH_TOKEN,
            // accessToken: process.env.OAUTH_ACCESSTOKEN,
            // expires: 1484314697598
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    let message = {
        from: name + ' ' + 'aquaticnwritingrehab@gmail.com',
        to: 'aquaticnwritingrehab@gmail.com',
        subject: '༜ Tips< Additions or User Requests ༜',
        text: name + ' ' + email + ' ' + text,
    };
    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json({ name: name, text: text, email: email });
            console.log("Message Sent", info);
        }
    });
};
exports.sendMail = sendMail;
//# sourceMappingURL=nodeMailerController.js.map