const authUtils = require('../utils/auth');

module.exports={
    check: function(req, res, next) {
        if(authUtils.isAdmin(req)) return res.status(500);
        return next();
    }
};