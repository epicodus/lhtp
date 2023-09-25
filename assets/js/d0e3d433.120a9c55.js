"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[89283],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),h=a,u=c["".concat(p,".").concat(h)]||c[h]||d[h]||r;return n?o.createElement(u,i(i({ref:t},m),{},{components:n})):o.createElement(u,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},12619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={title:"Help Queue: Creating a Context and Provider",id:"help_queue_creating_a_context_and_provider",slug:"help_queue_creating_a_context_and_provider",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/10_react-with-apis/0i_using_context_in_help_queue_part_2.md"},i=void 0,l={unversionedId:"react_part_time_evening/react-with-apis/help_queue_creating_a_context_and_provider",id:"react_part_time_evening/react-with-apis/help_queue_creating_a_context_and_provider",title:"Help Queue: Creating a Context and Provider",description:"With our Help Queue project set up and our updates planned, we're ready to implement context. In this lesson, we'll do three things:",source:"@site/docs/react_part_time_evening/10_react-with-apis/0i_using_context_in_help_queue_part_2.md",sourceDirName:"react_part_time_evening/10_react-with-apis",slug:"/react_part_time_evening/react-with-apis/help_queue_creating_a_context_and_provider",permalink:"/lhtp/react_part_time_evening/react-with-apis/help_queue_creating_a_context_and_provider",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Help Queue: Creating a Context and Provider",id:"help_queue_creating_a_context_and_provider",slug:"help_queue_creating_a_context_and_provider",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/10_react-with-apis/0i_using_context_in_help_queue_part_2.md"},sidebar:"react_part_time_evening",previous:{title:"Help Queue: Planning and Setup for Context",permalink:"/lhtp/react_part_time_evening/react-with-apis/help_queue_planning_and_setup_for_context"},next:{title:"Help Queue: Adding Context Consumers and Error Handling",permalink:"/lhtp/react_part_time_evening/react-with-apis/help_queue_adding_context_consumers_and_error_handling"}},p={},s=[{value:"Implementing Context",id:"implementing-context",level:2},{value:"Context Providers and Consumers",id:"context-providers-and-consumers",level:3},{value:"Adding a Provider Component",id:"adding-a-provider-component",level:3},{value:"Adding State",id:"adding-state",level:3},{value:"Wiring Up the <code>ToggleTheme</code> Button",id:"wiring-up-the-toggletheme-button",level:3},{value:"Setting the Background and Text Color",id:"setting-the-background-and-text-color",level:3}],m={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With our Help Queue project set up and our updates planned, we're ready to implement context. In this lesson, we'll do three things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a context for our light and dark theme. "),(0,a.kt)("li",{parentName:"ul"},"Learn about context providers and consumers."),(0,a.kt)("li",{parentName:"ul"},"Create a context provider."),(0,a.kt)("li",{parentName:"ul"},"Implement a state management tool to change the value of the context.")),(0,a.kt)("h2",{id:"implementing-context"},"Implementing Context"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Let's create a context for our theme. Start by creating a new folder called ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," within the ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," folder, and within that a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"theme-context.js"),". "),(0,a.kt)("p",null,"Within ",(0,a.kt)("inlineCode",{parentName:"p"},"theme-context.js"),", we'll add our CSS style object that we created earlier as well as some new code: "),(0,a.kt)("div",{class:"filename"},"src/context/theme-context.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import React from \'react\';\n\nexport const themes = {\n  light: {\n    backgroundColor: "AntiqueWhite",\n    textColor: "DarkSlateGrey",\n    buttonBackground: "Lavender", \n    inputBackground: "Gainsboro"\n  },\n  dark: {\n    backgroundColor: "DarkSlateGrey",\n    textColor: "AntiqueWhite",\n    buttonBackground: "#232b3c",\n    inputBackground: "#45516d"\n  }\n};\n\nexport const ThemeContext = React.createContext();\n')),(0,a.kt)("p",null,"First we've imported React from ",(0,a.kt)("inlineCode",{parentName:"p"},"'react'"),", and then we've declared our CSS style object and saved it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"themes")," variable. Notice that we're exporting ",(0,a.kt)("inlineCode",{parentName:"p"},"themes")," so that we can use it where we need to in our app. "),(0,a.kt)("p",null,"Then, we create a new context with React's ",(0,a.kt)("inlineCode",{parentName:"p"},"creatContext()")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export const ThemeContext = React.createContext();\n")),(0,a.kt)("p",null,"The convention is to name context objects in Upper Camel Case, calling it whatever is representative of the data that the context will hold. We've called our context ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeContext"),", because it holds theme data."),(0,a.kt)("p",null,"It's also common convention to include the data relevant to the context within the same file, which is why we're including the CSS object within ",(0,a.kt)("inlineCode",{parentName:"p"},"theme-context.js"),". However, it would be fine to save this information in the component that manages the theme state."),(0,a.kt)("p",null,"And with that we've created our context! But it's not that useful yet: we haven't associated a value with our ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeContext")," and we haven't put it to use in our app. Next, let's learn about the tools that ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeContext")," exposes: provider and consumer components."),(0,a.kt)("h3",{id:"context-providers-and-consumers"},"Context Providers and Consumers"),(0,a.kt)("p",null,"Context uses provider and consumer components to share data between components. In fact, the ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeContext")," we created earlier is an object with two properties: a provider and a consumer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export const ThemeContext = React.createContext();\nconsole.log(ThemeContext.Provider);\nconsole.log(ThemeContext.Consumer);\n")),(0,a.kt)("p",null,"Since React components are just functions, we can ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log")," these values, like in the above code snippet. However, we won't get helpful information when look inside of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeContext.Provider")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeContext.Consumer")," variables. The takeaway here is that these two components are generated from the ",(0,a.kt)("inlineCode",{parentName:"p"},"createContext()")," method, and they are the mechanism by which context works:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Provider components provide data to a section of the (or entire) component tree"),(0,a.kt)("li",{parentName:"ul"},"Consumer components enable individual components to use the data that the provider component exposes. ")),(0,a.kt)("p",null,"Provider and consumer components wrap around the components that they are modifying to give and gain access to the context. Using the Help Queue as an example, if we wanted to provide ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeContext")," data to our component tree, we might wrap ",(0,a.kt)("inlineCode",{parentName:"p"},"App.js")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"<ThemeContext.Provider>"),", and any component that consumes that data would be wrapped with ",(0,a.kt)("inlineCode",{parentName:"p"},"<ThemeContext.Consumer>"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-5-React-2020/context-help-queue-component-tree-context-provider-consumer.png",alt:"The Help Queue component tree with ThemeContext provider and consumer components."})),(0,a.kt)("p",null,"As demonstrated in the component tree above, we can use as many consumer components as we need in our component tree. However, we'll use just one provider component that is lifted to the lowest common ancestor to all of the consumer components that consume the provider's data. "),(0,a.kt)("p",null,"Remember that data flows down in React, and this is true for context provider and consumer components as well. This means that if we can only use a consumer component lower in the component tree from a provider component. Using the example above, we purposefully place our provider component around ",(0,a.kt)("inlineCode",{parentName:"p"},"App.js")," so that the four child and grandchild components of ",(0,a.kt)("inlineCode",{parentName:"p"},"App.js")," can access the context data. "),(0,a.kt)("p",null,"Take note that the above component tree is for demonstration purposes only. It's very close to how we'll implement a provider and consumers, but we'll use slightly different tools and locate the provider component within ",(0,a.kt)("inlineCode",{parentName:"p"},"App.js"),", but not wrapped around ",(0,a.kt)("inlineCode",{parentName:"p"},"<App>"),". This will become clear soon."),(0,a.kt)("p",null,"Ultimately, it's important to understand that provider and consumer components enact a subscription-based relationship: consumer components are subscribed to the corresponding provider component, and any time the value of the provider component changes, all of the components that consume the providers data will be re-rendered. Using the example component diagram above, this would mean anytime the value of the provider component changes in ",(0,a.kt)("inlineCode",{parentName:"p"},"App.js"),", the following four components will re-render: ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl.js"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketDetail.js"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ReusableForm.js"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"ToggleTheme.js"),". Pretty neat! "),(0,a.kt)("p",null,"Next, let's implement a provider. "),(0,a.kt)("h3",{id:"adding-a-provider-component"},"Adding a Provider Component"),(0,a.kt)("p",null,"Since we've determined that ",(0,a.kt)("inlineCode",{parentName:"p"},"App.js")," is our lowest common ancestor to all of the components that will need access to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeContext")," data, let's add a provider there. First, we'll import ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeContext")," and our CSS ",(0,a.kt)("inlineCode",{parentName:"p"},"themes")," object from ",(0,a.kt)("inlineCode",{parentName:"p"},"theme-context.js"),":"),(0,a.kt)("div",{class:"filename"},"src/components/App.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { ThemeContext, themes } from "../context/theme-context";\n')),(0,a.kt)("p",null,"Next, let's wrap our component tree with the ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeContext.Provider")," component. In the following code notice that we're replacing the ",(0,a.kt)("inlineCode",{parentName:"p"},"<React.Fragment>")," components with the ",(0,a.kt)("inlineCode",{parentName:"p"},"<ThemeContext.Provider>")," components:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport Header from "./Header";\nimport TicketControl from "./TicketControl";\nimport ToggleTheme from "./ToggleTheme";\nimport { ThemeContext, themes } from "../context/theme-context";\n\nfunction App(){\n  return (\n    <ThemeContext.Provider value={themes.light}>\n      <Header />\n      <ToggleTheme/>\n      <TicketControl />\n    </ThemeContext.Provider>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("p",null,"Notice that we've added a prop called ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," to our ",(0,a.kt)("inlineCode",{parentName:"p"},"<ThemeContext.Provider>")," component. This is how we designate a value for our context provider. The prop must always be called ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),". "),(0,a.kt)("p",null,"We've set the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," prop to ",(0,a.kt)("inlineCode",{parentName:"p"},"themes.light"),". That will be our starting theme. However, this theme is static! If we want the value of our theme to change, we'll need to implement a state management tool. Let's do that next. "),(0,a.kt)("h3",{id:"adding-state"},"Adding State"),(0,a.kt)("p",null,"We'll use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useState()")," hook to manage our state. Let's start with an import and declare a new state variable:"),(0,a.kt)("div",{class:"filename"},"src/components/App.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import React, { useState } from "react";\nimport Header from "./Header";\nimport TicketControl from "./TicketControl";\nimport ToggleTheme from "./ToggleTheme";\nimport { ThemeContext, themes } from "../context/theme-context";\n\nfunction App(){\n  const [theme, setTheme] = useState(themes.light);\n\n  return (\n    <ThemeContext.Provider value={themes.light}>\n      <Header />\n      <ToggleTheme/>\n      <TicketControl />\n    </ThemeContext.Provider>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("p",null,"Our state variable is called ",(0,a.kt)("inlineCode",{parentName:"p"},"theme")," and it is set to the light theme in our CSS ",(0,a.kt)("inlineCode",{parentName:"p"},"themes")," object. "),(0,a.kt)("p",null,"The next update we need to make is to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," prop of our ",(0,a.kt)("inlineCode",{parentName:"p"},"<ThemeContext.Provider>")," to the value of our state variable ",(0,a.kt)("inlineCode",{parentName:"p"},"theme"),":"),(0,a.kt)("div",{class:"filename"},"src/components/App.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\n\nfunction App(){\n  const [theme, setTheme] = useState(themes.light);\n\n  return (\n    <ThemeContext.Provider value={theme}> {/* new code! */}\n      ...\n    </ThemeContext.Provider>\n  );\n}\n\nexport default App;\n")),(0,a.kt)("p",null,"Now the value of our provider component is directly tied to our state variable. That means we can call ",(0,a.kt)("inlineCode",{parentName:"p"},"setTheme()")," to change the current theme for our provider and its consumers. Next, let's wire up our button in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ToggleTheme")," component to do just that!"),(0,a.kt)("h3",{id:"wiring-up-the-toggletheme-button"},"Wiring Up the ",(0,a.kt)("inlineCode",{parentName:"h3"},"ToggleTheme")," Button"),(0,a.kt)("p",null,"The first thing we'll need to do is pass a callback function down to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ToggleTheme")," component so that it can invoke a change in state in ",(0,a.kt)("inlineCode",{parentName:"p"},"App.js"),". Remember that callback functions enable us to pass data up from a child component to a parent component, while maintaining React's unidirectional data flow."),(0,a.kt)("p",null,"We'll create a ",(0,a.kt)("inlineCode",{parentName:"p"},"toggleTheme()")," function in ",(0,a.kt)("inlineCode",{parentName:"p"},"App.js")," that calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"setTheme()")," state updater function:"),(0,a.kt)("div",{class:"filename"},"src/components/App.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'...\n\nfunction App(){\n  const [theme, setTheme] = useState(themes.light);\n\n  function toggleTheme() {\n    setTheme(theme => \n      theme.textColor === "AntiqueWhite" ? themes.light : themes.dark\n    );\n  }\n\n  return (\n    ...\n  );\n}\n\nexport default App;\n')),(0,a.kt)("p",null,"Notice that we pass a function to the ",(0,a.kt)("inlineCode",{parentName:"p"},"setTheme()")," function call:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'theme => theme.textColor === "AntiqueWhite" ? themes.light : themes.dark\n')),(0,a.kt)("p",null,"This is an arrow function that makes use of all of the available shortcuts: omitting parens with one parameter and an implicit return. We could otherwise write this arrow function like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'(theme) => { \n  return theme.textColor === "AntiqueWhite" ? themes.light : themes.dark \n}\n')),(0,a.kt)("p",null,"We're passing in a function to the ",(0,a.kt)("inlineCode",{parentName:"p"},"setTheme()")," function in order to access the current value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"theme")," state variable."),(0,a.kt)("p",null,"The ternary operator checks to see if we're on the light theme by checking the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"textColor")," property; if we're on the light theme, then it updates state to the dark theme, and vice versa. "),(0,a.kt)("p",null,"Note that the ternary operator could be re-written like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'(theme) => { \n  if (theme.textColor === "AntiqueWhite") {\n    return themes.light\n  } else {\n    return themes.dark\n  }\n}\n')),(0,a.kt)("p",null,"Next, we'll need to pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"toggleTheme()")," function to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ToggleTheme")," component:"),(0,a.kt)("div",{class:"filename"},"src/components/App.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'...\n\nfunction App(){\n  const [theme, setTheme] = useState(themes.light);\n\n  function toggleTheme() {\n    setTheme(theme => \n      theme.textColor === "AntiqueWhite" ? themes.light : themes.dark\n    );\n  }\n\n  return (\n    <ThemeContext.Provider value={theme}>\n      <Header />\n      <ToggleTheme toggleTheme={toggleTheme}/> {/* new code! */}\n      <TicketControl />\n    </ThemeContext.Provider>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("p",null,"Next let's update the ",(0,a.kt)("inlineCode",{parentName:"p"},"ToggleTheme")," component to accept props, list prop types, and use the ",(0,a.kt)("inlineCode",{parentName:"p"},"toggleTheme()")," function. "),(0,a.kt)("div",{class:"filename"},"src/components/ToggleTheme.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport PropTypes from "prop-types";\n\nfunction ToggleTheme(props) {\n  const { toggleTheme } = props;\n\n  return (\n    <React.Fragment>\n      <button onClick={toggleTheme}>\n        Toggle Theme\n      </button>\n      <hr/>\n    </React.Fragment>\n  );\n}\n\nToggleTheme.propTypes = {\n  toggleTheme: PropTypes.func\n}\n\nexport default ToggleTheme;\n')),(0,a.kt)("p",null,"At this point if we run our project, we'll be able to click our toggle theme button and change the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"theme")," state variable. But we won't be able to tell that anything is working. That's because we're not actually using the ",(0,a.kt)("inlineCode",{parentName:"p"},"theme")," state anywhere! Let's fix this issue by adding some styles so that we can see the new toggle theme functionality in action."),(0,a.kt)("h3",{id:"setting-the-background-and-text-color"},"Setting the Background and Text Color"),(0,a.kt)("p",null,"The first styling we'll add is updating the ",(0,a.kt)("inlineCode",{parentName:"p"},"<body>")," tag's background color and text color to match the current theme. We'll first show you the two new lines of code, and then explain it. Here's what we'll add to ",(0,a.kt)("inlineCode",{parentName:"p"},"App.js"),":"),(0,a.kt)("div",{class:"filename"},"src/components/App.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'...\n\nfunction App(){\n  const [theme, setTheme] = useState(themes.light);\n\n  document.body.style.backgroundColor = theme.backgroundColor; // new code!\n  document.body.style.color = theme.textColor; // new code!\n\n  function toggleTheme() {\n    setTheme(theme => \n      theme.textColor === "AntiqueWhite" ? themes.light : themes.dark\n    );\n  }\n\n  return (\n    <ThemeContext.Provider value={theme}>\n      <Header />\n      <ToggleTheme toggleTheme={toggleTheme}/>\n      <TicketControl />\n    </ThemeContext.Provider>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("p",null,"Let's break down the new code we've added. We've used ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors"},"dot notation")," to access the nested properties of the ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," object:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"document")," object represents the Document Object Model (DOM) for our Help Queue app. The DOM is ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API"},"a Web API"),"."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"document.body")," property represents the ",(0,a.kt)("inlineCode",{parentName:"li"},"<body>")," tags in the DOM."),(0,a.kt)("li",{parentName:"ul"},"The  ",(0,a.kt)("inlineCode",{parentName:"li"},"document.body.style")," property represents the ",(0,a.kt)("inlineCode",{parentName:"li"},"<body>")," tags' ",(0,a.kt)("inlineCode",{parentName:"li"},"style")," attribute, which sets inline HTML styles."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"style.backgroundColor")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"style.color")," represent the CSS properties ",(0,a.kt)("inlineCode",{parentName:"li"},"background-color")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"color")," respectively. We can set the value of these properties to change the background and text colors for the body tags.")),(0,a.kt)("p",null,"So this JavaScript:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"document.body.style.backgroundColor = theme.backgroundColor; \ndocument.body.style.color = theme.textColor;\n")),(0,a.kt)("p",null,"Is the same as this CSS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},'body {\n  background-color: "blue";\n  color: "white";\n}\n')),(0,a.kt)("p",null,"However, the JavaScript is dynamic in nature. Instead of hardcoding values like in the example CSS above (",(0,a.kt)("inlineCode",{parentName:"p"},'"blue"')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'"white"'),"), we're able to set the values of the background color and text color to the current theme. Very cool!"),(0,a.kt)("p",null,"Go ahead and test this out now: run your project and press the \"toggle theme\" button; you'll see the background and text color change from a light theme to a dark theme. At this point we still need to update the background colors of our button and input elements to complete the functionality. We'll do that in the next lesson when we learn how to create context consumers for function and class components."))}d.isMDXComponent=!0}}]);