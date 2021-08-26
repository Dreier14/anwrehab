const e = require('express');
const authUtils = require('../utils/auth');

const controllerMethods = {
    getEvents: async (req, res) => {
        const orm = req.app.get('orm'),
              { id } = req.session.user;
        let events;
        
        if(authUtils.isAdmin(req)) {
            events = await orm.query('get_all_events');
        } else {
            events = await orm.query('get_all_events_by_user_id', { userId: id });
        }

        return res.json({ events });
    },
    createEvent: async (req, res) => {
        const orm = req.app.get('orm'),
              { id } = req.session.user,
              { description, eventForm, eventTime, lkEventTypeId, lkEventStatusId, therapistId } = req.body;
        if(authUtils.isAdmin(req)) 
            await orm.modify('create_event', { description, eventForm, eventTime, lkEventTypeId, lkEventStatusId, therapistId, createdBy: id  });
        else
            await orm.modify('create_event', { description, eventForm, eventTime, lkEventTypeId, lkEventStatusId, therapistId: id, createdBy: id });

        return res.json({success: true});
    },
    updateEvent: async (req, res) => {
        const orm = req.app.get('orm'),
              { id } = req.session.user,
              { description, eventTime, lkEventTypeId, lkEventStatusId, therapistId } = req.body,
              { event_id } = req.params;
        
        await orm.modify('update_event', { description, eventTime, lkEventTypeId, lkEventStatusId, therapistId, modifiedBy: id, eventId: event_id  });
        
        return res.json({success: true});
    },
    deleteEvent: async (req, res) => {
        const orm = req.app.get('orm'),
              { id } = req.session.user,
              { event_id } = req.params;
        
        await orm.modify('delete_event', { eventId: event_id, deletedBy: id });
        
        return res.json({success: true});
    }
};

module.exports = controllerMethods;