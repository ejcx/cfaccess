var promisify = require("promisify-node");
var jwksClient = promisify("jwks-rsa");
var jwt = promisify("jsonwebtoken");

var verifyAsync = promisify(jwt.verify);

async function Verify(tok, aud, accessDomain, kids) {
  const client = jwksClient({
    jwksUri: accessDomain + "/cdn-cgi/access/certs"
  });
  var keys = await getKeys(client, kids);

  opts = {
    audience: aud,
    issuer: accessDomain
  };
  for (var i = 0; i < keys.length; i++) {
    try {
      var dec = await verifyAsync(tok, keys[i], opts);
      return dec;
    } catch (err) {}
  }
  return false;
}

async function getKeys(client, kids) {
  var getSigningKeyAsync = promisify(client.getSigningKey);
  var keys = [];
  for (var i = 0; i < kids.length; i++) {
    var key = await getSigningKeyAsync(kids[i]);
    keys.push(key.publicKey || key.rsaPublicKey);
  }
  return keys;
}

module.exports = Verify;
