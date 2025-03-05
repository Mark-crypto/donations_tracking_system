import passport from "passport";
import { Strategy } from "passport-local";
import connection from "../database.js";

export default passport.use(
  new Strategy({ usernameField: "email" }, (username, password, done) => {
    try {
      //search for user using their email
      connection.query(
        `SELECT * FROM users WHERE email = ?`,
        [username],
        (err, data) => {
          //handling error
          if (err) {
            return done(err, null);
          }
          //if no user is found
          if (!data.length) {
            return done(null, false, { message: "Invalid email" });
          }
          //if user is found but password is incorrect
          const user = data[0];
          if (user.password !== password) {
            return done(null, false, { message: "Invalid password" });
          }
          return done(null, user);
        }
      );
    } catch (error) {
      done(error, null);
    }
  })
);

passport.serializeUser((user, done) => {
  process.nextTick(() => {
    done(null, { id: user.id, email: user.email });
  });
});

passport.deserializeUser((user, done) => {
  process.nextTick(() => {
    return done(null, user);
  });
});

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });
// passport.deserializeUser((id, done) => {
//   try {
//     //search for the user using the id
//     connection.query(`SELECT * FROM users WHERE id = ?`, [id], (err, data) => {
//       if (err) throw err;
//       const user = data[0];
//       return done(null, user);
//     });
//   } catch (error) {
//     done(error, null);
//   }
// });
