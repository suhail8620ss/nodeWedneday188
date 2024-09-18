const users = require('../users.json');
function getAllUser(req, res) {
     try {
          res.json(users);
     } catch(err) {
          console.log(err);
     }
}
function getParticularUser(req, res) {
     try{
          let id = parseInt(req.params.id);
          let  user = users.find((user) => user.id === id);
          console.log(user);
          res.json(user);
     } catch(err) {
          console.log(err);
     }
}
module.exports = {
     getAllUser,
     getParticularUser
}