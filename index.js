import express from "express";
import cors from 'cors'
import Connection from "./database/db.js";
import toDoRouter from "./routes/route.js";


const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
const PORT = 8000;
await Connection();


app.use('/', toDoRouter)
app.listen(PORT, () => {
    console.log(`Your server is running successfully on PORT ${PORT}`)
})