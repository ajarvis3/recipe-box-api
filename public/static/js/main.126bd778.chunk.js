(this["webpackJsonprecipe-box"]=this["webpackJsonprecipe-box"]||[]).push([[0],{56:function(e,t,n){},76:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var c={};n.r(c),n.d(c,"emailState",(function(){return S})),n.d(c,"firstNameState",(function(){return k})),n.d(c,"lastNameState",(function(){return w})),n.d(c,"passwordState",(function(){return I}));var a=n(0),r=n.n(a),i=n(10),o=n.n(i),s=(n(76),n(19)),j=n(13),l=n(6),b=Object(l.b)({key:"loginState",default:!1}),d=Object(l.b)({key:"userIdState",default:""}),p=n(115),u=Object(p.a)({headerLink:{"&:hover":{content:'""',color:"black",transitionDuration:".5s"},textDecoration:"none",color:"white",margin:"auto 0px"},signInOut:{fontSize:"2rem"}}),m=function(){localStorage.removeItem("token")},O=n(2),h=function(){var e=Object(l.e)(b),t=Object(l.e)(d),n=u();return Object(O.jsx)(s.b,{to:"/",onClick:function(){e(!1),t(""),m()},className:n.signInOut+" "+n.headerLink,children:"Sign out"})},x=n(124),f=n(117),g=Object(p.a)({title:{fontSize:"3rem",left:0,margin:0},header:{width:"100%",margin:0,backgroundColor:"#01A299",color:"white",padding:0,display:"flex",flexDirection:"row"},headerItemWrapper:{width:"50%",padding:"10px"},headerRightSide:{float:"right",margin:0}}),v=function(){var e=Object(l.d)(b),t=g(),n=u();return Object(O.jsxs)(x.a,{component:"div",className:t.header,children:[Object(O.jsx)(x.a,{component:"span",className:t.headerItemWrapper,children:Object(O.jsx)(f.a,{variant:"h1",className:t.title,children:Object(O.jsx)(s.b,{to:"/",className:n.headerLink,children:"Recipe Box"})})}),Object(O.jsx)(x.a,{component:"span",className:t.headerItemWrapper,children:Object(O.jsx)(f.a,{variant:"h3",className:t.headerRightSide,children:Object(O.jsx)(j.d,{children:e?Object(O.jsx)(h,{}):Object(O.jsx)(j.b,{path:"/",exact:!0,children:Object(O.jsx)(s.b,{to:"/signup",className:n.headerLink+" "+n.signInOut,children:"Sign Up"})})})})})]})},y=n(5),N=n(125),S=(n(56),Object(l.b)({key:"emailState",default:""})),k=Object(l.b)({key:"firstNameState",default:""}),w=Object(l.b)({key:"lastNameState",default:""}),I=Object(l.b)({key:"passwordState",default:""}),R=function(e,t,n,c){n||(n={"Content-type":"application/json; charset=UTF-8"});var a="production",r="https://recipeboxapp.azurewebsites.net";console.log(a),console.log(r);var i=new URL(e,r).href;return fetch(i,t?{method:c,headers:n,body:t}:{method:c,headers:n}).then((function(e){return e.status>=200&&e.status<=300?e.json():e.status}),(function(e){console.error(e)}))};var T=function(e,t){Object(a.useEffect)((function(){e.forEach((function(e){e(t)}))}),[])},C=n(123),U=function(e){var t=(e=e.replace(" ","")).charAt(0).toLowerCase()+e.slice(1)+"State",n=void 0;return Object.values(c).some((function(e){return e.key===t&&(n=e,!0)})),n};var B=function(e){var t=U(e),n=Object(l.e)(t);return function(e){n(e.target.value)}};var E=function(e){var t=U(e);return Object(l.d)(t)},F=Object(p.a)({enterText:{margin:"5px auto",textAlign:"center",fontSize:"20px"},enterTextInput:{borderRadius:"5px",color:"black",fontSize:"20px",width:"90%"}}),D=function(e){var t=e.fieldName,n=e.type,c=F(),a=B(t),r=E(t);return Object(O.jsxs)(x.a,{component:"div",className:c.enterText,children:[Object(O.jsxs)(x.a,{component:"div",children:[t,":"]}),Object(O.jsx)(C.a,{type:n,placeholder:t,value:r,className:c.enterTextInput,name:t,onChange:a})]})},W=function(e){e&&e.token&&localStorage.setItem("token",e.token)},L=Object(p.a)({signUpBox:{margin:"auto",border:"1px solid #707070",borderRadius:"5px",padding:"10px",display:"block",width:"20%"},signUpButton:{margin:"5px auto",textAlign:"center"}}),A=function(){var e=Object(l.c)(k),t=Object(y.a)(e,2),n=t[0],c=t[1],a=Object(l.c)(w),r=Object(y.a)(a,2),i=r[0],o=r[1],s=Object(l.c)(I),d=Object(y.a)(s,2),p=d[0],u=d[1],m=Object(l.c)(S),h=Object(y.a)(m,2),f=h[0],g=h[1],v=Object(l.c)(b),C=Object(y.a)(v,2),U=C[0],B=C[1],E=L();T([c,o,u,g],"");return U?Object(O.jsx)(j.a,{to:"/"}):Object(O.jsxs)(x.a,{component:"form",className:E.signUpBox,onSubmit:function(e){e.preventDefault(),R("users/signup",JSON.stringify({firstName:n,lastName:i,email:f,password:p}),{"Content-type":"application/json; charset=UTF-8"},"POST").then((function(e){if("number"!==typeof e)return B(!0),W(e),Object(O.jsx)(j.a,{to:"/"})}))},children:[Object(O.jsx)(D,{fieldName:"First Name",type:"text"}),Object(O.jsx)(D,{fieldName:"Last Name",type:"text"}),Object(O.jsx)(D,{fieldName:"Email",type:"email"}),Object(O.jsx)(D,{fieldName:"Password",type:"password"}),Object(O.jsx)(x.a,{component:"div",className:E.signUpButton,children:Object(O.jsx)(N.a,{variant:"contained",color:"primary",type:"submit",children:"Sign Up"})})]})},H=n(62),P=n(122),z=function(){var e=Object(l.c)(I),t=Object(y.a)(e,2),n=t[0],c=t[1],a=Object(l.c)(S),r=Object(y.a)(a,2),i=r[0],o=r[1],s=Object(l.c)(b),d=Object(y.a)(s,2),p=d[0],u=d[1],m=L();T([c,o],"");return p?Object(O.jsx)(j.a,{to:"/"}):Object(O.jsxs)(x.a,{component:"form",className:m.signUpBox,onSubmit:function(e){e.preventDefault(),R("auth/signin",JSON.stringify({email:i,password:n}),{"Content-type":"application/json; charset=UTF-8"},"POST").then((function(e){if("number"!==typeof e)return u(!0),W(e),Object(O.jsx)(j.a,{to:"/"})}))},children:[Object(O.jsx)(D,{fieldName:"Email",type:"text"}),Object(O.jsx)(D,{fieldName:"Password",type:"password"}),Object(O.jsx)(x.a,{component:"div",className:m.signUpButton,children:Object(O.jsx)(N.a,{variant:"contained",color:"primary",type:"submit",children:"Sign In"})})]})},J=Object(p.a)({signIn:{"&:hover":{content:'""',color:"black",transitionDuration:".5s"},textDecoration:"none",color:"white",fontSize:"2rem"}}),M=function(){var e=J();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f.a,{variant:"h1",children:"Home"}),Object(O.jsx)(s.b,{to:"/signin",className:e.signIn,children:Object(O.jsx)(N.a,{variant:"contained",color:"primary",children:"Sign In"})})]})},G=n(121),_=function(e,t,n){var c={"Content-Type":"application/json",Authentication:"bearer "+localStorage.getItem("token")};return R(e,t,c,n)},q=Object(l.b)({key:"userRecipesState",default:[]}),K=n(61),Q=Object(l.b)({key:"popupState",default:!1}),V=(n(85),Object(l.b)({key:"currentRecipeUrl",default:""})),X=function(){var e=Object(l.c)(V),t=Object(y.a)(e,2),n=t[0],c=t[1],a=Object(l.c)(q),r=Object(y.a)(a,2),i=r[0],o=r[1];return Object(O.jsxs)(x.a,{component:"form",onSubmit:function(e){e.preventDefault(),_("content/recipes",JSON.stringify({url:n}),"POST").then((function(e){var t=i.slice();t.push(e),o(t)}))},children:[Object(O.jsx)(C.a,{type:"text",value:n,onChange:function(e){c(e.target.value)},placeholder:"Recipe Url"}),Object(O.jsx)(N.a,{variant:"contained",color:"primary",type:"submit",children:"Submit URL"})]})},Y=function(){var e=Object(a.useState)(""),t=Object(y.a)(e,2),n=(t[0],t[1],Object(l.c)(Q)),c=Object(y.a)(n,2),r=c[0],i=c[1];return Object(O.jsx)(K.a,{open:r,closeOnDocumentClick:!0,onClose:function(){return i(!1)},position:"center center",children:Object(O.jsx)(X,{})})},Z=Object(p.a)({recipeHeaderRight:{float:"right",marginRight:"8px",marginBlockStart:"0.83em",marginBlockEnd:"0.3em",marginInlineStart:"0"}}),$=function(){var e=Object(l.c)(Q),t=Object(y.a)(e,2),n=(t[0],t[1]),c=Z();return Object(O.jsx)(x.a,{component:"span",className:c.recipeHeaderRight,children:Object(O.jsx)(N.a,{variant:"contained",color:"primary",onClick:function(){n(!0)},children:"Add Recipe"})})},ee=Object(p.a)({myRecipes:{marginBlockEnd:"0.3em"}}),te=function(){var e=ee();return Object(O.jsx)(f.a,{variant:"h2",className:e.myRecipes,children:"My Recipes"})},ne=Object(p.a)({recipeHeader:{display:"flex",flexDirection:"row",borderBottom:"1px solid #707070"},recipeHeaderItemWrapper:{width:"50%",padding:0,margin:0}}),ce=function(){var e=ne();return Object(O.jsxs)(x.a,{component:"div",className:e.recipeHeader,children:[Object(O.jsx)(x.a,{component:"span",className:e.recipeHeaderItemWrapper,children:Object(O.jsx)(te,{})}),Object(O.jsx)(x.a,{component:"span",className:e.recipeHeaderItemWrapper,children:Object(O.jsx)($,{})})]})},ae=n(119),re=n(120),ie=function(e){var t=e.description;return Object(O.jsx)(f.a,{children:t})},oe=Object(p.a)({title:{fontSize:"2rem",borderBottom:"1px solid #707070"}}),se=function(e){var t=oe(),n=e.title;return Object(O.jsx)(f.a,{variant:"h3",className:t.title,children:n})},je=function(e){var t=e.metadata,n=t.title,c=t.description;return Object(O.jsxs)(x.a,{component:"span",children:[Object(O.jsx)(se,{title:n}),Object(O.jsx)(ie,{description:c})]})},le=Object(p.a)({root:{minWidth:275,maxWidth:500,margin:50},content:{minWidth:275,maxWidth:500,padding:15},image:{maxWidth:500,borderRadius:5},imageContainer:{padding:0}}),be=function(e){var t=le(),n=e.metadata,c=n.title,a=n.imageUrl;return Object(O.jsxs)(ae.a,{raised:!0,className:t.root,children:[Object(O.jsx)(re.a,{component:"div",className:t.imageContainer,children:Object(O.jsx)("img",{src:a,alt:"".concat(c),className:t.image})}),Object(O.jsx)(re.a,{className:t.content,component:"div",children:Object(O.jsx)(je,{metadata:n})})]})},de=function(){var e=Object(l.c)(q),t=Object(y.a)(e,2),n=t[0],c=t[1],r=Object(l.d)(d);return Object(a.useEffect)((function(){_("/content/recipes?uid=".concat(r),void 0,"GET").then((function(e){c(e)}))}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(ce,{}),Object(O.jsxs)(G.a,{container:!0,spacing:0,children:[Object(O.jsx)(Y,{}),n.map((function(e){return Object(O.jsx)(G.a,{item:!0,children:Object(O.jsx)(be,{metadata:e})},e._id)}))]})]})},pe=function(e){var t=Object(l.c)(b),n=Object(y.a)(t,2),c=n[0],r=n[1],i=Object(l.c)(d),o=Object(y.a)(i,2),s=(o[0],o[1]);return Object(a.useEffect)((function(){_("auth/verify",JSON.stringify({}),"POST").then((function(e){"number"===typeof e?r(!1):(r(!0),W(e.token),s(e.id))}))}),[c,r]),Object(O.jsx)(O.Fragment,{children:c?Object(O.jsx)(de,{}):Object(O.jsx)(M,{})})},ue=Object(p.a)({App:{height:"100vh",padding:0},content:{height:"100%",marginTop:"20px"}}),me=function(){var e=Object(H.a)({palette:{primary:{main:"#01A299",contrastText:"#fff"},secondary:{main:"#6200EE",contrastText:"#fff"}},typography:{fontFamily:['"Noto Sans"',"Roboto","serif"].join(",")}}),t=ue();return Object(O.jsx)(l.a,{children:Object(O.jsx)(s.a,{children:Object(O.jsx)(P.a,{theme:e,children:Object(O.jsxs)("div",{className:t.App,children:[Object(O.jsx)(v,{}),Object(O.jsx)("div",{className:t.content,children:Object(O.jsxs)(j.d,{children:[Object(O.jsx)(j.b,{path:"/",exact:!0,component:pe}),Object(O.jsx)(j.b,{path:"/signup",exact:!0,component:A}),Object(O.jsx)(j.b,{path:"/signin",exact:!0,component:z})]})})]})})})})},Oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,127)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};o.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(me,{})}),document.getElementById("root")),Oe(console.log)}},[[86,1,2]]]);
//# sourceMappingURL=main.126bd778.chunk.js.map