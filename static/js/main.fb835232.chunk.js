(this["webpackJsonpreact-form"]=this["webpackJsonpreact-form"]||[]).push([[0],{66:function(e,n,t){e.exports=t(76)},71:function(e,n,t){},76:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),l=t(59),o=t.n(l),u=(t(71),t(56)),c=t(2),i=t(3);function s(){var e=Object(c.a)(["\n  background: #fff;\n  width:400px;\n  box-shadow: 0 0 100px rgba(0, 0, 0, 0.6);\n\n  position: absolute;               \n  top: 50%;\n  left: 50%;                   \n  transform: translate(-50%, -50% )\n"]);return s=function(){return e},e}var m=i.b.div(s()),d=t(39),p=t(14),b=t(49);function f(){var e=Object(c.a)(["\n  padding: 10px;\n\n  form{\n    display: grid;\n    gap:10px;\n  }\n\n  h1{\n    color: pink;\n    text-align: center;\n  }\n\n  input{\n    border: 2px solid #ccc;\n    border-radius: 5px;\n    width: 100%;\n    margin-top: 5px;\n  }\n\n  .input-error{\n    border: 2px solid red;\n  }\n  \n  .input-valid{\n    border: 2px solid green;\n  }\n  \n"]);return f=function(){return e},e}var v=i.b.div(f());function h(){var e=Object(c.a)(["\n    padding: 15px 28px;\n    font-size: 20px;    \n  "]);return h=function(){return e},e}function E(){var e=Object(c.a)(["\n    padding: 10px 20px;\n    font-size: 16px;    \n  "]);return E=function(){return e},e}function g(){var e=Object(c.a)(["\n    padding: 5px 12px;\n    font-size: 14px;\n    \n  "]);return g=function(){return e},e}function x(){var e=Object(c.a)(["\n    background: rgb(248, 92, 80);\n    color: white;\n    :hover{\n      border: 2px solid rgb(212, 45, 61, 0.7);\n      background: rgb(248, 92, 80, 0.8);\n    }   \n  "]);return x=function(){return e},e}function y(){var e=Object(c.a)(["\n    background: rgb(245,224,39);\n    color: black;\n    :hover{\n      border: 2px solid rgb(255,214,24, 0.8);\n      background: rgb(245,224,39, 0.8);\n    }   \n  "]);return y=function(){return e},e}function N(){var e=Object(c.a)(["\n    background: rgb(0,220,125);\n    color: white;\n    :hover{\n      border: 2px solid #00DC7D;\n      background: rgb(0,220,125, 0.8);\n    }   \n  "]);return N=function(){return e},e}function j(){var e=Object(c.a)(["\n    background: rgb(128,130,133);\n    color: white;\n    :hover{\n      border: 2px solid rgb(128,130,133);\n      background: rgb(128,130,133, 0.8);\n    }  \n  "]);return j=function(){return e},e}function k(){var e=Object(c.a)(["\n    background: rgb(23,113,241);\n    color: white;\n    :hover{\n      border: 2px solid rgb(23,113,241);\n      background: rgb(23,113,241, 0.8);\n    }   \n  "]);return k=function(){return e},e}function O(){var e=Object(c.a)(["\n  \n  background: rgb(167,113,254);\n  color: #4400B2;\n  padding: 10px 18px;\n  font-size: 16px;\n  border: 2px solid #DCE5E7;\n  cursor: pointer;\n\n  :hover{\n    border: 2px solid rgb(167,113,254);\n    background: rgb(167,113,254, 0.8);\n  }\n\n  :focus {\n    outline: none;\n  }\n  \n  ","\n  ","\n  ","\n  ","\n  ","\n\n  ","\n  ","\n  "," \n"]);return O=function(){return e},e}var w=i.b.button(O(),(function(e){return"blue"===e.btn_style&&Object(i.a)(k())}),(function(e){return"grey"===e.btn_style&&Object(i.a)(j())}),(function(e){return"green"===e.btn_style&&Object(i.a)(N())}),(function(e){return"yellow"===e.btn_style&&Object(i.a)(y())}),(function(e){return"red"===e.btn_style&&Object(i.a)(x())}),(function(e){return"sm"===e.size&&Object(i.a)(g())}),(function(e){return"md"===e.size&&Object(i.a)(E())}),(function(e){return"lg"===e.size&&Object(i.a)(h())})),_=function(e){var n=e.children,t=e.onClick,r=void 0===t?null:t,l=e.size,o=void 0===l?"md":l,u=e.bg,c=e.style,i=void 0===c?null:c,s=e.type,m=void 0===s?"button":s,d=e.disabled,p=void 0!==d&&d;return a.a.createElement(w,{type:m,disabled:p,bg:u,size:o,onClick:r,style:i},n)};function S(){var e=Object(c.a)(["\n  color: green;\n"]);return S=function(){return e},e}function C(){var e=Object(c.a)(["\n  color: red;\n"]);return C=function(){return e},e}var B=i.b.span(C()),F=i.b.span(S()),z=function(e){var n=e.touched,t=e.errors;return n&&t?a.a.createElement(B,null,t):n&&!t?a.a.createElement(F,null,"Good"):null};function q(){var e=Object(c.a)(["\n  padding: 10px 15px;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0,0,0,0.5);\n  \n  :focus{\n    outline: none;\n  }\n"]);return q=function(){return e},e}var D=i.b.input(q()),J=function(e){var n=e.children,t=void 0===n?null:n,r=e.type,l=void 0===r?"text":r,o=e.name,u=void 0===o?null:o,c=e.placeholder,i=void 0===c?null:c,s=e.id,m=void 0===s?null:s,d=e.value,p=void 0===d?null:d,b=e.onChange,f=void 0===b?null:b,v=e.onBlur,h=void 0===v?null:v,E=e.style,g=void 0===E?null:E,x=e.className,y=void 0===x?null:x;return a.a.createElement(D,{type:l,name:u,placeholder:i,id:m,value:p,onChange:f,onBlur:h,style:g,className:y},t)},A=p.a().shape({name:p.b().min(1,"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0438\u043c\u044f 1 \u0441\u0438\u043c\u0432\u043e\u043b").max(255,"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043a\u043e\u0440\u043e\u0447\u0435 255 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"),email:p.b().email("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email").max(255,"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043a\u043e\u0440\u043e\u0447\u0435 255 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email"),password:p.b().min(8,"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").max(255,"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043a\u043e\u0440\u043e\u0447\u0435 255 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c")}),R=function(e){var n=e.nextStep,t=e.setForm,r=function(e,n){var t=[];return e&&!n?t.push("input-valid"):e&&n&&t.push("input-error"),t.join(" ")};return a.a.createElement(v,null,a.a.createElement(b.a,{initialValues:{name:"",email:"",password:""},validationSchema:A,onSubmit:function(e){t((function(n){return Object(d.a)(Object(d.a)({},n),e)})),n()}},(function(e){var n=e.values,t=e.errors,l=e.touched,o=e.handleChange,u=e.handleBlur,c=e.handleSubmit;return a.a.createElement("form",{onSubmit:c},a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"name"},"Nickname:"),a.a.createElement(J,{type:"text",name:"name",placeholder:"nickname",id:"name",value:n.name,onChange:o,onBlur:u,className:r(l.name,t.name)}),a.a.createElement(z,{touched:l.name,errors:t.name})),a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"email"},"Email:"),a.a.createElement(J,{type:"email",name:"email",placeholder:"email",id:"email",value:n.email,onChange:o,onBlur:u,className:r(l.email,t.email)}),a.a.createElement(z,{touched:l.email,errors:t.email})),a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"password"},"Password:"),a.a.createElement(J,{type:"text",name:"password",placeholder:"password",id:"password",value:n.password,onChange:o,onBlur:u,className:r(l.password,t.password)}),a.a.createElement(z,{touched:l.password,errors:t.password})),a.a.createElement(_,{type:"submit",size:"md",btn_style:"blue",style:{width:"100%"}},"Next"))})))},V=p.a().shape({firstName:p.b().min(1,"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0438\u043c\u044f 1 \u0441\u0438\u043c\u0432\u043e\u043b").max(255,"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043a\u043e\u0440\u043e\u0447\u0435 255 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"),lastName:p.b().min(1,"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0438\u043c\u044f 1 \u0441\u0438\u043c\u0432\u043e\u043b").max(255,"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043a\u043e\u0440\u043e\u0447\u0435 255 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043c\u0438\u043b\u0438\u044e"),country:p.b().min(1,"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 1 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").max(255,"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043a\u043e\u0440\u043e\u0447\u0435 255 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0443")}),G=function(e){var n=e.nextStep,t=e.setForm,r=function(e,n){var t=[];return e&&!n?t.push("input-valid"):e&&n&&t.push("input-error"),t.join(" ")};return a.a.createElement(v,null,a.a.createElement(b.a,{initialValues:{firstName:"",lastName:"",country:""},validationSchema:V,onSubmit:function(e){t((function(n){return Object(d.a)(Object(d.a)({},n),e)})),n()}},(function(e){var n=e.values,t=e.errors,l=e.touched,o=e.handleChange,u=e.handleBlur,c=e.handleSubmit;return a.a.createElement("form",{onSubmit:c},a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"firstName"},"FirstName:"),a.a.createElement(J,{type:"text",name:"firstName",placeholder:"firstName",id:"firstName",value:n.firstName,onChange:o,onBlur:u,className:r(l.firstName,t.firstName)}),a.a.createElement(z,{touched:l.firstName,errors:t.firstName})),a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"lastName"},"LastName:"),a.a.createElement(J,{type:"text",name:"lastName",placeholder:"lastName",id:"lastName",value:n.lastName,onChange:o,onBlur:u,className:r(l.lastName,t.lastName)}),a.a.createElement(z,{touched:l.lastName,errors:t.lastName})),a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"country"},"Country:"),a.a.createElement(J,{type:"text",name:"country",placeholder:"country",id:"country",value:n.country,onChange:o,onBlur:u,className:r(l.country,t.country)}),a.a.createElement(z,{touched:l.country,errors:t.country})),a.a.createElement(_,{type:"submit",style:{width:"100%"},size:"md",btn_style:"grey"},"Next"))})))};function I(){var e=Object(c.a)(["\n  \n  display: flex;\n  justify-content: center;\n  background: #51cfc5;\n  height: 40px;\n\n  .nav__links{\n    transition: all 0.3s ease 0s;\n    padding: 8px 10px;\n  }\n  .nav__links:hover{\n    color: #00CF91;\n    background: pink;\n    cursor: pointer;\n  }\n  \n  .active__link{\n    border-bottom: 3px solid #a771fe;\n  }\n  \n"]);return I=function(){return e},e}var L=i.b.nav(I()),M=function(e){var n=e.step,t=["nav__links"];function r(){return t.push("active__link"),t.join(" ")}return a.a.createElement(L,null,a.a.createElement("div",{href:"#",className:1===n?r():"nav__links"},"Step 1"),a.a.createElement("div",{href:"#",className:2===n?r():"nav__links"},"Step 2"),a.a.createElement("div",{href:"#",className:3===n?r():"nav__links"},"Results"))},P=function(e){var n=e.form;return a.a.createElement(v,null,a.a.createElement("h1",{style:{color:"#c3c3c3"}},"Result"),a.a.createElement("p",null,"country: ",n.name),a.a.createElement("p",null,"email: ",n.email),a.a.createElement("p",null,"password: ",n.password),a.a.createElement("p",null,"firstName: ",n.firstName),a.a.createElement("p",null,"lastName: ",n.lastName),a.a.createElement("p",null,"city: ",n.country),a.a.createElement(_,{onClick:function(){return alert(JSON.stringify(n))},style:{width:"100%",marginTop:"10px"}},"Alert"))},T=function(){var e=Object(r.useState)(1),n=Object(u.a)(e,2),t=n[0],l=n[1],o=Object(r.useState)([]),c=Object(u.a)(o,2),i=c[0],s=c[1],d=function(){return l(t+1)};switch(t){case 1:return a.a.createElement(m,null,a.a.createElement(M,{step:t}),a.a.createElement(R,{nextStep:d,setForm:s}));case 2:return a.a.createElement(m,null,a.a.createElement(M,{step:t}),a.a.createElement(G,{nextStep:d,setForm:s}));case 3:return a.a.createElement(m,null,a.a.createElement(M,{step:t}),a.a.createElement(P,{form:i}));default:return a.a.createElement("h1",null,"Error")}},H=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(T,null))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(H,null)),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.fb835232.chunk.js.map