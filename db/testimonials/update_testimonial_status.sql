update testimonials
set lk_testimonial_status_id = ${lkTestimonialStatusId},
    modified_by = ${modifiedBy},
    modified_datetime = now()
where id = ${testimonialId};