"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[24895],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=s,m=u["".concat(o,".").concat(d)]||u[d]||h[d]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:s,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),s=(n(67294),n(3905));const i={title:"Using External Stylesheets with React",id:"using_external_stylesheets_with_react",slug:"using_external_stylesheets_with_react",hide_table_of_contents:!0,sidebar_position:12,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0l_external_stylesheets_with_cra.md"},r=void 0,l={unversionedId:"react_classic/react-fundamentals/using_external_stylesheets_with_react",id:"react_classic/react-fundamentals/using_external_stylesheets_with_react",title:"Using External Stylesheets with React",description:"Up to this point, we haven't discussed adding CSS styles to a React application. There are many different ways of adding styles to React applications, including using external stylesheets and creating CSS objects. In this lesson, we'll discuss using external stylesheets for CSS styling. Later in this course section, we will discuss styling with CSS objects. We will also cover other approaches in future weeks.",source:"@site/docs/react_classic/3_react-fundamentals/0l_external_stylesheets_with_cra.md",sourceDirName:"react_classic/3_react-fundamentals",slug:"/react_classic/react-fundamentals/using_external_stylesheets_with_react",permalink:"/react_classic/react-fundamentals/using_external_stylesheets_with_react",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Using External Stylesheets with React",id:"using_external_stylesheets_with_react",slug:"using_external_stylesheets_with_react",hide_table_of_contents:!0,sidebar_position:12,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0l_external_stylesheets_with_cra.md"},sidebar:"react_classic",previous:{title:"Looping in JSX",permalink:"/react_classic/react-fundamentals/looping_in_jsx"},next:{title:"Debugging with React Developer Tools",permalink:"/react_classic/react-fundamentals/debugging_with_react_developer_tools"}},o={},c=[{value:"Using External Stylesheets in React",id:"using-external-stylesheets-in-react",level:2}],p={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Up to this point, we haven't discussed adding CSS styles to a React application. There are many different ways of adding styles to React applications, including using external stylesheets and creating CSS objects. In this lesson, we'll discuss using external stylesheets for CSS styling. Later in this course section, we will discuss styling with CSS objects. We will also cover other approaches in future weeks."),(0,s.kt)("h2",{id:"using-external-stylesheets-in-react"},"Using External Stylesheets in React"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"When we create a new application with create-react-app, two CSS files are automatically generated: ",(0,s.kt)("inlineCode",{parentName:"p"},"index.css")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"App.css"),". These files are imported into ",(0,s.kt)("inlineCode",{parentName:"p"},"index.js")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"App.js")," respectively. Why have separate stylesheets for both ",(0,s.kt)("inlineCode",{parentName:"p"},"index.js")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"App.js"),"? Well, the idea here is that any styles we want to apply globally should go into ",(0,s.kt)("inlineCode",{parentName:"p"},"index.css")," while styles we just want to apply to ",(0,s.kt)("inlineCode",{parentName:"p"},"App.js")," should go into ",(0,s.kt)("inlineCode",{parentName:"p"},"App.css"),"."),(0,s.kt)("p",null,"From a readability perspective, this can be helpful, but there is a big problem with this approach. When our React application is compiled, all of the CSS files in our application will be minified into a single CSS file. Even though we can separate our CSS into separate files, ultimately, it's almost exactly the same as breaking out a single global stylesheet into many smaller files \u2014 which isn't great at all. To make matters worse, if a child component has a similarly named CSS rule (say, for ",(0,s.kt)("inlineCode",{parentName:"p"},"h1"),") as a parent component, the child component's rule will override the parent component's rule \u2014 ",(0,s.kt)("strong",{parentName:"p"},"even though the child component's rule isn't imported into the parent component"),". That creates even more of a problem!"),(0,s.kt)("p",null,"For that reason, we recommend extreme caution when using external stylesheets with React. Here are the guidelines we suggest:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If your application will have any global style rules, put them in ",(0,s.kt)("inlineCode",{parentName:"li"},"index.css"),"."),(0,s.kt)("li",{parentName:"ul"},"If you plan to use stylesheets for individual components (which we don't recommend), make sure that classes and ids very specifically pinpoint elements in that component."),(0,s.kt)("li",{parentName:"ul"},"Some animations and pseudo class selectors (like ",(0,s.kt)("inlineCode",{parentName:"li"},"hover"),") can't be implemented with recommended practices like CSS objects \u2014 so stylesheets may be an acceptable option in these use cases.")),(0,s.kt)("p",null,"So what do we recommend doing if stylesheets are generally not a best practice? CSS objects and using stylized components are both good ways to go. We will cover both approaches in future lessons. However, for now, we want to focus on learning the basics of React, not styling our applications. If you want to do some basic styling over the next few class sessions, a global stylesheet is enough."))}h.isMDXComponent=!0}}]);