(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,a){e.exports={nav:"Navbar_nav__3WeBp",item:"Navbar_item__2IB2d",active:"Navbar_active__2Mf98",nav__friends__img:"Navbar_nav__friends__img__6fRB-"}},126:function(e,t,a){"use strict";t.a=function(e){return function(t){if(t&&t.length>e)return"watafak, max is ".concat(e)}}},127:function(e,t,a){"use strict";t.a=function(e){return function(t){if(t&&t.length<e)return"watafak, max is ".concat(e)}}},128:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(41),r=a(7),s={dialogsData:[{id:1,name:"Dimych",avaImg:"https://i.insider.com/5f341b9e5fa9a45644447e89?width=856"},{id:2,name:"Egor",avaImg:"https://yt3.ggpht.com/a/AATXAJy96YWKawk2Uu3QncQ6WFxQCYADSTyil3zAS5vj5Q=s88-c-k-c0x00ffffff-no-rj"},{id:3,name:"Mark",avaImg:"https://yt3.ggpht.com/a/AATXAJxegcKj7lnz8MCMgcAz-gpSgPs5u5yMvynOEWiL=s88-c-k-c0x00ffffff-no-rj"},{id:4,name:"Alex",avaImg:"https://rslang-team42-andreimedvedevsaratov.netlify.app/assets/img/Aliaksei_Palanevich.jpg"},{id:5,name:"Lex",avaImg:"https://yt3.ggpht.com/a/AATXAJxpBp_t03f_AAa4sr6GhAGyqs-vMULVV-v7F7jVoA=s176-c-k-c0x00ffffff-no-rj-mo"}],messagesData:{1:[{id:1,send:"Hi"},{id:2,get:"Howwww"},{id:3,get:"1mln"},{id:4,get:"until 30 y.o."}],2:[{id:1,send:"rfdsfsd"},{id:2,get:"fds"},{id:3,send:"fsd"},{id:4,get:"fdsfsdf 30 y.o."}],3:[{id:1,send:"Hfdsi"},{id:2,get:"fds"},{id:3,send:"fds"}],4:[{id:1,send:"Howwww"},{id:2,get:"until 30 y.o."}],5:[{id:1,send:"Hi"},{id:2,send:"1mln"},{id:3,get:"until 30 y.o."}]}},o=function(e,t){return{type:"ADD_MESSAGE",id:e,newMessage:t}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE":var a=Object(r.a)({},e);a.messagesData[t.id]=Object(n.a)(e.messagesData[t.id]);var o=a.messagesData[t.id],c={id:o[o.length-1].id+1,send:t.newMessage};return o.push(c),a;default:return e}}},135:function(e,t,a){e.exports={item:"Post_item__1sDLS"}},136:function(e,t,a){e.exports={content:"Profile_content__3RooB",subHeader:"Profile_subHeader__2Ioh3",posts:"Profile_posts__2mYdh"}},137:function(e,t,a){e.exports={subHeader:"SubHeader_subHeader__1JDK1"}},16:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return l}));var n=a(56),r=a(0),s=a.n(r),o=a(52),c=a.n(o),i=function(e){e.input;var t=e.meta,a=t.touched,n=t.error,r=(e.element,e.children),o=a&&n;return s.a.createElement("div",{className:c.a.formControl+" "+(o&&c.a.error)},r,o&&s.a.createElement("span",null,n))},u=function(e){var t=e.input,a=(e.meta,e.element,Object(n.a)(e,["input","meta","element"]));return s.a.createElement(i,e,s.a.createElement("textarea",Object.assign({},a,t)))},l=function(e){var t=e.input,a=(e.meta,e.element,Object(n.a)(e,["input","meta","element"]));return s.a.createElement(i,e,s.a.createElement("input",Object.assign({},a,t)))}},165:function(e,t,a){e.exports=a(295)},173:function(e,t,a){},193:function(e,t,a){},291:function(e,t,a){},292:function(e,t,a){},293:function(e,t,a){},294:function(e,t,a){},295:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(66),o=a.n(s),c=a(24),i=a(25),u=a(27),l=a(28),m=a(10),p=a(9),f=a(12),d=a(8),g=(a(173),a(6)),h=a.n(g),v=a(14),E=a(7),b=a(26),O=a(133).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"86798368-ca86-4eaa-8c39-db3db0a87b46"}}),w={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return O.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},auth:function(){return O.get("auth/me").then((function(e){return e.data}))},unfollowUser:function(e){return O.delete("follow/".concat(e)).then((function(e){return e.data}))},followUser:function(e){return O.post("follow/".concat(e)).then((function(e){return e.data}))},setUsers:function(e){return _.setUsers(e)}},_={setUsers:function(e){return O.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return O.get("profile/status/".concat(e))},updateStatus:function(e){return O.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),O.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return O.put("profile",Object(E.a)({},e))}},S=function(){return O.get("auth/me")},P=function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return O.post("auth/login",{email:e,password:t,rememberMe:a,captcha:n})},y=function(){return O.delete("auth/login")},j=function(){return O.get("security/get-captcha-url")},A=w,C="samurai-network/auth/SET_USER_DATA",U={email:null,id:null,login:null,isAuth:!1,captchaUrl:null},T=function(e,t,a,n){return{type:C,payload:{email:e,id:t,login:a,isAuth:n}}},k=function(e){return{type:"samurai-network/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},x=function(){return function(){var e=Object(v.a)(h.a.mark((function e(t){var a,n,r,s,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:0===(a=e.sent).data.resultCode&&(n=a.data.data,r=n.email,s=n.id,o=n.login,t(T(r,s,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(){return function(){var e=Object(v.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:a=e.sent,n=a.data.url,t(k(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"samurai-network/auth/GET_CAPTCHA_URL_SUCCESS":case C:return Object(E.a)({},e,{},t.payload);default:return e}},L=a(57),F=a.n(L),H=function(e){return r.a.createElement("header",{className:F.a.header},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png"}),r.a.createElement("div",{className:F.a.login},e.isAuth?r.a.createElement(f.c,{to:"/login",className:F.a.navlink,onClick:e.logout},"\ud83d\udd36 ",e.login):r.a.createElement(f.c,{to:"/login",className:F.a.navlink},"\ud83d\udd36 Login")))},D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(H,this.props)}}]),a}(r.a.Component),z=Object(m.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{auth:x,logout:function(){return function(){var e=Object(v.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0===y().resultCode&&t(T(null,null,null,!1));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(D),G=(a(193),a(129)),R=a(130),W=a(16),V=a(36),M=a(52),B=a.n(M),X=Object(R.a)({form:"login"})((function(e){var t=e.handleSubmit,a=e.error,n=e.captchaUrl;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement(G.a,{name:"email",placeholder:"email",component:W.a,validate:[V.a]})),r.a.createElement("div",null,r.a.createElement(G.a,{name:"password",placeholder:"password",component:W.a,validate:[V.a]})),r.a.createElement("div",null,r.a.createElement(G.a,{name:"rememberMe",type:"checkbox",component:W.a,validate:[]})),n&&r.a.createElement("img",{src:n}),n&&r.a.createElement(G.a,{placeholder:"password",name:"captcha",component:W.a,validate:[V.a]}),a&&r.a.createElement("div",{className:B.a.formSummaryError},a),r.a.createElement("div",null,r.a.createElement("button",null,"Sign in")))})),J=Object(m.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,a,n){return function(){var r=Object(v.a)(h.a.mark((function r(s){var o,c;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,P(e,t,a,n);case 2:0===(o=r.sent).data.resultCode?s(x()):(10===o.data.resultCode&&s(N()),c=o.data.messages.length>0?o.data.messages[0]:"some error",s(Object(b.a)("login",{message:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.login,a=e.isAuth,n=e.captchaUrl;return a?r.a.createElement(p.a,{to:"/Profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(X,{onSubmit:function(e){t(e.email,e.password,e.rememberMe,e.captcha)},captchaUrl:n}))})),K=(a(291),function(e){return r.a.createElement("div",null,"Music")}),Q=a(11),Y=a.n(Q),Z=Object(m.b)((function(e){return{friendsOnline:e.sidebar.friendsOnline}}))((function(e){return r.a.createElement("div",{className:Y.a.nav},r.a.createElement("nav",{className:Y.a.nav__links},r.a.createElement("div",{className:Y.a.item},r.a.createElement(f.c,{to:"/Profile",activeClassName:Y.a.active},"Profile")),r.a.createElement("div",{className:Y.a.item},r.a.createElement(f.c,{to:"/Dialogs",activeClassName:Y.a.active},"Dialogs")),r.a.createElement("div",{className:Y.a.item},r.a.createElement(f.c,{to:"/Users",activeClassName:Y.a.active},"Users")),r.a.createElement("div",{className:Y.a.item},r.a.createElement(f.c,{to:"/News",activeClassName:Y.a.active},"News")),r.a.createElement("div",{className:Y.a.item},r.a.createElement(f.c,{to:"/Music",activeClassName:Y.a.active},"Music")),r.a.createElement("div",{className:Y.a.item},r.a.createElement(f.c,{to:"/Settings",activeClassName:Y.a.active},"Settings"))),r.a.createElement("div",{className:Y.a.nav__friends},"FRIENDS \ud83d\udd02",r.a.createElement("br",null),e.friendsOnline.map((function(e){return r.a.createElement("span",null,r.a.createElement("img",{className:"".concat(Y.a.nav__friends__img," ").concat(Y.a["nav__friends__img-container"]),src:e}))}))))})),q=(a(292),function(e){return r.a.createElement("div",null,"News")}),$=a(41),ee={posts:[{id:1,message:"Hi, how are you?",likesCount:"20"},{id:2,message:"Its my first post",likesCount:"15"}],profile:null,status:""},te=function(e){return{type:"SET_STATUS",status:e}},ae=function(e){return function(){var t=Object(v.a)(h.a.mark((function t(a){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e||(e="12567"),t.next=3,_.setUsers(e);case 3:n=t.sent,a({type:"SET_USER_PROFILE",profile:n});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var a=Object(E.a)({},e);a.posts=Object($.a)(e.posts);var n={id:a.posts[a.posts.length-1].id+1,message:t.newPostText,likesCount:0};return a.posts.push(n),a.newPostText="",a;case"SET_USER_PROFILE":return Object(E.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(E.a)({},e,{status:t.status});case"DELETE_POST":return Object(E.a)({},e,{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case"SAVE_PHOTO_SUCCESS":return Object(E.a)({},e,{profile:Object(E.a)({},e.profile,{photos:t.photos})});default:return e}},re=a(50),se=a(40),oe=a.n(se),ce=a(43),ie=a.n(ce),ue=function(e){var t=Object(n.useState)(!1),a=Object(re.a)(t,2),s=a[0],o=a[1],c=Object(n.useState)(e.status),i=Object(re.a)(c,2),u=i[0],l=i[1];Object(n.useEffect)((function(){l(e.status)}),[e.status]);return r.a.createElement("div",{onDoubleClick:function(){o(!0)}},!s&&r.a.createElement("div",null,r.a.createElement("span",null,e.status)),s&&r.a.createElement("div",null,r.a.createElement("input",{onBlur:function(){o(!1),e.updateStatus(u)},value:u,onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onDoubleClick:"this.select()"})))},le=a(49),me=a.n(le),pe=a(94),fe=a.n(pe),de=Object(R.a)({form:"edit_profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement("button",null,"save")),n&&r.a.createElement("div",{className:fe.a.error},n),r.a.createElement("div",null,r.a.createElement("b",null,"Full Name"),r.a.createElement(G.a,{placeholder:"Full Name",name:"fullName",validate:[],component:W.a})),r.a.createElement("div",null,r.a.createElement("b",null,"Looking for a job"),r.a.createElement(G.a,{placeholder:"",name:"lookingForAJob",validate:[],component:W.a,type:"checkbox"})),r.a.createElement("div",null,r.a.createElement("b",null,"My professional skills"),r.a.createElement(G.a,{placeholder:"my profisiional skillds",name:"lookingForAJobDescription",validate:[],component:W.b})),r.a.createElement("div",null,r.a.createElement("b",null,"About me"),r.a.createElement(G.a,{placeholder:"about me",name:"aboutMe",validate:[],component:W.b})),r.a.createElement("div",null,r.a.createElement("b",null,"Contacts"),Object.keys(a.contacts).map((function(e){return r.a.createElement("div",{key:e,className:fe.a.contact},r.a.createElement("b",null,e,":",r.a.createElement(G.a,{placeholder:e,name:"contacts."+e,validate:[],component:W.a})))}))))})),ge=function(e){var t=e.userId,a=e.isOwner,n=e.goToEditMode;return r.a.createElement(r.a.Fragment,null,r.a.createElement("iframe",{src:"https://social-network.samuraijs.com/api/1.0/profile/".concat(t),width:"400",height:"auto"}),a&&r.a.createElement("span",null,r.a.createElement("button",{onClick:n},"edit")))},he=function(e){var t=e.profile,a=e.status,s=e.updateStatus,o=e.isOwner,c=e.savePhoto,i=e.saveProfile,u=Object(n.useState)(!1),l=Object(re.a)(u,2),m=l[0],p=l[1];if(!t)return r.a.createElement("img",{src:oe.a});return r.a.createElement("div",{className:ie.a.ava},r.a.createElement("img",{src:t.photos.large||me.a,className:ie.a.profileImage}),o&&r.a.createElement("input",{type:"file",className:ie.a.uploadImage,onChange:function(e){e.target.files.length&&c(e.target.files[0])}}),r.a.createElement("div",{className:ie.a.about},m?r.a.createElement(de,{initialValues:t,profile:t,onSubmit:function(e){i(e).then((function(){p(!1)}))}}):r.a.createElement(ge,{userId:t.userId,isOwner:o,goToEditMode:function(){p(!0)}})),r.a.createElement("div",{className:ie.a.status},r.a.createElement(ue,{status:a,updateStatus:s})))},ve=a(126),Ee=a(127),be=a(71),Oe=a.n(be),we=a(135),_e=a.n(we),Se=function(e){return r.a.createElement("div",{className:_e.a.item},r.a.createElement("img",{src:"https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"}),e.message,r.a.createElement("div",null,r.a.createElement("span",null,"like",e.likes)))},Pe=Object(ve.a)(10),ye=Object(Ee.a)(1),je=function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(G.a,{name:"newPostText",className:Oe.a.textarea,component:W.b,validate:[V.a,Pe,ye]}),r.a.createElement("button",{className:Oe.a.btn},"add post"))};je=Object(R.a)({form:"ProfileAddNewPostForm"})(je);var Ae=function(e){var t=e.posts.map((function(e){return r.a.createElement(Se,{message:e.message,likes:e.likesCount})}));return r.a.createElement("div",{className:Oe.a.posts},r.a.createElement(je,{onSubmit:function(t){e.addPost(t.newPostText)}}),"posts",t)},Ce=Object(m.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD_POST",newPostText:e}}(t))}}}))(Ae),Ue=a(136),Te=a.n(Ue),ke=a(137),xe=a.n(ke),Ne=function(){return r.a.createElement("div",{className:xe.a.subHeader},r.a.createElement("img",{src:"https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"}))},Ie=function(e){return r.a.createElement("div",{className:Te.a.content},r.a.createElement(Ne,null),r.a.createElement(he,{isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),r.a.createElement(Ce,null))},Le=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId),this.props.setUser(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return r.a.createElement(Ie,Object.assign({},this.props,{isOwner:12567===+this.props.match.params.userId,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),a}(r.a.Component),Fe=Object(d.d)(Object(m.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{setUser:ae,getStatus:function(e){return function(){var t=Object(v.a)(h.a.mark((function t(a){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.getStatus(e);case 2:n=t.sent,a(te(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(v.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.updateStatus(e);case 3:0===t.sent.data.resultCode&&a(te(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(v.a)(h.a.mark((function t(a){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.savePhoto(e);case 2:0===(n=t.sent).data.resultCode&&a({type:"SAVE_PHOTO_SUCCESS",photos:n.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(v.a)(h.a.mark((function t(a,n){var r,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.userId,t.next=3,_.saveProfile(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=9;break}a(ae(r)),t.next=11;break;case 9:return a(Object(b.a)("edit_profile",{_error:s.data.messages[0]})),t.abrupt("return",Promise.reject(s.data.messages[0]));case 11:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}}),p.g)(Le),He=(a(293),function(e){return r.a.createElement("div",null,"Settings")}),De={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingProgress:[]},ze=function(e){return{type:"FOLLOW",userId:e}},Ge=function(e){return{type:"UNFOLLOW",userId:e}},Re=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},We=function(e,t){return{type:"TOGGLE_FOLLOWING_PROGRESS",isFetching:e,userId:t}},Ve=function(){var e=Object(v.a)(h.a.mark((function e(t,a,n,r){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(We(!0,a)),e.next=3,n(a);case 3:0==e.sent.resultCode&&t(r(a)),t(We(!1,a));case 6:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(E.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(E.a)({},e,{followed:!0}):e}))});case"UNFOLLOW":return Object(E.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(E.a)({},e,{followed:!1}):e}))});case"SET_USERS":return Object(E.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(E.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(E.a)({},e,{totalUsersCount:t.count>40?40:t.count});case"TOGGLE_IS_FETCHING":return Object(E.a)({},e,{isFetching:t.isFetching});case"TOGGLE_FOLLOWING_PROGRESS":return Object(E.a)({},e,{followingProgress:t.isFetching?[].concat(Object($.a)(e.followingProgress),[t.userId]):e.followingProgress.filter((function(e){return e!=t.userId}))});default:return e}},Be=a(56),Xe=a(95),Je=a.n(Xe),Ke=function(e){for(var t=e.totalUsersCount,a=e.pageSize,n=e.currentPage,s=e.onPageChanged,o=Math.ceil(t/a),c=[],i=1;i<=o;i++)c.push(i);return r.a.createElement("div",{className:Je.a.pagination},c.map((function(e){return r.a.createElement("span",{className:n===e&&Je.a.selectedPage,onClick:function(){s(e)}},e)})))},Qe=a(42),Ye=a.n(Qe),Ze=function(e){var t=e.user,a=e.followingProgress,n=e.unfollowUser,s=e.followUser;return r.a.createElement("div",{key:t.id,className:Ye.a.profile},r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(f.c,{to:"Profile/"+t.id},r.a.createElement("img",{className:Ye.a.profile__img,src:t.photos.small?t.photos.small:me.a}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:a.some((function(e){return e==t.id})),onClick:function(){n(t.id)}},"unfollow"):r.a.createElement("button",{disabled:a.some((function(e){return e==t.id})),onClick:function(){s(t.id)}},"follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,"u.location.city"),r.a.createElement("div",null,"u.location.country"))))},qe=function(e){var t=e.totalUsersCount,a=e.pageSize,n=e.currentPage,s=e.onPageChanged,o=e.users,c=e.followingProgress,i=e.unfollowUser,u=e.followUser;Object(Be.a)(e,["totalUsersCount","pageSize","currentPage","onPageChanged","users","followingProgress","unfollowUser","followUser"]);return r.a.createElement("div",{className:Ye.a.container},r.a.createElement(Ke,{totalUsersCount:t,pageSize:a,currentPage:n,onPageChanged:s}),r.a.createElement("div",{className:Ye.a.template},o.map((function(e){return r.a.createElement(Ze,{user:e,key:e.id,followingProgress:c,unfollowUser:i,followUser:u})}))),r.a.createElement("button",null,"Get Users"))},$e=a(138),et=Object($e.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),tt=function(e){return e.usersPage.pageSize},at=function(e){return e.usersPage.totalUsersCount},nt=function(e){return e.usersPage.currentPage},rt=function(e){return e.usersPage.isFetching},st=function(e){return e.usersPage.followingProgress},ot=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.requestUsers(t,e.props.pageSize)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching&&r.a.createElement("img",{src:oe.a}),r.a.createElement(qe,Object.assign({},this.props,{onPageChanged:this.onPageChanged})))}}]),a}(r.a.Component),ct=Object(m.b)((function(e){return{users:et(e),pageSize:tt(e),totalUsersCount:at(e),currentPage:nt(e),isFetching:rt(e),followingProgress:st(e)}}),{follow:ze,unfollow:Ge,setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},toggleFollowingProgress:We,requestUsers:function(e,t){return function(){var a=Object(v.a)(h.a.mark((function a(n){var r;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(Re(!0)),a.next=3,A.getUsers(e,t);case 3:r=a.sent,n(Re(!1)),n({type:"SET_USERS",users:r.items}),n({type:"SET_TOTAL_USERS_COUNT",count:r.totalCount});case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},followUser:function(e){return function(){var t=Object(v.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Ve(a,e,A.followUser.bind(A),ze);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollowUser:function(e){return function(){var t=Object(v.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Ve(a,e,A.unfollowUser.bind(A),Ge);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(ot),it={initialized:!1,globalError:null},ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCES":return Object(E.a)({},e,{initialized:!0});default:return e}},lt=a(128),mt={friendsOnline:["https://i.insider.com/5f341b9e5fa9a45644447e89?width=856","https://yt3.ggpht.com/a/AATXAJy96YWKawk2Uu3QncQ6WFxQCYADSTyil3zAS5vj5Q=s88-c-k-c0x00ffffff-no-rj","https://yt3.ggpht.com/a/AATXAJxegcKj7lnz8MCMgcAz-gpSgPs5u5yMvynOEWiL=s88-c-k-c0x00ffffff-no-rj"]},pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt;arguments.length>1&&arguments[1];return e},ft=a(139),dt=a(131),gt=Object(d.c)({profilePage:ne,dialogsPage:lt.b,sidebar:pt,usersPage:Me,auth:I,form:dt.a,app:ut}),ht=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.d,vt=Object(d.e)(gt,ht(Object(d.a)(ft.a)));window.__store__=vt;var Et=vt,bt=function(e){return function(t){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(e,t))}},Ot=r.a.lazy((function(){return a.e(3).then(a.bind(null,300))})),wt=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(z,null),r.a.createElement(Z,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/"},r.a.createElement(p.a,{from:"/",to:"/Profile"})),r.a.createElement(p.b,{path:"/Profile/:userId?"},r.a.createElement(Fe,null)),r.a.createElement(p.b,{path:"/Dialogs/:convnId?"},bt(Ot)),r.a.createElement(p.b,{path:"/Users"},r.a.createElement(ct,null)),r.a.createElement(p.b,{path:"/News",component:q}),r.a.createElement(p.b,{path:"/Music",component:K}),r.a.createElement(p.b,{path:"/Settings",component:He}),r.a.createElement(p.b,{path:"/Login",component:J}),r.a.createElement(p.b,{path:"*",component:function(){return r.a.createElement("div",null,"404 NOT FOUND")}})))):r.a.createElement("img",{src:oe.a})}}]),a}(r.a.Component),_t=Object(d.d)(Object(m.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(x());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCES"})}))}}}))(wt),St=function(e){return r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.b,null,r.a.createElement(m.a,{store:Et},r.a.createElement(_t,{state:Et.getState()}))))};a(294),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(St,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,a){"use strict";t.a=function(e){if(!e)return"field is required"}},40:function(e,t,a){e.exports=a.p+"static/media/preloader.9064981b.svg"},42:function(e,t,a){e.exports={container:"Users_container__12D94",template:"Users_template__1R_9E",profile:"Users_profile__2lbTn",profile__img:"Users_profile__img__eVY0R",pagination:"Users_pagination__2c70h",selectedPage:"Users_selectedPage__qtG3P"}},43:function(e,t,a){e.exports={ava:"AvaDes_ava__3u1ez",uploadImage:"AvaDes_uploadImage__2KacR",about:"AvaDes_about__3-udk",status:"AvaDes_status__1lH--",profileImage:"AvaDes_profileImage__1zmeL"}},49:function(e,t){e.exports="data:image/png;base64,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"},52:function(e,t,a){e.exports={"form-control":"FormsControls_form-control__37Xgp",formControl:"FormsControls_formControl__1pWsA",error:"FormsControls_error__3Lo8x",formSummaryError:"FormsControls_formSummaryError__1NrUO"}},57:function(e,t,a){e.exports={header:"Header_header__1iS0c",login:"Header_login__1lRnK",navlink:"Header_navlink__3YBvh"}},71:function(e,t,a){e.exports={posts:"MyPosts_posts__RnC1C",btn:"MyPosts_btn__2m6Yq",textarea:"MyPosts_textarea__1pmOw"}},94:function(e,t,a){},95:function(e,t,a){e.exports={container:"style_container__iKZ1p",template:"style_template__TWf3Q",profile:"style_profile__6zdJO",profile__img:"style_profile__img__R4wOl",pagination:"style_pagination__3la6p",selectedPage:"style_selectedPage__2yUkM"}}},[[165,1,2]]]);
//# sourceMappingURL=main.5a1955ba.chunk.js.map