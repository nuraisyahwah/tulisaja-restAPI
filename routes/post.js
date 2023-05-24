const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
    } catch (error) {
        res.json({
            message: error
        })
    }
})

module.exports = router