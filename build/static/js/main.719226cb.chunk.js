(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(4),l=t.n(c),o=(t(14),t(5)),i=t(6),u=t(1),s=t(8),m=t(7),f=(t(3),function(e){var n=e.symbol,t=e.id,a=e.onClick,c="cell font ".concat({X:"red",0:"blue","":""}[n]);return r.a.createElement("button",{className:c,id:t,onClick:function(){return a(t)}},n)}),d=function(e){return r.a.createElement("div",{className:"grid"},e.cells.map((function(n,t){return r.a.createElement(f,{symbol:n,id:t,key:t,onClick:e.onClick})})))},y=function(e){return r.a.createElement("p",{className:"font"},e.msg)},w=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],b=function(e){Object(s.a)(t,e);var n=Object(m.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=n.call(this,e)).state={currentPlayer:{name:"X",symbol:"X"},nextPlayer:{name:"0",symbol:"0"},cells:Array(9).fill(""),winner:{name:null},isGameDraw:!1},a.updateGame=a.updateGame.bind(Object(u.a)(a)),a}return Object(i.a)(t,[{key:"getWinner",value:function(e,n){return{name:w.some((function(t){return t.every((function(t){return e[t]===n.symbol}))}))?n.name:null}}},{key:"updateGame",value:function(e){var n=this;this.setState((function(t){var a=t.currentPlayer,r=t.nextPlayer,c=t.cells,l=t.isGameDraw,o=t.winner,i=c.slice();if(!i[e]&&!l&&!o.name)return i[e]=a.symbol,{cells:i,currentPlayer:r,nextPlayer:a,winner:n.getWinner(i,a),isGameDraw:i.every((function(e){return e}))&&!o.name}}))}},{key:"render",value:function(){var e=this.state,n=e.cells,t=e.currentPlayer,a=e.isGameDraw,c=e.winner,l="".concat(t.name,"'s Turn");return c.name&&(l="".concat(t.name," Won")),a&&(l="Draw Game"),r.a.createElement("div",null,r.a.createElement(y,{msg:l}),r.a.createElement(d,{cells:n,onClick:this.updateGame}))}}]),t}(r.a.Component),v=function(){window.location.reload(!1)},h=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(b,null),r.a.createElement("br",null),r.a.createElement("button",{onClick:v,className:"font button "},"New Game"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,n,t){},9:function(e,n,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.719226cb.chunk.js.map