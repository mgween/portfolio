webpackJsonp([1],{"+W63":function(t,e){},0:function(t,e){},"1nmZ":function(t,e){},"5ndc":function(t,e){},AtdP:function(t,e){},Do6W:function(t,e){},LJDp:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("h+L4"),o=n.n(i),s={name:"App",data:function(){return{faGithub:o.a}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),n("div",{staticClass:"nav-bar"},[n("router-link",{class:{"active-page":"/home"===t.$route.path},attrs:{to:"/home"}},[t._v("Demos")]),t._v(" "),n("router-link",{class:{"active-page":"/about"===t.$route.path},attrs:{to:"/about"}},[t._v("About")]),t._v(" "),n("router-link",{class:{"active-page":"/contact"===t.$route.path},attrs:{to:"/contact"}},[t._v("Contact")])],1),t._v(" "),n("transition",{attrs:{name:"route",mode:"out-in"}},[n("router-view",{key:t.$route.fullPath})],1),t._v(" "),n("div",{staticClass:"github-link"},[n("a",{attrs:{href:"https://github.com/mgween/portfolio",target:"_blank",rel:"noopener noreferrer"}},[n("font-awesome-icon",{attrs:{icon:t.faGithub,size:"3x"}})],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:"/static/logo.png",height:"100",width:"100",alt:"Matt's Logo"}}),this._v(" "),e("h1",[this._v("Matt Gween")])])}]};var c=n("VU/8")(s,r,!1,function(t){n("OVcM")},null,null).exports,l=n("/ocq"),u=n("PnZc"),d=n.n(u),h={name:"Post",props:["post"],data:function(){return{faArrowCircleRight:d.a}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h2",[t._v(t._s(t.post.title))]),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.post.body)}}),t._v(" "),n("router-link",{staticClass:"icon-button demo-link",attrs:{to:"/demo/"+t.post.path}},[n("font-awesome-icon",{attrs:{icon:t.faArrowCircleRight,size:"2x"}})],1)],1)},staticRenderFns:[]};var p=[{body:"Gathing information from forms is an important part of many projects. Well-designed forms that are capable of accepting many different kinds of input are crucial in creating an effective application.",title:"Complex Forms",path:"form"},{body:"Searching though a database using custom parameters is a common feature of many application. My database of choice is a NoSQL database called RethinkDB. This demo shows how complex queries can be used to find and manage data.",title:"Search Logic",linkString:"RethinkDB",linkSite:"https://rethinkdb.com",path:"search"},{body:"Many services offer external APIs that can be used to integrate their data into other systems. This can be very useful for anything from accessing records from a VOIP phone service to displaying social media posts.",title:"External API Usage",path:"api"},{body:"It is often important to have the most up-to-date and accurate information possible. Utilizing Socket.io, I can create an application that is always in sync across all users. No refreshing or manually updating needed.",title:"Live Updates",linkString:"Socket.io",linkSite:"https://socket.io",path:"live"}],f={name:"Home",components:{Post:n("VU/8")(h,m,!1,function(t){n("bd6X")},"data-v-47faa40a",null).exports},created:function(){var t=this;this.shuffleArray(this.palette),p.forEach(function(e,n){e.color=t.palette[n],e.linkString&&(e.body=e.body.replace(e.linkString,'<a href="'+e.linkSite+'" target="_blank" rel="noopener noreferrer">'+e.linkString+"</a>"))}),this.demoPosts=p}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{staticClass:"demo-description"},[this._v("The examples below demonstrate a few of the features that I have had to implement in the course of my career. These are features that are generally found in all kinds of applications.")]),this._v(" "),e("div",{staticClass:"demo-board"},this._l(this.demoPosts,function(t){return e("Post",{key:t.title,style:{background:t.color},attrs:{post:t}})}))])},staticRenderFns:[]};var g=n("VU/8")(f,v,!1,function(t){n("5ndc")},"data-v-d5a7a4b0",null).exports,_=n("N4DB"),k=n.n(_),b=n("wVxS"),y=n.n(b),w=n("nV8J"),C=n.n(w),x=n("Bs1/"),L=n.n(x),S=n("MkGK"),M=n.n(S),A=n("tyA2"),$=n.n(A),D=n("Qccz"),E=n.n(D),P=n("ZPfZ"),N=n.n(P),I={name:"About",data:function(){return{techList:[{icon:k.a,name:"Vue.js"},{icon:y.a,name:"Angular"},{icon:$.a,name:"HTML5"},{icon:N.a,name:"ES6"},{icon:E.a,name:"CSS3"},{icon:C.a,name:"Node.js"},{icon:L.a,name:"Git"},{icon:M.a,name:"Linux"}]}},created:function(){this.shuffleArray(this.palette)}},z={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"about"},[n("div",{style:{background:t.palette[0]}},[t._v("\n      I am a self-taught developer that has been working professionally since 2014. In this time I have created multiple applications including custom CRM systems to manage clients from various campaigns, a web app for searching and downloading recordings from a VOIP phone service, and a calendar application to manage appointments. I also have developed static websites for marketing purposes and multiple reactive web forms. I have experience working as a full-stack developer and can take a project from start to finish single-handedly."),n("br"),n("br"),t._v("I am always willing to take on new and unfamiliar tasks. Learning new technologies is my passion and I wont hesitate to take any challenge to satisfy my client.\n    ")]),t._v(" "),n("img",{attrs:{src:"/static/portrait.png",alt:"Portrait of Matt Gween"}})]),t._v(" "),n("div",{staticClass:"tech-list-container",style:{background:t.palette[1]}},[n("div",{staticStyle:{"margin-bottom":"1rem"}},[t._v("I am proficient with these technologies:")]),t._v(" "),n("div",{staticClass:"tech-list"},[t._l(t.techList,function(e){return n("div",{key:e.name},[n("font-awesome-icon",{attrs:{icon:e.icon,size:"2x"}}),t._v("\n        "+t._s(e.name)+"\n      ")],1)}),t._v(" "),t._m(0)],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:"/static/rethinkdb_logo.svg",height:"32"}}),this._v("\n        RethinkDB\n      ")])}]};var R=n("VU/8")(I,z,!1,function(t){n("iXvB")},"data-v-1fe950b0",null).exports,j=n("fZjL"),X=n.n(j),T=n("mvHQ"),F=n.n(T),V=n("IjtK"),Y=n.n(V),U={name:"Contact",data:function(){return{form:{name:"",email:"",subject:"",message:""},toast:"",faEnvelope:Y.a}},computed:{valid:function(){return this.form.name&&this.form.email&&this.form.subject&&this.form.message},submitButtonClass:function(){return{inactive:!this.valid}}},methods:{sendMessage:function(){var t=this;fetch(this.server+"/send-message",{method:"POST",body:F()(this.form),headers:{"Content-Type":"application/json"}}).then(function(e){if(e.ok)return e.json();throw t.changeToast("error"),Error(e.statusText)}).then(function(e){e.accepted?(X()(t.form).forEach(function(e){t.form[e]=""}),t.changeToast("success")):t.changeToast("error")}).catch(function(e){t.changeToast("error")})},changeToast:function(t){var e=this;this.toast="success"===t?"Your message has been received.\nI will get back to you as soon as possible.":"Sorry, but something went wrong.\nPlease try again later or send me an email.",setTimeout(function(){return e.toast=""},3e3)}},created:function(){this.shuffleArray(this.palette)}},B={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"contact"},[n("form",{style:{background:t.palette[0]},on:{submit:function(e){return e.preventDefault(),t.sendMessage(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"bottom-margin",style:t.inputColorizer(2),attrs:{placeholder:"Your Name",name:"name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"bottom-margin",style:t.inputColorizer(3),attrs:{placeholder:"Your Email Address",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.subject,expression:"form.subject"}],staticClass:"bottom-margin",style:t.inputColorizer(4),attrs:{placeholder:"Subject",name:"subject"},domProps:{value:t.form.subject},on:{input:function(e){e.target.composing||t.$set(t.form,"subject",e.target.value)}}}),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"bottom-margin",style:t.inputColorizer(5),attrs:{rows:"15",placeholder:"Message"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}}),t._v(" "),n("button",{staticClass:"icon-button",class:t.submitButtonClass,attrs:{type:"submit",name:"submit",disabled:!t.valid}},[n("font-awesome-icon",{attrs:{icon:t.faEnvelope,size:"2x"}})],1)]),t._v(" "),n("div",{style:{background:t.palette[1]}},[t._v("\n      If you would like to contact me with any questions, employment opportunities, or just to chat you can do so with this form."),n("br"),n("br"),t._v("You can also email me at "),n("a",{attrs:{href:"mailto:dev@mattgween.com",target:"_blank",rel:"noopener"}},[t._v("dev@mattgween.com")]),t._v(". I respond promptly to any serious inquiries.\n    ")])]),t._v(" "),n("transition",{attrs:{name:"toast",mode:"out-in"}},[t.toast?n("div",{staticClass:"toast"},[t._v("\n      "+t._s(t.toast)+"\n    ")]):t._e()])],1)},staticRenderFns:[]};var H=n("VU/8")(U,B,!1,function(t){n("LJDp")},"data-v-49b3d326",null).exports,q=n("W3Iv"),O=n.n(q),W={drinkList:{alcoholic:["Beer","Wine","Whiskey","Vodka","Rum","Mixed Drink"],nonAlcoholic:["Water","Juice","Tea","Coffee","Milk","Soda"]},defaultColor:{hsl:{h:134.8314606741573,s:.49999999999999983,l:.65,a:1},hex:"#79D28F",rgba:{r:121,g:210,b:143,a:1},hsv:{h:134.8314606741573,s:.4242424242424241,v:.825,a:1},oldHue:134.8314606741573,source:"hsl",a:1}},Q=n("JMTI"),G=n.n(Q),J=n("7vl2"),Z=n.n(J),K=n("0iIL"),tt=n.n(K),et=n("F4Gy"),nt=n.n(et),at=n("gjck"),it=n.n(at),ot=n("Ggut"),st=n.n(ot),rt=n("+fBY"),ct=n.n(rt),lt=n("T1eU"),ut=n.n(lt),dt=n("/eCh"),ht=n.n(dt),mt=n("+cHn"),pt=n.n(mt),ft=n("5Wzu"),vt=n.n(ft),gt=n("ydFM"),_t=n.n(gt),kt=n("Q3cb"),bt=n.n(kt),yt={name:"IconPicker",data:function(){return{iconList:[G.a,Z.a,tt.a,nt.a,it.a,st.a,ct.a,ut.a,ht.a,pt.a,vt.a,_t.a,bt.a]}},methods:{selectIcon:function(t){this.$emit("select-icon",t)}},props:["selected-icon"],created:function(){this.shuffleArray(this.iconList),this.$props.selectedIcon&&this.iconList.unshift(this.iconList.splice(this.iconList.map(function(t){return t.iconName}).indexOf(this.$props.selectedIcon),1)[0]),this.shuffleArray(this.palette)}},wt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon-picker"},t._l(t.iconList,function(e,a){return n("font-awesome-icon",{key:e.iconName,staticClass:"icon",class:{"selected-icon":e.iconName===t.selectedIcon},style:{background:t.palette.concat(t.palette,t.palette)[a]},attrs:{icon:e},on:{click:function(n){t.selectIcon(e.iconName)}}})}))},staticRenderFns:[]};var Ct=n("VU/8")(yt,wt,!1,function(t){n("+W63")},null,null).exports,xt=n("fY41"),Lt=n.n(xt),St=n("A0jV"),Mt=n.n(St),At={name:"Search",components:{"icon-picker":Ct},data:function(){return{params:{nickname:"",bdayStart:"",bdayEnd:"",drink:"",icon:""},results:null,drinkList:W.drinkList,icons:{faArrowLeft:Mt.a,faSearch:Lt.a}}},computed:{formValid:function(){return this.params.nickname||this.params.bdayStart||this.params.bdayEnd||this.params.drink||this.params.icon}},methods:{doSearch:function(){var t=this;if(this.formValid){var e=new URLSearchParams(O()(this.params));fetch(this.server+"/get-profiles?"+e).then(function(t){return t.json()}).then(function(e){return t.results=e})}},findIcon:function(t){return Ct.data().iconList.filter(function(e){return e.iconName===t})[0]}},created:function(){this.shuffleArray(this.palette)}},$t={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"demo-description"},[t._v("This form will run queries against a database containing information from the "),n("router-link",{style:{color:t.palette[3]},attrs:{to:"/demo/form"}},[t._v("Complex Forms")]),t._v(" demo. At least one parameter must be provided to execute a search.")],1),t._v(" "),n("transition",{attrs:{name:"flip",mode:"out-in"}},[t.results?n("div",{key:JSON.stringify(t.results),staticStyle:{display:"flex","justify-content":"center"}},[n("div",{staticStyle:{padding:"1rem"},style:{background:t.palette[5]}},[n("button",{staticClass:"icon-button",on:{click:function(e){t.results=null}}},[n("font-awesome-icon",{attrs:{icon:t.icons.faArrowLeft,size:"2x"}})],1),t._v(" "),t.results.length?n("div",[n("table",[n("thead",[n("tr",[n("th",[t._v("Added")]),t._v(" "),n("th",[t._v("Icon")]),t._v(" "),n("th",[t._v("Nickname")]),t._v(" "),n("th",[t._v("Birthday")]),t._v(" "),n("th",[t._v("Favorite Drink")])])]),t._v(" "),n("tbody",t._l(t.results,function(e){return n("tr",{key:e._id,style:{background:e.color.hex}},[n("td",[t._v(t._s(t.$moment(e.timestamp).format("MMM DD YYYY hh:mm a")))]),t._v(" "),n("td",[n("font-awesome-icon",{attrs:{icon:t.findIcon(e.icon)}})],1),t._v(" "),n("td",[t._v(t._s(e.nickname))]),t._v(" "),n("td",[t._v(t._s(t.$moment(e.birthday).utc().format("MMM DD YYYY")))]),t._v(" "),n("td",[t._v(t._s(e.drink))])])}))])]):n("div",[n("h2",[t._v("No Results Found")])])])]):n("div",{key:"form",staticClass:"form-container"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.doSearch(e)}}},[n("div",{style:{background:t.palette[0]}},[t._v("Nickname:\n          "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.params.nickname,expression:"params.nickname"}],style:t.inputColorizer(1),domProps:{value:t.params.nickname},on:{input:function(e){e.target.composing||t.$set(t.params,"nickname",e.target.value)}}})]),t._v(" "),n("div",{style:{background:t.palette[2]}},[t._v("\n          Favorite Drink:\n          "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.params.drink,expression:"params.drink"}],style:t.inputColorizer(3),on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.params,"drink",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:""}},[t._v("-- Drinks --")]),t._v(" "),n("optgroup",{attrs:{label:"Alcoholic"}},t._l(t.drinkList.alcoholic,function(e){return n("option",[t._v("\n                "+t._s(e)+"\n              ")])})),t._v(" "),n("optgroup",{attrs:{label:"Non-Alcoholic"}},t._l(t.drinkList.nonAlcoholic,function(e){return n("option",[t._v("\n                "+t._s(e)+"\n              ")])}))])]),t._v(" "),n("div",{style:{background:t.palette[4]}},[n("div",{staticClass:"birthday-inputs"},[t._v("\n            Birthday Between:\n            "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.params.bdayStart,expression:"params.bdayStart"}],style:t.inputColorizer(5),attrs:{type:"date"},domProps:{value:t.params.bdayStart},on:{input:function(e){e.target.composing||t.$set(t.params,"bdayStart",e.target.value)}}}),t._v("\n            and\n            "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.params.bdayEnd,expression:"params.bdayEnd"}],style:t.inputColorizer(0),attrs:{type:"date"},domProps:{value:t.params.bdayEnd},on:{input:function(e){e.target.composing||t.$set(t.params,"bdayEnd",e.target.value)}}})])]),t._v(" "),n("div",{style:{background:t.palette[1]}},[t._v("Icon:\n          "),n("icon-picker",{attrs:{"selected-icon":t.params.icon},on:{"select-icon":function(e){t.params.icon=e}}})],1)]),t._v(" "),n("transition",{attrs:{name:"slide-out"}},[t.formValid?n("div",{staticClass:"search-button-container",style:{background:t.palette[3]}},[n("button",{staticClass:"icon-button",on:{click:t.doSearch}},[n("font-awesome-icon",{attrs:{icon:t.icons.faSearch,size:"2x"}})],1)]):t._e()])],1)])],1)},staticRenderFns:[]};var Dt=n("VU/8")(At,$t,!1,function(t){n("sXFM")},"data-v-ce76c0d4",null).exports,Et=n("DmT9"),Pt=n.n(Et),Nt=n("v/I+"),It=n.n(Nt),zt=n("VhFi"),Rt=n.n(zt),jt={name:"LiveUpdates",data:function(){return{socket:null,username:null,message:"",chatLog:[],icons:{faComments:It.a,faArrowRight:Rt.a}}},methods:{connect:function(){var t=this;this.username&&(this.socket=Pt()(this.server),this.socket.on("message-in",function(e){t.chatLog.push(e)}),this.socket.emit("message-out",{author:"System",text:this.username+" has joined the chat."}))},sendMessage:function(){this.message&&(this.socket.emit("message-out",{author:this.username,text:this.message}),this.message="")},sendLogout:function(){this.socket.emit("message-out",{author:"System",text:this.username+" has left the chat."})}},created:function(){this.shuffleArray(this.palette),window.addEventListener("beforeunload",this.sendLogout)},destroyed:function(){this.socket&&this.sendLogout()}},Xt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"demo-description"},[t._v("This is a simple chat application. You can open this page in a new tab with "),n("a",{style:{color:t.palette[0]},attrs:{target:"_blank",href:"#"+t.$route.fullPath}},[t._v("this link")]),t._v(" to see how the messages are recieved in real time.")]),t._v(" "),n("transition",{attrs:{name:"flip",mode:"out-in"}},[t.socket?n("div",{key:"chat",staticClass:"chat-container"},[n("div",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll"}],staticClass:"chat-log"},t._l(t.chatLog,function(e){return n("div",{style:{background:t.palette[4]}},[t._v("\n          "+t._s(e.author)+": "),n("strong",[t._v(t._s(e.text))])])})),t._v(" "),n("div",{staticClass:"sender",style:{background:t.palette[5]}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],style:t.inputColorizer(1),attrs:{placeholder:"Enter a message."},domProps:{value:t.message},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.sendMessage(e):null},input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),n("button",{staticClass:"icon-button",on:{click:t.sendMessage}},[n("font-awesome-icon",{attrs:{icon:t.icons.faArrowRight,size:"2x"}})],1)])]):n("div",{key:"intro",staticClass:"intro-container"},[n("div",{staticClass:"intro",style:{background:t.palette[1]}},[n("h2",[t._v("Nickname:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],style:t.inputColorizer(2),domProps:{value:t.username},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.connect(e):null},input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),n("transition",{attrs:{name:"slide-out"}},[t.username?n("div",{staticClass:"connect-button-container",style:{background:t.palette[3]}},[n("button",{staticClass:"icon-button",on:{click:t.connect}},[n("font-awesome-icon",{attrs:{icon:t.icons.faComments,size:"2x"}})],1)]):t._e()])],1)])],1)},staticRenderFns:[]};var Tt=n("VU/8")(jt,Xt,!1,function(t){n("f2wp")},"data-v-8bf53d22",null).exports,Ft={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};n("VU/8")({name:"Marketing"},Ft,!1,function(t){n("oClg")},null,null).exports;var Vt=n("dcMW"),Yt=n.n(Vt),Ut=n("6eCj"),Bt=n.n(Ut),Ht=n("9xH5"),qt=n.n(Ht),Ot={name:"Api",data:function(){return{quote:null,spaceX:{all:null,display:null},xkcd:{max:null,display:null},sectionpalette:[],icons:{faPaintBrush:Yt.a,faRocket:Bt.a,faPencilAlt:qt.a}}},methods:{getQuote:function(){var t=this;fetch("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand",{cache:"no-store"}).then(function(t){return t.json()}).then(function(e){t.quote=e[0]})},getSpaceXData:function(){var t=this,e=function e(){var n=t.spaceX.all[Math.floor(Math.random()*t.spaceX.all.length)];t.spaceX.display?n.flight_number!==t.spaceX.display.flight_number?t.spaceX.display=n:e():t.spaceX.display=n};this.spaceX.all?e():fetch("https://api.spacexdata.com/v2/launches").then(function(t){return t.json()}).then(function(n){t.spaceX.all=n,e()})},getXkcd:function(){var t=this;if(this.xkcd.display){var e=Math.floor(Math.random()*this.xkcd.max)+1;fetch(this.server+"/xkcd?num="+e).then(function(t){return t.json()}).then(function(e){t.xkcd.display=e,scrollTo(t.$refs.xkcdButton)})}else fetch(this.server+"/xkcd").then(function(t){return t.json()}).then(function(e){t.xkcd.max=e.num,t.xkcd.display=e})},openXkcd:function(){window.open(this.xkcd.display.img)}},created:function(){this.shuffleArray(this.palette)}},Wt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"demo-description"},[t._v("This page shows a few services that have public APIs that can be used to access different kinds of data.")]),t._v(" "),n("div",{staticClass:"section",style:{background:t.palette[0]}},[n("div",{staticClass:"title-bar"},[n("div"),t._v(" "),n("h2",[t._v("Quotes on Design")]),t._v(" "),n("button",{staticClass:"icon-button",on:{click:t.getQuote}},[n("font-awesome-icon",{attrs:{icon:t.icons.faPaintBrush,size:"2x"}})],1)]),t._v(" "),n("transition",{attrs:{name:"flip",mode:"out-in"}},[t.quote?n("div",{key:t.quote.ID},[n("div",{domProps:{innerHTML:t._s(t.quote.content)}}),t._v(" "),n("p",[t._v("- "+t._s(t.quote.title))]),t._v(" "),n("a",{attrs:{href:t.quote.link}},[t._v(t._s(t.quote.link))])]):t._e()])],1),t._v(" "),n("div",{staticClass:"section",style:{background:t.palette[1]}},[n("div",{staticClass:"title-bar"},[n("div"),t._v(" "),n("h2",[t._v("SpaceX Launches")]),t._v(" "),n("button",{staticClass:"icon-button",on:{click:t.getSpaceXData}},[n("font-awesome-icon",{attrs:{icon:t.icons.faRocket,size:"2x"}})],1)]),t._v(" "),n("transition",{attrs:{name:"flip",mode:"out-in"}},[t.spaceX.display?n("div",{key:t.spaceX.display.flight_number,staticClass:"space-x-data"},[n("div",{staticClass:"space-x-details"},[n("img",{staticClass:"space-x-img",attrs:{src:t.spaceX.display.links.mission_patch,width:"200",height:"200"}}),t._v(" "),n("div",[t._v("\n            Flight Number: "+t._s(t.spaceX.display.flight_number)),n("br"),t._v(" "),n("br"),t._v("\n            Rocket: "+t._s(t.spaceX.display.rocket.rocket_name)),n("br"),t._v(" "),n("br"),t._v("\n            Launch Date: "+t._s(t.$moment(t.spaceX.display.launch_date_local).format("DD MMM YYYY HH:mm a"))),n("br"),t._v(" "),n("br"),t._v("\n            Launch Site: "+t._s(t.spaceX.display.launch_site.site_name_long)+"\n          ")])]),t._v("\n        "+t._s(t.spaceX.display.details)+"\n      ")]):t._e()])],1),t._v(" "),n("div",{staticClass:"section",style:{background:t.palette[2]}},[n("div",{staticClass:"title-bar"},[n("div"),t._v(" "),n("h2",[t._v("xkcd Comics")]),t._v(" "),n("button",{ref:"xkcdButton",staticClass:"icon-button",on:{click:t.getXkcd}},[n("font-awesome-icon",{attrs:{icon:t.icons.faPencilAlt,size:"2x"}})],1)]),t._v(" "),n("transition",{attrs:{name:"flip",mode:"out-in"}},[t.xkcd.display?n("div",{key:t.xkcd.display.num},[n("img",{staticClass:"xkcd-img",attrs:{src:t.xkcd.display.img,title:t.xkcd.display.alt},on:{click:t.openXkcd}})]):t._e()])],1)])},staticRenderFns:[]};var Qt=n("VU/8")(Ot,Wt,!1,function(t){n("lzQR")},"data-v-4857be25",null).exports,Gt=n("Dd8w"),Jt=n.n(Gt),Zt=n("f1Ea"),Kt={name:"Hue",props:{value:Object,direction:{type:String,default:"horizontal"}},data:function(){return{oldHue:0,pullDirection:""}},computed:{colors:function(){var t=this.value.hsl.h;return 0!==t&&t-this.oldHue>0&&(this.pullDirection="right"),0!==t&&t-this.oldHue<0&&(this.pullDirection="left"),this.oldHue=t,this.value},directionClass:function(){return{"vc-hue--horizontal":"horizontal"===this.direction,"vc-hue--vertical":"vertical"===this.direction}},pointerTop:function(){return"vertical"===this.direction?0===this.colors.hsl.h&&"right"===this.pullDirection?0:-100*this.colors.hsl.h/360+100+"%":0},pointerLeft:function(){return"vertical"===this.direction?0:0===this.colors.hsl.h&&"right"===this.pullDirection?"100%":100*this.colors.hsl.h/360+"%"}},methods:{handleChange:function(t,e){!e&&t.preventDefault();var n,a=this.$refs.container,i=a.clientWidth,o=a.clientHeight,s=a.getBoundingClientRect().left+window.pageXOffset,r=a.getBoundingClientRect().top+window.pageYOffset,c=(t.pageX||(t.touches?t.touches[0].pageX:0))-s,l=(t.pageY||(t.touches?t.touches[0].pageY:0))-r;"vertical"===this.direction?(n=l<0?360:l>o?0:360*(-100*l/o+100)/100,this.colors.hsl.h!==n&&this.$emit("change",{h:n,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(n=c<0?0:c>i?360:360*(100*c/i)/100,this.colors.hsl.h!==n&&this.$emit("change",{h:n,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))},handleMouseDown:function(t){this.handleChange(t,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(t){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}},te={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:["vc-hue",this.directionClass]},[e("div",{ref:"container",staticClass:"vc-hue-container",on:{mousedown:this.handleMouseDown,touchmove:this.handleChange,touchstart:this.handleChange}},[e("div",{staticClass:"vc-hue-pointer",style:{top:this.pointerTop,left:this.pointerLeft}},[e("div",{staticClass:"vc-hue-picker"})])])])},staticRenderFns:[]};var ee=n("VU/8")(Kt,te,!1,function(t){n("1nmZ")},null,null).exports,ne={name:"Slider",mixins:[Zt.a],props:{direction:String},components:{hue:ee},computed:{activeOffset:function(){return Math.round(100*this.colors.hsl.s)/100==.5?Math.round(100*this.colors.hsl.l)/100:0}},data:function(){return{swatches:[".80",".65",".50",".35",".20"]}},methods:{hueChange:function(t){this.colorChange(t)},handleSwClick:function(t,e){this.colorChange({h:this.colors.hsl.h,s:.5,l:e,source:"hsl"})}}},ae={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vc-slider"},[n("div",{staticClass:"vc-slider-hue-warp"},[n("hue",{on:{change:t.hueChange},model:{value:t.colors,callback:function(e){t.colors=e},expression:"colors"}})],1),t._v(" "),n("div",{staticClass:"vc-slider-swatches"},t._l(t.swatches,function(e,a){return n("div",{staticClass:"vc-slider-swatch",attrs:{"data-index":a},on:{click:function(n){t.handleSwClick(a,e)}}},[n("div",{staticClass:"vc-slider-swatch-picker",class:{"vc-slider-swatch-picker--active":e==t.activeOffset},style:{background:"hsl("+t.colors.hsl.h+", 50%, "+100*e+"%)"}})])}))])},staticRenderFns:[]};var ie=n("VU/8")(ne,ae,!1,function(t){n("Do6W")},null,null).exports,oe={name:"Form",components:{"slider-picker":ie,"icon-picker":Ct},data:function(){return{stage:"form",drinkList:W.drinkList,profile:{nickname:null,birthday:null,drink:null,icon:null,color:W.defaultColor},icons:{faArrowRight:Rt.a,faArrowLeft:Mt.a}}},computed:{validatorArray:function(){var t=Jt()({},this.profile);return delete t.color,O()(t).filter(function(t){return null==t[1]||""===t[1]})}},methods:{changeStage:function(){var t=this;"form"===this.stage?fetch(this.server+"/save-profile",{headers:{"Content-Type":"application/json"},method:"POST",body:F()(this.profile)}).then(function(t){return t.json()}).then(function(e){console.log(e),t.profile.id||(t.profile.id=e.generated_keys[0]),t.stage="results"}):this.stage="form"},findIcon:function(t){return Ct.data().iconList.filter(function(e){return e.iconName===t})[0]}},created:function(){this.shuffleArray(this.palette),console.log(ie)}},se={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"demo-description"},[t._v("This is an example of a form that might be used to create a user profile. Please be aware that this data will be saved to be used in the "),n("router-link",{style:{color:t.palette[5]},attrs:{to:"/demo/search"}},[t._v("Search Logic")]),t._v(" demo.")],1),t._v(" "),n("transition",{attrs:{name:"flip",mode:"out-in"}},["form"===t.stage?n("form",{on:{submit:function(t){t.preventDefault()}}},[n("div",{staticClass:"form-small-inputs"},[n("div",{style:{background:t.palette[0]}},[n("h2",[t._v("Nickname")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.profile.nickname,expression:"profile.nickname"}],style:t.inputColorizer(3),domProps:{value:t.profile.nickname},on:{input:function(e){e.target.composing||t.$set(t.profile,"nickname",e.target.value)}}})]),t._v(" "),n("div",{style:{background:t.palette[2]}},[n("h2",[t._v("Birthday")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.profile.birthday,expression:"profile.birthday"}],style:t.inputColorizer(1),attrs:{type:"date"},domProps:{value:t.profile.birthday},on:{input:function(e){e.target.composing||t.$set(t.profile,"birthday",e.target.value)}}})]),t._v(" "),n("div",{style:{background:t.palette[4]}},[n("h2",[t._v("Favorite Drink")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.profile.drink,expression:"profile.drink"}],style:t.inputColorizer(5),on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.profile,"drink",e.target.multiple?n:n[0])}}},[n("option",{attrs:{disabled:"",value:"null"}},[t._v("-- Drinks --")]),t._v(" "),n("optgroup",{attrs:{label:"Alcoholic"}},t._l(t.drinkList.alcoholic,function(e){return n("option",[t._v("\n                "+t._s(e)+"\n              ")])})),t._v(" "),n("optgroup",{attrs:{label:"Non-Alcoholic"}},t._l(t.drinkList.nonAlcoholic,function(e){return n("option",[t._v("\n                "+t._s(e)+"\n              ")])}))])])]),t._v(" "),n("div",{staticClass:"form-big-inputs"},[n("div",{style:{background:t.palette[1]}},[n("h2",[t._v("Color")]),t._v(" "),n("div",{staticClass:"color-picker"},[n("slider-picker",{model:{value:t.profile.color,callback:function(e){t.$set(t.profile,"color",e)},expression:"profile.color"}})],1)]),t._v(" "),n("div",{style:{background:t.palette[3]}},[n("h2",[t._v("Icon")]),t._v(" "),n("icon-picker",{attrs:{"selected-icon":t.profile.icon},on:{"select-icon":function(e){t.profile.icon=e}}})],1)])]):n("div",{staticStyle:{display:"flex","justify-content":"center"}},[n("div",{staticClass:"profile",style:{background:t.profile.color.hex}},[n("span",[t._v(t._s(t.profile.nickname))]),t._v(" "),n("div",{staticClass:"profile-details"},[n("font-awesome-icon",{attrs:{icon:t.findIcon(t.profile.icon),size:"10x"}}),t._v(" "),n("div",[n("span",[t._v("Birthday: "+t._s(t.$moment(t.profile.birthday).format("DD MMM YYYY")))]),t._v(" "),n("span",[t._v("Favorite Drink: "+t._s(t.profile.drink))])])],1)])])]),t._v(" "),n("transition",{attrs:{name:"fade"}},[0===t.validatorArray.length?n("button",{staticClass:"submit-button icon-button",style:{background:t.palette[5]},attrs:{form:"profileForm",type:"submit"},on:{click:t.changeStage}},["form"===t.stage?n("font-awesome-icon",{attrs:{icon:t.icons.faArrowRight,size:"2x"}}):t._e(),t._v(" "),"results"===t.stage?n("font-awesome-icon",{attrs:{icon:t.icons.faArrowLeft,size:"2x"}}):t._e()],1):t._e()])],1)},staticRenderFns:[]};var re=n("VU/8")(oe,se,!1,function(t){n("AtdP")},"data-v-7a93b88e",null).exports,ce={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h2",[this._v("Demo coming soon!")])])}]};var le=n("VU/8")({name:"ComingSoon"},ce,!1,function(t){n("NqML")},"data-v-694a5602",null).exports;a.a.use(l.a);var ue=new l.a({routes:[{path:"/home",component:g},{path:"/about",component:R},{path:"/contact",component:H},{path:"/demo/search",component:Dt},{path:"/demo/live",component:Tt},{path:"/demo/api",component:Qt},{path:"/demo/marketing",component:le},{path:"/demo/form",component:re},{path:"*",redirect:"/home"}]}),de=n("bNL2"),he=n.n(de),me=n("PJh5"),pe=n.n(me),fe=(n("QxPg"),n("U0v6")),ve=n.n(fe);a.a.use(he.a),a.a.prototype.$moment=pe.a,a.a.component("font-awesome-icon",ve.a),a.a.config.productionTip=!1,ue.afterEach(function(t,e){window.scrollTo(0,0)}),a.a.mixin({data:function(){return{server:"localhost:8081"===location.host?"http://localhost:2626":"",palette:["#ffb3ba","#ffdfba","#ffffba","#baffc9","#bae1ff","#b19cd9"]}},methods:{shuffleArray:function(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),a=[t[n],t[e]];t[e]=a[0],t[n]=a[1]}},inputColorizer:function(t){return{background:"linear-gradient(to right, #c9c9c9 50%, "+this.palette[t]+" 50%)"}}}}),new a.a({el:"#app",router:ue,components:{App:c},template:"<App/>"})},NqML:function(t,e){},OVcM:function(t,e){},bd6X:function(t,e){},f2wp:function(t,e){},iXvB:function(t,e){},lzQR:function(t,e){},oClg:function(t,e){},sXFM:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e272e85a0e48968dcc74.js.map