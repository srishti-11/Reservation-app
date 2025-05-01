
// import jwt from "jsonwebtoken";
// import { createError } from "../utils/error.js";

// // Token verification middleware
// export const verifyToken = (req, res, next) => {
//   const token = req.cookies.access_token;
//   if (!token) {
//     return next(createError(401, "You are not authenticated!"));
//   }

//   jwt.verify(token, process.env.JWT, (err, user) => {
//     if (err) return next(createError(403, "Token is not valid!"));
//     req.user = user;
//     next();
//   });
// };

// // User authorization middleware
// export const verifyUser = (req, res, next) => {
//   verifyToken(req, res, (err) => {
//     if (err) return next(err);
//     if (req.user.id === req.params.id || req.user.isAdmin) {
//       next();
//     } else {
//       return next(createError(403, "You are not authorized!"));
//     }
//   });
// };

// // Admin authorization middleware
// export const verifyAdmin = (req, res, next) => {
//   verifyToken(req, res, (err) => {
//     if (err) return next(err);
//     if (req.user.isAdmin) {
//       next();
//     } else {
//       return next(createError(403, "You are not authorized!"));
//     }
//   });
// };
// utils/verifyTokens.js

// Dummy middleware to bypass authentication and authorization

export const verifyToken = (req, res, next) => {
  // Mock user object to simulate an authenticated user
  req.user = { id: "mockUserId", isAdmin: true };
  next();
};

export const verifyUser = (req, res, next) => {
  // Skip actual user authorization
  next();
};

export const verifyAdmin = (req, res, next) => {
  // Skip actual admin check
  next();
};
