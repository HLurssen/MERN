const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000; // Create API endpoints: http://localhost:8000/api/------>

// ======================================================================== //
// ======================================================================== //

class User{
    constructor(){
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.number = faker.phone.phoneNumber('508-###-###');
        this.email = faker.internet.email();
        this.password = faker.internet.password()
    }
}
app.get("/api/users", (req, res)=>{
    let newUser = new User();
    res.json(newUser)
})


class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.address = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipcode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}
app.get("/api/companies", (req, res)=>{
    let newCompany = new Company();
    res.json(newCompany)
})



app.get("/api/companies/new", (req, res) => {
    res.json( new Company() );
});



app.get("/api/user/company", (req, res) => {
    const user = new User();
    const company = new Company;
    res.json([ user, company ]); 
});



app.listen(port, ()=>console.log(`Listening on port ${port}`));


// // NEED THIS FOR POST REQS. THESE 2 LINES COME BEFORE THE ROUTES
// app.use(express.json()); //Lets us convert form info to JSON
// app.use(express.urlencoded({extended:true})); // Lets app parse form info.

// =====================================================================================//

// // GET message entered in msg
// app.get("/api/hello", (req, res)=>{
//     res.json({msg: "Yo. You been slacking bozo"});
// })

// //  GET all quotes setup
// app.get("/api/quotes", (req, res)=>{
//     res.json({count: quotes.length, results: quotes});
// })

// // GET one quote w/ id
// app.get("/api/quotes/:idx", (req, res)=>{
//     res.json({results: quotes[req.params.idx]})
// })

// // Create a quote
// app.post("/api/quotes", (req, res)=>{
//     console.log("req.body is this --->", req.body)
//     quotes.push(req.body)
//     res.json({count: quotes.length, results: quotes});
// })

// // Update a quote using index numbers
// app.put("/api/quotes/:idx", (req, res)=>{
//     quotes[req.params.idx] = req.body; // New info here
//     res.json({count: quotes.length, results: quotes});
// })

// // Delete a quote using id
// app.delete("/api/quotes/:idx", (req, res)=>{
//     const idx = req.params.id;
    
//     quotes.splice(idx, 1);
    
//     res.json({count: quotes.length, results: quotes});
    
// })

// =====================================================================================//

// // Fake Data Here: 
// let quotes = [
//     {content: "I saved a life: my own. Am I a hero? I can't say ... but, yes.", author: "Michael Scott"},

//     {content: "That's what she said", author: "Michael Scott"},

//     {content: "People say money is not the key to happiness, but I have always figured if you have enough money, you can have a key made.", author: "Joan Rivers"},

//     {content: "Please don't feel sorry, I love where I'm going.", author: "bicaso, Gen Kakon"},

//     {content: "Wish we'd grown up on the same advice", author: "Frank Ocean"}, 

//     {content: "One time my refrigerator stopped working; I didn't know what to do. I just moved.", author: "Tom from Parks and Rec"},
    
//     {content: "B-E-A-Uuuutiful", author: "Jim Carrey"}, 

//     {content: "AAUUGGGGHHHHH", author: "Crackhead on 6th st."}
// ]