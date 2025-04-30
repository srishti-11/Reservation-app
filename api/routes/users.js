// import express from "express";
// import {
//   updateUser,
//   deleteUser,
//   getUser,
//   getUsers,
// } from "../controllers/userc.js";
// import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyTokens.js";

// const router = express.Router();

// // router.get("/checkauthentication", verifyToken, (req,res,next)=>{
// //   res.send("hello user, you are logged in")
// // })

// // router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
// //   res.send("hello user, you are logged in and you can delete your account")
// // })

// // router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
// //   res.send("hello admin, you are logged in and you can delete all accounts")
// // })

// //UPDATE
// router.put("/:id", verifyUser, updateUser);

// //DELETE
// router.delete("/:id", verifyUser, deleteUser);

// //GET
// router.get("/:id", verifyUser, getUser);

// //GET ALL
// router.get("/", verifyAdmin, getUsers);

// export default router;
import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/userc.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyTokens.js";

const router = express.Router();

// UPDATE
router.put("/:id", verifyToken, verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyToken, verifyUser, deleteUser);

// GET SINGLE USER
router.get("/:id", verifyToken, verifyUser, getUser);

// GET ALL USERS (admin only)
router.get("/", verifyToken, verifyAdmin, getUsers);

export default router;
