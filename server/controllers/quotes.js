const axios = require('axios')
class Controller {

  static show(req, res) {
    //Quote of the day
    axios.get('http://quotes.rest/qod/', {
        headers: {
          'X-TheySaidSo-Api-Secret': 'o0IhWdHzQTpU9MfQVoEiogeF',
        }
      })
      .then(function (response) {
        let quote = response.data.contents.quotes[0].quote
        let author = response.data.contents.quotes[0].author
        let category = response.data.contents.quotes[0].category

        res.json({
          quote,
          author,
          category
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  //random quote bro
  static random(req, res) {
    axios.get('http://quotes.rest/quote/random.json', {
        headers: {
          'X-TheySaidSo-Api-Secret': 'o0IhWdHzQTpU9MfQVoEiogeF'
        }
      })
      .then(function (response) {
        let quote = response.data.contents.quote;
        let author = response.data.contents.author
        res.json({
          quote,
          author
        })
      })
      .catch(function (err) {
        res.json(err)
      })
  }


  // http://quotes.rest/quote/search?query=god&private=false

  static cari(req, res) {
    axios.get(`http://quotes.rest/quote/search?query=${req.query.query}`, {
        headers: {
          'X-TheySaidSo-Api-Secret': 'o0IhWdHzQTpU9MfQVoEiogeF'
        }
      })
      .then(function (response) {
        let quote = response.data.contents.quote;
        let author = response.data.contents.author
        res.json({
          quote,
          author
        })
      })
      .catch(function (err) {
        res.json(err)
      })
  }





  static pict(req, res) {
    axios.get('http://quotes.rest/quote/image/search.json', {
        headers: {
          'X-TheySaidSo-Api-Secret': 'o0IhWdHzQTpU9MfQVoEiogeF',
        }
      })
      .then(function (response) {
        let picts = response.data.contents.qimage.download_uri
        res.json(picts)
      })
  }






  static showInspire(req, res) {
    axios.get('http://quotes.rest/qod.json?category=inspire', {
        headers: {
          'X-TheySaidSo-Api-Secret': 'o0IhWdHzQTpU9MfQVoEiogeF',
        }
      })
      .then(function (datas) {
        let quote = datas.data.contents.quotes[0].quote
        let author = datas.data.contents.quotes[0].author
        res.json({
          quote,
          author
        })
      })
      .catch(function (err) {
        res.json(err)
      })
  }








}

module.exports = Controller
