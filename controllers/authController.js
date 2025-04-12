const User = require('../models/User');

const showRegisterForm = (req, res) => {
  res.render('pages/register');
};

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.redirect('/register?success=true');
  } catch (err) {
    console.error(err);
    res.status(500).send('Registration failed');
  }
};

module.exports = {
  showRegisterForm,
  registerUser,
};