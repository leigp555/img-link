import{y as e,b as t,A as n,a as o,u as i,h as a,_ as l,j as r,k as c,Q as s,e as u,R as d}from"./default-37a9e99b.js";import{K as p,T as f}from"./index-9c040c71.js";import{d as v,b as y,g as m,a as b,x as g,f as h,e as x,V as C,K as T,H as S,F as w,W as E,n as O}from"./index-44b8c168.js";import{i as k}from"./index-06df1089.js";import{T as j}from"./TextArea-ed558076.js";import{R as N}from"./index-6ef490d3.js";import{u as A,C as B}from"./CheckOutlined-d67863ae.js";import{o as D}from"./FormItemContext-0fd4b304.js";var R=["noStyle","disabled"],P={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"};const z=v({compatConfig:{MODE:3},name:"TransButton",inheritAttrs:!1,props:{noStyle:{type:Boolean,default:void 0},onClick:Function,disabled:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:void 0}},setup:function(n,o){var i=o.slots,a=o.emit,l=o.attrs,r=o.expose,c=y(),s=function(e){e.keyCode===p.ENTER&&e.preventDefault()},u=function(e){e.keyCode===p.ENTER&&a("click",e)},d=function(e){a("click",e)},f=function(){c.value&&c.value.focus()};return m((function(){n.autofocus&&f()})),r({focus:f,blur:function(){c.value&&c.value.blur()}}),function(){var o,a=n.noStyle,r=n.disabled,p=e(n,R),f={};return a||(f=t({},P)),r&&(f.pointerEvents="none"),b("div",t(t(t({role:"button",tabindex:0,ref:c},p),l),{},{onClick:d,onKeydown:s,onKeyup:u,style:t(t({},f),l.style||{})}),[null===(o=i.default)||void 0===o?void 0:o.call(i)])}}});const I={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){H(e,t,n[t])}))}return e}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=function(e,t){var o=M({},e,t.attrs);return b(n,M({},o,{icon:I}),null)};L.displayName="EnterOutlined",L.inheritAttrs=!1;const K=L;const F=v({compatConfig:{MODE:3},name:"Editable",props:{prefixCls:String,value:String,maxlength:Number,autoSize:{type:[Boolean,Object]},onSave:Function,onCancel:Function,onEnd:Function,onChange:Function,originContent:String,direction:String},setup:function(e,t){var n=t.emit,i=t.slots,a=g({current:e.value||"",lastKeyCode:void 0,inComposition:!1,cancelFlag:!1});h((function(){return e.value}),(function(e){a.current=e}));var l=y();function r(e){l.value=e}function c(e){var t=e.target.value;a.current=t.replace(/[\r\n]/g,""),n("change",a.current)}function s(){a.inComposition=!0}function u(){a.inComposition=!1}function d(e){var t=e.keyCode;t===p.ENTER&&e.preventDefault(),a.inComposition||(a.lastKeyCode=t)}function f(t){var o=t.keyCode,i=t.ctrlKey,l=t.altKey,r=t.metaKey,c=t.shiftKey;a.lastKeyCode!==o||a.inComposition||i||l||r||c||(o===p.ENTER?(C(),n("end")):o===p.ESC&&(a.current=e.originContent,n("cancel")))}function v(){C()}function C(){n("save",a.current.trim())}m((function(){if(l.value){var e,t=null===(e=l.value)||void 0===e?void 0:e.resizableTextArea,n=null==t?void 0:t.textArea;n.focus();var o=n.value.length;n.setSelectionRange(o,o)}}));var T=x((function(){var t;return o(t={},"".concat(e.prefixCls),!0),o(t,"".concat(e.prefixCls,"-edit-content"),!0),o(t,"".concat(e.prefixCls,"-rtl"),"rtl"===e.direction),t}));return function(){return b("div",{class:T.value},[b(j,{ref:r,maxlength:e.maxlength,value:a.current,onChange:c,onKeydown:d,onKeyup:f,onCompositionstart:s,onCompositionend:u,onBlur:v,rows:1,autoSize:void 0===e.autoSize||e.autoSize},null),i.enterIcon?i.enterIcon({className:"".concat(e.prefixCls,"-edit-content-confirm")}):b(K,{class:"".concat(e.prefixCls,"-edit-content-confirm")},null)])}}});var U,V={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function W(e,t){e.setAttribute("aria-hidden","true");var n,o=window.getComputedStyle(t),i=(n=o,Array.prototype.slice.apply(n).map((function(e){return"".concat(e,": ").concat(n.getPropertyValue(e),";")})).join(""));e.setAttribute("style",i),e.style.position="fixed",e.style.left="0",e.style.height="auto",e.style.minHeight="auto",e.style.maxHeight="auto",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.borderTopWidth="0",e.style.borderBottomWidth="0",e.style.top="-999999px",e.style.zIndex="-1000",e.style.textOverflow="clip",e.style.whiteSpace="normal",e.style.webkitLineClamp="none"}const $=function(e,t,n,o,i){U||((U=document.createElement("div")).setAttribute("aria-hidden","true"),document.body.appendChild(U));var a=t.rows,l=t.suffix,r=void 0===l?"":l,c=function(e){var t=document.createElement("div");W(t,e),t.appendChild(document.createTextNode("text")),document.body.appendChild(t);var n=t.getBoundingClientRect().height;return document.body.removeChild(t),n}(e),s=Math.round(c*a*100)/100;W(U,e);var u=C({render:function(){return b("div",{style:V},[b("span",{style:V},[n,r]),b("span",{style:V},[o])])}});function d(){return Math.round(100*U.getBoundingClientRect().height)/100-.1<=s}if(u.mount(U),d())return u.unmount(),{content:n,text:U.innerHTML,ellipsis:!1};var p=Array.prototype.slice.apply(U.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter((function(e){var t=e.nodeType,n=e.data;return 8!==t&&""!==n})),f=Array.prototype.slice.apply(U.childNodes[0].childNodes[1].cloneNode(!0).childNodes);u.unmount();var v=[];U.innerHTML="";var y=document.createElement("span");U.appendChild(y);var m=document.createTextNode(i+r);function g(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.length,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=Math.floor((n+o)/2),l=t.slice(0,a);if(e.textContent=l,n>=o-1)for(var r=o;r>=n;r-=1){var c=t.slice(0,r);if(e.textContent=c,d()||!c)return r===t.length?{finished:!1,vNode:t}:{finished:!0,vNode:c}}return d()?g(e,t,a,o,a):g(e,t,n,a,i)}function h(e){var t;if(3===e.nodeType){var n=e.textContent||"",o=document.createTextNode(n);return t=o,y.insertBefore(t,m),g(o,n)}return{finished:!1,vNode:null}}return y.appendChild(m),f.forEach((function(e){U.appendChild(e)})),p.some((function(e){var t=h(e),n=t.finished,o=t.vNode;return o&&v.push(o),n})),{content:v,text:U.innerHTML,ellipsis:!0}};var _=["prefixCls","class","direction","component"];const q=v({name:"ATypography",inheritAttrs:!1,props:{prefixCls:String,direction:String,component:String},setup:function(n,l){var r=l.slots,c=l.attrs,s=i("typography",n),u=s.prefixCls,d=s.direction;return function(){var i,l=t(t({},n),c);l.prefixCls,l.class,l.direction;var s=l.component,p=void 0===s?"article":s,f=e(l,_);return b(p,t({class:a(u.value,o({},"".concat(u.value,"-rtl"),"rtl"===d.value),c.class)},f),{default:function(){return[null===(i=r.default)||void 0===i?void 0:i.call(r)]}})}}});const Q=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}};var X={"text/plain":"Text","text/html":"Url",default:"Text"};function G(e,t){var n,o,i,a,l,r=!1;t||(t={});t.debug;try{if(o=Q(),i=document.createRange(),a=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),void 0===n.clipboardData){window.clipboardData.clearData();var o=X[t.format]||X.default;window.clipboardData.setData(o,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(l),i.selectNodeContents(l),a.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");r=!0}catch(c){try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),r=!0}catch(s){n=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(n,e)}}finally{a&&("function"==typeof a.removeRange?a.removeRange(i):a.removeAllRanges()),l&&document.body.removeChild(l),o()}return r}const J={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){Z(e,t,n[t])}))}return e}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ee=function(e,t){var o=Y({},e,t.attrs);return b(n,Y({},o,{icon:J}),null)};ee.displayName="CopyOutlined",ee.inheritAttrs=!1;const te=ee;const ne={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){ie(e,t,n[t])}))}return e}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ae=function(e,t){var o=oe({},e,t.attrs);return b(n,oe({},o,{icon:ne}),null)};ae.displayName="EditOutlined",ae.inheritAttrs=!1;const le=ae;var re=["type","disabled","content","class","style"],ce=k("webkitLineClamp"),se=k("textOverflow"),ue=function(){return{editable:{type:[Boolean,Object],default:void 0},copyable:{type:[Boolean,Object],default:void 0},prefixCls:String,component:String,type:String,disabled:{type:Boolean,default:void 0},ellipsis:{type:[Boolean,Object],default:void 0},code:{type:Boolean,default:void 0},mark:{type:Boolean,default:void 0},underline:{type:Boolean,default:void 0},delete:{type:Boolean,default:void 0},strong:{type:Boolean,default:void 0},keyboard:{type:Boolean,default:void 0},content:String,"onUpdate:content":Function}};const de=v({compatConfig:{MODE:3},name:"Base",inheritAttrs:!1,props:ue(),setup:function(n,a){var d=a.slots,p=a.attrs,v=a.emit,C=i("typography",n),k=C.prefixCls,j=C.direction,R=g({copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1,expandStr:"",copyStr:"",copiedStr:"",editStr:"",copyId:void 0,rafId:void 0,prevProps:void 0,originContent:""}),P=y(),I=y(),M=x((function(){var e=n.ellipsis;return e?t({rows:1,expandable:!1},"object"===l(e)?e:null):{}}));function H(e){var t=M.value.onExpand;R.expanded=!0,null==t||t(e)}function L(e){e.preventDefault(),R.originContent=n.content,Z(!0)}function K(e){U(e),Z(!1)}function U(e){var t=_.value.onChange;e!==n.content&&(v("update:content",e),null==t||t(e))}function V(){var e,t;null===(e=(t=_.value).onCancel)||void 0===e||e.call(t),Z(!1)}function W(e){e.preventDefault(),e.stopPropagation();var o,i,a=n.copyable,r=t({},"object"===l(a)?a:null);void 0===r.text&&(r.text=n.ellipsis||n.editable?n.content:null===(o=P.value)||void 0===o||null===(i=o.$el)||void 0===i?void 0:i.innerText),G(r.text||""),R.copied=!0,O((function(){r.onCopy&&r.onCopy(),R.copyId=setTimeout((function(){R.copied=!1}),3e3)}))}m((function(){R.clientRendered=!0})),T((function(){clearTimeout(R.copyId),r.cancel(R.rafId)})),h([function(){return M.value.rows},function(){return n.content}],(function(){O((function(){ee()}))}),{flush:"post",deep:!0,immediate:!0}),S((function(){void 0===n.content&&(u(!n.editable,"Typography","When `editable` is enabled, please use `content` instead of children"),u(!n.ellipsis,"Typography","When `ellipsis` is enabled, please use `content` instead of children"))}));var _=x((function(){var e=n.editable;return e?t({},"object"===l(e)?e:null):{editing:!1}})),Q=A(!1,{value:x((function(){return _.value.editing}))}),X=c(Q,2),J=X[0],Y=X[1];function Z(e){var t=_.value.onStart;e&&t&&t(),Y(e)}function ee(){r.cancel(R.rafId),R.rafId=r((function(){oe()}))}h(J,(function(e){var t;e||(null===(t=I.value)||void 0===t||t.focus())}),{flush:"post"});var ne=x((function(){var e=M.value,t=e.rows,o=e.expandable,i=e.suffix,a=e.onEllipsis,l=e.tooltip;return!i&&!l&&(!(n.editable||n.copyable||o||a)&&(1===t?se:ce))})),oe=function(){var e,t,o=R.ellipsisText,i=R.isEllipsis,a=M.value,l=a.rows,r=a.suffix,c=a.onEllipsis;if(l&&!(l<0)&&null!==(e=P.value)&&void 0!==e&&e.$el&&!R.expanded&&void 0!==n.content&&!ne.value){var s=$(null===(t=P.value)||void 0===t?void 0:t.$el,{rows:l,suffix:r},n.content,de(!0),"..."),u=s.content,d=s.text,p=s.ellipsis;o===d&&R.isEllipsis===p||(R.ellipsisText=d,R.ellipsisContent=u,R.isEllipsis=p,i!==p&&c&&c(p))}};function ie(e){var t=M.value,n=t.expandable,o=t.symbol;if(!n)return null;if(!e&&(R.expanded||!R.isEllipsis))return null;var i=(d.ellipsisSymbol?d.ellipsisSymbol():o)||R.expandStr;return b("a",{key:"expand",class:"".concat(k.value,"-expand"),onClick:H,"aria-label":R.expandStr},[i])}function ae(){if(n.editable){var e=n.editable,t=e.tooltip,o=e.triggerType,i=void 0===o?["icon"]:o,a=d.editableIcon?d.editableIcon():b(le,{role:"button"},null),l=d.editableTooltip?d.editableTooltip():R.editStr,r="string"==typeof l?l:"";return-1!==i.indexOf("icon")?b(f,{key:"edit",title:!1===t?"":l},{default:function(){return[b(z,{ref:I,class:"".concat(k.value,"-edit"),onClick:L,"aria-label":r},{default:function(){return[a]}})]}}):null}}function ue(){if(n.copyable){var e=n.copyable.tooltip,t=R.copied?R.copiedStr:R.copyStr,i=d.copyableTooltip?d.copyableTooltip({copied:R.copied}):t,a="string"==typeof i?i:"",l=R.copied?b(B,null,null):b(te,null,null),r=d.copyableIcon?d.copyableIcon({copied:!!R.copied}):l;return b(f,{key:"copy",title:!1===e?"":i},{default:function(){return[b(z,{class:["".concat(k.value,"-copy"),o({},"".concat(k.value,"-copy-success"),R.copied)],onClick:W,"aria-label":a},{default:function(){return[r]}})]}})}}function de(e){return[ie(e),ae(),ue()].filter((function(e){return e}))}return function(){var i,a,l,r,c,u,v,y=_.value.triggerType,m=void 0===y?["icon"]:y,g=n.ellipsis||n.editable?void 0!==n.content?n.content:null===(i=d.default)||void 0===i?void 0:i.call(d):d.default?d.default():n.content;return J.value?(a=p.class,l=p.style,r=_.value,c=r.maxlength,u=r.autoSize,v=r.onEnd,b(F,{class:a,style:l,prefixCls:k.value,value:n.content,originContent:R.originContent,maxlength:c,autoSize:u,onSave:K,onChange:U,onCancel:V,onEnd:v,direction:j.value},{enterIcon:d.editableEnterIcon})):b(s,{componentName:"Text",children:function(i){var a,l=t(t({},n),p),r=l.type,c=l.disabled;l.content;var s=l.class,u=l.style,v=e(l,re),y=M.value,h=y.rows,x=y.suffix,C=y.tooltip,T=i.edit,S=i.copy,O=i.copied,A=i.expand;R.editStr=T,R.copyStr=S,R.copiedStr=O,R.expandStr=A;var B=D(v,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","onUpdate:content"]),z=ne.value,I=1===h&&z,H=h&&h>1&&z,K=g;if(h&&R.isEllipsis&&!R.expanded&&!z){var F,U=v.title,V=U||"";U||"string"!=typeof g&&"number"!=typeof g||(V=String(g)),V=null===(F=V)||void 0===F?void 0:F.slice(String(R.ellipsisContent||"").length),K=b(w,null,[E(R.ellipsisContent),b("span",{title:V,"aria-hidden":"true"},["..."]),x])}else K=b(w,null,[g,x]);K=function(e,t){var n=e.mark,o=e.code,i=e.underline,a=e.delete,l=e.strong,r=e.keyboard,c=t;function s(e,t){if(e){var n=c;c=b(t,null,{default:function(){return[n]}})}}return s(l,"strong"),s(i,"u"),s(a,"del"),s(o,"code"),s(n,"mark"),s(r,"kbd"),c}(n,K);var W=C&&h&&R.isEllipsis&&!R.expanded&&!z,$=d.ellipsisTooltip?d.ellipsisTooltip():C;return b(N,{onResize:ee,disabled:!h},{default:function(){return[b(q,t({ref:P,class:[(a={},o(a,"".concat(k.value,"-").concat(r),r),o(a,"".concat(k.value,"-disabled"),c),o(a,"".concat(k.value,"-ellipsis"),h),o(a,"".concat(k.value,"-single-line"),1===h&&!R.isEllipsis),o(a,"".concat(k.value,"-ellipsis-single-line"),I),o(a,"".concat(k.value,"-ellipsis-multiple-line"),H),a),s],style:t(t({},u),{},{WebkitLineClamp:H?h:void 0}),"aria-label":undefined,direction:j.value,onClick:-1!==m.indexOf("text")?L:function(){}},B),{default:function(){return[W?b(f,{title:!0===C?g:$},{default:function(){return[b("span",null,[K])]}}):K,de()]}})]}})}},null)}}});var pe=["ellipsis","rel"],fe=function(n,o){var i=o.slots,a=o.attrs,r=t(t({},n),a),c=r.ellipsis,s=r.rel,d=e(r,pe);u("object"!==l(c),"Typography.Link","`ellipsis` only supports boolean value.");var p=t(t({},d),{},{rel:void 0===s&&"_blank"===d.target?"noopener noreferrer":s,ellipsis:!!c,component:"a"});return delete p.navigate,b(de,p,i)};fe.displayName="ATypographyLink",fe.inheritAttrs=!1,fe.props=D(t(t({},ue()),{},{ellipsis:{type:Boolean,default:void 0}}),["component"]);const ve=fe;var ye=function(e,n){var o=n.slots,i=n.attrs,a=t(t({},e),{},{component:"div"},i);return b(de,a,o)};ye.displayName="ATypographyParagraph",ye.inheritAttrs=!1,ye.props=D(ue(),["component"]);const me=ye;var be=function(e,n){var o=n.slots,i=n.attrs,a=e.ellipsis;u("object"!==l(a)||!a||!("expandable"in a)&&!("rows"in a),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props.");var r=t(t({},e),{},{ellipsis:a&&"object"===l(a)?D(a,["expandable","rows"]):a,component:"span"},i);return b(de,r,o)};be.displayName="ATypographyText",be.inheritAttrs=!1,be.props=t(t({},D(ue(),["component"])),{},{ellipsis:{type:[Boolean,Object],default:void 0}});const ge=be;var he=["level"],xe=d(1,2,3,4,5),Ce=function(n,o){var i,a=o.slots,l=o.attrs,r=n.level,c=void 0===r?1:r,s=e(n,he);-1!==xe.indexOf(c)?i="h".concat(c):(u(!1,"Typography","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value."),i="h1");var d=t(t({},s),{},{component:i},l);return b(de,d,a)};Ce.displayName="ATypographyTitle",Ce.inheritAttrs=!1,Ce.props=t(t({},D(ue(),["component","strong"])),{},{level:Number});const Te=Ce;q.Text=ge,q.Title=Te,q.Paragraph=me,q.Link=ve,q.Base=de,q.install=function(e){return e.component(q.name,q),e.component(q.Text.displayName,ge),e.component(q.Title.displayName,Te),e.component(q.Paragraph.displayName,me),e.component(q.Link.displayName,ve),e};export{q as T,me as _};
