// const req = require('express/lib/request')
// const res = require('express/lib/response')
const mongoose = require('mongoose')
// const router = require('../routes/post')

const postSchema = mongoose.Schema({
    content: {
        type: String,
        require: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjecId,
        ref: 'User',
        require: true
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    modified_date: {
        type: Date,
        default: null
    },
    // username: {
    //     type: String,
    //     require: true
    // }
}, 
{
    versionKey: false
})

module.exports = mongoose.model('Post', postSchema, 'post')