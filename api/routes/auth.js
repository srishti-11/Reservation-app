// // import express from "express";
// // import{register} from "../controllers/authc.js";
// // const router = express.Router();
// // router.post("/register", register)
// // router.post("/login", login)
// // export default router
// import express from "express";

// import { register, login } from "../controllers/authc.js";

// const router = express.Router();

// router.post("/register", register);
// router.post("/login", login);

// export default router;
// api/routes/auth.js
import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router; // ✅ This is what was missing
