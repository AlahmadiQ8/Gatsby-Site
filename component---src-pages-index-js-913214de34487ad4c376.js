webpackJsonp([35783957827783],{142:function(e,t){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},l={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,r=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,f=c&&c(Object);e.exports=function e(t,i,s){if("string"!=typeof i){if(f){var o=c(i);o&&o!==f&&e(t,o,s)}var m=r(i);u&&(m=m.concat(u(i)));for(var p=0;p<m.length;++p){var _=m[p];if(!(a[_]||l[_]||s&&s[_])){var v=d(i,_);try{n(t,_,v)}catch(e){}}}return t}return t}},183:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),r=l(n);a(318);var u=a(38),d=l(u),c=a(23),f=l(c),i=a(190),s=l(i),o=function(e){return r.default.createElement("div",{className:"banner"},r.default.createElement("header",{className:"banner__content-wrapper"},r.default.createElement(d.default,null,r.default.createElement(f.default,{halign:"space-around",className:"banner__flex"},r.default.createElement("div",{className:"banner__section"},r.default.createElement(s.default,null)),r.default.createElement("div",{className:"banner__section"},r.default.createElement("h1",{className:"banner__h1"},"Mohammad Alahmadi"),r.default.createElement("p",{className:"banner__p"},"I’m a front end developer living in Santa Barbara. I am passionate about front end UI design, architecture, and web technologies. I love building websites, SPAs, and fiddling with open source projects."))))))};t.default=o,e.exports=t.default},318:function(e,t){},38:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),r=l(n);a(91);var u=function(e){var t=e.children;return r.default.createElement("div",{className:"container"},t)};t.default=u,e.exports=t.default},91:function(e,t){},23:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),r=l(n);a(92);var u=function(e){var t=e.direction,a=void 0===t?"row":t,l=e.halign,n=void 0===l?"flex-start":l,u=e.valign,d=void 0===u?"flex-start":u,c=e.className,f=void 0===c?"":c,i=e.children,s={flexDirection:a,justifyContent:"row"===a?n:d,alignItems:"row"===a?d:n};return r.default.createElement("div",{className:"flex "+f,style:f.match(/flex/)?{}:s},i)};t.default=u,e.exports=t.default},92:function(e,t){},188:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),r=l(n),u=a(87),d=l(u),c=a(23),f=l(c),i=function(e){var t=e.title,a=e.desc,l=e.imgURl,n=e.alt,u=r.default.createElement("img",{className:"entry__img",src:l,alt:n});return r.default.createElement("div",{className:"entry"},r.default.createElement(f.default,{valign:"center"},l?u:null,r.default.createElement("div",null,r.default.createElement(d.default,{to:"#"},r.default.createElement("h2",{className:"entry__h2"},t)),r.default.createElement("p",{className:"entry__p"},a))))};i.defaultProps={title:"Test Entry",desc:"This is only a test entry. It should not be viewable on production."},t.default=i,e.exports=t.default},189:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),r=l(n),u=a(87),d=(l(u),a(23)),c=l(d),f=a(38),i=l(f),s=a(188),o=l(s);a(321);var m=function(){return r.default.createElement("div",{className:"page-index"},r.default.createElement(i.default,null,r.default.createElement(c.default,{halign:"space-between"},r.default.createElement(c.default,{className:"page-index__first-section"},r.default.createElement("div",{className:"page-index__col"},r.default.createElement("h1",{className:"page-index__h1"},"Blog Posts"),r.default.createElement("div",null,r.default.createElement(o.default,null),r.default.createElement(o.default,null),r.default.createElement(o.default,null),r.default.createElement(o.default,null))),r.default.createElement("div",{className:"page-index__col"},r.default.createElement("h1",{className:"page-index__h1"},"Work"),r.default.createElement("div",null,r.default.createElement(o.default,{imgURl:"http://via.placeholder.com/75x75"}),r.default.createElement(o.default,{imgURl:"http://via.placeholder.com/75x75"}),r.default.createElement(o.default,{imgURl:"http://via.placeholder.com/75x75"}),r.default.createElement(o.default,{imgURl:"http://via.placeholder.com/75x75"})))),r.default.createElement("div",null,r.default.createElement("h1",null,"CUTE")))))};t.default=m,e.exports=t.default},321:function(e,t){},190:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),r=l(n);a(322);var u=a(425),d=l(u),c=function(){return r.default.createElement("div",{className:"thumbnail"},r.default.createElement("img",{className:"thumbnail__img",src:d.default,alt:"Mohammad Alahmadi"}))};t.default=c,e.exports=t.default},322:function(e,t){},425:function(e,t,a){e.exports=a.p+"static/thumbnail.5d60935d.jpg"},195:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),r=l(n),u=a(183),d=l(u),c=a(189),f=l(c),i=function(){return r.default.createElement("div",null,r.default.createElement(d.default,null),r.default.createElement(f.default,null))};t.default=i,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-913214de34487ad4c376.js.map