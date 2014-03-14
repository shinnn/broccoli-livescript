# broccoli-livescript

[![NPM version](https://badge.fury.io/js/broccoli-livescript.png)](http://badge.fury.io/js/broccoli-livescript)
[![Build Status](https://travis-ci.org/shinnn/broccoli-livescript.png?branch=master)](https://travis-ci.org/shinnn/broccoli-livescript)
[![Dependency Status](https://david-dm.org/shinnn/broccoli-livescript.png)](https://david-dm.org/shinnn/broccoli-livescript)
[![devDependency Status](https://david-dm.org/shinnn/broccoli-livescript/dev-status.png)](https://david-dm.org/shinnn/broccoli-livescript#info=devDependencies)

[LiveScript](http://livescript.net/) compiler for [Broccoli](https://github.com/joliss/broccoli)

## Installation

```
npm i --save broccoli-livescript
```
Make sure you have installed [Node](http://nodejs.org/) before running this command.

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
