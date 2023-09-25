"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[36042],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,y=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(y,s(s({ref:t},p),{},{components:n})):a.createElement(y,s({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"12. Styling React: CSS Objects",id:"styling_react_css_objects",slug:"styling_react_css_objects",hide_table_of_contents:!0,sidebar_position:30,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3_react-fundamentals/2e_styling_react_css_objects.md"},s=void 0,l={unversionedId:"react/react-fundamentals/styling_react_css_objects",id:"react/react-fundamentals/styling_react_css_objects",title:"12. Styling React: CSS Objects",description:"There are many approaches to styling a React application ranging from standard CSS to CSS objects to the styled-components library. We will cover several different approaches throughout this course, starting with CSS objects and inline styles in this lesson.",source:"@site/docs/react/3_react-fundamentals/2e_styling_react_css_objects.md",sourceDirName:"react/3_react-fundamentals",slug:"/react/react-fundamentals/styling_react_css_objects",permalink:"/lhtp/react/react-fundamentals/styling_react_css_objects",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"12. Styling React: CSS Objects",id:"styling_react_css_objects",slug:"styling_react_css_objects",hide_table_of_contents:!0,sidebar_position:30,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3_react-fundamentals/2e_styling_react_css_objects.md"},sidebar:"react",previous:{title:"11. Passing Data Via Callbacks",permalink:"/lhtp/react/react-fundamentals/passing_data_via_callbacks"},next:{title:"13. Journal #14 Discussion",permalink:"/lhtp/react/react-fundamentals/journal_14_discussion"}},i={},c=[{value:"Inline Styles with Style Objects",id:"inline-styles-with-style-objects",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are many approaches to styling a React application ranging from standard CSS to CSS objects to the ",(0,r.kt)("inlineCode",{parentName:"p"},"styled-components")," library. We will cover several different approaches throughout this course, starting with CSS objects and inline styles in this lesson."),(0,r.kt)("h3",{id:"inline-styles-with-style-objects"},"Inline Styles with Style Objects"),(0,r.kt)("p",null,"React advocates that an application should be composed of small, self-contained, reusable chunks of code called components."),(0,r.kt)("p",null,"To make our components fully modular, many React developers believe that a component should contain everything it needs, including CSS. According to proponents of this approach, we should use ",(0,r.kt)("strong",{parentName:"p"},"inline styles")," with ",(0,r.kt)("strong",{parentName:"p"},"CSS objects"),". For demonstration purposes, we'll pretend we have a component called ",(0,r.kt)("inlineCode",{parentName:"p"},"MyStyledComponent")," that looks like this:"),(0,r.kt)("div",{class:"filename"},"MyStyledComponent.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\n\nfunction MyStyledComponent(props) {\n  return (\n    <div>\n      <h1>Hey, I'm a component</h1>\n      <h2>But there's something different about me...</h2>\n      <h3>Unlike other components you have worked with thus far....</h3>\n      <h4>I also include custom CSS styles!</h4>\n      <p>Pretty cool, right</p>\n    </div>\n  );\n}\n\nexport default MyStyledComponent;\n")),(0,r.kt)("p",null,"This is how ",(0,r.kt)("inlineCode",{parentName:"p"},"MyStyledComponent")," looks in browser:"),(0,r.kt)("img",{src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate%20JavaScript/React/style-free-component.png",alt:"style-free example component.",width:"100%"}),(0,r.kt)("p",null,"Let's add styling. We can declare a CSS object right in this component's file:"),(0,r.kt)("div",{class:"filename"},"MyStyledComponent.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\n\nfunction MyStyledComponent(props) {\n  const myStyledComponentStyles = {\n    backgroundColor: '#ecf0f1',\n    fontFamily: 'sans-serif',\n    paddingTop: '50px'\n  }\n  return (\n    <div style={myStyledComponentStyles}>\n      <h1>Hey, I'm a component</h1>\n      <h2>But there's something different about me...</h2>\n      <h3>Unlike other components you have worked with thus far....</h3>\n      <h4>I also include custom CSS styles!</h4>\n      <p>Pretty cool, right</p>\n    </div>\n  );\n}\n\nexport default MyStyledComponent;\n")),(0,r.kt)("p",null,"Here, we define an object called ",(0,r.kt)("inlineCode",{parentName:"p"},"myStyledComponentStyles"),". It contains a series of CSS rules in an object literal. This is a ",(0,r.kt)("strong",{parentName:"p"},"CSS object"),"."),(0,r.kt)("p",null,"In order to actually use this CSS object in our JSX, we add a ",(0,r.kt)("inlineCode",{parentName:"p"},"style")," tag that evaluates to a JSX expression with the ",(0,r.kt)("inlineCode",{parentName:"p"},"myStyledComponentStyles")," variable."),(0,r.kt)("p",null,"Whenever we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"style")," attribute directly on an HTML or JSX element, it's considered an ",(0,r.kt)("strong",{parentName:"p"},"inline style")," because the style information is attached directly to the code. "),(0,r.kt)("p",null,"Our component now looks like this in the browser:"),(0,r.kt)("img",{src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate%20JavaScript/React/inline-styles-in-action.png",alt:"example component with inline styles",width:"100%"}),(0,r.kt)("p",null,"The syntax in these CSS objects differs from the CSS syntax we've used in the past. Here are the differences;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"CSS properties that use multiple words are written in camelCase instead of using hyphens. For example, we say ",(0,r.kt)("inlineCode",{parentName:"p"},"backgroundColor")," instead ",(0,r.kt)("inlineCode",{parentName:"p"},"background-color"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The values corresponding to each property are strings. For instance, we say ",(0,r.kt)("inlineCode",{parentName:"p"},"'sans-serif'")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"sans-serif"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each CSS rule in the object is separated by a comma since this is an object literal.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Because the term ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," is reserved in JSX, we have to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"className")," property when we want to add a specific CSS class to an element in a component. For example, we'd do the following: ",(0,r.kt)("inlineCode",{parentName:"p"},"<div className='example-class'>")," instead of this: ",(0,r.kt)("inlineCode",{parentName:"p"},"<div class='example class'>"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We can also omit the ",(0,r.kt)("inlineCode",{parentName:"p"},"px")," suffix from any pixel-related values."))),(0,r.kt)("p",null,"We will learn other approaches in future lessons. For now, we will continue to keep our components modular and use CSS objects with inline styles to style our applications."))}u.isMDXComponent=!0}}]);