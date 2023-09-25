"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[26090],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>g});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=c(n),m=i,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(g,o(o({ref:e},s),{},{components:n})):a.createElement(g,o({ref:e},s))}));function g(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[u]="string"==typeof t?t:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2485:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"Planning a React Application",id:"planning_a_react_application",slug:"planning_a_react_application",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0f_planning_our_application.md"},o=void 0,l={unversionedId:"react_part_time/react-fundamentals/planning_a_react_application",id:"react_part_time/react-fundamentals/planning_a_react_application",title:"Planning a React Application",description:"Before we start coding our site, let's plan the UI for our Help Queue application. At this point, we aren't going to worry about adding or changing state in our application. Our site will be entirely static and we will only have function components. This is actually the recommended way to build a React site. State gets complicated fast. If we start adding state without planning our application first, we'll be much more likely to write bad code and end up with frustrating bugs.",source:"@site/docs/react_part_time/4_react-fundamentals/0f_planning_our_application.md",sourceDirName:"react_part_time/4_react-fundamentals",slug:"/react_part_time/react-fundamentals/planning_a_react_application",permalink:"/react_part_time/react-fundamentals/planning_a_react_application",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Planning a React Application",id:"planning_a_react_application",slug:"planning_a_react_application",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0f_planning_our_application.md"},sidebar:"react_part_time",previous:{title:"Introduction to JSX",permalink:"/react_part_time/react-fundamentals/introduction_to_jsx"},next:{title:"Building a Static Site",permalink:"/react_part_time/react-fundamentals/building_a_static_site"}},p={},c=[{value:"Planning Our Application",id:"planning-our-application",level:2}],s={toc:c},u="wrapper";function d(t){let{components:e,...n}=t;return(0,i.kt)(u,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Before we start coding our site, let's plan the UI for our Help Queue application. At this point, we aren't going to worry about adding or changing state in our application. Our site will be entirely static and we will only have function components. This is actually the ",(0,i.kt)("strong",{parentName:"p"},"recommended way")," to build a React site. State gets complicated fast. If we start adding state without planning our application first, we'll be much more likely to write bad code and end up with frustrating bugs."),(0,i.kt)("p",null,"In the React documentation, there is an article called ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/thinking-in-react.html"},"Thinking in React")," that outlines the process of planning, building out a static site, and then finally adding state. We recommend taking a quick look at the steps in that article before continuing. We will be following the same process as we build out our Help Queue application."),(0,i.kt)("h2",{id:"planning-our-application"},"Planning Our Application"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We will start by drawing a component diagram of our application. Our component diagram will provide a very general sense of how our application should look and act. It will specifically show the components we will need and how they will be structured in relation to other components. ",(0,i.kt)("strong",{parentName:"p"},"You will be expected to draw a component diagram of your application for this project.")),(0,i.kt)("p",null,"We recommend using ",(0,i.kt)("a",{parentName:"p",href:"https://www.draw.io/"},"https://www.draw.io")," for component drawings. You can also use a whiteboard or paper and then take a picture. Your READMEs should always include a component diagram."),(0,i.kt)("p",null,"Here is a diagram of our Help Queue:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/wk1-prework-static-react-site.jpg",alt:"A diagram of our Help Queue shows how we can break our application into smaller components."})),(0,i.kt)("p",null,"As our diagram demonstrates, our application will start with the following function components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Header"),": Our header will remain the same regardless of whether the user is looking at all tickets, a specific ticket, or the form for creating a new ticket.")),(0,i.kt)("p",null,"This will be a very small component, which is exactly what we want. Remember, our goal is to compose our application of many smaller components as opposed to fewer larger and cumbersome components."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Ticket List"),": This component will loop through all of our individual tickets, displaying them on the page. We will cover looping in JSX soon.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Ticket"),": We will also have a component for an individual ticket. Each ticket will have different properties passed into it (such as ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"issue")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"station"),"). As shown in the diagram above, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Ticket")," component will be nested inside ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketList"),", which means it will be the ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketList")," component's child.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Add Ticket"),": This will have a button for adding a ticket."))),(0,i.kt)("p",null,"We won't worry about our ticket detail or form just yet."),(0,i.kt)("p",null,"Now that we've planned out our application's structure, we're ready to start coding our site!"))}d.isMDXComponent=!0}}]);