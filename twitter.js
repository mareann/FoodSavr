  var keys = require("./keys.js");
  var Twitter = require('twitter');
  var client = new Twitter(keys.twitter);
  var request = require("request");


// Function that grabs tweets and time of tweets from the food_savr Twitter timeline
  var obtainTweets = function () {
  client.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=food_savr', function(error, tweets, response) {

    if (!error && response.statusCode === 200) {
    for (i=0; i<tweets.length; i++) {
      console.log("Tweet: " + tweets[i].text + " Written on: " + tweets[i].created_at);
      }
    }
    else {
    console.log(error);
    }
  });
};

// Call the obtain tweets function
obtainTweets();



/*  This function uses the Twitter Streaming API and creates a Twitter bot. 
  It listens for tweets sent to our Twitter page @food_savr, then tweets back with a thank you message and 
  a random fact about food waste */
client.stream('statuses/filter', {track: '@food_savr'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
    // Array of facts about food waste
  var arrOfFacts = [
    "1.3 billion tons of food are wasted every year. This amounts to US$1 trillion dollars of wasted or lost food",
    "Just one quarter of all wasted food could feed the 795 million undernourished people around the world who suffer from hunger",
    "40% of food is wasted in the United States every year.",
    "35 million tons of food are wasted in the United States each year.",
    "An area larger than China is used to grow food that is never eaten."
  ]
    var randomChoice = Math.round(Math.random() * arrOfFacts.length);
    var statusObj = {status: "Hi @" + tweet.user.screen_name + ", Thank you for contacting us. Here is a random fact about food waste: " + arrOfFacts[randomChoice]}
    client.post('statuses/update', statusObj, function(error, tweetReply, response) {
      if(error) {
        console.log(error);
      }
      console.log(tweetReply.text);
    })
  });

  stream.on('error', function(error) {
    console.log(error);
  })
});

