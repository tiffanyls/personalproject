CREATE TABLE users (
    user_id serial primary key,
    username varchar(20),
    full_name varchar(255),
    email varchar(255),
    password(10)
)

CREATE TABLE images (
    image_id serial primary key,
    image text,
    location varchar(255),
    description text,
    city varchar(50),
    state varchar(50),
    country varchar(50),
    notes text
)
