webpackJsonp([1],{0:function(t,e){},"6e+v":function(t,e){},"7F6F":function(t,e){},"7Otq":function(t,e,n){t.exports=n.p+"static/img/logo.6ac29cb.png"},HeKr:function(t,e){},Ib1B:function(t,e){},JUew:function(t,e){},Lw2a:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),n("div",{staticClass:"nav-bar"},[n("router-link",{class:{"active-page":"/home"===t.$route.path},attrs:{to:"/home"}},[t._v("Demos")]),t._v(" "),n("router-link",{class:{"active-page":"/about"===t.$route.path},attrs:{to:"/about"}},[t._v("About")]),t._v(" "),n("router-link",{class:{"active-page":"/contact"===t.$route.path},attrs:{to:"/contact"}},[t._v("Contact")])],1),t._v(" "),n("transition",{attrs:{name:"route",mode:"out-in"}},[n("router-view",{key:t.$route.fullPath})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:n("7Otq"),height:"100",width:"100",alt:"Matt's Logo"}}),this._v(" "),e("h1",[this._v("Matt Gween")])])}]};var i=n("VU/8")({name:"App"},o,!1,function(t){n("Ib1B")},null,null).exports,s=n("/ocq"),r=n("PnZc"),c=n.n(r),l={name:"Post",props:["post"],data:function(){return{faArrowCircleRight:c.a}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h2",[t._v(t._s(t.post.title))]),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.post.body)}}),t._v(" "),n("router-link",{staticClass:"icon-button demo-link",attrs:{to:"/demo/"+t.post.path}},[n("font-awesome-icon",{attrs:{icon:t.faArrowCircleRight,size:"2x"}})],1)],1)},staticRenderFns:[]};var d=[{body:"Gathing information from forms is an important part of many projects. Well-designed forms that are capable of accepting many different kinds of input are crucial in creating an effective application.",title:"Complex Forms",path:"form"},{body:"Searching though a database using custom parameters is a common feature of many projects. My database of choice is a NoSQL database called RethinkDB. This demo shows how complex queries can be used to find and manage data.",title:"Search Logic",linkString:"RethinkDB",linkSite:"https://rethinkdb.com",path:"search"},{body:"Many services offer external APIs that can be used to integrate their data into other projects. This can be very useful for anything from accessing records from a VOIP phone service to displaying social media posts.",title:"External API Usage",path:"api"},{body:"It is often important to have the most up-to-date and accurate information possible. Utilizing Socket.io, I can create an application that is always in sync across all users. No refreshing or manually updating needed.",title:"Live Updates",linkString:"Socket.io",linkSite:"https://socket.io",path:"live"},{body:"Having a clean and professional website can go a long way in helping to attract new business. I can put together a site using the newest features of HTML5, CSS3, and ECMAScript 6 that will look good on any device.",title:"Static Marketing Site",path:"marketing"}],m={name:"Home",components:{Post:n("VU/8")(l,u,!1,function(t){n("u8pj")},"data-v-33b86663",null).exports},created:function(){var t=this;this.shuffleArray(this.palette),d.forEach(function(e,n){e.color=t.palette[n],e.linkString&&(e.body=e.body.replace(e.linkString,'<a href="'+e.linkSite+'" target="_blank" rel="noopener noreferrer">'+e.linkString+"</a>"))}),this.demoPosts=d}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{staticClass:"intro"},[this._v("The examples below demonstrate a few of the features that I have had to implement in the course of my career. These are features that are generally found in all kinds of applications.")]),this._v(" "),e("div",{staticClass:"demo-board"},this._l(this.demoPosts,function(t){return e("Post",{key:t.title,style:{background:t.color},attrs:{post:t}})}))])},staticRenderFns:[]};var f=n("VU/8")(m,p,!1,function(t){n("ufxu")},"data-v-2a7f5178",null).exports,v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about"},[e("div",{style:{background:this.palette[0]}},[this._v("\n    I am an entirely self-taught developer that has been working professionally since 2014. In this time I have created multiple projects including custom CRM systems to manage clients from various campaigns, a web app for searching and downloading recordings from a VOIP phone service, a calendar application to manage appointments, and multiple reactive web forms. I also have developed static websites for marketing purposes. I have experience working as a full-stack developer and can take a project from start to finish single-handedly."),e("br"),e("br"),this._v("I am always willing to take on new and unfamiliar tasks. Learning new technologies is my passion and I wont hesitate to take any challenge to satisfy my client.\n  ")]),this._v(" "),e("img",{attrs:{src:n("ycxP"),alt:"Portrait of Matt Gween"}})])},staticRenderFns:[]};var h=n("VU/8")({name:"About",created:function(){this.shuffleArray(this.palette)}},v,!1,function(t){n("6e+v")},"data-v-56b5b957",null).exports,g=n("fZjL"),_=n.n(g),k=n("mvHQ"),y=n.n(k),b=n("IjtK"),w=n.n(b),x={name:"Contact",data:function(){return{form:{name:"",email:"",subject:"",message:""},toast:"",faEnvelope:w.a}},computed:{valid:function(){return this.form.name&&this.form.email&&this.form.subject&&this.form.message},submitButtonClass:function(){return{active:this.valid,inactive:!this.valid}}},methods:{sendMessage:function(){var t=this;fetch("/send-message",{method:"POST",body:y()(this.form),headers:{"Content-Type":"application/json"}}).then(function(e){if(e.ok)return e.json();throw t.changeToast("error"),Error(e.statusText)}).then(function(e){e.accepted?(_()(t.form).forEach(function(e){t.form[e]=""}),t.changeToast("success")):t.changeToast("error")}).catch(function(e){t.changeToast("error")})},changeToast:function(t){var e=this;this.toast="success"===t?"Your message has been received.\nI will get back to you as soon as possible.":"Sorry, but something went wrong.\nPlease try again later or send me an email.",setTimeout(function(){return e.toast=""},3e3)}},created:function(){this.shuffleArray(this.palette)}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"contact"},[n("form",{style:{background:t.palette[0]},on:{submit:function(e){return e.preventDefault(),t.sendMessage(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"bottom-margin",style:t.inputColorizer(2),attrs:{placeholder:"Your Name",name:"name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"bottom-margin",style:t.inputColorizer(3),attrs:{placeholder:"Your Email Address",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.subject,expression:"form.subject"}],staticClass:"bottom-margin",style:t.inputColorizer(4),attrs:{placeholder:"Subject",name:"subject"},domProps:{value:t.form.subject},on:{input:function(e){e.target.composing||t.$set(t.form,"subject",e.target.value)}}}),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"bottom-margin",style:t.inputColorizer(5),attrs:{rows:"15",placeholder:"Message"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}}),t._v(" "),n("button",{class:t.submitButtonClass,attrs:{type:"submit",name:"submit",disabled:!t.valid}},[n("font-awesome-icon",{attrs:{icon:t.faEnvelope,size:"2x"}})],1)]),t._v(" "),n("div",{style:{background:t.palette[1]}},[t._v("\n      If you would like to contact me with any questions, employment opportunities, or just to chat you can do so with this form."),n("br"),n("br"),t._v("You can also email me at "),n("a",{attrs:{href:"mailto:dev@mattgween.com",target:"_blank",rel:"noopener"}},[t._v("dev@mattgween.com")]),t._v(". I respond promptly to any serious inquiries.\n    ")])]),t._v(" "),n("transition",{attrs:{name:"toast",mode:"out-in"}},[t.toast?n("div",{staticClass:"toast"},[t._v("\n      "+t._s(t.toast)+"\n    ")]):t._e()])],1)},staticRenderFns:[]};var S=n("VU/8")(x,C,!1,function(t){n("JUew")},"data-v-a34798a8",null).exports,P=n("W3Iv"),A=n.n(P),L={drinkList:{alcoholic:["Beer","Wine","Whiskey","Vodka","Rum","Mixed Drink"],nonAlcoholic:["Water","Juice","Tea","Coffee","Milk","Soda"]},defaultColor:{hsl:{h:134.8314606741573,s:.49999999999999983,l:.65,a:1},hex:"#79D28F",rgba:{r:121,g:210,b:143,a:1},hsv:{h:134.8314606741573,s:.4242424242424241,v:.825,a:1},oldHue:134.8314606741573,source:"hsl",a:1}},M=n("Zzkc"),I=n("JMTI"),$=n.n(I),j=n("7vl2"),N=n.n(j),D=n("0iIL"),E=n.n(D),z=n("F4Gy"),F=n.n(z),T=n("gjck"),R=n.n(T),X=n("Ggut"),Y=n.n(X),U=n("+fBY"),B=n.n(U),V=n("T1eU"),q=n.n(V),H=n("/eCh"),W=n.n(H),O=n("+cHn"),J=n.n(O),Q=n("5Wzu"),G=n.n(Q),K=n("ydFM"),Z=n.n(K),tt=n("Q3cb"),et=n.n(tt),nt={name:"IconPicker",data:function(){return{iconList:[$.a,N.a,E.a,F.a,R.a,Y.a,B.a,q.a,W.a,J.a,G.a,Z.a,et.a]}},methods:{selectIcon:function(t){this.$emit("select-icon",t)}},props:["selected-icon"],created:function(){this.shuffleArray(this.iconList),this.shuffleArray(this.palette)}},at={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon-picker"},t._l(t.iconList,function(e,a){return n("font-awesome-icon",{key:e.iconName,staticClass:"icon",class:{"selected-icon":e.iconName===t.selectedIcon},style:{background:t.palette.concat(t.palette,t.palette)[a]},attrs:{icon:e},on:{click:function(n){t.selectIcon(e.iconName)}}})}))},staticRenderFns:[]};var ot=n("VU/8")(nt,at,!1,function(t){n("Lw2a")},null,null).exports,it=n("fY41"),st=n.n(it),rt=n("A0jV"),ct=n.n(rt),lt={name:"Search",components:{"icon-picker":ot},data:function(){return{params:{nickname:"",bdayStart:"",bdayEnd:"",drink:"",icon:""},results:null,drinkList:L.drinkList,icons:{faArrowLeft:ct.a,faSearch:st.a}}},methods:{doSearch:function(){var t=this,e=new URLSearchParams(A()(this.params));fetch(this.server+"/get-profiles?"+e).then(function(t){return t.json()}).then(function(e){return t.results=e})},findIcon:function(t){return ot.data().iconList.filter(function(e){return e.iconName===t})[0]}},created:function(){this.shuffleArray(this.palette)}},ut={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"flip",mode:"out-in"}},[t.results?n("div",{key:JSON.stringify(t.results),staticStyle:{display:"flex","justify-content":"center"}},[n("div",{staticStyle:{padding:"1rem"},style:{background:t.palette[5]}},[n("button",{staticClass:"icon-button",on:{click:function(e){t.results=null}}},[n("font-awesome-icon",{attrs:{icon:t.icons.faArrowLeft,size:"2x"}})],1),t._v(" "),t.results.length?n("div",[n("table",[n("thead",[n("tr",[n("th",[t._v("Added")]),t._v(" "),n("th",[t._v("Icon")]),t._v(" "),n("th",[t._v("Nickname")]),t._v(" "),n("th",[t._v("Birthday")]),t._v(" "),n("th",[t._v("Favorite Drink")])])]),t._v(" "),n("tbody",t._l(t.results,function(e){return n("tr",{key:e._id,style:{background:e.color.hex}},[n("td",[t._v(t._s(t.$moment(e.timestamp).format("MMM DD YYYY hh:mm a")))]),t._v(" "),n("td",[n("font-awesome-icon",{attrs:{icon:t.findIcon(e.icon)}})],1),t._v(" "),n("td",[t._v(t._s(e.nickname))]),t._v(" "),n("td",[t._v(t._s(t.$moment(e.birthday).format("MMM DD YYYY")))]),t._v(" "),n("td",[t._v(t._s(e.drink))])])}))])]):n("div",[t._v("\n          No Results Found\n        ")])])]):n("div",{key:"form",staticClass:"form-container"},[n("form",{on:{submit:function(t){t.preventDefault()}}},[n("div",{style:{background:t.palette[0]}},[t._v("Nickname:\n          "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.params.nickname,expression:"params.nickname"}],style:t.inputColorizer(1),domProps:{value:t.params.nickname},on:{input:function(e){e.target.composing||t.$set(t.params,"nickname",e.target.value)}}})]),t._v(" "),n("div",{style:{background:t.palette[2]}},[t._v("\n          Favorite Drink:\n          "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.params.drink,expression:"params.drink"}],style:t.inputColorizer(3),on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.params,"drink",e.target.multiple?n:n[0])}}},[n("option",{attrs:{disabled:"",value:""}},[t._v("-- Drinks --")]),t._v(" "),n("optgroup",{attrs:{label:"Alcoholic"}},t._l(t.drinkList.alcoholic,function(e){return n("option",[t._v("\n                "+t._s(e)+"\n              ")])})),t._v(" "),n("optgroup",{attrs:{label:"Non-Alcoholic"}},t._l(t.drinkList.nonAlcoholic,function(e){return n("option",[t._v("\n                "+t._s(e)+"\n              ")])}))])]),t._v(" "),n("div",{style:{background:t.palette[4]}},[n("div",{staticClass:"birthday-inputs"},[t._v("\n            Birthday Between:\n            "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.params.bdayStart,expression:"params.bdayStart"}],style:t.inputColorizer(5),attrs:{type:"date"},domProps:{value:t.params.bdayStart},on:{input:function(e){e.target.composing||t.$set(t.params,"bdayStart",e.target.value)}}}),t._v("\n            and\n            "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.params.bdayEnd,expression:"params.bdayEnd"}],style:t.inputColorizer(0),attrs:{type:"date"},domProps:{value:t.params.bdayEnd},on:{input:function(e){e.target.composing||t.$set(t.params,"bdayEnd",e.target.value)}}})])]),t._v(" "),n("div",{style:{background:t.palette[1]}},[t._v("Icon:\n          "),n("icon-picker",{attrs:{"selected-icon":t.params.icon},on:{"select-icon":function(e){t.params.icon=e}}})],1)]),t._v(" "),n("transition",{attrs:{name:"slide-out"}},[t.params.nickname||t.params.bdayStart||t.params.bdayEnd||t.params.drink||t.params.icon?n("div",{staticClass:"search-button-container",style:{background:t.palette[3]}},[n("button",{staticClass:"icon-button",on:{click:function(e){t.doSearch()}}},[n("font-awesome-icon",{attrs:{icon:t.icons.faSearch,size:"2x"}})],1)]):t._e()])],1)])],1)},staticRenderFns:[]};var dt=n("VU/8")(lt,ut,!1,function(t){n("7F6F")},"data-v-1a39d9e8",null).exports,mt=n("DmT9"),pt=n.n(mt),ft=n("v/I+"),vt=n.n(ft),ht=n("hkDS"),gt=n.n(ht),_t={name:"LiveUpdates",data:function(){return{socket:null,username:null,message:"",chatLog:[],icons:{faComments:vt.a,faPaperPlane:gt.a}}},methods:{connect:function(){var t=this;this.username&&(this.socket=pt()(this.server),this.socket.on("message-in",function(e){t.chatLog.push(e)}),this.socket.emit("message-out",{author:"System",text:this.username+" has joined the chat."}))},sendMessage:function(){this.message&&(this.socket.emit("message-out",{author:this.username,text:this.message}),this.message="")},sendLogout:function(){this.socket.emit("message-out",{author:"System",text:this.username+" has left the chat."})}},created:function(){this.shuffleArray(this.palette),window.addEventListener("beforeunload",this.sendLogout)},destroyed:function(){this.socket&&this.sendLogout()}},kt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("This is a simple chat application. You can open this page in a new tab with "),n("a",{style:{color:t.palette[0]},attrs:{target:"_blank",href:"#"+t.$route.fullPath}},[t._v("this link")]),t._v(" to see how the messages are recieved in real time.")]),t._v(" "),n("transition",{attrs:{name:"flip",mode:"out-in"}},[t.socket?n("div",{key:"chat",staticClass:"chat-container"},[n("div",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll"}],staticClass:"chat-log"},t._l(t.chatLog,function(e){return n("div",{style:{background:t.palette[4]}},[t._v("\n          "+t._s(e.author)+": "),n("strong",[t._v(t._s(e.text))])])})),t._v(" "),n("div",{staticClass:"sender",style:{background:t.palette[5]}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],style:t.inputColorizer(1),attrs:{placeholder:"Enter a message."},domProps:{value:t.message},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.sendMessage(e):null},input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),n("button",{staticClass:"icon-button",on:{click:t.sendMessage}},[n("font-awesome-icon",{attrs:{icon:t.icons.faPaperPlane,size:"2x"}})],1)])]):n("div",{key:"intro",staticClass:"intro-container"},[n("div",{staticClass:"intro",style:{background:t.palette[1]}},[n("h2",[t._v("What is your name?")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],style:t.inputColorizer(2),domProps:{value:t.username},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.connect(e):null},input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),n("transition",{attrs:{name:"slide-out"}},[t.username?n("div",{staticClass:"connect-button-container",style:{background:t.palette[3]}},[n("button",{staticClass:"icon-button",on:{click:t.connect}},[n("font-awesome-icon",{attrs:{icon:t.icons.faComments,size:"2x"}})],1)]):t._e()])],1)])],1)},staticRenderFns:[]};var yt=n("VU/8")(_t,kt,!1,function(t){n("wccg")},"data-v-549c2298",null).exports,bt={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};n("VU/8")({name:"Marketing"},bt,!1,function(t){n("HeKr")},null,null).exports;var wt=n("dcMW"),xt=n.n(wt),Ct=n("6eCj"),St=n.n(Ct),Pt=n("9xH5"),At=n.n(Pt),Lt={name:"Api",data:function(){return{quote:null,spaceX:{all:null,display:null},xkcd:{max:null,display:null},sectionpalette:[],icons:{faPaintBrush:xt.a,faRocket:St.a,faPencilAlt:At.a}}},methods:{getQuote:function(){var t=this;fetch("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand",{cache:"no-store"}).then(function(t){return t.json()}).then(function(e){t.quote=e[0]})},getSpaceXData:function(){var t=this,e=function e(){var n=t.spaceX.all[Math.floor(Math.random()*t.spaceX.all.length)];t.spaceX.display?n.flight_number!==t.spaceX.display.flight_number?t.spaceX.display=n:e():t.spaceX.display=n};this.spaceX.all?e():fetch("https://api.spacexdata.com/v2/launches").then(function(t){return t.json()}).then(function(n){t.spaceX.all=n,e()})},getXkcd:function(){var t=this;if(this.xkcd.display){var e=Math.floor(Math.random()*this.xkcd.max)+1;fetch(this.server+"/xkcd?num="+e).then(function(t){return t.json()}).then(function(e){t.xkcd.display=e,scrollTo(t.$refs.xkcdButton)})}else fetch(this.server+"/xkcd").then(function(t){return t.json()}).then(function(e){t.xkcd.max=e.num,t.xkcd.display=e})},openXkcd:function(){window.open(this.xkcd.display.img)}},created:function(){this.shuffleArray(this.palette)}},Mt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"description"},[t._v("This page shows a few services that have public APIs that can be used to access different kinds of data.")]),t._v(" "),n("div",{staticClass:"section",style:{background:t.palette[0]}},[n("div",{staticClass:"title-bar"},[n("div"),t._v(" "),n("h2",[t._v("Quotes on Design")]),t._v(" "),n("button",{staticClass:"icon-button",on:{click:t.getQuote}},[n("font-awesome-icon",{attrs:{icon:t.icons.faPaintBrush,size:"2x"}})],1)]),t._v(" "),n("transition",{attrs:{name:"flip",mode:"out-in"}},[t.quote?n("div",{key:t.quote.ID},[n("div",{domProps:{innerHTML:t._s(t.quote.content)}}),t._v(" "),n("p",[t._v("- "+t._s(t.quote.title))]),t._v(" "),n("a",{attrs:{href:t.quote.link}},[t._v(t._s(t.quote.link))])]):t._e()])],1),t._v(" "),n("div",{staticClass:"section",style:{background:t.palette[1]}},[n("div",{staticClass:"title-bar"},[n("div"),t._v(" "),n("h2",[t._v("SpaceX Launches")]),t._v(" "),n("button",{staticClass:"icon-button",on:{click:t.getSpaceXData}},[n("font-awesome-icon",{attrs:{icon:t.icons.faRocket,size:"2x"}})],1)]),t._v(" "),n("transition",{attrs:{name:"flip",mode:"out-in"}},[t.spaceX.display?n("div",{key:t.spaceX.display.flight_number,staticClass:"space-x-data"},[n("div",{staticClass:"space-x-details"},[n("img",{staticClass:"space-x-img",attrs:{src:t.spaceX.display.links.mission_patch,width:"200",height:"200"}}),t._v(" "),n("div",[t._v("\n            Flight Number: "+t._s(t.spaceX.display.flight_number)),n("br"),t._v(" "),n("br"),t._v("\n            Rocket: "+t._s(t.spaceX.display.rocket.rocket_name)),n("br"),t._v(" "),n("br"),t._v("\n            Launch Date: "+t._s(t.$moment(t.spaceX.display.launch_date_local).format("DD MMM YYYY HH:mm a"))),n("br"),t._v(" "),n("br"),t._v("\n            Launch Site: "+t._s(t.spaceX.display.launch_site.site_name_long)+"\n          ")])]),t._v("\n        "+t._s(t.spaceX.display.details)+"\n      ")]):t._e()])],1),t._v(" "),n("div",{staticClass:"section",style:{background:t.palette[2]}},[n("div",{staticClass:"title-bar"},[n("div"),t._v(" "),n("h2",[t._v("xkcd Comics")]),t._v(" "),n("button",{ref:"xkcdButton",staticClass:"icon-button",on:{click:t.getXkcd}},[n("font-awesome-icon",{attrs:{icon:t.icons.faPencilAlt,size:"2x"}})],1)]),t._v(" "),n("transition",{attrs:{name:"flip",mode:"out-in"}},[t.xkcd.display?n("div",{key:t.xkcd.display.num},[n("img",{staticClass:"xkcd-img",attrs:{src:t.xkcd.display.img,title:t.xkcd.display.alt},on:{click:function(e){t.openXkcd()}}})]):t._e()])],1)])},staticRenderFns:[]};var It=n("VU/8")(Lt,Mt,!1,function(t){n("tc+n")},"data-v-3c475260",null).exports,$t=n("Dd8w"),jt=n.n($t),Nt=n("VhFi"),Dt=n.n(Nt),Et={name:"Form",components:{"slider-picker":M.Slider,"icon-picker":ot},data:function(){return{stage:"form",drinkList:L.drinkList,profile:{nickname:null,birthday:null,drink:null,icon:null,color:L.defaultColor},icons:{faArrowRight:Dt.a,faArrowLeft:ct.a}}},computed:{validatorArray:function(){var t=jt()({},this.profile);return delete t.color,A()(t).filter(function(t){return null==t[1]||""===t[1]})}},methods:{changeStage:function(){var t=this;"form"===this.stage?fetch(this.server+"/save-profile",{headers:{"Content-Type":"application/json"},method:"POST",body:y()(this.profile)}).then(function(t){return t.json()}).then(function(e){console.log(e),t.profile.id||(t.profile.id=e.generated_keys[0]),t.stage="results"}):this.stage="form"},findIcon:function(t){return ot.data().iconList.filter(function(e){return e.iconName===t})[0]}},created:function(){this.shuffleArray(this.palette)}},zt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("This is an example of a form that might be used to create a user profile. Please be aware that this data will be saved to be used in another demo.")]),t._v(" "),n("transition",{attrs:{name:"flip",mode:"out-in"}},["form"===t.stage?n("form",{on:{submit:function(t){t.preventDefault()}}},[n("div",{staticClass:"form-small-inputs"},[n("div",{style:{background:t.palette[0]}},[n("h2",[t._v("Nickname")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.profile.nickname,expression:"profile.nickname"}],style:t.inputColorizer(1),domProps:{value:t.profile.nickname},on:{input:function(e){e.target.composing||t.$set(t.profile,"nickname",e.target.value)}}})]),t._v(" "),n("div",{style:{background:t.palette[2]}},[n("h2",[t._v("Birthday")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.profile.birthday,expression:"profile.birthday"}],style:t.inputColorizer(3),attrs:{type:"date"},domProps:{value:t.profile.birthday},on:{input:function(e){e.target.composing||t.$set(t.profile,"birthday",e.target.value)}}})]),t._v(" "),n("div",{style:{background:t.palette[4]}},[n("h2",[t._v("Favorite Drink")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.profile.drink,expression:"profile.drink"}],style:t.inputColorizer(5),on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.profile,"drink",e.target.multiple?n:n[0])}}},[n("option",{attrs:{disabled:"",value:"null"}},[t._v("-- Drinks --")]),t._v(" "),n("optgroup",{attrs:{label:"Alcoholic"}},t._l(t.drinkList.alcoholic,function(e){return n("option",[t._v("\n                "+t._s(e)+"\n              ")])})),t._v(" "),n("optgroup",{attrs:{label:"Non-Alcoholic"}},t._l(t.drinkList.nonAlcoholic,function(e){return n("option",[t._v("\n                "+t._s(e)+"\n              ")])}))])])]),t._v(" "),n("div",{staticClass:"form-big-inputs"},[n("div",{style:{background:t.palette[1]}},[n("h2",[t._v("Color")]),t._v(" "),n("div",{staticClass:"color-picker"},[n("slider-picker",{model:{value:t.profile.color,callback:function(e){t.$set(t.profile,"color",e)},expression:"profile.color"}})],1)]),t._v(" "),n("div",{style:{background:t.palette[3]}},[n("h2",[t._v("Icon")]),t._v(" "),n("icon-picker",{attrs:{"selected-icon":t.profile.icon},on:{"select-icon":function(e){t.profile.icon=e}}})],1)])]):n("div",{staticStyle:{display:"flex","justify-content":"center"}},[n("div",{staticClass:"profile",style:{background:t.profile.color.hex}},[n("span",[t._v(t._s(t.profile.nickname))]),t._v(" "),n("div",{staticClass:"profile-details"},[n("font-awesome-icon",{attrs:{icon:t.findIcon(t.profile.icon),size:"10x"}}),t._v(" "),n("div",[n("span",[t._v("Birthday: "+t._s(t.$moment(t.profile.birthday).format("DD MMM YYYY")))]),t._v(" "),n("span",[t._v("Favorite Drink: "+t._s(t.profile.drink))])])],1)])])]),t._v(" "),n("transition",{attrs:{name:"fade"}},[0===t.validatorArray.length?n("button",{staticClass:"submit-button icon-button",style:{background:t.palette[5]},attrs:{form:"profileForm",type:"submit"},on:{click:t.changeStage}},["form"===t.stage?n("font-awesome-icon",{attrs:{icon:t.icons.faArrowRight,size:"2x"}}):t._e(),t._v(" "),"results"===t.stage?n("font-awesome-icon",{attrs:{icon:t.icons.faArrowLeft,size:"2x"}}):t._e()],1):t._e()])],1)},staticRenderFns:[]};var Ft=n("VU/8")(Et,zt,!1,function(t){n("zNCD")},"data-v-2a0284b6",null).exports,Tt={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h2",[this._v("Demo coming soon!")])])}]};var Rt=n("VU/8")({name:"ComingSoon"},Tt,!1,function(t){n("t0cC")},"data-v-4a478e53",null).exports;a.a.use(s.a);var Xt=new s.a({routes:[{path:"/home",component:f},{path:"/about",component:h},{path:"/contact",component:S},{path:"/demo/search",component:dt},{path:"/demo/live",component:yt},{path:"/demo/api",component:It},{path:"/demo/marketing",component:Rt},{path:"/demo/form",component:Ft},{path:"*",redirect:"/home"}]}),Yt=n("bNL2"),Ut=n.n(Yt),Bt=n("PJh5"),Vt=n.n(Bt),qt=(n("QxPg"),n("U0v6")),Ht=n.n(qt);a.a.use(Ut.a),a.a.prototype.$moment=Vt.a,a.a.component("font-awesome-icon",Ht.a),a.a.config.productionTip=!1,a.a.mixin({data:function(){return{server:"localhost:8081"===location.host?"http://localhost:2626":"",palette:["#ffb3ba","#ffdfba","#ffffba","#baffc9","#bae1ff","#b19cd9"]}},methods:{shuffleArray:function(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),a=[t[n],t[e]];t[e]=a[0],t[n]=a[1]}},inputColorizer:function(t){return{background:"linear-gradient(to right, #c9c9c9 50%, "+this.palette[t]+" 50%)"}}}}),new a.a({el:"#app",router:Xt,components:{App:i},template:"<App/>"})},t0cC:function(t,e){},"tc+n":function(t,e){},u8pj:function(t,e){},ufxu:function(t,e){},wccg:function(t,e){},ycxP:function(t,e,n){t.exports=n.p+"static/img/portrait.117e80c.png"},zNCD:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f2bef989272e8306b1f4.js.map