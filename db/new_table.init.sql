-- DROP TABLE lk_roles;
-- DROP TABLE lk_services;
-- DROP TABLE lk_events;
-- DROP TABLE lk_event_statuses;
-- DROP TABLE users;
-- DROP TABLE events;
-- DROP TABLE testimonials;

CREATE TABLE IF NOT EXISTS lk_roles (
    id SERIAL PRIMARY KEY,
    role VARCHAR(255),
    role_description TEXT,
    created_datetime TIMESTAMP,
    created_by INTEGER DEFAULT NULL,
    modified_datetime timestamp,
    modified_by INTEGER DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS lk_services(
    id SERIAL PRIMARY KEY,
    service VARCHAR(500),
    service_description VARCHAR(500),
    created_datetime TIMESTAMP,
    created_by INTEGER DEFAULT NULL,
    modified_datetime timestamp,
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

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    unique_id VARCHAR(255),
    username VARCHAR(255),
    photo TEXT,
    first_name VARCHAR(255),
    middle_name VARCHAR(255),
    last_name VARCHAR(255),
    information TEXT,
    password VARCHAR(255),
    lk_service_id INTEGER DEFAULT NULL REFERENCES lk_services(id) ON DELETE RESTRICT ON UPDATE RESTRICT,
    lk_role_id INTEGER DEFAULT NULL REFERENCES lk_roles(id) ON DELETE RESTRICT ON UPDATE RESTRICT,
    created_datetime TIMESTAMP,
    created_by INTEGER DEFAULT NULL,
    modified_datetime TIMESTAMP,
    modified_by INTEGER DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS events(
    id SERIAL PRIMARY KEY,
    description VARCHAR(500),
    event_form TEXT,
    event_time TIMESTAMP,
    recurring_ind boolean,
    lk_event_type_id INTEGER  DEFAULT NULL REFERENCES lk_event_types(id) ON DELETE RESTRICT ON UPDATE RESTRICT,
    lk_event_status_id INTEGER  DEFAULT NULL REFERENCES lk_event_statuses(id) ON DELETE RESTRICT ON UPDATE RESTRICT,
    therapist_id INTEGER  DEFAULT NULL REFERENCES users(id) ON DELETE RESTRICT ON UPDATE RESTRICT,
    created_datetime TIMESTAMP,
    created_by INTEGER DEFAULT NULL,
    modified_datetime TIMESTAMP,
    modified_by INTEGER DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS testimonials(
    id SERIAL PRIMARY KEY,
    user_id INTEGER  DEFAULT NULL REFERENCES users(id) ON DELETE RESTRICT ON UPDATE RESTRICT,
    services_provided VARCHAR(255),
    experience VARCHAR(500),
    sql_created_datetime TIMESTAMP,
    sql_created_by INTEGER DEFAULT NULL,
    modified_datetime TIMESTAMP,
    modified_by INTEGER DEFAULT NULL
);