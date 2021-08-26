const authUtils = require('../utils/auth');

const controllerMethods = {
    login: async (req, res) => {
        const orm = req.app.get('orm'),
              { username, password, rememberMe } = this.props;

        const user = await orm.query('get_user_for_info', {username});
        if(!user) return res.status(401);
        
        const doPasswordsMatch = authUtils.doPasswordsMatch(user.password, password);
        if(!doPasswordsMatch) return res.status(401);

        delete user.password;

        const userPayload = { 
            user, 
            accessToken: authUtils.generateJwtToken(),
            expirationDate: authUtils.generateExpirationDate(rememberMe)
        };
        req.session.user = userPayload;

        return res.json(userPayload);
    },
    register: async (req, res) => {
        const orm = req.app.get('orm'),
              { creatorId, uniqueId, username, photo, firstName, middleName, lastName, information, lkServiceId, lkRoleId } = req.body,
              hashedPassword = await authUtils.hashDefaultPassword();
        
        
        await orm.modify('register_new_user', {creatorId, uniqueId, username, password: hashedPassword, photo, firstName, middleName, lastName, information, lkServiceId, lkRoleId});

        return res.status(201);
    }
};

module.exports = controllerMethods;