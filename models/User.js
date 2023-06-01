const mongoose = require('mongoose')

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
    modified_date: {
        type: Date,
        dafault_date: null
    }
}, {
    versionKey: false
})

userSchema.method('toJSON', function () {
    const {
        _id,
        ...Object
    } = this.toObject()
    Object.id = _id
    Object.created_date = created_date
})

module.exprorts = mongoose.model('user', userSchema, 'user')