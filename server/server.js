require("dotenv").config();
const express=require("express");
const  cors=require("cors");
const app=express();
const port=process.env.PORT || 8000;
const connectDb=require("./utils/db");
const contactrouter=require("./router/contactrouter");
app.use(express.json());
// const corsOptions={
//     origin:"http://localhost:3000",
//     method:"GET, POST, PUT, DELETE, PATCH, HEAD",
//     credentials:true,
// };
app.use(cors());

app.use("/api/form", contactrouter);
connectDb().then(()=>{
    app.listen(port, ()=>{
        console.log(`Server is running at port ${port}`);
    });
});