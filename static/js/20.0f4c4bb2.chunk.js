(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{595:function(t){t.exports={owner:"axetroy",repo:"blog",todo_repo:"todo",github_client_id:"b8257841dd7ca5eef2aa",github_client_secret:"4da33dd6fcb0a01d395945ad18613ecf9c12079e"}},597:function(t,e,n){"use strict";n.d(e,"b",function(){return i});var a=n(595),r=n(616),i=new(n.n(r).a)({params:{client_id:a.github_client_id,client_secret:a.github_client_secret},withCredentials:!1,responseType:"json"});e.a=i},601:function(t,e,n){"use strict";var a=n(611),r=n(600);e.a=function(t){return{updateOwner:function(t,e){return function(){return{OWNER:e}}},updateShowCases:function(t,e){return function(){return{SHOW_CASES:e}}},updateTodo:function(t,e,n){return function(){return{TODO:Object(r.a)({},t.TODO,Object(a.a)({},e,n))}}},updateTodoList:function(t,e){return function(){return{TODOS:e}}},updateTodoLabel:function(t,e){return function(){return{TODO_LABELS:e}}},updateRepositories:function(t,e){return function(){return{REPOS:e}}},updateArticles:function(t,e){return function(){return{POSTS:e}}},updateArticle:function(t,e,n){return function(){return{POST:Object(r.a)({},t.POST,Object(a.a)({},e,n))}}},updateGistList:function(t,e){return function(){return{GISTS:e}}},updateGist:function(t,e,n){return function(){return{GIST:Object(r.a)({},t.GIST,Object(a.a)({},e,n))}}},updateFollowers:function(t,e){return function(){return{FOLLOWERS:e}}}}}},883:function(t,e,n){},916:function(t,e,n){"use strict";n.r(e);n(654);var a=n(657),r=n(600),i=n(607),s=n.n(i),c=n(608),u=n(25),o=n(26),l=n(28),p=n(27),f=n(29),d=n(0),h=n.n(d),g=n(138),b=n(65),m=n(55),O=n(636),v=n.n(O),w=n(597),_=n(595),S=n(601),L=(n(883),function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).state={meta:{page:1,per_page:10,total:0},gistList:[],hashNextpage:!1},n}return Object(f.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.state.meta,n=e.page,a=e.per_page;this.getGistList(n,a).then(function(e){t.setState({gistList:e,hashNextpage:e.length>0&&e.length>=a})})}},{key:"componentDidCatch",value:function(t){console.error(t)}},{key:"getAllGistList",value:function(){var t=Object(c.a)(s.a.mark(function t(e,n){var a,r,i,c=arguments;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=c.length>2&&void 0!==c[2]?c[2]:[],t.next=3,w.a.gists.listPublicForUser({username:_.owner,page:e,per_page:n,client_id:_.github_client_id,client_secret:_.github_client_secret});case 3:return r=t.sent,i=r.data,a=a.concat(i||[]),t.abrupt("return",a);case 7:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},{key:"getGistList",value:function(){var t=Object(c.a)(s.a.mark(function t(e,n){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({loading:!0}),t.next=3,this.getAllGistList(e,n);case 3:return a=t.sent,this.setState({loading:!1,hashNextpage:a.length>0&&a.length>=n}),t.abrupt("return",a);case 6:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},{key:"getNextGistList",value:function(){var t=Object(c.a)(s.a.mark(function t(){var e,n,a,i,c,u,o;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.state.meta,n=e.page,a=e.per_page,i=n+1,t.next=4,this.getGistList(i,a);case 4:(c=t.sent).length&&(u={},o=this.state.gistList.concat(c).filter(function(t){return!u[t.id]&&(u[t.id]=!0,!0)}),this.setState({meta:Object(r.a)({},this.state.meta,{page:i}),gistList:o}));case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return h.a.createElement("div",{className:"widget widget-gist"},h.a.createElement("div",null,h.a.createElement("h2",null,h.a.createElement(b.b,{to:"/gist"},h.a.createElement(v.a,{name:"gist",mega:!0}),h.a.createElement("span",{className:"middle"},"Gist")))),h.a.createElement("ul",{className:"gist-list"},this.state.gistList.map(function(t){return h.a.createElement("li",{key:t.id,className:"gist-item"},h.a.createElement(b.b,{exact:!0,to:"/gist/".concat(t.id),style:{whiteSpace:"nowrap",wordBreak:"break-all",textOverflow:"ellipsis",overflow:"hidden"}},t.description))}),this.state.hashNextpage?h.a.createElement("li",{className:"more"},h.a.createElement(a.a,{type:"default",loading:this.state.loading,onClick:function(){return t.getNextGistList()}},this.state.loading?"Loading":"More")):""))}}]),e}(d.Component));e.default=Object(g.connect)(function(t){return{}},S.a)(Object(m.e)(L))}}]);
//# sourceMappingURL=20.0f4c4bb2.chunk.js.map