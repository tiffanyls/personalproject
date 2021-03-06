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

//used for serving production files
app.use(express.static(`${__dirname}/../build/`));

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
    const {image, location, city, state, country, notes, lat, lng } = req.body;
    app.get('db').createImage([image, location, city, state, country, notes, lat, lng, req.user.user_id])
    .then(response =>{
        res.status(200).json(response);
    })
        .catch(err =>{
            res.status(500).json(err);
        });
});

app.put('/api/updateImage', (req, res, next) => {
    const {location, city, state, country, notes, image_id, lat, lng} = req.body.updatedInfo;
    console.log(req.body.updatedInfo)
    app.get('db').updateImage([location, city, state, country, notes, lat, lng ,image_id])
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json(err);
    })
})

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
    console.log(req.query)
    app.get('db').searchAll([req.query.searchInfo])
    .then(response => {
        console.log(response, "line 110")
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json(err);
    });
})

app.get('/api/getImages', (req, res, next) => {
    const {image} = req.body;
    // console.log(req.body)
    app.get('db').getImages()
    .then(response =>{
        res.status(200).json(response);
    })
    .catch(err => {             
        res.status(500).json(err);
    })
})

 app.delete('/api/deleteImage/:id', (req, res, next) =>{ 
    //  console.log('hi', req.params.id)
    app.get('db').deleteImage([req.params.id])
   .then(response =>{
       console.log(response)
        res.status(200).json(response);
})
    .catch(err=> {
    res.status(500).json(err);
});
 })

app.get('/logout', (req, res) =>{
    req.session.destroy(() => {
        res.redirect('/');
    });
});

app.get('/api/checkUser', (req, res, next) => {
    res.status(200).send(req.user)
})

const path = require('path');


app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../build/index.html"));
    });


app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})