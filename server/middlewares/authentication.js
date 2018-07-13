const jwt = require('jsonwebtoken')
require('dotenv').config()

class Authentication {
  static authenticationRead(req, res, next){
    jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY, function(err,decoded){
      console.log(decoded.id);
      console.log(decoded.email);
      if (decoded === undefined) {
        res.redirect('http://localhost:8080/login')
      }else {
        next()
      }
    })
  }
}

module.exports = Authentication
