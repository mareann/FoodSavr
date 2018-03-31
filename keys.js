console.log('this is loaded');

exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY || keys.consumer_key,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET || keys.consumer_secret,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY || keys.access_token_key,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || keys.access_token_secret
};