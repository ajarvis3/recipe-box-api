(this["webpackJsonprecipe-box"]=this["webpackJsonprecipe-box"]||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var c={};n.r(c),n.d(c,"emailState",(function(){return y})),n.d(c,"firstNameState",(function(){return k})),n.d(c,"lastNameState",(function(){return C})),n.d(c,"passwordState",(function(){return w}));var a=n(0),i=n.n(a),r=n(11),o=n.n(r),s=(n(98),n(23)),j=n(14),l=n(4),b=Object(l.b)({key:"loginState",default:!1}),u=Object(l.b)({key:"userIdState",default:""}),d=n(140),O=Object(d.a)({headerLink:{"&:hover":{content:'""',color:"black",transitionDuration:".5s"},textDecoration:"none",color:"white",margin:"auto 0px"},signInOut:{fontSize:"2rem"}}),p=function(){localStorage.removeItem("token")},m=n(2),f=function(){var e=Object(l.e)(b),t=Object(l.e)(u),n=O();return Object(m.jsx)(s.b,{to:"/",onClick:function(){e(!1),t(""),p()},className:n.signInOut+" "+n.headerLink,children:"Sign out"})},x=n(151),h=n(142),g=Object(d.a)({title:{fontSize:"3rem",left:0,margin:0},header:{width:"100%",margin:0,backgroundColor:"#01A299",color:"white",padding:0,display:"flex",flexDirection:"row"},headerItemWrapper:{width:"50%",padding:"10px"},headerRightSide:{float:"right",margin:0}}),v=function(){var e=Object(l.d)(b),t=g(),n=O();return Object(m.jsxs)(x.a,{component:"div",className:t.header,children:[Object(m.jsx)(x.a,{component:"span",className:t.headerItemWrapper,children:Object(m.jsx)(h.a,{variant:"h1",className:t.title,children:Object(m.jsx)(s.b,{to:"/",className:n.headerLink,children:"Recipe Box"})})}),Object(m.jsx)(x.a,{component:"span",className:t.headerItemWrapper,children:Object(m.jsx)(h.a,{variant:"h3",className:t.headerRightSide,children:Object(m.jsx)(j.d,{children:e?Object(m.jsx)(f,{}):Object(m.jsx)(j.b,{path:"/",exact:!0,children:Object(m.jsx)(s.b,{to:"/signup",className:n.headerLink+" "+n.signInOut,children:"Sign Up"})})})})})]})},S=n(5),N=n(152),y=(n(70),Object(l.b)({key:"emailState",default:""})),k=Object(l.b)({key:"firstNameState",default:""}),C=Object(l.b)({key:"lastNameState",default:""}),w=Object(l.b)({key:"passwordState",default:""}),I=function(e,t,n,c){n||(n={"Content-type":"application/json; charset=UTF-8"});var a="production",i="https://recipeboxapp.azurewebsites.net";console.log(a),console.log(i);var r=new URL(e,i).href;return fetch(r,t?{method:c,headers:n,body:t}:{method:c,headers:n}).then((function(e){return e.status>=200&&e.status<=300?e.json():e.status}),(function(e){console.error(e)}))};var R=function(e,t){Object(a.useEffect)((function(){return e.forEach((function(e){e(t)}))}),[])},T=n(150),U=function(e){var t=(e=e.replace(" ","")).charAt(0).toLowerCase()+e.slice(1)+"State",n=void 0;return Object.values(c).some((function(e){return e.key===t&&(n=e,!0)})),n};var L=function(e){var t=U(e),n=Object(l.e)(t);return function(e){n(e.target.value)}};var B=function(e){var t=U(e);return Object(l.d)(t)},E=Object(d.a)({enterText:{margin:"5px auto",textAlign:"center",fontSize:"20px"},enterTextInput:{borderRadius:"5px",color:"black",fontSize:"20px",width:"90%"}}),F=function(e){var t=e.fieldName,n=e.type,c=E(),a=L(t),i=B(t);return Object(m.jsxs)(x.a,{component:"div",className:c.enterText,children:[Object(m.jsxs)(x.a,{component:"div",children:[t,":"]}),Object(m.jsx)(T.a,{type:n,placeholder:t,value:i,className:c.enterTextInput,name:t,onChange:a})]})},D=function(e){e&&e.token&&localStorage.setItem("token",e.token)},A=Object(d.a)({signUpBox:{margin:"auto",border:"1px solid #707070",borderRadius:"5px",padding:"10px",display:"block",width:"20%"},signUpButton:{margin:"5px auto",textAlign:"center"}}),z=function(){var e=Object(l.c)(k),t=Object(S.a)(e,2),n=t[0],c=t[1],a=Object(l.c)(C),i=Object(S.a)(a,2),r=i[0],o=i[1],s=Object(l.c)(w),d=Object(S.a)(s,2),O=d[0],p=d[1],f=Object(l.c)(y),h=Object(S.a)(f,2),g=h[0],v=h[1],T=Object(l.c)(b),U=Object(S.a)(T,2),L=U[0],B=U[1],E=Object(l.c)(u),z=Object(S.a)(E,2),P=(z[0],z[1]),W=A();R([c,o,p,v],"");return L?Object(m.jsx)(j.a,{to:"/"}):Object(m.jsxs)(x.a,{component:"form",className:W.signUpBox,onSubmit:function(e){e.preventDefault(),I("users/signup",JSON.stringify({firstName:n,lastName:r,email:g,password:O}),{"Content-type":"application/json; charset=UTF-8"},"POST").then((function(e){if("number"===typeof e);else if(e)return B(!0),P(e.id),D(e.token),Object(m.jsx)(j.a,{to:"/"})}))},children:[Object(m.jsx)(F,{fieldName:"First Name",type:"text"}),Object(m.jsx)(F,{fieldName:"Last Name",type:"text"}),Object(m.jsx)(F,{fieldName:"Email",type:"email"}),Object(m.jsx)(F,{fieldName:"Password",type:"password"}),Object(m.jsx)(x.a,{component:"div",className:W.signUpButton,children:Object(m.jsx)(N.a,{variant:"contained",color:"primary",type:"submit",children:"Sign Up"})})]})},P=n(81),W=n(149),H=function(){var e=Object(l.c)(w),t=Object(S.a)(e,2),n=t[0],c=t[1],a=Object(l.c)(y),i=Object(S.a)(a,2),r=i[0],o=i[1],s=Object(l.c)(b),d=Object(S.a)(s,2),O=d[0],p=d[1],f=Object(l.c)(u),h=Object(S.a)(f,2),g=(h[0],h[1]),v=A();R([c,o],"");return O?Object(m.jsx)(j.a,{to:"/"}):Object(m.jsxs)(x.a,{component:"form",className:v.signUpBox,onSubmit:function(e){e.preventDefault(),I("auth/signin",JSON.stringify({email:r,password:n}),{"Content-type":"application/json; charset=UTF-8"},"POST").then((function(e){if("number"===typeof e);else if(e)return p(!0),g(e.id),D(e),Object(m.jsx)(j.a,{to:"/"})}))},children:[Object(m.jsx)(F,{fieldName:"Email",type:"text"}),Object(m.jsx)(F,{fieldName:"Password",type:"password"}),Object(m.jsx)(x.a,{component:"div",className:v.signUpButton,children:Object(m.jsx)(N.a,{variant:"contained",color:"primary",type:"submit",children:"Sign In"})})]})},J=Object(d.a)({signIn:{"&:hover":{content:'""',color:"black",transitionDuration:".5s"},textDecoration:"none",color:"white",fontSize:"2rem"}}),_=function(){var e=J();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(h.a,{variant:"h1",children:"Home"}),Object(m.jsx)(s.b,{to:"/signin",className:e.signIn,children:Object(m.jsx)(N.a,{variant:"contained",color:"primary",children:"Sign In"})})]})},M=n(145),G=function(e,t,n){var c={"Content-Type":"application/json",Authentication:"bearer "+localStorage.getItem("token")};return I(e,t,c,n)},q=Object(l.b)({key:"searchState",default:""}),K=Object(l.b)({key:"userRecipesState",default:[]}),Q=n(78),V=Object(l.b)({key:"popupState",default:!1}),X=(n(107),Object(l.b)({key:"currentRecipeUrl",default:""})),Y=Object(l.b)({key:"isAddState",default:!1}),Z=Object(d.a)({wrapper:{width:"100%",padding:"0px",marginTop:"1%",marginBottom:"1%"},input:{width:"75%",marginLeft:"2%",marginRight:"2%"},button:{float:"right",marginRight:"2%"},fieldSet:{margin:"0",padding:"0",border:"none"}}),$=function(){var e=Object(l.c)(X),t=Object(S.a)(e,2),n=t[0],c=t[1],a=Object(l.c)(K),i=Object(S.a)(a,2),r=i[0],o=i[1],s=Object(l.d)(Y),j=Z();return Object(m.jsx)(x.a,{component:"form",className:j.wrapper,onSubmit:function(e){e.preventDefault(),G("content/recipes",JSON.stringify({url:n}),"POST").then((function(e){var t=r.slice();t.push(e),o(t)}))},children:Object(m.jsxs)("fieldset",{className:j.fieldSet,disabled:!s,children:[Object(m.jsx)(T.a,{type:"text",value:n,onChange:function(e){c(e.target.value)},placeholder:"Recipe Url",className:j.input}),s&&Object(m.jsx)(N.a,{className:j.button,variant:"contained",color:"secondary",type:"submit",children:"Submit URL"})]})})},ee=n(9),te=Object(l.b)({key:"currentRecipeIndexState",default:-1}),ne=n(144),ce=Object(d.a)({label:{marginLeft:"2%",marginRight:"1%",marginTop:10,display:"inline-block"},item:{margin:0},input:{}}),ae=function(e){var t=e.onChange,n=e.value,c=e.fieldName,a=ce();return Object(m.jsxs)(M.a,{item:!0,className:a.item,children:[Object(m.jsxs)(ne.a,{className:a.label,children:[c,":"]}),Object(m.jsx)(T.a,{className:a.input,type:"text",value:n,onChange:t})]})},ie=function(){var e=Object(l.c)(K),t=Object(S.a)(e,2),n=t[0],c=t[1],i=Object(l.d)(te),r=Object(l.e)(V),o=n[i],s=Object(a.useState)(o.title),j=Object(S.a)(s,2),b=j[0],u=j[1],d=Object(a.useState)(o.author),O=Object(S.a)(d,2),p=O[0],f=O[1],h=Object(a.useState)(o.source),g=Object(S.a)(h,2),v=g[0],y=g[1],k=Object(a.useState)(o.description),C=Object(S.a)(k,2),w=C[0],I=C[1],R=Object(a.useState)(o.imageUrl),T=Object(S.a)(R,2),U=T[0],L=T[1],B=Object(a.useState)(o.comments),E=Object(S.a)(B,2),F=E[0],D=(E[1],function(e){return function(t){e(t.target.value)}});return Object(m.jsx)(x.a,{component:"form",onSubmit:function(e){e.preventDefault();var t=Object(ee.a)(Object(ee.a)({},o),{},{title:b,author:p,source:v,description:w,imageUrl:U,comments:F}),a=n.slice();G("/content/recipes?id=".concat(t._id),JSON.stringify({recipe:t}),"PATCH").then((function(e){a[i]=e,c(a),r(!1)}))},children:Object(m.jsxs)(M.a,{container:!0,direction:"column",spacing:0,children:[Object(m.jsx)(ae,{fieldName:"Title",value:b,onChange:D(u)}),Object(m.jsx)(ae,{fieldName:"Author",value:p,onChange:D(f)}),Object(m.jsx)(ae,{fieldName:"Source",value:v,onChange:D(y)}),Object(m.jsx)(ae,{fieldName:"Image URL",value:U,onChange:D(L)}),Object(m.jsx)(ae,{fieldName:"Description",value:w,onChange:D(I)}),Object(m.jsx)(N.a,{color:"secondary",variant:"contained",type:"submit",children:"Submit Changes"})]})})},re=function(){var e=Object(a.useState)(""),t=Object(S.a)(e,2),n=(t[0],t[1],Object(l.c)(V)),c=Object(S.a)(n,2),i=c[0],r=c[1],o=Object(l.d)(Y);return Object(m.jsxs)(Q.a,{open:i,closeOnDocumentClick:!0,onClose:function(){return r(!1)},position:"center center",children:[Object(m.jsx)($,{}),!o&&Object(m.jsx)(ie,{})]})},oe=n(79),se=n.n(oe),je=Object(d.a)({search:{marginLeft:5,transform:"translate(0px, 5px)"},input:{marginLeft:10,marginTop:"1rem"},inputProps:{fontSize:"20px"}}),le=function(){var e=Object(l.c)(q),t=Object(S.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),r=Object(S.a)(i,2),o=r[0],s=r[1],j=Object(a.useRef)(null),b=je();Object(a.useEffect)((function(){var e;j.current&&null!==j.current&&(null===(e=j.current.firstChild)||void 0===e?void 0:e.firstChild).focus()}));return Object(m.jsx)(m.Fragment,{children:o?Object(m.jsx)(T.a,{inputProps:{style:{fontSize:20}},className:b.input,ref:j,type:"text",value:n,onChange:function(e){c(e.target.value)},onBlur:function(){""===n&&s(!1)}}):Object(m.jsx)(se.a,{fontSize:"large",onClick:function(){s(!0)},className:b.search})})},be=Object(d.a)({recipeHeaderRight:{float:"right",marginBlockStart:"0.83em",marginBlockEnd:"0.3em",marginInlineStart:"0"}}),ue=function(){var e=Object(l.e)(V),t=Object(l.e)(Y),n=Object(l.e)(te),c=Object(l.e)(X),a=be();return Object(m.jsx)(x.a,{component:"span",className:a.recipeHeaderRight,children:Object(m.jsx)(N.a,{variant:"contained",color:"primary",onClick:function(){t(!0),n(-1),e(!0),c("")},children:"Add Recipe"})})},de=Object(d.a)({myRecipes:{marginBlockEnd:"0.3em",display:"inline-block",fontSize:"3rem"}}),Oe=function(){var e=de();return Object(m.jsx)(h.a,{variant:"h2",className:e.myRecipes,children:"My Recipes"})},pe=Object(d.a)({recipeHeader:{display:"flex",flexDirection:"row",borderBottom:"1px solid #707070"},recipeHeaderItemWrapper:{width:"50%",padding:"0px 10px",margin:0}}),me=function(){var e=pe();return Object(m.jsxs)(x.a,{component:"div",className:e.recipeHeader,children:[Object(m.jsxs)(x.a,{component:"span",className:e.recipeHeaderItemWrapper,children:[Object(m.jsx)(Oe,{}),Object(m.jsx)(le,{})]}),Object(m.jsx)(x.a,{component:"span",className:e.recipeHeaderItemWrapper,children:Object(m.jsx)(ue,{})})]})},fe=n(147),xe=n(148),he=n(80),ge=n.n(he),ve=Object(d.a)({openExternal:{"&:hover":{cursor:"pointer"}}}),Se=function(e){var t=e.url,n=ve();return Object(m.jsx)(ge.a,{className:n.openExternal,onClick:function(){var e=window.open(t,"_blank");null===e||void 0===e||e.focus()}})},Ne=n(146),ye=Object(d.a)({edit:{"&:hover":{cursor:"pointer"}}}),ke=function(e){var t=ye(),n=e.index,c=Object(l.e)(Y),a=Object(l.e)(te),i=Object(l.e)(V),r=Object(l.e)(X),o=Object(l.d)(K);return Object(m.jsx)(Ne.a,{onClick:function(){c(!1),a(n),i(!0),r(o[n].url)},className:t.edit})},Ce=function(e){var t=e.url,n=e.index;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(Se,{url:t}),Object(m.jsx)(ke,{index:n})]})},we=function(e){var t=e.description;return Object(m.jsx)(h.a,{children:t})},Ie=Object(d.a)({title:{fontSize:"2rem",borderBottom:"1px solid #707070"}}),Re=function(e){var t=Ie(),n=e.title;return Object(m.jsx)(h.a,{variant:"h3",className:t.title,children:n})},Te=function(e){var t=e.metadata,n=e.index,c=t.title,a=t.description,i=t.url,r=t._id;return Object(m.jsxs)(x.a,{component:"span",children:[Object(m.jsx)(Re,{title:c}),Object(m.jsx)(Ce,{url:i,id:r,index:n}),Object(m.jsx)(we,{description:a})]})},Ue=Object(d.a)({root:{minWidth:275,maxWidth:500,margin:50},content:{minWidth:275,maxWidth:500,padding:15},image:{maxWidth:500,borderRadius:5},imageContainer:{padding:0}}),Le=function(e){var t=Ue(),n=e.metadata,c=e.index,a=n.title,i=n.imageUrl;return Object(m.jsxs)(fe.a,{raised:!0,className:t.root,children:[Object(m.jsx)(xe.a,{component:"div",className:t.imageContainer,children:Object(m.jsx)("img",{src:i,alt:"".concat(a),className:t.image})}),Object(m.jsx)(xe.a,{className:t.content,component:"div",children:Object(m.jsx)(Te,{metadata:n,index:c})})]})},Be=function(){var e=Object(l.c)(K),t=Object(S.a)(e,2),n=t[0],c=t[1],i=Object(l.d)(u),r=Object(l.d)(q);return Object(a.useEffect)((function(){G("/content/recipes?uid=".concat(i),void 0,"GET").then((function(e){e&&"number"!==typeof e&&c(e)}))}),[i]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(me,{}),Object(m.jsxs)(M.a,{container:!0,spacing:0,children:[Object(m.jsx)(re,{}),n&&function(){var e=r.toLowerCase(),t=function(t){return t.toLowerCase().includes(e)};return n.filter((function(e){return t(e.title)||t(e.author)||t(e.description)||t(e.source)||t(e.url)||e.comments.some((function(e){return t(e)}))}))}().map((function(e,t){return Object(m.jsx)(M.a,{item:!0,children:Object(m.jsx)(Le,{metadata:e,index:t})},e._id)}))]})]})},Ee=function(e){var t=Object(l.c)(b),n=Object(S.a)(t,2),c=n[0],i=n[1],r=Object(l.c)(u),o=Object(S.a)(r,2),s=(o[0],o[1]);return Object(a.useEffect)((function(){G("auth/verify",JSON.stringify({}),"POST").then((function(e){"number"===typeof e?i(!1):e&&(i(!0),D(e.token),s(e.id))}))}),[c,i]),Object(m.jsx)(m.Fragment,{children:c?Object(m.jsx)(Be,{}):Object(m.jsx)(_,{})})},Fe=Object(d.a)({App:{height:"100vh",padding:0},content:{height:"100%",marginTop:"20px"}}),De=function(){var e=Object(P.a)({palette:{primary:{main:"#01A299",contrastText:"#fff"},secondary:{main:"#6200EE",contrastText:"#fff"}},typography:{fontFamily:['"Noto Sans"',"Roboto","serif"].join(",")}}),t=Fe();return Object(m.jsx)(l.a,{children:Object(m.jsx)(s.a,{children:Object(m.jsx)(W.a,{theme:e,children:Object(m.jsxs)("div",{className:t.App,children:[Object(m.jsx)(v,{}),Object(m.jsx)("div",{className:t.content,children:Object(m.jsxs)(j.d,{children:[Object(m.jsx)(j.b,{path:"/",exact:!0,component:Ee}),Object(m.jsx)(j.b,{path:"/signup",exact:!0,component:z}),Object(m.jsx)(j.b,{path:"/signin",exact:!0,component:H})]})})]})})})})},Ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};o.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(De,{})}),document.getElementById("root")),Ae(console.log)},70:function(e,t,n){},98:function(e,t,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.3ba77d69.chunk.js.map