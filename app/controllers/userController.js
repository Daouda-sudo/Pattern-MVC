// app/controllers/userController.js
const User = require('../models/userModel');
exports.home = (req, res) => {
  res.render('index');
};
exports.listUsers = (req, res) => {
  const users = User.findAll(); //prende dati dal model
  res.render('users', { users }); //li mostra con la view
};
exports.createUser = (req, res) => {
  const { name, email, imgLink } = req.body;
  User.create(name, email, imgLink);
  res.redirect('/users');
};
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  User.delete(id);
  res.redirect('/users');
};