(this["webpackJsonpgift-expert-app"]=this["webpackJsonpgift-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(1),a=n(7),i=n.n(a),s=n(2),o=n(9),u=function(t){var e=t.setCategories,n=Object(c.useState)(""),a=Object(s.a)(n,2),i=a[0],u=a[1];return Object(r.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>2&&(e((function(t){return[i].concat(Object(o.a)(t))})),u(""))},children:Object(r.jsx)("input",{type:"text",value:i,onChange:function(t){u(t.target.value)}})})},j=n(10),d=n(6),l=n.n(d),b=n(8),p=function(){var t=Object(b.a)(l.a.mark((function t(e){var n,r,c,a,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=KX8oTfzuR8kTqVhHh3yFSmnPi4YbiBDW"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,a=c.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),console.log(i),t.abrupt("return",i);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){t.id;var e=t.title,n=t.url;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("img",{src:n,alt:e}),Object(r.jsx)("p",{children:e})]})},h=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){p(t).then((function(t){console.log(t),a({data:t,loading:!1})}))}),[t]),r}(e),a=n.data,i=n.loading;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:e}),i&&Object(r.jsx)("p",{children:"Cargando..."}),Object(r.jsx)("div",{className:"card-grid animate__animated animate__fadeInDown",children:a.map((function(t){return Object(r.jsx)(f,Object(j.a)({},t),t.id)}))})]})},O=function(){var t=Object(c.useState)(["Black Clover"]),e=Object(s.a)(t,2),n=e[0],a=e[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"GiftExpertApp"}),Object(r.jsx)(u,{setCategories:a}),Object(r.jsx)("hr",{}),Object(r.jsx)("ol",{children:n.map((function(t){return Object(r.jsx)(h,{category:t},t)}))})]})};n(17);i.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ae1aa411.chunk.js.map