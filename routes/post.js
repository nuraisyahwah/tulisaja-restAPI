const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

function result(succ, msg, details) {
  if (details) {
    return {
      succes: succ,
      message: msg,
      data: details,
    };
  } else {
    return {
      succes: succ,
      message: msg,
    };
  }
}

router.get('/', async (req, res) => {
    try {
         const post = await Post.aggregate([
            {
                $lookup: {
                    from: 'user',
                    localField: 'user_id',
                    foreignField:'_id',
                    as: 'userData'
                }
            },
            {
                $set: {
                    id: '$_id',
                    username: { $arrayElemAt: [ '$UserData.username', 0 ] },
                    created_date: { $dateToString: { format: '%d-%m-%Y %H:%M:%S', date: ' $created_date', timezone: ' +07:00'} },
                    modified_date: { $dateToString: { format: '%d-%m-%Y %H:%M:%S', date: ' $created_date', timezone: ' +07:00'} },
                }
            },
            {
                $projrct: {
                    userData: 0,
                    _id: 0 
                }
            }
         ]);

         if (post.length > 0 ) {
            res.status(200).json(result(1, 'Retrive Data Success!', post))
         } else {
            res.status(200).json(result(1, 'Zero Data!'))
         }
    } catch (error){
        res.status(500).json(result(0,error.message))
    }
})
