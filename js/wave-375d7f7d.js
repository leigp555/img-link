import{u as n,p as t,j as e}from"./default-37a9e99b.js";import{d as i,g as a,n as o,K as r,P as s}from"./index-44b8c168.js";var d={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},c={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},u=[],m=[];function l(n,t,e){n.addEventListener(t,e,!1)}function f(n,t,e){n.removeEventListener(t,e,!1)}"undefined"!=typeof window&&"undefined"!=typeof document&&function(){var n=document.createElement("div").style;function t(t,e){for(var i in t)if(t.hasOwnProperty(i)){var a=t[i];for(var o in a)if(o in n){e.push(a[o]);break}}}"AnimationEvent"in window||(delete d.animationstart.animation,delete c.animationend.animation),"TransitionEvent"in window||(delete d.transitionstart.transition,delete c.transitionend.transition),t(d,u),t(c,m)}();const v={startEvents:u,addStartEventListener:function(n,t){0!==u.length?u.forEach((function(e){l(n,e,t)})):setTimeout(t,0)},removeStartEventListener:function(n,t){0!==u.length&&u.forEach((function(e){f(n,e,t)}))},endEvents:m,addEndEventListener:function(n,t){0!==m.length?m.forEach((function(e){l(n,e,t)})):setTimeout(t,0)},removeEndEventListener:function(n,t){0!==m.length&&m.forEach((function(e){f(n,e,t)}))}};var E;function p(n){return!n||null===n.offsetParent}const g=i({compatConfig:{MODE:3},name:"Wave",props:{insertExtraNode:Boolean,disabled:Boolean},setup:function(i,d){var c=d.slots,u=d.expose,m=s(),l=n("",i),f=l.csp,g=l.prefixCls;u({csp:f});var b=null,T=null,A=null,S=!1,h=null,k=!1,w=function(n){if(!k){var e=t(m);n&&n.target===e&&(S||x(e))}},y=function(n){n&&"fadeEffect"===n.animationName&&x(n.target)},L=function(){var n=i.insertExtraNode;return"".concat(g.value,n?"-click-animating":"-click-animating-without-extra-node")},x=function(n){if(n&&n!==h&&n instanceof Element){var t=i.insertExtraNode,e=L();n.setAttribute(e,"false"),E&&(E.innerHTML=""),t&&h&&n.contains(h)&&n.removeChild(h),v.removeStartEventListener(n,w),v.removeEndEventListener(n,y)}},M=function(n){if(n&&n.getAttribute&&!n.getAttribute("disabled")&&!(n.className.indexOf("disabled")>=0)){var t=function(t){if("INPUT"!==t.target.tagName&&!p(t.target)){x(n);var a=getComputedStyle(n).getPropertyValue("border-top-color")||getComputedStyle(n).getPropertyValue("border-color")||getComputedStyle(n).getPropertyValue("background-color");T=setTimeout((function(){return function(n,t){var e=i.insertExtraNode;if(!(i.disabled||!n||p(n)||n.className.indexOf("-leave")>=0)){(h=document.createElement("div")).className="".concat(g.value,"-click-animating-node");var a,o,r=L();n.removeAttribute(r),n.setAttribute(r,"true"),E=E||document.createElement("style"),!t||"#ffffff"===t||"rgb(255, 255, 255)"===t||(o=(t||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/))&&o[1]&&o[2]&&o[3]&&o[1]===o[2]&&o[2]===o[3]||/rgba\(\d*, \d*, \d*, 0\)/.test(t)||"transparent"===t||(null!==(a=f.value)&&void 0!==a&&a.nonce&&(E.nonce=f.value.nonce),h.style.borderColor=t,E.innerHTML="\n        [".concat(g.value,"-click-animating-without-extra-node='true']::after, .").concat(g.value,"-click-animating-node {\n          --antd-wave-shadow-color: ").concat(t,";\n        }"),document.body.contains(E)||document.body.appendChild(E)),e&&n.appendChild(h),v.addStartEventListener(n,w),v.addEndEventListener(n,y)}}(n,a)}),0),e.cancel(A),S=!0,A=e((function(){S=!1}),10)}};return n.addEventListener("click",t,!0),{cancel:function(){n.removeEventListener("click",t,!0)}}}};return a((function(){o((function(){var n=t(m);1===n.nodeType&&(b=M(n))}))})),r((function(){b&&b.cancel(),clearTimeout(T),k=!0})),function(){var n;return null===(n=c.default)||void 0===n?void 0:n.call(c)[0]}}});export{g as W};