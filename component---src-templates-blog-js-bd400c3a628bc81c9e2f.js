webpackJsonp([36733297554888],{14:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l);a(26);var i=function(e){var t=e.children;return r.default.createElement("div",{className:"container"},t)};t.default=i,e.exports=t.default},26:function(e,t){},9:function(e,t,a){"use strict";function n(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(1);a(27);var i=function(e){var t=e.direction,a=void 0===t?"row":t,i=e.halign,o=void 0===i?"flex-start":i,c=e.valign,u=void 0===c?"flex-start":c,d=e.className,f=void 0===d?"":d,s=e.grow,m=void 0===s?0:s,v=e.shrink,_=void 0===v?1:v,h=e.type,p=void 0===h?"div":h,w=e.children,g=n(e,["direction","halign","valign","className","grow","shrink","type","children"]),E={flexGrow:m,flexShrink:_,flexDirection:a,justifyContent:"row"===a?o:u,alignItems:"row"===a?u:o};return(0,r.createElement)(p,l({className:"flex "+f,style:f.match(/flex/)?{}:E},g),w)};t.default=i,e.exports=t.default},27:function(e,t){},194:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),i=a(9),o=n(i),c=function(e){var t=e.title,a=e.className;return r.default.createElement(o.default,{type:"header",halign:"space-between",valign:"baseline"},r.default.createElement("h1",{className:a},t))};t.default=c,e.exports=t.default},195:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),i=a(9),o=n(i),c=a(201),u=function(e){var t=e.date,a=e.className;return r.default.createElement("div",{className:a},r.default.createElement(o.default,{direction:"row",valign:"center"},r.default.createElement(c.Clock,{size:"20",color:"#ececec"}),r.default.createElement("div",{style:{marginLeft:"7px"}},t)))};t.default=u,e.exports=t.default},196:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),i=a(14),o=n(i),c=a(9),u=n(c),d=a(194),f=n(d),s=a(195),m=n(s);a(340);var v=function(e){var t=(e.createLink,e.date),a=(e.enableScrollSync,e.ogDescription,e.location,e.markdownRemark);e.sectionList,e.titlePostfix;return r.default.createElement(o.default,null,r.default.createElement("div",{className:"article__container"},r.default.createElement(u.default,{type:"article",direction:"column",grow:"1",halign:"stretch"},r.default.createElement(f.default,{title:a.frontmatter.title,className:"article__header margin-auto"}),r.default.createElement("div",{className:"article__content"},r.default.createElement(m.default,{date:t,className:"article__meta"}),r.default.createElement("div",{className:"article__markdown",dangerouslySetInnerHTML:{__html:a.html}}))),r.default.createElement("div",{className:"article__sidebar"})))};t.default=v,e.exports=t.default},340:function(e,t){},200:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),i=function(e){var t=e.size,a=void 0===t?25:t;return r.default.createElement("div",null,r.default.createElement("svg",{className:"clock",viewBox:"0 0 399 399",width:""+a,height:""+a,xmlns:"http://www.w3.org/2000/svg"},r.default.createElement("g",{fill:"none",fillRule:"evenodd"},r.default.createElement("circle",{fill:"#D8D8D8",cx:"199.5",cy:"199.5",r:"199.5"}),r.default.createElement("path",{d:"M200.5 202.5v-146M200.5 202.5L284 270",stroke:"#fff",strokeWidth:"22",strokeLinecap:"round"}))))};t.default=i,e.exports=t.default},201:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Clock=void 0;var l=a(200);Object.defineProperty(t,"Clock",{enumerable:!0,get:function(){return n(l).default}}),a(343)},343:function(e,t){},208:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var l=a(1),r=n(l),i=a(196),o=n(i),c=function(e){var t=e.data,a=e.location;return"undefined"!=typeof window&&"undefined"!=typeof window.location&&(a.hash=window.location.hash),r.default.createElement(o.default,{enableScrollSync:!0,date:t.markdownRemark.fields.date,location:a,markdownRemark:t.markdownRemark})};t.pageQuery="** extracted graphql fragment **";t.default=c}});
//# sourceMappingURL=component---src-templates-blog-js-bd400c3a628bc81c9e2f.js.map