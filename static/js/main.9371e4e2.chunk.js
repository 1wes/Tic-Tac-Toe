(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(44)},33:function(e,t,a){},37:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(22),l=a.n(n),r=a(0),o=a.n(r),c=a(4),i=a(14),s=a(9),u=a(8),m=a(11),d=a(10),p=a(12),g=(a(33),a(20)),E=a(52),v=(a(37),document.getElementById("nav-bar"),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.onscroll=function(){a()};var e=document.getElementById("nav-bar"),t=e.getBoundingClientRect().top,a=function(){window.scrollY>t?e.classList.add("sticky"):e.classList.remove("sticky")}}},{key:"render",value:function(){return o.a.createElement("nav",{id:"nav-bar"},o.a.createElement("ul",null,o.a.createElement("li",{style:{color:"whitesmoke"}},o.a.createElement("a",{href:"javascript:void(0);"},"tic-tac-toe"))))}}]),t}(o.a.Component)),h=a(24),b=a(23),f=a(16),S=a(1);function y(){return o.a.createElement("div",{className:"how-to-play"},o.a.createElement("div",{className:"instructions-link"},o.a.createElement(f.b,{to:"/instructions",style:{textDecoration:"none"}},"How to Play?")),o.a.createElement(S.a,null))}var w=(new Date).getFullYear(),N=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("div",{className:"footer_details"},o.a.createElement("div",null,o.a.createElement(y,null)),o.a.createElement("span",null,o.a.createElement("span",{className:"copyright-icon"},o.a.createElement(h.a,{icon:b.a})),"Wes ",o.a.createElement("span",{className:"copyright_year"},w))))}}]),t}(o.a.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(v,null),o.a.createElement(N,null))}}]),t}(o.a.Component);function I(e){return o.a.createElement("button",{type:"button",className:"square",onClick:e.onClick},e.value)}g.a.initialize("G-1R65DNZP1P");var O,j=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"displaySquare",value:function(e){var t=this;return o.a.createElement(I,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"board-row"},this.displaySquare(0),this.displaySquare(1),this.displaySquare(2)),o.a.createElement("div",{className:"board-row"},this.displaySquare(3),this.displaySquare(4),this.displaySquare(5)),o.a.createElement("div",{className:"board-row"},this.displaySquare(6),this.displaySquare(7),this.displaySquare(8)))}}]),t}(o.a.Component),k=localStorage.getItem("localStoragexCounter"),q=parseInt(k,10);O=isNaN(q)?0:q;var x,D=localStorage.getItem("localStorageoCounter"),T=parseInt(D,10);x=isNaN(T)?0:T;var R,W=localStorage.getItem("localStorageDrawCounter"),X=parseInt(W,10);R=isNaN(X)?0:X;var P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleClick=function(e){var t=a.state.squares.slice();B(t)||t[e]||(t[e]=a.state.xIsNext?"X":"O",a.setState({squares:t,xIsNext:!a.state.xIsNext}))},a.handleCounterReset=function(){localStorage.length>0?!0===window.confirm("This action will reset the Counter to 0 !")&&(localStorage.clear(),window.location.reload(!0)):alert("The counter is already at 0!")},a.state={squares:Array(9).fill(null),xIsNext:!0},a.handleCounterReset=a.handleCounterReset.bind(Object(i.a)(Object(i.a)(a))),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){g.a.pageview(window.location.pathname)}}]),Object(u.a)(t,[{key:"render",value:function(){var e,t=this,a=B(this.state.squares);return e=a&&"draw"!==a?"Winner is: "+a+" !":a&&"draw"===a?"It is a "+a+" !":"Next player is: "+(this.state.xIsNext?"X":"O"),o.a.createElement("div",null,o.a.createElement(C,null),o.a.createElement("div",{className:"game"},o.a.createElement("div",{className:"game-board"},o.a.createElement("div",{className:"nextPlayer"},e),o.a.createElement(j,{squares:this.state.squares,onClick:function(e){return t.handleClick(e)}})),o.a.createElement("div",{className:"game-info"},o.a.createElement("div",null,o.a.createElement("div",{className:"winner-count-header"},"Winner count"),o.a.createElement("div",{className:"winner-counter"},o.a.createElement("div",{className:"display-counter"},"X: ",o.a.createElement("span",null,O)),o.a.createElement("div",{className:"display-counter"},"Draw: ",o.a.createElement("span",null,R)),o.a.createElement("div",{className:"display-counter"},"O: ",o.a.createElement("span",null,x)," ")),o.a.createElement("div",{className:"reset-counter-button"},o.a.createElement(E.a,{variant:"outlined",size:"small",color:"error",id:"reset-button",fullWidth:!0,onClick:this.handleCounterReset},"Reset Counter"))),o.a.createElement("div",{className:""}))))}}]),t}(o.a.Component);function B(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(c.a)(t[a],3),l=n[0],r=n[1],o=n[2];if(e[l]&&e[l]===e[r]&&e[l]===e[o]){if("X"===e[l]){if(null===localStorage.getItem("localStoragexCounter"))localStorage.setItem("localStoragexCounter","0");else{var i=localStorage.getItem("localStoragexCounter");localStorage.setItem("localStoragexCounter",i.toString())}var s=parseInt(localStorage.getItem("localStoragexCounter"),10);s+=1,localStorage.setItem("localStoragexCounter",s.toString())}else{if(null===localStorage.getItem("localStorageoCounter"))localStorage.setItem("localStorageoCounter","0");else{var u=localStorage.getItem("localStorageoCounter");localStorage.setItem("localStorageoCounter",u.toString())}var m=parseInt(localStorage.getItem("localStorageoCounter"),10);m+=1,localStorage.setItem("localStorageoCounter",m.toString())}return setInterval(function(){window.location.reload(!0)},1e3),e[l]}if(!e.includes(null)){if(null===localStorage.getItem("localStorageDrawCounter"))localStorage.setItem("localStorageDrawCounter","0");else{var d=localStorage.getItem("localStorageDrawCounter");localStorage.setItem("localStorageDrawCounter",d.toString())}var p=parseInt(localStorage.getItem("localStorageDrawCounter"),10);return p+=1,localStorage.setItem("localStorageDrawCounter",p.toString()),setInterval(function(){window.location.reload(!0)},1e3),"draw"}}return null}a(42);function Y(){return o.a.createElement("main",{className:"main-container",style:{color:"whitesmoke"}},o.a.createElement("h3",null,"How to play Tic-Tac-Toe"),o.a.createElement("div",null,o.a.createElement("div",{className:"main-content"},o.a.createElement("ul",{className:"instructions-list"},o.a.createElement("li",{className:"instruction"},o.a.createElement("div",{className:"instruction-number"},o.a.createElement("span",null,"1")),o.a.createElement("p",null," The game is played on a grid that's 3 squares by 3 squares.")),o.a.createElement("li",{className:"instruction"},o.a.createElement("div",{className:"instruction-number"},o.a.createElement("span",null,"2")),o.a.createElement("p",null,"One player is ",o.a.createElement("span",{id:"x"},"X"),", and the other is ",o.a.createElement("span",{id:"o"},"O"),". Players take turns putting their marks in empty squares")),o.a.createElement("li",{className:"instruction"},o.a.createElement("div",{className:"instruction-number"},o.a.createElement("span",null,"3")),o.a.createElement("p",null,"The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner")),o.a.createElement("li",{className:"instruction"},o.a.createElement("div",{className:"instruction-number"},o.a.createElement("span",null,"4")),o.a.createElement("p",null,"When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie."))),o.a.createElement("div",{className:"video-option"},"or do you prefer to watch a video?"),o.a.createElement("div",{className:"video-player"},o.a.createElement("iframe",{className:"video-frame",width:"700",height:"275",src:"https://www.youtube.com/embed/5SdW0_wTX5c",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))))}var _=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(C,null),o.a.createElement(Y,null))}}]),t}(o.a.Component),z=document.getElementById("root");l.a.render(o.a.createElement(f.a,null,o.a.createElement(S.d,null,o.a.createElement(S.b,{path:"/",element:o.a.createElement(P,null)}),o.a.createElement(S.b,{path:"instructions",element:o.a.createElement(_,null)}),o.a.createElement(S.b,null))),z)}},[[28,2,1]]]);
//# sourceMappingURL=main.9371e4e2.chunk.js.map