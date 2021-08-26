create view vw_user
as
select
    unique_id,
    photo,
    concat(first_name, ' ', last_name) as name,
    lk_s.service,
    u.information
from users u
inner join lk_services lk_s
on u.lk_service_id = lk_s.id;

create view vw_testimonial
as
select
    name,
    services_provided as services,
    experience
from testimonials;

select * from vw_user;

select * from vw_testimonial;