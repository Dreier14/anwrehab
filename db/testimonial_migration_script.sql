-- drop table testimonials;
create table testimonials(
    id SERIAL PRIMARY KEY,
    user_id INTEGER  DEFAULT NULL REFERENCES users(id) ON DELETE RESTRICT ON UPDATE RESTRICT,
    name VARCHAR(255),
    services_provided VARCHAR(255),
    experience VARCHAR(500),
    created_datetime TIMESTAMP,
    created_by INTEGER DEFAULT NULL,
    modified_datetime TIMESTAMP,
    modified_by INTEGER DEFAULT NULL
);
select first_name from users;
select * from information_schema.tables where table_schema = 'public';
insert into testimonials
(name, services_provided, experience, created_datetime)
values
(
    'Daniel H.',
    'Occupational Therapy',
    'I am very impressed by Shayna and her patience and treatment plan with Felicity and how Felicity is progressively learning new skills. Thank You!',
    now()
);

insert into testimonials
(name, services_provided, experience, created_datetime)
values
(
    'Marisol C.',
    'Occupational Therapy',
    'All of us enjoy having our therapist around. Damian loves Larizza and has a great time with therapy. Most of all he enjoys working and finishing up work. We have noticed lots of progress and he is much easier to redirect. We notice awesome therapy progress every time.',
    now()
);

insert into testimonials
(name, services_provided, experience, created_datetime)
values
(
    'Adrienne R.',
    'Occupational Therapy',
    'Matt has helped to not only improve my son’s skills in areas such as writing, cutting, toleration for sensory experiences, and shoe-tying, but also in regulating his emotions. I am very thankful for him and my experiences with your company.',
    now()
);

insert into testimonials
(name, services_provided, experience, created_datetime)
values
(
    'A.M.',
    'Occupational Therapy',
    'Mary has taught my son breathing techniques, yoga, patience, how to deal with losing a simple board game (this is a big deal), and so many different ways to THINK about daily issues -always being supportive. We love the services she provides our family, she is #1 out of everyone we''ve worked with in the last 6 years! We hope to keep her as long as necessary, she is a plethora of knowledge. My son adores her she is also tough when she needs to be -Awesome!',
    now()
);

insert into testimonials
(name, services_provided, experience, created_datetime)
values
(
    'Annette L.',
    'Occupational Therapy',
    'We''ve worked with Shayna and now Larizza. We used Shayna as both a Handwriting without Tears coach and as an OT.  She is so patient and encouraging that our son (who doesn''t need therapy) wants to do the activities!',
    now()
);