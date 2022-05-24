const express = require("express");

const app = express();
const port = 8000; // Create API endpoints: http://localhost:8000/api/------>


// NEED THIS FOR POST REQS. THESE 2 LINES COME BEFORE THE ROUTES
app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 

require("./server/config/mongoose.config");

require("./server/routes/joke.routes")(app);









app.listen(port, ()=>console.log(`Listening on port ${port}`));