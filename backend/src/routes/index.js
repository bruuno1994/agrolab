const router = require('express').Router()
require('../MongoDB/mongocon')
const devices = require('./devices')
router.use('/devices', devices)

router.get('/', (req,res)=>{
      
    res.json({
        success: false,
        message:"Reserved access"
    })
})

module.exports = router