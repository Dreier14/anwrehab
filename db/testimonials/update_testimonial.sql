update testimonials
set user_id = ${userId},
    name = ${name},
    services_provided = ${servicesProvided},
    experience = ${experience},
    lk_testimonial_status_id = ${lkTestimonialStatusId},
    important_fl = ${importantFl},
    modified_by = ${modifiedBy},
    modified_datetime = now()
where id = ${testimonialId};