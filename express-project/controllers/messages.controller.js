const path = require("path");
function getMessages(req, res){
  res.sendFile(path.join(__dirname, '..', 'public', 'images', 'image.jpg'));
  /* res.send('<ul><li>Brendan Eich</li></ul>'); */
}

function postMessage(req, res){
  res.send("Posting message...");
}

module.exports = {
  getMessages,
  postMessage,
}
