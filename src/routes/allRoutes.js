import express from "express"
import blogRoute from "./blogRoute.js"
import signupRoute from "./signupRoute.js"
import sendMessageRoute from "./sendMessageRoute.js"
import loginRoute from "./loginRoute.js"
import swaggerui from "swagger-ui-express"
import documentation from "../docs/swaggerOptions.js"

const router = express.Router()



// all routes
router.use("/blogs", blogRoute);
router.use("/signup",signupRoute);
router.use("/sendMessage",sendMessageRoute);
router.use("/login",loginRoute);

router.use("/documentation", swaggerui.serve, swaggerui.setup(documentation),)


export default router;