SELECT * FROM users u JOIN images im ON u.user_id = im.user_id WHERE u.user_id=$1 OR im.image=$1 OR im.location = $1 OR 
im.city = $1 OR im.state = $1 OR im.country = $1 OR im.notes = $1 or u.display_name = $1;

