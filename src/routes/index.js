const {Router} = require('express');
const router  = Router();
const jobsRouter = require('./jobs')
const employerRouter = require('./employers')

router.use('/jobs', jobsRouter)
router.use('/employer', employerRouter)
router.use((req,res,next)=>{
    res.status(404).json({
        message: 'Not found'
    })
})
module.exports = router;