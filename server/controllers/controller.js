const axios = require( 'axios')

class Controller {
    static getCategories(req,res){
        axios.get('https://developers.zomato.com/api/v2.1/categories', {
            headers: {"user-key": '45cb6f0057c47a647cf6a67d79f57465'}
          })
          .then(function (response) {
            res.json(response.data.categories);
          })
          .catch(function (error) {
            res.json(error);
        });
    }

    static getCities(req,res){
        axios.get(`https://developers.zomato.com/api/v2.1/cities?q=${req.query.q}`, {
            headers: {"user-key": '45cb6f0057c47a647cf6a67d79f57465'}
          })
          .then(function (response) {
            res.json(response.data);
          })
          .catch(function (error) {
            res.json(error);
        });
    }

    static getCollections(req,res){
        axios.get(`https://developers.zomato.com/api/v2.1/collections?city_id=${req.query.city_id}`, {
            headers: {"user-key": '45cb6f0057c47a647cf6a67d79f57465'}
          })
          .then(function (response) {
            res.json(response.data.collections);
          })
          .catch(function (error) {
            res.json(error);
        });
    }

    static getCuisines(req,res){
        axios.get(`https://developers.zomato.com/api/v2.1/cuisines?city_id=${req.query.city_id}`, {
            headers: {"user-key": '45cb6f0057c47a647cf6a67d79f57465'}
          })
          .then(function (response) {
            res.json(response.data.cuisines);
          })
          .catch(function (error) {
            res.json(error);
        });
    }

    static getSearch(req,res){
        axios.get(`https://developers.zomato.com/api/v2.1/search?q=${req.query.q}`, {
            headers: {"user-key": '45cb6f0057c47a647cf6a67d79f57465'}
          })
          .then(function (response) {
            //   document.getElementById('a').innerHTML = "test"
                res.json(response.data.restaurants);
          })
          .catch(function (error) {
            res.json(error);
        });
    }
    
}

module.exports = Controller
