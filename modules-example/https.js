const internals = require("./internals");
// const { send } = require("./request.js");
// const { read } = require("./response.js");

function request(url, data) {
  const resonse = internals.request.send(url, data);
  return internals.response.read(resonse);
}

const req = request("https://www.google.com/", "Brendan Eich");

console.log("[3]", req);

module.children.map((m) => console.log(m.exports));
