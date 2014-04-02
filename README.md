# broccoli-livescript

[![NPM version](https://badge.fury.io/js/broccoli-livescript.svg)](http://badge.fury.io/js/broccoli-livescript)
[![Build Status](https://travis-ci.org/shinnn/broccoli-livescript.svg?branch=master)](https://travis-ci.org/shinnn/broccoli-livescript)
[![Dependency Status](https://david-dm.org/shinnn/broccoli-livescript.svg?theme=shields.io)](https://david-dm.org/shinnn/broccoli-livescript)
[![devDependency Status](https://david-dm.org/shinnn/broccoli-livescript/dev-status.svg?theme=shields.io)](https://david-dm.org/shinnn/broccoli-livescript#info=devDependencies)

[LiveScript](http://livescript.net/) compiler for [Broccoli](https://github.com/joliss/broccoli)

## Installation

Install with [npm](broccoli). (Make sure you have installed [Node](http://nodejs.org/).)

```
npm i --save-dev broccoli-livescript
```

## Example

```javascript
var filterLiveScript = require('broccoli-livescript');
tree = filterLiveScript(tree, options);
```

## API

### filterLiveScript(tree, options)

#### options.bare

Type: `Boolean` Default: `false`

Compile without the top-level function wrapper.

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT LIcense](./LICENSE).
