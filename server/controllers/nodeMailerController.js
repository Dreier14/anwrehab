require( "dotenv" ).config();
const nodemailer = require( 'nodemailer' );
const adminUtils = require('../utils/admin');

module.exports={
    sendMail:( req, res ) =>{
        const { name, email, text } = req.body
        // const db = req.app.get('db');
        console.log('name, email, text', name, email, text)
        let transporter = nodemailer.createTransport({
                service: "gmail",
                auth:{
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
            to:'aquaticnwritingrehab@gmail.com',
            subject:'༜ Tips< Additions or User Requests ༜',
            text: name + ' ' + email + ' ' + text,
        }

        transporter.sendMail( message, ( err, info ) => {
            if( err ){
                console.log(err);
              
            }
            else{
               res.json({name: name, text: text, email: email})
                console.log( "Message Sent", info );
            }
            
        })
        
    },
    sendSetPassword: async ({email, username, name, id}) => {

        let transporter = nodemailer.createTransport({
            service: "gmail",
            port: 465,
            secure: true,
            auth:{
                user: process.env.NODE_MAILER_EMAIL,
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
        
        const clientSideUrl = adminUtils.isOnDevelopment ? process.env.DEV_URL : process.env.PROD_URL;
        let message = {
            from: process.env.NODE_MAILER_EMAIL,
            to: adminUtils.isOnDevelopment ?  process.env.NODE_MAILER_EMAIL : email,
            subject: `Welcome ${name}!`,
            text: `Welcome ${name}!`,
            html: ` 
                    <html>
                        <head>
                            <meta charset="utf-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                            <meta name="theme-color" content="#000000">
                            <!-- Latest compiled and minified CSS -->
                            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">

                            <!-- Optional theme -->
                            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css" integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossorigin="anonymous">
                        </head>
                        <body>
                            <!-- Latest compiled and minified JavaScript -->
                            <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
                            <div>
                                <h2>Welcome ${name}</h2>
                                <h3>Please set your password</h3>
                                <div>
                                    <a href="${clientSideUrl + '/set_password/' + id}" target="_blank">
                                        Click Me!
                                    </a>
                                </div>
                            </div>
                        </body>
                    </html>`,
        }

        const info = await transporter.sendMail( message);
    }
}   