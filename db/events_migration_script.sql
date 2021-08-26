-- drop table events;
-- drop table lk_event_types;
-- drop table lk_event_statuses;
CREATE TABLE IF NOT EXISTS events(
    id SERIAL PRIMARY KEY,
    description VARCHAR(500),
    event_form TEXT,
    event_time TIMESTAMP,
    recurring_ind boolean,
    lk_event_type_id INTEGER  DEFAULT NULL REFERENCES lk_event_types(id) ON DELETE RESTRICT ON UPDATE RESTRICT,
    lk_event_status_id INTEGER  DEFAULT NULL REFERENCES lk_event_statuses(id) ON DELETE RESTRICT ON UPDATE RESTRICT,
    created_datetime TIMESTAMP,
    created_by INTEGER DEFAULT NULL,
    modified_datetime TIMESTAMP,
    modified_by INTEGER DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS lk_event_types(
    id SERIAL PRIMARY KEY,
    event_type VARCHAR(255),
    event_type_description VARCHAR(500),
    created_datetime TIMESTAMP,
    created_by INTEGER DEFAULT NULL,
    modified_datetime timestamp,
    modified_by INTEGER DEFAULT NULL
);


CREATE TABLE IF NOT EXISTS lk_event_statuses(
    id SERIAL PRIMARY KEY,
    event_status VARCHAR(255),
    event_status_description VARCHAR(500),
    created_datetime TIMESTAMP,
    created_by INTEGER DEFAULT NULL,
    modified_datetime timestamp,
    modified_by INTEGER DEFAULT NULL
);

select * from events;
insert into events
(description, event_form, event_time, recurring_ind, lk_event_type_id, lk_event_status_id, created_datetime)
values
(
    'Austin''s Birthday',
    '{firstName: ''Austin'', lastName: ''Thompson''}',
    now(),
    false,
    5,
    1,
    now()
);

insert into events
(description, event_form, event_time, recurring_ind, lk_event_type_id, lk_event_status_id, created_datetime)
values
(
    'Jill''s Birthday',
    '{firstName: ''Jill'', lastName: ''Handler''}',
    now(),
    false,
    5,
    2,
    now()
);

insert into events
(description, event_form, event_time, recurring_ind, lk_event_type_id, lk_event_status_id, created_datetime)
values
(
    'Cory''s Birthday',
    '{firstName: ''Cory'', lastName: ''Johnson''}',
    now(),
    false,
    5,
    3,
    now()
);

insert into events
(description, event_form, event_time, recurring_ind, lk_event_type_id, lk_event_status_id, created_datetime)
values
(
    'Troy''s Birthday',
    '{firstName: ''Troy'', lastName: ''Lampart''}',
    now(),
    false,
    5,
    4,
    now()
);


select * from lk_event_types;
insert into lk_event_types
(event_type, event_type_description, created_datetime)
values
('Handwriting Appointment', 'Handwriting appointment with patient',  now());

insert into lk_event_types
(event_type, event_type_description, created_datetime)
values
('Speech Appointment', 'Speech appointment with patient',  now());

insert into lk_event_types
(event_type, event_type_description, created_datetime)
values
('Aquatics Appointment', 'Speech appointment with patient',  now());

insert into lk_event_types
(event_type, event_type_description, created_datetime)
values
('Child Centered Appointment', 'Speech appointment with patient',  now());

insert into lk_event_types
(event_type, event_type_description, created_datetime)
values
('Birthday', 'Patient''s Birthday',  now());


select * from lk_event_statuses;
insert into lk_event_statuses
(event_status, event_status_description, created_datetime)
values
('Visited', 'Therapist visited patient or work with patient in the office.', now());

insert into lk_event_statuses
(event_status, event_status_description, created_datetime)
values
('Not Visited', 'Therapist did not visit patient or did not work with patient in the office.', now());

insert into lk_event_statuses
(event_status, event_status_description, created_datetime)
values
('Cancelled', 'Therapist cancelled visit with patient or cancelled appointment with the patient in the office.', now());

insert into lk_event_statuses
(event_status, event_status_description, created_datetime)
values
('Neglected', 'Therapist neglected visit with patient or did not make appointment with the patient in the office.', now());

