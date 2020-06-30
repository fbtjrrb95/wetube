import express from "express";
import morgan from "morgan";
import helmet from  "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";

const app = express()
// const PORT = 4000;

// const handleListening = () =>{
//     console.log(`Listening on: http://localhost:${PORT}`);
// }

// const handleHome = (req, res)=>{
//     res.send('Hello from home');
// }

// const handleProfile = (req, res)=>{
//     res.send("You are on Profile");
// }
//middlewares are declared Top to Bottom.

//can kill middleware using res.send instead next
const middleware = (req, res, next)=>{
    res.send('not happening');
}
//middleware for using cookie for store information
//middlerware for security 
app.use(helmet());
app.set('view engine','pug');
app.use(cookieParser());

//middleware for making server can accept data with specific form 
//like json, urlenconded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//middleware for logging
app.use(morgan("dev"));


//kill middleware example
//app.get("/", middleware, handleHome);
// app.get("/", handleHome);

// app.get("/profile", handleProfile);


//pug가 route 객체에 접근할 수 있게 해준다. 
app.use(localsMiddleware);

app.use(routes.home,globalRouter); 
app.use(routes.users,userRouter);
app.use(routes.videos,videoRouter);

//app.listen(PORT, handleListening);

export default app;