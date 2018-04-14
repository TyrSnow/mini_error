const { Router } = require('express');

const UserController = require('./controller');

const router = new Router();
router.post('/users', UserController.regist);

module.exports = router;
