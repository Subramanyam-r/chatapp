(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(49),a=n.n(s),r=n(12),i=(n(58),n(22)),o=n(1);var l=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),l=Object(r.a)(a,2),j=l[0],d=l[1];return Object(o.jsxs)("div",{className:"container join-main-div",children:[Object(o.jsx)("h1",{children:"Join a Room!"}),Object(o.jsx)("hr",{className:"line"}),Object(o.jsx)("input",{type:"text",className:"form-control mb-3",placeholder:"Username",onChange:function(e){return s(e.target.value)},value:n}),Object(o.jsx)("input",{type:"text",className:"form-control mb-3",placeholder:"Roomname",onChange:function(e){return d(e.target.value)},value:j}),Object(o.jsx)(i.b,{onClick:function(e){return n&&j?null:e.preventDefault()},to:"/chat?name=".concat(n,"&room=").concat(j),children:Object(o.jsx)("button",{className:"btn btn-primary join-button",children:"Join"})})]})},j=n(53),d=n(51),m=n.n(d),b=n(52),u=n.n(b);n(100);var O=function(e){var t=e.room;return Object(o.jsx)("div",{className:"window-main",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-6 window-left-div",children:Object(o.jsxs)("p",{className:"window-bar-text",children:["Room: ",t]})}),Object(o.jsx)("div",{className:"col-6 window-right-div",children:Object(o.jsx)("p",{className:"window-bar-text",children:"x"})})]})})};n(101);var x=function(e){var t=e.clientUser,n=e.messages;return Object(o.jsx)("div",{id:"scroll-to-bottom",className:"messages-main",children:n.map((function(e){var c=n.indexOf(e);return e.user===t?Object(o.jsx)("div",{className:"blue-outer-div",children:Object(o.jsx)("div",{className:"mb-3 message-client",children:e.text})},c):"Admin"===e.user?Object(o.jsx)("div",{className:"admin-outer-div",children:Object(o.jsx)("div",{className:"mb-3 admin-message",children:e.text})},c):Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsxs)("div",{className:"message",children:[Object(o.jsx)("p",{className:"username",children:Object(o.jsx)("b",{children:e.user})}),e.text]})})},c)}))})};var h=function(e){var t=e.setMessage,n=e.message,c=e.sendMessage;return Object(o.jsx)("div",{className:"mt-2",children:Object(o.jsxs)("div",{className:"input-group mb-3",children:[Object(o.jsx)("input",{onKeyPress:function(e){return"Enter"===e.code?c():null},type:"text",className:"form-control",placeholder:"Type a message...",onChange:function(e){return t(e.target.value)},value:n}),Object(o.jsx)("div",{className:"input-group-append",children:Object(o.jsx)("button",{className:"btn btn-primary",type:"button",id:"button-addon2",onClick:n?c:null,children:"Send"})})]})})};var v,f=function(e){var t=e.onlineUsers;return Object(o.jsxs)("div",{class:"online-users-main",children:[Object(o.jsx)("i",{class:"fas fa-globe"}),t.map((function(e){return Object(o.jsx)("div",{children:e.name})}))]})};n(102);var p=function(e){var t=e.location,n=Object(c.useState)(""),s=Object(r.a)(n,2),a=s[0],i=s[1],l=Object(c.useState)(""),d=Object(r.a)(l,2),b=d[0],p=d[1],g=Object(c.useState)([]),N=Object(r.a)(g,2),w=N[0],y=N[1],S=Object(c.useState)(""),U=Object(r.a)(S,2),C=U[0],M=U[1],k=Object(c.useState)([]),E=Object(r.a)(k,2),J=E[0],R=E[1],B="http://localhost:3001";return Object(c.useEffect)((function(){var e=u.a.parse(t.search),n=e.name,c=e.room;return console.log(n,c),i(n),p(c),(v=m()(B)).on("message",(function(e){R((function(t){return[].concat(Object(j.a)(t),[e])}))})),v.emit("join",{name:n,room:c},(function(e){})),v.on("joinUpdater",(function(e){y(e)})),function(){v.emit("disconnect"),v.off()}}),[t.search,B]),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-sm-6",children:Object(o.jsx)(f,{onlineUsers:w})}),Object(o.jsxs)("div",{className:"col-sm-6 container chat-main-div",children:[Object(o.jsxs)("div",{className:"chat-box",children:[Object(o.jsx)(O,{room:b}),Object(o.jsx)(x,{clientUser:a,messages:J})]}),Object(o.jsx)(h,{setMessage:M,message:C,sendMessage:function(){v.emit("newMessage",{name:a,room:b,text:C},(function(){var e=document.getElementById("scroll-to-bottom");e.scrollTop=e.scrollHeight})),M("")}})]})]})},g=n(2);var N=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)(i.a,{children:[Object(o.jsx)(g.a,{path:"/",exact:!0,component:l}),Object(o.jsx)(g.a,{path:"/chat",component:p})]})})};a.a.render(Object(o.jsx)(N,{}),document.getElementById("root"))},58:function(e,t,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.8e7746eb.chunk.js.map