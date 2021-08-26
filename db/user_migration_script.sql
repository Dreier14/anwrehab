select * from users;
select * from user_temp
select * from info_temp;
select * from lk_services;
select * from lk_roles;
-- drop table lk_services;
delete from lk_services;

insert into lk_services (id, service, service_description, created_datetime) values (1, 'D.H. Ed, M. Ed, OTR/L', null, now());
insert into lk_services (id, service, service_description, created_datetime) values (2, 'PT, DPT', null, now());
insert into lk_services (id, service, service_description, created_datetime) values (3, 'OTD, OTR/L', null, now());
insert into lk_services (id, service, service_description, created_datetime) values (4, 'MOTR/L', null, now());
insert into lk_services (id, service, service_description, created_datetime) values (5, 'COTA/L', null, now());
insert into lk_services (id, service, service_description, created_datetime) values (6, 'COTA', null, now());
insert into lk_services (id, service, service_description, created_datetime) values (7, 'MS, OTR/L', null, now());
insert into lk_services (id, service, service_description, created_datetime) values (8, 'SLP', null, now());
insert into lk_services (id, service, service_description, created_datetime) values (9, 'Administrative Asst.', null, now());

insert into users
(unique_id, username, photo, first_name, last_name, information, lk_service_id, lk_role_id, created_datetime)
values
(
    'O100000',
    'Shayna123',
    'https://drive.google.com/uc?id=1I5T6FzCPmJwbvoY5g8pGoBBraFhW6dxJ',
    'Shayna',
    'W',
    'I attended Gannon University where I graduated in 2009. I became a therapist because I enjoy helping others. While in college I ran Division 2 cross country and worked as a physical therapy technician.  I discovered OT through job shadowing in high school and immediately fell in love with the profession. I am a certified handwriting specialist and I have advanced training in aquatics. Running, art, playing with my daughter: and traveling are just some of the things I enjoy. I have run 12 marathons: including the Boston Marathon. I also coach cross-country at Estrella Mountain Community College.',
    4,
    1,
    now()
);

insert into users
(unique_id, username, photo, first_name, last_name, information, lk_service_id, lk_role_id, created_datetime)
select
    concat('AA', cast(floor(random() * 100000-25) as varchar(6))) as unique_id,
    concat(info_temp.name, '123') as username,
    photo as photo,
    info_temp.name as first_name,
    null as last_name,
    info_temp.information as information,
    (select id from lk_services where service = info_temp.service) as lk_service_id,
    3 as lk_role_id,
    now() as created_datetime
from info_temp
where info_temp.id = 24;


insert into users
(unique_id, username, photo, first_name, middle_name, last_name, information, password, lk_service_id, lk_role_id, created_datetime, created_by, modified_datetime, modified_by)
select
    concat('T', cast(floor(random() * 100000-25) as varchar(6))) as unique_id,
    concat(info_temp.name, '123') as username,
    photo as photo,
    info_temp.name as first_name,
    null as middle_name,
    null as last_name,
    info_temp.information as information,
    null as password,
    (select id from lk_services where service = info_temp.service) as lk_service_id,
    3 as lk_role_id,
    now() as created_datetime,
    null as created_by,
    null as modified_datetime,
    null as modified_by
from info_temp
where info_temp.id <> 1 and info_temp.id <> 24;
