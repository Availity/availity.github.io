(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{234:function(e,a,t){"use strict";t.r(a);t(230),t(7),t(10),t(5),t(231);var s=t(148),n=t(0),r=t.n(n),c=t(232),l=t(233),i=t(236),o=t(237),m=t(238),d=t(6),b=t(9),u=t(85),p=t(1),f=t.n(p),g=t(3),h=t.n(g),v=t(2),N=t(87),y=Object(u.a)({},N.Transition.propTypes,{children:f.a.oneOfType([f.a.arrayOf(f.a.node),f.a.node]),tag:v.h,baseClass:f.a.string,baseClassActive:f.a.string,className:f.a.string,cssModule:f.a.object,innerRef:f.a.oneOfType([f.a.object,f.a.string,f.a.func])}),O=Object(u.a)({},N.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:v.c.Fade,appear:!0,enter:!0,exit:!0,in:!0});function j(e){var a=e.tag,t=e.baseClass,s=e.baseClassActive,n=e.className,c=e.cssModule,l=e.children,i=e.innerRef,o=Object(b.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),m=Object(v.g)(o,v.a),u=Object(v.f)(o,v.a);return r.a.createElement(N.Transition,m,function(e){var o="entered"===e,m=Object(v.e)(h()(n,t,o&&s),c);return r.a.createElement(a,Object(d.a)({className:m},u,{ref:i}),l)})}j.propTypes=y,j.defaultProps=O;var E=j,x={children:f.a.node,className:f.a.string,closeClassName:f.a.string,closeAriaLabel:f.a.string,cssModule:f.a.object,color:f.a.string,fade:f.a.bool,isOpen:f.a.bool,toggle:f.a.func,tag:v.h,transition:f.a.shape(E.propTypes),innerRef:f.a.oneOfType([f.a.object,f.a.string,f.a.func])},w={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:Object(u.a)({},E.defaultProps,{unmountOnExit:!0})};function k(e){var a=e.className,t=e.closeClassName,s=e.closeAriaLabel,n=e.cssModule,c=e.tag,l=e.color,i=e.isOpen,o=e.toggle,m=e.children,p=e.transition,f=e.fade,g=e.innerRef,N=Object(b.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),y=Object(v.e)(h()(a,"alert","alert-"+l,{"alert-dismissible":o}),n),O=Object(v.e)(h()("close",t),n),j=Object(u.a)({},E.defaultProps,p,{baseClass:f?p.baseClass:"",timeout:f?p.timeout:0});return r.a.createElement(E,Object(d.a)({},N,j,{tag:c,className:y,in:i,role:"alert",innerRef:g}),o?r.a.createElement("button",{type:"button",className:O,"aria-label":s,onClick:o},r.a.createElement("span",{"aria-hidden":"true"},"×")):null,m)}k.propTypes=x,k.defaultProps=w;var R=k,C=t(116),M=t(155),T=(t(8),t(36),t(12),{tag:v.h,inverse:f.a.bool,color:f.a.string,block:Object(v.d)(f.a.bool,'Please use the props "body"'),body:f.a.bool,outline:f.a.bool,className:f.a.string,cssModule:f.a.object,innerRef:f.a.oneOfType([f.a.object,f.a.string,f.a.func])}),A=function(e){var a=e.className,t=e.cssModule,s=e.color,n=e.block,c=e.body,l=e.inverse,i=e.outline,o=e.tag,m=e.innerRef,u=Object(b.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),p=Object(v.e)(h()(a,"card",!!l&&"text-white",!(!n&&!c)&&"card-body",!!s&&(i?"border":"bg")+"-"+s),t);return r.a.createElement(o,Object(d.a)({},u,{className:p,ref:m}))};A.propTypes=T,A.defaultProps={tag:"div"};var P=A,z={tag:v.h,className:f.a.string,cssModule:f.a.object},K=function(e){var a=e.className,t=e.cssModule,s=e.tag,n=Object(b.a)(e,["className","cssModule","tag"]),c=Object(v.e)(h()(a,"card-title"),t);return r.a.createElement(s,Object(d.a)({},n,{className:c}))};K.propTypes=z,K.defaultProps={tag:"div"};var S=K;t(69),t(15);function L(e){var a=e.tag,t=e.color,s=e.size,n=e.src,c=e.alt,l=e.branded,i=e.className,o=e.children,m=function(e,a){if(null==e)return{};var t,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,["tag","color","size","src","alt","branded","className","children"]),d=[i,"app-icon",l?"app-icon-branded-"+t:"app-icon-"+t,s&&"app-icon-"+s,n&&"border-0"].filter(function(e){return e}).join(" ");return r.a.createElement(a,Object.assign({},m,{className:d}),n?r.a.createElement("img",{className:"w-100 h-100 align-baseline",src:n,alt:c}):o,l&&r.a.createElement("span",{className:"caret"}))}L.defaultProps={tag:"span",color:"black"};var D=L;var I=function(e){var a=e.name,t=e.icon,s=e.description,n=e.className,c=e.to,l=function(e,a){if(null==e)return{};var t,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,["name","icon","description","className","to"]);return r.a.createElement(m.a,{xs:12,md:6,lg:6,xl:3,className:"d-flex flex-fill"},r.a.createElement(P,Object.assign({body:!0,tag:"a",role:"link",style:{textDecoration:"none"},href:"https://availity.github.io"+c,"aria-label":a,className:"mb-3 d-flex flex-column align-items-center text-white text-center no-underline "+n},l),r.a.createElement(D,{size:"lg",color:"none",className:"d-flex flex-row align-items-center justify-content-center"},t),r.a.createElement(S,{tag:"h2",className:"pt-2 h3"},a),r.a.createElement("span",{className:"mb-0 mt-1"},s)))},U=function(){return r.a.createElement("p",{className:"text-center mt-3"},"Made with ",r.a.createElement("i",{className:"icon icon-heart text-danger"})," by"," ",r.a.createElement("a",{href:"http://www.availity.com"},"Availity")," 2019")},G={"/availity-workflow":{text:"Getting Started",matchRegex:"^/availity-workflow"},"/availity-react":{text:"Components",matchRegex:"^/availity-react"},"/sdk-js":{text:"Resources",matchRegex:"^/sdk-js"}};a.default=function(e){var a=e.location;return r.a.createElement(C.a,{query:"2961457723",render:function(e){var t,s,n=e.site.siteMetadata,d=n.description,b=n.title;return r.a.createElement(l.a,{role:"main"},r.a.createElement(c.a,{pathname:a.pathname,baseUrl:"https://availity.github.io",className:"pl-0 border-bottom-0",brandAttrs:{className:"pl-4"},navItems:(t="https://availity.github.io",s=G,Object.entries(s).map(function(e){var a=e[0],s=e[1],n=s.text,r=s.matchRegex;return{text:n,value:a.startsWith("/")?t+a:a,matchRegex:r}}))}),r.a.createElement(i.a,{className:"flex-fill pt-5"},r.a.createElement(o.a,null,r.a.createElement(m.a,{xs:12,className:"mb-3 border-bottom pb-3"},r.a.createElement("h1",{className:"mb-3"},b),r.a.createElement("h2",{className:"h4 text-secondary"},d)),r.a.createElement(m.a,{xs:12,className:"mb-5",tag:R,color:"light"},"Documentation for Availity Javascript SDK, React Components, UIKit, and Workflow Toolkit."),r.a.createElement(I,{name:"Getting Started",icon:r.a.createElement(M.c,{size:"2em"}),className:"bg-secondary",to:"/availity-workflow",description:"Get started with our toolkit for web application development."}),r.a.createElement(I,{name:"UI Kit",icon:r.a.createElement(M.a,{size:"2em"}),className:"bg-danger",to:"/availity-uikit",description:"Our custom CSS Kit that is built on top of Bootstrap 4."}),r.a.createElement(I,{name:"React Library",icon:r.a.createElement(M.d,{size:"2em"}),className:"bg-primary",to:"/availity-react",description:"React components built with Availity UI Kit and Reactstrap."}),r.a.createElement(I,{name:"Resources",icon:r.a.createElement(M.b,{size:"2em"}),className:"bg-success",to:"/sdk-js",description:"SDK containing different packages for interfacing with our systems."}))),r.a.createElement(U,null))},data:s})}}}]);
//# sourceMappingURL=component---src-pages-index-js-20b0443db9641fe4b098.js.map