const mongoose =  require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        max: 45
    },
    password: {
        type: String,
        require: true,
        min: 6,
        max: 255
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    modified_date:{
        type: Date,
        dafault_date: null
    }
},{
    versionKey: false
})

module.exprorts = mongoose.model('user', userSchema,'user')