select 
    users.id,
    unique_id,
    username,
    photo,
    first_name,
    middle_name,
    last_name,
    information,
    lk_services.service
from users 
inner join lk_services
on lk_services.id = users.lk_service_id
where users.lk_role_id = 3;