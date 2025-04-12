const express = require('express');
const router = express.Router();
const { showRegisterForm, registerUser } = require('../controllers/authController');

router.get('pages/register', showRegisterForm);
router.post('pages/register', registerUser);

module.exports = router;