(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{296:function(e,a,t){e.exports={dialog:"DialogItem_dialog__2_IF2",dialog__img:"DialogItem_dialog__img__tygWo","dialog__img-container":"DialogItem_dialog__img-container__18I10",dialog__name:"DialogItem_dialog__name__1q6Md"}},297:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2vBP4",dialogsItems:"Dialogs_dialogsItems__1j9Jy",messages:"Dialogs_messages__35TQw",sendWriteAndEmoji:"Dialogs_sendWriteAndEmoji__25eJS",active:"Dialogs_active__2O8pi"}},298:function(e,a,t){e.exports={messages:"Message_messages__2_fE0",messages__send:"Message_messages__send__1XTVO",messages__get:"Message_messages__get__g8kyB",messages__get__img:"Message_messages__get__img__2tm5M"}},299:function(e,a,t){e.exports={sendWriteAndEmoji:"SendWriteAndEmoji_sendWriteAndEmoji__31OCd",emoji:"SendWriteAndEmoji_emoji__165MK",write:"SendWriteAndEmoji_write__2yF7M",send:"SendWriteAndEmoji_send__iiZif",textarea:"SendWriteAndEmoji_textarea__3DfXg"}},300:function(e,a,t){"use strict";t.r(a);var n=t(24),s=t(25),i=t(27),o=t(28),c=t(0),r=t.n(c),m=t(10),l=t(8),g=t(9),d=function(e){return{isAuth:e.auth.isAuth}},_=t(12),u=t(50),E=t(296),f=t.n(E),b=function(e){var a=Object(c.useState)("goldenrod"),t=Object(u.a)(a,2),n=(t[0],t[1],"/Dialogs/"+e.id);return r.a.createElement("div",{className:"".concat(f.a.dialog)},r.a.createElement("img",{className:"".concat(f.a.dialog__img," ").concat(f.a["dialog__img-container"]),src:e.avaImg}),r.a.createElement(_.c,{className:"".concat(f.a.dialog__name," ").concat(f.a["dialog__name-container"]),to:n},e.name))},p=t(297),j=t.n(p),h=t(298),v=t.n(h),O=function(e){return r.a.createElement("div",{className:v.a.messages},e.messages.map((function(a){return r.a.createElement(r.a.Fragment,null,a.send&&r.a.createElement("div",{className:"".concat(v.a.messages__send," ").concat(v.a["messages__send-container"])},a.send),a.get&&r.a.createElement("div",{className:"".concat(v.a.messages__get," ").concat(v.a["messages__get-container"])},r.a.createElement("img",{className:"".concat(v.a.messages__get__img," ").concat(v.a["messages__get__img-container"]),src:e.avatar}),a.get))})))},y=Object(m.b)((function(e){var a=+window.location.href[window.location.href.length-1];return{messages:e.dialogsPage.messagesData[a],avatar:e.dialogsPage.dialogsData[a-1].avaImg}}))(O),D=t(128),w=t(129),A=t(130),N=t(126),M=t(127),I=t(36),x=t(16),W=t(299),S=t.n(W),k=Object(N.a)(10),P=Object(M.a)(1),C=Object(A.a)({form:"SendWriteAndEmojiForm"})((function(e){return r.a.createElement("form",{className:S.a.sendWriteAndEmoji,onSubmit:e.handleSubmit},r.a.createElement("button",{className:S.a.emoji},"emoji"),r.a.createElement(w.a,{component:x.b,name:"newMessage",placeholder:"enter your message",validate:[I.a,k,P]}),r.a.createElement("button",{className:S.a.send,onClick:function(){e.sendMessage()}},"send"))})),F=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(n.a)(this,t);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(e=a.call.apply(a,[this].concat(i))).addNewMessage=function(a){e.props.sendMessage(a.newMessage)},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(C,Object.assign({},this.props,{onSubmit:this.addNewMessage}))}}]),t}(r.a.Component),J=Object(m.b)((function(e){return{messageText:e.dialogsPage.messageText}}),(function(e){return{sendMessage:function(a){var t=window.location.href[window.location.href.length-1];t==+t&&e(Object(D.a)(t,a))}}}))(F),T=function(e){var a=e.dialogsPage.dialogsData.map((function(e,a){return r.a.createElement("div",{id:"a".concat(a),onClick:function(e){return function(e){e.target.matches("a")&&function(){var e=document.querySelector("#dialogs");Array.from(e.children).forEach((function(e){return e.style.background=""})),document.getElementById("a".concat(a)).style.background="goldenrod"}()}(e)}},r.a.createElement(b,{name:e.name,id:e.id,avaImg:e.avaImg}))}));return r.a.createElement(_.a,null,r.a.createElement("div",{className:j.a.dialogs},r.a.createElement("div",{className:j.a.dialogsItems,id:"dialogs"},a),r.a.createElement("div",{className:j.a.messages},r.a.createElement(g.b,{exact:!0,path:"/Dialogs/1"},r.a.createElement(y,null)),r.a.createElement(g.b,{exact:!0,path:"/Dialogs/2"},r.a.createElement(y,null)),r.a.createElement(g.b,{exact:!0,path:"/Dialogs/3"},r.a.createElement(y,null)),r.a.createElement(g.b,{exact:!0,path:"/Dialogs/4"},r.a.createElement(y,null)),r.a.createElement(g.b,{exact:!0,path:"/Dialogs/5"},r.a.createElement(y,null))),r.a.createElement("div",{className:j.a.sendWriteAndEmoji},r.a.createElement(J,{store:e.store}))))},B=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(T,this.props)}}]),t}(r.a.Component);a.default=Object(l.d)(Object(m.b)((function(e){return{dialogsPage:e.dialogsPage}})),(function(e){var a=function(a){Object(o.a)(c,a);var t=Object(i.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(g.a,{to:"/login"})}}]),c}(r.a.Component);return Object(m.b)(d)(a)}))(B)}}]);
//# sourceMappingURL=3.3756c26d.chunk.js.map