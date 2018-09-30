const express = require('express');
var cors = require('cors');
const app = express();

var corsOptions = {
  origin: 'https://www.yourdomain.com', // only allow from your domain to prevent 3rd party use of API key
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get("/kvk-2", cors(corsOptions), (req,res)=>{
        var tradeName = req.query.tradename; //get company name from the 'tradename' parameter in the GET request
        var request = require('request'); 
        var url = 'https://api.kvk.nl:443/api/v2/search/companies'; 
        var queryParams = '?' +  encodeURIComponent('tradeName') + '=' + encodeURIComponent(tradeName)+ '&' + encodeURIComponent('country') + '=' + encodeURIComponent('Nederland'); // we are only searching for companies in The Netherlands
        request({
        url: url + queryParams,
            headers: { 'apikey':'<<INSERT KVK API KEY HERE>>'  },
            method: 'GET'
        }, // actual request to the KVK api
        function (error, response, body) { 
            res.send(body)
        }); // send entire KVK response to the GET request
});

app.listen(8080); // port defined in nginx 'default' file on server