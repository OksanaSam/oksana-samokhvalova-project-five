(this["webpackJsonpoksana-samokhvalova-project-five"]=this["webpackJsonpoksana-samokhvalova-project-five"]||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/logo.12a0f127.png"},27:function(e,t,a){e.exports=a(59)},32:function(e,t,a){},52:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(25),s=a.n(r),l=(a(32),a(8)),c=a(1),i=a(2),m=a(4),u=a(3),p=a(10),h=a.n(p),d=a(11),f=a.n(d);a(50);f.a.initializeApp({apiKey:"AIzaSyBiob7vv7TgF5cSLbqB5POCOaoINgT7x5g",authDomain:"moody-ca507.firebaseapp.com",databaseURL:"https://moody-ca507.firebaseio.com",projectId:"moody-ca507",storageBucket:"moody-ca507.appspot.com",messagingSenderId:"699133095599",appId:"1:699133095599:web:38458b45ba871577e32e5a"});var g=f.a,b=[{url:"",mood:"",alt:""},{url:"",mood:"",alt:""},{url:"",mood:"",alt:""},{url:"https://images.unsplash.com/photo-1582623081729-4b43c8956085?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0MjAwOX0",mood:"white",alt:"hello"},{url:"",mood:"",alt:""}],v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"header ".concat(this.props.newColor),id:"header"},n.a.createElement("div",{className:"wrapper"},n.a.createElement("nav",{className:"navBar"},n.a.createElement("div",{className:"logo"},n.a.createElement("h1",null,"MOODY"),n.a.createElement("div",{className:"palette"},n.a.createElement("div",{className:"colorOne ".concat(this.props.newColor)}),n.a.createElement("div",{className:"colorTwo ".concat(this.props.newColor)}),n.a.createElement("div",{className:"colorThree ".concat(this.props.newColor)}))),n.a.createElement("label",{className:"switch"},n.a.createElement("input",{type:"checkbox",defaultChecked:!0,onChange:this.props.handleToggle}),n.a.createElement("span",{className:"slider"})))))}}]),a}(o.Component),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).handleClick=function(){e.props.removeImages(e.props.numBox)},e}return Object(i.a)(a,[{key:"render",value:function(){return console.log(this.props.mood),n.a.createElement("div",{className:"imagePlace imageEmpty"},n.a.createElement("button",{className:"closeButton",onClick:this.handleClick},n.a.createElement("i",{className:"fas fa-times"})),n.a.createElement("img",{src:this.props.url,alt:this.props.altTag}))}}]),a}(o.Component),N=a(6),w=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleKeyPress=function(t){if("Enter"===t.key){var a=e.textInput.current.value;if(!a)return;e.textInput.current.value="",e.props.getImages(a,e.props.numBox)}},e.toggleClass=function(){e.setState({showInput:!e.state.showInput,showAdd:!e.state.showAdd})},e.textInput=n.a.createRef(),e.state={showInput:!1,showAdd:!0},e.toggleClass=e.toggleClass.bind(Object(N.a)(e)),e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"imagePlace ".concat(this.props.newColor)},this.state.showInput&&n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{for:"moodInput",className:"sr-only"},"Word describing your mood"),n.a.createElement("input",{id:"moodInput",className:"moodInput",type:"text",placeholder:"Your mood",ref:this.textInput,onKeyPress:this.handleKeyPress})),this.state.showAdd&&n.a.createElement("button",{className:"addButton",onClick:this.toggleClass},n.a.createElement("i",{className:"fas fa-plus"})))}}]),a}(o.Component),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"frame"},n.a.createElement("div",{className:"innerFrame"},this.props.mood||this.props.url?n.a.createElement(E,{mood:this.props.mood,url:this.props.url,altTag:this.props.altTag,numBox:this.props.numBox,removeImages:this.props.removeImages,newColor:this.props.newColor}):n.a.createElement(w,{getImages:this.props.getImages,numBox:this.props.numBox,newColor:this.props.newColor}),n.a.createElement("div",{className:"icons"},n.a.createElement("div",{className:"leftIcons"},n.a.createElement("i",{className:"far fa-heart"}),n.a.createElement("i",{className:"far fa-paper-plane"}),n.a.createElement("i",{className:"far fa-comment"})),n.a.createElement("i",{className:"far fa-bookmark"})),this.props.mood&&n.a.createElement("p",{className:"moodTitle"},this.props.mood)))}}]),a}(o.Component),y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).handleClick=function(){e.props.removeQuote()},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"imagePlace ".concat(this.props.newColor)},n.a.createElement("button",{className:"closeButton",onClick:this.handleClick},n.a.createElement("i",{className:"fas fa-times"})),n.a.createElement("p",{className:"randomQuote"},this.props.quote),n.a.createElement("p",{className:"quoteAuthor"},this.props.author))}}]),a}(o.Component),j=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).toggleClass=function(){e.props.getQuote(),e.setState({showAdd:!e.state.showAdd})},e.state={showAdd:!0},e.toggleClass=e.toggleClass.bind(Object(N.a)(e)),e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"imagePlace ".concat(this.props.newColor)},this.state.showAdd&&n.a.createElement("button",{className:"addButton",onClick:this.toggleClass},n.a.createElement("i",{className:"fas fa-plus"})))}}]),a}(o.Component),O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"frame"},n.a.createElement("div",{className:"innerFrame"},this.props.quote?n.a.createElement(y,{quote:this.props.quote,author:this.props.author,removeQuote:this.props.removeQuote,newColor:this.props.newColor}):n.a.createElement(j,{getQuote:this.props.getQuote,newColor:this.props.newColor}),n.a.createElement("div",{className:"icons"},n.a.createElement("div",{className:"leftIcons"},n.a.createElement("i",{className:"far fa-heart"}),n.a.createElement("i",{className:"far fa-paper-plane"}),n.a.createElement("i",{className:"far fa-comment"})),n.a.createElement("i",{className:"far fa-bookmark"}))))}}]),a}(o.Component),k=a(26),I=a.n(k),x=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).handlePrint=function(){window.print()},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"footer ".concat(this.props.newColor),id:"footer"},n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"footerFlex"},n.a.createElement("div",{className:"footerLeft"},n.a.createElement("img",{className:"footerLogo",src:I.a,alt:"logo"}),n.a.createElement("button",{className:"print",onClick:this.handlePrint},n.a.createElement("i",{className:"fas fa-print"}))),n.a.createElement("ul",{className:"socialIcons"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/OksanaSam",target:"_blank","aria-label":"GitHub account"},n.a.createElement("i",{"aria-hidden":"true",className:"fab fa-github"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.linkedin.com/in/oksana-samokhvalova-6b03521b0/",target:"_blank","aria-label":"LinkedIn account"},n.a.createElement("i",{"aria-hidden":"true",className:"fab fa-linkedin-in"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://twitter.com/oksanadev",target:"_blank","aria-label":"Twitter Account"},n.a.createElement("i",{"aria-hidden":"true",className:"fab fa-twitter"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://open.spotify.com/playlist/2M9DHDbmG4bGKzeyL2auAq",target:"_blank","aria-label":"Spotify playlist"},n.a.createElement("i",{"aria-hidden":"true",className:"fab fa-spotify"}))))),n.a.createElement("p",{className:"copyright"},"\xa9 2020 Oksana Samokhvalova")))}}]),a}(o.Component),T=(a(52),a(53),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleToggle=function(){e.setState({isToggled:!e.state.isToggled})},e.getImages=function(t,a){h()({url:"https://api.unsplash.com/photos/random",method:"GET",responseType:"json",params:{client_id:"Ro76YKYpmutB58ImuEKT8izDBYKA669WYcjJWz-U6TA",query:t,orientation:"squarish"}}).then((function(o){var n=o.data,r=n.urls.regular,s=n.alt_description,c=Object(l.a)(e.state.boxList);for(var i in c[a]={url:r,mood:t,alt:s},e.setState({boxList:c}),e.state.boxList){g.database().ref().push(e.state.boxList[i])}}))},e.removeImages=function(t){var a=Object(l.a)(e.state.boxList);a[t]={url:"",mood:"",alt:""},e.setState({boxList:a})},e.getQuote=function(){h()({url:"https://type.fit/api/quotes",method:"GET",responseType:"json",params:{}}).then((function(t){var a=t.data,o=Math.floor(Math.random()*a.length),n=a[o].text,r=a[o].author;e.setState({quote:n,author:r}),g.database().ref().push(e.state.quote)}))},e.removeQuote=function(){e.setState({quote:"",author:""})},e.textInput=n.a.createRef(),e.state={boxList:b,quote:"",author:"",isToggled:!1},e}return Object(i.a)(a,[{key:"getBoxes",value:function(e){var t=this,a=this.state.boxList.map((function(a,o){return n.a.createElement(C,{key:o,mood:a.mood,url:a.url,altTag:a.alt,numBox:o,getImages:t.getImages,removeImages:t.removeImages,newColor:e})})),o=n.a.createElement(O,{quote:this.state.quote,author:this.state.author,removeQuote:this.removeQuote,getQuote:this.getQuote,newColor:this.state.isToggled?"ToggledClass":"NotToggledClass"});return[a[0],o].concat(Object(l.a)(a.slice(1)))}},{key:"render",value:function(){var e=this.state.isToggled?"ToggledClass":"NotToggledClass",t=this.getBoxes(e);return n.a.createElement("div",null,n.a.createElement(v,{handleToggle:this.handleToggle,newColor:e}),n.a.createElement("div",{className:"mainContainer ".concat(e)},n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"mainGrid",id:"mainGrid"},t))),n.a.createElement(x,{newColor:e}))}}]),a}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.202131e3.chunk.js.map