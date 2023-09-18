function encrypt(data) {
  const encrypting = `[1] encrypted - ${data}`;
  console.log(encrypting);
  return encrypting;
}

function send(url, data) {
  const encryptedData = encrypt(data);
  const request = `[2] sending encrypted ${encryptedData} to ${url}`;
  console.log(request);
  return request;
}

module.exports = {
  send,
};


