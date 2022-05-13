const Quote = require("../models/quote.model")


module.exports.sayHello = (req, res)=>{
    res.json({msg: "Yoyo."})
}

module.exports.findAllQuotes = (req, res)=>{
    Quote.find()
        .then(allQuotes=>{
            res.json({results: allQuotes})
        })
        .catch(err=>{
            res.json({msg: "Sum not good", error: err})
        })
}

module.exports.createQuote = (req,res)=>{
    Quote.create(req.body)
        .then(newlyCreatedQuote=>{
            res.json({results: newlyCreatedQuote})
        })
        .catch(err=>{
            res.json({msg: "Sum not good", error: err})
        })
}


module.exports.findQuote = (requ,res) =>{
    Quote.findOne({_id: req.params.id})
        .then(foundQuote =>{
            res.json({msg: "Found Quote"})
        })
        .catch(err=>{
            res.json({msg: "Sum not good", error: err})
        })
}

module.exports.updateQuote = ()=>{
    Quote.updateOne(
        {_id: req.params.id}, 
        req.body,
    )
        .then(updateQuote=>{
            res.json({results: updatedQuote})
        })
        .catch(err=>{
            res.json({msg: "Sum not good", error: err})
        })
}

module.exports.deleteQuote = (requ,res)=>{
    Quote.deleteOne({_id: req.params.id})
        .then()
        .catch(err=>{
            res.json({msg: "Sum not good", error: err})
        })
}