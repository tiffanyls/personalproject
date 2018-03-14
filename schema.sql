CREATE TABLE users (
    user_id serial primary key,
    id varchar(50),
    display_name varchar(255),
    username varchar(15),
    name varchar(100),
    profile_pic text,
    email text
)

CREATE TABLE images (
    image_id serial primary key,
    image text,
    location varchar(255),
    city varchar(50),
    state varchar(50),
    country varchar(50),
    notes text
    user_id int REFERENCES users (user_id)
)
