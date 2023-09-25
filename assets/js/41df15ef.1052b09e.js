"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[99678],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const i={title:"4. Unidirectional Data Flow",id:"unidirectional_data_flow",slug:"unidirectional_data_flow",hide_table_of_contents:!0,sidebar_position:35,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/4_react-fundamentals/2c_unidirectional_data_flow.md"},r=void 0,l={unversionedId:"react_part_time_evening/react-fundamentals/unidirectional_data_flow",id:"react_part_time_evening/react-fundamentals/unidirectional_data_flow",title:"4. Unidirectional Data Flow",description:"So far we have only been working with local state. However, when a user inputs data in our form, we somehow need to get that data from our NewTicketForm component to its parent TicketControl component.",source:"@site/docs/react_part_time_evening/4_react-fundamentals/2c_unidirectional_data_flow.md",sourceDirName:"react_part_time_evening/4_react-fundamentals",slug:"/react_part_time_evening/react-fundamentals/unidirectional_data_flow",permalink:"/lhtp/react_part_time_evening/react-fundamentals/unidirectional_data_flow",draft:!1,tags:[],version:"current",sidebarPosition:35,frontMatter:{title:"4. Unidirectional Data Flow",id:"unidirectional_data_flow",slug:"unidirectional_data_flow",hide_table_of_contents:!0,sidebar_position:35,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/4_react-fundamentals/2c_unidirectional_data_flow.md"},sidebar:"react_part_time_evening",previous:{title:"3. Adding a Form",permalink:"/lhtp/react_part_time_evening/react-fundamentals/adding_a_form"},next:{title:"5. Passing Data Via Callbacks",permalink:"/lhtp/react_part_time_evening/react-fundamentals/passing_data_via_callbacks"}},c={},s=[],p={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"So far we have only been working with local state. However, when a user inputs data in our form, we somehow need to get that data from our ",(0,o.kt)("inlineCode",{parentName:"p"},"NewTicketForm")," component to its parent ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketControl")," component."),(0,o.kt)("p",null,"Before we do that, we need to learn more about ",(0,o.kt)("strong",{parentName:"p"},"unidirectional data flow"),". Unidirectional data flow is a language-agnostic term for applications that have data flowing in only one direction."),(0,o.kt)("p",null,"In the case of React applications, data can only flow from a parent component ",(0,o.kt)("em",{parentName:"p"},"down")," to a child component. That's why shared state should always be lifted to a common ancestor. Only child components will ever be able to access that state. Components that are higher up the component tree (above a component with state) have no way to know about that state because of unidirectional data flow. In fact, components in React are so modular that they don't even know their parents exist. It's the job of parent components to keep track of their children, not the other way around. "),(0,o.kt)("p",null,"The same is true with props. We can only pass props ",(0,o.kt)("em",{parentName:"p"},"down")," from a parent component to a child component. That's the whole point of unidirectional data flow. It may seem like a limiting concept, but it makes planning, building, and debugging an application much easier. If state and props could flow in every direction, our applications would quickly become a mess."),(0,o.kt)("p",null,"So if data can only be passed ",(0,o.kt)("em",{parentName:"p"},"down"),", then how can we get information from a child component up to a parent component?"),(0,o.kt)("p",null,"The answer: we need to use callbacks. Here's how it works."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"We define a method in a parent component that has state."),(0,o.kt)("li",{parentName:"ol"},"The parent component passes this method into the child component as a prop. Functions can be props just like any other data type."),(0,o.kt)("li",{parentName:"ol"},"We will add this method to a function in our child component in the form of a callback."),(0,o.kt)("li",{parentName:"ol"},"When the child executes the function that contains the parent component's callback, the method in the parent component is invoked. Because the callback resides in the parent component, the parent component can access any data that's passed into it. This works similarly to a closure.")),(0,o.kt)("p",null,"This may feel like we're breaking the rules of unidirectional data flow because the parent component can access information from the callback executed in the child component."),(0,o.kt)("p",null,"However, that's not the case. The parent component passes props ",(0,o.kt)("em",{parentName:"p"},"down")," using unidirectional data flow. If a function is passed downward as a prop, the parent can still access it."),(0,o.kt)("p",null,"Understandably, this concept can be confusing at first. Let's make it more concrete by describing how we will do this in our Help Queue application. We'll do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First, we will create a method called ",(0,o.kt)("inlineCode",{parentName:"li"},"onNewTicketCreation")," in the parent ",(0,o.kt)("inlineCode",{parentName:"li"},"TicketControl")," component."),(0,o.kt)("li",{parentName:"ol"},"Next, we'll pass the ",(0,o.kt)("inlineCode",{parentName:"li"},"onNewTicketCreation")," function to its child ",(0,o.kt)("inlineCode",{parentName:"li"},"NewTicketForm")," component as a prop."),(0,o.kt)("li",{parentName:"ol"},"Our child ",(0,o.kt)("inlineCode",{parentName:"li"},"NewTicketForm")," component has a function called ",(0,o.kt)("inlineCode",{parentName:"li"},"handleNewTicketFormSubmission")," which correctly gathers user inputs from a form. We will add ",(0,o.kt)("inlineCode",{parentName:"li"},"onNewTicketCreation")," to the ",(0,o.kt)("inlineCode",{parentName:"li"},"handleNewTicketFormSubmission")," as a callback."),(0,o.kt)("li",{parentName:"ol"},"Form data will be passed into the ",(0,o.kt)("inlineCode",{parentName:"li"},"onNewTicketCreation")," callback via its parameters."),(0,o.kt)("li",{parentName:"ol"},"The parent ",(0,o.kt)("inlineCode",{parentName:"li"},"TicketControl")," component will have access to that data, which it can then use to add a new ticket to our ",(0,o.kt)("inlineCode",{parentName:"li"},"mainTicketList"),".")),(0,o.kt)("p",null,"Now that we've covered unidirectional data flow, we're ready to implement this new functionality. Don't worry if it still doesn't make sense. This is a new and complex concept for React beginners \u2014 the best way to learn and internalize how this works is to actually write the code \u2014 and then continue to practice working with unidirectional data flow until the underlying concepts begin to click."))}m.isMDXComponent=!0}}]);