(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n(20),s=n.n(a),i=n(8),o=(n(28),n(10)),j=n.n(o),u=n(15),h=n(18),l=(n(30),n(31),n(39)),b=function(e){return e.categories.map((function(t,n){return Object(c.jsx)("button",{className:"btn",onClick:function(t){var c={key:n,name:t.currentTarget.id};e.getJoke(c)},id:t,children:Object(c.jsx)(i.b,{to:"/joke",children:Object(c.jsxs)(l.a,{className:"badge",pill:!0,variant:"light",children:[" ",t]})})},n)}))},p=n(3),d=n(40),f=function(e){return Object(c.jsxs)(d.a,{children:[Object(c.jsx)("p",{className:"textJoke",children:e.joke}),Object(c.jsx)("nav",{className:"rtn",children:Object(c.jsxs)(i.b,{to:"/",children:[Object(c.jsx)("span",{children:"Volver"})," "]})})]})},O=(n(37),n.p+"static/media/norris.d23ec51a.png"),x=function(){return Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("img",{className:"header__img",src:O,alt:""}),Object(c.jsx)("p",{className:"header__title",children:"Chuck Norris Jokes"})]})},m=function(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(""),i=Object(h.a)(s,2),o=i[0],l=i[1];Object(r.useEffect)((function(){fetch("https://api.chucknorris.io/jokes/categories").then((function(e){return e.json()})).then((function(e){return e})).then((function(e){a(e)}))}),[]);var d=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(""),e.next=3,(n=t.name,fetch("https://api.chucknorris.io/jokes/random?category=".concat(n)).then((function(e){return e.json()})).then((function(e){return e}))).then(function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,t.value;case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"app",children:Object(c.jsxs)(p.c,{children:[Object(c.jsxs)(p.a,{exact:!0,path:"/",children:[Object(c.jsx)(x,{}),Object(c.jsx)("ul",{children:Object(c.jsx)("li",{className:"app__list",children:Object(c.jsx)(b,{categories:n,getJoke:d})})})]}),Object(c.jsx)(p.a,{path:"/joke",render:function(){return Object(c.jsx)(f,{joke:o})}})]})})};s.a.render(Object(c.jsx)(i.a,{children:Object(c.jsx)(m,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.28657ff9.chunk.js.map