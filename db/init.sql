DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS info;
DROP TABLE IF EXISTS pictures;

CREATE TABLE IF NOT EXISTS users(
id SERIAL PRIMARY KEY,
username TEXT,
password TEXT,
admin BOOLEAN
);

CREATE TABLE IF NOT EXISTS info(
 id SERIAL PRIMARY KEY,
 photo TEXT,
 name TEXT,
 service TEXT,
 information TEXT
);

CREATE TABLE IF NOT EXISTS pictures(
 id SERIAL PRIMARY KEY,
 picture TEXT
 );

CREATE TABLE IF NOT EXISTS testimonials(
id SERIAL PRIMARY KEY,
names TEXT,
services TEXT,
experience TEXT
);