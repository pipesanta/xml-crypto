var select = require('xpath').select

module.exports = require('./lib/signed-xml');
module.exports.C14N = require("./lib/c14n-canonicalization");
module.exports.xpath = function(node, xpath) {
  return select(xpath, node)
}
module.exports.DOMParser = require('xmldom').DOMParser;