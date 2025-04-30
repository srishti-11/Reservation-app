// // // import express from "express";
// // // import {
// // //     createHotel,
// // //     deleteHotel,
// // //     getHotel,
// // //   updateHotel,
// // //   getHotels

// // //   } from "../controllers/hotelc.js";

// // //   import Hotel from "../models/Hotel.js";
  
// // //    import {verifyAdmin} from "../utils/verifyToken.js"
// // //   const router = express.Router();
  
// // //   //CREATE
// // //   router.post("/", verifyAdmin,  createHotel);
// // //  //update
// // //  router.put("/:id", verifyAdmin ,updateHotel);
// // //  router.delete("/:id",verifyAdmin , deleteHotel);
// // //  router.get("/:id", getHotel);
// // //  router.get("/", getHotels);
// // //  export default router;
// // import express from "express";
// // import {
// //   countByCity,
// //   countByType,
// //   // createHotel
// //   deleteHotel,
// //   getHotel,
// //   getHotelRooms,
// //   getHotels,
// //   updateHotel,
// // } from "../controllers/hotelc.js";
// // import Hotel from "../models/Hotel.js";
// // import {verifyAdmin} from "../utils/verifyTokens.js"
// // const router = express.Router();

// // //CREATE
// // router.post("/", verifyAdmin, createHotel);

// // //UPDATE
// // router.put("/:id", verifyAdmin, updateHotel);
// // //DELETE
// // router.delete("/:id", verifyAdmin, deleteHotel);
// // //GET

// // router.get("/find/:id", getHotel);
// // //GET ALL

// // router.get("/", getHotels);
// // router.get("/countByCity", countByCity);
// // router.get("/countByType", countByType);
// // router.get("/room/:id", getHotelRooms);

// // export default router;
// import express from "express";
// import {
//   countByCity,
//   countByType,
//   createHotel,
//   deleteHotel,
//   getHotel,
//   getHotelRooms,
//   getHotels,
//   updateHotel,
// } from "../controllers/hotelc.js";
// import Hotel from "../models/Hotel.js";
// import {verifyAdmin} from "../utils/verifyTokens.js"
// const router = express.Router();

// //CREATE
// router.post("/", verifyAdmin, createHotel);

// //UPDATE
// router.put("/:id", verifyAdmin, updateHotel);
// //DELETE
// router.delete("/:id", verifyAdmin, deleteHotel);
// //GET

// router.get("/find/:id", getHotel);
// //GET ALL

// router.get("/", getHotels);
// router.get("/countByCity", countByCity);
// router.get("/countByType", countByType);
// router.get("/room/:id", getHotelRooms);

// export default router;
import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from "../controllers/hotelc.js";
import { verifyAdmin, verifyToken } from "../utils/verifyTokens.js";

const router = express.Router();

// CREATE HOTEL (admin only)
router.post("/", verifyToken, verifyAdmin, createHotel);

// UPDATE HOTEL (admin only)
router.put("/:id", verifyToken, verifyAdmin, updateHotel);

// DELETE HOTEL (admin only)
router.delete("/:id", verifyToken, verifyAdmin, deleteHotel);

// GET SINGLE HOTEL
router.get("/find/:id", getHotel);

// GET ALL HOTELS
router.get("/", getHotels);

// GET HOTELS COUNT BY CITY
router.get("/countByCity", countByCity);

// GET HOTELS COUNT BY TYPE
router.get("/countByType", countByType);

// GET ROOMS FOR A HOTEL
router.get("/room/:id", getHotelRooms);

export default router;
