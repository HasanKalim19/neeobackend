const router = require('express').Router();
const userController = require('./controller');

router.post('/login', userController.authenticate);

module.exports = router;
