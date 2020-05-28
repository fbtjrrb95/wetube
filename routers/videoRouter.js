import express from "express";
import routes from "../routes";
import { editVideo, videoDetail, deleteVideo } from "../controllers/videoController";

 const videoRouter = express.Router();

videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.deleteVideo, deleteVideo);

 export default videoRouter;