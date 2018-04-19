'use strict';

module.exports = {
  version: version,
  rain_intensity:rain_intensity,
  Nwet:Nwet
};


var util = require('util');
var repl = require('repl');
var ffi = require('ffi');
var ref = require('ref');

var long = ref.types.long;
var double = ref.types.double;

function version(req, res) {
var lib = ffi.Library('/usr/local/lib/propa64', {
  'version': [long, [] ]
});
var result = lib.version();
res.json(result);
}

function rain_intensity(req, res) {
var lib = ffi.Library('/usr/local/lib/propa64', {
  'rain_intensity': [double, [double,double,double] ]
});
var lat = req.swagger.params.lat.value;
var lon = req.swagger.params.lon.value;
var unav = req.swagger.params.unav.value;

var result = lib.rain_intensity(lat,lon,unav);
res.json(result);
}

function Nwet(req, res) {
var lib = ffi.Library('/usr/local/lib/propa64', {
  'NWET': [double, [double,double] ]
});
var lat = req.swagger.params.lat.value;
var lon = req.swagger.params.lon.value;

var result = lib.NWET(lat,lon);
res.json(result);
}
