# Package Preamble

Generates a minimalist preamble from a package.json. For example, given a package.json file:

```json
{
  "name": "hello-world",
  "version": "0.0.1",
  "homepage": "https://example.com/hello-world",
  "author": {
    "name": "Alice Baker",
    "url": "https://example.com/alice"
  }
}
```

## Run as CLI

If you run preamble in the same directory as this package.json:

```
preamble
```

You’ll get the following output:

```js
// https://example.com/hello-world Version 0.0.1. Copyright 2016 Alice Baker.
```

## Run as a node module

```
// in a js file
console.log(require("preamble"));
```

or using `node` executable

```bash
$ node -e "console.log(require('preamble'))"
```

```js
// https://example.com/hello-world Version 0.0.1. Copyright 2016 Alice Baker.
```
