require=function a(o,p,c){function f(e,t){if(!p[e]){if(!o[e]){var r="function"==typeof require&&require;if(!t&&r)return r(e,!0);if(s)return s(e,!0);var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}var n=p[e]={exports:{}};o[e][0].call(n.exports,function(t){return f(o[e][1][t]||t)},n,n.exports,a,o,p,c)}return p[e].exports}for(var s="function"==typeof require&&require,t=0;t<c.length;t++)f(c[t]);return f}({map:[function(t,e,r){"use strict";cc._RF.push(e,"e9f70XOCvBOMZIiOlaRpHlp","map"),cc.Class({extends:cc.Component,properties:{mapTile:{default:null,type:cc.Prefab},mapWidth:0,mapHeight:0},createEmptyMap:function(){for(var t={start:-Math.floor(this.mapWidth/2),end:Math.floor(this.mapWidth/2)},e={start:-Math.floor(this.mapHeight/2),end:Math.floor(this.mapHeight/2)},r=0,i=1,n=t.start;n<=t.end;n++){for(var a=e.start;a<=e.end;a++){var o=cc.instantiate(this.mapTile),p=o.getContentSize();o.position=cc.p(a*p.width,n*p.height),o.active=-r<=a&&a<=r,this.node.addChild(o)}r+=i*=0==n?-1:1}},onLoad:function(){this.createEmptyMap()},start:function(){}}),cc._RF.pop()},{}]},{},["map"]);
//# sourceMappingURL=project.js.map