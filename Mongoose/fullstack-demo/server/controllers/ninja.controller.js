const Ninja = require("../model/ninja.model");


module.exports.sayHello = (req,res)=>{
    res.json({msg: "wazzaaap mongoose quotes api"});
}

module.exports.findAllQuotes = (req,res)=>{
    Ninja.find()
        .then(allNinjas=>{
            res.json({results: allNinjas})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

module.exports.createNinja = (req,res)=>{
    //req.body represents form information
    Ninja.create(req.body)
        .then(newlyCreatedNinja=>{
            res.json({results: newlyCreatedNinja})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

module.exports.findOneNinja = (req,res)=>{
    Ninja.findOne({_id: req.params.id})
        .then(foundNinja =>{
            res.json({results: foundNinja})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

module.exports.updateNinja = (req,res)=>{
    Ninja.findOneAndUpdate(
        {_id: req.params.id}, //specify which Ninja to update
        req.body, //specify the form information to update the Ninja with
        { new: true, runValidators: true }
    )
        .then(updatedNinja=>{
            res.json({results: updatedNinja})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

module.exports.deleteNinja = (req,res)=>{
    Ninja.deleteOne({_id: req.params.id})
        .then(deletedNinja=>{
            res.json({results: deletedNinja})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}