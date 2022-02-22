const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('nueva version de vip notas');
});




module.exports = router;