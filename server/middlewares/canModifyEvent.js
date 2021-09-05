const authUtils = require('../utils/auth');

module.exports = {
    check: async (req, res, next) => {
        if(await authUtils.isAdmin(req)) {
            next();
        } else {
            const { id } = req.session.user, 
                  { therapistId } = req.body,
                  canModifyEvent = id === therapistId;
                
            if(canModifyEvent) next();
            else return res.status(401).json({success: false});
        }
    }
};