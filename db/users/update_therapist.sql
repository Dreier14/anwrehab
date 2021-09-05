update users
set username = ${username},
    photo = ${photo},
    first_name = ${firstName},
    middle_name = ${middleName},
    last_name = ${lastName},
    information = ${information},
    important_fl = ${importantFl},
    lk_service_id = ${lkServiceId},
    modified_by = ${modifiedBy},
    modified_datetime = now()
where lk_role_id = 3 and id = ${therapistId};