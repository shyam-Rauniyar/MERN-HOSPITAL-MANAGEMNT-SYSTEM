import express from "express";
import {config} from "dotenv";
import cors from "cors";
import cookieparser from "cookie-parser";
import fileUpload from "express-fileUpload";
import {dbConnection} from "./database/dbConnection.js";

const app=express();
config({path: "./config/config.env"});

app.use(
    cors({
        origin:[process.env.FRONDEND_URI, process.env.DASHBOARD_URI],
        methods:["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);
app.use(express.json());
app.use(cookieparser());
app.use(express.urlencoded({extended: true}));

app.use(fileUpload({
    useTempFile:true,
    tempFileDir:"/tmp/",
}));


 dbConnection();
export default app;