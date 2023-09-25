"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[17675],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:i,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={title:"Planning Our Application: Part 3",id:"planning_our_application_part_3",slug:"planning_our_application_part_3",hide_table_of_contents:!0,sidebar_position:33,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3_react-fundamentals/3b_planning_our_application_part_3.md"},l=void 0,r={unversionedId:"react_classic/react-fundamentals/planning_our_application_part_3",id:"react_classic/react-fundamentals/planning_our_application_part_3",title:"Planning Our Application: Part 3",description:"We can now successfully create tickets and view the queue. So far, our TicketControl component handles all state in our application. It includes local state (determining whether the form or the ticket list should be showing) and shared state (our main ticket list).",source:"@site/docs/react_classic/3_react-fundamentals/3b_planning_our_application_part_3.md",sourceDirName:"react_classic/3_react-fundamentals",slug:"/react_classic/react-fundamentals/planning_our_application_part_3",permalink:"/lhtp/react_classic/react-fundamentals/planning_our_application_part_3",draft:!1,tags:[],version:"current",sidebarPosition:33,frontMatter:{title:"Planning Our Application: Part 3",id:"planning_our_application_part_3",slug:"planning_our_application_part_3",hide_table_of_contents:!0,sidebar_position:33,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3_react-fundamentals/3b_planning_our_application_part_3.md"},sidebar:"react_classic",previous:{title:"Overview of Next Steps: Adding READ, UPDATE, and DELETE Functionality",permalink:"/lhtp/react_classic/react-fundamentals/overview_of_next_steps_adding_read_update_and_delete_functionality"},next:{title:"Using JSX Expressions with Arguments",permalink:"/lhtp/react_classic/react-fundamentals/using_jsx_expressions_with_arguments"}},s={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We can now successfully create tickets and view the queue. So far, our ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl")," component handles all state in our application. It includes local state (determining whether the form or the ticket list should be showing) and shared state (our main ticket list)."),(0,i.kt)("p",null,"At this point, we have CREATE functionality as well as READ (all) functionality, so we are almost halfway to making a functional CRUD application. In this lesson, we'll plan out a ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketDetail")," component. Users will be able to click on a ticket to see its detail. That will give us complete READ functionality."),(0,i.kt)("p",null,"First, we need to think about where our ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketDetail")," component should go in our component diagram. It may be tempting to place it below our ",(0,i.kt)("inlineCode",{parentName:"p"},"Ticket")," component. After all, isn't it almost the same thing? However, we will be making our coding lives more complicated if we have to go through the ",(0,i.kt)("inlineCode",{parentName:"p"},"Ticket")," component to access ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketDetail"),". The following picture illustrates why:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-1-React-2019/passing-data-to-ticket-detail-updated.jpg",alt:"The diagram on the left shows that data needs to be passed through multiple components to get to TicketDetail while the diagram on the right shows data being passed directly from TicketControl to TicketDetail"})),(0,i.kt)("p",null,"Let's start with the diagram on the left. If ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl")," holds our shared state, it would need to be passed through ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketList")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Ticket")," before it reaches ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketDetail"),". That's a lot of props. There's a term for passing props through many components: ",(0,i.kt)("strong",{parentName:"p"},"prop drilling"),". If possible, it should be avoided \u2014 after all, the more components that have to pass down props, the more places our application could break down."),(0,i.kt)("p",null,"Meanwhile, in the diagram on the right, if we just pass data from ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketDetail"),", we avoid prop drilling altogether. ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl")," already handles shared state. It also has local state that determines which component should be showing."),(0,i.kt)("p",null,"For that reason, we can make our lives easier by updating our component diagram to look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-1-React-2019/help-queue-with-new-ticket-control-and-ticket-detail-updated.jpg",alt:"This diagram shows the updated Help Queue component diagram with the new TicketDetail component."})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl")," will be able to pass props and state directly to ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketDetail"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl")," also already has conditional rendering so we will just need to add one more conditional to determine whether ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketDetail")," should render instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketList")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"NewTicketForm"),"."),(0,i.kt)("p",null,"We will also need to add some new local state to ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl")," as well. The default state of the ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl")," component will be updated to look like this:"),(0,i.kt)("div",{class:"filename"},"TicketControl.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"this.state = {\n  formVisibleOnPage: false,\n  mainTicketList: [],\n  selectedTicket: null\n};\n")),(0,i.kt)("p",null,"We'll add a third piece of state called ",(0,i.kt)("inlineCode",{parentName:"p"},"selectedTicket")," which begins as ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),". If you are working along with the lesson, you don't need to add this code yet \u2014 we will go over it again in the next lesson."),(0,i.kt)("p",null,"If a user clicks on a ticket, ",(0,i.kt)("inlineCode",{parentName:"p"},"selectedTicket")," will be updated to the correct ticket \u2014 and the ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketDetail")," for that ticket will show."),(0,i.kt)("p",null,"Each of these properties is a ",(0,i.kt)("strong",{parentName:"p"},"state slice"),". A state slice is a piece of state that can be mutated independently of other state slices."),(0,i.kt)("p",null,"Our first state slice determines whether or not a form should show on the page. It is local state."),(0,i.kt)("p",null,"Our second state slice holds the list of all tickets. It is shared state."),(0,i.kt)("p",null,"Our third state slice will determine whether our ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketDetail")," component should show or not."),(0,i.kt)("p",null,"We are almost ready to add functionality so a user can click on a specific ticket and go to its detail page."))}u.isMDXComponent=!0}}]);