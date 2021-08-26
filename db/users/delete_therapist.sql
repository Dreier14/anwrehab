INSERT INTO deleted_users 
(
    SELECT
        id,
        unique_id,
        username,
        photo,
        first_name,
        middle_name,
        last_name,
        information,
        password,
        lk_service_id,
        lk_role_id,
        now(),
        ${deletedBy}
    from users
    where id = ${therapistId}
);

delete from users
where id = ${therapistId};