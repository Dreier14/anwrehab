const argon2 = require('argon2');
const moment = require('moment');
const adminUtils = require('../utils/admin');
/**
 * Using argon2 for hashing passwords.
 * https://www.npmjs.com/package/argon2
 * https://www.reddit.com/r/crypto/comments/hvbgt7/alternatives_to_bcrypt/
**/


module.exports={
    hashPassword: async (password) => {
        const hashedPassword = await argon2.hash(password);
        return hashedPassword;
    },
    generateSetPasswordToken: async (newUser) => {
        const setPasswordToken = await argon2.hash(JSON.stringify(newUser));
        return setPasswordToken;
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
        const { id } = req.session.user.info,
              orm = req.app.get('orm');

        const userRole = await orm.query(adminUtils.folders.users, 'get_role_based_on_user_id', {userId: id})[0];
        
        return !this.authRoles.some(role => userRole === role);
    }
};