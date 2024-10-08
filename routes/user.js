const express = require('express');
const router = express.Router();
router.use(express.json());
const usercontroller = require('../controller/usercontroller');

router.get('/users', (req, res) => {
     usercontroller.getAllUser(req, res);
})
 router.get('/users/:id', (req, res) => {
     usercontroller.getParticularUser(req, res);
 })
module.exports = router;