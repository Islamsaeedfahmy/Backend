import express from "express";

const app = express();
const port = 3000;

app.get("/", (req,res)=>{

    // const d = new Date();
    // let day = d.getDay();
    let day = 1;
    let x = "A Weekday";
    let y ="it is time to work hard  🙃";

    if(day === 0  || day === 6){
        x = "The Weekend";
        y ="it is time to Have fun 🤩"
} 

    res.render("index.ejs",
    {dayType:x ,advice : y});
    
})

app.listen(port, (req,res)=>{
    console.log(`The server is running on port ${port}.`);

})