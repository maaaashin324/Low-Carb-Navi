const Redis = require('redis');

const client = Redis.createClient({
  host: '127.0.0.1',
  port: '6379',
});

const seedData = require('../data/restaurants');

client.flushdb();
seedData.forEach((eachRestaurant) => {
  client.sadd('restaurantName', eachRestaurant.name);
  client.geoadd('restaurant', eachRestaurant.lng, eachRestaurant.lat, eachRestaurant.name);
});

client.quit();
