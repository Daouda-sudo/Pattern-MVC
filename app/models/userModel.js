// app/models/userModel.js
let users = [];
const User = {
  findAll: () => users,
  create: (name, email, imgLink, prezzo, numero) => {
    const newUser = { id: Date.now(), name, email, imgLink, prezzo, numero };
    users.push(newUser);
    return newUser;
  },
  findById: (id) => users.find(u => u.id === parseInt(id)),
  delete: (id) => {
    users = users.filter(u => u.id !== parseInt(id));
  },
  addOne: (id) => {
    for(let i = 0; i<users.length; i++){
       if(users[i].id ==  parseInt(id)){
        let n = parseInt(users[i].numero)
        users[i].numero = n+1;
      }
    }
  },
  subtractOne: (id) => {
    for(let i = 0; i<users.length; i++){
       if(users[i].id ==  parseInt(id)){
        let n = parseInt(users[i].numero)
        users[i].numero = n-1;
      }

    }
  },
  
};

module.exports = User;