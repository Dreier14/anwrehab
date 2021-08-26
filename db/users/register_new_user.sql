insert users
(
    unique_id,
    username,
    password,
    photo,
    first_name,
    middle_name,
    last_name,
    information,
    lk_service_id,
    lk_role_id,
    created_datetime,
    created_by
)
values
(
    ${uniqueId}, 
    ${username}, 
    ${password},
    ${photo}, 
    ${firstName}, 
    ${middleName}, 
    ${lastName}, 
    ${information}, 
    ${lkServiceId}, 
    ${lkRoleId},
    now(),
    ${creatorId}
);