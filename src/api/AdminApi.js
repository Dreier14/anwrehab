import * as apiCallCreators from './apiCallCreators';
export default class AdminApi {
    static getDashboardData() {
        return apiCallCreators.get('/admin/dashboard')
                    .then(result => result)
                    .catch(error => error.message);
    }

    static getDeletedEvents() {
        return apiCallCreators.get('/admin/deleted_events')
                    .then(result => result)
                    .catch(error => error.message);
    }

    static getDeletedTestimonials() {
        return apiCallCreators.get('/admin/deleted_testimonials')
                    .then(result => result)
                    .catch(error => error.message);
    }

    static getDeletedUsers() {
        return apiCallCreators.get('/admin/deleted_users')
                    .then(result => result)
                    .catch(error => error.message);
    }
    
    static permanentlyDeleteTestmonial(testimonialId) {
        return apiCallCreators.deleteCall('/admin/deleted_testimonials', testimonialId)
                    .then(result => result)
                    .catch(error => error.message);
    }
    
    static permanentlyDeleteEvent(eventId) {
        return apiCallCreators.deleteCall('/admin/deleted_events/', eventId)
                    .then(result => result)
                    .catch(error => error.message);
    }
    
    static permanentlyDeleteUsers(userId) {
        return apiCallCreators.deleteCall('/admin/deleted_users/', userId)
                    .then(result => result)
                    .catch(error => error.message);
    }
    
    static getNotifications() {
        return new Promise((resolve, reject) => resolve([]));
    }
}