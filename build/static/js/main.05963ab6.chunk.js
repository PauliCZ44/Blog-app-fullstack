(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{18:function(e,t,a){e.exports=a(44)},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),l=a.n(s),o=a(7),c=a(1),i=a.n(c),u=a(3),m=a(2),d=function(e){return r.a.createElement("div",{className:"card px-sm-4 mt-2 login-card hv-center shadow"},r.a.createElement("form",{className:"p-2"},r.a.createElement("div",{className:"form-group text-left mt-3"},r.a.createElement("label",{className:"font-weight-bold"},"Username"),r.a.createElement("input",{type:"text",value:e.username,className:"form-control",id:"username",placeholder:"Enter your user name",onChange:function(t){var a=t.target;return e.setUsername(a.value)}})),r.a.createElement("div",{className:"form-group text-left mt-4"},r.a.createElement("label",{className:"font-weight-bold"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",value:e.password,onChange:function(t){var a=t.target;return e.setPassword(a.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-dark my-3 px-5 submitBtn",onClick:e.handleLogin},"Login"),r.a.createElement("button",{type:"button",onClick:e.switchToRegister,className:"btn btn-info my-3 px-4 submitBtn float-right"},"Create Account")))},b=function(e){var t=Object(n.useState)([!1,!1,!1,!1]),a=Object(m.a)(t,2),s=a[0],l=a[1],o=s[0]?"form-control notFilledForm":"form-control",c=s[1]?"form-control notFilledForm":"form-control",d=s[2]?"form-control notFilledForm":"form-control",b=s[3]?"form-control notFilledForm":"form-control",f=function(){var t=Object(u.a)(i.a.mark((function t(a){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),""!==e.username){t.next=6;break}return e.makeMessage("Please fill in your username",!0),t.abrupt("return",l([!0,!1,!1,!1]));case 6:if(""!==e.name){t.next=11;break}return e.makeMessage("Please fill in your full name",!0),t.abrupt("return",l([!1,!0,!1,!1]));case 11:if(""!==e.password){t.next=16;break}return e.makeMessage("Please fill in your password",!0),t.abrupt("return",l([!1,!1,!0,!1]));case 16:if(""!==e.passwordConfirm){t.next=21;break}return e.makeMessage("Please fill in your password for confirmation",!0),t.abrupt("return",l([!1,!1,!1,!0]));case 21:if(e.passwordConfirm===e.password){t.next=24;break}return e.makeMessage("Passwords had to be equal",!0),t.abrupt("return",l([!1,!1,!0,!0]));case 24:return n={username:e.username,name:e.name,password:e.password},t.prev=25,t.next=28,e.registerService(n);case 28:(r=t.sent)&&(e.makeMessage("".concat(e.name,', you were registed in as "').concat(e.username,'"')),e.setUsername(""),e.setName(""),e.setPassword(""),e.setPasswordConfirm(""),l([!1,!1,!1,!1]),console.log("response after create:",r)),t.next=36;break;case 32:t.prev=32,t.t0=t.catch(25),e.makeMessage("ERROR - Could not register",!0),console.log("error::",t.t0);case 36:case"end":return t.stop()}}),t,null,[[25,32]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"card px-sm-4 mt-2 login-card hv-center shadow"},r.a.createElement("form",{className:"p-2"},r.a.createElement("div",{className:"form-group text-left mt-3"},r.a.createElement("label",{className:"font-weight-bold"},"Username for login"),r.a.createElement("input",{type:"text",value:e.username,className:o,id:"username",placeholder:"Enter your username",onChange:function(t){var a=t.target;return e.setUsername(a.value)}})),r.a.createElement("div",{className:"form-group text-left mt-3"},r.a.createElement("label",{className:"font-weight-bold"},"Name"),r.a.createElement("input",{type:"text",value:e.name,className:c,id:"name",placeholder:"Enter your name",onChange:function(t){var a=t.target;return e.setName(a.value)}})),r.a.createElement("div",{className:"form-group text-left mt-4"},r.a.createElement("label",{className:"font-weight-bold"},"Password"),r.a.createElement("input",{type:"password",className:d,id:"password",placeholder:"Password",value:e.password,onChange:function(t){var a=t.target;return e.setPassword(a.value)}})),r.a.createElement("div",{className:"form-group text-left mt-4"},r.a.createElement("label",{className:"font-weight-bold"},"Confirm your password"),r.a.createElement("input",{type:"password",className:b,id:"passwordConfirm",placeholder:"Confirm your password",value:e.passwordConfirm,onChange:function(t){var a=t.target;return e.setPasswordConfirm(a.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-block btn-dark my-5 px-5 py-3 submitBtn",onClick:f},"CREATE NEW ACCOUNT"),r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("p",{className:"my-2"}," Already have an account?"),r.a.createElement("button",{className:"btn btn-info my-2 px-5 save-btn",type:"button",onClick:e.switchToRegister},"Log in here"))))},f=function(e){var t=e.makeMessage,a=e.blogServiceCreate,s=e.blogServiceGetOne,l=e.toggleAddNewBlog,o=e.setBlogs,c=e.blogs,d=e.username,b=Object(n.useState)(""),f=Object(m.a)(b,2),g=f[0],p=f[1],h=Object(n.useState)(""),E=Object(m.a)(h,2),v=E[0],k=E[1],w=Object(n.useState)(""),N=Object(m.a)(w,2),x=N[0],y=N[1],O=Object(n.useState)([!1,!1,!1]),j=Object(m.a)(O,2),B=j[0],L=j[1],C=B[0]?"form-control notFilledForm":"form-control",S=B[1]?"form-control notFilledForm":"form-control",A=B[2]?"form-control notFilledForm":"form-control",T=function(){var e=Object(u.a)(i.a.mark((function e(n){var r,u,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==g){e.next=7;break}return t("Please fill in the Title",!0),L([!0,!1,!1]),e.abrupt("return");case 7:if(""!==v){e.next=13;break}return t("Please fill in the Author",!0),L([!1,!0,!1]),e.abrupt("return");case 13:if(""!==x){e.next=17;break}return t("Please fill in the URL",!0),L([!1,!1,!0]),e.abrupt("return");case 17:return r={title:g,author:v,url:x},e.prev=18,e.next=21,a(r);case 21:if(!(u=e.sent)){e.next=36;break}return t('Blog "'.concat(g,'" was added')),p(""),k(""),y(""),L(!1,!1,!1),l(),e.next=31,s(u);case 31:m=e.sent,console.log("NewBlog",m),delete m.user,m.user={username:d},o(c.concat(m));case 36:e.next=42;break;case 38:e.prev=38,e.t0=e.catch(18),t("ERROR - Blog was not added",!0),console.log("error::",e.t0);case 42:case"end":return e.stop()}}),e,null,[[18,38]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"card px-3 mt-2 mb-5 addBlog-card hv-center shadow-lg addBlog-panel"},r.a.createElement("h3",{className:"text-center py-3"},"Add blog:"),r.a.createElement("form",{onSubmit:T},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"inputTitle",className:"col-sm-3 col-md-2 col-form-label font-weight-bold pl-sm-4"},"Title*:"),r.a.createElement("div",{className:"col-sm-9 col-md-10 pr-sm-4"},r.a.createElement("input",{type:"text",className:C,id:"inputTitle",placeholder:"Enter title",value:g,onChange:function(e){var t=e.target;return p(t.value)}}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"inputAuthor",className:"col-sm-3 col-md-2 col-form-label font-weight-bold  pl-sm-4"},"Author*:"),r.a.createElement("div",{className:"col-sm-9 col-md-10 pr-sm-4"},r.a.createElement("input",{type:"text",className:S,id:"inputAuthor",placeholder:"Enter author",value:v,onChange:function(e){var t=e.target;return k(t.value)}}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"inputURL",className:"col-sm-3 col-md-2 col-form-label font-weight-bold  pl-sm-4"},"URL*:"),r.a.createElement("div",{className:"col-sm-9 col-md-10 pr-sm-4"},r.a.createElement("input",{type:"text",className:A,id:"inputURL",placeholder:"Enter URL",value:x,onChange:function(e){var t=e.target;return y(t.value)}}),r.a.createElement("small",{id:"help",className:"form-text text-muted"},"* must be provided"))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("button",{type:"submit",className:"btn btn-info px-5 save-btn mr-4 mb-2",onClick:T},"Save"),r.a.createElement("button",{type:"button",className:"btn btn-danger px-5 cancel-btn mb-2 ",onClick:l},"Cancel")))))},g=a(5),p=a.n(g),h="/api/blogs",E=null;var v=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("token:",E),a={headers:{Authorization:E}},e.next=4,p.a.post(h,t,a);case 4:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("token:",E),a={headers:{Authorization:E}},n=h+"/"+t.id,e.next=5,p.a.delete(n,a);case 5:return r=e.sent,e.abrupt("return",r.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w={getAll:function(){return p.a.get(h).then((function(e){return e.data}))},setToken:function(e){E="bearer ".concat(e)},create:v,put:function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=h+"/"+t.id,console.log(a),n={headers:{Authorization:E}},e.next=5,p.a.put(a,t,n);case 5:return r=e.sent,console.log("Put METHDON, data:",r.data),e.abrupt("return",r.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteBlog:k,getOne:function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=h+"/"+t.id,e.next=3,p.a.get(a);case 3:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=a(46),x=function(e){var t=e.blog,a=e.blogs,s=e.setBlogs,l=e.makeMessage,o=e.user,c=e.blogServiceUpdate,d=Object(n.useState)(!1),b=Object(m.a)(d,2),f=b[0],g=b[1],p=Object(n.useState)(t.likes),h=Object(m.a)(p,2),E=h[0],v=h[1],k=Object(n.useState)(!1),x=Object(m.a)(k,2),y=x[0],O=x[1],j=function(){var e=Object(u.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("deleting blog"),n.preventDefault(),r=t,!window.confirm('Do you really want to delete "'.concat(r.title,'" from your phonebook?'))){e.next=10;break}return e.next=6,w.deleteBlog(r);case 6:s(a.filter((function(e){return e.id!==r.id}))),l("Blog was deleted!"),e.next=11;break;case 10:l("Blog was not deleted",!0);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(i.a.mark((function e(a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n={id:t.id,user:t.user,author:t.author,likes:E+1,title:t.title,url:t.url},e.next=4,c(n);case 4:return console.log("like given"),v(E+1),O(!0),e.next=9,w.getAll();case 9:r=e.sent,s(r),setTimeout((function(){O(!1)}),3e3);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"border-left border-top  bg-white rounded my-4 blogHeader"},r.a.createElement("div",{className:"bigLeftBorder border-dark ml-0 pl-2 py-2"},r.a.createElement("div",{className:"d-flex"},r.a.createElement("h5",{className:"py-1 mb-2"},t.title," ",r.a.createElement("span",{className:"text-muted"}," by ",t.author," ")),r.a.createElement("button",{className:"btn btn-sm btn-info px-2 px-sm-4 py-1 ml-auto mr-1 mr-sm-3 align-self-center t_DetailsBtn",onClick:function(){g(!f),console.log("toggle details")}},f?"Hide details":"Show details")),f?r.a.createElement("div",{className:"t_detailsDiv"},r.a.createElement("p",{className:"mb-1"},"URL: ",r.a.createElement("a",{href:t.url},t.url)),r.a.createElement("p",{className:"mb-1 t_likesCount"},"Likes: ",E,r.a.createElement("button",{onClick:B,className:"btn btn-sm btn-secondary py-0 px-3 ml-4 font-weight-bold t_LikeBtn",disabled:y},"Like",r.a.createElement(N.a,{size:18,className:"ml-1  font-weight-bold"}))),r.a.createElement("p",{className:"mb-1"},"User: ",t.user.username),t.user.username===o.username||"string"===typeof t.user?r.a.createElement("button",{className:"btn btn-sm btn-danger px-2 px-sm-4 py-1",onClick:j},"DELETE"):r.a.createElement("p",null,"You can not delete this blog. This was created by ",t.user.username)):null))},y=function(e){var t,a=e.message,n=e.error;return t="login"===e.screen?"login-notif":"add-blog-notif",null===a?null:r.a.createElement("div",{className:t,style:n?{color:"red",borderLeft:"solid 3px #FF0000bb"}:{color:"green",borderLeft:"solid 3px #008000bb"}},a)},O=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),s=a[0],l=a[1],o={display:s?"none":""},c={display:s?"":"none"},i=function(){l(!s)};return r.a.createElement("div",null,r.a.createElement("div",{style:o},r.a.createElement("button",{onClick:i,className:"btn btn-md btn-light btn-block py-2 px-3 border border-dark logout-btn"},"Show ",e.buttonLabel)),r.a.createElement("div",{style:c},r.a.createElement("button",{onClick:i,className:"btn btn-light py-2 px-3 btn-block logout-btn"},"Hide ",e.buttonLabel),e.children))},j=function(e){var t=e.registeredUsers.map((function(e){return r.a.createElement("li",{key:e.id}," ",e.username," (",e.blogs.length," blogs) ")})),a=e.registeredUsers.filter((function(e){return 0!==e.blogs.length})).map((function(e){return r.a.createElement("li",{key:e.id}," ",e.username," (",e.blogs.length," blogs) ")}));return r.a.createElement("div",{className:"container grid-stats-area mt-3"},r.a.createElement("div",{className:"grid-stats-a"},r.a.createElement(O,{buttonLabel:"Info about registered users and blogs:"},r.a.createElement("ul",{className:"mt-2"},t))),r.a.createElement("div",{className:"grid-stats-b"},r.a.createElement(O,{buttonLabel:"Users with at least one blog:"},r.a.createElement("ul",{className:"mt-2"},a))),r.a.createElement("div",{className:"grid-stats-c"},r.a.createElement(O,{buttonLabel:"additional info:"},r.a.createElement("h5",{className:"mt-2"},"Author with most likes is:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,e.stats.mostLikesUser)," with ",e.stats.mostLikes," likes total, on his/her ",r.a.createElement("em",null,e.stats.mostLikesNumberOfBlogs)," blogs. That is, on average ",Math.round(e.stats.mostLikedBlogLikes/e.stats.mostLikesNumberOfBlogs*1e3)/1e3," likes per blog.")),r.a.createElement("h5",null,"The most liked blog is:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,'"',e.stats.mostLikedBlogTitle,'"')," ",r.a.createElement("em",null,"by ",e.stats.mostlikedBlogUser)," with ",e.stats.mostLikedBlogLikes," likes.")),r.a.createElement("h5",null,"Author with most blogs is:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,'"',e.stats.mostBlogs.Author,'"')," with totaly ",r.a.createElement("em",null,e.stats.mostBlogs.blogs)," blogs. On all of his blogs he has ",r.a.createElement("em",null,e.stats.mostBlogs.likes)," likes. That is, on average ",Math.round(e.stats.mostBlogs.likes/e.stats.mostBlogs.blogs*1e3)/1e3," likes per blog.")))))},B={login:function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("/api/login",t);case 2:return a=e.sent,console.log(a),e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L={register:function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("/api/users",t);case 2:return a=e.sent,console.log(a),e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(){return r.a.createElement("footer",{className:"footer-copyright page-footer"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("div",{className:""},"\xa9 2020 Pavel \u0160\u0165astn\xfd   ",r.a.createElement("a",{id:"info",className:"footerText",href:"https://paulicz44.github.io/stastnypavel.github.io/index.html"},"If you find a bug, please contact me."),r.a.createElement("a",{href:"https://www.linkedin.com/in/pavel-stastny-155539150",target:"blank",className:"footerText right"},"LinkedIn"),r.a.createElement("a",{href:"https://www.freecodecamp.org/paulicz44",target:"blank",className:"footerText right"},"FCC profile "),r.a.createElement("a",{href:"https://paulicz44.github.io/stastnypavel.github.io/index.html",target:"blank",className:"footerText right"},"My Github"),r.a.createElement("br",null))))},S=function(){return p.a.get("/api/users").then((function(e){return e.data}))},A=(a(43),function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],s=t[1],l=Object(n.useState)(""),c=Object(m.a)(l,2),g=c[0],p=c[1],h=Object(n.useState)(null),E=Object(m.a)(h,2),v=E[0],k=E[1],N=Object(n.useState)(""),O=Object(m.a)(N,2),A=O[0],T=O[1],U=Object(n.useState)(""),P=Object(m.a)(U,2),F=P[0],M=P[1],R=Object(n.useState)(""),I=Object(m.a)(R,2),D=I[0],z=I[1],G=Object(n.useState)(""),W=Object(m.a)(G,2),H=W[0],J=W[1],_=Object(n.useState)(!1),Y=Object(m.a)(_,2),q=Y[0],K=Y[1],Q=Object(n.useState)(!1),V=Object(m.a)(Q,2),X=V[0],Z=V[1],$=Object(n.useState)(!1),ee=Object(m.a)($,2),te=ee[0],ae=ee[1],ne=Object(n.useState)([]),re=Object(m.a)(ne,2),se=re[0],le=re[1],oe=Object(n.useState)({mostLikes:0,mostLikesUser:"",mostLikedBlogTitle:"",mostlikedBlogUser:"",mostLikedBlogLikes:0,mostBlogs:"",mostLikesNumberOfBlogs:0}),ce=Object(m.a)(oe,2),ie=ce[0],ue=ce[1];Object(n.useEffect)((function(){w.getAll().then((function(e){return s(e)}))}),[]),Object(n.useEffect)((function(){S().then((function(e){return le(e)}))}),[]),Object(n.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogAppUser");if(e){var t=JSON.parse(e);console.log("Local storage",t.token),k(t),w.setToken(t.token)}else console.log("Local storage empty, you have to login")}),[]);var me=function(){Z(!X),console.log(X)},de={display:X?"":"none"},be=function(e,t){var a;a=!!H,t&&K(!0),J(e),a&&setTimeout((function(){t&&K(!0),J(e),setTimeout((function(){J(null),K(!1)}),3e3)}),3300),setTimeout((function(){a||(J(null),K(!1))}),3e3)},fe=function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,B.login({username:g,password:A});case 4:a=e.sent,w.setToken(a.token),k(a),p(""),T(""),be("You were logged in"),window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(a)),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0),be("Wrong credentials",!0);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),ge=function(e){e.preventDefault(),T(""),ae(!te)},pe=function(e){w.put(e).then((function(){be('you liked "'.concat(e.title,'" by ').concat(e.author))})).catch((function(e){J("error updating likes",!0),console.error(e)}))},he=function(e){var t={},a=[];e.forEach((function(e){if(-1===a.findIndex((function(t){return t.Author===e.author})))a.push({Author:e.author,likes:e.likes,numberOfBlogs:1});else{var t=a.findIndex((function(t){return t.Author===e.author}));a[t].likes+=e.likes,a[t].numberOfBlogs++}}));var n=Math.max.apply(Math,Object(o.a)(a.map((function(e){return e.likes}))).concat([0]));return a.forEach((function(){var e=a.findIndex((function(e){return e.likes===n}));e>-1&&(t=a[e])})),t},Ee=function(e){var t={title:"",author:"",likes:0};return e.forEach((function(e){e.likes>t.likes&&(t={title:e.title,author:e.author,likes:e.likes})})),t};return Object(n.useEffect)((function(){var e=he(a),t=Ee(a),n=function(e){var t=[],a={};e.forEach((function(e){if(-1===t.findIndex((function(t){return t.Author===e.author})))t.push({Author:e.author,blogs:1,likes:e.likes});else{var a=t.findIndex((function(t){return t.Author===e.author}));t[a].blogs++,t[a].likes+=e.likes}}));var n=Math.max.apply(Math,Object(o.a)(t.map((function(e){return e.blogs}))).concat([0]));return t.forEach((function(){var e=t.findIndex((function(e){return e.blogs===n}));e>-1&&(a=t[e])})),console.log("BestAUth",a),a}(a);ue({mostLikes:e.likes,mostLikesUser:e.Author,mostLikesNumberOfBlogs:e.numberOfBlogs,mostLikedBlogTitle:t.title,mostlikedBlogUser:t.author,mostLikedBlogLikes:t.likes,mostBlogs:n})}),[a]),null===v&&!1===te?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center my-5"},"BLOGS APP"),r.a.createElement("h5",{className:"text-center m-4"},"Log in to application please"),r.a.createElement("div",{className:"wrapNotif"},r.a.createElement(y,{message:H,error:q,screen:"login"})),r.a.createElement(d,{handleLogin:fe,username:g,setUsername:p,password:A,setPassword:T,switchToRegister:ge}))):null===v&&!0===te?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center my-5"},"BLOGS APP"),r.a.createElement("h5",{className:"text-center m-4"},"Register to application"),r.a.createElement("div",{className:"wrapNotif"},r.a.createElement(y,{message:H,error:q,screen:"login"})),r.a.createElement(b,{username:g,setUsername:p,password:A,setPassword:T,passwordConfirm:F,setName:z,name:D,setPasswordConfirm:M,handleCreateAccount:function(e){e.preventDefault(),console.log("Try to create an account")},switchToRegister:ge,makeMessage:be,registerService:L.register}))):r.a.createElement("main",null,r.a.createElement("header",{className:"bg-black pt-5 pb-2 mb-5"},r.a.createElement("h1",{className:"text-center text-light"},"BLOGS APP"),r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"text-right text-white-50"},"Logged as ",v.username,". Welcome back!",r.a.createElement("button",{onClick:function(){console.log("logging out"),k(null),window.localStorage.removeItem("loggedBlogAppUser"),be("You were logged out",!0)},className:"btn btn-dark btn-sm px-4 ml-4 logout-btn"},"Log Out")))),r.a.createElement("section",{className:"container appWrapper"},r.a.createElement("div",{className:"wrapNotif"},r.a.createElement(y,{message:H,error:q,screen:"blogList"})),r.a.createElement("button",{onClick:me,className:"btn btn-block btn-dark addBlog-card p-3 my-3 mb-5 addBlog-Btn"},"CREATE A NEW BLOG"),r.a.createElement("div",{style:de},r.a.createElement(f,{setBlogs:s,blogs:a,makeMessage:be,toggleAddNewBlog:me,user:v,blogServiceCreate:w.create,blogServiceGetOne:w.getOne,username:v.username})),r.a.createElement("section",{className:"blogSection"},r.a.createElement("h3",{className:"font-weight-bolder"},"Saved blogs:"),r.a.createElement("div",{className:"line"}),a.sort((function(e,t){return t.likes-e.likes})).map((function(e){return r.a.createElement(x,{key:e.id,blog:e,user:v,setBlogs:s,blogs:a,makeMessage:be,blogServiceUpdate:pe})})))),r.a.createElement(j,{stats:ie,blogs:a,mostLikes:he,favoriteBlog:Ee,registeredUsers:se}),r.a.createElement(C,null))});l.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.05963ab6.chunk.js.map