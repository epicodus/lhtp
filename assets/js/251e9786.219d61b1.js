"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[12619],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},81178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={title:"NaN. Binding Functions in React",id:"binding_functions_in_react",slug:"binding_functions_in_react",hide_table_of_contents:!0,sidebar_position:25,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/4_react-fundamentals/1g_binding_functions_in_react.md"},r=void 0,l={unversionedId:"react_part_time_evening/react-fundamentals/binding_functions_in_react",id:"react_part_time_evening/react-fundamentals/binding_functions_in_react",title:"NaN. Binding Functions in React",description:"In the last lesson, we added a button with an event handler as well as a function that triggered a change in local state.",source:"@site/docs/react_part_time_evening/4_react-fundamentals/1g_binding_functions_in_react.md",sourceDirName:"react_part_time_evening/4_react-fundamentals",slug:"/react_part_time_evening/react-fundamentals/binding_functions_in_react",permalink:"/lhtp/react_part_time_evening/react-fundamentals/binding_functions_in_react",draft:!1,tags:[],version:"current",sidebarPosition:25,frontMatter:{title:"NaN. Binding Functions in React",id:"binding_functions_in_react",slug:"binding_functions_in_react",hide_table_of_contents:!0,sidebar_position:25,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/4_react-fundamentals/1g_binding_functions_in_react.md"},sidebar:"react_part_time_evening",previous:{title:"NaN. Updating State with Events",permalink:"/lhtp/react_part_time_evening/react-fundamentals/updating_state_with_events"},next:{title:"NaN. Journal #14 Discussion",permalink:"/lhtp/react_part_time_evening/react-fundamentals/journal_14_discussion"}},s={},c=[],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the last lesson, we added a button with an event handler as well as a function that triggered a change in local state."),(0,i.kt)("p",null,"We also mentioned that we need to use arrow notation for our ",(0,i.kt)("inlineCode",{parentName:"p"},"handleClick()")," method. In this lesson, we'll explain how method binding works and why we need it in our application."),(0,i.kt)("p",null,"Let's take another look at our ",(0,i.kt)("inlineCode",{parentName:"p"},"handleClick()")," method. We'll make a small update to our code to intentionally break it. Specifically, we'll remove the arrow notation from ",(0,i.kt)("inlineCode",{parentName:"p"},"handleClick()")," so it looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  handleClick(){\n    this.setState(prevState => ({\n      formVisibleOnPage: !prevState.formVisibleOnPage\n    }));\n  }\n")),(0,i.kt)("p",null,"If we run our application with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start"),' and then click the "Add Ticket" button, we\'ll get the following error:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"TypeError: Cannot read property 'setState' of undefined\n")),(0,i.kt)("p",null,"Here is the problem. React uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"render()")," method to create elements in the DOM with event handlers. Let's revisit the code we use to create our button's event handler."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<button onClick={this.handleClick}>{buttonText}</button>\n")),(0,i.kt)("p",null,"React will use this code to create a button that has a click handler attached. This button lives in the DOM and has no knowledge of its original context (the class where the ",(0,i.kt)("inlineCode",{parentName:"p"},"handleClick()")," method was created). When a function loses its context (or doesn't have a specific context to begin with), ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," can be one of two things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If JavaScript isn't in ",(0,i.kt)("inlineCode",{parentName:"li"},"strict")," mode, ",(0,i.kt)("inlineCode",{parentName:"li"},"this")," refers to the global window."),(0,i.kt)("li",{parentName:"ul"},"If JavaScript is in ",(0,i.kt)("inlineCode",{parentName:"li"},"strict")," mode, ",(0,i.kt)("inlineCode",{parentName:"li"},"this")," becomes undefined.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"strict")," mode is exactly what it sounds like \u2014 a stricter mode of JavaScript. (For more information, see the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode"},"documentation on strict mode"),"). We haven't explicitly used it in the past but ES6 classes automatically use ",(0,i.kt)("inlineCode",{parentName:"p"},"strict")," mode, which means that if a function loses its context, it will be ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,i.kt)("p",null,'In order to fix this problem in our application, we have to "bind" our function so it "remembers" what ',(0,i.kt)("inlineCode",{parentName:"p"},"this")," should be. Traditionally, React used JavaScript's ",(0,i.kt)("inlineCode",{parentName:"p"},"bind()")," method to solve this problem. Here's how we'd need to modify our code to work with ",(0,i.kt)("inlineCode",{parentName:"p"},"bind()"),":"),(0,i.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class TicketControl extends React.Component {\n\n  constructor(props) {\n    super(props);\n    this.state = {\n      formVisibleOnPage: false\n    };\n    this.handleClick = this.handleClick.bind(this); //new code here\n  }\n\n  handleClick() {\n    this.setState(prevState => ({\n      formVisibleOnPage: !prevState.formVisibleOnPage\n    }));\n  }\n\n...\n")),(0,i.kt)("p",null,"Here's the specific line of code that binds our function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"this.handleClick = this.handleClick.bind(this);\n")),(0,i.kt)("p",null,"The code in the line above states that whenever ",(0,i.kt)("inlineCode",{parentName:"p"},"this.handleClick")," is called, it should have the current context of ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," bound to it. Because this line of code is inside the constructor, ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," is an instance of the class itself, which is exactly what we need. That way, when ",(0,i.kt)("inlineCode",{parentName:"p"},"this.handleClick")," is called in the DOM, our application still knows what ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," should be."),(0,i.kt)("p",null,"Fortunately, we don't need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"bind")," anymore because arrow functions automatically bind functions to their lexical scope. That means we can do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  handleClick = () => {\n    this.setState(prevState => ({\n      formVisibleOnPage: !prevState.formVisibleOnPage\n    }));\n  }\n")),(0,i.kt)("p",null,"Because this method uses arrow notation, ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," is automatically bound to its current lexical scope, which is an instance of the class itself. Once again, that's exactly what we need \u2014 and takes less code!"),(0,i.kt)("p",null,"This concept of binding may seem confusing at first. The ways in which ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," changes context can be confounding even for experienced developers. You do not need to have an advanced understanding of this concept to use React, though. In fact, you don't really need to worry about this concept at all as long as you use arrow functions so any methods you write are properly bound so that callbacks keep their context in the DOM."),(0,i.kt)("p",null,"There's one other important thing to note: this issue with binding functions has nothing to do with React. It's a JavaScript thing. Having a better understanding of binding ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," will improve your understanding of JavaScript fundamentals."))}u.isMDXComponent=!0}}]);