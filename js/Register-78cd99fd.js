import{A as e}from"./default-b027f3eb.js";import{a,_ as t,F as s}from"./index-1bbc0c0e.js";import{I as i}from"./index-aba767bf.js";/* empty css              */import{a as r,d as n,b as l,o,j as c,Y as d,c as p,a5 as u,q as m,k as h,a8 as g,W as f,E as _,_ as v,v as y,g as w,w as b,l as x,u as k,a9 as I,r as j,p as P,m as $}from"./index-9e567f9b.js";import{_ as C}from"./SvgIcon-55949fcd.js";import{B as z}from"./button-1abb0002.js";import{_ as A}from"./Password-7f078ae4.js";import"./FormItemContext-cce2bb0e.js";import"./responsiveObserve-654b758a.js";import"./useSize-88790ede.js";import"./wave-e1b4d847.js";const O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 00-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00137 888.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 008.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 01340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 01683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"user-add",theme:"outlined"};function T(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?Object(arguments[a]):{},s=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),s.forEach((function(a){U(e,a,t[a])}))}return e}function U(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var R=function(a,t){var s=T({},a,t.attrs);return r(e,T({},s,{icon:O}),null)};R.displayName="UserAddOutlined",R.inheritAttrs=!1;const S=R,E={class:"ui-alert-content-wrap"},q={class:"ui-alert-message"},B={key:0},F={key:1},L={key:0,class:"ui-alert-description"},Z={key:0},G={key:1},D=n({__name:"Alert",props:{message:null,type:{default:"success"},closable:{type:Boolean,default:!1},description:{default:""},showIcon:{type:Boolean,default:!1},banner:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:a}){const t=e,s=l(null),i=()=>{var e;null==(e=s.value)||e.classList.add("alert-close"),a("close",t.message)};return(a,t)=>(o(),c("div",{ref_key:"wrapRef",ref:s,class:d(["ui-alert-wrap",{"alert-wrap-hasDescription":e.description||a.$slots.description,[`ui-alert-${e.type}`]:!0,"ui-alert-noBorder":e.banner}])},[e.showIcon&&!a.$slots.icon?(o(),c("div",{key:0,class:d(["ui-alert-icon",{"alert-icon-description":e.description||a.$slots.description}])},["error"===e.type?(o(),p(C,{key:0,name:"error",width:"16px",height:"16px",fill:"#ff4d4f"})):u("",!0),"loading"===e.type?(o(),p(C,{key:1,name:"loading",width:"16px",height:"16px",fill:"#1890ff",class:"alert-icon-loading"})):"info"===e.type?(o(),p(C,{key:2,name:"info",width:"16px",height:"16px",fill:"#1890ff"})):"warning"===e.type?(o(),p(C,{key:3,name:"warning",width:"16px",height:"16px",fill:"#faad14"})):"success"===e.type?(o(),p(C,{key:4,name:"success",width:"16px",height:"16px",fill:"#52c41a"})):u("",!0)],2)):u("",!0),a.$slots.icon?(o(),c("div",{key:1,class:d(["ui-alert-icon",{"alert-icon-description":e.description||a.$slots.description}])},[m(a.$slots,"icon")],2)):u("",!0),h("div",E,[h("div",{class:d(["ui-alert-content",{"alert-content-hasDescription":e.description||a.$slots.description}])},[h("div",q,[a.$slots.title?(o(),c("span",B,[m(a.$slots,"title")])):(o(),c("span",F,g(e.message),1))])],2),e.description||a.$slots.description?(o(),c("div",L,[a.$slots.description?(o(),c("span",Z,[m(a.$slots,"description")])):(o(),c("span",G,g(e.description),1))])):u("",!0)]),e.closable?(o(),c("span",{key:2,class:d(["ui-alert-close",{"ui-alert-description-close":e.description||a.$slots.description}]),onClick:i},[r(C,{name:"cancel",width:"12px",height:"12px"})],2)):u("",!0)],2))}}),M=(()=>{const e=document.getElementById("ui-message-pop");if(e)return e;const a=document.createElement("div");return a.setAttribute("id","ui-message-pop"),document.body.appendChild(a),a})(),N=()=>{const e=document.createElement("div");return M.appendChild(e),e},H=(e,a)=>_(D,"string"==typeof e?{message:e,class:"ui-message-pop",type:a,showIcon:!0}:{message:e.content,style:e.style,class:"ui-message-pop",type:a,showIcon:!0}),K=(e,a)=>{const t=N(),s=H(e,a);if(f(s).mount(t),"string"==typeof e){const e=setTimeout((()=>{t.remove(),window.clearTimeout(e)}),3e3)}else{const a=setTimeout((()=>{t.remove(),window.clearTimeout(a)}),e.duration||3e3)}},W=e=>{K(e,"success")},Y=e=>{K(e,"error")},J=a.create();async function Q(e){return J.request(e).then((e=>e.data))}J.defaults.baseURL="http://localhost:8888",J.defaults.timeout=8e3,J.defaults.withCredentials=!1,J.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",J.defaults.validateStatus=e=>e>=200&&e<400,J.interceptors.request.use((e=>(e.headers.Authorization=window.localStorage.getItem("_AUTH_TOKEN")||"",e)),(()=>Promise.reject(new Error("请求未发送")))),J.interceptors.response.use((e=>e),(e=>{if(window.navigator.onLine)if(e.response)if(401!==e.response.status)if(403!==e.response.status)if(404!==e.response.status){if(500!==e.response.status)return Promise.reject(e.response.data);Y("系统繁忙，请稍后再试")}else Y("访问内容不存在");else Y("token过期了");else Y("用户未认证");else Y("系统繁忙，请稍后再试");else Y("网络异常，请检查网络")}));const V={class:"bac-cover"},X={class:"login-wrap"},ee={class:"login"},ae=(e=>(P("data-v-1416a510"),e=e(),$(),e))((()=>h("p",{class:"title animate__animated animate__bounceInLeft"},"注册",-1))),te={style:{display:"flex",gap:"20px","justify-content":"space-between","align-items":"stretch"}},se={style:{display:"flex",gap:"20px","justify-content":"space-between","align-items":"stretch"}},ie=["src"],re=v(n({__name:"Register",setup(e){const a=I(),n=y({username:"",email:"",emailCaptcha:"",password:"",checkPassword:"",captcha:"",captchaId:""}),l=y({isGetting:!1,restTime:60}),d=y({imgUrl:"",imgId:""}),u=y({username:[{required:!0,message:"请填写用户名"},{pattern:/^[0-9A-Za-z_@/.]{3,10}$/,message:"用户名格式为3-10位(含数字、字母、下划线、@、.)",trigger:"blur"}],email:[{required:!0,message:"请填写邮箱地址"},{pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,message:"邮箱格式不正确",trigger:"blur"}],emailCaptcha:[{required:!0,message:"请填写邮箱验证码"},{pattern:/^\d{6}$/,message:"验证码错误",trigger:"blur"}],password:[{required:!0,message:"请填写密码"},{pattern:/^[a-zA-Z0-9_]{6,16}$/,message:"密码格式为6到16位(含字母、数字、下划线)",trigger:"blur"}],checkPassword:[{validator:async(e,a)=>""===a?Promise.reject(Error("请确认密码")):a!==n.password?Promise.reject(Error("两次输入不一致")):Promise.resolve()}],captcha:[{required:!0,message:"请填写图形验证码"},{pattern:/^\d{4}$/,message:"验证码不正确",trigger:"blur"}]}),m=()=>{if(!n.email||!u.email[1].pattern.test(n.email))return void Y("请输入正确的邮箱");l.isGetting=!0;const e=setInterval((()=>{l.restTime<=0&&(window.clearInterval(e),l.isGetting=!1,l.restTime=60),l.restTime-=1}),1e3);Q({url:"email/captcha",method:"POST",data:{email:n.email}}).then((()=>{W("验证码已发送")})).catch((()=>{Y("验证码未发送")}))},f=()=>{Q({url:"captcha"}).then((e=>{d.imgUrl=e.data.captchaImg,d.imgId=e.data.captchaId,n.captchaId=e.data.captchaId})).catch((()=>{Y("图形验证码获取失败,请重试")}))},_=()=>{f()};w((()=>{f()}));const v=()=>{Q({url:"user/register",method:"POST",data:n}).then((()=>{W("注册成功"),a.push("/login")})).catch((e=>{Y(e.errors.body)}))},P=()=>{Y("表单提交错误,请输入正确的信息")};return(e,a)=>{const f=i,y=t,w=z,I=A,$=j("router-link"),C=s;return o(),c("section",V,[h("div",X,[h("div",ee,[ae,r(C,{model:n,autocomplete:"on",onFinish:v,onFinishFailed:P,class:"login-form"},{default:b((()=>[r(y,{name:"username",rules:u.username,class:"username animate__animated animate__fadeInRight"},{default:b((()=>[r(f,{value:n.username,"onUpdate:value":a[0]||(a[0]=e=>n.username=e),placeholder:"用户名",size:"large"},null,8,["value"])])),_:1},8,["rules"]),r(y,{name:"email",rules:u.email,class:"email animate__animated animate__fadeInRight"},{default:b((()=>[r(f,{value:n.email,"onUpdate:value":a[1]||(a[1]=e=>n.email=e),placeholder:"邮箱",size:"large"},null,8,["value"])])),_:1},8,["rules"]),r(y,{name:"emailCaptcha",class:"emailCaptcha animate__animated animate__fadeInRight",rules:u.emailCaptcha},{default:b((()=>[h("div",te,[r(f,{value:n.emailCaptcha,"onUpdate:value":a[2]||(a[2]=e=>n.emailCaptcha=e),placeholder:"验证码",size:"large",style:{"flex-grow":"10"}},null,8,["value"]),l.isGetting?(o(),p(w,{key:0,style:{height:"40px"}},{default:b((()=>[x(g(l.restTime)+"秒后重发 ",1)])),_:1})):(o(),p(w,{key:1,style:{height:"40px"},onClick:m},{default:b((()=>[x(" 获取验证码 ")])),_:1}))])])),_:1},8,["rules"]),r(y,{name:"password",class:"password animate__animated animate__fadeInRight",rules:u.password},{default:b((()=>[r(I,{value:n.password,"onUpdate:value":a[3]||(a[3]=e=>n.password=e),placeholder:"密码",size:"large"},null,8,["value"])])),_:1},8,["rules"]),r(y,{name:"checkPassword",class:"checkPassword animate__animated animate__fadeInRight",rules:u.checkPassword},{default:b((()=>[r(I,{value:n.checkPassword,"onUpdate:value":a[4]||(a[4]=e=>n.checkPassword=e),placeholder:"确认密码",size:"large"},null,8,["value"])])),_:1},8,["rules"]),r(y,{name:"captcha",class:"captcha animate__animated animate__fadeInRight",rules:u.captcha},{default:b((()=>[h("div",se,[r(f,{value:n.captcha,"onUpdate:value":a[5]||(a[5]=e=>n.captcha=e),placeholder:"图形验证码",size:"large",style:{"flex-grow":"10"}},null,8,["value"]),h("div",{style:{"flex-shrink":"0",width:"100px",height:"40px",display:"flex","align-items":"center",cursor:"pointer"},onClick:_},[h("img",{src:d.imgUrl,alt:"验证码"},null,8,ie)])])])),_:1},8,["rules"]),r(y,{class:"loginButton animate__animated animate__fadeInRight"},{default:b((()=>[r(w,{type:"primary","html-type":"submit",style:{width:"100%",height:"40px"}},{icon:b((()=>[r(k(S))])),default:b((()=>[x(" 注册")])),_:1})])),_:1}),r(y,{class:"goLogin animate__animated animate__fadeInRight"},{default:b((()=>[r($,{to:"/login"},{default:b((()=>[x("已有账号?点击登录")])),_:1})])),_:1})])),_:1},8,["model"])])])])}}}),[["__scopeId","data-v-1416a510"]]);export{re as default};