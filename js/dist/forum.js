module.exports=function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=9)}([function(t,e){t.exports=flarum.core.compat["models/User"]},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["components/UserCard"]},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){(function(){var t=[].slice;String.prototype.autoLink=function(){var e,o,r,n,u,i;return u=/(^|[\s\n]|<[A-Za-z]*\/?>)((?:https?|ftp):\/\/[\-A-Z0-9+\u0026\u2019@#\/%?=()~_|!:,.;]*[\-A-Z0-9+\u0026@#\/%=~()_|])/gi,0<(n=1<=arguments.length?t.call(arguments,0):[]).length?(r=n[0],o=function(){var t;for(e in t=[],r)i=r[e],"callback"!==e&&t.push(" "+e+"='"+i+"'");return t}().join(""),this.replace(u,function(t,e,n){return""+e+(("function"==typeof r.callback?r.callback(n):void 0)||"<a href='"+n+"'"+o+">"+n+"</a>")})):this.replace(u,"$1<a href='$2'>$2</a>")}}).call(this)},function(t,e){t.exports=flarum.core.compat["utils/computed"]},function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["utils/classList"]},function(t,e,o){"use strict";o.r(e);var r=o(1),n=(o(5),o(2)),u=o.n(n),i=(o(6),o(3)),c=o.n(i),a=(o(7),o(8),o(4)),p=o.n(a),f=o(0),l=o.n(f),s=function(t){var e,o;function r(){return t.apply(this,arguments)||this}return o=t,(e=r).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o,r.prototype.view=function(){var t,e,o=this.props.user.bioHtml();return e=m.trust(o),t=m("div",{className:"UserBio-content"},e),m("div",{className:"UserBio"},t)},r}(u.a);app.initializers.add("instkffff-user-bio",function(){l.a.proptotype.bio=p.a.attribute("bio"),l.a.proptotype.bioHtml=m("p",null," ",bio," "),Object(r.extend)(c.a.prototype,"infoItems",function(t){var e=this.props.user;t.add("bio",s.component({user:e}))})})}]);
//# sourceMappingURL=forum.js.map