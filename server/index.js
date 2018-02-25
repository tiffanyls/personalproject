require ('dotenv').config();
const express = require('express');
const { json } = require ('body-parser');
const session = require ('express-session');
const cors = require ('cors');
const passport = require('passport');
const massive = require ('massive');


const port = 3001;

const app = express();



app.use(json());
app.use(cors());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 10000
}}));

app.get("/api/test", (req, res) => {
    res.status(200).json({ message: "Successfully Connected" });
  });

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});