(this.webpackJsonpform=this.webpackJsonpform||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(4),c=a.n(r),u=(a(9),a(2)),j=a(0),l=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(""),c=Object(u.a)(r,2),l=c[0],i=c[1],o=Object(n.useState)(""),b=Object(u.a)(o,2),m=b[0],p=b[1],O=Object(n.useState)(""),d=Object(u.a)(O,2),_=d[0],h=d[1],g=Object(n.useState)(""),x=Object(u.a)(g,2),v=x[0],f=x[1],N=Object(n.useState)(""),S=Object(u.a)(N,2),w=S[0],q=S[1],k=Object(n.useState)(!1),C=Object(u.a)(k,2),y=C[0],B=C[1],F=Object(n.useState)(!1),P=Object(u.a)(F,2),U=P[0],z=P[1],A=Object(n.useState)(!1),D=Object(u.a)(A,2),E=D[0],I=D[1],J=Object(n.useState)(!1),Z=Object(u.a)(J,2),L=Z[0],M=Z[1],$=Object(n.useState)(!1),G=Object(u.a)($,2),H=G[0],K=G[1],Q=Object(n.useState)("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0435 \u0438\u043c\u044f"),R=Object(u.a)(Q,2),T=R[0],V=R[1],W=Object(n.useState)("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"),X=Object(u.a)(W,2),Y=X[0],ee=X[1],te=Object(n.useState)("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0435 \u0438\u043c\u044f"),ae=Object(u.a)(te,2),ne=ae[0],se=ae[1],re=Object(n.useState)("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"),ce=Object(u.a)(re,2),ue=ce[0],je=ce[1],le=Object(n.useState)("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 \u043f\u043e\u0447\u0442\u044b"),ie=Object(u.a)(le,2),oe=ie[0],be=ie[1],me=function(){s(!a),i(""),p(""),h(""),f(""),q("")},pe=function(e){switch(e.target.name){case"username":B(!0);break;case"password":z(!0);break;case"username1":I(!0);break;case"password1":M(!0);break;case"email":K(!0)}};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("form",{className:"form form--wrapper",children:a?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"name form__name",children:Object(j.jsx)("p",{className:"name__text",children:"Sign up"})}),Object(j.jsxs)("div",{className:"input form__input",children:[Object(j.jsx)("input",{value:l,name:"username",className:"input__username",required:"required",placeholder:"Username",onBlur:function(e){return pe(e)},onChange:function(e){return function(e){i(e.target.value),(e.target.value.length<1||e.target.value.length>20)&&V("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0435 \u0438\u043c\u044f"),e.target.value?V(""):V("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0435 \u0438\u043c\u044f")}(e)}}),y&&T&&Object(j.jsx)("span",{className:"input__error",children:T}),Object(j.jsx)("input",{value:w,type:"email",name:"email",className:"input__email",required:"required",placeholder:"Email",onBlur:function(e){return pe(e)},onChange:function(e){return function(e){q(e.target.value),/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e.target.value).toLowerCase())?be(""):be("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 \u043f\u043e\u0447\u0442\u044b")}(e)}}),H&&oe&&Object(j.jsx)("span",{className:"input__error",children:T}),Object(j.jsx)("input",{value:m,name:"password",className:"input__password",type:"password",placeholder:"Password",required:"required",onBlur:function(e){return pe(e)},onChange:function(e){return p((t=e).target.value),(t.target.value.length<3||t.target.value.length>20)&&ee("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0439\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"),t.target.value,void ee("");var t}}),U&&Y&&Object(j.jsx)("span",{className:"input__error",children:Y})]}),Object(j.jsx)("div",{className:"prompt form__prompt",children:Object(j.jsx)("p",{className:"prompt__text",onClick:me,children:"Do you have an account? Sign in?"})}),Object(j.jsx)("div",{className:"button form__button",children:Object(j.jsxs)("button",{href:"#",className:"button__signin",children:[Object(j.jsx)("span",{className:"button__span"}),Object(j.jsx)("span",{className:"button__span"}),Object(j.jsx)("span",{className:"button__span"}),Object(j.jsx)("span",{className:"button__span"}),"Sign UP"]})})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"name form__name",children:Object(j.jsx)("p",{className:"name__text",children:"Sign in"})}),Object(j.jsxs)("div",{className:"input form__input",children:[Object(j.jsx)("input",{value:_,name:"username1",className:"input__username",required:"required",placeholder:"Username",onBlur:function(e){return pe(e)},onChange:function(e){return function(e){h(e.target.value),(e.target.value.length<1||e.target.value.length>20)&&se("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0435 \u0438\u043c\u044f"),e.target.value?se(""):V("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0435 \u0438\u043c\u044f")}(e)}}),E&&ne&&Object(j.jsx)("span",{className:"input__error",children:ne}),Object(j.jsx)("input",{value:v,name:"password1",className:"input__password",type:"password",placeholder:"Password",required:"required",onBlur:function(e){return pe(e)},onChange:function(e){return f((t=e).target.value),(t.target.value.length<3||t.target.value.length>20)&&je("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0439\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"),t.target.value,void je("");var t}}),L&&ue&&Object(j.jsx)("span",{className:"input__error",children:ue})]}),Object(j.jsx)("div",{className:"prompt form__prompt",children:Object(j.jsx)("p",{className:"prompt__text",onClick:me,children:"Do you haven't an account? Sign up?"})}),Object(j.jsx)("div",{className:"button form__button",children:Object(j.jsxs)("button",{href:"#",className:"button__signin",children:[Object(j.jsx)("span",{className:"button__span"}),Object(j.jsx)("span",{className:"button__span"}),Object(j.jsx)("span",{className:"button__span"}),Object(j.jsx)("span",{className:"button__span"}),"Sign IN"]})})]})})})},i=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(l,{})})};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(i,{})}),document.getElementById("root"))},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.d984b832.chunk.js.map