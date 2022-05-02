## Install
```bash
npm i @mini-ware/encode-decode
```
## Encode
```js
const encode = require("@mini-ware/encode-decode").encode();

//binary
console.log(encode("bin", "sample"));

//base64
console.log(encode("b64", "sample"));

//hexadecimal
console.log(encode("hex", "sample"));
```

## Decode
```js
const decode = require("@mini-ware/encode-decode").decode();

//binary
console.log(decode("bin", "011100110110000101101101011100000110110001100101"));

//base64
console.log(decode("b64", "c2FtcGxl"));

//hexadecimal
console.log(decode("hex", "73616D706C65"));
```
## This was made a few months ago, releasing the code on GitHub now
