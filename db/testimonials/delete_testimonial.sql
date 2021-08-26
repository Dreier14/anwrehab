INSERT INTO deleted_testimonials
(
    SELECT 
        id, 
        user_id,
        services_provided, 
        experience,
        now(),
        ${deletedBy}
    from testimonials
    where id = ${testimonialId}
);

DELETE FROM testimonials
where id = ${testimonialId};

