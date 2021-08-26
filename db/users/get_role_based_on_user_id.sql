select 
    lk_r.role
from lk_roles lk_r
inner join users u
on lk_r.id = u.lk_role_id
where u.id = ${userId};