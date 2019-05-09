const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require('bcryptjs')

const operationsSchema = new Schema({

    task: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false
    }

})
// operationsSchema.pre('save',async function(next){
//     const operation=this

// })

module.exports = mongoose.model('Operations', operationsSchema)