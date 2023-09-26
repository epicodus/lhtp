"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[29904],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,d=c["".concat(s,".").concat(m)]||c[m]||h[m]||l;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const l={title:"Help Queue: Planning and Setup for Context",id:"help-queue-planning-and-setup-for-context",slug:"help-queue-planning-and-setup-for-context",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0h_using_context_in_help_queue.md"},r=void 0,i={unversionedId:"react-part-time/react-with-apis/help-queue-planning-and-setup-for-context",id:"react-part-time/react-with-apis/help-queue-planning-and-setup-for-context",title:"Help Queue: Planning and Setup for Context",description:"In this lesson, we'll use React context in our Help Queue application to add a button that toggles between a light and dark theme. We'll need to do a few things to create this new functionality:",source:"@site/docs/react-part-time/10_react-with-apis/0h-using-context-in-help-queue.md",sourceDirName:"react-part-time/10_react-with-apis",slug:"/react-part-time/react-with-apis/help-queue-planning-and-setup-for-context",permalink:"/react-part-time/react-with-apis/help-queue-planning-and-setup-for-context",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Help Queue: Planning and Setup for Context",id:"help-queue-planning-and-setup-for-context",slug:"help-queue-planning-and-setup-for-context",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0h_using_context_in_help_queue.md"},sidebar:"react-part-time",previous:{title:"React Context",permalink:"/react-part-time/react-with-apis/react-context"},next:{title:"Help Queue: Creating a Context and Provider",permalink:"/react-part-time/react-with-apis/help-queue-creating-a-context-and-provider"}},s={},p=[{value:"Project Setup and Planning",id:"project-setup-and-planning",level:2},{value:"Adding a <code>ToggleTheme</code> Component",id:"adding-a-toggletheme-component",level:3},{value:"Determining Which Elements Need Styling",id:"determining-which-elements-need-styling",level:3},{value:"Light and Dark Styles",id:"light-and-dark-styles",level:3},{value:"Planning Our Theme State",id:"planning-our-theme-state",level:3}],u={toc:p},c="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson, we'll use React context in our Help Queue application to add a button that toggles between a light and dark theme. We'll need to do a few things to create this new functionality:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add a new button component that will toggle between styles."),(0,o.kt)("li",{parentName:"ul"},"Determine which HTML elements need styling to create the light and dark theme."),(0,o.kt)("li",{parentName:"ul"},"Create a set of styles."),(0,o.kt)("li",{parentName:"ul"},"Determine where state should live in our application."),(0,o.kt)("li",{parentName:"ul"},"Implement context and a state management tool to complete the toggle functionality.")),(0,o.kt)("p",null,"We're going to complete all of the above in this lesson, except for the last bullet point. As such, we'll be focused on project setup and planning. Then, in the next two lessons we'll implement context."),(0,o.kt)("p",null,"By the end of this walkthrough the Help Queue app will look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-5-React-2020/help-queue-light-dark-theme.gif",alt:"Gif of Help Queue homepage and creating a new ticket meanwhile toggling between the light and dark theme."})),(0,o.kt)("h2",{id:"project-setup-and-planning"},"Project Setup and Planning"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We've already created a few versions of our Help Queue, so which one do we want to update? We'll stick to our original Help Queue project that we created in the React Fundamentals course section. If you have your own copy that you created, you are welcome to use it. Otherwise, go ahead and clone down and use this starter project:"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/react-help-queue-starter-project"},(0,o.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  GitHub Repo for Help Queue Starter Project"))),(0,o.kt)("p",null,"Take note that this means we're reverting back to using ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketControl.js")," as a class component \u2014 but this is good for us! We'll be able to learn how to use context in a class component."),(0,o.kt)("h3",{id:"adding-a-toggletheme-component"},"Adding a ",(0,o.kt)("inlineCode",{parentName:"h3"},"ToggleTheme")," Component"),(0,o.kt)("p",null,"The first thing we'll do is add a new component that has a button in it that toggles our light and dark theme. We'll call our new component ",(0,o.kt)("inlineCode",{parentName:"p"},"ToggleTheme.js"),"."),(0,o.kt)("div",{class:"filename"},"src/components/ToggleTheme.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\n\nfunction ToggleTheme() {\n  return (\n    <React.Fragment>\n      <button>Toggle Theme</button>\n      <hr/>\n    </React.Fragment>\n  );\n}\n\nexport default ToggleTheme;\n')),(0,o.kt)("p",null,"There's not much going on in this component now. Just the basics of what we want our UI to look like. Later on, we'll add state to make the toggling functionality work. "),(0,o.kt)("p",null,"Next, let's update ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js")," to import and render the new ",(0,o.kt)("inlineCode",{parentName:"p"},"ToggleTheme")," component:"),(0,o.kt)("div",{class:"filename"},"src/components/App.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport Header from "./Header";\nimport TicketControl from "./TicketControl";\nimport ToggleTheme from "./ToggleTheme";\n\nfunction App(){\n  return (\n    <React.Fragment>\n      <Header />\n      <ToggleTheme />\n      <TicketControl />\n    </React.Fragment>\n  );\n}\n\nexport default App;\n')),(0,o.kt)("p",null,"After this update, this is what our Help Queue component tree should now look like:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-5-React-2020/context-help-queue-component-tree-with-toggle.png",alt:"The Help Queue component tree with the new `<ToggleTheme>` component."})),(0,o.kt)("h3",{id:"determining-which-elements-need-styling"},"Determining Which Elements Need Styling"),(0,o.kt)("p",null,"If we want to create a light/dark theme, we'll need to update the color of the text and the background color. Doing that will be as simple as changing the CSS on our HTML's ",(0,o.kt)("inlineCode",{parentName:"p"},"<body>")," tags to target all of its descendants. However, doing so will not change the color of buttons or form inputs, so we'll have to target those elements individually. "),(0,o.kt)("p",null,"So, the first question we need to answer is where our buttons and inputs are! It turns out we have buttons and inputs in four components. We can visualize their locations in our component tree:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-5-React-2020/context-help-queue-component-tree-with-UI-elements.png",alt:"The Help Queue component tree with the `<button>` and `<input>` elements listed."})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TicketControl.js"),": one ",(0,o.kt)("inlineCode",{parentName:"li"},"<button>")," element."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ToggleTheme.js"),": one ",(0,o.kt)("inlineCode",{parentName:"li"},"<button>")," element."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TicketDetail.js"),": two ",(0,o.kt)("inlineCode",{parentName:"li"},"<button>")," elements."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ReusableForm.js"),": one ",(0,o.kt)("inlineCode",{parentName:"li"},"<button>")," element, two ",(0,o.kt)("inlineCode",{parentName:"li"},"<input>")," elements, and one ",(0,o.kt)("inlineCode",{parentName:"li"},"<textarea>")," input.")),(0,o.kt)("p",null,"This means that we'll need to make sure that the four components listed above have access to the light and dark style themes we create. Let's create those next!"),(0,o.kt)("h3",{id:"light-and-dark-styles"},"Light and Dark Styles"),(0,o.kt)("p",null,"We'll use a CSS object to declare our light and dark styles, and to make it easier to switch in between them. Here are the styles we'll use for our light and dark themes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const themes = {\n  light: {\n    backgroundColor: "AntiqueWhite",\n    textColor: "DarkSlateGrey",\n    buttonBackground: "Lavender", \n    inputBackground: "Gainsboro"\n  },\n  dark: {\n    backgroundColor: "DarkSlateGrey",\n    textColor: "AntiqueWhite",\n    buttonBackground: "#232b3c",\n    inputBackground: "#45516d"\n  }\n}\n')),(0,o.kt)("p",null,"You're welcome to pick your own instead!"),(0,o.kt)("h3",{id:"planning-our-theme-state"},"Planning Our Theme State"),(0,o.kt)("p",null,"Next up, we need to plan out where the theme state will live. This is easy, thanks to the leg work we did when we determined which components have button and input elements that need a theme applied to them. Let's take another look at our component tree:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-5-React-2020/context-help-queue-component-tree-with-UI-elements-highlighted.png",alt:"The Help Queue component tree with the `<button>` and `<input>` elements listed, and their corresponding components highlighted with an orange rectangle."})),(0,o.kt)("p",null,"The above diagram highlights the four components that will need access to the shared theme data: ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketControl.js"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ToggleTheme.js"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketDetail.js"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"ReusableForm.js"),". Our next step is to lift state up to the nearest ancestor that all of these components share so that state can easily be shared between all of them: that's ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js"),"! "),(0,o.kt)("p",null,"So, our shared state will live in ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js"),". Next, we need to pick our tool to manage state and share it within our app. We'll use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useState()")," hook to manage the theme state, and we'll use context to share that state within our app. "),(0,o.kt)("p",null,"As far as a state management tool, ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," is a fine alternative, and it depends on what you prefer and what you want to practice. To review the tradeoffs and benefits of the ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook, visit the lesson ",(0,o.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/react/react-with-apis/the-usereducer-hook"},"The useReducer Hook"),"."),(0,o.kt)("p",null,"As far as sharing state between components, the best choice here would be to use props, because our application is so small and we're not facing cumbersome prop drilling. We could also rethink how we're composing our components to make the small amount of prop drilling more manageable as well. We'll explore these topics more in an upcoming lesson. For now, we'll continue with using context to transmit shared data in order to get the hang of using it! That's the goal after all."))}h.isMDXComponent=!0}}]);