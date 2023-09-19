
function getMessages(req, res){
    res.send('<ul><li>Brendan Eich</li></ul>');
}

function postMessage(req, res){
  res.send("Posting message...");
}

module.exports = {
  getMessages,
  postMessage,
}
