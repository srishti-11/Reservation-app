
  
// import User from "../models/User.js";
// import bcrypt from "bcryptjs";
// import { createError } from "../utils/error.js";
// import jwt from "jsonwebtoken";

// // Register User
// export const register = async (req, res, next) => {
//   try {
//     // Hash password
//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(req.body.password, salt);

//     // Create user
//     const newUser = new User({
//       ...req.body,
//       password: hash,
//     });

//     // Save to DB
//     await newUser.save();
//     res.status(200).send("User has been created.");
//   } catch (err) {
//     next(err);
//   }
// };

// // Login User
// export const login = async (req, res, next) => {
//   try {
//     // Find user by username
//     const user = await User.findOne({ username: req.body.username });
//     if (!user) return next(createError(404, "User not found!"));

//     // Check password
//     const isPasswordCorrect = await bcrypt.compare(
//       req.body.password,
//       user.password
//     );
//     if (!isPasswordCorrect)
//       return next(createError(400, "Wrong password or username!"));

//     // Generate JWT
//     const token = jwt.sign(
//       { id: user._id, isAdmin: user.isAdmin },
//       process.env.JWT, // Ensure this is defined in your .env
//       { expiresIn: "1d" } // Optional: token expires in 1 day
//     );

//     // Remove sensitive info from user data
//     const { password, isAdmin, ...otherDetails } = user._doc;

//     // Send response with token
//     res
//       .cookie("access_token", token, {
//         httpOnly: true,
//       })
//       .status(200)
//       .json({ details: { ...otherDetails }, isAdmin });
//   } catch (err) {
//     next(err);
//   }
// };
