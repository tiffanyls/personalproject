CREATE TABLE users (
    user_id serial primary key,
    username varchar(20),
    email varchar(255),
)

CREATE TABLE images (
    image_id serial primary key,
    image text,
    location varchar(255),
    city varchar(50),
    state varchar(50),
    country varchar(50),
    notes text
)
