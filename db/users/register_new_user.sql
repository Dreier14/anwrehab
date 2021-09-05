insert into users
(
    unique_id,
    username,
    email,
    photo,
    first_name,
    middle_name,
    last_name,
    information,
    lk_service_id,
    lk_role_id,
    set_password_token,
    set_password_token_expiration_date,
    created_datetime,
    created_by
)
values
(
    ${uniqueId}, 
    ${username},
    ${email},
    ${photo}, 
    ${firstName}, 
    ${middleName}, 
    ${lastName}, 
    ${information}, 
    ${lkServiceId}, 
    ${lkRoleId},
    ${setPasswordToken},
    ${setPasswordTokenExpirationDate},
    now(),
    ${creatorId}
);

SELECT currval(pg_get_serial_sequence('users','id'));