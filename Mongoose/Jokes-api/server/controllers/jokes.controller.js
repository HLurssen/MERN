const Joke = require ("../models/jokes.model");

module.exports.sayHello = (req,res)=>{
    res.json({msg: "Japanese Denim"});
}
// ================================================= //
module.exports.findAllJokes = (req,res)=>{
    Joke.find()

        .then(allJokes=>{
            res.json({results: allJokes})
        })

        .catch(err=>{
            res.json({msg: "Sum' aint right homie.", error: err})
        })
}
// ================================================= //
module.exports.createJoke = (req,res)=>{
    Joke.create(req.body)

        .then(newlyCreatedJoke=>{
            res.json({results: newlyCreatedJoke})
        })

        .catch(err=>{
            res.json({msg: "Sum' aint right homie.", error: err})
        })
}
// ================================================= //
module.exports.findOneJoke = (req,res)=>{
    Joke.findOne({_id: req.params.id})

        .then(foundJoke =>{
            res.json({resuls: foundJoke})
        })

        .catch(err=>{
            res.json({msg: "Sum' aint right homie.", error: err})
        })
}
// ================================================= //
module.exports.updateJoke = (req,res)=>{
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
        )

        .then(updatedJoke=>{
            res.json({results: updatedJoke})
        })

        .catch(err=>{
            res.json({msg: "Sum' aint right homie.", error: err})
        })
}
// ================================================= //
module.exports.deleteJoke = (req,res)=>{
    Joke.deleteOne({_id: req.params.id})

        .then(deletedJoke=>{
            res.json({results: deletedJoke})
        })

        .catch(err=>{
            res.json({msg: "Sum' aint right homie.", error: err})
        })
}