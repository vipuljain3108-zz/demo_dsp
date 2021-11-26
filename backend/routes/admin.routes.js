let admin = require('../controllers/admin.controller')
const express = require('express');
const router = express.Router()


router.get('/getAllMenus', admin.getAllMenus)
router.post('/createMenu', admin.createMenu)
router.post('/editStatus', admin.editStatus)


module.exports = router;