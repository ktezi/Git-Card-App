(this["webpackJsonpgit-card-app"]=this["webpackJsonpgit-card-app"]||[]).push([[0],{21:function(e,t,a){e.exports=a(45)},26:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(18),s=a.n(o),c=(a(26),a(7)),i=a.n(c),l=a(8),u=a(19),m=a(2),p=a(3),h=a(5),f=a(4),d=a(6),v=a(20),b=a.n(v),E=function(e){return n.a.createElement("div",{className:"cardlist"},e.profiles.map((function(t){return n.a.createElement(g,Object.assign({key:t.id},t,{onDelete:e.onDelete}))})))},g=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e,t=this,a=this.props;return console.log(a),e=a.blog?n.a.createElement("div",{className:"linkdin"},n.a.createElement("a",{href:a.blog,target:"_blank"},n.a.createElement("i",{className:"fa fa-linkedin"}))):n.a.createElement("div",null),n.a.createElement("div",{className:"github-profile"},n.a.createElement("img",{src:a.avatar_url}),n.a.createElement("div",{className:"info"},n.a.createElement("div",{className:"name"},a.name),n.a.createElement("div",{className:"company"},a.company),n.a.createElement("div",{className:"location"},a.location),e,n.a.createElement("div",{className:"git-hub"},n.a.createElement("a",{href:a.html_url,target:"_blank"},n.a.createElement("i",{className:"fa fa-github"})))),n.a.createElement("div",{className:"contact-remove-parent"},n.a.createElement("button",{className:"contact-remove",onClick:function(){return t.props.onDelete(a)}})))}}]),t}(n.a.Component),N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={userName:"",search_history:[]},a.handleSubmit=function(){var e=Object(u.a)(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!a.props.profiles.map((function(e){return e.login===a.state.userName?"true":null})).includes("true")){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,e.next=7,b.a.get("https://api.github.com/users/".concat(a.state.userName));case 7:r=e.sent,a.props.onSubmit(r.data),(n=Object(l.a)(a.state.search_history)).push(a.state.userName),a.setState({search_history:n}),a.setState({userName:""}),e.next=23;break;case 15:e.prev=15,e.t0=e.catch(4),console.log(e.t0),console.error("Error response:"),alert("NOT FOUND"),console.error(e.t0.response.data),console.error(e.t0.response.status),console.error(e.t0.response.headers);case 23:return e.prev=23,console.log(r),e.finish(23);case 26:case"end":return e.stop()}}),e,null,[[4,15,23,26]])})));return function(t){return e.apply(this,arguments)}}(),a.filterFunction=function(){a.state.search_history.forEach((function(e){return n.a.createElement("div",null,e)}))},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;console.log("hello");var t=this.state.search_history.map((function(e){return n.a.createElement("div",null)}));return console.log(t),console.log(this.state.search_history),n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("div",{className:"form_div"},n.a.createElement("input",{className:"abc",type:"text",value:this.state.userName,onChange:function(t){return e.setState({userName:t.target.value})},placeholder:"GitHub username",required:!0}),n.a.createElement("button",null,"Add card")))}}]),t}(n.a.Component),y=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(n)))).state={profiles:[]},a.removeProfile=function(e){console.log(e),a.setState((function(t){return{profiles:t.profiles.filter((function(t){return t.id!==e.id}))}}))},a.addNewProfile=function(e){a.setState((function(t){return{profiles:[].concat(Object(l.a)(t.profiles),[e])}}))},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"main-div"},n.a.createElement("div",{className:"header"},this.props.title),n.a.createElement(N,{onSubmit:this.addNewProfile,profiles:this.state.profiles}),n.a.createElement(E,{profiles:this.state.profiles,onDelete:this.removeProfile}))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(y,{title:"The GitHub Cards App"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);