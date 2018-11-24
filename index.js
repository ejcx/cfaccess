'use strict';
const promisify = require('util').promisify;
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa-browser');
const pLocate = require('p-locate');

const jwtVerify = promisify(jwt.verify);

async function verify(token, audience, issuer, kids) {
  let client = jwksClient({ jwksUri: `${issuer}/cdn-cgi/access/certs` });
  let getSigningKey = promisify(client.getSigningKey);

  let decoded = await pLocate(kids, async kid => {
    let res = await getSigningKey(kid);
    let key = res.publicKey || res.rsaPublicKey;
    try {
      return await jwtVerify(token, key, { audience, issuer });
    } catch (err) {
      if (/invalid signature/.test(err.message)) {
        return false;
      } else {
        throw err;
      }
    }
  }, { preserveOrder: false });

  return decoded || false;
}

module.exports = verify;
