update users
set username = ${username},
    photo = ${photo},
    first_name = ${firstName},
    middle_name = ${middleName},
    last_name = ${lastName},
    information = ${information},
    password = ${password}
    lk_service_id = ${lkServiceId},
    modified_by = ${modifiedBy},
    modified_datetime = now()
where id = ${therapistId};