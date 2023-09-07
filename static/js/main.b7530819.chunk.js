(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s,a=c(4),n=c.n(a),l=c(2),i=c(1),d=(c(9),c(10),c(0)),o=function(e){var t=e.todos,c=e.selectedTodo,s=e.setSelectedTodo;return Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(d.jsx)("td",{className:"is-vcentered",children:e.id}),Object(d.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(d.jsx)("span",{className:"icon",children:(null===c||void 0===c?void 0:c.id)===e.id?Object(d.jsx)("i",{className:"far fa-eye-slash"}):Object(d.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(s||(s={}));var r=function(e){var t=e.setFilterType,c=e.searchField,a=e.setSearchField;return Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){t(e.target.value)},children:[Object(d.jsx)("option",{value:s.ALL,children:"All"}),Object(d.jsx)("option",{value:s.ACTIVE,children:"Active"}),Object(d.jsx)("option",{value:s.COMPLETED,children:"Completed"})]})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",onChange:function(e){a(e.target.value)},value:c}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(d.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:c&&Object(d.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){a("")}})})]})]})};function j(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(12);var b=function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})},u=function(e){var t=e.selectedTodo,c=e.setSelectedTodo,s=Object(i.useState)(null),a=Object(l.a)(s,2),n=a[0],o=a[1],r=Object(i.useState)(!0),u=Object(l.a)(r,2),h=u[0],m=u[1];return Object(i.useEffect)((function(){var e;(e=t.userId,j("/users/".concat(e))).then((function(e){return o(e)})).finally((function(){return m(!1)}))}),[]),Object(d.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(d.jsx)("div",{className:"modal-background"}),h?Object(d.jsx)(b,{}):Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(d.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(d.jsxs)("div",{className:"modal-card-body",children:[Object(d.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(d.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(d.jsx)("strong",{className:t.completed?"has-text-success":"has-text-danger",children:t.completed?"Done":"Planned"})," by ",Object(d.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]})]})},h=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(s.ALL),h=Object(l.a)(n,2),m=h[0],O=h[1],x=Object(i.useState)(""),f=Object(l.a)(x,2),p=f[0],v=f[1],N=Object(i.useState)(null),y=Object(l.a)(N,2),T=y[0],g=y[1];Object(i.useEffect)((function(){j("/todos").then((function(e){a(e)}))}),[]);var C=Object(i.useMemo)((function(){return c.filter((function(e){var t=e.title.toLowerCase(),c=p.toLowerCase();return t.includes(c)}))}),[c,p]),S=Object(i.useMemo)((function(){switch(m){case s.COMPLETED:return C.filter((function(e){return e.completed}));case s.ACTIVE:return C.filter((function(e){return!e.completed}));default:return C}}),[m,C]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(r,{setFilterType:O,searchField:p,setSearchField:v})}),Object(d.jsx)("div",{className:"block",children:0===c.length?Object(d.jsx)(b,{}):Object(d.jsx)(o,{todos:S,selectedTodo:T,setSelectedTodo:g})})]})})}),T&&Object(d.jsx)(u,{selectedTodo:T,setSelectedTodo:g})]})};n.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.b7530819.chunk.js.map