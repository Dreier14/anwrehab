INSERT INTO testimonials
(
    user_id,
    name,
    services_provided,
    experience,
    created_by,
    created_datetime
)
values
(
    ${userId},
    ${name},
    ${servicesProvided},
    ${experience},
    ${createdBy},
    now()
);