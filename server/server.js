const express = require('express');
const Twitter = require('twit');
const app = express();
const http = require('http');
const request = require('request');
const client = new Twitter({
    consumer_key: 'I8qClMN8kMhkREqLrhZAHAyn0',
    consumer_secret: 'b8jGn6gVD2kNr19KSCy4d2pv5JHB9GvwDP10YOodc4rmYFrm8B',
    access_token: '262432611-uJ8mRVYY6mbMK03Y4OLqJ98LFOettukKajuNGJje',
    access_token_secret: 'YMXbZ19g8ojYKiHkkRcbMU2Ww5sWL5JeOROW8kaeNeAzr'
});

const bearerToken =
'Bearer AAAAAAAAAAAAAAAAAAAAAIiNPQEAAAAAjNnr%2BwwIMuo%2BOsweigjawpRPhkU%3Dm9v5BTsjygz7hRuhRU6RyP6CLuXb6gGeVCga7dChqLwzN0LQnT';


app.use(require('cors')());
app.use(require('body-parser').json());

app.get('/test', (req, res) => {
    const tweet = { status: 'WebApi successfully' };
    res.json(tweet);
});

app.get('/home_timeline', (req, res) => {
    const params = { tweet_mode: 'extended', count: 10 };

    client
        .get(`statuses/home_timeline`, params)
        .then((timeline) => {
            res.send(timeline);
        })
        .catch((error) => {
            res.send(error);
        });
});

app.get('/mentions_timeline', (req, res) => {
    const params = { tweet_mode: 'extended', count: 10 };

    client
        .get(`statuses/mentions_timeline`, params)
        .then((timeline) => {
            res.send(timeline);
        })
        .catch((error) => {
            res.send(error);
        });
});

app.post('/post_tweet', (req, res) => {
    // tweet = {status:"Hello world"};
    console.log(req.body);
   // tweet = {status:"Testing TwitterApi with Angular Components"}
	
    client
        .post(`statuses/update`, req.body)
        .then((timeline) => {
            console.log(timeline);

            res.send(timeline);
        })

        .catch((error) => {
            res.send(error);
        });
});

app.get('/profile_info', (req, res) => {
    //
    var url =
        'https://api.twitter.com/1.1/users/show.json?screen_name=pravnviji1';
   
    console.log('User http');
    request.get(
        {
            url: url,
            headers: {
              "Content-Type":"application/json",
              "Authorization": bearerToken,
            },
        }, function (error, response, body) {
          console.log("Result of Profile Data");
          console.log(response.statusCode);
          if (!error && response.statusCode == 200) {
            // Successful call
            var results = JSON.parse(body);
            res.send(results);
            console.log(results) // View Results
          }
        });
});

app.listen(3000, () => console.log('Server running'));
