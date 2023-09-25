"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[59365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17241:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"Planning Our Application: Part 2",id:"planning_our_application_part_2",slug:"planning_our_application_part_2",hide_table_of_contents:!0,sidebar_position:21,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/1c_planning_our_application_part_2.md"},o=void 0,l={unversionedId:"react_part_time_evening/react-fundamentals/planning_our_application_part_2",id:"react_part_time_evening/react-fundamentals/planning_our_application_part_2",title:"Planning Our Application: Part 2",description:"In the last lesson, we briefly covered local and shared state. The plan we made for our static Help Queue is a good start but we will need to make some changes to its structure. That means rethinking some parts of our application and creating a new diagram.",source:"@site/docs/react_part_time_evening/4_react-fundamentals/1c_planning_our_application_part_2.md",sourceDirName:"react_part_time_evening/4_react-fundamentals",slug:"/react_part_time_evening/react-fundamentals/planning_our_application_part_2",permalink:"/react_part_time_evening/react-fundamentals/planning_our_application_part_2",draft:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"Planning Our Application: Part 2",id:"planning_our_application_part_2",slug:"planning_our_application_part_2",hide_table_of_contents:!0,sidebar_position:21,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/1c_planning_our_application_part_2.md"},sidebar:"react_part_time_evening",previous:{title:"Introduction to State",permalink:"/react_part_time_evening/react-fundamentals/introduction_to_state"},next:{title:"Adding Local State",permalink:"/react_part_time_evening/react-fundamentals/adding_local_state"}},p={},c=[],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the last lesson, we briefly covered local and shared state. The plan we made for our static Help Queue is a good start but we will need to make some changes to its structure. That means rethinking some parts of our application and creating a new diagram."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-1-React-2019/help-queue-with-ticket-control-updated.jpg",alt:"This diagram shows a few changes to the structure of our application, including a control component to determine which child component should be displayed."})),(0,i.kt)("p",null,"The main addition here is a component called ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl"),". Our application will be an SPA (single-page application) that shows the ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketList"),' component. However, when a user clicks the "Add Ticket" button, the ',(0,i.kt)("inlineCode",{parentName:"p"},"TicketList")," component will be hidden and the user will see the ",(0,i.kt)("inlineCode",{parentName:"p"},"NewTicketForm")," component instead."),(0,i.kt)("p",null,"That means both the ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketList")," component and the ",(0,i.kt)("inlineCode",{parentName:"p"},"NewTicketForm")," component need to have the same parent \u2014 but only one of the components will be showing at a time."),(0,i.kt)("p",null,"In order to toggle between these two components, ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl")," will need to have local state to determine which of the following states the page should be in:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TicketList")," showing and ",(0,i.kt)("inlineCode",{parentName:"li"},"NewTicketForm")," hidden;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NewTicketForm")," showing and ",(0,i.kt)("inlineCode",{parentName:"li"},"TicketList")," hidden.")),(0,i.kt)("p",null,"We will take care of toggling between these components (our local state) before we start building our shared state. However, it's important to have our plan in place so let's take a look at which of these components will need to share state:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TicketList")," will need access to the main list of tickets so it can read and display them;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NewTicketForm")," will need access to the main list of tickets so it can ensure new tickets can get passed into that main list.")),(0,i.kt)("p",null,"So where should this shared state go? Fortunately, this is a simple question to answer. Both components have the same parent. ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl")," is the lowest common ancestor to which we can lift our application state."),(0,i.kt)("p",null,"If our plan isn't fully clear yet, use this page as a reference as we follow along with upcoming lessons."))}m.isMDXComponent=!0}}]);