const QuoteController = require("../controllers/quote.controller");


module.exports = (app)=>{
    app.get("/api/hello", QuoteController.sayHello);
    app.get("/api/quotes", QuoteController.findAllQuotes);
    app.post("/api/quotes", QuoteController.createQuote);
    app.get("/api/quotes/:id", QuoteController.findOneQuote)
    app.put("/api/quote/:id", QuoteController.updateQuote);
    app.delete("/api/quotes/:id", QuoteController.deleteQuote)
}

