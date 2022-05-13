const express = require("express");

const app = express();
const port = 8000;


app.use(express.json());
app.use(express.urlencoded({exteneded:true}));



require ("./server/config/mongoose.config")



require("./server/routes/quote.routes")(app);




app.listen(port, ()=>console.log(`Listening on port ${port}`));