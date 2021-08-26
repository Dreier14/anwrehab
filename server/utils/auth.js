const argon2 = require('argon2');
const moment = require('moment');
const jwt = require('express-jwt');
/**
 * Using argon2 for hashing passwords.
 * https://www.npmjs.com/package/argon2
 * https://www.reddit.com/r/crypto/comments/hvbgt7/alternatives_to_bcrypt/
**/
module.exports={
    generateJwtToken: function() {
        return jwt({
            secret: 'shhhhh-secret',
            audience: 'http://localhost:3500/api',
            issuer: 'http://anwrehab',
            algorithms: ['HS256']
        })
    },
    hashPassword: async (req, res) => {
        const password = await argon2.hash(req.body.password);
        return password;
    },
    hashDefaultPassword: async () => {
        const password = await argon2.hash("P@ssw0rd");
        return password;
    },
    generateExpirationDate: (rememberMe) => {
        if(rememberMe) 
            return moment(new Date()).add('1', 'month').utc();
        else
            return moment(new Date()).add('2', 'week').utc();
    },
    doPasswordsMatch: async (hashedPassword, password) => {
        const doPasswordMatchResult = await argon2.verify(hashedPassword, password);
        return doPasswordMatchResult;
    },
    authRoles: ['Owner', 'Office Administrator'],
    isAdmin: async function(req) {
        const { id } = req.session.user,
              orm = req.app.get('orm');

        const userRole = await orm.query('get_role_based_on_user_id', {userId: id});
        
        return !this.authRoles.some(role => userRole === role);
    }
};