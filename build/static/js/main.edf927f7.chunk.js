(this["webpackJsonpalan-news"]=this["webpackJsonpalan-news"]||[]).push([[0],{144:function(e,t,a){e.exports=a.p+"static/media/alanlogo.29a7005f.png"},145:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),l=a.n(r),o=(a(86),a(36)),c=a(43),s=a.n(c),m=a(170),d=a(161),f=a(162),p=a(163),u=a(164),g=a(165),b=a(166),h=a(146),y=Object(h.a)({media:{height:250},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderBottom:"10px solid white"},activeCard:{borderBottom:"10px solid #22289a"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),x=a(70),w=a.n(x),v=function(e){var t=e.articles,a=t.description,r=t.publishedAt,l=t.source,c=t.title,s=t.url,h=t.urlToImage,x=e.i,v=e.activArticle,E=y(),j=i.a.useState([]),C=Object(o.a)(j,2),N=C[0],k=C[1];return Object(n.useEffect)((function(){k((function(e){return Array(20).fill().map((function(t,a){return e[a]||Object(n.createRef)()}))}))}),[]),Object(n.useEffect)((function(){var e;x===v&&N[v]&&(e=N[v],window.scroll(0,e.current.offsetTop-50))}),[x,v,N]),i.a.createElement(m.a,{ref:N[x],className:w()(E.card,v===x?E.activeCard:null)},i.a.createElement(d.a,{href:s,target:"_blank"},i.a.createElement(f.a,{className:E.media,image:h||"https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg"}),i.a.createElement("div",{className:E.details},i.a.createElement(p.a,{variant:"body2",component:"h2",color:"textSecondary"},new Date(r).toDateString()),i.a.createElement(p.a,{variant:"body2",component:"h2",color:"textSecondary"},l.name)),i.a.createElement(p.a,{className:E.title,gutterBottom:!0,variant:"h5"},c),i.a.createElement(u.a,null,i.a.createElement(p.a,{variant:"body2",color:"textPrimary",component:"p"},a))),i.a.createElement(g.a,{className:E.cardActions},i.a.createElement(b.a,{size:"small",color:"primary"},"Learne More"),i.a.createElement(p.a,{variant:"h5",color:"textSecondary"},x+1)))},E=a(169),j=a(167),C=Object(h.a)({container:{padding:"3 5%",width:"100%",margin:"0"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",width:"100%",height:"45vh",padding:"10%",borderRadius:10,color:"white"},infoCard:{display:"flex",flexDirection:"column",textAlign:"center"}}),N=[{color:"#00838f",title:"Latest News",text:"Give me the latest news"},{color:"#1565c0",title:"News by Categories",info:"Business, Entertainment, General, Health, Science, Sports, Technology",text:"Give me the latest Technology news"},{color:"#4527a0",title:"News by Terms",info:"Bitcoin, PlayStation 5, Smartphones, Donald Trump...",text:"What's up with PlayStation 5"},{color:"#283593",title:"News by Sources",info:"CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",text:"Give me the news from CNN"}],k=function(e){var t=e.articles,a=e.activArticle,n=C();return t.length?i.a.createElement(E.a,{in:!0},i.a.createElement(j.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},t.map((function(e,t){return i.a.createElement(j.a,{key:t,item:!0,xs:12,sm:6,md:4,lg:3,style:{display:"flex"}},i.a.createElement(v,{articles:e,i:t,activArticle:a}))})))):i.a.createElement(E.a,{in:!0},i.a.createElement(j.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},N.map((function(e,t){return i.a.createElement(j.a,{key:t,item:!0,xs:12,sm:6,md:4,lg:3,className:n.infoCard},i.a.createElement("div",{key:t,className:n.card,style:{backgroundColor:e.color}},i.a.createElement(p.a,{variant:"h5"},e.title),e.info?i.a.createElement(p.a,{variant:"h5"},i.a.createElement("strong",null,e.title.split(" ")[2],":",i.a.createElement("br",null),e.info)):null,i.a.createElement(p.a,{variant:"h6"},"Try saying: ",i.a.createElement("br",null),i.a.createElement("i",null,e.text))))}))))},O=a(25),A=a(168),S=Object(A.a)((function(e){return{footer:Object(O.a)({textAlign:"center",position:"fixed",left:0,bottom:0,color:"black",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",height:"120px"},e.breakpoints.down("sm"),{display:"none"}),link:{textDecoration:"none",color:"rgba(21, 101, 192)"},image:{marginLeft:20},card:Object(O.a)({display:"flex",justifyContent:"center",alignItems:"center",width:"50%",padding:"3%",borderRadius:10,color:"white",backgroundColor:"rgba(21, 101, 192)",margin:"0 12px",textAlign:"center",height:"25vmin"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center",width:"100%",height:"initial","&:nth-of-type(1)":{marginBottom:"12px"}}),infoContainer:Object(O.a)({display:"flex",alignItems:"center",justifyContent:"space-around"},e.breakpoints.down("sm"),{flexDirection:"column"}),logoContainer:Object(O.a)({padding:"0 5%",display:"flex",justifyContent:"space-around",alignItems:"center",background:"blue",width:"100%"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center"}),alanLogo:Object(O.a)({height:"27vmin",borderRadius:"15%",padding:"0 5%",margin:"3% 0"},e.breakpoints.down("sm"),{height:"35vmin"})}})),B=a(74),D=a.n(B),I=(a(144),function(){var e=i.a.useState([]),t=Object(o.a)(e,2),a=t[0],r=t[1],l=i.a.useState(-1),c=Object(o.a)(l,2),m=c[0],d=c[1],f=S();Object(n.useEffect)((function(){s()({key:"6b6df688a6bbeea96069bf7b25ab4e2f2e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){var t=e.command,a=e.articles,n=e.number;if("newHeadlines"===t)r(a),d(-1);else if("highlight"===t)d((function(e){return e+1}));else if("open"===t){var i=n.length>2?D()(n,{fuzzy:!0}):n,l=a[i-1];i>20?s()().playText("Please try again"):a&&(s()().playText("Opening..."),window.open(l.url,"_blank"))}}})}),[]);return i.a.createElement("div",null,i.a.createElement("div",{className:f.logoContainer},i.a.createElement("img",{src:"https://alan.app/voice/images/branding_page/logo-vertical/white/alan-logo-vertical-white.svg?728d821ded0104e12494a3c4f9fea985",className:f.alanLogo,alt:"alan logo"})),i.a.createElement(k,{articles:a,activArticle:m}))});l.a.render(i.a.createElement(I,null),document.getElementById("root"))},81:function(e,t,a){e.exports=a(145)},86:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.edf927f7.chunk.js.map