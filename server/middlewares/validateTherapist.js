module.exports = {
    check: async (req, res, next) => {
        const { username, photo, firstName, middleName, lastName, information, password, lkServiceId } = req.body, 
              newTherapistValues = Object.values({ username, photo, firstName, middleName, lastName, information, password, lkServiceId }),
              isInvalidTherapist = newTherapistValues.some(val => !val);
        
        if(isInvalidTherapist) return res.status(400);
        
        next();
    }
};