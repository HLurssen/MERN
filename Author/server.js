const express = require("express"); //importing express
const cors = require("cors");
const app = express(); 
const port = 8000; 

//NEED THIS TO HANDLE POST REQUESTS.
app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 
app.use(cors());


require("./server/config/mongoose.config");

//routes here- MAKE SURE ROUTES IMPORT IS BELOW ALL THE APP.USE COMMANDS ABOVE
require("./server/routes/author.routes")(app);



//THIS LINE NEEDS TO BE AT THE BOTTOM OF THE FILE
app.listen(port, ()=>console.log(`Listening on port ${port}`));