(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{50:function(e,t,a){e.exports=a(77)},55:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),s=a.n(c),l=a(20),i=(a(55),a(3)),o=a.n(i),u=a(7),m=a(6),d=a(18),p=a(19),f=a(22),h=a(21),b=a(4),v=a(15);a(61),a(62);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var y=r.a.createElement("title",null,"Group"),w=r.a.createElement("desc",null,"Created with Sketch."),x=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),O=function(e){var t=e.svgRef,a=e.title,n=E(e,["svgRef","title"]);return r.a.createElement("svg",g({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===a?y:a?r.a.createElement("title",null,a):null,w,x)},j=r.a.forwardRef((function(e,t){return r.a.createElement(O,g({svgRef:t},e))})),k=(a.p,a(26)),N=a.n(k),C=(a(63),a(66),function(){var e=Object(m.a)(o.a.mark((function e(t,a){var n,r,c,s,l,i,m,d,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=D.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=19;break}return r=t.displayName,c=t.email,s=new Date,e.prev=9,e.next=12,n.set(Object(u.a)({displayName:r,email:c,createdAt:s},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:e.next=33;break;case 19:return l=D.collection("users/".concat(t.uid,"/lista/")),e.next=22,l.get().then((function(e){return e.docs.map((function(e){return e.data()}))}));case 22:return i=e.sent,m=t.displayName,d=t.email,p=new Date,e.prev=25,e.next=28,n.set(Object(u.a)({displayName:m,email:d,createdAt:p,lista:i},a));case 28:e.next=33;break;case 30:e.prev=30,e.t1=e.catch(25),console.log("error creating user",e.t1.message);case 33:return e.abrupt("return",n);case 34:case"end":return e.stop()}}),e,null,[[9,14],[25,30]])})));return function(t,a){return e.apply(this,arguments)}}()),S=function(){var e=Object(m.a)(o.a.mark((function e(t,a,n,r){var c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=String((new Date).getTime()),s={text:a,title:n,date:r,id:c,createdAt:c},e.next=4,D.collection("users/".concat(t.uid,"/lista")).doc(c).set(s).then(Object(m.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("item added!");case 1:case"end":return e.stop()}}),e)})))).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),A=function(){var e=Object(m.a)(o.a.mark((function e(t,a){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Date,r=Object(u.a)(Object(u.a)({},a),{},{completed:n}),e.next=4,D.collection("users/".concat(t.uid,"/lista")).doc(a.id).update(r).then((function(e){return e.val()})).catch((function(e){return{errorCode:e.code,errorMessage:e.message}}));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),U=function(){var e=Object(m.a)(o.a.mark((function e(t){var a,n,r,c,s,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",0);case 2:return a=D.doc("users/".concat(t.uid)),n=D.collection("users/".concat(t.uid,"/lista/")),e.next=6,n.get().then((function(e){return e.docs.map((function(e){return e.data()}))}));case 6:return r=e.sent,c=t.displayName,s=t.email,l=new Date,e.prev=9,e.next=12,a.set({displayName:c,email:s,createdAt:l,lista:r});case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(m.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=D.collection("users/".concat(t.uid,"/lista/")),e.next=3,n.doc(a.id).delete().then((function(){console.log("Item removed!")})).catch((function(e){return e}));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();N.a.initializeApp({apiKey:"AIzaSyDuHTtUoxaEUp7Bc05pmaDE6Quukvp0k1A",authDomain:"udemy-crown-41095.firebaseapp.com",databaseURL:"https://udemy-crown-41095.firebaseio.com",projectId:"udemy-crown-41095",storageBucket:"udemy-crown-41095.appspot.com",messagingSenderId:"468641248743",appId:"1:468641248743:web:f2b938d84adb228955f942",measurementId:"G-H9HBJ6PSFX"});var P=N.a.auth(),D=N.a.firestore(),q=new N.a.auth.GoogleAuthProvider;q.setCustomParameters({prompt:"select_account"});var G=function(){return P.signInWithPopup(q)},R=(N.a,a(14)),T=Object(R.a)([function(e){return e.user}],(function(e){return e.currentUser})),W=Object(R.b)({currentUser:T}),M=Object(v.b)(W)((function(e){var t=e.currentUser;e.hidden;return r.a.createElement("div",{className:"header"},r.a.createElement(l.b,{className:"logo-container",to:"/"},r.a.createElement(j,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(l.b,{className:"option",to:"/"},r.a.createElement("h3",null,"HOME")),t?r.a.createElement("div",{className:"option",onClick:function(){P.signOut()}},r.a.createElement("h3",null,"SIGN OUT")):r.a.createElement(l.b,{className:"option",to:"/signin"},r.a.createElement("h3",null,"SIGN IN")," ")))})),_="SET_CURRENT_USER",B="ADD_USER_ITEM",F="DELETE_USER_ITEM",H=function(e){return{type:_,payload:e}},J=(a(69),a(37)),z=(a(70),function(e){var t=e.children,a=e.isGoogleSignIn,n=e.inverted,c=e.danger,s=e.success,l=Object(J.a)(e,["children","isGoogleSignIn","inverted","danger","success"]);return r.a.createElement("button",Object.assign({className:" ".concat(n?"inverted":""," ").concat(c?"danger":""," ").concat(s?"success":""," ").concat(a?"google-sign-in":""," custom-button")},l),t)}),K=a(91),L=function(){var e=Object(m.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,n=P.currentUser,e.t0=a,e.next="deleteItem"===e.t0?5:"updateItem"===e.t0?8:"completeItem"===e.t0?9:"deleteAll"===e.t0?12:13;break;case 5:return e.next=7,I(n,t);case 7:case 8:return e.abrupt("break",14);case 9:return e.next=11,A(n,t);case 11:case 12:return e.abrupt("break",14);case 13:return e.abrupt("return",!1);case 14:return e.next=16,U(n).then((function(e){console.log(e),H(Object(u.a)({id:e.id},e.data()))}));case 16:e.next=21;break;case 18:e.prev=18,e.t1=e.catch(0),console.error(e.t1);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t,a){return e.apply(this,arguments)}}(),Q=Object(R.b)({currentUser:T}),X=Object(v.b)(Q)((function(e){var t=e.item,a=(e.currentUser,e.completed);return r.a.createElement("div",{className:" ".concat(a||""," collection-item")},r.a.createElement("div",{className:"collection-footer"},r.a.createElement(K.a,{item:!0,xs:6},t?r.a.createElement("div",{className:"name"},t.text):""),r.a.createElement(K.a,{item:!0,xs:6},r.a.createElement("div",{className:"inline-buttons"},t.deleteAll?r.a.createElement(z,{success:!0,onClick:function(){return L(t,"deleteAll")}},"Delete All"):r.a.createElement(z,{danger:!0,onClick:function(){return L(t,"deleteItem")}},"Delete"),t.completed?"":r.a.createElement(z,{success:!0,onClick:function(){return L(t,"completeItem")}},"Completed")))))})),V=(a(71),a(17)),Y=(a(72),a(73),function(e){var t=e.handleChange,a=e.label,n=Object(J.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?r.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input-label")},a):null)}),Z=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(m.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,a=P.currentUser,e.next=5,S(a,n.state.text,n.state.title,n.state.date);case 5:return n.setState({}),e.next=8,U(a).then((function(e){console.log(e),H(Object(u.a)({},e.data()))}));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(V.a)({},r,a))},n.state={text:"",title:"",date:""},n}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"new-task"},r.a.createElement("h2",null,"Create a new task"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(Y,{name:"title",type:"text",label:"Title",handleChange:this.handleChange,value:this.state.title,required:!0}),r.a.createElement(Y,{name:"text",type:"text",label:"Name",handleChange:this.handleChange,value:this.state.text,required:!0}),r.a.createElement(Y,{name:"date",type:"date",label:"",handleChange:this.handleChange,value:this.state.date,required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(z,{inverted:!0,type:"submit"},"Add Task"))))}}]),a}(r.a.Component),$=Object(R.b)({currentUser:T}),ee=Object(v.b)($)((function(e){var t=e.currentUser?e.currentUser.lista:null;return t=t===[]||""===t?null:t,r.a.createElement("div",{className:"todo-page"},e.currentUser?r.a.createElement(Z,null):r.a.createElement(b.a,{to:"../signin"}),r.a.createElement("div",{className:"collection"},r.a.createElement("h2",null,"Tasks"),t?t.map((function(e){return r.a.createElement(X,{key:e.id,item:e,completed:e.completed?"completed":""})})):r.a.createElement("div",{className:"no-list-div"},r.a.createElement("h2",null,"No tasks available at the moment."))))})),te=(a(74),a(93)),ae=a(94),ne=Object(te.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary,square:!1}}})),re=function(){var e=ne();return r.a.createElement("div",{className:"footer"},r.a.createElement(K.a,{container:!0,spacing:3},r.a.createElement(K.a,{item:!0,xs:!0},r.a.createElement(ae.a,{className:e.paper},"Creator: Kaique")),r.a.createElement(K.a,{item:!0,xs:!0},r.a.createElement(ae.a,{className:e.paper},"Email: kaiqmowork@gmail.com")),r.a.createElement(K.a,{item:!0,xs:!0},r.a.createElement(ae.a,{className:e.paper},"Github: @kaiqmo"))))},ce=(a(75),a(76),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(m.a)(o.a.mark((function e(t){var a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,r=a.email,c=a.password,e.prev=2,e.next=5,P.signInWithEmailAndPassword(r,c);case 5:n.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(V.a)({},r,a))},n.state={email:"",password:""},n}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"Sign In"),r.a.createElement("span",null,"With Email and Password."),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(Y,{name:"email",type:"email",label:"Email",handleChange:this.handleChange,value:this.state.email,required:!0}),r.a.createElement(Y,{name:"password",type:"password",label:"Password",handleChange:this.handleChange,value:this.state.password,required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(z,{type:"submit"},"Sign In"),r.a.createElement(z,{onClick:G,isGoogleSignIn:!0},"Sign with Google"))))}}]),a}(r.a.Component)),se=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).handleSubmit=function(){var t=Object(m.a)(o.a.mark((function t(a){var n,r,c,s,l,i,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,r=n.displayName,c=n.email,s=n.password,l=n.confirmPassword,s===l){t.next=5;break}return alert("Password dont match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,P.createUserWithEmailAndPassword(c,s);case 8:return i=t.sent,u=i.user,t.next=12,C(u,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(5),"auth/email-already-in-use"===t.t0.code&&alert("Email already registered!"),console.error(t.t0);case 19:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(V.a)({},n,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"Create Account"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(Y,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Nome",required:!0}),r.a.createElement(Y,{type:"text",name:"email",value:a,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(Y,{type:"password",name:"password",value:n,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(Y,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm your Password",required:!0}),r.a.createElement(z,{type:"submit"},"SIGN UP")))}}]),a}(r.a.Component),le=function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(ce,null),r.a.createElement(se,null))},ie=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(p.a)(a,[{key:"componentWillMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=P.onAuthStateChanged(function(){var t=Object(m.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}return t.next=3,C(a);case 3:t.sent.onSnapshot({includeMetadataChanges:!0},(function(t){e(Object(u.a)({id:t.id},t.data()))}));case 5:e(a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=P.onAuthStateChanged(function(){var t=Object(m.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}return t.next=3,C(a);case 3:t.sent.onSnapshot((function(t){e(Object(u.a)({id:t.id},t.data()))}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(M,null),r.a.createElement(b.d,null,r.a.createElement(b.b,{path:"/",render:function(){return e.props.currentUser?r.a.createElement(ee,null):r.a.createElement(le,null)}})),r.a.createElement(re,null))}}]),a}(r.a.Component),oe=Object(R.b)({currentUser:T}),ue=Object(v.b)(oe,(function(e){return{setCurrentUser:function(t){return e(H(t))}}}))(ie),me=a(24),de=a(46),pe=a.n(de),fe={currentUser:null},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:case B:case F:return Object(u.a)(Object(u.a)({},e),{},{currentUser:t.payload});default:return e}},be=Object(me.c)({user:he}),ve=[pe.a],ge=Object(me.d)(be,me.a.apply(void 0,ve));s.a.render(r.a.createElement(v.a,{store:ge},r.a.createElement(l.a,null,r.a.createElement(ue,null))),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.b8134411.chunk.js.map