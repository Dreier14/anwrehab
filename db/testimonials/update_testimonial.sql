update testimonials
set user_id = ${userId},
    name = ${name},
    services_provided = ${servicesProvided},
    experience = ${experience},
    modified_by = ${modifiedBy},
    modified_datetime = now()
where id = ${testimonialId};