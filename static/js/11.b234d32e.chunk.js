(window["webpackJsonpabout-me"]=window["webpackJsonpabout-me"]||[]).push([[11],{182:function(e,t,a){"use strict";a.r(t);var n=a(38),r=a(0),o=a.n(r),c=a(179),i=a(193),u=a(142),l=a(184),m=a(144),s=a(143),d=a(185),b=a(99),p=a(180),f=a(183),g=a(178),h=a(145),E=a(75),w=a.n(E),j=a(74),k=Object(c.a)(Object(i.a)({card:{maxWidth:400,minWidth:345},root:{flexGrow:1,width:"95%",margin:"0 auto",marginTop:"2%"}})),v={height:"100%",width:"100%",position:"fixed",backgroundImage:"url('https://raw.githubusercontent.com/Arunscape/About-Me/master/src/images/background.jpg')",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover",backgroundAttachment:"fixed",filter:"blur(8px)",zIndex:-1};t.default=function(){var e=k(),t=Object(r.useState)(null),a=Object(n.a)(t,2),c=a[0],i=a[1];return Object(r.useEffect)(function(){fetch("https://raw.githubusercontent.com/Arunscape/About-Me/master/src/data/projects.json").then(function(e){return e.json()}).then(function(e){return i(e)})},[]),c?o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{style:v}),o.a.createElement("div",{className:e.root},o.a.createElement(f.a,{container:!0,direction:"row",justify:"space-around",alignItems:"flex-start",spacing:3},c.map(function(t){return o.a.createElement(f.a,{item:!0,key:t.title},o.a.createElement(u.a,{className:e.card},o.a.createElement(l.a,null,o.a.createElement(d.a,{component:"img",alt:"",height:"140",image:t.previewimage,title:t.title}),o.a.createElement(s.a,null,o.a.createElement(p.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.title),o.a.createElement(p.a,{variant:"body2",color:"textSecondary",component:"p"},t.description))),o.a.createElement(m.a,null,t.demourl&&o.a.createElement(b.a,{size:"small",color:"primary",onClick:function(){return Object(j.a)(t.demourl)}},"Demo"),t.githuburl&&o.a.createElement(h.a,{"aria-label":"View the souce code on GitHub",onClick:function(){return Object(j.a)(t.githuburl)}},o.a.createElement(w.a,null)),t.moreinfo&&o.a.createElement(b.a,{size:"small",color:"primary",onClick:function(){return Object(j.a)(t.moreinfo)}},"More Info"))))})))):o.a.createElement("div",null,"Loading...")}},74:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e){return window.open(e,"_blank")}}}]);
//# sourceMappingURL=11.b234d32e.chunk.js.map