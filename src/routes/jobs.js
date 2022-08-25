const {Router} = require("express");
const router = Router();
const {AllJobs, AddJobs, RemoveJobs, GetSingleJob} = require('../controllers/jobs.controller');


router.get('/', AllJobs)
router.get('/:id', GetSingleJob)
router.post('/add', AddJobs)
router.delete('/:id', RemoveJobs)

module.exports = router;