"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[503],{8643:function(n,e,t){t.d(e,{Z:function(){return h}});var i,r,o=t(1087),s=t(7689),a=t(168),l=t(82),u=l.ZP.li(i||(i=(0,a.Z)(["\n  padding: 4px;\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  & a {\n    text-decoration: none;\n    color: #2f2f2f;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    transition: color 350ms linear, font-weight 350ms linear;\n\n    &:hover {\n      color: #000000;\n      font-weight: 500;\n    }\n  }\n"]))),c=l.ZP.ul(r||(r=(0,a.Z)(["\n  padding: 4px;\n"]))),f=t(3728),m=t(184),h=function(n){var e=n.movies,t=(0,s.TH)();return(0,m.jsx)(c,{children:null===e||void 0===e?void 0:e.map((function(n){var e=n.id,i=n.title,r=n.name;return(0,m.jsxs)(u,{className:"movie__item",children:[" ",(0,m.jsx)(f.$kb,{}),(0,m.jsx)(o.OL,{to:"/movies/".concat(e),state:{from:t},children:i||r})]},e)}))})}},9503:function(n,e,t){t.r(e),t.d(e,{default:function(){return c}});var i=t(9439),r=t(2791),o=t(184),s=function(n){var e=n.onSubmit,t=(0,r.useState)(""),s=(0,i.Z)(t,2),a=s[0],l=s[1];return(0,o.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e(a),l("")},children:[(0,o.jsx)("label",{htmlFor:"movies-search",children:(0,o.jsx)("input",{type:"text",id:"movies-search",value:a,onChange:function(n){l(n.target.value)}})}),(0,o.jsx)("button",{type:"submit",children:"Search"})]})},a=t(8643),l=t(1358),u=t(1087),c=function(){var n,e=(0,r.useState)([]),t=(0,i.Z)(e,2),c=t[0],f=t[1],m=(0,u.lr)(),h=(0,i.Z)(m,2),d=h[0],v=h[1],p=null!==(n=d.get("query"))&&void 0!==n?n:"";return(0,r.useEffect)((function(){p&&(0,l.Ph)({query:p}).then((function(n){var e=n.results;return f(e)}))}),[p]),(0,o.jsxs)("main",{children:[(0,o.jsx)("h1",{className:"visually-hidden",children:"Movies search"}),(0,o.jsx)(s,{onSubmit:function(n){v(""!==n?{query:n}:{})}}),(0,o.jsx)(a.Z,{movies:c})]})}}}]);
//# sourceMappingURL=503.b3a94a3b.chunk.js.map