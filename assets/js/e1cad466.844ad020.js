"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[63420],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},66162:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={title:"1. Help Queue, Merch Site, Event Logger",id:"help_queue_merch_site_event_logger",slug:"help_queue_merch_site_event_logger",hide_table_of_contents:!0,sidebar_position:31,day:"wednesday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3_react-fundamentals/3a_classwork_help_queue_merch_site_event_logger_two_day.md"},i=void 0,l={unversionedId:"react_classic/react-fundamentals/help_queue_merch_site_event_logger",id:"react_classic/react-fundamentals/help_queue_merch_site_event_logger",title:"1. Help Queue, Merch Site, Event Logger",description:"Goal: Over the next class sessions, practice building a React site that has both local and shared state. Add full CRUD functionality to your application. Make sure you take the time to carefully plan out your application \u2014 including where shared state should go and all components should live. As always, take the time to plan out your application and draw a component diagram. Don't forget to include the diagram in your project README.",source:"@site/docs/react_classic/3_react-fundamentals/3a_classwork_help_queue_merch_site_event_logger_two_day.md",sourceDirName:"react_classic/3_react-fundamentals",slug:"/react_classic/react-fundamentals/help_queue_merch_site_event_logger",permalink:"/lhtp/react_classic/react-fundamentals/help_queue_merch_site_event_logger",draft:!1,tags:[],version:"current",sidebarPosition:31,frontMatter:{title:"1. Help Queue, Merch Site, Event Logger",id:"help_queue_merch_site_event_logger",slug:"help_queue_merch_site_event_logger",hide_table_of_contents:!0,sidebar_position:31,day:"wednesday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3_react-fundamentals/3a_classwork_help_queue_merch_site_event_logger_two_day.md"},sidebar:"react_classic",previous:{title:"14. Prior Course Section Survey",permalink:"/lhtp/react_classic/react-fundamentals/prior_course_section_survey"},next:{title:"2. Overview of Next Steps: Adding READ, UPDATE, and DELETE Functionality",permalink:"/lhtp/react_classic/react-fundamentals/overview_of_next_steps_adding_read_update_and_delete_functionality"}},s={},u=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Help Queue Continued",id:"help-queue-continued",level:3},{value:"Merch Site",id:"merch-site",level:3},{value:"Further Exploration",id:"further-exploration",level:4},{value:"Event Logger",id:"event-logger",level:3},{value:"Further Exploration",id:"further-exploration-1",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goal:")," Over the next class sessions, practice building a React site that has both local and shared state. Add full CRUD functionality to your application. Make sure you take the time to carefully plan out your application \u2014 including where shared state should go and all components should live. As always, take the time to plan out your application and draw a component diagram. Don't forget to include the diagram in your project README."),(0,r.kt)("h2",{id:"warm-up"},"Warm Up"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What is unidirectional data flow? Why is it important?"),(0,r.kt)("li",{parentName:"ul"},"What is a UUID? How are they useful?"),(0,r.kt)("li",{parentName:"ul"},"How can a method in a state component have access to data in child components if data can only flow down, not up?")),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Make sure that you get practice with CREATE, READ, and UPDATE functionality with the project you decide to build over the next few class sessions.")),(0,r.kt)("h3",{id:"help-queue-continued"},"Help Queue Continued"),(0,r.kt)("p",null,"Follow along with the coursework to add full CRUD functionality to the Help Queue. We recommend revisiting the Help Queue project to add this functionality as you continue to learn more from the upcoming homework."),(0,r.kt)("h3",{id:"merch-site"},"Merch Site"),(0,r.kt)("p",null,"Build a website for selling merchandise for a band, author, sports team, or any other purveyor that interests you."),(0,r.kt)("p",null,"A user should be able to do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create, Read, Update and Delete items in the store. Items should have fields for ",(0,r.kt)("inlineCode",{parentName:"li"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"description"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"quantity")," (along with any other fields you wish to add)."),(0,r.kt)("li",{parentName:"ul"},"Increase or decrease the ",(0,r.kt)("inlineCode",{parentName:"li"},"quantity"),' of an item in the store. For instance, if a user clicks "Buy", the ',(0,r.kt)("inlineCode",{parentName:"li"},"quantity"),' will decrease by one. If a user clicks "Restock", it will increment by a specified number.'),(0,r.kt)("li",{parentName:"ul"},"When the ",(0,r.kt)("inlineCode",{parentName:"li"},"quantity")," of an item is reduced to ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),', the item should say "Out of Stock". A user should not be able to reduce the ',(0,r.kt)("inlineCode",{parentName:"li"},"quantity")," of an item below ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),".")),(0,r.kt)("h4",{id:"further-exploration"},"Further Exploration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"Cart"),' component. When a user clicks "Buy", the specified item should be added to the cart.'),(0,r.kt)("li",{parentName:"ul"},"A user should be able to view and remove items from the cart."),(0,r.kt)("li",{parentName:"ul"},"Create a widget that shows the number of items in the cart. This widget should be updated when items are added to the cart.")),(0,r.kt)("h3",{id:"event-logger"},"Event Logger"),(0,r.kt)("p",null,"Nope, this isn't a site for ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()"),". Create a site for logging a specified type of real-world event. For instance, it could be a site for birdwatchers to log sightings of birds, celebrity watchers to log sightings of pop stars, or board game players to log their plays of games."),(0,r.kt)("p",null,"Users should be able to do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Add full CRUD functionality for types of events to be logged. For instance, in a bird-watching application, a user might add "Spotted Sandpiper" to indicate a viewing of that kind of bird.'),(0,r.kt)("li",{parentName:"ul"},"Allow users to increment the event by one when there is a viewing, a play of the game, or so on. Users should also be able to decrement an event (for instance, if they made a mistake).")),(0,r.kt)("h3",{id:"further-exploration-1"},"Further Exploration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Create a dynamic component that shows the total number of events logged so far. The component should show in the top right corner of every page and should aggregate every different kind of event \u2014 so if there are 3 "Spotted Sandpiper" viewings and 4 "Red-Winged Blackbird" viewings total, the aggregator might read "7 total viewings."')),(0,r.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Application effectively uses local and shared state."),(0,r.kt)("li",{parentName:"ul"},"Application was well-planned and utilizes unidirectional data flow."),(0,r.kt)("li",{parentName:"ul"},"propTypes define data types for all component props."),(0,r.kt)("li",{parentName:"ul"},"Application has working CRUD functionality."),(0,r.kt)("li",{parentName:"ul"},"Application is well planned and includes a component diagram.")))}p.isMDXComponent=!0}}]);