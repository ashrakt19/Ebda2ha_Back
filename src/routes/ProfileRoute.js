const express = require('express');
const bodyParser = require('body-parser');
const auth = require('../Middleware/auth');
const ProfileController = require('../Controllers/ProfileController');

const router = new express.Router();

router.use(bodyParser.json());

router.post('/', auth, ProfileController.buildProfile);
router.put('/', auth, ProfileController.buildProfile);
router.get('/', auth, ProfileController.getMyProfile);
router.get('/:user', auth, ProfileController.getUserProfile);

module.exports = router;
