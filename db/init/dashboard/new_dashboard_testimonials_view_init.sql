drop view vw_testimonial_dashboard_previous_year;
drop view vw_testimonial_dashboard_previous_two_year;
drop view vw_testimonial_dashboard_jan;
drop view vw_testimonial_dashboard_feb;
drop view vw_testimonial_dashboard_mar;
drop view vw_testimonial_dashboard_apr;
drop view vw_testimonial_dashboard_may;
drop view vw_testimonial_dashboard_jun;
drop view vw_testimonial_dashboard_jul;
drop view vw_testimonial_dashboard_aug;
drop view vw_testimonial_dashboard_sep;
drop view vw_testimonial_dashboard_oct;
drop view vw_testimonial_dashboard_nov;
drop view vw_testimonial_dashboard_dec;
-- Testimonial Dashboard views
-- Yearly Views
create view vw_testimonial_dashboard_previous_year
as
select
    ts.id,
    ts.services_provided,
    uQry.user_id as therapist_id,
    uQry.name as therapist_name,
    uQry.photo as therapist_photo,
    uQry.main_service_provided,
    lk_ts.testimonial_status as status
from testimonials ts
inner join (
    select
        u.id as user_id,
        concat(u.first_name, ' ', u.last_name) as name,
        u.photo,
        lk_s.service as main_service_provided
    from users u
    inner join lk_services lk_s
    on u.lk_service_id = lk_s.id
) as uQry
on ts.user_id = uQry.user_id
inner join lk_testimonial_statuses lk_ts
on ts.lk_testimonial_status_id = lk_ts.id
where ts.created_datetime >= date_trunc('year', now() - interval '1' year);

create view vw_testimonial_dashboard_previous_two_year
as
select
    ts.id,
    ts.services_provided,
    uQry.user_id as therapist_id,
    uQry.name as therapist_name,
    uQry.photo as therapist_photo,
    uQry.main_service_provided,
    lk_ts.testimonial_status as status
from testimonials ts
inner join (
    select
        u.id as user_id,
        concat(u.first_name, ' ', u.last_name) as name,
        u.photo,
        lk_s.service as main_service_provided
    from users u
    inner join lk_services lk_s
    on u.lk_service_id = lk_s.id
) as uQry
on ts.user_id = uQry.user_id
inner join lk_testimonial_statuses lk_ts
on ts.lk_testimonial_status_id = lk_ts.id
where ts.created_datetime >= date_trunc('year', now() - interval '2' year);


-- Month Views
-- January
create view vw_testimonial_dashboard_jan
as
select
    ts.id,
    ts.services_provided,
    uQry.user_id as therapist_id,
    uQry.name as therapist_name,
    uQry.photo as therapist_photo,
    uQry.main_service_provided,
    lk_ts.testimonial_status as status
from testimonials ts
inner join (
    select
        u.id as user_id,
        concat(u.first_name, ' ', u.last_name) as name,
        u.photo,
        lk_s.service as main_service_provided
    from users u
    inner join lk_services lk_s
    on u.lk_service_id = lk_s.id
) as uQry
on ts.user_id = uQry.user_id
inner join lk_testimonial_statuses lk_ts
on ts.lk_testimonial_status_id = lk_ts.id
where extract(month from ts.created_datetime) = 1 and extract(year from ts.created_datetime) = date_part('year', CURRENT_DATE) ;

-- Febuary
create view vw_testimonial_dashboard_feb
as
select
    ts.id,
    ts.services_provided,
    uQry.user_id as therapist_id,
    uQry.name as therapist_name,
    uQry.photo as therapist_photo,
    uQry.main_service_provided,
    lk_ts.testimonial_status as status
from testimonials ts
inner join (
    select
        u.id as user_id,
        concat(u.first_name, ' ', u.last_name) as name,
        u.photo,
        lk_s.service as main_service_provided
    from users u
    inner join lk_services lk_s
    on u.lk_service_id = lk_s.id
) as uQry
on ts.user_id = uQry.user_id
inner join lk_testimonial_statuses lk_ts
on ts.lk_testimonial_status_id = lk_ts.id
where extract(month from ts.created_datetime) = 2 and extract(year from ts.created_datetime) = date_part('year', CURRENT_DATE) ;

-- March
create view vw_testimonial_dashboard_mar
as
select
    ts.id,
    ts.services_provided,
    uQry.user_id as therapist_id,
    uQry.name as therapist_name,
    uQry.photo as therapist_photo,
    uQry.main_service_provided,
    lk_ts.testimonial_status as status
from testimonials ts
inner join (
    select
        u.id as user_id,
        concat(u.first_name, ' ', u.last_name) as name,
        u.photo,
        lk_s.service as main_service_provided
    from users u
    inner join lk_services lk_s
    on u.lk_service_id = lk_s.id
) as uQry
on ts.user_id = uQry.user_id
inner join lk_testimonial_statuses lk_ts
on ts.lk_testimonial_status_id = lk_ts.id
where extract(month from ts.created_datetime) = 3 and extract(year from ts.created_datetime) = date_part('year', CURRENT_DATE) ;

-- April
create view vw_testimonial_dashboard_apr
as
select
    ts.id,
    ts.services_provided,
    uQry.user_id as therapist_id,
    uQry.name as therapist_name,
    uQry.photo as therapist_photo,
    uQry.main_service_provided,
    lk_ts.testimonial_status as status
from testimonials ts
inner join (
    select
        u.id as user_id,
        concat(u.first_name, ' ', u.last_name) as name,
        u.photo,
        lk_s.service as main_service_provided
    from users u
    inner join lk_services lk_s
    on u.lk_service_id = lk_s.id
) as uQry
on ts.user_id = uQry.user_id
inner join lk_testimonial_statuses lk_ts
on ts.lk_testimonial_status_id = lk_ts.id
where extract(month from ts.created_datetime) = 4 and extract(year from ts.created_datetime) = date_part('year', CURRENT_DATE) ;

-- May
create view vw_testimonial_dashboard_may
as
select
    ts.id,
    ts.services_provided,
    uQry.user_id as therapist_id,
    uQry.name as therapist_name,
    uQry.photo as therapist_photo,
    uQry.main_service_provided,
    lk_ts.testimonial_status as status
from testimonials ts
inner join (
    select
        u.id as user_id,
        concat(u.first_name, ' ', u.last_name) as name,
        u.photo,
        lk_s.service as main_service_provided
    from users u
    inner join lk_services lk_s
    on u.lk_service_id = lk_s.id
) as uQry
on ts.user_id = uQry.user_id
inner join lk_testimonial_statuses lk_ts
on ts.lk_testimonial_status_id = lk_ts.id
where extract(month from ts.created_datetime) = 5 and extract(year from ts.created_datetime) = date_part('year', CURRENT_DATE) ;

-- June
create view vw_testimonial_dashboard_jun
as
select
    ts.id,
    ts.services_provided,
    uQry.user_id as therapist_id,
    uQry.name as therapist_name,
    uQry.photo as therapist_photo,
    uQry.main_service_provided,
    lk_ts.testimonial_status as status
from testimonials ts
inner join (
    select
        u.id as user_id,
        concat(u.first_name, ' ', u.last_name) as name,
        u.photo,
        lk_s.service as main_service_provided
    from users u
    inner join lk_services lk_s
    on u.lk_service_id = lk_s.id
) as uQry
on ts.user_id = uQry.user_id
inner join lk_testimonial_statuses lk_ts
on ts.lk_testimonial_status_id = lk_ts.id
where extract(month from ts.created_datetime) = 6 and extract(year from ts.created_datetime) = date_part('year', CURRENT_DATE) ;

-- July
create view vw_testimonial_dashboard_jul
as
select
    ts.id,
    ts.services_provided,
    uQry.user_id as therapist_id,
    uQry.name as therapist_name,
    uQry.photo as therapist_photo,
    uQry.main_service_provided,
    lk_ts.testimonial_status as status
from testimonials ts
inner join (
    select
        u.id as user_id,
        concat(u.first_name, ' ', u.last_name) as name,
        u.photo,
        lk_s.service as main_service_provided
    from users u
    inner join lk_services lk_s
    on u.lk_service_id = lk_s.id
) as uQry
on ts.user_id = uQry.user_id
inner join lk_testimonial_statuses lk_ts
on ts.lk_testimonial_status_id = lk_ts.id
where extract(month from ts.created_datetime) = 7 and extract(year from ts.created_datetime) = date_part('year', CURRENT_DATE) ;

-- August
create view vw_testimonial_dashboard_aug
as
select
    ts.id,
    ts.services_provided,
    uQry.user_id as therapist_id,
    uQry.name as therapist_name,
    uQry.photo as therapist_photo,
    uQry.main_service_provided,
    lk_ts.testimonial_status as status
from testimonials ts
inner join (
    select
        u.id as user_id,
        concat(u.first_name, ' ', u.last_name) as name,
        u.photo,
        lk_s.service as main_service_provided
    from users u
    inner join lk_services lk_s
    on u.lk_service_id = lk_s.id
) as uQry
on ts.user_id = uQry.user_id
inner join lk_testimonial_statuses lk_ts
on ts.lk_testimonial_status_id = lk_ts.id
where extract(month from ts.created_datetime) = 8 and extract(year from ts.created_datetime) = date_part('year', CURRENT_DATE) ;

-- September
create view vw_testimonial_dashboard_sep
as
select
    ts.id,
    ts.services_provided,
    uQry.user_id as therapist_id,
    uQry.name as therapist_name,
    uQry.photo as therapist_photo,
    uQry.main_service_provided,
    lk_ts.testimonial_status as status
from testimonials ts
inner join (
    select
        u.id as user_id,
        concat(u.first_name, ' ', u.last_name) as name,
        u.photo,
        lk_s.service as main_service_provided
    from users u
    inner join lk_services lk_s
    on u.lk_service_id = lk_s.id
) as uQry
on ts.user_id = uQry.user_id
inner join lk_testimonial_statuses lk_ts
on ts.lk_testimonial_status_id = lk_ts.id
where extract(month from ts.created_datetime) = 9 and extract(year from ts.created_datetime) = date_part('year', CURRENT_DATE) ;

-- October
create view vw_testimonial_dashboard_oct
as
select
    ts.id,
    ts.services_provided,
    uQry.user_id as therapist_id,
    uQry.name as therapist_name,
    uQry.photo as therapist_photo,
    uQry.main_service_provided,
    lk_ts.testimonial_status as status
from testimonials ts
inner join (
    select
        u.id as user_id,
        concat(u.first_name, ' ', u.last_name) as name,
        u.photo,
        lk_s.service as main_service_provided
    from users u
    inner join lk_services lk_s
    on u.lk_service_id = lk_s.id
) as uQry
on ts.user_id = uQry.user_id
inner join lk_testimonial_statuses lk_ts
on ts.lk_testimonial_status_id = lk_ts.id
where extract(month from ts.created_datetime) = 10 and extract(year from ts.created_datetime) = date_part('year', CURRENT_DATE) ;

-- November
create view vw_testimonial_dashboard_nov
as
select
    ts.id,
    ts.services_provided,
    uQry.user_id as therapist_id,
    uQry.name as therapist_name,
    uQry.photo as therapist_photo,
    uQry.main_service_provided,
    lk_ts.testimonial_status as status
from testimonials ts
inner join (
    select
        u.id as user_id,
        concat(u.first_name, ' ', u.last_name) as name,
        u.photo,
        lk_s.service as main_service_provided
    from users u
    inner join lk_services lk_s
    on u.lk_service_id = lk_s.id
) as uQry
on ts.user_id = uQry.user_id
inner join lk_testimonial_statuses lk_ts
on ts.lk_testimonial_status_id = lk_ts.id
where extract(month from ts.created_datetime) = 11 and extract(year from ts.created_datetime) = date_part('year', CURRENT_DATE) ;

-- December
create view vw_testimonial_dashboard_dec
as
select
    ts.id,
    ts.services_provided,
    uQry.user_id as therapist_id,
    uQry.name as therapist_name,
    uQry.photo as therapist_photo,
    uQry.main_service_provided,
    lk_ts.testimonial_status as status
from testimonials ts
inner join (
    select
        u.id as user_id,
        concat(u.first_name, ' ', u.last_name) as name,
        u.photo,
        lk_s.service as main_service_provided
    from users u
    inner join lk_services lk_s
    on u.lk_service_id = lk_s.id
) as uQry
on ts.user_id = uQry.user_id
inner join lk_testimonial_statuses lk_ts
on ts.lk_testimonial_status_id = lk_ts.id
where extract(month from ts.created_datetime) = 12 and extract(year from ts.created_datetime) = date_part('year', CURRENT_DATE) ;
