(this.webpackJsonpprojetoultimate=this.webpackJsonpprojetoultimate||[]).push([[0],{88:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(57),i=n.n(c),r=n(65),o=n(122),s=n(17),j=n(8),d=n(13),l=n(111),m=n(120),b=n(113),h=n(115),x=n(116),u=n(117),O=n(118),p=(n(44),n(1));function f(t){var e=t.id,n=t.title,a=t.genre,c=t.description,i=t.thumb,r=Object(j.f)();return Object(p.jsx)(b.a,{sx:{maxWidth:345},children:Object(p.jsxs)(h.a,{onClick:function(){return r("".concat(e))},children:[Object(p.jsx)(x.a,{component:"img",height:"140",image:i,alt:n}),Object(p.jsxs)(u.a,{children:[Object(p.jsx)(O.a,{gutterBottom:!0,variant:"h5",component:"div",fontWeight:"bold",fontFamily:"montserrat",children:n}),Object(p.jsx)(O.a,{gutterBottom:!0,variant:"p",component:"div",fontSize:"11px",fontWeight:"bold",fontFamily:"montserrat",children:a}),Object(p.jsx)(O.a,{variant:"body2",color:"text.secondary",fontFamily:"montserrat",children:c})]})]})})}var g,v=n(119),y=n(123),k=n(21),C=n(61);n(76);var F=C.a.div(g||(g=Object(k.a)(["\nwidth: 100%;\nposition: relative;\ndisplay: flex;\n\n.header{\n  display: flex;\n  background: #A30000;\n  width: 100%;\n  height: 5vh;\n  color: #fff;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px;\n  font-family: 'Montserrat', sans-serif;\n  position: sticky;\n}\n\n.button {\n  font-family: 'Montserrat', sans-serif;\n  background: #F4F4F6;\n  color: #110B11;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  box-shadow: 5px 5px 5px #ccc;\n  text-shadow:none;\n  margin: 5px;\n  }\n  \n.button:hover {\n  background: gray;\n  color: #fff;\n  border: 1px solid #000;\n  border-radius: 5px;\n  box-shadow: 5px 5px 5px #ccc;\n  text-shadow:none;\n  }\n"]))),w=function(){var t=Object(j.f)();return Object(p.jsx)(F,{children:Object(p.jsxs)("div",{className:"header",children:[Object(p.jsx)("div",{className:"logo",children:Object(p.jsx)("h2",{onClick:function(){return t("/PROJECT-2-DEVINMMO/")},children:"DEVinMMO"})}),Object(p.jsxs)("div",{className:"homeBtn",children:[Object(p.jsx)("button",{className:"button",onClick:function(){return t("/PROJECT-2-DEVINMMO/")},children:"Home"}),Object(p.jsx)("button",{className:"button",onClick:function(){return t("/PROJECT-2-DEVINMMO/news")},children:"News"})]})]})})},E=n.p+"static/media/Background4.02a6059e.jpg",M=function(t){var e=t.children;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{style:{width:"100%",maxHeight:"100%",background:"url(".concat(E,")"),backgroundAttachment:"fixed",backgroundRepeat:"no-repeat"},children:[Object(p.jsx)(w,{}),Object(p.jsx)(y.a,{sx:{marginTop:"10px"},children:Object(p.jsx)(v.a,{children:e})})]})})},T=function(){var t=Object(a.useState)([]),e=Object(d.a)(t,2),n=e[0],c=e[1];return Object(a.useEffect)((function(){fetch("https://mmo-games.p.rapidapi.com/games",{method:"GET",headers:{"x-rapidapi-host":"mmo-games.p.rapidapi.com","x-rapidapi-key":"1d2d71b1d1mshd95b1636d349336p10c343jsn3d86a33a1e0c"}}).then((function(t){return t.json()})).then((function(t){return c(t)}))}),[]),Object(p.jsx)(M,{children:Object(p.jsx)(l.a,{container:!0,spacing:2,fontFamily:"montserrat",children:n.length>0?n.map((function(t){return Object(p.jsx)(l.a,{sm:6,md:4,lg:3,item:!0,children:Object(p.jsx)(f,{id:t.id,title:t.title,genre:t.genre,description:t.short_description,thumb:t.thumbnail})},t.id)})):Object(p.jsx)(m.a,{})})})},N=n(114),I=n(109),B=n(121),J=n(112),R=n(66),V=n(64),_=(n(87),["onChange","onClickItem","onClickThumb"]),D=function(t){var e=t.onChange,n=t.onClickItem,a=t.onClickThumb,c=Object(R.a)(t,_);return Object(p.jsx)(V.Carousel,{infiniteLoop:!0,showArrows:!0,onChange:e,onClickItem:n,onClickThumb:a,dynamicHeight:!0,autoFocus:!0,autoPlay:!0,interval:2e3,children:c.images.map((function(t,e){return Object(p.jsx)(y.a,{children:Object(p.jsx)("img",{src:t.image,alt:t.image})},"".concat(t.id,"-").concat(e))}))})},P=function(){var t=Object(j.f)(),e=Object(j.g)().gameId,n=Object(a.useState)(null),c=Object(d.a)(n,2),i=c[0],r=c[1];return Object(a.useEffect)((function(){fetch("https://mmo-games.p.rapidapi.com/game?id=".concat(e),{method:"GET",headers:{"x-rapidapi-host":"mmo-games.p.rapidapi.com","x-rapidapi-key":"2768fdfdb3mshc3bfe71a9983794p16b2d3jsn42669ce7aa62"}}).then((function(t){return t.json()})).then((function(t){return r(t)}))}),[e]),Object(p.jsx)(M,{children:Object(p.jsx)(N.a,{elevation:"1",children:Object(p.jsx)(l.a,{container:!0,sx:{padding:1},children:i?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(l.a,{item:!0,md:12,children:Object(p.jsx)("img",{src:i.thumbnail,alt:i.title})}),Object(p.jsxs)(l.a,{item:!0,md:12,fontFamily:"montserrat",children:[Object(p.jsx)("p",{children:Object(p.jsx)(O.a,{variant:"h5",fontFamily:"montserrat",sx:{margin:1},children:i.title})}),Object(p.jsxs)(l.a,{sx:{margin:1},children:[Object(p.jsx)(I.a,{label:i.genre,variant:"outlined",fontFamily:"montserrat"}),Object(p.jsx)(I.a,{label:i.publisher,variant:"outlined",fontFamily:"montserrat",sx:{marginLeft:1}}),Object(p.jsx)(I.a,{label:i.platform,variant:"outlined",fontFamily:"montserrat",sx:{marginLeft:1}})]}),Object(p.jsx)("p",{children:Object(p.jsx)(O.a,{variant:"subtitle1",fontFamily:"montserrat",children:i.short_description})}),!!i.screenshots&&Object(p.jsx)(D,{images:i.screenshots}),Object(p.jsx)(B.a,{})]}),Object(p.jsx)(J.a,{variant:"contained",fontFamily:"montserrat",onClick:function(){return t("/")},children:"VOLTAR"})]}):Object(p.jsx)(m.a,{})})})})};function A(t){var e=t.article_url,n=t.title,a=t.description,c=t.thumb;return Object(p.jsx)(b.a,{children:Object(p.jsxs)(h.a,{onClick:function(){window.open("".concat(e),"_blank")},children:[Object(p.jsx)(x.a,{component:"img",height:"500",image:c,alt:n}),Object(p.jsxs)(u.a,{children:[Object(p.jsx)(O.a,{gutterBottom:!0,variant:"h5",component:"div",fontWeight:"bold",fontFamily:"montserrat",children:n}),Object(p.jsx)(O.a,{variant:"body2",color:"text.secondary",fontFamily:"montserrat",children:a})]})]})})}var L=function(){var t=Object(a.useState)([]),e=Object(d.a)(t,2),n=e[0],c=e[1];return Object(a.useEffect)((function(){fetch("https://mmo-games.p.rapidapi.com/latestnews",{method:"GET",headers:{"x-rapidapi-host":"mmo-games.p.rapidapi.com","x-rapidapi-key":"2768fdfdb3mshc3bfe71a9983794p16b2d3jsn42669ce7aa62"}}).then((function(t){return t.json()})).then((function(t){return c(t)}))}),[]),Object(p.jsx)(M,{children:Object(p.jsx)(N.a,{elevation:"1",children:Object(p.jsx)(l.a,{container:!0,spacing:2,fontFamily:"montserrat",sx:{marginTop:"2px"},children:n.length>0?n.map((function(t){return Object(p.jsx)(l.a,{sm:12,md:12,lg:12,item:!0,children:Object(p.jsx)(A,{article_url:t.article_url,title:t.title,description:t.short_description,thumb:t.main_image})},t.id)})):Object(p.jsx)(m.a,{})})})})};function S(){return Object(p.jsxs)(j.c,{children:[Object(p.jsx)(j.a,{path:"PROJECT-2-DEVINMMO/",element:Object(p.jsx)(T,{})}),Object(p.jsx)(j.a,{path:"PROJECT-2-DEVINMMO/:gameId",element:Object(p.jsx)(P,{})}),Object(p.jsx)(j.a,{path:"PROJECT-2-DEVINMMO/news",element:Object(p.jsx)(L,{})}),Object(p.jsx)(j.a,{path:"*",element:Object(p.jsx)("h1",{children:"Not Found"})})]})}var W=n(35),G=Object(r.a)({components:{MuiCssBaseline:{styleOverrides:"\n        h1 {\n          margin: 0;\n          font-family:montserrat;\n          font-size: 2vw;\n          font-weight: bold;\n          text-align: center;\n        }\n      "}}}),H=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(W.a,{children:Object(p.jsxs)(s.c,{theme:G,children:[Object(p.jsx)(o.a,{}),Object(p.jsx)(S,{})]})})})};i.a.render(Object(p.jsx)(H,{}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.85406d6d.chunk.js.map