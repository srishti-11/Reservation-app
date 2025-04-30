// import express from "express";
// import {
//   createRoom,
//   deleteRoom,
//   getRoom,
//   getRooms,
//   updateRoom,
//   updateRoomAvailability,
// } from "../controllers/roomc.js";
// import { verifyAdmin } from "../utils/verifyTokens.js";

// const router = express.Router();
// //CREATE
// router.post("/:hotelid", verifyAdmin, createRoom);

// //UPDATE
// router.put("/availability/:id", updateRoomAvailability);
// router.put("/:id", verifyAdmin, updateRoom);
// //DELETE
// router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
// //GET

// router.get("/:id", getRoom);
// //GET ALL

// router.get("/", getRooms);

// export default router;
import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/roomc.js";
import { verifyAdmin, verifyToken } from "../utils/verifyTokens.js";

const router = express.Router();

// CREATE ROOM (admin only)
router.post("/:hotelid", verifyToken, verifyAdmin, createRoom);

// UPDATE AVAILABILITY (any authenticated user)
router.put("/availability/:id", verifyToken, updateRoomAvailability);

// UPDATE ROOM (admin only)
router.put("/:id", verifyToken, verifyAdmin, updateRoom);

// DELETE ROOM (admin only)
router.delete("/:id/:hotelid", verifyToken, verifyAdmin, deleteRoom);

// GET SINGLE ROOM
router.get("/:id", getRoom);

// GET ALL ROOMS
router.get("/", getRooms);

export default router;
