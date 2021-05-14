const express = require('express');
const Twitter = require('twit');
const app = express();
const http = require('http');
const client = new Twitter({
    consumer_key: 'd5jQppf3e4IHKR0KrhNA3c2aH',
    consumer_secret: 'hkq2AKuUnQDJiYHzKo8W2tcdepRF72by8eiTiuJwA2KF8dDV4A',
    access_token: '55864924-xnAJa0ZK62UoQmw3BU2IdMh4Sx7nBy3zYEG1OcbCY',
    access_token_secret: 'Fz0kK5aESctmJThyFqWIVmOTQ9XquaQhBBknXYe5NfE4S'
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
    console.log('home_timeline');
    const params = { tweet_mode: 'extended', count: 10, screen_name: user_screen };
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
    console.log('mentions_timeline');
    const params = { tweet_mode: 'extended', count: 10, screen_name: user_screen };
    client
        .get(`statuses/mentions_timeline`, params)
        .then((timeline) => {
            res.send(timeline);
        })
        .catch((error) => {
            res.send(error);
        });
});

app.get('/user_timeline', (req, res) => {
    console.log('user_timeline');
    const params = { tweet_mode: 'extended', count: 10, screen_name: user_screen };

    client
        .get(`statuses/user_timeline`, params)
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
        `https://api.twitter.com/2/tweets/${user_id}`;
        client
        .get(url, req.body)
        .then((timeline) => {

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

            res.send(result);
        })

        .catch((error) => {
            res.send(error);
        });
});

app.listen(3000, () => console.log('Server running'));
