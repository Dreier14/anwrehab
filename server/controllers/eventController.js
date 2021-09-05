const authUtils = require('../utils/auth');
const adminUtils = require('../utils/admin');

const controllerMethods = {
    getEvents: async (req, res) => {
        const orm = req.app.get('orm'),
              { id } = req.session.user.info;
        let events;
        
        if(await authUtils.isAdmin(req)) {
            events = await orm.query(
                adminUtils.folders.events,
                'get_all_events'
            );
        } else {
            events = await orm.query(
                adminUtils.folders.events,
                'get_all_events_by_user_id',
                { userId: id }
            );
        }

        return res.json({ events });
    },
    createEvent: async (req, res) => {
        const orm = req.app.get('orm'),
              { id } = req.session.user.info,
              { description, eventForm, eventTime, recurringInd, lkEventTypeId, lkEventStatusId, therapistId, importantFl } = req.body;
              try {
                  if(await authUtils.isAdmin(req)) 
                      await orm.modify(
                          adminUtils.folders.events,
                          'create_event', 
                          { description, eventForm, eventTime, recurringInd, lkEventTypeId, lkEventStatusId, therapistId, importantFl, createdBy: id  }
                      );
                  else
                      await orm.modify(
                          adminUtils.folders.events,
                          'create_event',
                          { description, eventForm, eventTime, recurringInd, lkEventTypeId, lkEventStatusId, therapistId: id, importantFl, createdBy: id }
                      );

              } catch(error) {
                  console.log(error);
              }

        return res.json({success: true});
    },
    updateEvent: async (req, res) => {
        const orm = req.app.get('orm'),
              { id } = req.session.user.info,
              { description, eventTime, recurringInd, lkEventTypeId, lkEventStatusId, therapistId, importantFl } = req.body,
              { event_id } = req.params;
        
        await orm.modify(
            adminUtils.folders.events,
            'update_event', 
            { description, eventTime, recurringInd, lkEventTypeId, lkEventStatusId, therapistId, importantFl, modifiedBy: id, eventId: event_id  }
        );
        
        return res.json({success: true});
    },
    deleteEvent: async (req, res) => {
        const orm = req.app.get('orm'),
              { id } = req.session.user.info,
              { event_id } = req.params;
        
        await orm.modify(
            adminUtils.folders.events,
            'delete_event', 
            { eventId: event_id, deletedBy: id }
        );
        
        return res.json({success: true});
    }
};

module.exports = controllerMethods;