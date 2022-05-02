require('dotenv').config()
const axios = require('axios');
const { json } = require('express/lib/response');

function obj(name, price, day, day7, mc, vol, cs){
    this.name = name
    this.price = price
    this.day = day
    this.day7 = day7
    this.mc = mc
    this.vol = vol
    this.cs = cs
}

exports.getCoin = async (req, res) => {

let response = null;
let list_coin = []
let result = await new Promise(async (resolve, reject) => {
  try {
    response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=40', {
      headers: {
        'X-CMC_PRO_API_KEY': process.env.API_KEY,
      },
    });
  } catch(ex) {
    response = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response) {
    // success
    const json = response.data;
    resolve(json);
  }
});


result.data.forEach(coin => {
    // console.log(coin)
    var name = coin.name
    var price = coin.quote.USD.price
    var day = coin.quote.USD.percent_change_24h
    var day7 = coin.quote.USD.percent_change_7d
    var mc = coin.quote.USD.market_cap
    var vol = coin.quote.USD.volume_24h
    var cs = coin.circulating_supply


    list_coin.push(new obj(name, price, day, day7, mc, vol, cs))
});
res.send(list_coin)

}