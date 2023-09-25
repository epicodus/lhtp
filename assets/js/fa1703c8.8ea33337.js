"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[88484],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Introduction to JSX",id:"introduction_to_jsx",slug:"introduction_to_jsx",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/4_react-fundamentals/0e_introduction_to_jsx.md"},i=void 0,l={unversionedId:"react_part_time_evening/react-fundamentals/introduction_to_jsx",id:"react_part_time_evening/react-fundamentals/introduction_to_jsx",title:"Introduction to JSX",description:"In this lesson, we'll learn the basics of JSX, a preprocessor that adds special syntax capabilities to JavaScript. Specifically, JSX combines elements of both HTML and JavaScript.",source:"@site/docs/react_part_time_evening/4_react-fundamentals/0e_introduction_to_jsx.md",sourceDirName:"react_part_time_evening/4_react-fundamentals",slug:"/react_part_time_evening/react-fundamentals/introduction_to_jsx",permalink:"/lhtp/react_part_time_evening/react-fundamentals/introduction_to_jsx",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Introduction to JSX",id:"introduction_to_jsx",slug:"introduction_to_jsx",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/4_react-fundamentals/0e_introduction_to_jsx.md"},sidebar:"react_part_time_evening",previous:{title:"React Components",permalink:"/lhtp/react_part_time_evening/react-fundamentals/react_components"},next:{title:"Planning a React Application",permalink:"/lhtp/react_part_time_evening/react-fundamentals/planning_a_react_application"}},s={},c=[{value:"Separation of Concerns",id:"separation-of-concerns",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this lesson, we'll learn the basics of JSX, a preprocessor that adds special syntax capabilities to JavaScript. Specifically, JSX combines elements of both HTML and JavaScript."),(0,r.kt)("p",null,"We'll start by deleting the content inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"App.js")," file (but not the file itself). We can also delete the ",(0,r.kt)("inlineCode",{parentName:"p"},"App.css")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"App.test.js")," files that ",(0,r.kt)("inlineCode",{parentName:"p"},"create-react-app")," automatically built for our ",(0,r.kt)("inlineCode",{parentName:"p"},"help-queue")," project. The provided ",(0,r.kt)("inlineCode",{parentName:"p"},"App.js")," is a state component, but we don't need one of those yet. Instead, we'll build a simple function component that uses JSX."),(0,r.kt)("p",null,"JSX is a declarative language that combines JavaScript with HTML. It makes React code much easier to read, write, and understand. For this reason, almost all React development teams use JSX. While we could technically write React applications with vanilla JavaScript, it would be very cumbersome."),(0,r.kt)("p",null,"Browsers don't understand JSX so we need to use Babel to compile our JSX code. Fortunately, ",(0,r.kt)("inlineCode",{parentName:"p"},"create-react-app")," will take care of this for us and we don't have to worry about it."),(0,r.kt)("p",null,"At this point, the ",(0,r.kt)("inlineCode",{parentName:"p"},"App.js")," file should be blank. Add the following code to this file:"),(0,r.kt)("div",{class:"filename"},"src/App.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\n\nfunction App(){\n  return (\n    <React.Fragment>\n      <h1>Help Queue</h1>\n      <h3>3a</h3>\n      <h3>Thato and Haley</h3>\n      <p><em>Firebase entries not saving!</em></p>\n      <hr/>\n    </React.Fragment>\n  );\n}\n\nexport default App;\n')),(0,r.kt)("p",null,"As we can see, our return statement is mostly standard HTML. In this context, this is actually JSX syntax, which recognizes standard HTML. Under the hood, React is actually using a method called ",(0,r.kt)("inlineCode",{parentName:"p"},"React.createElement()")," to create these elements. While it looks like we are writing HTML, this is actually ",(0,r.kt)("strong",{parentName:"p"},"syntactic sugar"),". Syntactic sugar is when a language or library provides an easier way to write and read code. This way we can write HTML without worrying about calling ",(0,r.kt)("inlineCode",{parentName:"p"},"React.createElement()")," every time we want to create a new element."),(0,r.kt)("p",null,"We also use a new element called a ",(0,r.kt)("inlineCode",{parentName:"p"},"<React.Fragment>"),". In order to return multiple elements, all the code in a function component's return statement must be wrapped in a single JSX element. Typically, that will be a ",(0,r.kt)("inlineCode",{parentName:"p"},"<div>")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"<React.Fragment>"),"."),(0,r.kt)("p",null,"If our component returns multiple elements and we don't wrap it in one of these two things, we'll get the following parsing error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Adjacent JSX elements must be wrapped in an enclosing tag.\n")),(0,r.kt)("p",null,"Traditionally, elements were wrapped in a ",(0,r.kt)("inlineCode",{parentName:"p"},"<div>"),". While this still works, it's no longer considered a best practice because it needlessly clutters the DOM with unnecessary divs. The ",(0,r.kt)("inlineCode",{parentName:"p"},"<React.Fragment>")," was created to solve this issue. All components returning more than one element must be wrapped in a ",(0,r.kt)("inlineCode",{parentName:"p"},"<React.Fragment>"),"."),(0,r.kt)("p",null,"While JSX may look like HTML, there are ways in which JSX is more like JavaScript. For instance, if we wanted to add a class to a div, we'd use lower camel case like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<div className="class-name"></div>\n')),(0,r.kt)("p",null,"We can also evaluate expressions inside curly braces. Update ",(0,r.kt)("inlineCode",{parentName:"p"},"App.js")," to look like the following:"),(0,r.kt)("div",{class:"filename"},"src/App.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\n\nfunction App(){\n  const name = "Thato";\n  const name2 = "Haley";\n  return (\n    <React.Fragment>\n      <h1>Help Queue</h1>\n      <h3>3a</h3>\n      <h3>{name} and {name2}</h3>\n      <p><em>Firebase entries not saving!</em></p>\n      {/* This is a JSX comment. */}\n      <hr/>\n    </React.Fragment>\n  );\n}\n\nexport default App;\n')),(0,r.kt)("p",null,"In the above example, we are storing the names on the help ticket inside variables. We can then express the values of these variables using curly braces ",(0,r.kt)("inlineCode",{parentName:"p"},"{}"),"."),(0,r.kt)("p",null,"Note also the odd syntax for the comment above. JSX doesn't recognize either JS or HTML comments. To actually add a comment to JSX (which we'll generally avoid), we have to store a JS comment ",(0,r.kt)("em",{parentName:"p"},"inside")," curly braces so it will properly be evaluated as a comment. One nice thing about VS Code is that it will automatically use the correct syntax when we use the keyboard shortcut  for comments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Command")," + ",(0,r.kt)("inlineCode",{parentName:"li"},"/")," for Mac"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Ctrl")," + ",(0,r.kt)("inlineCode",{parentName:"li"},"/")," for Windows")),(0,r.kt)("p",null,"We will always use curly braces for any JavaScript expression in JSX, whether it's a function call, rendering a variable, or string interpolation. Think about curly braces as a way to escape JSX back and return to vanilla JS. "),(0,r.kt)("p",null,"Finally, we need to know the syntax for rendering a child component within a parent component. We covered this briefly when we discussed our ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," file, which renders the ",(0,r.kt)("inlineCode",{parentName:"p"},"App")," component using the following syntax: ",(0,r.kt)("inlineCode",{parentName:"p"},"<App />"),". React lets us call a component by name using JSX element syntax, in essence creating a custom tag. "),(0,r.kt)("p",null,"For example, if we were working in ",(0,r.kt)("inlineCode",{parentName:"p"},"ParentComponent.js")," and we wanted to render its child component, syntax for the render method might look something like this: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"return (\n<React.Fragment>\n  <ChildComponent />\n</React.Fragment>\n);\n")),(0,r.kt)("p",null,"For now, that's really all we need to know about JSX. We will cover using looping and conditionals as well as making forms and other JSX styling syntax in future lessons."),(0,r.kt)("h3",{id:"separation-of-concerns"},"Separation of Concerns"),(0,r.kt)("p",null,"Before we move on to building out our Help Queue further, there's one other key point to address. We have spent the past few months focusing on keeping our concerns separate. Specifically, we've focused on keeping our UI logic separate from our business logic."),(0,r.kt)("p",null,"For that reason, it may seem strange to mix HTML and JavaScript syntax as we do with JSX."),(0,r.kt)("p",null,"However, remember that React is only the view layer. As a view library (not a framework), React only cares about presentation. Its job is to render the virtual DOM \u2014 which it will reconcile with the real DOM \u2014 leading to a more seamless user experience. Since developers have traditionally used HTML and JS to render the DOM, it makes sense to combine the advantages of both."))}d.isMDXComponent=!0}}]);