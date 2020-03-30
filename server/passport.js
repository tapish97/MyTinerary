const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('./model/userModel');
const config = require('config');
const passport = require('passport');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // HAY QUE USAR AUTHORIZATION en key y token en value
  secretOrKey: config.get('jwtSecret') // need to be called opts.secretOrKey
};

module.exports = passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    //is opts req and (jwt_payloas, done) res?
    console.log(jwt_payload);
    User.findById(jwt_payload.user.id)
      .select('-password')
      .then((user) => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch((err) => console.log(err));
  })
);

// todos los middlewares no deberian terminar con next ?? - si pero done tiene la lisma funcion!