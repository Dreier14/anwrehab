const authUtils = require('../utils/auth');

module.exports={
    check: async function(req, res, next) {
        const isAdmin = await authUtils.isAdmin(req);
        if(!isAdmin) return res.status(500).json({success: false});
        return next();
    }
};