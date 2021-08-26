CREATE TABLE IF NOT EXISTS deleted_users (
    id SERIAL PRIMARY KEY,
    unique_id VARCHAR(255),
    username VARCHAR(255),
    photo TEXT,
    first_name VARCHAR(255),
    middle_name VARCHAR(255),
    last_name VARCHAR(255),
    information TEXT,
    password VARCHAR(255),
    lk_service_id INTEGER,
    lk_role_id INTEGER,
    deleted_datetime TIMESTAMP,
    deleted_by INTEGER DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS deleted_events(
    id SERIAL PRIMARY KEY,
    description VARCHAR(500),
    event_form TEXT,
    event_time TIMESTAMP,
    recurring_ind boolean,
    lk_event_type_id INTEGER,
    lk_event_status_id INTEGER,
    therapist_id INTEGER,
    deleted_datetime TIMESTAMP,
    deleted_by INTEGER DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS deleted_testimonials(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    services_provided VARCHAR(255),
    experience VARCHAR(500),
    deleted_datetime TIMESTAMP,
    deleted_by INTEGER DEFAULT NULL
);