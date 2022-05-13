const express = require("express");
const app = express();
const port = 8000;

// Create API endpoints: http://localhost:8000/api/hello

app.get("/api/hello", (req, res)=>{
    res.json({msg: "Yo"})
})











app.listen(port, ()=>console.log(`Listening on port ${port}`));