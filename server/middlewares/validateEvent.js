
module.exports = { 
    check: async (req, res, next) => {
        const { description, eventTime, lkEventTypeId, lkEventStatusId, therapistId } = req.body, 
              newEventValues = Object.values({ description, eventTime, lkEventTypeId, lkEventStatusId, therapistId }),
              isInvalidEvent = newEventValues.some(val => !val);
        
        if(isInvalidEvent) return res.status(400);
        
        next();
    }
};