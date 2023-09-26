"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[22916],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(b,i(i({ref:t},s),{},{components:a})):n.createElement(b,i({ref:t},s))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},74797:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={title:"Help Queue, Social Media, Airbnb Clone",id:"help-queue-social-media-airbnb-clone",slug:"help-queue-social-media-airbnb-clone",hide_table_of_contents:!0,sidebar_position:19,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/1a_classwork_help_queue_social_media_airbnb_clone.md"},i=void 0,l={unversionedId:"react/react-fundamentals/help-queue-social-media-airbnb-clone",id:"react/react-fundamentals/help-queue-social-media-airbnb-clone",title:"Help Queue, Social Media, Airbnb Clone",description:"Goal: Get comfortable with the basics of React by following along with this weekend's homework and creating basic applications of your own. Make sure you break each application up into a tree of self-contained components.",source:"@site/docs/react/3_react-fundamentals/1a-classwork-help-queue-social-media-airbnb-clone.md",sourceDirName:"react/3_react-fundamentals",slug:"/react/react-fundamentals/help-queue-social-media-airbnb-clone",permalink:"/react/react-fundamentals/help-queue-social-media-airbnb-clone",draft:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"Help Queue, Social Media, Airbnb Clone",id:"help-queue-social-media-airbnb-clone",slug:"help-queue-social-media-airbnb-clone",hide_table_of_contents:!0,sidebar_position:19,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/1a_classwork_help_queue_social_media_airbnb_clone.md"},sidebar:"react",previous:{title:"Journal #14",permalink:"/react/react-fundamentals/journal-14"},next:{title:"Introduction to State",permalink:"/react/react-fundamentals/introduction-to-state"}},c={},u=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"React Basics &amp; Help Queue",id:"react-basics--help-queue",level:3},{value:"Social Media Clone",id:"social-media-clone",level:3},{value:"Airbnb Clone",id:"airbnb-clone",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],s={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goal:")," Get comfortable with the basics of React by following along with this weekend's homework and creating basic applications of your own. Make sure you break each application up into a tree of self-contained components."),(0,r.kt)("h2",{id:"warm-up"},"Warm Up"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What is the difference between a framework and a library? Which is React? How can you tell?"),(0,r.kt)("li",{parentName:"ul"},"What is the virtual DOM? How does React use it? What benefits does it offer?"),(0,r.kt)("li",{parentName:"ul"},"Why might a developer choose React over another library or framework? What type of projects do you think are best suited to the React library?")),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"react-basics--help-queue"},"React Basics & Help Queue"),(0,r.kt)("p",null,"Work through the weekend homework with your partner. Take your time and ensure you and your partner fully understand each step and concept before moving on."),(0,r.kt)("h3",{id:"social-media-clone"},"Social Media Clone"),(0,r.kt)("p",null,"React was originally developed by Facebook to manage the dynamic, complex needs of a large social media app. After observing Facebook's success, many other social media applications have also begun relying on React."),(0,r.kt)("p",null,"Create a site that looks like the mock-up depicted below using only React components. Take care in determining which portions warrant their own components:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/social-media-mockup.png",alt:"social-media-wireframe"})),(0,r.kt)("p",null,"Make sure to draw a component diagram and include it in your README."),(0,r.kt)("h3",{id:"airbnb-clone"},"Airbnb Clone"),(0,r.kt)("p",null,"If you're able to complete all exercises above with time to spare, try re-creating ",(0,r.kt)("a",{parentName:"p",href:"https://www.airbnb.com/"},"Airbnb's minimal, clean homepage")," with React components."),(0,r.kt)("p",null,"Again, don't worry about functionality. Simply practice the act of breaking a multifaceted user interface into React components."),(0,r.kt)("p",null,"Make sure to draw a component diagram and include it in your README."),(0,r.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Components are used to create modular UI elements."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"propTypes")," define data types for all component props."),(0,r.kt)("li",{parentName:"ul"},"Application works as expected."),(0,r.kt)("li",{parentName:"ul"},"Application is well planned and includes a component diagram.")))}d.isMDXComponent=!0}}]);