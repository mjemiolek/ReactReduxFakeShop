(this["webpackJsonpfake-shop"]=this["webpackJsonpfake-shop"]||[]).push([[0],{62:function(e,c,t){},69:function(e,c,t){},71:function(e,c,t){"use strict";t.r(c);var n=t(0),r=t.n(n),a=t(15),s=t.n(a),i=t(10),d=t(3),o=t(12),l=t(16),j=t(17),u=t.n(j),b=t(9),O=(t(62),t(1)),h=function(){var e=Object(b.c)((function(e){return e.allProducts.products})).map((function(e){var c=e.id,t=e.title,n=e.image,r=e.price,a=e.category;return Object(O.jsx)("div",{className:"four wide column",children:Object(O.jsx)(i.b,{to:"/product/".concat(c),children:Object(O.jsx)("div",{className:"ui link cards",children:Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("div",{className:"image",children:Object(O.jsx)("img",{src:n,alt:t})}),Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)("div",{className:"header",children:t}),Object(O.jsxs)("div",{className:"meta price",children:["$ ",r]}),Object(O.jsx)("div",{className:"meta",children:a})]})]})})})},c)}));return Object(O.jsx)(O.Fragment,{children:e})},p="SET_PRODUCTS",m="SELECTED_PRODUCT",x="REMOVE_SELECTED_PRODUCT",v=function(e){return{type:p,payload:e}},f=function(e){return{type:m,payload:e}},N=function(){var e=Object(b.c)((function(e){return e})),c=Object(b.b)(),t=function(){var e=Object(l.a)(Object(o.a)().mark((function e(){var t;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://fakestoreapi.com/products").catch((function(e){console.log("err",e)}));case 2:t=e.sent,c(v(t.data));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){t()}),[]),console.log("Products: ",e),Object(O.jsx)("div",{className:"ui grid container",children:Object(O.jsx)(h,{})})},g=function(){return Object(O.jsx)("div",{className:"ui fixed menu",children:Object(O.jsx)("div",{className:"ui container center",children:Object(O.jsx)(i.b,{to:"/",children:Object(O.jsx)("h2",{children:"FakeShop"})})})})},E=(t(69),function(){var e=Object(b.c)((function(e){return e.product})),c=e.image,t=e.title,r=e.price,a=e.category,s=e.description,i=Object(d.f)().productId,j=Object(b.b)();console.log(e);var h=function(){var e=Object(l.a)(Object(o.a)().mark((function e(){var c;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://fakestoreapi.com/products/".concat(i)).catch((function(e){console.log("Err",e)}));case 2:c=e.sent,j(f(c.data));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return i&&""!==i&&h(),function(){j({type:x})}}),[i]),Object(O.jsx)("div",{className:"ui grid container",children:0===Object.keys(e).length?Object(O.jsx)("div",{children:"...Loading"}):Object(O.jsx)("div",{className:"ui placeholder segment",children:Object(O.jsxs)("div",{className:"ui two column stackable center aligned grid",children:[Object(O.jsx)("div",{className:"ui vertical divider",children:"AND"}),Object(O.jsxs)("div",{className:"middle aligned row",children:[Object(O.jsx)("div",{className:"column lp",children:Object(O.jsx)("img",{className:"ui fluid image",src:c})}),Object(O.jsxs)("div",{className:"column rp",children:[Object(O.jsx)("h1",{children:t}),Object(O.jsx)("h2",{children:Object(O.jsxs)("a",{className:"ui teal tag label",children:["$",r]})}),Object(O.jsx)("h3",{className:"ui brown block header",children:a}),Object(O.jsx)("p",{children:s}),Object(O.jsxs)("div",{className:"ui vertical animated button",tabIndex:"0",children:[Object(O.jsx)("div",{className:"hidden content",children:Object(O.jsx)("i",{className:"shop icon"})}),Object(O.jsx)("div",{className:"visible content",children:"Add to Cart"})]})]})]})]})})})});var y=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(i.a,{children:[Object(O.jsx)(g,{}),Object(O.jsxs)(d.c,{children:[Object(O.jsx)(d.a,{path:"/",exact:!0,component:N}),Object(O.jsx)(d.a,{path:"/product/:productId",component:E}),Object(O.jsx)(d.a,{children:"404 Not Found!"})]})]})})},_=t(18),w=t(14),k={products:[{id:1,title:"Dipesh",category:"programmer"}]},D=Object(_.a)({allProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,c=arguments.length>1?arguments[1]:void 0,t=c.type,n=c.payload;return t===p?Object(w.a)(Object(w.a)({},e),{},{products:n}):e},product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0,t=c.type,n=c.payload;switch(t){case m:return Object(w.a)(Object(w.a)({},e),n);case x:return{};default:return e}}}),S=D,T=Object(_.b)(S,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(b.a,{store:T,children:Object(O.jsx)(y,{})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.3167cf55.chunk.js.map