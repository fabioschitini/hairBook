(this["webpackJsonpjs-final-project"]=this["webpackJsonpjs-final-project"]||[]).push([[0],{58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},69:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var c=n(9),i=n.n(c),r=n(49),s=n.n(r),a=(n(27),n(58),n(13)),o=n(20),l=n(15),d=n(43),u=d.a.initializeApp({apiKey:"AIzaSyDA7-FJlCEs477ZFEmrR_71NiT4f4BdwXs",authDomain:"js-final-project-93039.firebaseapp.com",projectId:"js-final-project-93039",storageBucket:"js-final-project-93039.appspot.com",messagingSenderId:"243650190979",appId:"1:243650190979:web:a61b8c5d4fcb8b03d045b6"}),j=(n(59),n(16)),b=(n(60),n(4)),p=function(e){var t,n=u.firestore(),c=e.name,i=Object(l.b)(n.collection(e.id).doc("name"));i[0]&&(c=i[0].nameInfo);var r=Object(l.b)(n.collection(e.id).doc("image"));return r[0]&&(t=r[0].url),console.log(t),t?Object(b.jsxs)("div",{id:e.id,className:"in",children:[Object(b.jsx)("img",{id:e.id,className:"usersImage",alt:"profile",src:t}),Object(b.jsx)("p",{id:e.id,children:c})]}):Object(b.jsxs)("div",{id:e.id,className:"in",children:[Object(b.jsx)("img",{id:e.id,className:"usersImage",alt:"any",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMV9SJKrpKP67CGJxKTlrHopj7HDE2J6hxw&usqp=CAU"}),Object(b.jsx)("p",{id:e.id,children:c})]})},O=n(18),f=function(){var e,t,n=Object(O.f)(),c=u.auth(),i=u.firestore(),r=Object(o.a)(c),s=Object(a.a)(r,1)[0],d="general";s&&(d=s.uid,e=s.displayName,t=s.uid),n.state&&(d=n.state.id,e=n.state.name);var f=Object(l.b)(i.collection(d).doc("birthday")),x=Object(l.b)(i.collection(d).doc("city")),h=Object(l.b)(i.collection(d).doc("profession"));return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{id:"user-container",children:Object(b.jsx)(p,{id:d,name:e})}),f[0]&&x[0]&&h[0]?Object(b.jsxs)("div",{id:"profileInfo",children:[Object(b.jsxs)("p",{children:[f[0].BirthDayInfo," "]}),Object(b.jsxs)("p",{children:[x[0].cityInfo," "]}),Object(b.jsxs)("p",{children:[h[0].professionInfo," "]})]}):null,Object(b.jsx)("div",{id:"editButtons",children:n.state&&n.state.id!==t?Object(b.jsx)(j.b,{to:{pathname:"/users/profile/pictures",state:{id:d,name:e}},children:Object(b.jsx)("button",{children:"Pictures"})}):Object(b.jsxs)("div",{children:[Object(b.jsx)(j.b,{to:"/profile/editInfo",children:Object(b.jsx)("button",{children:"Add/Edit Information"})}),Object(b.jsxs)(j.b,{to:"/profile/Profilepictures",children:[Object(b.jsx)("button",{children:"Publications"})," "]})]})})]})},x=(n(69),n(0)),h=n.n(x),m=n(1),g=(n(70),u.auth()),v=u.firestore(),y=function(){var e=new d.a.auth.GoogleAuthProvider;function t(){return(t=Object(m.a)(h.a.mark((function t(){var n,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.signInWithPopup(e);case 2:return n=t.sent,t.next=5,v.collection(n.user.uid).get();case 5:if(!t.sent.empty){t.next=21;break}return console.log("adding user mate!"),t.next=10,v.collection(n.user.uid).doc("publications").set({array:[]});case 10:return t.next=12,v.collection("General").doc("users").get();case 12:return t.next=14,t.sent.data();case 14:return c=t.sent,console.log(c),t.next=18,v.collection("General").doc("users").update({users:c.users.concat({name:n.user.displayName,id:n.user.uid,image:""})});case 18:console.log("ca ira"),t.next=22;break;case 21:console.log("Already added mate");case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:"Sing",onClick:function(){return t.apply(this,arguments)},children:"Sing In"})})};function I(){return g.currentUser&&Object(b.jsx)("button",{className:"Sing",onClick:function(){return g.signOut()},children:"Sing Out"})}n(72);var k=function(e){var t,n,i=u.auth(),r=u.firestore(),s=Object(o.a)(i),d=Object(a.a)(s,1)[0],O=Object(c.useState)(!1),f=Object(a.a)(O,2),x=f[0],g=f[1],v=Object(c.useState)(!1),y=Object(a.a)(v,2),I=y[0],k=y[1],N=Object(c.useState)(""),C=Object(a.a)(N,2),S=C[0],G=C[1],w=Object(c.useState)(!1),D=Object(a.a)(w,2),U=D[0],P=D[1],T="general",A=Object(c.useRef)();d&&(T=d.uid,n=d.displayName),t=Object(l.a)(r.collection(T));var B=r.collection("General").doc("users"),q=Object(l.b)(B)[0];function J(e){return E.apply(this,arguments)}function E(){return(E=Object(m.a)(h.a.mark((function e(c){var i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(c),!c.target.id){e.next=15;break}if(t[0].filter((function(e){return e.id===c.target.id}))[0]){e.next=8;break}return e.next=5,r.collection(T).doc(c.target.id).set({messages:[],id:c.target.id,name:c.target.textContent});case 5:return e.next=7,r.collection(c.target.id).doc(T).set({messages:[],id:T,name:n});case 7:console.log("uploading users in the frined list");case 8:return e.next=10,r.collection(T).doc(c.target.id).get();case 10:return e.next=12,e.sent.data();case 12:i=e.sent,k(i),P(c.target.innerHTML);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){return(H=Object(m.a)(h.a.mark((function e(t){var n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,r.collection(T).doc(I.id).get();case 3:return e.next=5,e.sent.data().messages;case 5:return n=e.sent,e.next=8,r.collection(T).doc(I.id).update({messages:n.concat({text:S,id:T})});case 8:return e.next=10,r.collection(I.id).doc(T).update({messages:n.concat({text:S,id:T})});case 10:return e.next=12,r.collection(T).doc(I.id).get();case 12:return e.next=14,e.sent.data();case 14:c=e.sent,k(c),G(""),A.current.scrollIntoView({behavior:"smooth"});case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{id:"showUsers",onClick:function(){g(!0)},children:"Show users list"}),x&&q?Object(b.jsxs)("div",{id:"UsersDiv",children:[q.updatedUsers.map((function(e){return e.id!==T?Object(b.jsx)("div",{onClick:J,id:e.id,className:"user-name",children:Object(b.jsx)(p,{id:e.id})}):null})),Object(b.jsx)("span",{className:"usersClosingX",onClick:function(){return g(!1)},children:"X"})]}):null,I?Object(b.jsxs)("div",{ref:A,id:"ChatDiv",children:[Object(b.jsxs)("div",{id:"header",children:[Object(b.jsx)(j.b,{to:{pathname:"/users/profile",state:{id:I.id,name:U}},children:Object(b.jsx)(p,{id:I.id})}),Object(b.jsx)("span",{className:"chatClosingX",onClick:function(){return k(!1)},children:"X"})]}),Object(b.jsxs)("div",{id:"MessageDiv",children:[I.messages.map((function(e){return e.id===T?Object(b.jsxs)("div",{className:"MessageTextUser ",children:[e.text," "]}):Object(b.jsx)("div",{className:"MessageTextTarget ",children:e.text})}))," "]}),Object(b.jsxs)("form",{id:"form",onSubmit:function(e){return H.apply(this,arguments)},children:[Object(b.jsx)("textarea",{id:"TextArea",value:S,onChange:function(e){return G(e.target.value)}}),Object(b.jsx)("button",{id:"Submit",children:"Submit"})]})]}):null]})},N=function(e){var t,n=u.auth(),c=u.firestore(),i=Object(o.a)(n),r=Object(a.a)(i,1)[0],s="yep";r&&(s=r.uid);var d=Object(l.b)(c.collection(s).doc("image"));return d[0]&&(t=d[0].url),Object(b.jsx)("nav",{children:r?Object(b.jsxs)("ul",{children:[Object(b.jsxs)(j.b,{to:"/hairBook",children:[" ",Object(b.jsx)("li",{children:"Homepage"})]}),Object(b.jsx)(j.b,{to:"/users",children:Object(b.jsx)("li",{children:"Users"})}),Object(b.jsx)(j.b,{to:"/profile",children:Object(b.jsxs)("li",{id:"profile-div",children:[t?Object(b.jsx)("img",{className:"usersImage",alt:"profile",src:t}):Object(b.jsx)("img",{className:"usersImage",alt:"any",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMV9SJKrpKP67CGJxKTlrHopj7HDE2J6hxw&usqp=CAU"}),Object(b.jsx)("p",{children:"Profile"})," "]})}),Object(b.jsx)(j.b,{to:"/post",children:Object(b.jsx)("li",{children:"+Post"})}),Object(b.jsx)(k,{}),Object(b.jsx)(I,{})]}):Object(b.jsxs)("ul",{children:[Object(b.jsxs)(j.b,{to:"/",children:[" ",Object(b.jsx)("li",{children:"Homepage"})]}),Object(b.jsx)(j.b,{to:"/users",children:Object(b.jsx)("li",{children:"Users"})}),Object(b.jsx)(y,{})]})})},C=(n(35),n(73),function(){var e,t=u.auth(),n=u.firestore(),i=u.storage(),r=Object(o.a)(t),s=Object(a.a)(r,1)[0],d=Object(c.useState)(""),j=Object(a.a)(d,2),p=j[0],O=j[1],f=Object(c.useState)(""),x=Object(a.a)(f,2),g=x[0],v=x[1],y=Object(c.useState)(""),I=Object(a.a)(y,2),k=I[0],N=I[1],C=Object(c.useState)(""),S=Object(a.a)(C,2),G=S[0],w=S[1],D=Object(c.useState)(!1),U=Object(a.a)(D,2),P=U[0],T=U[1],A=Object(c.useState)(""),B=Object(a.a)(A,2),q=B[0],J=B[1],E="general";s&&(E=s.uid);var H=Object(l.b)(n.collection("General").doc("users"));function K(){return(K=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log("submiting info"),n.collection(E).doc("name").set({nameInfo:p,id:"profile-info"}),n.collection(E).doc("birthday").set({BirthDayInfo:g,id:"profile-info"}),n.collection(E).doc("city").set({cityInfo:k,id:"profile-info"}),n.collection(E).doc("profession").set({professionInfo:G,id:"profile-info"}),O(""),v(""),N(""),w("");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return H[0]&&(e=H[0].updatedUsers),Object(b.jsxs)("div",{children:[Object(b.jsxs)("form",{id:"info-form",onSubmit:function(e){return K.apply(this,arguments)},children:[Object(b.jsx)("p",{children:"Name:"})," ",Object(b.jsx)("textarea",{value:p,required:!0,onChange:function(e){return O(e.target.value)}}),Object(b.jsx)("p",{children:"Birthday:"})," ",Object(b.jsx)("textarea",{value:g,required:!0,onChange:function(e){return v(e.target.value)}}),Object(b.jsx)("p",{children:"City:"})," ",Object(b.jsx)("textarea",{value:k,required:!0,onChange:function(e){return N(e.target.value)}}),Object(b.jsx)("p",{children:"Profession:"})," ",Object(b.jsx)("textarea",{value:G,required:!0,onChange:function(e){return w(e.target.value)}}),Object(b.jsx)("button",{id:"info-submit",children:"Submit"})]}),Object(b.jsxs)("form",{id:"image-submit",onSubmit:function(t){t.preventDefault(),n.collection(E).doc("image").set({url:q,id:"profile-image"}),console.log(e);var c=e.map((function(e){return e.id===E?(e.image=q,e):e}));console.log(c),n.collection("General").doc("users").set({updatedUsers:c}),J("")},children:[Object(b.jsx)("p",{children:"Profile-Image"})," ",Object(b.jsx)("input",{onChange:function(e){return T(e.target.files[0])},type:"file",id:"input-image",name:"img",accept:"image/*"}),Object(b.jsx)("button",{onClick:function(){i.ref("images/".concat(P.name)).put(P).on("state_changed",(function(e){}),(function(e){console.log(e)}),(function(){i.ref("images").child(P.name).getDownloadURL().then((function(e){J(e)}))}))},children:"Upload Image"}),Object(b.jsx)("div",{id:"image-container",children:q?Object(b.jsx)("img",{id:"profileImage",src:q,alt:" yo Chosed"}):null}),Object(b.jsx)("button",{id:"submit-profie-image",children:"Submit Profile-Image"})]})]})}),S=(n(74),n(34)),G=n.n(S),w=function(){var e,t,n,i=u.auth(),r=u.firestore(),s=u.storage(),d=Object(o.a)(i),j=Object(a.a)(d,1)[0],p=Object(c.useState)(""),O=Object(a.a)(p,2),f=O[0],x=O[1],g=Object(c.useState)(!1),v=Object(a.a)(g,2),y=v[0],I=v[1],k=Object(c.useState)(!1),N=Object(a.a)(k,2),C=N[0],S=N[1],w="yep";j&&(w=j.uid,t=j.displayName);var D=Object(l.b)(r.collection(w).doc("publications")),U=Object(l.b)(r.collection("General").doc("publications"));function P(){return(P=Object(m.a)(h.a.mark((function c(i){var s,a;return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:i.preventDefault(),s=G()(),console.log(i.target.img),console.log(e),a=i.target.img.src,e.unshift({text:f,personId:w,src:a,id:s,userName:t,likes:0}),n.unshift({text:f,personId:w,src:a,id:s,userName:t,likes:0}),r.collection(w).doc("publications").set({array:e}),r.collection("General").doc("publications").set({array:n}),x(""),console.log("worked!");case 11:case"end":return c.stop()}}),c)})))).apply(this,arguments)}return D[0]&&(e=D[0].array),U[0]&&(n=U[0].array),Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:function(e){return P.apply(this,arguments)},children:[Object(b.jsxs)("p",{id:"imageSubmit",children:["Image:",Object(b.jsx)("input",{required:!0,onChange:function(e){return I(e.target.files[0])},type:"file",accept:"image/*"}),Object(b.jsx)("button",{type:"button",onClick:function(){s.ref("images/".concat(y.name)).put(y).on("state_changed",(function(e){}),(function(e){console.log(e)}),(function(){s.ref("images").child(y.name).getDownloadURL().then((function(e){S(e)}))}))},children:"Upload Image"})]}),Object(b.jsx)("div",{id:"imageContainer",children:C?Object(b.jsx)("img",{name:"img",id:"img",src:C,alt:"The  yo Chosed"}):null}),Object(b.jsx)("p",{id:"info"})," ",Object(b.jsx)("textarea",{id:"text",value:f,onChange:function(e){return x(e.target.value)}}),Object(b.jsx)("button",{id:"submit",children:"Submit"})]})})},D=(n(75),n(76),function(e){var t,n,i,r=u.auth(),s=u.firestore(),d=Object(o.a)(r),O=Object(a.a)(d,1)[0],f=Object(c.useState)(""),x=Object(a.a)(f,2),g=x[0],v=x[1],y=Object(c.useState)([]),I=Object(a.a)(y,2),k=I[0],N=I[1],C=Object(c.useState)(1),S=Object(a.a)(C,2),w=S[0],D=S[1],U="yep",P=[];O&&(U=O.uid,i=O.displayName);var T=Object(l.b)(s.collection("General").doc("comments"));function A(){return(A=Object(m.a)(h.a.mark((function t(n){var c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("yea submit"),n.preventDefault(),c=G()(),P.unshift({text:g,personId:U,publicationId:e.id,id:c,userName:i}),s.collection("General").doc("comments").set({array:P}),v("");case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function B(e){var t=e.target.id,n=T[0].array.filter((function(e){return e.id!==t}));s.collection("General").doc("comments").set({array:n})}return T[0]&&(P=T[0].array),P[0]&&(t=P.filter((function(t){return t.publicationId===e.id}))),t&&(n=t.filter((function(e){return e.personId===U}))),Object(b.jsxs)("div",{children:[Object(b.jsxs)("form",{onSubmit:function(e){return A.apply(this,arguments)},children:[O?Object(b.jsx)("input",{placeholder:"Comment here...",value:g,onChange:function(e){return v(e.target.value)}}):null,Object(b.jsx)("button",{type:"button",onClick:function(){if(console.log("show more"),console.log(w),console.log(t),t){D(w+1);var e=t[t.length-w];e&&N(k.concat(e))}},children:Object(b.jsx)("div",{id:"ballon",children:Object(b.jsx)("i",{id:"comment-icon",class:"far fa-comments"})})})]}),n?n.map((function(t){return t.publicationId===e.id?Object(b.jsxs)("div",{className:"comment-container",children:[Object(b.jsx)(j.b,{to:{pathname:"/users/profile",state:{id:t.personId,name:t.userName}},children:Object(b.jsxs)("div",{className:"comment-header",children:[Object(b.jsx)(p,{id:t.personId}),Object(b.jsx)("p",{children:t.userName})]})}),Object(b.jsxs)("p",{className:"comment-text",children:[t.text," ",Object(b.jsx)("button",{id:t.id,onClick:B,children:"Delete"})]})]}):null})):null,k.map((function(t){return t.publicationId===e.id?Object(b.jsxs)("div",{className:"comment-container",children:[Object(b.jsxs)("div",{className:"comment-header",children:[Object(b.jsx)(p,{id:t.personId}),Object(b.jsx)("p",{})]}),Object(b.jsx)("p",{className:"comment-text",children:t.text})]}):null}))]})}),U=(n(77),function(e){var t,n,c,i=u.auth(),r=u.firestore(),s=Object(o.a)(i),d=Object(a.a)(s,1)[0],j="yep",p=[],O=!0;d&&(j=d.uid,n=d.displayName);var f=Object(l.b)(r.collection("General").doc("likes")),x=Object(l.b)(r.collection("General").doc("publications"));function h(){var c=G()();if(t.filter((function(t){return t.userId===j&&t.publicationId===e.id}))[0]){if(t.filter((function(t){return t.userId===j&&t.publicationId===e.id}))[0].status){var i=t.map((function(t){return t.publicationId===e.id&&t.userId===j?t={userId:j,publicationId:e.id,id:c,status:!1}:t}));r.collection("General").doc("likes").set({array:i});var s=p.map((function(t){return t.id===e.id?{text:t.text,personId:t.personId,src:t.src,id:t.id,userName:n,likes:t.likes-1}:t}));r.collection("General").doc("publications").set({array:s}),console.log("-1")}else if(!t.filter((function(t){return t.userId===j&&t.publicationId===e.id}))[0].status){var a=t.map((function(t){return t.publicationId===e.id&&t.userId===j?t={userId:j,publicationId:e.id,id:c,status:!0}:t})),o=p.map((function(t){return t.id===e.id?{text:t.text,personId:t.personId,src:t.src,id:t.id,userName:n,likes:t.likes+1}:t}));r.collection("General").doc("likes").set({array:a}),r.collection("General").doc("publications").set({array:o}),console.log("+1")}}else{r.collection("General").doc("likes").set({array:t.concat({userId:j,publicationId:e.id,id:c,status:!0})});var l=p.map((function(t){return t.id===e.id?{text:t.text,personId:t.personId,src:t.src,id:t.id,userName:n,likes:t.likes+1}:t}));r.collection("General").doc("publications").set({array:l}),console.log("initial +1")}}return f[0]&&(t=f[0].array),x[0]&&(O=(p=x[0].array).filter((function(t){return t.id===e.id}))[0],console.log(O)),t&&(t.filter((function(t){return t.userId===j&&t.publicationId===e.id}))[0]&&(c=t.filter((function(t){return t.userId===j&&t.publicationId===e.id}))[0].status),console.log("yeah")),Object(b.jsxs)("div",{id:"like-container",children:[c?Object(b.jsx)("button",{onClick:h,children:Object(b.jsx)("i",{class:"fas fa-thumbs-up"})}):Object(b.jsx)("button",{onClick:h,children:Object(b.jsx)("i",{class:"far fa-thumbs-up"})}),Object(b.jsxs)("p",{children:[O?Object(b.jsx)("p",{children:O.likes}):null," "]})]})}),P=function(e){var t,n=u.auth(),c=Object(o.a)(n),i=Object(a.a)(c,1)[0];i&&(t=i.uid);var r,s=Object(O.f)(),d=u.firestore(),f="yep",x=[],h=Object(l.b)(d.collection("General").doc("comments"));e&&(f=e.id),s.state&&(f=s.state.id);var m=Object(l.b)(d.collection(f).doc("publications"));function g(e){var t=e.target.parentNode.parentNode.id,n=r.filter((function(e){return e.id!==t}));d.collection(f).doc("publications").set({array:n});var c=x.filter((function(e){return e.publicationId!==t}));d.collection("General").doc("comments").set({array:c})}return m[0]&&(r=m[0].array),h[0]&&(x=h[0].array),console.log(m),Object(b.jsx)("div",{children:r?Object(b.jsx)("div",{children:r.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)(j.b,{to:{pathname:"/users/profile",state:{id:e.personId,name:e.userName}},children:Object(b.jsx)("div",{className:"headerContainer",children:Object(b.jsx)(p,{id:e.personId})})}),Object(b.jsxs)("div",{id:e.id,className:"container",children:[Object(b.jsx)("img",{className:"publicationImage",src:e.src,alt:"publications images"}),Object(b.jsx)("p",{className:"publication-subtitle",children:e.text}),i?Object(b.jsx)(U,{id:e.id}):null,Object(b.jsx)("div",{children:Object(b.jsx)(D,{id:e.id})}),f===t?Object(b.jsxs)("div",{children:[" ",Object(b.jsx)("button",{onClick:g,children:"Delete"}),Object(b.jsx)(j.b,{to:{pathname:"/tyled",state:{id:e.id,url:e.src,text:e.text}},children:Object(b.jsx)("button",{children:"Edit"})})," "]}):null]})]})}))}):null})},T=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(P,{id:"General"})})},A=function(){var e=Object(O.f)(),t=u.auth(),n=Object(o.a)(t),c=Object(a.a)(n,1)[0],i="yep";return c&&(i=c.uid),e.state&&(i=e.state.id),Object(b.jsx)("div",{children:Object(b.jsx)(P,{id:i})})},B=(n(78),function(){var e,t=u.auth(),n=u.firestore(),c=Object(o.a)(t),i=Object(a.a)(c,1)[0],r="general";i&&(r=i.uid);var s=Object(l.b)(n.collection("General").doc("users"));return s[0]&&(e=s[0].updatedUsers),Object(b.jsx)("div",{children:e?e.map((function(e){return e.id!==r?Object(b.jsx)("div",{className:"users-info",children:Object(b.jsx)(j.b,{to:{pathname:"/users/profile",state:{id:e.id,name:e.name}},children:Object(b.jsx)(p,{id:e.id})})}):null})):null})});var q=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(N,{children:" "}),Object(b.jsxs)(O.c,{children:[Object(b.jsx)(O.a,{exact:!0,path:"/hairBook",children:Object(b.jsx)(T,{})}),Object(b.jsx)(O.a,{exact:!0,path:"/post",children:Object(b.jsx)(w,{})}),Object(b.jsx)(O.a,{exact:!0,path:"/profile",children:Object(b.jsx)(f,{})}),Object(b.jsx)(O.a,{exact:!0,path:"/profile/editInfo",children:Object(b.jsx)(C,{})}),Object(b.jsx)(O.a,{exact:!0,path:"/profile/Profilepictures",children:Object(b.jsx)(A,{})}),Object(b.jsx)(O.a,{exact:!0,path:"/users",children:Object(b.jsx)(B,{})}),Object(b.jsx)(O.a,{exact:!0,path:"/users/profile",children:Object(b.jsx)(f,{})}),Object(b.jsx)(O.a,{exact:!0,path:"/users/profile/pictures",children:Object(b.jsx)(A,{})})]})]})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(q,{})}),document.getElementById("root")),J()}},[[79,1,2]]]);
//# sourceMappingURL=main.bf60e558.chunk.js.map