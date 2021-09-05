create view vw_users_dashboard
as
select
    u.id as id,
    u.unique_id as unique_id,
    concat(u.first_name, ' ', u.last_name) as name,
    u.photo,
    u.information,
    u.first_name,
    u.middle_Name,
    u.last_name,
    u.password,
    u.created_datetime,
    u.modified_datetime,
    lk_s.service therapist_services_provided,
    lk_r.role,
    ( select count(*) from events where therapist_id = u.id ) as total_number_of_events,
    ( select count(*) from events where therapist_id = u.id and lk_event_status_id = 1 ) as total_number_of_visited_events, -- Visited
    ( select count(*) from events where therapist_id = u.id and lk_event_status_id = 2 ) as total_number_of_not_visited_events, -- Not Visited
    ( select count(*) from events where therapist_id = u.id and lk_event_status_id = 3 ) as total_number_of_cancelled_events, -- Cancelled
    ( select count(*) from events where therapist_id = u.id and lk_event_status_id = 4 ) as total_number_of_neglected_events, -- Neglected
    ( select count(*) from events where therapist_id = u.id and lk_event_type_id = 1 ) as total_number_of_handwriting_appointments, -- Handwriting Appointments
    ( select count(*) from events where therapist_id = u.id and lk_event_type_id = 2 ) as total_number_of_speech_appointments, -- Speech Appointment
    ( select count(*) from events where therapist_id = u.id and lk_event_type_id = 3 ) as total_number_of_aquatics_appointments, -- Aquatics Appointment
    ( select count(*) from events where therapist_id = u.id and lk_event_type_id = 4 ) as total_number_of_child_centered_appointments, -- Child Centered Appointment
    ( select count(*) from events where therapist_id = u.id and lk_event_type_id = 5 ) as total_number_of_birthdays -- Birthday
from users u
inner join lk_services lk_s
on u.lk_service_id = lk_s.id
inner join lk_roles lk_r
on u.lk_role_id = lk_r.id ;