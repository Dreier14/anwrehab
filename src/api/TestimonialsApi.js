import axios from 'axios';
import { server } from '../constants/index';

export default class TestimonialApi {
    static getTestimonials() {
        return axios.get(server + '/testimonials')
                    .then(res => res.data.testimonials)
                    .catch(error => error.message);
    }
    
    static createTestimonial(testimonialForm) {
        return axios.post(server + '/testimonials', testimonialForm)
                    .then(res => res.data.success)
                    .catch(error => error.message);
    }
    
    static updateTestimonial(testimonialId, testimonialForm) {
        return axios.put(server + '/testimonials/' + testimonialId, testimonialForm)
                    .then(res => res.data.success)
                    .catch(error => error.message);
    }
    
    static deleteTestimonial(testimonialId) {
        return axios.delete(server + '/testimonials/' + testimonialId)
                    .then(res => res.data.success)
                    .catch(error => error.message);
    }

    static updateTestimonialStatus(testimonialId, testimonialStatusId) {
        return axios.patch(server + '/testimonial_status/' + testimonialId, { testimonialStatusId })
                    .then(res => res.data.success)
                    .catch(error => error.message);
    }
}