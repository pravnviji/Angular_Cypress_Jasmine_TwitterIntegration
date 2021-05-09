const express = require('express');
const Twitter = require('twit');
const app = express();
const http = require('http');
const request = require('request');
const client = new Twitter({
    consumer_key: 'KuyFUz1uY0A7LEuLBWQeZ9Gsq',
    consumer_secret: 'r4udUKLgP74l7l7Px8WzI0mh0rHCZxo0RfqqF3NXpRsRvx8rVk',
    access_token: '262432611-4OH7BjKmMFMLqWrc21y8d2hQvwpLoYTZpjHp0OEX',
    access_token_secret: 'B5dwNH2pUOG6JFpQKnu3JaYgJvRxAtSzNC3vkW0hSteqU'
});

const bearerToken =
'Bearer %AAAAAAAAAAAAAAAAAAAAAIiNPQEAAAAA1j4UWrQ5MPwr28KczyUrfjxOjmM%3Dr1JiGb2P7FwhawjaSJaLc5rFvNGJaZpFhnqLSOTP2ZiQ1bHcl1';


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
