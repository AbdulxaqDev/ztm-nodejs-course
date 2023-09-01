const axios = require("axios");

axios
  .get("https://www.g oogle.com")
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err.cause);
  })
  .then(() => {
    console.log("All done!");
  });
