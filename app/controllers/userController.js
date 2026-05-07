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
  const { name, email, imgLink, prezzo, numero } = req.body;
  User.create(name, email, imgLink, prezzo, numero);
  res.redirect('/users');
};
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  User.delete(id);
  res.redirect('/users');
};

exports.addOne = (req, res) => {
 const {numero} = req.body;
 const { id } = req.params;
 User.addOne(id);
 res.redirect('/users');
}

exports.subtractOne = (req, res) => {
  const {numero} = req.body;
  const { id } = req.params;
  User.subtractOne(id);
  res.redirect('/users');
 }

 exports.totale = (req, res) => {
  const { id } = req.params;
  const totale = User.totale(id);
  res.render('totale', { totale });
 }