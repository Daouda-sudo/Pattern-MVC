// app/models/userModel.js
let users = {};

const User = {
  findAll: () => Object.values(users),

  create: (name, email, imgLink, prezzo, numero) => {
    const id = Date.now();
    const newUser = { 
      id, 
      name, 
      email, 
      imgLink, 
      prezzo, 
      numero: parseInt(numero) || 0 
    };
    
    users[id] = newUser; 
    return newUser;
  },

  findById: (id) => users[id],

  delete: (id) => {
    delete users[id];
  },

  addOne: (id) => {
    if (users[id]) {
      users[id].numero += 1;
    }
  },

  subtractOne: (id) => {
    if (users[id]) {
      users[id].numero -= 1;
    }
  },
};

module.exports = User;