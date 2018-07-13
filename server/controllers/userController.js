const mongoose = require('mongoose');
const db = mongoose.connection;
const User = require('../models/user')
var FB = require('fb')
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
mongoose.connect('mongodb://localhost:27017/quoteskuy');


class UserController {
  static home(req, res){
    res.send('Welcome to users!');
  }
  static registerUser(req, res){
    // console.log(req.headers.token);
    // console.log(req.body);
    FB.api('me', { fields: ['id', 'name', 'email', 'first_name'], access_token: `${req.headers.token}` }, function (resFb) {
      // console.log(resFb);
      User.findOne({ email: resFb.email }, function (err, user) {
        // console.log(user);
        if (user === null) {
          const saltUser = bcrypt.genSaltSync(8)
          const hashedPassword = bcrypt.hashSync(`${resFb.first_name.toLowerCase()}123`, saltUser)

          User.create({
            fId: resFb.id,
            name: resFb.name,
            email: resFb.email,
            password: hashedPassword,
            salt: saltUser
          })
          .then( user =>{
            const tokenUser = jwt.sign({ id : user._id, email : user.email }, process.env.JWT_SECRET_KEY);
            // console.log(tokenUser);
            req.headers.token = tokenUser
            // localStorage.setItem("token", tokenUser);
            res.status(200).json(tokenUser)
          })
          // , function (err, small) {
          //   if (err) return handleError(err);
          //   // console.log(small);
          // });
        }else{
          const tokenUser = jwt.sign({ id : user._id, email : user.email }, process.env.JWT_SECRET_KEY);
          // console.log(tokenUser);
          req.headers.token = tokenUser
          // localStorage.setItem("token", tokenUser);
          res.status(200).json(tokenUser)
        }
      });
    });
  }
}

module.exports = UserController
