(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),l=(n(14),n(5)),i=n(6),u=n(1),s=n(8),m=n(7),d=(n(3),function(e){var t=e.symbol,n=e.id,a=e.onClick,c="";"X"===t?c="red":"0"===t&&(c="blue");var o="cell font ".concat(c);return r.a.createElement("button",{className:o,id:n,onClick:a},t)}),f=function(e){return r.a.createElement("div",{className:"grid"},e.cells.map((function(t,n){return r.a.createElement(d,{symbol:t,id:n,key:n,onClick:e.onClick})})))},v=function(e){return r.a.createElement("p",{className:"font"},e.msg)},h=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],p=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={player:"X",cells:Array(9).fill(null),status:"turn"},a.updateGame=a.updateGame.bind(Object(u.a)(a)),a}return Object(i.a)(n,[{key:"getGameStatus",value:function(e){var t=this,n=h.some((function(n){return n.every((function(n){return e[n]===t.state.player}))})),a=e.every((function(e){return e}));return n?"won":a?"draw":"turn"}},{key:"updateGame",value:function(e){var t=e.target.id,n=this.state,a=n.cells,r=n.status,c=n.player;if(!a[t]&&"turn"===r){var o=a.slice();o[t]=c,this.setState({status:this.getGameStatus(o),player:"X"===c?"0":"X",cells:o})}}},{key:"render",value:function(){var e=this.state,t=e.status,n=e.player,a=e.cells,c={won:"Winner: ".concat("X"===n?"0":"X"),turn:"Turn: Player ".concat(n),draw:"Draw Game"};return r.a.createElement("div",null,r.a.createElement(v,{msg:c[t]}),r.a.createElement(f,{cells:a,onClick:this.updateGame}))}}]),n}(r.a.Component),y=function(){window.location.reload(!1)},w=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(p,null),r.a.createElement("br",null),r.a.createElement("button",{onClick:y,className:"font button "},"New Game"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,t,n){},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.0432359c.chunk.js.map