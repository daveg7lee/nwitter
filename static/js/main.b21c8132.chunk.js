(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{40:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);n(35);var s=n(3),r=n.n(s),c=n(23),a=n.n(c),i=(n(40),n(10)),l=n(15),u=n(20);n(41),n(52),n(53);u.a.initializeApp({apiKey:"AIzaSyA6gMFM2j49pIaUIxE1-vofyiPCK_haif0",authDomain:"nwitter-29e08.firebaseapp.com",projectId:"nwitter-29e08",storageBucket:"nwitter-29e08.appspot.com",messagingSenderId:"191278187355",appId:"1:191278187355:web:7b65a5d2b8c2ad78e0907e",measurementId:"G-PL5ESKCHXY"});var o=u.a,j=u.a.auth(),b=u.a.firestore(),d=u.a.storage(),x=n(2),m=function(){return Object(x.jsx)("div",{className:"w-screen h-screen flex justify-center items-center",children:Object(x.jsx)("h1",{className:"text-5xl font-semibold",children:"Loading..."})})},f=n(19),h=n(6),O=n(8),p=n.n(O),v=n(13),w=function(e){var t=Object(s.useState)(e),n=Object(i.a)(t,2),r=n[0],c=n[1];return{value:r,onChange:function(e){var t=e.target.value;c(t)},setValue:c}},g=function(e){var t=e.newAccount,n=w(""),s=w(""),r=function(){var e=Object(v.a)(p.a.mark((function e(r){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),e.prev=1,!t){e.next=7;break}return e.next=5,j.createUserWithEmailAndPassword(n.value,s.value);case 5:e.next=9;break;case 7:return e.next=9,j.signInWithEmailAndPassword(n.value,s.value);case 9:e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),c=e.t0.message,l.b.error(c);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("form",{onSubmit:r,children:[Object(x.jsxs)("div",{className:"mb-4",children:[Object(x.jsx)("label",{className:"label text-white",children:"Email"}),Object(x.jsx)("div",{className:"mt-1 rounded-md shadow-sm",children:Object(x.jsx)("input",{type:"email",value:n.value,onChange:n.onChange,required:!0,className:"input"})})]}),Object(x.jsxs)("div",{className:"mb-4",children:[Object(x.jsx)("label",{className:"label text-white",children:"Password"}),Object(x.jsx)("div",{className:"mt-1 rounded-md shadow-sm",children:Object(x.jsx)("input",{type:"password",value:s.value,onChange:s.onChange,required:!0,className:"input"})})]}),Object(x.jsx)("input",{type:"submit",value:t?"Create Accont":"Log In",className:"button border-blue-600 bg-blue-600 hover:bg-blue-500 w-full mt-4"})]})},N=n(31),y=n(18),k=function(){var e=function(){var e=Object(v.a)(p.a.mark((function e(t){var n,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.name,e.prev=1,"google"===n?s=new o.auth.GoogleAuthProvider:"github"===n&&(s=new o.auth.GithubAuthProvider),e.next=5,j.signInWithPopup(s);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),l.b.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("button",{name:"google",onClick:e,className:"button border-red-500 bg-red-500 hover:bg-red-400 mb-4 w-80 flex items-center justify-center",children:[Object(x.jsx)(y.a,{className:"mr-3"}),"Continue with Google"]}),Object(x.jsxs)("button",{name:"github",onClick:e,className:"button border-gray-600 bg-gray-600 hover:bg-gray-500 w-80 flex items-center justify-center",children:[Object(x.jsx)(N.a,{className:"mr-3"}),"Continue with Github"]})]})},C=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(x.jsx)("div",{className:"w-screen h-screen flex flex-col justify-center items-center",children:Object(x.jsxs)("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:[Object(x.jsx)("h1",{className:"font-semibold text-4xl mt-6 text-center text-white",children:"Log In to Nwitter"}),Object(x.jsx)("div",{className:"py-9 px-0 shadow sm:px-10",children:Object(x.jsx)(g,{newAccount:n})}),Object(x.jsxs)("div",{className:"flex flex-col items-center",children:[Object(x.jsxs)("div",{className:"my-10  flex w-full items-center",children:[Object(x.jsx)("div",{className:"flex-1 border-t-2 border-gray-200"}),Object(x.jsx)("span",{className:"text-sm uppercase mx-5 font-medium text-gray-600",children:"Or"}),Object(x.jsx)("div",{className:"flex-1 border-t-2 border-gray-200"})]}),Object(x.jsx)(k,{}),Object(x.jsx)("button",{onClick:function(){r(!n)},className:"text-blue-500 p-2 focus:outline-none mt-3 mb-3",children:n?"Do you have an Account?":"Don't have an account?"})]})]})})},S=n(34),A=n(17),I=function(e){var t=e.nweet,n=e.isOwner,r=Object(s.useState)(!1),c=Object(i.a)(r,2),a=c[0],u=c[1],o=w(t.text),j=function(){var e=Object(v.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.confirm("Are you sure you want to delete this nweet?")){e.next=8;break}return e.next=5,b.doc("nweets/".concat(t.id)).delete();case 5:if(!t.fileURL){e.next=8;break}return e.next=8,d.refFromURL(t.fileURL).delete();case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),l.b.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),m=function(){return u((function(e){return!e}))},f=function(){var e=Object(v.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),m(),e.next=4,b.doc("nweets/".concat(t.id)).update({text:o.value});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"min-w-max w-40 h-10 flex justify-between items-center bg-white shadow rounded-full py-6 px-5 my-1.5",children:a?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("form",{onSubmit:f,children:Object(x.jsx)("input",{type:"text",value:o.value,onChange:o.onChange,required:!0})}),Object(x.jsx)("button",{onClick:m,className:"focus:outline-none",children:Object(x.jsx)(A.a,{className:"text-xl"})})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h4",{className:"w-full flex justify-center items-center mr-2",children:t.text}),n&&Object(x.jsxs)("div",{className:"flex items-center",children:[Object(x.jsx)("button",{onClick:j,className:"focus:outline-none mr-1",children:Object(x.jsx)(A.f,{})}),Object(x.jsx)("button",{onClick:m,className:"focus:outline-none",children:Object(x.jsx)(A.d,{})})]})]})}),t.fileURL&&Object(x.jsx)("div",{className:"w-40 h-40",children:Object(x.jsx)("img",{src:t.fileURL,className:"rounded",alt:"Error"})})]})},L=n(55),P=function(e){var t=e.userObj,n=w(""),r=Object(s.useState)(""),c=Object(i.a)(r,2),a=c[0],l=c[1],u=function(){var e=Object(v.a)(p.a.mark((function e(s){var r,c,i,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.setValue(""),l(""),s.preventDefault(),r="",!a){e.next=12;break}return c=d.ref().child("".concat(t.uid,"/").concat(Object(L.a)())),e.next=8,c.putString(a,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:r=e.sent;case 12:return u={text:n.value,createdAt:Date.now(),creatorID:t.uid,fileURL:r},e.next=15,b.collection("nweets").add(u);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("form",{onSubmit:u,className:"flex flex-col justify-center items-center mb-4",children:[Object(x.jsx)("div",{className:"w-full flex items-center justify-center mb-4",children:Object(x.jsxs)("div",{className:"relative rounded-md shadow-sm w-80 flex",children:[Object(x.jsx)("input",{type:"text",placeholder:"What's on your mind?",maxLength:120,className:"input",value:n.value,onChange:n.onChange}),Object(x.jsx)("input",{type:"submit",value:"Nweet",className:"absolute right-0 h-full rounded-r border-blue-600 bg-blue-600 hover:bg-blue-500 w-1/5 text-white cursor-pointer"})]})}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("label",{htmlFor:"file",className:"cursor-pointer flex items-center text-sm text-blue-500",children:["Add Photos ",Object(x.jsx)(y.b,{className:"ml-1"})]}),Object(x.jsx)("input",{type:"file",accept:"image/*",id:"file",className:"hidden",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){l(e.target.result)},n.readAsDataURL(t)}})]}),a&&Object(x.jsxs)("div",{className:"w-40 h-40 flex flex-col justify-center items-center my-5",children:[Object(x.jsx)("img",{src:a,className:"rounded-md mb-2",alt:"Error"}),Object(x.jsxs)("button",{onClick:function(){return l("")},className:"text-blue-500 flex items-center",children:["Remove ",Object(x.jsx)(y.c,{className:"text-lg"})]})]})]})},U=function(e){var t=e.userObj,n=Object(s.useState)([]),r=Object(i.a)(n,2),c=r[0],a=r[1];return Object(s.useEffect)((function(){b.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(S.a)({id:e.id},e.data())}));a(t)}))}),[]),Object(x.jsxs)("div",{className:"min-h-screen",children:[Object(x.jsx)(P,{userObj:t}),Object(x.jsx)("div",{className:"w-full h-full flex flex-col justify-start items-center",children:c.map((function(e){return Object(x.jsx)(I,{nweet:e,isOwner:e.creatorID===t.uid},e.id)}))})]})},D=function(e){var t=e.refreshUser,n=e.userObj,r=Object(s.useState)([]),c=Object(i.a)(r,2),a=(c[0],c[1]),u=Object(h.g)(),o=w(n.displayName),d=function(){var e=Object(v.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.collection("nweets").where("creatorID","==",n.uid).orderBy("createdAt").get();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){d()}),[]);var m=function(){var e=Object(v.a)(p.a.mark((function e(s){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.preventDefault(),n.displayName===o.value){e.next=6;break}return e.next=4,n.updateProfile({displayName:o.value});case 4:l.b.success("Profile Updated"),t();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"min-h-screen flex flex-col items-center",children:[Object(x.jsx)("form",{onSubmit:m,className:"w-5/6 md:w-1/4",children:Object(x.jsxs)("div",{className:"rounded-md shadow-sm flex relative",children:[Object(x.jsx)("input",{type:"text",value:o.value,onChange:o.onChange,className:"input",maxLength:40,placeholder:"Name"}),Object(x.jsx)("input",{type:"submit",value:"Update",className:"px-2 absolute right-0 h-full rounded-r-md bg-blue-600 border-blue-600 hover:bg-blue-500 text-white cursor-pointer"})]})}),Object(x.jsx)("div",{className:"my-10 flex w-5/6 md:w-1/4 items-center"}),Object(x.jsx)("div",{className:"w-1/4 flex justify-center",children:Object(x.jsx)("button",{onClick:function(){j.signOut(),u.push("/")},className:"button bg-red-600 border-red-600 hover:bg-red-500",children:"Log Out"})})]})},E=function(){return Object(x.jsx)("div",{className:"max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex justify-center items-center",children:Object(x.jsx)("footer",{className:"text-blue-500",children:Object(x.jsx)(A.c,{className:"text-4xl"})})})},F=function(e){var t=e.userObj;return Object(x.jsxs)("nav",{className:"w-full h-28 flex justify-center items-center",children:[Object(x.jsx)("ul",{className:"mr-10 h-full flex items-center",children:Object(x.jsxs)(f.b,{to:"/",className:"h-2/3 flex flex-col justify-evenly items-center",children:[Object(x.jsx)(A.b,{className:"text-2xl text-blue-500"}),Object(x.jsx)("h3",{className:"text-white",children:"Home"})]})}),Object(x.jsx)("ul",{className:"h-full flex items-center",children:Object(x.jsxs)(f.b,{to:"/profile",className:"h-2/3 flex flex-col justify-evenly items-center",children:[Object(x.jsx)(A.e,{className:"text-2xl text-blue-500"}),Object(x.jsxs)("h3",{className:"text-white",children:[t.displayName,"'s Profile"]})]})})]})},R=function(e){var t=e.refreshUser,n=e.isLoggedIn,s=e.userObj;return Object(x.jsxs)(f.a,{children:[n&&Object(x.jsx)(F,{userObj:s}),Object(x.jsx)(h.d,{children:n?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(h.b,{exact:!0,path:"/",children:[Object(x.jsx)(U,{userObj:s}),Object(x.jsx)(E,{})]}),Object(x.jsxs)(h.b,{path:"/profile",children:[Object(x.jsx)(D,{userObj:s,refreshUser:t}),Object(x.jsx)(E,{})]}),Object(x.jsx)(h.a,{from:"*",to:"/"})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(h.b,{exact:!0,path:"/",component:C}),Object(x.jsx)(h.a,{from:"*",to:"/"})]})})]})},B=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(s.useState)(null),a=Object(i.a)(c,2),u=a[0],o=a[1];Object(s.useEffect)((function(){j.onAuthStateChanged((function(e){o(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),r(!0)}))}),[]);return Object(x.jsxs)(x.Fragment,{children:[n?Object(x.jsx)(R,{refreshUser:function(){var e=j.currentUser;o({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(u),userObj:u}):Object(x.jsx)(m,{}),Object(x.jsx)(l.a,{hideProgressBar:!0,draggable:!0,pauseOnHover:!0})]})},G=n(33);n.n(G).a.config(),a.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(B,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.b21c8132.chunk.js.map