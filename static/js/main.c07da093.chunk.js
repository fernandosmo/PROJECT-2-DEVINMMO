(this.webpackJsonpprojetoultimate=this.webpackJsonpprojetoultimate||[]).push([[0],{88:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(57),i=n.n(c),r=n(65),o=n(122),s=n(17),j=n(8),d=n(13),l=n(111),m=n(120),b=n(113),h=n(115),x=n(116),u=n(117),p=n(118),O=(n(44),n(1));function f(t){var e=t.id,n=t.title,a=t.genre,c=t.description,i=t.thumb,r=Object(j.f)();return Object(O.jsx)(b.a,{sx:{maxWidth:345},children:Object(O.jsxs)(h.a,{onClick:function(){return r("".concat(e))},children:[Object(O.jsx)(x.a,{component:"img",height:"140",image:i,alt:n}),Object(O.jsxs)(u.a,{children:[Object(O.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"div",fontWeight:"bold",fontFamily:"montserrat",children:n}),Object(O.jsx)(p.a,{gutterBottom:!0,variant:"p",component:"div",fontSize:"11px",fontWeight:"bold",fontFamily:"montserrat",children:a}),Object(O.jsx)(p.a,{variant:"body2",color:"text.secondary",fontFamily:"montserrat",children:c})]})]})})}var g,v=n(119),y=n(123),k=n(21),F=n(61);n(76);var w=F.a.div(g||(g=Object(k.a)(["\nwidth: 100%;\nposition: relative;\ndisplay: flex;\n\n.header{\n  display: flex;\n  background: #A30000;\n  width: 100%;\n  height: 5vh;\n  color: #fff;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px;\n  font-family: 'Montserrat', sans-serif;\n  position: sticky;\n}\n\n.button {\n  font-family: 'Montserrat', sans-serif;\n  background: #F4F4F6;\n  color: #110B11;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  box-shadow: 5px 5px 5px #ccc;\n  text-shadow:none;\n  margin: 5px;\n  }\n  \n.button:hover {\n  background: gray;\n  color: #fff;\n  border: 1px solid #000;\n  border-radius: 5px;\n  box-shadow: 5px 5px 5px #ccc;\n  text-shadow:none;\n  }\n"]))),C=function(){var t=Object(j.f)();return Object(O.jsx)(w,{children:Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("div",{className:"logo",children:Object(O.jsx)("h2",{onClick:function(){return t("/")},children:"DEVinMMO"})}),Object(O.jsxs)("div",{className:"homeBtn",children:[Object(O.jsx)("button",{className:"button",onClick:function(){return t("/")},children:"Home"}),Object(O.jsx)("button",{className:"button",onClick:function(){return t("/news")},children:"News"})]})]})})},E=n.p+"static/media/Background4.02a6059e.jpg",T=function(t){var e=t.children;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{style:{width:"100%",maxHeight:"100%",background:"url(".concat(E,")"),backgroundAttachment:"fixed",backgroundRepeat:"no-repeat"},children:[Object(O.jsx)(C,{}),Object(O.jsx)(y.a,{sx:{marginTop:"10px"},children:Object(O.jsx)(v.a,{children:e})})]})})},M=function(){var t=Object(a.useState)([]),e=Object(d.a)(t,2),n=e[0],c=e[1];return Object(a.useEffect)((function(){fetch("https://mmo-games.p.rapidapi.com/games",{method:"GET",headers:{"x-rapidapi-host":"mmo-games.p.rapidapi.com","x-rapidapi-key":"1d2d71b1d1mshd95b1636d349336p10c343jsn3d86a33a1e0c"}}).then((function(t){return t.json()})).then((function(t){return c(t)}))}),[]),Object(O.jsx)(T,{children:Object(O.jsx)(l.a,{container:!0,spacing:2,fontFamily:"montserrat",children:n.length>0?n.map((function(t){return Object(O.jsx)(l.a,{sm:6,md:4,lg:3,item:!0,children:Object(O.jsx)(f,{id:t.id,title:t.title,genre:t.genre,description:t.short_description,thumb:t.thumbnail})},t.id)})):Object(O.jsx)(m.a,{})})})},N=n(114),I=n(109),B=n(121),_=n(112),J=n(66),R=n(64),V=(n(87),["onChange","onClickItem","onClickThumb"]),A=function(t){var e=t.onChange,n=t.onClickItem,a=t.onClickThumb,c=Object(J.a)(t,V);return Object(O.jsx)(R.Carousel,{infiniteLoop:!0,showArrows:!0,onChange:e,onClickItem:n,onClickThumb:a,dynamicHeight:!0,autoFocus:!0,autoPlay:!0,interval:2e3,children:c.images.map((function(t,e){return Object(O.jsx)(y.a,{children:Object(O.jsx)("img",{src:t.image,alt:t.image})},"".concat(t.id,"-").concat(e))}))})},D=function(){var t=Object(j.f)(),e=Object(j.g)().gameId,n=Object(a.useState)(null),c=Object(d.a)(n,2),i=c[0],r=c[1];return Object(a.useEffect)((function(){fetch("https://mmo-games.p.rapidapi.com/game?id=".concat(e),{method:"GET",headers:{"x-rapidapi-host":"mmo-games.p.rapidapi.com","x-rapidapi-key":"2768fdfdb3mshc3bfe71a9983794p16b2d3jsn42669ce7aa62"}}).then((function(t){return t.json()})).then((function(t){return r(t)}))}),[e]),Object(O.jsx)(T,{children:Object(O.jsx)(N.a,{elevation:"1",children:Object(O.jsx)(l.a,{container:!0,sx:{padding:1},children:i?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(l.a,{item:!0,md:12,children:Object(O.jsx)("img",{src:i.thumbnail,alt:i.title})}),Object(O.jsxs)(l.a,{item:!0,md:12,fontFamily:"montserrat",children:[Object(O.jsx)("p",{children:Object(O.jsx)(p.a,{variant:"h5",fontFamily:"montserrat",sx:{margin:1},children:i.title})}),Object(O.jsxs)(l.a,{sx:{margin:1},children:[Object(O.jsx)(I.a,{label:i.genre,variant:"outlined",fontFamily:"montserrat"}),Object(O.jsx)(I.a,{label:i.publisher,variant:"outlined",fontFamily:"montserrat",sx:{marginLeft:1}}),Object(O.jsx)(I.a,{label:i.platform,variant:"outlined",fontFamily:"montserrat",sx:{marginLeft:1}})]}),Object(O.jsx)("p",{children:Object(O.jsx)(p.a,{variant:"subtitle1",fontFamily:"montserrat",children:i.short_description})}),!!i.screenshots&&Object(O.jsx)(A,{images:i.screenshots}),Object(O.jsx)(B.a,{})]}),Object(O.jsx)(_.a,{variant:"contained",fontFamily:"montserrat",onClick:function(){return t("/")},children:"VOLTAR"})]}):Object(O.jsx)(m.a,{})})})})};function L(t){var e=t.article_url,n=t.title,a=t.description,c=t.thumb;return Object(O.jsx)(b.a,{children:Object(O.jsxs)(h.a,{onClick:function(){window.open("".concat(e),"_blank")},children:[Object(O.jsx)(x.a,{component:"img",height:"500",image:c,alt:n}),Object(O.jsxs)(u.a,{children:[Object(O.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"div",fontWeight:"bold",fontFamily:"montserrat",children:n}),Object(O.jsx)(p.a,{variant:"body2",color:"text.secondary",fontFamily:"montserrat",children:a})]})]})})}var P=function(){var t=Object(a.useState)([]),e=Object(d.a)(t,2),n=e[0],c=e[1];return Object(a.useEffect)((function(){fetch("https://mmo-games.p.rapidapi.com/latestnews",{method:"GET",headers:{"x-rapidapi-host":"mmo-games.p.rapidapi.com","x-rapidapi-key":"2768fdfdb3mshc3bfe71a9983794p16b2d3jsn42669ce7aa62"}}).then((function(t){return t.json()})).then((function(t){return c(t)}))}),[]),Object(O.jsx)(T,{children:Object(O.jsx)(N.a,{elevation:"1",children:Object(O.jsx)(l.a,{container:!0,spacing:2,fontFamily:"montserrat",sx:{marginTop:"2px"},children:n.length>0?n.map((function(t){return Object(O.jsx)(l.a,{sm:12,md:12,lg:12,item:!0,children:Object(O.jsx)(L,{article_url:t.article_url,title:t.title,description:t.short_description,thumb:t.main_image})},t.id)})):Object(O.jsx)(m.a,{})})})})};function S(){return Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{path:"PROJECT-2-DEVINMMO/",element:Object(O.jsx)(M,{})}),Object(O.jsx)(j.a,{path:"PROJECT-2-DEVINMMO/:gameId",element:Object(O.jsx)(D,{})}),Object(O.jsx)(j.a,{path:"PROJECT-2-DEVINMMO/news",element:Object(O.jsx)(P,{})}),Object(O.jsx)(j.a,{path:"*",element:Object(O.jsx)("h1",{children:"Not Found"})})]})}var W=n(35),G=Object(r.a)({components:{MuiCssBaseline:{styleOverrides:"\n        h1 {\n          margin: 0;\n          font-family:montserrat;\n          font-size: 2vw;\n          font-weight: bold;\n          text-align: center;\n        }\n      "}}}),H=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(W.a,{children:Object(O.jsxs)(s.c,{theme:G,children:[Object(O.jsx)(o.a,{}),Object(O.jsx)(S,{})]})})})};i.a.render(Object(O.jsx)(H,{}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.c07da093.chunk.js.map