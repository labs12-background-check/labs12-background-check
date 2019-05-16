const router = require('express').Router();

const Candidates = require('./candidateModel.js');


//# Create a Candidate
var https = require('https');
var username = '7f5a5a78-1684-4662-9a7f-c1ada1808861';
var password = '12c7f43a-81b5-4bc5-9796-2cbf4aeb4e8c';
var headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + new Buffer(username + ':' + password).toString('base64')
    };
var options = {
    host: 'api.accuratebackground.com',
    port: 443,
    path: '/v3/candidate',
    headers: headers,
    };
var req = https.request(options, function(res) {
    var body = "";
    res.on('data', function(data) {
        body += data;
    });
    res.on('end', function() {
        //here we have the full response, html or json object
         console.log(body);
    })
    res.on('error', function(e) {
        onsole.log("Got error: " + e.message);
    });
});
var dataString = JSON.stringify({
        'firstName' : 'Albert',
        'lastName': 'Einstein',
        'phone' : '206-555-1212',
        'dateOfBirth' : '1972-05-26',
        'ssn' : '531-90-1234',
        'email' : 'bert@physics.org'
    });
req.write(dataString);
req.end();




// // GET CANDIDATE
// // shows in console.log & in Postman
// var request = require("request");

// var options = { method: 'GET',
//   url: 'https://api.accuratebackground.com/v3/candidate',
//   headers: 
//    { 'cache-control': 'no-cache',
//      Connection: 'keep-alive',
//      'accept-encoding': 'gzip, deflate',
//      Host: 'api.accuratebackground.com',
//      'Postman-Token': '5f32126e-60f4-4dad-8dc1-a3b44ce47ffc,205b9389-bfd3-4e7b-b7ea-732ddc5baa67',
//      'Cache-Control': 'no-cache',
//      Accept: '*/*',
//      'User-Agent': 'PostmanRuntime/7.11.0',
//      Authorization: 'Basic N2Y1YTVhNzgtMTY4NC00NjYyLTlhN2YtYzFhZGExODA4ODYxOjEyYzdmNDNhLTgxYjUtNGJjNS05Nzk2LTJjYmY0YWViNGU4Yw==',
//      'Content-Type': 'application/json' } };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });





// // // POST CANDIDATE
// // // shows in console.log & in Postman
// // // error in console log but working in Postman:
// // // {
// // //   "errors" : [ {
// // //     "code" : "102",
// // //     "message" : "invalid request data",
// // //     "param" : null
// // //   } ]
// // // }
// var request = require("request");

// var options = { method: 'POST',
//   url: 'https://api.accuratebackground.com/v3/candidate/',
//   headers: 
//    { 'cache-control': 'no-cache',
//      Connection: 'keep-alive',
//      'content-length': '3367',
//      'accept-encoding': 'gzip, deflate',
//      Host: 'api.accuratebackground.com',
//      'Postman-Token': '22f25894-851b-4fe4-a388-54cee957ae03,399eca6f-9950-4548-9378-08eac8a6089a',
//      'Cache-Control': 'no-cache',
//      Accept: '*/*',
//      'User-Agent': 'PostmanRuntime/7.11.0',
//      Authorization: 'Basic N2Y1YTVhNzgtMTY4NC00NjYyLTlhN2YtYzFhZGExODA4ODYxOjEyYzdmNDNhLTgxYjUtNGJjNS05Nzk2LTJjYmY0YWViNGU4Yw==',
//      'Content-Type': 'application/json' } };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });





// // GET ORDER
// // shows in console.log & in Postman
// // same 102 error as for Post
var request = require("request");

var options = { method: 'GET',
  url: 'https://api.accuratebackground.com/v3/order/',
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     'content-length': '153',
     'accept-encoding': 'gzip, deflate',
     Host: 'api.accuratebackground.com',
     'Postman-Token': '0140e271-034a-4bb2-aa03-eb6451771ff7,65bfe755-838d-457c-8e03-dd4c497854a8',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.11.0',
     Authorization: 'Basic N2Y1YTVhNzgtMTY4NC00NjYyLTlhN2YtYzFhZGExODA4ODYxOjEyYzdmNDNhLTgxYjUtNGJjNS05Nzk2LTJjYmY0YWViNGU4Yw==' },
  form: 
   { candidateId: '5cdc4074093c611a5ebdbd6d',
     workflow: 'EXPRESS',
     packageType: 'PKG_BASIC',
     'jobLocation.city': 'San Francisco',
     'jobLocation.region': 'CA',
     'jobLocation.country': 'US' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});






// POST ORDER for Canidate
// shows in console.log & in Postman
// same 102 error as for Post
var request = require("request");

var options = { method: 'POST',
  url: 'https://api.accuratebackground.com/v3/order/',
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     'content-length': '153',
     'accept-encoding': 'gzip, deflate',
     Host: 'api.accuratebackground.com',
     'Postman-Token': 'ff9f0d62-e720-496e-9e82-888e8004a2aa,d7dab321-61ed-4b6b-bbf5-8da26ec19c83',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.11.0',
     Authorization: 'Basic N2Y1YTVhNzgtMTY4NC00NjYyLTlhN2YtYzFhZGExODA4ODYxOjEyYzdmNDNhLTgxYjUtNGJjNS05Nzk2LTJjYmY0YWViNGU4Yw==' },
  form: 
   { candidateId: '5cdc4074093c611a5ebdbd6d',
     workflow: 'EXPRESS',
     packageType: 'PKG_BASIC',
     'jobLocation.city': 'San Francisco',
     'jobLocation.region': 'CA',
     'jobLocation.country': 'US' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});



// module.exports = server => {
//   server.get('/api/candidates', getCanidates);
// };

// function getCanidates(req, res) {
//   const requestOptions = {
//     headers: { accept: 'application/json' },
//   };

//   axios
//     .get('https://api.accuratebackground.com/v3/candidate/', requestOptions)
//     .then(response => {
//       res.status(200).json(response.data.results);
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Error Fetching Candidates', error: err });
//     });
// }




// // candidateRouter
// router.get('/candidates', (req, res) => {
//   Candidates.find()
//     .then(candidate => {
//         res.json(candidate);
//     })
//     .catch(err => 
//         res.status(500).json(err));
// });

// router.get('/candidates/:id', (req, res) => {
//   Candidates.findById(req.params.id)
//     .then(candidate => {
//         res.json(candidate);
//     })
//     .catch(err => 
//         res.status(500).json(err));
// });

// router.post('/candidates', (req, res) => {
//   Candidates.add(req.body)
//     .then(candidate => {
//         res.json(candidate);
//     })
//     .catch(err =>
//         res.status(500).json(err));
// });

// router.put('/candidates/:id', (req, res) => {
//   Candidates.update(req.params.id, req.body)
//       .then(candidates => {
//         res.json(candidates);
//       })
//       .catch(err => 
//         res.status(500).json(err));
// });

// router.delete('/candidates/:id', async (req, res) => {
//     try {
//       const deleteCandidate = await Candidates.remove(req.params.id);
//       res.status(200).json(deleteCandidate);
//     } catch (error) {
//       res.status(500).json({
//         message: 'Error deleting candidate',
//       });
//     }
// });

module.exports = router;