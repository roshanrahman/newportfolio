(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{14:function(e,t,a){},157:function(e,t,a){},174:function(e,t,a){},177:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(48),c=a.n(l),i=(a(58),a(52)),o=a(2),s=(a(59),a(3)),m=function e(){Object(s.a)(this,e)};function u(){var e=localStorage.getItem("roshanPortfolioPreferences");return null===e?((e=new m).themePreference=(console.log(window.matchMedia),(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?(console.info("Dark theme detected on OS"),1):(console.info("Light theme detected on OS"),0))?"dark":"light"),e.skillPreference="designer",e):e=JSON.parse(e)}function d(e){localStorage.setItem("roshanPortfolioPreferences",JSON.stringify(e))}function h(){var e=u();"dark"===e.themePreference?(b(!1),e.themePreference="light"):(b(!0),e.themePreference="dark"),d(e)}function E(){var e=u();return console.log(e),"dark"===e.themePreference}function b(e){e?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light")}window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){var t=u(),a=e.matches?"dark":"light";t.themePreference=a,d(t),b(e.matches)}));a(60),a(61),a(62);var f=a(5),p=function(){function e(){Object(s.a)(this,e),this.list=[]}return Object(f.a)(e,[{key:"addItem",value:function(e){this.list.push(e)}},{key:"removeItem",value:function(e){this.list.replace(e,"")}},{key:"string",get:function(){return this.list.join(" ")}}]),e}(),g=a(4),v=a(13),k=a(27);var y=function(e){return function(e){switch(e.children){case"bulb-outlined":return r.a.createElement(g.f,e);case"bulb-fill":return r.a.createElement(g.a,e);case"email-fill":return r.a.createElement(g.e,e);case"email-outlined":return r.a.createElement(g.h,e);case"twitter-fill":return r.a.createElement(g.i,e);case"twitter-outlined":return r.a.createElement(v.d,e);case"github-fill":return r.a.createElement(g.c,e);case"github-outlined":return r.a.createElement(k.b,e);case"dribbble-fill":return r.a.createElement(g.b,e);case"dribbble-outlined":return r.a.createElement(g.g,e);case"arrow-down-circled":return r.a.createElement(k.a,e)}}(e)};function N(e){var t=new p;if(t.addItem(e.otherClasses),t.addItem("button"),e.rounded&&t.addItem("rounded"),e.outlined&&t.addItem("outlined"),e.gradient)switch(e.gradient){case"primary":t.addItem("box-primary-gradient");break;case"dribbble":t.addItem("box-dribbble-gradient");break;case"github":t.addItem("box-github-gradient")}return t.string}function w(e){var t;t=e.color?e.color:"var(--bg-color)";var a={};return e.textSize&&(a.fontSize=e.textSize),a.backgroundColor=t,a}var j=function(e){return r.a.createElement("button",{style:w(e),className:N(e),onClick:e.onPressed},function(e){return e.icon?r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement(y,{style:{lineHeight:"30px",fontSize:"18px",marginRight:"10px"}},e.icon),e.children," "):e.children}(e))};var O=function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"app-bar"},r.a.createElement("div",{className:"left"},r.a.createElement(j,{outlined:!0,rounded:!0,icon:"bulb-fill",onPressed:h},"Toggle Dark Mode")),r.a.createElement("div",{className:"right"},r.a.createElement("a",{href:"",className:"link-item"},"Portfolio"),r.a.createElement("a",{href:"",className:"link-item"},"Skills"),r.a.createElement("a",{href:"",className:"link-item"},"About me"),r.a.createElement("a",{href:"",className:"link-item"},"Contact"),r.a.createElement(j,{rounded:!0,gradient:"primary"},"EMAIL ME"))),r.a.createElement("header",{className:"app-bar-mobile"},r.a.createElement("div",{className:"left"},r.a.createElement(j,{outlined:!0,rounded:!0,icon:"bulb-fill",onPressed:h},"Toggle Dark Mode")),r.a.createElement("div",{className:"right"},r.a.createElement("a",{href:"",className:"link-item"},"Portfolio"),r.a.createElement("a",{href:"",className:"link-item"},"Skills"),r.a.createElement("a",{href:"",className:"link-item"},"About me"),r.a.createElement("a",{href:"",className:"link-item"},"Contact"),r.a.createElement(j,{rounded:!0,gradient:"primary"},"EMAIL ME"))))},x=a(7),I=a(6);a(14),a(63),a(64);function C(e){var t=new p;return t.addItem("icon-button"),t.string}var P=function(e){return null===e.color&&(e.color="var(--fg-color)"),null===e.size&&(e.size="1px"),r.a.createElement("span",{className:C(),onClick:e.onPressed},r.a.createElement(y,{size:"".concat(e.size),style:{color:"".concat(e.color)}},e.icon))};function S(e){window.open(e,"_blank")}var M=function(e){Object(x.a)(a,e);var t=Object(I.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"home-section"},r.a.createElement("div",{className:"hero"},r.a.createElement("div",{className:"hero-text"},r.a.createElement("h1",null,"Hi! ",r.a.createElement("br",null),"I'm ",r.a.createElement("span",{className:"primary-gradient"},"Roshan")),r.a.createElement("div",{className:"social-buttons"},r.a.createElement(P,{onPressed:function(){S("https://twitter.com/roshan6399")},size:"30px",icon:"twitter-fill",color:"var(--primary-color)"}),r.a.createElement(P,{onPressed:function(){S("https://github.com/roshanrahman")},size:"30px",icon:"github-fill",color:"var(--primary-color)"}),r.a.createElement(P,{onPressed:function(){S("mailto:roshanrahman6399@gmail.com")},size:"30px",icon:"email-outlined",color:"var(--primary-color)"}))),r.a.createElement("p",{style:{textAlign:"center"}},"A coder turned designer who wants to build heart-winning products."),r.a.createElement("p",null," I dual-wield VS Code and Figma.")))}}]),a}(n.Component);a(65),a(66);a(67);function z(){return r.a.createElement("div",{className:"project-card"},r.a.createElement("img",{src:"https://images.unsplash.com/photo-1593530115797-69cea1104197?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",alt:""}),r.a.createElement("div",{className:"text-section"},r.a.createElement("h2",{className:"nitya-gaan-gradient"},"Nitya Gaan"),r.a.createElement("p",null,"Gave this handy app a fresh new makeover that empathises with its users better."),r.a.createElement("div",{className:"actions"},r.a.createElement("a",{href:""},"Read Case Study"))))}var D=function(e){Object(x.a)(a,e);var t=Object(I.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"projects-section"},r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"grid-item title-card nomobile"},r.a.createElement("h1",null,r.a.createElement("span",{className:"design-gradient"},"Design")," projects"),r.a.createElement("p",null,"You'll also find some stuff on my "),r.a.createElement("a",{href:"https://dribbble.com",target:"_blank"},r.a.createElement(j,{textSize:"1.286rem",otherClasses:"shadow-dribbble",color:"var(--dribbble-color)",rounded:!0,icon:"dribbble-outlined",shadowColor:"var(--dribbble-color)"},"Dribbble Profile"))),r.a.createElement("div",{className:"nodesktop mobile-block mobile-title-card"},r.a.createElement("h1",null,r.a.createElement("span",{className:"design-gradient"},"Design")," projects")),r.a.createElement(z,null),r.a.createElement(z,null),r.a.createElement(z,null),r.a.createElement(z,null),r.a.createElement(z,null),r.a.createElement("div",{className:"grid-item title-card nodesktop mobile-block"},r.a.createElement("div",{className:"spacer",style:{marginTop:"48px"}}),r.a.createElement("p",null,"You'll also find some stuff on my "),r.a.createElement("a",{href:"https://dribbble.com",target:"_blank"},r.a.createElement(j,{textSize:"1.286rem",otherClasses:"shadow-dribbble",color:"var(--dribbble-color)",rounded:!0,icon:"dribbble-outlined",shadowColor:"var(--dribbble-color)"},"Dribbble Profile")))))}}]),a}(n.Component),A=(a(68),function(e){Object(x.a)(a,e);var t=Object(I.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"projects-section"},r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"grid-item title-card nomobile"},r.a.createElement("h1",null,r.a.createElement("span",{className:"coding-gradient"},"Coding")," projects"),r.a.createElement("p",null,"You'll also find some stuff on my "),r.a.createElement("a",{href:"https://github.com",target:"_blank"},r.a.createElement(j,{textSize:"1.286rem",otherClasses:"shadow-github",color:"var(--github-color)",rounded:!0,icon:"github-outlined",shadowColor:"var(--github-color)"},"GitHub Profile"))),r.a.createElement("div",{className:"nodesktop mobile-block mobile-title-card"},r.a.createElement("h1",null,r.a.createElement("span",{className:"coding-gradient"},"Coding")," projects")),r.a.createElement(z,null),r.a.createElement(z,null),r.a.createElement(z,null),r.a.createElement(z,null),r.a.createElement(z,null),r.a.createElement("div",{className:"grid-item title-card nodesktop mobile-block"},r.a.createElement("div",{className:"spacer",style:{marginTop:"48px"}}),r.a.createElement("p",null,"You'll also find some stuff on my "),r.a.createElement("a",{href:"https://github.com",target:"_blank"},r.a.createElement(j,{textSize:"1.286rem",otherClasses:"shadow-github",color:"var(--github-color)",rounded:!0,icon:"github-outlined",shadowColor:"var(--github-color)"},"GitHub Profile")))))}}]),a}(n.Component));a(69),a(70);function R(e){return r.a.createElement("a",{className:"written-card",href:"".concat(e.link),target:"_blank"},r.a.createElement("img",{src:"".concat(e.img),alt:""}),r.a.createElement("div",{className:"text-section"},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,e.publisher)),r.a.createElement("div",{className:"icon"},r.a.createElement(v.a,null)))}var H=function(e){Object(x.a)(a,e);var t=Object(I.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"projects-section"},r.a.createElement("div",{className:"written-section"},r.a.createElement("h1",null,r.a.createElement("span",{className:"written-gradient"},"Articles")," Written"),r.a.createElement(R,{title:"Python helped me get Avengers' Endgame tickets",publisher:"medium.com",link:"https://google.com",img:"https://images.unsplash.com/photo-1545852528-fa22f7fcd63e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}),r.a.createElement(R,{title:"Fonts are fascinating",publisher:"uxdesign.cc",link:"https://google.com",img:"https://images.unsplash.com/photo-1545852528-fa22f7fcd63e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"})))}}]),a}(n.Component),L=(a(71),function(e){Object(x.a)(a,e);var t=Object(I.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"projects-section"},r.a.createElement("div",{className:"written-section"},r.a.createElement("h1",null,"About ",r.a.createElement("span",{className:"about-me-gradient"},"Me"))),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"col",style:{fontWeight:"bold",lineHeight:"140%"}},r.a.createElement("p",null,"Microsoft PowerPoint was my playground growing up. I used it to make quiz games and animations. My interest in creating interactive elements started from there.")," ",r.a.createElement("p",null,"I learnt to understand and appreciate good user interfaces, and found the experience of making them challenging and satisfying.")," ",r.a.createElement("p",null,"Aside from design, I have developed projects in Flutter, React, Django, Node and Golang.")),r.a.createElement("div",{className:"col medium-text",style:{lineHeight:"150%"}},r.a.createElement("p",null,"I am obsessed with storytelling, and I devour movies, videogames and books that have a compelling story to tell."," "),r.a.createElement("p",null,"I love to explore new ways to learn and be more capable everyday."),r.a.createElement("p",null,"I try to live by the simple virtues of honesty, empathy, and appreciation for the good things in the world."))))}}]),a}(n.Component));a(72);a.p;a.p;a.p;a.p;var W=a(31);a(73);var G=function(e){var t=function(e){return{fontSize:e.size,marginRight:e.spacing}}(e);return r.a.createElement("ul",{className:"social-buttons-list"},r.a.createElement("li",{style:t},r.a.createElement("a",{href:"https://github.com/roshanrahman"},r.a.createElement(g.c,{title:"Github link"}))),r.a.createElement("li",{style:t},r.a.createElement("a",{href:"https://dribbble.com/roshan6399"},r.a.createElement(g.g,{title:"Dribbble link"}))),r.a.createElement("li",{style:t},r.a.createElement("a",{href:"https://www.linkedin.com/in/roshanrahman6399/"},r.a.createElement(g.d,{title:"Linkedin link"}))),r.a.createElement("li",{style:t},r.a.createElement("a",{href:"mailto:roshanrahman6399@gmail.com"},r.a.createElement(g.h,null))),r.a.createElement("li",{style:Object(W.a)(Object(W.a)({},t),{},{marginRight:"0px"})},r.a.createElement("a",{href:"https://twitter.com/roshan6399"},r.a.createElement(g.i,{title:"Twitter link"}))))},_=function(e){Object(x.a)(a,e);var t=Object(I.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"contact-section"},r.a.createElement("div",{className:"written-section"},r.a.createElement("h1",null,"Let's ",r.a.createElement("span",{className:"contact-gradient"},"talk"))),r.a.createElement("p",null,"I'd love to hear about exciting projects and great teams I can be a part of",r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"item"},r.a.createElement("a",{href:"https://www.linkedin.com/in/roshanrahman6399/",target:"_blank"},r.a.createElement("div",{className:"card"},r.a.createElement("h1",null,r.a.createElement(g.d,null)),r.a.createElement("h2",null,"Reach out on Linkedin"))),r.a.createElement("div",{className:"sub"})),r.a.createElement("div",{className:"item first-on-mobile"},r.a.createElement("a",{href:"mailto:roshanrahman6399@gmail.com"},r.a.createElement("div",{className:"card primary"},r.a.createElement("h1",null,r.a.createElement(g.h,null)),r.a.createElement("h2",null,"Send me an email"))),r.a.createElement("div",{className:"sub"},"or ",r.a.createElement("span",{className:"copy-text"},"click here to copy it"))),r.a.createElement("div",{className:"item"},r.a.createElement("a",{href:"https://twitter.com/roshan6399"},r.a.createElement("div",{className:"card"},r.a.createElement("h1",null,r.a.createElement(g.i,null)),r.a.createElement("h2",null,"Message me on Twitter"))),r.a.createElement("div",{className:"sub"})))))}}]),a}(n.Component);a(74);var J=function(e){return r.a.createElement("footer",null,r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"left"},r.a.createElement("h3",null,"Made with React and Sass"),r.a.createElement("h4",null,"Uses assets from Ant Design Icons, react-icons and Unsplash.com")),r.a.createElement("div",{className:"right"},r.a.createElement(G,{size:"3.2rem",spacing:"1.3rem"}))))};var T=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement(M,null),r.a.createElement(D,null),r.a.createElement(A,null),r.a.createElement(H,null),r.a.createElement(L,null),r.a.createElement(_,null),r.a.createElement(J,null))},q=a(49),B=a.n(q),Y=(a(157),a(50)),F=a.n(Y),Q=(a(174),function(e){Object(x.a)(a,e);var t=Object(I.a)(a);function a(e){var n;Object(s.a)(this,a),n=t.call(this,e);var r=!1;return E()&&(r=!0),n.state={isDark:r},window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){var t=e.matches?"dark":"light";n.setState({isDark:"dark"===t})})),n}return Object(f.a)(a,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){h(),e.setState({isDark:!e.state.isDark})}},this.state.isDark?r.a.createElement(v.c,null):r.a.createElement(v.b,null)))}}]),a}(n.Component)),U=function(e){Object(x.a)(a,e);var t=Object(I.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).componentWillMount=function(){F.a.get("https://raw.githubusercontent.com/roshanrahman/newportfolio/master/assets/casestudies/nitya-gaan.md").then((function(e){n.setState({data:e.data})}))},n.state={data:"> Loading..."},n}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"case-study"},r.a.createElement("div",{className:"floating-dark-toggle"},r.a.createElement(Q,null)),r.a.createElement("div",{className:"header-mobile"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:"https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",alt:""})),r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"Redesigning Nitya Gaan"),r.a.createElement("h2",null,"A redesign project to give this handy app a makeover that empathizes with its users better"))),r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:"https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",alt:""})),r.a.createElement("div",{className:"gradient"}),r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"Redesigning Nitya Gaan"),r.a.createElement("h2",null,"A redesign project to give this handy app a makeover that empathizes with its users better"))),r.a.createElement("hr",null),r.a.createElement("article",null,r.a.createElement(B.a,{linkTarget:"_blank",source:this.state.data})),r.a.createElement(J,null))}}]),a}(n.Component);var V=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/dashboard"},r.a.createElement(U,null)),r.a.createElement(o.a,{path:"/"},r.a.createElement(T,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));document.body.style.opacity=0,document.body.onload=function(){E()?b(!0):b(!1),document.body.style.opacity=1},c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,t,a){e.exports=a(177)},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.4057daf7.chunk.js.map