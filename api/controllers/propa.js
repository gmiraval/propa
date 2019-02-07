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
  Tnoise:Tnoise,
  Agaz:Agaz,
  Agaz_exceeded:Agaz_exceeded,
  Arain:Arain,
  Acloud:Acloud,
  Iscint:Iscint,
  XPD:XPD,
  EFSR:EFSR
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

function Agaz(req, res) {
var lib = ffi.Library('./api/lib/propa64', {
  'gaseous_attenuation': [double, [double,double,double,double] ]
});
var freq = req.swagger.params.freq.value;
var elev = req.swagger.params.elev.value;
var temp = req.swagger.params.temp.value;
var wvd = req.swagger.params.wvd.value;

var result = lib.gaseous_attenuation(freq,elev,temp,wvd);
res.json(result);
}

function Agaz_exceeded(req, res) {
var lib = ffi.Library('./api/lib/propa64', {
  'gaseous_attenuation_exc': [double, [double,double,double,double] ]
});
var freq = req.swagger.params.freq.value;
var elev = req.swagger.params.elev.value;
var temp = req.swagger.params.temp.value;
var iwvc = req.swagger.params.iwvc.value;

var result = lib.gaseous_attenuation_exc(freq,elev,temp,iwvc);
res.json(result);
}

function Arain(req, res) {
var lib = ffi.Library('./api/lib/propa64', {
  'rain_attenuation': [double, [double,double,double,double,double,double,double,double] ]
});
var lat = req.swagger.params.lat.value;
var freq = req.swagger.params.freq.value;
var elev = req.swagger.params.elev.value;
var unav = req.swagger.params.unav.value;
var STAHeight = req.swagger.params.STAHeight.value;
var RainHeight = req.swagger.params.RainHeight.value;
var RainInt = req.swagger.params.RainInt.value;
var tilt = req.swagger.params.tilt.value;

var result = lib.rain_attenuation(lat,freq,elev,unav,STAHeight,RainHeight,RainInt,tilt);
res.json(result);
}

function Acloud(req, res) {
var lib = ffi.Library('./api/lib/propa64', {
  'cloud_attenuation': [double, [double,double,double] ]
});
var freq = req.swagger.params.freq.value;
var elev = req.swagger.params.elev.value;
var tccw = req.swagger.params.tccw.value;


var result = lib.cloud_attenuation(freq,elev,tccw);
res.json(result);
}

function Iscint(req, res) {
var lib = ffi.Library('./api/lib/propa64', {
  'scintillation': [double, [double,double,double,double,double,double,double] ]
});
var wref = req.swagger.params.wref.value;
var freq = req.swagger.params.freq.value;
var elev = req.swagger.params.elev.value;
var unav = req.swagger.params.unav.value;
var STAHeight = req.swagger.params.STAHeight.value;
var AntEff = req.swagger.params.AntEff.value;
var AntDiam = req.swagger.params.AntDiam.value;

var result = lib.scintillation(wref,freq,elev,unav,STAHeight,AntEff,AntDiam);
res.json(result);
}

function XPD(req, res) {
var lib = ffi.Library('./api/lib/propa64', {
  'XPD': [double, [double,double,double,double,double] ]
});
var RainExc = req.swagger.params.RainExc.value;
var tilt = req.swagger.params.tilt.value;
var freq = req.swagger.params.freq.value;
var PathElev = req.swagger.params.PathElev.value;
var percTime = req.swagger.params.percTime.value;

var result = lib.XPD(RainExc,tilt,freq,PathElev,percTime);
res.json(result);
}

function EFSR(req, res) {
var lib = ffi.Library('./api/lib/propa64', {
  'EFSR': [double, [double,double,double] ]
});
var f1GHz = req.swagger.params.f1GHz.value;
var f2GHz = req.swagger.params.f2GHz.value;
var Arain = req.swagger.params.Arain.value;


var result = lib.EFSR(f1GHz,f2GHz,Arain);
res.json(result);
}

