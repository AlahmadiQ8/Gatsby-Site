webpackJsonp([35783957827783],{70:function(e,t,a){var l,n;!function(){"use strict";function a(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var n=typeof l;if("string"===n||"number"===n)e.push(l);else if(Array.isArray(l))e.push(a.apply(null,l));else if("object"===n)for(var u in l)r.call(l,u)&&l[u]&&e.push(u)}}return e.join(" ")}var r={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=a:(l=[],n=function(){return a}.apply(t,l),!(void 0!==n&&(e.exports=n)))}()},144:function(e,t){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},l={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,r=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,s=c&&c(Object);e.exports=function e(t,f,i){if("string"!=typeof f){if(s){var o=c(f);o&&o!==s&&e(t,o,i)}var m=r(f);u&&(m=m.concat(u(f)));for(var p=0;p<m.length;++p){var _=m[p];if(!(a[_]||l[_]||i&&i[_])){var v=d(f,_);try{n(t,_,v)}catch(e){}}}return t}return t}},185:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),r=l(n);a(328);var u=a(38),d=l(u),c=a(24),s=l(c),f=a(192),i=l(f),o=function(){return r.default.createElement("div",{className:"banner"},r.default.createElement("header",{className:"banner__content-wrapper"},r.default.createElement(d.default,null,r.default.createElement(s.default,{halign:"space-around",className:"banner__flex"},r.default.createElement("div",{className:"banner__section"},r.default.createElement(i.default,null)),r.default.createElement("div",{className:"banner__section"},r.default.createElement("h1",{className:"banner__h1"},"Mohammad Alahmadi"),r.default.createElement("p",{className:"banner__p"},"I’m a front end engineer living in Santa Barbara. I enjoy building stuff with Javascript and React."))))))};t.default=o,e.exports=t.default},328:function(e,t){},38:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),r=l(n);a(92);var u=function(e){var t=e.children;return r.default.createElement("div",{className:"container"},t)};t.default=u,e.exports=t.default},92:function(e,t){},24:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),r=l(n);a(93);var u=function(e){var t=e.direction,a=void 0===t?"row":t,l=e.halign,n=void 0===l?"flex-start":l,u=e.valign,d=void 0===u?"flex-start":u,c=e.className,s=void 0===c?"":c,f=e.children,i={flexDirection:a,justifyContent:"row"===a?n:d,alignItems:"row"===a?d:n};return r.default.createElement("div",{className:"flex "+s,style:s.match(/flex/)?{}:i},f)};t.default=u,e.exports=t.default},93:function(e,t){},190:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),r=l(n),u=a(44),d=l(u),c=a(70),s=l(c),f=a(24),i=l(f),o=function(e){var t=e.title,a=e.desc,l=e.imgURl,n=e.alt,u=e.small,c=e.to,f=(e.date,r.default.createElement("img",{className:"entry__img",src:l,alt:n})),o=(0,s.default)("entry"),m=(0,s.default)("entry__h2",{"entry__h2--small":u}),p=(0,s.default)("entry_p",{"entry__p--small":u});return r.default.createElement(d.default,{to:c},r.default.createElement("div",{className:o},r.default.createElement(i.default,{valign:"center"},l?f:null,r.default.createElement("div",null,r.default.createElement("h2",{className:m},t),r.default.createElement("p",{className:p},!u&&a)))))};o.defaultProps={title:"Test Entry",desc:"This is only a test entry. It should not be viewable on production.",to:"#"},t.default=o,e.exports=t.default},191:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),r=l(n),u=a(44),d=l(u),c=a(24),s=l(c),f=a(38),i=l(f),o=a(190),m=l(o);a(332);var p=function(e){var t=e.data;return r.default.createElement("div",{className:"page-index"},r.default.createElement(i.default,null,r.default.createElement(s.default,{halign:"center"},r.default.createElement(s.default,{className:"page-index__flex"},r.default.createElement("div",{className:"page-index__col"},r.default.createElement("h1",{className:"page-index__h1"},"Work"),r.default.createElement("div",null,r.default.createElement(m.default,{imgURl:"http://via.placeholder.com/150x150"}),r.default.createElement(m.default,{imgURl:"http://via.placeholder.com/150x150"}),r.default.createElement(m.default,{imgURl:"http://via.placeholder.com/150x150"}))),r.default.createElement("div",{className:"page-index__col"},r.default.createElement("h1",{className:"page-index__h1"},"Latest Posts"),r.default.createElement("div",{className:"entry__posts"},t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.default.createElement(d.default,{className:"entry__h2 entry__h2--small",key:t.fields.slug,to:t.fields.slug},t.frontmatter.title)})),r.default.createElement("p",null,"All Posts"))))))};t.default=p,e.exports=t.default},332:function(e,t){},192:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),r=l(n);a(333);var u=a(436),d=l(u),c=function(){return r.default.createElement("div",{className:"thumbnail"},r.default.createElement("img",{className:"thumbnail__img",src:d.default,alt:"Mohammad Alahmadi"}))};t.default=c,e.exports=t.default},333:function(e,t){},436:function(e,t,a){e.exports=a.p+"static/thumbnail.5d60935d.jpg"},197:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var n=a(1),r=l(n),u=a(185),d=l(u),c=a(191),s=l(c),f=function(e){var t=e.data;return r.default.createElement("div",null,r.default.createElement(d.default,null),r.default.createElement(s.default,{data:t}))};t.pageQuery="** extracted graphql fragment **";t.default=f}});
//# sourceMappingURL=component---src-pages-index-js-458fc6ec789aaad11ffe.js.map