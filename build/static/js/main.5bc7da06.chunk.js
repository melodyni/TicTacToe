(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(4),i=t.n(c),o=(t(14),t(5)),l=t(6),s=t(1),u=t(8),m=t(7),d=(t(2),function(e){return r.a.createElement("button",{className:"cell font",id:e.id,onClick:e.onClick},e.symbol)}),f=function(e){return r.a.createElement("div",{className:"grid"},e.cells.map((function(n,t){return r.a.createElement(d,{symbol:n,id:t,key:t,onClick:e.onClick})})))},p=function(e){return r.a.createElement("p",{className:"font"},e.message)},h=function(e){Object(u.a)(t,e);var n=Object(m.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=n.call(this,e)).state={player:"X",cells:Array(9).fill(null),winner:null},a.updateGame=a.updateGame.bind(Object(s.a)(a)),a}return Object(l.a)(t,[{key:"updateGame",value:function(e){var n=e.target.id,t=this.state,a=t.cells,r=t.winner,c=t.player;if(!a[n]&&!r){var i=a.slice();i[n]=c;var o=this.props.winConditions.some((function(e){return e.every((function(e){return i[e]===c}))}));this.setState({winner:o?c:null,player:"X"===c?"0":"X",cells:i})}}},{key:"render",value:function(){var e=this.state,n=e.winner,t=e.player,a=e.cells,c=r.a.createElement(p,{message:"Winner: ".concat(n)}),i=r.a.createElement(p,{message:"Turn: Player ".concat(t)});return r.a.createElement("div",null,n?c:i,r.a.createElement(f,{cells:a,onClick:this.updateGame}))}}]),t}(r.a.Component),v=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],w=function(){return r.a.createElement(h,{winConditions:v})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},2:function(e,n,t){},9:function(e,n,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.5bc7da06.chunk.js.map