INSERT INTO testimonials
(
    user_id,
    name,
    services_provided,
    experience,
    lk_testimonial_status_id,
    important_fl,
    created_by,
    created_datetime
)
values
(
    ${userId},
    ${name},
    ${servicesProvided},
    ${experience},
    ${lkTestimonialStatusId},
    ${importantFl},
    ${createdBy},
    now()
);