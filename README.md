String Raw
---

<p align="right">
  <a href="https://npmjs.org/package/string-raw">
    <img src="https://img.shields.io/npm/v/string-raw.svg?style=flat-square">
  </a>
  <a href="https://travis-ci.org/59naga/string-raw">
    <img src="http://img.shields.io/travis/59naga/string-raw.svg?style=flat-square">
  </a>
  <a href="https://codeclimate.com/github/59naga/string-raw/coverage">
    <img src="https://img.shields.io/codeclimate/github/59naga/string-raw.svg?style=flat-square">
  </a>
  <a href="https://codeclimate.com/github/59naga/string-raw">
    <img src="https://img.shields.io/codeclimate/coverage/github/59naga/string-raw.svg?style=flat-square">
  </a>
  <a href="https://gemnasium.com/59naga/string-raw">
    <img src="https://img.shields.io/gemnasium/59naga/string-raw.svg?style=flat-square">
  </a>
</p>

Installation
---
```bash
npm install string-raw --save
```

Usage
---
It behaves just as [String.raw](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/raw).

```js
const stringRaw = require('string-raw');

const arg1 = 'foo';
const arg2 = 'bar';

stringRaw``; // ""
stringRaw`hoge`; // "hoge"
stringRaw`hoge${arg1}`; // "hogefoo"
stringRaw`hoge${arg1}fuga${arg2}`; // hogefoofugabar
stringRaw`hoge${arg1}fuga${arg2}piyo`; // hogefoofugabarpiyo

stringRaw({ raw: [] }, arg1, arg2); // ""
stringRaw({ raw: ['hoge'] }, arg1, arg2); // "hoge"
stringRaw({ raw: ['hoge', 'fuga'] }, arg1, arg2); // "hogefoofuga"
stringRaw({ raw: ['hoge', 'fuga', 'piyo'] }, arg1, arg2); // "hogefoofugabarpiyo"

stringRaw({ raw: {} }, arg1, arg2); // ""
stringRaw({ raw: true }, arg1, arg2); // ""

stringRaw(); // TypeError: Cannot convert undefined or null to object
stringRaw(''); // TypeError: Cannot convert undefined or null to object
stringRaw(null); // TypeError: Cannot convert undefined or null to object
stringRaw({ raw: null }); // TypeError: Cannot convert undefined or null to object
```

Development
---
Requirement global
* NodeJS v5.10.0
* Npm v3.8.3

```bash
git clone https://github.com/59naga/string-raw
cd string-raw
npm install

npm test
```

License
---
[MIT](http://59naga.mit-license.org/)
