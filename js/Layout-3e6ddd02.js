import{u as e,_ as t,g as a,a as n,b as o,P as c,w as l,i as r,c as s,f as i,d as u,t as d,e as v,L as f,A as p}from"./default-f04a21e2.js";import{_ as m}from"./SvgIcon-272ee0f1.js";import{d as h,b as g,e as y,f as b,n as k,g as C,a as x,F as _,h as O,i as S,_ as j,r as w,o as P,j as A,k as z,u as N,w as T,l as F,p as L,m as E,q as B}from"./index-ef84d244.js";import{t as D,T as M,a as H,K as I}from"./index-e26c0812.js";import{W as V}from"./wave-44b0bf41.js";import{o as U,c as R,u as W}from"./FormItemContext-8a899d89.js";import{u as G,e as K}from"./eagerComputed-b4b139bf.js";import{r as q}from"./responsiveObserve-6037b33d.js";import{R as X}from"./index-99c1ec35.js";import{u as $,a as J}from"./useSize-b17d54fa.js";const Q=h({compatConfig:{MODE:3},name:"AAvatar",inheritAttrs:!1,props:{prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:function(){return"default"}},src:String,srcset:String,icon:c.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}},slots:["icon"],setup:function(c,l){var r=l.slots,s=l.attrs,i=g(!0),u=g(!1),d=g(1),v=g(null),f=g(null),p=e("avatar",c).prefixCls,m=$(),h=y((function(){return"default"===c.size?m.value:c.size})),_=G(),O=K((function(){if("object"===t(c.size)){var e=q.find((function(e){return _.value[e]}));return c.size[e]}})),S=function(){if(v.value&&f.value){var e=v.value.offsetWidth,t=f.value.offsetWidth;if(0!==e&&0!==t){var a=c.gap,n=void 0===a?4:a;2*n<t&&(d.value=t-2*n<e?(t-2*n)/e:1)}}},j=function(){var e=c.loadError;!1!==(null==e?void 0:e())&&(i.value=!1)};return b((function(){return c.src}),(function(){k((function(){i.value=!0,d.value=1}))})),b((function(){return c.gap}),(function(){k((function(){S()}))})),C((function(){k((function(){S(),u.value=!0}))})),function(){var e,t,l,m,g=c.shape,y=c.src,b=c.alt,k=c.srcset,C=c.draggable,_=c.crossOrigin,w=a(r,c,"icon"),P=p.value,A=(n(e={},"".concat(s.class),!!s.class),n(e,P,!0),n(e,"".concat(P,"-lg"),"large"===h.value),n(e,"".concat(P,"-sm"),"small"===h.value),n(e,"".concat(P,"-").concat(g),g),n(e,"".concat(P,"-image"),y&&i.value),n(e,"".concat(P,"-icon"),w),e),z="number"==typeof h.value?{width:"".concat(h.value,"px"),height:"".concat(h.value,"px"),lineHeight:"".concat(h.value,"px"),fontSize:w?"".concat(h.value/2,"px"):"18px"}:{},N=null===(t=r.default)||void 0===t?void 0:t.call(r);if(y&&i.value)l=x("img",{draggable:C,src:y,srcset:k,onError:j,alt:b,crossorigin:_},null);else if(w)l=w;else if(u.value||1!==d.value){var T="scale(".concat(d.value,") translateX(-50%)"),F={msTransform:T,WebkitTransform:T,transform:T},L="number"==typeof h.value?{lineHeight:"".concat(h.value,"px")}:{};l=x(X,{onResize:S},{default:function(){return[x("span",{class:"".concat(P,"-string"),ref:v,style:o(o({},L),F)},[N])]}})}else l=x("span",{class:"".concat(P,"-string"),ref:v,style:{opacity:0}},[N]);return x("span",o(o({},s),{},{ref:f,class:A,style:[z,(m=!!w,O.value?{width:"".concat(O.value,"px"),height:"".concat(O.value,"px"),lineHeight:"".concat(O.value,"px"),fontSize:"".concat(m?O.value/2:18,"px")}:{}),s.style]}),[l])}}});const Y=l(h({compatConfig:{MODE:3},name:"APopover",props:r(o(o({},H()),{},{content:c.any,title:c.any}),o(o({},D()),{},{trigger:"hover",transitionName:"zoom-big",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1})),setup:function(t,a){var n=a.expose,c=a.slots,l=g();n({getPopupDomNode:function(){var e,t;return null===(e=l.value)||void 0===e||null===(t=e.getPopupDomNode)||void 0===t?void 0:t.call(e)}});var r=e("popover",t),u=r.prefixCls,d=r.configProvider,v=y((function(){return d.getPrefixCls()})),f=function(){var e,a,n=t.title,o=void 0===n?i(null===(e=c.title)||void 0===e?void 0:e.call(c)):n,l=t.content,r=void 0===l?i(null===(a=c.content)||void 0===a?void 0:a.call(c)):l,s=!!(Array.isArray(o)?o.length:o),d=!!(Array.isArray(r)?r.length:o);if(s||d)return x(_,null,[s&&x("div",{class:"".concat(u.value,"-title")},[o]),x("div",{class:"".concat(u.value,"-inner-content")},[r])])};return function(){return x(M,o(o({},U(t,["title","content"])),{},{prefixCls:u.value,ref:l,transitionName:s(v.value,"zoom-big",t.transitionName)}),{title:f,default:c.default})}}}));const Z=h({compatConfig:{MODE:3},name:"AAvatarGroup",inheritAttrs:!1,props:{prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"}},setup:function(t,c){var l=c.slots,r=c.attrs,s=e("avatar-group",t),i=s.prefixCls,d=s.direction;return J(t),function(){var e,c=t.maxPopoverPlacement,s=void 0===c?"top":c,v=t.maxCount,f=t.maxStyle,p=t.maxPopoverTrigger,m=void 0===p?"hover":p,h=(n(e={},i.value,!0),n(e,"".concat(i.value,"-rtl"),"rtl"===d.value),n(e,"".concat(r.class),!!r.class),e),g=a(l,t),y=u(g).map((function(e,t){return R(e,{key:"avatar-key-".concat(t)})})),b=y.length;if(v&&v<b){var k=y.slice(0,v),C=y.slice(v,b);return k.push(x(Y,{key:"avatar-popover-key",content:C,trigger:m,placement:s,overlayClassName:"".concat(i.value,"-popover")},{default:function(){return[x(Q,{style:f},{default:function(){return["+".concat(b-v)]}})]}})),x("div",o(o({},r),{},{class:h,style:r.style}),[k])}return x("div",o(o({},r),{},{class:h,style:r.style}),[y])}}});Q.Group=Z,Q.install=function(e){return e.component(Q.name,Q),e.component(Z.name,Z),e};var ee=d("small","default");const te=l(h({compatConfig:{MODE:3},name:"ASwitch",__ANT_SWITCH:!0,inheritAttrs:!1,props:{id:String,prefixCls:String,size:c.oneOf(ee),disabled:{type:Boolean,default:void 0},checkedChildren:c.any,unCheckedChildren:c.any,tabindex:c.oneOfType([c.string,c.number]),autofocus:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},checked:c.oneOfType([c.string,c.number,c.looseBool]),checkedValue:c.oneOfType([c.string,c.number,c.looseBool]).def(!0),unCheckedValue:c.oneOfType([c.string,c.number,c.looseBool]).def(!1),onChange:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onMouseup:{type:Function},"onUpdate:checked":{type:Function},onBlur:Function,onFocus:Function},slots:["checkedChildren","unCheckedChildren"],setup:function(t,c){var l=c.attrs,r=c.slots,s=c.expose,i=c.emit,u=W();O((function(){v(!("defaultChecked"in l),"Switch","'defaultChecked' is deprecated, please use 'v-model:checked'"),v(!("value"in l),"Switch","`value` is not validate prop, do you mean `checked`?")}));var d=g(void 0!==t.checked?t.checked:l.defaultChecked),p=y((function(){return d.value===t.checkedValue}));b((function(){return t.checked}),(function(){d.value=t.checked}));var m=e("switch",t),h=m.prefixCls,_=m.direction,S=m.size,j=g(),w=function(){var e;null===(e=j.value)||void 0===e||e.focus()};s({focus:w,blur:function(){var e;null===(e=j.value)||void 0===e||e.blur()}}),C((function(){k((function(){t.autofocus&&!t.disabled&&j.value.focus()}))}));var P=function(e,a){t.disabled||(i("update:checked",e),i("change",e,a),u.onFieldChange())},A=function(e){i("blur",e)},z=function(e){w();var a=p.value?t.unCheckedValue:t.checkedValue;P(a,e),i("click",a,e)},N=function(e){e.keyCode===I.LEFT?P(t.unCheckedValue,e):e.keyCode===I.RIGHT&&P(t.checkedValue,e),i("keydown",e)},T=function(e){var t;null===(t=j.value)||void 0===t||t.blur(),i("mouseup",e)},F=y((function(){var e;return n(e={},"".concat(h.value,"-small"),"small"===S.value),n(e,"".concat(h.value,"-loading"),t.loading),n(e,"".concat(h.value,"-checked"),p.value),n(e,"".concat(h.value,"-disabled"),t.disabled),n(e,h.value,!0),n(e,"".concat(h.value,"-rtl"),"rtl"===_.value),e}));return function(){var e;return x(V,{insertExtraNode:!0},{default:function(){return[x("button",o(o(o({},U(t,["prefixCls","checkedChildren","unCheckedChildren","checked","autofocus","checkedValue","unCheckedValue","id","onChange","onUpdate:checked"])),l),{},{id:null!==(e=t.id)&&void 0!==e?e:u.id.value,onKeydown:N,onClick:z,onBlur:A,onMouseup:T,type:"button",role:"switch","aria-checked":d.value,disabled:t.disabled||t.loading,class:[l.class,F.value],ref:j}),[x("div",{class:"".concat(h.value,"-handle")},[t.loading?x(f,{class:"".concat(h.value,"-loading-icon")},null):null]),x("span",{class:"".concat(h.value,"-inner")},[p.value?a(r,t,"checkedChildren"):a(r,t,"unCheckedChildren")])])]}})}}}));const ae={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]},name:"menu",theme:"outlined"};function ne(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){oe(e,t,a[t])}))}return e}function oe(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var ce=function(e,t){var a=ne({},e,t.attrs);return x(p,ne({},a,{icon:ae}),null)};ce.displayName="MenuOutlined",ce.inheritAttrs=!1;const le=ce;const re={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"};function se(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){ie(e,t,a[t])}))}return e}function ie(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var ue=function(e,t){var a=se({},e,t.attrs);return x(p,se({},a,{icon:re}),null)};ue.displayName="UserOutlined",ue.inheritAttrs=!1;const de=ue,ve=S("user_profile",{state:()=>({username:"",email:"",password:"",login_status:!1}),getters:{},actions:{}}),fe={class:"header-menu"},pe={class:"logo"},me={class:"navbar"},he={class:"navbar-left"},ge={class:"navbar-right"},ye={class:"switch-svg"},be={class:"switch-svg"},ke=(e=>(L("data-v-5c142530"),e=e(),E(),e))((()=>z("span",null,"  |  ",-1))),Ce=j(h({__name:"Header",setup(e){const t=ve(),a=g(null),n=g(null),o=g(!1),c=e=>{e?(document.body.classList.remove("theme-light"),document.body.classList.add("theme-dark")):(document.body.classList.remove("theme-dark"),document.body.classList.add("theme-light"))};return C((()=>{var e,o;t.login_status?null==(e=n.value)||e.classList.add("hidden"):null==(o=a.value)||o.classList.add("hidden")})),(e,t)=>{const l=w("router-link"),r=te,s=Q;return P(),A("nav",null,[z("section",fe,[x(N(le))]),z("section",pe,[x(l,{to:"/"},{default:T((()=>[F("IMG.URL")])),_:1})]),z("section",me,[z("div",he,[x(l,{to:"/home/upload"},{default:T((()=>[F("图片上传")])),_:1}),x(l,{to:"/home/about"},{default:T((()=>[F("关于")])),_:1}),x(l,{to:"/home/concat"},{default:T((()=>[F("联系我")])),_:1})]),z("div",ge,[x(l,{to:"/home/changeLog"},{default:T((()=>[F("版本变更")])),_:1}),x(l,{to:"/apiDocs"},{default:T((()=>[F("API 文档")])),_:1}),x(l,{to:"/manage"},{default:T((()=>[F("图片管理")])),_:1}),x(r,{checked:o.value,"onUpdate:checked":t[0]||(t[0]=e=>o.value=e),onChange:c,class:"switch"},{checkedChildren:T((()=>[z("span",ye,[x(m,{name:"sun"})])])),unCheckedChildren:T((()=>[z("span",be,[x(m,{name:"moon"})])])),_:1},8,["checked"])])]),z("section",{class:"user-avatar",ref_key:"avatarRef",ref:a},[x(s,null,{icon:T((()=>[x(N(de))])),_:1})],512),z("section",{class:"login-or-register",ref_key:"login_register_ref",ref:n},[x(l,{to:"/login"},{default:T((()=>[F("登录")])),_:1}),ke,x(l,{to:"/register"},{default:T((()=>[F("注册")])),_:1})],512)])}}}),[["__scopeId","data-v-5c142530"]]),xe={},_e=e=>(L("data-v-26f45de0"),e=e(),E(),e),Oe={class:"footer"},Se=_e((()=>z("span",null,"Copyright ©2023 ",-1))),je=_e((()=>z("a",{href:"https://lgp.asia/"},"lgp.asia.",-1))),we=_e((()=>z("span",null,"All rights reserved. ",-1)));const Pe=j(xe,[["render",function(e,t){const a=w("router-link");return P(),A("section",Oe,[Se,je,we,x(a,{to:"/privacy-policy"},{default:T((()=>[F("Terms of Use")])),_:1}),F(" - "),x(a,{to:"/privacy-policy"},{default:T((()=>[F("Privacy Policy")])),_:1})])}],["__scopeId","data-v-26f45de0"]]),Ae={class:"content"},ze=j(h({__name:"Layout",setup:e=>(e,t)=>(P(),A(_,null,[x(Ce),z("section",Ae,[B(e.$slots,"default",{},void 0,!0)]),x(Pe)],64))}),[["__scopeId","data-v-ce9b7bc0"]]);export{ze as L};