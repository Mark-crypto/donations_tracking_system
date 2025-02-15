// import passport from "passport";
// import strategy from "passport-local";
// import connection from "../database.js";

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

// export default passport.use(
//   new strategy({ usernameField: "email" }, (username, password, done) => {
//     try {
//       //search for user using their email
//       connection.query(
//         `SELECT * FROM users WHERE email = ?`,
//         [username],
//         (err, data) => {
//           if (err) throw err;
//           if (!data.length) {
//             return done(null, false, { message: "Invalid email" });
//           }
//           const user = data[0];
//           if (user.password !== password) {
//             return done(null, false, { message: "Invalid password" });
//           }
//           return done(null, user);
//         }
//       );
//     } catch (error) {
//       done(error, null);
//     }
//   })
// );
