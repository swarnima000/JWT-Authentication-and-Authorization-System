import "dotenv/config"
import express from "express"
import "express-async-errors"
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";
import userRoutes from "./routes/userRoutes.js";

const app=express();
const port=process.env.PORT || 5000;

app.use(express.json());
app.use(express.static('./public')) //frontend ko connect karne ke liye, static import huwa hai

app.use('/api/v1/',userRoutes)

app.get("/",(req,res)=>{
  res.send("<h1>JWT BASICS</h1>");
});

app.use(notFound)
app.use(errorHandler)

app.listen(port,console.log("server is running at port", port));


