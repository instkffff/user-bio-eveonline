module.exports=function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=8)}([function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["components/UserCard"]},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat["models/User"]},function(t,e){(function(){var t=[].slice;String.prototype.autoLink=function(){var e,r,o,n,i,a;return i=/(^|[\s\n]|<[A-Za-z]*\/?>)((?:https?|ftp):\/\/[\-A-Z0-9+\u0026\u2019@#\/%?=()~_|!:,.;]*[\-A-Z0-9+\u0026@#\/%=~()_|])/gi,0<(n=1<=arguments.length?t.call(arguments,0):[]).length?(o=n[0],r=function(){var t;for(e in t=[],o)a=o[e],"callback"!==e&&t.push(" "+e+"='"+a+"'");return t}().join(""),this.replace(i,function(t,e,n){return""+e+(("function"==typeof o.callback?o.callback(n):void 0)||"<a href='"+n+"'"+r+">"+n+"</a>")})):this.replace(i,"$1<a href='$2'>$2</a>")}}).call(this)},function(t,e){t.exports=flarum.core.compat["utils/computed"]},function(t,e){t.exports=flarum.core.compat["utils/classList"]},function(t,e,r){"use strict";r.r(e);var o=r(0),n=(r(5),r(1)),i=r.n(n),a=(r(6),r(2)),c=r.n(a),u=(r(7),r(3)),p=r.n(u),l=r(4),s=r.n(l),f=function(t){var e,r;function o(){return t.apply(this,arguments)||this}return r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.view=function(){var t,e=this.props.user.bio(),r=JSON.parse(e),o="https://imageserver.eveonline.com/Alliance/"+r.alliance_id+"_32.png",n="https://imageserver.eveonline.com/Corporation/"+r.corporation_id+"_32.png",i=m("p",null,m("img",{src:o,alt:""}),r.alliance_name,m("img",{src:n,alt:""}),r.corporation_name);return t=m.trust(i),m("div",{className:"UserBio"},t)},o}(i.a);app.initializers.add("instkffff-user-bio",function(){s.a.prototype.bio=p.a.attribute("bio"),Object(o.extend)(c.a.prototype,"infoItems",function(t){var e=this.props.user;t.add("bio",f.component({user:e}))})})}]);
//# sourceMappingURL=forum.js.map