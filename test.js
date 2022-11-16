var axios = require("axios");

var config = {
  method: "get",
  url: "http://localhost:3000/",
  headers: {},
};

const bootstrap = async () => {
  console.time("start");
  for (let i = 0; i < 999; i++) {
    const res = await axios(config);
  }
  console.timeEnd("start");
};
bootstrap();
