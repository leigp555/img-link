import{e,u as t,H as a,f as n,W as r,a as o}from"./index-c9e87c00.js";import{A as u}from"./default-542f2d13.js";function c(o,u){var c=u||{},l=c.defaultValue,i=c.value,f=void 0===i?e():i,v="function"==typeof o?o():o;void 0!==f.value&&(v=t(f)),void 0!==l&&(v="function"==typeof l?l():l);var s=e(v),p=e(v);return a((function(){var e=void 0!==f.value?f.value:s.value;u.postState&&(e=u.postState(e)),p.value=e})),n(f,(function(){s.value=f.value})),[p,function(e){var t=p.value;s.value=e,r(p.value)!==e&&u.onChange&&u.onChange(e,t)}]}var l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){f(e,t,a[t])}))}return e}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var v=function(e,t){var a=i({},e,t.attrs);return o(u,i({},a,{icon:l}),null)};v.displayName="CheckOutlined",v.inheritAttrs=!1;var s=v;export{s as C,c as u};
