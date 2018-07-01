// Not transpiled by Babel so ES5 here

require('babel-register')();

// Disable webpack features Mocha doesnt understand
require.extensions['.css'] = function(){};