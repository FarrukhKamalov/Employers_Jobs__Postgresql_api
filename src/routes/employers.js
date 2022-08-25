const {Router} = require("express");
const router = Router();
const {AllEmployer, AddEmploy, UpdateEmployer, deleteEmployer, GetSingleEmploye} = require('../controllers/employer.controller');


router.get('/', AllEmployer)
router.get('/:id', GetSingleEmploye)
router.post('/add', AddEmploy)
router.put('/:id', UpdateEmployer)
router.delete('/:id', deleteEmployer)

module.exports = router