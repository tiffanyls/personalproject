UPDATE images 
SET location = $1,
city = $2,
state = $3,
country = $4,
notes = $5
WHERE image_id = $6;
