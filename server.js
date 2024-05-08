import app from "./app.js";


app.listen(process.env.PORT,()=>{
    console.log(` server listining on port ${process.env.PORT} `);
});

