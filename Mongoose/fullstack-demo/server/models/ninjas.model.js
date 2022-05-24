const { default: mongoose } = require("mongoose")
const Mongoose = require ("mongoose")

const NinjaSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be more than 2 characters"]
    }, 
    numProjects: {
        type: Number, 
        required: [true, "Name is required"],
        min: [0, "Can't have less than 0 projects"]
    },
    gradDate: {
        type: Date, 
        required: [true, "Date is required"],
        min: ['2012-01-01', "Date cant be before 2012"]
    },
    // Optional field, you dont need the required part
    isVeteran: {
        type: Boolean
    }
}, {timestamps:true})

const Ninja = mongoose.model("Ninja", NinjaSchema)

module.export = Ninja;