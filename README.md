# cfaccess

> Easily verify JWTs associated with Cloudflare Access

## Install

```sh
yarn add cfaccess
```

## Usage

```js
async function main() {
  let token = 'The.Big.JWT';
  let audience = 'BIGHEXSTRING';
  let issuer = 'https://user.cloudflareaccess.com';
  let kids = ['BIGHEXSTRING1', 'BIGHEXSTRING2'];

  let decoded = await verify(token, audience, issuer, kids);
  // decoded == {...} || false
}
```
