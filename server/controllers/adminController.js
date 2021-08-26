

const controllerMethods = {
    updateEventStatus: async (req, res) => {
        const orm = req.app.get('orm'),
              { id } = req.session.user,
              { event_id } = req.params,
              { lkEventStatusId } = req.body;

        await orm.modify('update_event_status', { lkEventStatusId, eventId: event_id, modifiedBy: id });

        return res.json({ success: true });
    }
};

module.exports = controllerMethods;