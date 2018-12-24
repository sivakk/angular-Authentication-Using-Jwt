var PassportJWT = require('passport-jwt');
var passport = require('passport');
var devConfig = require('../config/env');
var User = require('../models/user');

const configureJWTStrategy = () => {
    const opts = {};

    opts.jwtFromRequest = PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = devConfig.secret;
    passport.use(
        new PassportJWT.Strategy(opts, (payload, done) => {
            User.findOne({ _id: payload.id }, (err, user) => {
                if (err) {
                    return done(err, false);
                }
                if (user) {
                    return done(null, user);
                }
                return done(null, false);
                // or you could create a new account
            });
        })
    );
};
module.exports = configureJWTStrategy