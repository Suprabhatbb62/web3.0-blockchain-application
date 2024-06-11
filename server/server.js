require("dotenv").config();
const express=require("express");
const  cors=require("cors");
const app=express();
const port=process.env.PORT || 8000;
const contactrouter=require("./router/contactrouter");
const corsOptions={
    origin:"http://localhost:3000",
    method:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials:true,
};
app.use(cors(corsOptions));
app.use(express.json());
const connectDb=require("./utils/db");
app.use("/api/form", contactrouter);
connectDb().then(()=>{
    app.listen(port, ()=>{
        console.log(`Server is running at port ${port}`);
    });
});