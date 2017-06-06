var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
var a ={
  NODE_ENV: '"production"',
  TEST: '"test123"'
};
var c ={
  NODE_ENV: '"test"'
};
//console.log(merge(a,c));
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
});

