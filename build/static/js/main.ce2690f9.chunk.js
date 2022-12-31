(this["webpackJsonpshort-url"]=this["webpackJsonpshort-url"]||[]).push([[0],{43:function(e,s,t){},48:function(e,s,t){"use strict";t.r(s);var n=t(1),a=t.n(n),c=t(14),r=t.n(c),i=(t(21),t(22),t(43),t(0)),l=function(){return Object(i.jsx)("div",{className:"hero container",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"info col-lg-6 col-sm-1",children:[Object(i.jsxs)("h1",{children:["More than just ",Object(i.jsx)("br",{})," shorter links"]}),Object(i.jsx)("p",{children:"Build your brand\u2019s recognition and get detailed insights on how your links are performing."}),Object(i.jsx)("button",{className:"btn rounded-pill px-6 py-2",children:"Get Started"})]}),Object(i.jsx)("div",{className:"work col-lg-6 col-sm-1",children:Object(i.jsx)("img",{src:"./images/illustration-working.svg",alt:"work"})})]})})},o=function(){return Object(i.jsx)("nav",{className:"sh-navbar navbar navbar-expand-lg ",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"/#",children:Object(i.jsx)("img",{src:"./images/logo.svg",alt:"Logo"})}),Object(i.jsx)("button",{className:"navbar-toggler shadow-none",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"sh-navContainer collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item ms-lg-4",children:Object(i.jsx)("a",{className:"nav-link mt-sm-3 mt-lg-0 ","aria-current":"page",href:"/#",children:"Features"})}),Object(i.jsx)("li",{className:"nav-item ms-sm-0  ms-lg-4",children:Object(i.jsx)("a",{className:"nav-link",href:"/#",children:"Pricing"})}),Object(i.jsx)("li",{className:"res nav-item mx-sm-auto  ms-lg-4",children:Object(i.jsx)("a",{className:"nav-link",href:"/#",children:"Resources"})})]}),Object(i.jsxs)("ul",{className:"navSign navbar-nav mb-2 mx-sm-4 mb-lg-0 bg-sm-primary",children:[Object(i.jsx)("li",{className:"nav-item  ms-lg-4",children:Object(i.jsx)("a",{className:"nav-link",href:"/#",children:"login"})}),Object(i.jsx)("li",{className:"nav-item  ms-lg-4",children:Object(i.jsx)("a",{className:"nav-link signUp btn rounded-pill px-4",href:"/#",children:"sign Up"})})]})]})]})})},j=t(7),d=t(15),b=t(2),h=t(16),m=t.n(h),x=function(){var e=Object(n.useState)(""),s=Object(b.a)(e,2),t=s[0],a=s[1],c=Object(n.useState)({ok:"",result:{original_link:"",short_link:""}}),r=Object(b.a)(c,2),l=r[0],o=r[1],h=Object(n.useState)("copy!"),x=Object(b.a)(h,2),u=x[0],O=x[1],g=function(e){if(e.preventDefault(),t){var s=function(){var e=Object(d.a)(Object(j.a)().mark((function e(){var s,n;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.shrtco.de/v2/shorten?url=".concat(t));case 2:return s=e.sent,e.next=5,s.json();case 5:n=e.sent,console.log(n),!1===n.ok?m()("Oops!","sorry invalid url","error"):(o(n),a(""));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();s()}};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("form",{className:"container",onSubmit:g,children:[Object(i.jsxs)("div",{className:"container input",children:[Object(i.jsx)("input",{type:"text",placeholder:"shorten a link here.....",onChange:function(e){return a(e.target.value)},value:t}),Object(i.jsx)("button",{className:"btn",type:"submit",onClick:g,children:"Shorten it!"})]}),l.result.original_link.length>0&&Object(i.jsxs)("div",{className:"shorted-div container",children:[Object(i.jsx)("span",{className:"original-link",children:l.result.original_link}),Object(i.jsx)("a",{href:l.result.original_link,rel:"noreferrer",target:"_blank",className:"short-link",children:l.result.short_link}),Object(i.jsx)("button",{className:"btn btn-primary",onClick:function(e){navigator.clipboard.writeText(l.result.short_link),e.currentTarget.style.backgroundColor="hsl(257, 27%, 26%)",O("copied")},children:u})]})]})})},u=function(e){var s=e.image,t=e.title,n=e.para;return Object(i.jsxs)("div",{className:"sh-card bg-light p-5",children:[Object(i.jsx)("div",{className:"sh-card-image",children:Object(i.jsx)("img",{src:"./images/".concat(s,".svg"),alt:"icon"})}),Object(i.jsx)("h2",{children:t}),Object(i.jsx)("p",{children:n})]})},O=function(){return Object(i.jsxs)("div",{className:"card-grid container text-center my-5",children:[Object(i.jsxs)("div",{className:"sh-row row gap-3",children:[Object(i.jsx)("div",{className:"col",children:Object(i.jsx)(u,{image:"icon-brand-recognition",title:"Brand Recognition",para:"Boost your brand recognition with each click. Generic links don\u2019t mean a thing. Branded links help instil confidence in your content."})}),Object(i.jsx)("div",{className:"detailed col",children:Object(i.jsx)(u,{image:"icon-detailed-records",title:"Detailed Records",para:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."})}),Object(i.jsx)("div",{className:"custom col",children:Object(i.jsx)(u,{image:"icon-fully-customizable",title:"Fully Customizable",para:"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."})})]}),Object(i.jsx)("div",{className:"line"})]})},g=function(){return Object(i.jsxs)("div",{className:"advanced pb-5",children:[Object(i.jsxs)("div",{className:"info",children:[Object(i.jsx)("h1",{children:"Advanced Statistics"}),Object(i.jsxs)("p",{children:["Track how your links are performing across the web with ",Object(i.jsx)("br",{})," our advanced statistics dashboard."]})]}),Object(i.jsx)(O,{})]})},p=function(){return Object(i.jsxs)("div",{className:"top-footer py-5 text-center",children:[Object(i.jsx)("h1",{className:"mb-4",children:"Boost your links today"}),Object(i.jsx)("button",{className:"btn rounded-pill text-light  px-4",children:"Get Started"})]})},v=function(){return Object(i.jsxs)("div",{className:"footer",children:[Object(i.jsxs)("div",{className:" container d-flex p-5",children:[Object(i.jsx)("h2",{children:"Shortly"}),Object(i.jsxs)("div",{className:"features",children:[Object(i.jsx)("h3",{children:"Features"}),Object(i.jsx)("p",{children:"Link Shortening"}),Object(i.jsx)("p",{children:"Branded Links"}),Object(i.jsx)("p",{children:"Analytics"})]}),Object(i.jsxs)("div",{className:"resources",children:[Object(i.jsx)("h3",{children:"Resources"}),Object(i.jsx)("p",{children:"Blog"}),Object(i.jsx)("p",{children:"Developers"}),Object(i.jsx)("p",{children:"Support"})]}),Object(i.jsxs)("div",{className:"company",children:[Object(i.jsx)("h3",{children:"Company"}),Object(i.jsx)("p",{children:"About"}),Object(i.jsx)("p",{children:"Our Team"}),Object(i.jsx)("p",{children:"Careers"}),Object(i.jsx)("p",{children:"Contact"})]}),Object(i.jsxs)("div",{className:"social-icons d-flex",children:[Object(i.jsx)("i",{className:"fa-brands fa-square-facebook"}),Object(i.jsx)("i",{className:"fa-brands fa-twitter"}),Object(i.jsx)("i",{className:"fa-brands fa-pinterest"}),Object(i.jsx)("i",{className:"fa-brands fa-instagram"})]})]}),Object(i.jsxs)("div",{className:"attribution",children:["Challenge by",Object(i.jsx)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",rel:"noreferrer",children:"Frontend Mentor"}),". Coded by"," ",Object(i.jsx)("a",{href:"https://www.linkedin.com/in/ahmed-esmail-a28152239",children:"Ahmed Esmail"}),"."]})]})},f=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(o,{}),Object(i.jsx)(l,{}),Object(i.jsx)(x,{}),Object(i.jsx)(g,{}),Object(i.jsx)(p,{}),Object(i.jsx)(v,{})]})};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.ce2690f9.chunk.js.map