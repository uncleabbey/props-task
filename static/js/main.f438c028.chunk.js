(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{26:function(e,t,o){},27:function(e,t,o){},33:function(e,t,o){"use strict";o.r(t);var c=o(0),s=o(1),n=o.n(s),r=o(15),a=o.n(r),i=(o(26),o(27),function(e){var t=e.name,o=e.type,s=e.image;return Object(c.jsxs)("div",{className:"pokecard",children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("img",{src:s,alt:"pokedex_image"}),Object(c.jsxs)("p",{children:["Type: ",o]})]})}),j=function(e){var t=e.data;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Pokemon List"}),Object(c.jsx)("div",{className:"pokedex",children:t.pokemon.map((function(e){var t=e.id,o=e.type,s=e.image,n=e.name;return Object(c.jsx)(i,{name:n,type:o,image:s},t)}))})]})};j.defaultProps={data:{pokemon:[{id:1,name:"Charmander",type:"fire",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{id:2,name:"Squirtle",type:"water",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{id:3,name:"Butterfree",type:"flying",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"},{id:4,name:"Rattata",type:"normal",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"},{id:5,name:"Metapod",type:"bug",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"}]}};var l=j,p=o(8),b=o(2),d=o(16),m=o(17),x=o(20),u=o(19),h=["blue","red","orange","gold","purple","silver","black","grey","yellow","green","tomato","brown","blueviolet","chocolate","white"],O=function(e){var t=e.color;return Object(c.jsx)("div",{onClick:function(e){e.target.style.background=h[Math.floor(Math.random()*h.length)]},className:"color",style:{background:t}})},k=function(e){Object(x.a)(o,e);var t=Object(u.a)(o);function o(){return Object(d.a)(this,o),t.apply(this,arguments)}return Object(m.a)(o,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"box-container",children:[Object(c.jsx)(O,{color:"blue"}),Object(c.jsx)(O,{color:"red"}),Object(c.jsx)(O,{color:"orange"}),Object(c.jsx)(O,{color:"gold"}),Object(c.jsx)(O,{color:"purple"}),Object(c.jsx)(O,{color:"black"}),Object(c.jsx)(O,{color:"grey"}),Object(c.jsx)(O,{color:"brown"}),Object(c.jsx)(O,{color:"yellow"}),Object(c.jsx)(O,{color:"green"}),Object(c.jsx)(O,{color:"deepskyblue"}),Object(c.jsx)(O,{color:"blueviolet"}),Object(c.jsx)(O,{color:"aquamarine"}),Object(c.jsx)(O,{color:"chocolate"}),Object(c.jsx)(O,{color:"teal"}),Object(c.jsx)(O,{color:"tomato"}),Object(c.jsx)(O,{color:"salmon"}),Object(c.jsx)(O,{color:"saddlebrown"}),Object(c.jsx)(O,{color:"pink"}),Object(c.jsx)(O,{color:"peachplum"}),Object(c.jsx)(O,{color:"darkblue"}),Object(c.jsx)(O,{color:"darkmagenta"}),Object(c.jsx)(O,{color:"crimson"}),Object(c.jsx)(O,{color:"goldenrod"})]})}}]),o}(s.Component),g=[{id:1,task:"Wash Cloth",isComplete:!0},{id:2,task:"Take out the trash",isComplete:!0},{id:3,task:"Shopping",isComplete:!1},{id:4,task:"Listen to Music",isComplete:!0},{id:5,task:"Call HR",isComplete:!1}],f=function(e){var t=e.task,o=e.isComplete;return Object(c.jsxs)("div",{className:"todo",children:[Object(c.jsx)("input",{type:"checkbox",name:"isComplete",checked:o}),Object(c.jsx)("span",{className:o?"isComplete":"",children:t})]})},v=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Todo List"}),g.map((function(e){var t=e.id,o=e.task,s=e.isComplete;return Object(c.jsx)(f,{task:o,isComplete:s},t)}))]})},y=function(){return Object(c.jsxs)("div",{className:"exercise",children:[Object(c.jsx)("h2",{children:"Exercise"}),Object(c.jsxs)("p",{children:[Object(c.jsx)(p.b,{to:"/pokemon",children:"Take One"})," "]}),Object(c.jsxs)("p",{children:[Object(c.jsx)(p.b,{to:"/boxes",children:"Take Two"})," "]}),Object(c.jsxs)("p",{children:[Object(c.jsx)(p.b,{to:"/todo",children:"Take Three"})," "]})]})};var C=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(p.a,{children:Object(c.jsxs)(b.c,{children:[Object(c.jsx)(b.a,{exact:!0,path:"/",component:y}),Object(c.jsx)(b.a,{exact:!0,path:"/pokemon",component:l}),Object(c.jsx)(b.a,{exact:!0,path:"/boxes",component:k}),Object(c.jsx)(b.a,{exact:!0,path:"/todo",component:v})]})})})},w=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,34)).then((function(t){var o=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;o(e),c(e),s(e),n(e),r(e)}))};a.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root")),w()}},[[33,1,2]]]);
//# sourceMappingURL=main.f438c028.chunk.js.map