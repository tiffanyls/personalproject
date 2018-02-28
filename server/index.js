require ('dotenv').config();
const express = require('express');
const { json } = require ('body-parser');
const session = require ('express-session');
const cors = require ('cors');
const passport = require('passport');
const massive = require ('massive');

const strategy = require(`${__dirname}/strategy`);

const port = 3001;

const app = express();

massive(process.env.CONNECTION_STRING).then (db=> {
    app.set('db', db);
})
    .catch(console.log);

app.use(json());
app.use(cors());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 10000
}}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);

passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((user, done) =>{
    done(null, user);
})


passport.use(
    new Auth0Strategy(
        {
            domain: DOMAIN,
            clientSecret: CLIENT_SECRET,
            clientID: CLIENT_ID,
            scope: 'openid profile'
            callbackURL: '/login'
        },
        (accessToken, refreshToken, extraParams, profile, done) => {
            app
            .get('db')
            .getUserByID(profile.id)
            .then(response => {
                if (!response[0]){
                    app
                    .get('db')
                    .createUserById([profile.id, profiledisplayName])
                    .then(created => done(null, created[0]));
                }
                else {
                    return done(null, response[0]);
                }
            });
        }
    )
);

app.get('/login', passport.authenticate('auth0', {
    successRedirect: '/me',
    failureRedirect: '/login',
    failureFlash: true
}));

app.get('/me', (req, res, next) =>{
    if(!req.user) res.redirect('/login');
    else {
        res.status(200).json(req.user);
    }
})

app.post('/api/imageAndMetadata', (req, res, next) => {
    const {image, location, city, state, country, notes} = req.body;
    app.get('db').createImage([image, location, city, state, country, notes])
    .then(response =>{
        res.status(200).json(response);
    })
        .catch(err =>{
            res.status(500).json(err);
        });
});

// app.get("/api/test", (req, res) => {
//     req.app.get('db').getUsers()
//     .then(response => {
//         res.status(200).json(response)
//     }).catch(err => {
//         res.status(500).json(err);
//     })
//   });

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});