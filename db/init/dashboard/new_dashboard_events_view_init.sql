-- Yearly Event View 
create view vw_event_dashboard
as
select
    e.id,
    e.description,
    uQry.id as user_id,
    uQry.photo as therapist_photo,
    uQry.service as therapist_service,
    lk_e_t.event_type as event_type,
    lk_e_s.event_status as event_status
from events e
inner join (
    select
        u.id as id,
        concat(u.first_name, ' ', u.last_name) as name,
        u.photo,
        lk_s.service
    from users u
    inner join lk_services lk_s
    on u.lk_service_id = lk_s.id
) uQry
on e.therapist_id = uQry.id
inner join lk_event_types lk_e_t
on e.lk_event_type_id = lk_e_t.id
inner join lk_event_statuses lk_e_s
on e.lk_event_status_id = lk_e_s.id
where e.event_time >= date_trunc('year', now() - interval '1' year)


-- January
create view vw_event_dashboard_jan
as
select
    e.id,
    e.description,
    uQry.id as user_id,
    uQry.photo as therapist_photo,
    uQry.service as therapist_service,
    lk_e_t.event_type as event_type,
    lk_e_s.event_status as event_status
from events e
inner join (
    select
        u.id as id,
        concat(u.first_name, ' ', u.last_name) as name,
        u.photo,
        lk_s.service
    from users u
    inner join lk_services lk_s
    on u.lk_service_id = lk_s.id
) uQry
on e.therapist_id = uQry.id
inner join lk_event_types lk_e_t
on e.lk_event_type_id = lk_e_t.id
inner join lk_event_statuses lk_e_s
on e.lk_event_status_id = lk_e_s.id
where extract(month from e.event_time) = 1 and extract(year from  e.event_time) = date_part('year', CURRENT_DATE) ;

-- February
create view vw_event_dashboard_feb
as
select
    e.id,
    e.description,
    uQry.id as user_id,
    uQry.photo as therapist_photo,
    uQry.service as therapist_service,
    lk_e_t.event_type as event_type,
    lk_e_s.event_status as event_status
from events e
inner join (
    select
        u.id as id,
        concat(u.first_name, ' ', u.last_name) as name,
        u.photo,
        lk_s.service
    from users u
    inner join lk_services lk_s
    on u.lk_service_id = lk_s.id
) uQry
on e.therapist_id = uQry.id
inner join lk_event_types lk_e_t
on e.lk_event_type_id = lk_e_t.id
inner join lk_event_statuses lk_e_s
on e.lk_event_status_id = lk_e_s.id
where extract(month from e.event_time) = 2 and extract(year from  e.event_time) = date_part('year', CURRENT_DATE) ;

-- March
create view vw_event_dashboard_mar
as
select
    e.id,
    e.description,
    uQry.id as user_id,
    uQry.photo as therapist_photo,
    uQry.service as therapist_service,
    lk_e_t.event_type as event_type,
    lk_e_s.event_status as event_status
from events e
inner join (
    select
        u.id as id,
        concat(u.first_name, ' ', u.last_name) as name,
        u.photo,
        lk_s.service
    from users u
    inner join lk_services lk_s
    on u.lk_service_id = lk_s.id
) uQry
on e.therapist_id = uQry.id
inner join lk_event_types lk_e_t
on e.lk_event_type_id = lk_e_t.id
inner join lk_event_statuses lk_e_s
on e.lk_event_status_id = lk_e_s.id
where extract(month from e.event_time) = 3 and extract(year from  e.event_time) = date_part('year', CURRENT_DATE) ;

-- April
create view vw_event_dashboard_apr
as
select
    e.id,
    e.description,
    uQry.id as user_id,
    uQry.photo as therapist_photo,
    uQry.service as therapist_service,
    lk_e_t.event_type as event_type,
    lk_e_s.event_status as event_status
from events e
inner join (
    select
        u.id as id,
        concat(u.first_name, ' ', u.last_name) as name,
        u.photo,
        lk_s.service
    from users u
    inner join lk_services lk_s
    on u.lk_service_id = lk_s.id
) uQry
on e.therapist_id = uQry.id
inner join lk_event_types lk_e_t
on e.lk_event_type_id = lk_e_t.id
inner join lk_event_statuses lk_e_s
on e.lk_event_status_id = lk_e_s.id
where extract(month from e.event_time) = 4 and extract(year from  e.event_time) = date_part('year', CURRENT_DATE) ;

-- May
create view vw_event_dashboard_may
as
select
    e.id,
    e.description,
    uQry.id as user_id,
    uQry.photo as therapist_photo,
    uQry.service as therapist_service,
    lk_e_t.event_type as event_type,
    lk_e_s.event_status as event_status
from events e
inner join (
    select
        u.id as id,
        concat(u.first_name, ' ', u.last_name) as name,
        u.photo,
        lk_s.service
    from users u
    inner join lk_services lk_s
    on u.lk_service_id = lk_s.id
) uQry
on e.therapist_id = uQry.id
inner join lk_event_types lk_e_t
on e.lk_event_type_id = lk_e_t.id
inner join lk_event_statuses lk_e_s
on e.lk_event_status_id = lk_e_s.id
where extract(month from e.event_time) = 5 and extract(year from  e.event_time) = date_part('year', CURRENT_DATE) ;

-- June
create view vw_event_dashboard_jun
as
select
    e.id,
    e.description,
    uQry.id as user_id,
    uQry.photo as therapist_photo,
    uQry.service as therapist_service,
    lk_e_t.event_type as event_type,
    lk_e_s.event_status as event_status
from events e
inner join (
    select
        u.id as id,
        concat(u.first_name, ' ', u.last_name) as name,
        u.photo,
        lk_s.service
    from users u
    inner join lk_services lk_s
    on u.lk_service_id = lk_s.id
) uQry
on e.therapist_id = uQry.id
inner join lk_event_types lk_e_t
on e.lk_event_type_id = lk_e_t.id
inner join lk_event_statuses lk_e_s
on e.lk_event_status_id = lk_e_s.id
where extract(month from e.event_time) = 6 and extract(year from  e.event_time) = date_part('year', CURRENT_DATE) ;


-- July
create view vw_event_dashboard_jul
as
select
    e.id,
    e.description,
    uQry.id as user_id,
    uQry.photo as therapist_photo,
    uQry.service as therapist_service,
    lk_e_t.event_type as event_type,
    lk_e_s.event_status as event_status
from events e
inner join (
    select
        u.id as id,
        concat(u.first_name, ' ', u.last_name) as name,
        u.photo,
        lk_s.service
    from users u
    inner join lk_services lk_s
    on u.lk_service_id = lk_s.id
) uQry
on e.therapist_id = uQry.id
inner join lk_event_types lk_e_t
on e.lk_event_type_id = lk_e_t.id
inner join lk_event_statuses lk_e_s
on e.lk_event_status_id = lk_e_s.id
where extract(month from e.event_time) = 7 and extract(year from  e.event_time) = date_part('year', CURRENT_DATE) ;

-- August
create view vw_event_dashboard_aug
as
select
    e.id,
    e.description,
    uQry.id as user_id,
    uQry.photo as therapist_photo,
    uQry.service as therapist_service,
    lk_e_t.event_type as event_type,
    lk_e_s.event_status as event_status
from events e
inner join (
    select
        u.id as id,
        concat(u.first_name, ' ', u.last_name) as name,
        u.photo,
        lk_s.service
    from users u
    inner join lk_services lk_s
    on u.lk_service_id = lk_s.id
) uQry
on e.therapist_id = uQry.id
inner join lk_event_types lk_e_t
on e.lk_event_type_id = lk_e_t.id
inner join lk_event_statuses lk_e_s
on e.lk_event_status_id = lk_e_s.id
where extract(month from e.event_time) = 8 and extract(year from  e.event_time) = date_part('year', CURRENT_DATE) ;

-- September
create view vw_event_dashboard_sep
as
select
    e.id,
    e.description,
    uQry.id as user_id,
    uQry.photo as therapist_photo,
    uQry.service as therapist_service,
    lk_e_t.event_type as event_type,
    lk_e_s.event_status as event_status
from events e
inner join (
    select
        u.id as id,
        concat(u.first_name, ' ', u.last_name) as name,
        u.photo,
        lk_s.service
    from users u
    inner join lk_services lk_s
    on u.lk_service_id = lk_s.id
) uQry
on e.therapist_id = uQry.id
inner join lk_event_types lk_e_t
on e.lk_event_type_id = lk_e_t.id
inner join lk_event_statuses lk_e_s
on e.lk_event_status_id = lk_e_s.id
where extract(month from e.event_time) = 9 and extract(year from  e.event_time) = date_part('year', CURRENT_DATE) ;

-- October
create view vw_event_dashboard_oct
as
select
    e.id,
    e.description,
    uQry.id as user_id,
    uQry.photo as therapist_photo,
    uQry.service as therapist_service,
    lk_e_t.event_type as event_type,
    lk_e_s.event_status as event_status
from events e
inner join (
    select
        u.id as id,
        concat(u.first_name, ' ', u.last_name) as name,
        u.photo,
        lk_s.service
    from users u
    inner join lk_services lk_s
    on u.lk_service_id = lk_s.id
) uQry
on e.therapist_id = uQry.id
inner join lk_event_types lk_e_t
on e.lk_event_type_id = lk_e_t.id
inner join lk_event_statuses lk_e_s
on e.lk_event_status_id = lk_e_s.id
where extract(month from e.event_time) = 10 and extract(year from  e.event_time) = date_part('year', CURRENT_DATE) ;

-- November
create view vw_event_dashboard_nov
as
select
    e.id,
    e.description,
    uQry.id as user_id,
    uQry.photo as therapist_photo,
    uQry.service as therapist_service,
    lk_e_t.event_type as event_type,
    lk_e_s.event_status as event_status
from events e
inner join (
    select
        u.id as id,
        concat(u.first_name, ' ', u.last_name) as name,
        u.photo,
        lk_s.service
    from users u
    inner join lk_services lk_s
    on u.lk_service_id = lk_s.id
) uQry
on e.therapist_id = uQry.id
inner join lk_event_types lk_e_t
on e.lk_event_type_id = lk_e_t.id
inner join lk_event_statuses lk_e_s
on e.lk_event_status_id = lk_e_s.id
where extract(month from e.event_time) = 11 and extract(year from  e.event_time) = date_part('year', CURRENT_DATE) ;

-- December
create view vw_event_dashboard_dec
as
select
    e.id,
    e.description,
    uQry.id as user_id,
    uQry.photo as therapist_photo,
    uQry.service as therapist_service,
    lk_e_t.event_type as event_type,
    lk_e_s.event_status as event_status
from events e
inner join (
    select
        u.id as id,
        concat(u.first_name, ' ', u.last_name) as name,
        u.photo,
        lk_s.service
    from users u
    inner join lk_services lk_s
    on u.lk_service_id = lk_s.id
) uQry
on e.therapist_id = uQry.id
inner join lk_event_types lk_e_t
on e.lk_event_type_id = lk_e_t.id
inner join lk_event_statuses lk_e_s
on e.lk_event_status_id = lk_e_s.id
where extract(month from e.event_time) = 12 and extract(year from  e.event_time) = date_part('year', CURRENT_DATE) ;