import express from "express";
import morgan from "morgan";
import cors from "cors";

import consultaroutes from './consultasrouter';

const app = express();

app.set("port", process.env.PORT || 4000);
app.use(consultaroutes)
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



export default app;