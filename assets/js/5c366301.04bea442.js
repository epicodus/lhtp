"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[11642],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?i.createElement(h,r(r({ref:t},p),{},{components:n})):i.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const o={title:"11. Looping in JSX",id:"looping_in_jsx",slug:"looping_in_jsx",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/4_react-fundamentals/0k_looping_in_jsx.md"},r=void 0,l={unversionedId:"react_part_time_evening/react-fundamentals/looping_in_jsx",id:"react_part_time_evening/react-fundamentals/looping_in_jsx",title:"11. Looping in JSX",description:"Currently, our application only has two hard-coded tickets. However, this isn't how our Help Queue should actually work. A functioning, production-ready application should contain a dynamic list of tickets. In this lesson, we'll cover looping through content in JSX.",source:"@site/docs/react_part_time_evening/4_react-fundamentals/0k_looping_in_jsx.md",sourceDirName:"react_part_time_evening/4_react-fundamentals",slug:"/react_part_time_evening/react-fundamentals/looping_in_jsx",permalink:"/lhtp/react_part_time_evening/react-fundamentals/looping_in_jsx",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"11. Looping in JSX",id:"looping_in_jsx",slug:"looping_in_jsx",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/4_react-fundamentals/0k_looping_in_jsx.md"},sidebar:"react_part_time_evening",previous:{title:"10. Prop Types",permalink:"/lhtp/react_part_time_evening/react-fundamentals/prop_types"},next:{title:"12. Using External Stylesheets with React",permalink:"/lhtp/react_part_time_evening/react-fundamentals/using_external_stylesheets_with_react"}},c={},s=[{value:"Looping in JSX",id:"looping-in-jsx",level:2},{value:"Additional Resources",id:"additional-resources",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Currently, our application only has two hard-coded tickets. However, this isn't how our Help Queue should actually work. A functioning, production-ready application should contain a dynamic list of tickets. In this lesson, we'll cover looping through content in JSX."),(0,a.kt)("h2",{id:"looping-in-jsx"},"Looping in JSX"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"First, let's create an array of tickets in ",(0,a.kt)("em",{parentName:"p"},"TicketList.js"),":"),(0,a.kt)("div",{class:"filename"},"src/components/TicketList.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport Ticket from './Ticket';\n\nconst mainTicketList = [\n  {\n    names: 'Thato and Haley',\n    location: '3A',\n    issue: 'Firebase won\\'t save record. Halp.'\n  },\n  {\n    names: 'Sleater and Kinney',\n    location: '4B',\n    issue: 'Prop types are throwing an error.'\n  },\n  {\n    names: 'Imani & Jacob',\n    location: '9F',\n    issue: 'Child component isn\\'t rendering.'\n  }\n];\n\nfunction TicketList(){\n  ...\n...\n")),(0,a.kt)("p",null,"In the future, this list will come from a database or a Redux store. (We'll be exploring both approaches in the next two course sections.) For now, we'll store hard-coded tickets inside our ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketList")," component. Note that we use ",(0,a.kt)("inlineCode",{parentName:"p"},"const"),", not ",(0,a.kt)("inlineCode",{parentName:"p"},"let"),". Remember that props are read-only and that we can't change them."),(0,a.kt)("p",null,"Next, we'll add a loop to render a Ticket component for each entry in ",(0,a.kt)("inlineCode",{parentName:"p"},"mainTicketList"),". In JSX, we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"map()")," function for loops."),(0,a.kt)("div",{class:"filename"},"TicketList.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\n    return (\n      <React.Fragment>\n        <hr/>\n        {mainTicketList.map((ticket, index) =>\n          <Ticket names={ticket.names}\n            location={ticket.location}\n            issue={ticket.issue}\n            key={index}/>\n        )}\n      </React.Fragment>\n    );\n...\n")),(0,a.kt)("p",null,"As we can see here, ",(0,a.kt)("inlineCode",{parentName:"p"},"map()")," loops through our ",(0,a.kt)("inlineCode",{parentName:"p"},"mainTicketList"),". On each iteration, it creates a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Ticket")," with props corresponding to one of the tickets in ",(0,a.kt)("inlineCode",{parentName:"p"},"mainTicketList"),"."),(0,a.kt)("p",null,"There are a few other important things to note:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We add ",(0,a.kt)("inlineCode",{parentName:"li"},"index")," as an argument to our ",(0,a.kt)("inlineCode",{parentName:"li"},"map()")," function. ",(0,a.kt)("inlineCode",{parentName:"li"},"map()")," can take an optional ",(0,a.kt)("inlineCode",{parentName:"li"},"index")," argument if we need access to how many times our loop has iterated."),(0,a.kt)("li",{parentName:"ul"},"We add a ",(0,a.kt)("inlineCode",{parentName:"li"},"key")," value to each ticket which corresponds to the current ",(0,a.kt)("inlineCode",{parentName:"li"},"index"),".")),(0,a.kt)("p",null,"Why bother to include the ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," and create a unique ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," value? If we don't, our code will run correctly but we'll get the following error in the console: ",(0,a.kt)("em",{parentName:"p"},'Warning: Each child in an array or iterator should have a unique "key" prop.'),' This error is pretty clear. Each ticket should have a unique "key" prop.'),(0,a.kt)("p",null,"Having unique keys makes our application more efficient because it helps React differentiate between similar components so it can identify which have been updated, added, or removed from the list during its virtual DOM reconciliation."),(0,a.kt)("p",null,"Our tickets don't have a unique ID value (at least not yet), which is why we are using the item's array index for now. If our tickets already had unique IDs, we wouldn't need to pass in ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," as an argument to ",(0,a.kt)("inlineCode",{parentName:"p"},"map()")," \u2014 we'd just use the unique IDs as keys. The keys just need to be unique so React can manage reconciliation effectively."),(0,a.kt)("p",null,"Now we can run our application and see that all our tickets are correctly populating!"),(0,a.kt)("h3",{id:"additional-resources"},"Additional Resources"),(0,a.kt)("p",null,"If you'd like a more technical explanation about how React uses these unique ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," props, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/docs/reconciliation.html#recursing-on-children"},'"Recursing on Children" section of the React Reconciliation Documentation'),"."))}d.isMDXComponent=!0}}]);