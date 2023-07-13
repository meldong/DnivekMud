const redis = require("redis");
const client = redis.createClient({
  host: "localhost",
  port: 6379,
});

client.get("user:1234", (err, data) => {
  if (err) {
    // handle error
  } else if (data) {
    // cache hit
  } else {
    // cache miss
    // fetch data from backend and store in cache
    client.set(
      "user:1234",
      JSON.stringify({
        id: 1234,
        name: "John Doe",
        email: "johndoe@example.com",
      })
    );
  }
});
