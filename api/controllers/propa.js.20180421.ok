'use strict';

module.exports = {
  Version: Version,
  Rain_Intensity:Rain_Intensity,
  Nwet:Nwet,
  Rain_height:Rain_height,
  TCC:TCC,
  WVC:WVC,
  iwvc:iwvc,
  Temperature:Temperature,
  Tmr:Tmr,
  Tnoise:Tnoise
};


var util = require('util');
var repl = require('repl');
var ffi = require('ffi');
var ref = require('ref');

var long = ref.types.long;
var double = ref.types.double;

function Version(req, res) {
var lib = ffi.Library('./api/lib/propa64', {
  'version': [long, [] ]
});
var result = lib.version();
res.json(result);
}

function Rain_Intensity(req, res) {
var lib = ffi.Library('./api/lib/propa64', {
  'rain_intensity': [double, [double,double,double] ]
});
var lat = req.swagger.params.lat.value;
var lon = req.swagger.params.lon.value;
var unav = req.swagger.params.unav.value;

var result = lib.rain_intensity(lat,lon,unav);
res.json(result);
}

function Nwet(req, res) {
var lib = ffi.Library('./api/lib/propa64', {
  'NWET': [double, [double,double] ]
});
var lat = req.swagger.params.lat.value;
var lon = req.swagger.params.lon.value;

var result = lib.NWET(lat,lon);
res.json(result);
}

function Rain_height(req, res) {
var lib = ffi.Library('./api/lib/propa64', {
  'rain_height': [double, [double,double] ]
});
var lat = req.swagger.params.lat.value;
var lon = req.swagger.params.lon.value;

var result = lib.rain_height(lat,lon);
res.json(result);
}

function TCC(req, res) {
var lib = ffi.Library('./api/lib/propa64', {
  'LWCC': [double, [double,double,double] ]
});
var lat = req.swagger.params.lat.value;
var lon = req.swagger.params.lon.value;
var unav = req.swagger.params.unav.value;

var result = lib.LWCC(lat,lon,unav);
res.json(result);
}

function WVC(req, res) {
var lib = ffi.Library('./api/lib/propa64', {
  'SWVD': [double, [double,double] ]
});
var lat = req.swagger.params.lat.value;
var lon = req.swagger.params.lon.value;

var result = lib.SWVD(lat,lon);
res.json(result);
}

function iwvc(req, res) {
var lib = ffi.Library('./api/lib/propa64', {
  'IWVC': [double, [double,double,double] ]
});
var lat = req.swagger.params.lat.value;
var lon = req.swagger.params.lon.value;
var unav = req.swagger.params.unav.value;

var result = lib.IWVC(lat,lon,unav);
res.json(result);
}

function Temperature(req, res) {
var lib = ffi.Library('./api/lib/propa64', {
  'temperature': [double, [double,double] ]
});
var lat = req.swagger.params.lat.value;
var lon = req.swagger.params.lon.value;

var result = lib.temperature(lat,lon);
res.json(result);
}


function Tmr(req, res) {
var lib = ffi.Library('./api/lib/propa64', {
  'TMR': [double, [double] ]
});
var surft = req.swagger.params.surft.value;

var result = lib.TMR(surft);
res.json(result);
}

function Tnoise(req, res) {
var lib = ffi.Library('./api/lib/propa64', {
  'noise_temperature': [double, [double,double] ]
});
var TAtt = req.swagger.params.TAtt.value;
var MRtemp = req.swagger.params.MRtemp.value;

var result = lib.noise_temperature(TAtt,MRtemp);
res.json(result);
}

