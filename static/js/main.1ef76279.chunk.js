(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{56:function(e,t,n){e.exports=n(87)},61:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},81:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),s=n.n(c),o=n(32),u=(n(61),n(3)),i=n.n(u),l=n(8),d=n(6),m=n(16),p=n(17),h=n(19),f=n(18),b=n(4),v=n(13),g=(n(67),n(68),n(26)),E=n.n(g),x=(n(69),n(72),function(){var e=Object(d.a)(i.a.mark((function e(t,n){var a,r,c,s,o,u,d,m,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=S.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=19;break}return r=t.displayName,c=t.email,s=new Date,e.prev=9,e.next=12,a.set(Object(l.a)({displayName:r,email:c,createdAt:s},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:e.next=33;break;case 19:return o=S.collection("users/".concat(t.uid,"/lista/")),e.next=22,o.get().then((function(e){return e.docs.map((function(e){return e.data()}))}));case 22:return u=e.sent,d=t.displayName,m=t.email,p=new Date,e.prev=25,e.next=28,a.set(Object(l.a)({displayName:d,email:m,createdAt:p,lista:u},n));case 28:e.next=33;break;case 30:e.prev=30,e.t1=e.catch(25),console.log("error creating user",e.t1.message);case 33:return e.abrupt("return",a);case 34:case"end":return e.stop()}}),e,null,[[9,14],[25,30]])})));return function(t,n){return e.apply(this,arguments)}}()),w=function(){var e=Object(d.a)(i.a.mark((function e(t,n,a,r){var c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=String((new Date).getTime()),s={text:n,id:c,createdAt:c},e.next=4,S.collection("users/".concat(t.uid,"/lista")).doc(c).set(s).then(Object(d.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("item added!");case 1:case"end":return e.stop()}}),e)})))).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),y=function(){var e=Object(d.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={text:n.text,id:n.id,createdAt:n.id},e.next=3,S.collection("users/".concat(t.uid,"/lista")).doc(n.id).set(a).then((function(e){return e.val()})).catch((function(e){return{errorCode:e.code,errorMessage:e.message}}));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(i.a.mark((function e(t,n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=new Date,r={completed:a},0===t){e.next=8;break}return e.next=5,S.collection("users/".concat(t.uid,"/lista")).doc(n.id).update(r).then((function(e){return e.val()})).catch((function(e){return{errorCode:e.code,errorMessage:e.message}}));case 5:return e.abrupt("return",e.sent);case 8:return"4hYmPE0ZvhPoHA0kYJaQu8KdrCs2",e.next=11,S.collection("users/".concat("4hYmPE0ZvhPoHA0kYJaQu8KdrCs2","/lista/")).doc(n.id).update(r).then((function(e){console.log("snap",e),e.val()})).catch((function(e){return{errorCode:e.code,errorMessage:e.message}}));case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(i.a.mark((function e(t){var n,a,r,c,s,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",0);case 2:return n=S.doc("users/".concat(t.uid)),a=S.collection("users/".concat(t.uid,"/lista/")),e.next=6,a.get().then((function(e){return e.docs.map((function(e){return e.data()}))}));case 6:return r=e.sent,c=t.displayName,s=t.email,o=new Date,e.prev=9,e.next=12,n.set({displayName:c,email:s,createdAt:o,lista:r});case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(d.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=S.collection("users/".concat(t.uid,"/lista/")),e.next=3,a.doc(n.id).delete().then((function(){console.log("Item removed!")})).catch((function(e){return e}));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=S.collection("users"),e.abrupt("return",t.get().then((function(e){return e.docs[0].data()})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();E.a.initializeApp({apiKey:"AIzaSyDuHTtUoxaEUp7Bc05pmaDE6Quukvp0k1A",authDomain:"udemy-crown-41095.firebaseapp.com",databaseURL:"https://udemy-crown-41095.firebaseio.com",projectId:"udemy-crown-41095",storageBucket:"udemy-crown-41095.appspot.com",messagingSenderId:"468641248743",appId:"1:468641248743:web:f2b938d84adb228955f942",measurementId:"G-H9HBJ6PSFX"});var N=E.a.auth(),S=E.a.firestore(),U=new E.a.auth.GoogleAuthProvider;U.setCustomParameters({prompt:"select_account"});var A=function(){return N.signInWithPopup(U)},I=(E.a,n(11)),P=Object(I.a)([function(e){return e.user}],(function(e){return e.currentUser})),D=n(52),T=Object(I.b)({currentUser:P}),L=Object(v.b)(T)((function(e){e.currentUser,e.hidden;return r.a.createElement("div",{className:"header"},r.a.createElement(D.a,{href:"../../assets/logo.jpeg",rounded:!0}))})),M=(n(74),n(102)),_=n(105),q=n(104),G=Object(M.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary,square:!1}}})),R=function(){var e=G();return r.a.createElement("div",{className:"footer"},r.a.createElement(q.a,{container:!0,spacing:3},r.a.createElement(q.a,{item:!0,xs:!0},r.a.createElement(_.a,{className:e.paper},"Creator: Kaique"))))},W="SET_CURRENT_USER",H="ADD_USER_ITEM",J="DELETE_USER_ITEM",Y=function(e){return{type:W,payload:e}},B=(n(75),n(38)),F=(n(76),function(e){var t=e.children,n=e.isGoogleSignIn,a=e.inverted,c=e.danger,s=e.success,o=Object(B.a)(e,["children","isGoogleSignIn","inverted","danger","success"]);return r.a.createElement("button",Object.assign({className:" ".concat(a?"inverted":""," ").concat(c?"danger":""," ").concat(s?"success":""," ").concat(n?"google-sign-in":""," custom-button")},o),t)}),K="SET_CURRENT_LIST",Q=function(e){return{type:K,payload:e}},Z=Object(I.a)([function(e){return e.list}],(function(e){return e.currentList})),z=function(){var e=Object(d.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!N.currentUser){e.next=23;break}a=N.currentUser,e.t0=n,e.next="deleteItem"===e.t0?6:"updateItem"===e.t0?9:"completeItem"===e.t0?12:"Incomplete"===e.t0?15:18;break;case 6:return e.next=8,j(a,t);case 8:return e.abrupt("break",19);case 9:return e.next=11,y(a,t);case 11:return e.abrupt("break",19);case 12:return e.next=14,k(a,t);case 14:return e.abrupt("break",19);case 15:return e.next=17,y(a,t);case 17:return e.abrupt("break",19);case 18:return e.abrupt("return",!1);case 19:return e.next=21,O(a).then((function(e){Y({id:e}),Q({id:e})}));case 21:e.next=32;break;case 23:e.t1=n,e.next="completeItem"===e.t1?26:29;break;case 26:return e.next=28,k(0,t);case 28:return e.abrupt("break",30);case 29:return e.abrupt("return",!1);case 30:return e.next=32,O(a).then((function(e){Y({id:e}),Q({id:e})}));case 32:e.next=37;break;case 34:e.prev=34,e.t2=e.catch(0),console.error(e.t2);case 37:case"end":return e.stop()}}),e,null,[[0,34]])})));return function(t,n){return e.apply(this,arguments)}}(),X=Object(I.b)({currentUser:P,currentList:Z}),V=Object(v.b)(X)((function(e){var t=e.item,n=e.currentUser,a=e.completed;return r.a.createElement("div",{className:" ".concat(a||""," collection-item")},r.a.createElement("div",{className:"collection-footer"},r.a.createElement(q.a,{item:!0,xs:6},t?r.a.createElement("div",{className:"name"},r.a.createElement("h3",null,t.text)):""),r.a.createElement(q.a,{item:!0,sm:6},r.a.createElement("div",{className:"inline-buttons"},n?r.a.createElement("div",{className:"adm-buttons"},r.a.createElement(F,{success:!0,onClick:function(){return z(t,"deleteItem")}},"Delete"),r.a.createElement(F,{success:!0,onClick:function(){return z(t,"Incomplete")}},"Clear")):"",t.completed?r.a.createElement("h3",null):r.a.createElement(F,{success:!0,onClick:function(){return z(t,"completeItem")}},"Escolher")))))})),$=(n(77),n(22)),ee=(n(78),n(79),function(e){var t=e.handleChange,n=e.label,a=Object(B.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},a)),n?r.a.createElement("label",{className:"".concat(a.value.length?"shrink":""," form-input-label")},n):null)}),te=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=Object(d.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n=N.currentUser,e.next=5,w(n,a.state.text,a.state.title,a.state.date);case 5:return a.setState({}),e.next=8,O(n).then((function(e){console.log(e),Y(Object(l.a)({},e.data()))}));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object($.a)({},r,n))},a.state={text:"",title:"",date:""},a}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"new-task"},r.a.createElement("h2",null,"Create a new task"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(ee,{name:"title",type:"text",label:"Title",handleChange:this.handleChange,value:this.state.title,required:!0}),r.a.createElement(ee,{name:"text",type:"text",label:"Name",handleChange:this.handleChange,value:this.state.text,required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(F,{inverted:!0,type:"submit"},"Add Task"))))}}]),n}(r.a.Component),ne=Object(I.b)({currentUser:P}),ae=Object(v.b)(ne)((function(e){var t=e.currentUser?e.currentUser.lista:null;return t=t===[]||""===t?null:t,r.a.createElement("div",{className:"todo-page"},e.currentUser?r.a.createElement(te,null):r.a.createElement(b.a,{to:"../signin"}),r.a.createElement("div",{className:"collection"},r.a.createElement("h2",null,"Tasks"),t?t.map((function(e){return r.a.createElement(V,{key:e.id,item:e,completed:e.completed?"completed":""})})):r.a.createElement("div",{className:"no-list-div"},r.a.createElement("h2",null,"No tasks available at the moment."))))})),re=(n(81),n(51)),ce=[{value:"Escolhidos",label:"Escolhidos"},{value:"N\xe3o escolhidos",label:"N\xe3o escolhidos"},{value:"Todos",label:"Todos"}],se=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={selectedOption:null},a.handleChange=function(e){console.log(e),a.setState({selectedOption:e})},a}return Object(p.a)(n,[{key:"componentWillMount",value:function(){var e=this.props.setCurrentList;C().then((function(t){e(t.lista)}))}},{key:"componentDidMount",value:function(){var e=this.props.setCurrentList;S.collection("users/".concat("4hYmPE0ZvhPoHA0kYJaQu8KdrCs2","/lista/")).orderBy("text").onSnapshot((function(t){var n=t.metadata.hasPendingWrites?"Local":"Server";console.log(n," data2 : ",t.docs.map((function(e){return e.data()}))),e(t.docs.map((function(e){return e.data()})))}))}},{key:"render",value:function(){var e=this.props.currentList;if(this.state.selectedOption&&this.state.selectedOption.label)switch(this.state.selectedOption.label){case"Escolhidos":e=e.filter((function(e){return e.completed}));break;case"N\xe3o escolhidos":e=e.filter((function(e){return!e.completed}));break;case"Todos":e=this.props.currentList}return r.a.createElement("div",{className:"public_list"},r.a.createElement("div",{className:"title"},r.a.createElement(re.a,{className:"mt-4 col-md-6 col-offset-4",options:ce,onChange:this.handleChange})),r.a.createElement("div",{className:"collection"},e?e.map((function(e){return r.a.createElement(V,{key:e.id,item:e,completed:e.completed?"completed":""})})):r.a.createElement("div",{className:"no-list-div"})))}}]),n}(r.a.Component),oe=Object(I.b)({currentList:Z}),ue=Object(v.b)(oe,(function(e){return{setCurrentList:function(t){return e(Q(t))}}}))(se),ie=(n(84),n(85),function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=Object(d.a)(i.a.mark((function e(t){var n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.email,c=n.password,e.prev=2,e.next=5,N.signInWithEmailAndPassword(r,c);case 5:a.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object($.a)({},r,n))},a.state={email:"",password:""},a}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"Sign In"),r.a.createElement("span",null,"With Email and Password."),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(ee,{name:"email",type:"email",label:"Email",handleChange:this.handleChange,value:this.state.email}),r.a.createElement(ee,{name:"password",type:"password",label:"Password",handleChange:this.handleChange,value:this.state.password}),r.a.createElement("div",{className:"buttons"},r.a.createElement(F,{type:"submit"},"Sign In"),r.a.createElement(F,{onClick:A,isGoogleSignIn:!0},"Sign with Google"))))}}]),n}(r.a.Component)),le=(n(86),function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(d.a)(i.a.mark((function t(n){var a,r,c,s,o,u,l;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.state,r=a.displayName,c=a.email,s=a.password,o=a.confirmPassword,s===o){t.next=5;break}return alert("Password dont match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,N.createUserWithEmailAndPassword(c,s);case 8:return u=t.sent,l=u.user,t.next=12,x(l,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(5),"auth/email-already-in-use"===t.t0.code&&alert("Email already registered!"),console.error(t.t0);case 19:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object($.a)({},a,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"Create Account"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(ee,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Nome",required:!0}),r.a.createElement(ee,{type:"text",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(ee,{type:"password",name:"password",value:a,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(ee,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm your Password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(F,{type:"submit"},"SIGN UP"))))}}]),n}(r.a.Component)),de=function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(ie,null),r.a.createElement(le,null))},me=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(p.a)(n,[{key:"componentWillMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=N.onAuthStateChanged(function(){var t=Object(d.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,x(n);case 3:t.sent.onSnapshot({includeMetadataChanges:!0},(function(t){e(Object(l.a)({id:t.id},t.data()))}));case 5:e(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=N.onAuthStateChanged(function(){var t=Object(d.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,x(n);case 3:t.sent.onSnapshot((function(t){e(Object(l.a)({id:t.id},t.data()))}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(L,null),r.a.createElement(b.b,{path:"/publica",component:ue}),r.a.createElement(b.b,{exact:!0,path:"/",render:function(){return e.props.currentUser?r.a.createElement(ae,null):r.a.createElement(de,null)}}),r.a.createElement(R,null))}}]),n}(r.a.Component),pe=Object(I.b)({currentUser:P}),he=Object(v.b)(pe,(function(e){return{setCurrentUser:function(t){return e(Y(t))}}}))(me),fe=n(24),be=n(50),ve=n.n(be),ge={currentUser:null},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:case H:case J:return Object(l.a)(Object(l.a)({},e),{},{currentUser:t.payload});default:return e}},xe={currentList:[]},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return console.log("try",t),Object(l.a)(Object(l.a)({},e),{},{currentList:t.payload});default:return e}},ye=Object(fe.c)({user:Ee,list:we}),ke=[ve.a],Oe=Object(fe.d)(ye,fe.a.apply(void 0,ke));s.a.render(r.a.createElement(v.a,{store:Oe},r.a.createElement(o.a,null,r.a.createElement(he,null))),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.1ef76279.chunk.js.map