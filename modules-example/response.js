function decrypted(data) {
  const decrypting = `decrypted - ${data}`;
  return decrypting;
}

function read(data) {
  return decrypted(data);
}

module.exports = {
  read,
};

