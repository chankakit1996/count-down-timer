import{c as y,o as d,a as p,b as g,d as u,r as $,e as m,F as f,f as o,t as l,g as b,p as C,h as S,i as M,j as D,k,l as z}from"./vendor.8aa250b5.js";const x=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}};x();const T=y({modules:{}});var _=(e,n)=>{const r=e.__vccOpts||e;for(const[a,t]of n)r[a]=t;return r};const I={},B={version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve"},L=g(`<g><g><g><path d="M256,0C114.617,0,0,114.617,0,256s114.617,256,256,256s256-114.617,256-256S397.383,0,256,0z M256,494.933
				C124.043,494.933,17.067,387.957,17.067,256S124.043,17.067,256,17.067S494.933,124.043,494.933,256S387.957,494.933,256,494.933
				z"></path><path d="M162.133,256c20.46,0,34.133-27.346,34.133-59.733c0-32.388-13.673-59.733-34.133-59.733
				c-20.461,0-34.133,27.346-34.133,59.733C128,228.654,141.673,256,162.133,256z M162.133,153.6
				c7.819,0,17.067,18.495,17.067,42.667s-9.248,42.667-17.067,42.667c-7.819,0-17.067-18.495-17.067-42.667
				S154.314,153.6,162.133,153.6z"></path><path d="M349.867,136.533c-20.461,0-34.133,27.346-34.133,59.733c0,32.388,13.673,59.733,34.133,59.733
				c20.46,0,34.133-27.346,34.133-59.733C384,163.879,370.327,136.533,349.867,136.533z M349.867,238.933
				c-7.819,0-17.067-18.495-17.067-42.667s9.248-42.667,17.067-42.667s17.067,18.495,17.067,42.667S357.686,238.933,349.867,238.933
				z"></path><path d="M392.533,119.467c-18.873,0-34.133-15.26-34.133-34.133c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533
				c0,28.299,22.901,51.2,51.2,51.2c4.713,0,8.533-3.82,8.533-8.533S397.246,119.467,392.533,119.467z"></path><path d="M170.667,85.333c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533c0,18.873-15.26,34.133-34.133,34.133
				c-4.713,0-8.533,3.82-8.533,8.533s3.82,8.533,8.533,8.533C147.766,136.533,170.667,113.632,170.667,85.333z"></path><path d="M256,298.667c-45.975,0-86.916,24.514-109.784,63.989c-2.362,4.078-0.971,9.299,3.107,11.661
				c4.078,2.362,9.299,0.971,11.661-3.107c19.868-34.298,55.241-55.477,95.016-55.477s75.148,21.179,95.016,55.477
				c2.362,4.078,7.583,5.469,11.661,3.107c4.078-2.362,5.469-7.583,3.107-11.661C342.916,323.18,301.975,298.667,256,298.667z"></path></g></g></g>`,1),N=[L];function A(e,n,r,a,t,s){return d(),p("svg",B,N)}var O=_(I,[["render",A]]);const E=u({components:{SadIcon:O},name:"CountDownTimer",setup(){const e=()=>{const r=new Date("2022-12-25"),a=new Date,t=(r.getTime()-a.getTime())/1e3,s=Math.floor(t%60),c=Math.floor(t/60)%60,w=Math.floor(t/60/60)%24;return{days:Math.floor(t/60/60/24),hours:w,minutes:c,seconds:s,total:t}},n=$(e());return setInterval(()=>{n.value=e()},1e3),{time:n}}}),i=e=>(C("data-v-7bda5c75"),e=e(),S(),e),F={class:"container"},K=i(()=>o("h1",{class:"title"},"This is a Ken Count Down Timer",-1)),P=i(()=>o("h2",{class:"timer-title"},"2022 Christmas Day",-1)),V={class:"timer-wrapper"},j={class:"date-wrapper day-wrapper"},q={class:"date day"},H=i(()=>o("div",{class:"label"},"days",-1)),R={class:"date-wrapper hour-wrapper"},W={class:"date hour"},G=i(()=>o("div",{class:"label"},"hours",-1)),J={class:"date-wrapper minute-wrapper"},Q={class:"date minute"},U=i(()=>o("div",{class:"label"},"mins",-1)),X={class:"date-wrapper second-wrapper"},Y={class:"date second"},Z=i(()=>o("div",{class:"label"},"seconds",-1)),tt=i(()=>o("h2",{class:"timer-title"},"2022 Christmas Day is over",-1));function et(e,n,r,a,t,s){const c=m("sad-icon");return d(),p("div",F,[K,e.time.total>0?(d(),p(f,{key:0},[P,o("div",V,[o("div",j,[o("div",q,l(e.time.days),1),H]),o("div",R,[o("div",W,l(e.time.hours),1),G]),o("div",J,[o("div",Q,l(e.time.minutes),1),U]),o("div",X,[o("div",Y,l(e.time.seconds),1),Z])])],64)):(d(),p(f,{key:1},[tt,b(c,{class:"sad-icon-wrapper"})],64))])}var st=_(E,[["render",et],["__scopeId","data-v-7bda5c75"]]);const ot="count-down-timer",v=[{path:"",component:st},{path:"/:catchAll(.*)",redirect:"/"}];v.forEach(e=>{e.path=`/${ot}/`+e.path});const nt=M({history:D(),routes:v,scrollBehavior(e,n,r){return{el:"#app",top:0,behavior:"smooth"}}}),rt=u({name:"App",setup(){return document.title="Ken Count Down Timer",{}}});function at(e,n,r,a,t,s){const c=m("router-view");return d(),k(c)}var ct=_(rt,[["render",at]]);const h=z(ct);h.use(T);h.use(nt);h.mount("#app");
