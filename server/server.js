const express = require('express');
const Twitter = require('twit');
const app = express();
const http = require('http');
const request = require('request');
const client = new Twitter({
    consumer_key: `{{API KEY}}`,
    consumer_secret: `{{API TOKEN}}`,
    access_token: `{{ACCESS TOKEN}}`,
    access_token_secret: `{{ ACCESS TOKEN SECRET}}`
});


const user_screen = 'aboutyou_tech';
const user_id = '1318536307216363520';

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

app.get('/tweets', (req, res) => {
    console.log('tweets');
    const params = { tweet_mode: 'extended', count: 10 };
    var url =
        `https://api.twitter.com/2/users/${user_id}/tweets`;

        client
        .get(url, req.body)
        .then((timeline) => {
            console.log(timeline);

            res.send(timeline);
        })

        .catch((error) => {
            res.send(error);
        });
});

app.post('/post_tweet', (req, res) => {
    // tweet = {status:"Hello world"};
    console.log('post_tweet');
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

app.post('/retweet', (req, res) => {
    // tweet = {status:"Hello world"};
    console.log('retweet');
    console.log(req.body);
   // tweet = {status:"Testing TwitterApi with Angular Components"}
	
   var tweetId = 'XXXXX';
   client.post('statuses/retweet/' + tweetId, function(error, tweet, response) {
     if (!error) {
       console.log(tweet);
     }
   });
});

app.get('/profile_info', (req, res) => {

    console.log('profile_info');
	console.log(`user id ${user_screen}`);
    client
        .get(`https://api.twitter.com/2/users/by/username/${user_screen}?user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld`)
        .then((result) => {
            console.log(result);

            res.send(result);
        })

        .catch((error) => {
            res.send(error);
        });
});

app.listen(3000, () => console.log('Server running'));
