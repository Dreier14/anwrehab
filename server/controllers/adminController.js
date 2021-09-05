const authUtils = require('../utils/auth');
const adminUtils = require('../utils/admin');

const controllerMethods = {
    updateTestimonialStatus: async (req, res) => {
        const orm = req.app.get('orm'),
              { id } = req.session.user.info,
              { testimonial_id } = req.params,
              { lkTestimonialStatusId } = req.body;

        await orm.modify(
            adminUtils.folders.testimonials, 
            'update_testimonial_status', 
            { lkTestimonialStatusId, testimonialId: testimonial_id, modifiedBy: id }
        );

        return res.json({ success: true });
    },
    updateEventStatus: async (req, res) => {
        const orm = req.app.get('orm'),
              { id } = req.session.user.info,
              { event_id } = req.params,
              { lkEventStatusId } = req.body;

        await orm.modify(
            adminUtils.folders.events, 
            'update_event_status', 
            { lkEventStatusId, eventId: event_id, modifiedBy: id }
        );

        return res.json({ success: true });
    },
    getDashboardData: async (req, res) => {
        const orm = req.app.get('orm'),
              { id } = req.session.user.info,
              getAdminInfo = await authUtils.isAdmin(req);
            
        let dbUserInfo, dbEventInfo, dbTestimonialInfo, result;
        try {
            if(getAdminInfo) {
                dbUserInfo = await orm.query(adminUtils.folders.admin,'get_user_dashboard_for_user_admin', { userId: id });
                dbEventInfo = await orm.query(adminUtils.folders.admin,'get_event_dashboard_for_admin');
                dbTestimonialInfo = await orm.query(adminUtils.folders.admin,'get_testimonial_dashboard_for_admin');
            } else {
                dbUserInfo = await orm.query(adminUtils.folders.admin,'get_user_dashboard_for_user', { userId: id });
                dbEventInfo = await orm.query(adminUtils.folders.admin,'get_event_dashboard_for_user', { userId: id });
                dbTestimonialInfo = await orm.query(adminUtils.folders.admin,'get_testimonial_dashboard_for_user', { userId: id });
            }
            result = { 
                userInfo: adminUtils.formatUserInfoForDashboard({ dbUserInfo, isAdmin: getAdminInfo }),
                eventInfo: adminUtils.formatEventInfoForDashboard({ dbEventInfo, isAdmin: getAdminInfo }),
                testimonialInfo: adminUtils.formatTestimonialInfoForDashboard({ dbTestimonialInfo, isAdmin: getAdminInfo })
            };
            res.json({ result });
        } catch(error) {
            console.log("FUCK!!!!!!!!!:", error);
        }

    },
    getDeletedTestimonials: async (req, res) => {
        const orm = req.app.get('orm'),
              testimonials = await orm.query(
                                adminUtils.folders.adminDeleted,
                                'get_all_deleted_testimonials'
                            );

        return res.json({ testimonials });
    },
    getDeletedEvents: async (req, res) => {
        const orm = req.app.get('orm'),
              events = await orm.query(
                            adminUtils.folders.adminDeleted,
                            'get_all_deleted_events'
                        );

        return res.json({ events });
    },
    getDeletedUsers: async (req, res) => {
        const orm = req.app.get('orm'),
              users = await orm.query(
                            adminUtils.folders.adminDeleted,
                            'get_all_deleted_users'
                        );

        return res.json({ users });
    },
    permanentlyDeleteTestimonial: async (req, res) => {
        const orm = req.app.get('orm'),
              { testimonial_id } = req.params;
  
        await orm.modify(
            adminUtils.folders.adminDeleted,
            'permanently_delete_testimonial', 
            { testimonialId: testimonial_id }
        );

        return res.json({success: true});
    },
    permanentlyDeleteEvent: async (req, res) => {
        const orm = req.app.get('orm'),
              { event_id } = req.params;

        await orm.modify(
            adminUtils.folders.adminDeleted,
            'permanently_delete_event', 
            { eventId: event_id }
        );

        return res.json({success: true});
    },
    permanentlyDeleteUser: async (req, res) => {
        const orm = req.app.get('orm'),
              { user_id } = req.params;

        await orm.modify(
            adminUtils.folders.adminDeleted,
            'permanently_delete_user', 
            { userId: user_id }
        );

        return res.json({success: true});
    },
};

module.exports = controllerMethods;