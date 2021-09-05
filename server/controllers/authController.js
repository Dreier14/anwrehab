const moment = require('moment');
const authUtils = require('../utils/auth');
const adminUtils = require('../utils/admin');
const nodemailerController = require('./nodeMailerController');

const controllerMethods = {
    hashPassword: async (req, res) => {
        const { password } = req.body;
        const hashedPassword = await authUtils.hashPassword(password);
        return res.status(200).json({success: true});
    },
    getUserSession: async (req, res) => {
        const { info } = req.session.user;
        return res.status(200).json(info);
    },
    logout: async (req, res) => {
        req.session.destroy();
        return res.status(200).json({success: true});
    },
    login: async (req, res) => {
        const orm = req.app.get('orm'),
              { username, password, rememberMe, location } = req.body;

        const user = await orm.query(adminUtils.folders.users, 'get_user_for_login', {username});
        if(!user || !user.length) return res.status(401).json({success: false});
        
        const doPasswordsMatch = await authUtils.doPasswordsMatch(user[0].password, password);
        if(!doPasswordsMatch) return res.status(401);

        delete user[0].password;

        const userPayload = { 
            info: user[0], 
            expirationDate: authUtils.generateExpirationDate(rememberMe)
        };

        req.session.user = !userPayload ? {} : userPayload;

        req.session.save();

        return res.status(200).json({...req.session.user, sessionId: req.session.id});
    },
    register: async (req, res) => {
        const orm = req.app.get('orm'),
              { creatorId, uniqueId, username, email, photo, firstName, middleName, lastName, information, lkServiceId, lkRoleId } = req.body,
              setPasswordToken = await authUtils.generateSetPasswordToken({ creatorId, uniqueId, username, photo, firstName, middleName, lastName, information, lkServiceId, lkRoleId });
        let newlyCreatedUserId;
        
        req.session.save();
        newlyCreatedUserId = await orm.modify(
                                                adminUtils.folders.users, 
                                                'register_new_user', 
                                                {
                                                    creatorId, 
                                                    uniqueId, 
                                                    username,
                                                    email,
                                                    photo, 
                                                    firstName, 
                                                    middleName, 
                                                    lastName, 
                                                    information, 
                                                    lkServiceId, 
                                                    lkRoleId, 
                                                    setPasswordToken: setPasswordToken,
                                                    setPasswordTokenExpirationDate: moment().add('24', 'hour').toDate()
                                                });

        await nodemailerController.sendSetPassword({username, name: `${firstName} ${lastName}`, email, id: Number(newlyCreatedUserId[0].currval) });

        return res.status(201).json({success: true});
    }
};

module.exports = controllerMethods;