require ('dotenv').config();
const express = require('express');
const { json } = require ('body-parser');
const session = require ('express-session');
const cors = require ('cors');
const passport = require('passport');
const massive = require ('massive');
const { domain, clientID, clientSecret } = require(`${__dirname}/../config`);
const Auth0Strategy = require("passport-auth0");

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
    }));

app.use(passport.initialize());
app.use(passport.session());
// passport.use(strategy);


passport.use(
    new Auth0Strategy(
        {
        domain: domain,
        clientID: clientID,
        clientSecret: clientSecret,
        scope: 'openid profile',
        callbackURL: '/login'
        },
        (accessToken, refreshToken, extraParams, profile, done) => {
            app
            .get('db')
            .getUserById(profile.id)
            .then(response => {
                if (!response[0]){
                    app
                    .get('db')
                    .createUserById([profile.id, profile.displayName])
                    .then(created => done(null, created[0]));
                }
                else {
                    return done(null, response[0]);
                }
            });
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((user, done) =>{
    done(null, user);
})


app.get('/login', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/user',
    failureRedirect: '/login',
    failureFlash: true
}));

app.get('/me', (req, res, next) =>{
    if(!req.user) res.redirect('/login');
    else {
        res.status(200).send(req.user)
    }
})

app.post('/api/imageAndMetadata', (req, res, next) => {
    const {image, location, city, state, country, notes, user_id} = req.body;
    app.get('db').createImage([image, location, city, state, country, notes, req.user.user_id])
    .then(response =>{
        res.status(200).json(response);
    })
        .catch(err =>{
            res.status(500).json(err);
        });
});

app.get('/api/userImages/', (req, res, next) => {
    app.get('db').getImagesbyUser([req.user.user_id])
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json(err); 
    }
    );
});

app.get('/api/searchAll', (req, res, next) => {
    app.get('db').searchAll([req.query.searchInfo])
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json(err);
    });
})

app.get('/logout', (req, res) =>{
    req.session.destroy(() =>{
        res.redirect('http://localhost:3000/');
    });
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});