import express from "express";
import routes from "../routes";
import { editProfile, changePassword, userDetail } from "../controllers/userController";

const userRouter = express.Router();

// userRouter.get("/", (req,res) =>{
//     res.send('user index');
// })

// userRouter.get("/edit", (req,res) =>{
//     res.send('user edit');
// })

// userRouter.get("/password", (req,res) =>{
//     res.send('user password');
// })


userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);



export default userRouter;