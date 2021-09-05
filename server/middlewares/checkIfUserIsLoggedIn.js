module.exports={
    check: function(req, res, next) {
        if(!req.session.user) return res.status(500).json({success: false});

        return next();
    }
};
