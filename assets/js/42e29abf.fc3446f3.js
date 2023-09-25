"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[27977],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>d});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=c(o),m=a,d=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return o?n.createElement(d,s(s({ref:t},h),{},{components:o})):n.createElement(d,s({ref:t},h))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},33829:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=o(87462),a=(o(67294),o(3905));const r={title:"The Rules of Hooks, Custom Hooks, and Why Hooks Are Awesome",id:"the_rules_of_hooks_custom_hooks_and_why_hooks_are_awesome",slug:"the_rules_of_hooks_custom_hooks_and_why_hooks_are_awesome",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0d_rules_of_hooks_and_custom_hooks.md"},s=void 0,i={unversionedId:"react/react-with-nosql/the_rules_of_hooks_custom_hooks_and_why_hooks_are_awesome",id:"react/react-with-nosql/the_rules_of_hooks_custom_hooks_and_why_hooks_are_awesome",title:"The Rules of Hooks, Custom Hooks, and Why Hooks Are Awesome",description:"In this lesson, we'll recap the best practices and rules of hooks. We'll also review why hooks are so beloved in the React developer community by explaining how hooks improve how we can reuse stateful logic in our apps. In the process, we'll write our own custom hook.",source:"@site/docs/react/5_react-with-nosql/0d_rules_of_hooks_and_custom_hooks.md",sourceDirName:"react/5_react-with-nosql",slug:"/react/react-with-nosql/the_rules_of_hooks_custom_hooks_and_why_hooks_are_awesome",permalink:"/react/react-with-nosql/the_rules_of_hooks_custom_hooks_and_why_hooks_are_awesome",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"The Rules of Hooks, Custom Hooks, and Why Hooks Are Awesome",id:"the_rules_of_hooks_custom_hooks_and_why_hooks_are_awesome",slug:"the_rules_of_hooks_custom_hooks_and_why_hooks_are_awesome",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0d_rules_of_hooks_and_custom_hooks.md"},sidebar:"react",previous:{title:"Running Side Effects with the useEffect Hook",permalink:"/react/react-with-nosql/running_side_effects_with_the_useeffect_hook"},next:{title:"Refactoring Help Queue to Use Hooks",permalink:"/react/react-with-nosql/refactoring_help_queue_to_use_hooks"}},l={},c=[{value:"How to Use Hooks in a React Application",id:"how-to-use-hooks-in-a-react-application",level:2},{value:"Rules of Hooks",id:"rules-of-hooks",level:2},{value:"Best Practices for Hooks",id:"best-practices-for-hooks",level:2},{value:"Why Hooks Are Awesome",id:"why-hooks-are-awesome",level:2},{value:"Turning <code>Timer</code> into a Custom Hook",id:"turning-timer-into-a-custom-hook",level:3},{value:"Before Hooks",id:"before-hooks",level:3},{value:"There&#39;s Much More to Explore!",id:"theres-much-more-to-explore",level:2}],h={toc:c},u="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this lesson, we'll recap the best practices and rules of hooks. We'll also review why hooks are so beloved in the React developer community by explaining how hooks improve how we can reuse stateful logic in our apps. In the process, we'll write our own custom hook. "),(0,a.kt)("h2",{id:"how-to-use-hooks-in-a-react-application"},"How to Use Hooks in a React Application"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"With the new power of being able to use state and lifecycle features in function components, you might wonder if how we structure our React applications should also change. The docs address this question in the ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-faq.html#how-much-of-my-react-knowledge-stays-relevant"},"Hooks FAQ"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Hooks are a more direct way to use the React features you already know \u2014 such as state, lifecycle, context, and refs. They don\u2019t fundamentally change how React works, and your knowledge of components, props, and top-down data flow is just as relevant.")),(0,a.kt)("p",null,"One common question is: should we add state in whichever component we feel needs it now? Not necessarily. As a rule, you should always think carefully about where you add state. In fact, React has a guide for this decision making and design process: ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/thinking-in-react.html"},"Thinking in React"),". This guide covers creating a React application from the ground up, and there's three sections that cover state. We highly recommend that you revisit this document whenever you have questions about how to structure your React application."),(0,a.kt)("p",null,"As a quick review, here's the process we should follow when deciding where our state should live, ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/thinking-in-react.html#step-4-identify-where-your-state-should-live"},"according to the React docs"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For each piece of state in your application:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Identify every component that renders something based on that state."),(0,a.kt)("li",{parentName:"ul"},"Find a common owner component (a single component above all the components that need the state in the hierarchy)."),(0,a.kt)("li",{parentName:"ul"},"Either the common owner or another component higher up in the hierarchy should own the state."),(0,a.kt)("li",{parentName:"ul"},"If you can\u2019t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component."))),(0,a.kt)("h2",{id:"rules-of-hooks"},"Rules of Hooks"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"There are two rules for using hooks:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Only call hooks at the top level of a function component. Don\u2019t call hooks inside loops, conditions, or nested functions."),(0,a.kt)("li",{parentName:"ol"},"Only call hooks from React function components. Don\u2019t call hooks from regular JavaScript functions (unless you are creating a custom hook \u2014 more on this soon!) or class components.")),(0,a.kt)("p",null,"Applications that are bootstrapped with create-react-app come with ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-react-hooks"},"an ESLint plugin for hooks")," that will warn you about misusing hooks. So, pay attention to your terminal output so that you can catch ESLint warnings about misused hooks."),(0,a.kt)("p",null,"For more detailed information, visit the React docs: ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-rules.html"},"Rules of Hooks"),"."),(0,a.kt)("h2",{id:"best-practices-for-hooks"},"Best Practices for Hooks"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Other than the rules of hooks that we must follow, there's two best practices that we should also follow:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Use multiple hooks to handle different concerns. ")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For example, it's better to use multiple ",(0,a.kt)("inlineCode",{parentName:"li"},"useState")," hooks to handle different state variables, instead of grouping them into one ",(0,a.kt)("inlineCode",{parentName:"li"},"useState")," hook."),(0,a.kt)("li",{parentName:"ul"},"You should also use multiple ",(0,a.kt)("inlineCode",{parentName:"li"},"useEffect")," hooks to manage different effects. Doing so practices separation of concerns and is a huge benefit with the ",(0,a.kt)("inlineCode",{parentName:"li"},"useEffect")," hook.")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},'Convention dictates that the name of custom hooks should start with "use", like ',(0,a.kt)("inlineCode",{parentName:"li"},"useState")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"useTimer"),". Later in this lesson, we'll create a custom hook called ",(0,a.kt)("inlineCode",{parentName:"li"},"useTimer"),"! ")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Take note that the ESLint plugin for React hooks relies on this naming convention to identify hooks and any issues with them.")),(0,a.kt)("h2",{id:"why-hooks-are-awesome"},"Why Hooks Are Awesome"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"React developers introduced hooks to solve a lot of pain points in React development. Some of these pain points are easy to understand. For example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Some developers consider class components harder to read and reason about, including  method binding, and how ",(0,a.kt)("inlineCode",{parentName:"li"},"this")," can change in value based on its execution context within the class component."),(0,a.kt)("li",{parentName:"ul"},"Class lifecycle methods force developers to organize code by the lifecycle method instead of separating code by concern. Indeed, you can only have one of each lifecycle method in a given component, so any and all code that needs to be run must be added to the appropriate lifecycle method, regardless of whether that code is performing different functionality and effects.")),(0,a.kt)("p",null,"However, getting to a good understanding of other pain points involves a React history lesson and developing an understanding of tools that are best left for further exploration. If you're curious to learn more, we recommend reading through the ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"Introducing Hooks")," page on the React docs, and watching the video introduction."),(0,a.kt)("p",null,"One thing we will go over now that we haven't yet covered is how hooks make it very easy to *",(0,a.kt)("em",{parentName:"p"},"re"),"use stateful logic in multiple places. "),(0,a.kt)("p",null,"First of all, ",(0,a.kt)("strong",{parentName:"p"},"stateful logic")," is any code in our React app that includes some state. Both our ",(0,a.kt)("inlineCode",{parentName:"p"},"Counter")," and our ",(0,a.kt)("inlineCode",{parentName:"p"},"Timer")," components contain stateful logic that handle counting and timing. "),(0,a.kt)("p",null,"So when the React docs say that hooks provide an easier way to ",(0,a.kt)("em",{parentName:"p"},"re"),"use stateful logic, React is talking about the ability to abstract stateful logic into a custom hook to reuse as many times as needed in an application. And React is right \u2014 hooks really do make reusing stateful logic easy. "),(0,a.kt)("p",null,"To get a sense of just how easy this is to do, let's create our own custom hook. Afterwards, we'll briefly discuss the alternatives."),(0,a.kt)("h3",{id:"turning-timer-into-a-custom-hook"},"Turning ",(0,a.kt)("inlineCode",{parentName:"h3"},"Timer")," into a Custom Hook"),(0,a.kt)("p",null,"For this example, we'll continue with our ",(0,a.kt)("inlineCode",{parentName:"p"},"intro-to-hooks")," application and extract our stateful timer logic in our ",(0,a.kt)("inlineCode",{parentName:"p"},"Timer")," component into a custom hook called ",(0,a.kt)("inlineCode",{parentName:"p"},"useTimer"),". To do this, we'll make updates to ",(0,a.kt)("inlineCode",{parentName:"p"},"Timer.js"),", and we'll also create a brand new ",(0,a.kt)("inlineCode",{parentName:"p"},"useTimer.js")," file for our custom hook. "),(0,a.kt)("p",null,"First, go ahead and create a new folder within the ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," folder called ",(0,a.kt)("inlineCode",{parentName:"p"},"hooks")," and a file within it called ",(0,a.kt)("inlineCode",{parentName:"p"},"useTimer.js"),". Note that React isn't very opinionated about how we organize our folders and files, so we don't have to have a ",(0,a.kt)("inlineCode",{parentName:"p"},"hooks")," folder with our custom hooks inside. Generally speaking, whatever naming you choose should be intuitive and your folders shouldn't nest too deeply. If you want to read more on this topic, checkout this reference on ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/faq-structure.html"},"File Structure"),"."),(0,a.kt)("p",null,"Here's the starter code that we'll add to ",(0,a.kt)("inlineCode",{parentName:"p"},"useTimer.js"),":"),(0,a.kt)("div",{class:"filename"},"src/hooks/useTimer.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { useState, useEffect } from 'react';\n\nfunction useTimer() {\n  // stateful logic for our timer will go here!\n}\n\nexport default useTimer;\n")),(0,a.kt)("p",null,"As we can see hooks are just JavaScript functions. We've imported the ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," hooks at the top of the file, because we'll use them in our timer logic. "),(0,a.kt)("p",null,"So what stateful logic should we be extracting from ",(0,a.kt)("inlineCode",{parentName:"p"},"Timer.js"),"? Any code that sets up and manages our timer. We shouldn't include any code that handles setting the UI, because that's the job of the React component. "),(0,a.kt)("p",null,"Here's the extracted code from ",(0,a.kt)("inlineCode",{parentName:"p"},"Timer.js"),", added to ",(0,a.kt)("inlineCode",{parentName:"p"},"useTimer.js"),":"),(0,a.kt)("div",{class:"filename"},"src/hooks/useTimer.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { useState, useEffect } from 'react';\n\nfunction useTimer() {\n  const [isActive, setIsActive] = useState(false);\n  const [timer, setTimer] = useState(0);\n\n  useEffect(() => {\n    let interval;\n\n    if (isActive) {\n      interval = setInterval(() => {\n        setTimer(timerState => timerState + 1)\n      }, 1000\n    )}\n\n    return () => clearInterval(interval);\n  }, [isActive]);\n}\n\nexport default useTimer;\n")),(0,a.kt)("p",null,"Our custom hooks can make use of any built-in React hooks, but as noted earlier, it shouldn't contain any UI logic."),(0,a.kt)("p",null,"And here's what ",(0,a.kt)("inlineCode",{parentName:"p"},"Timer.js")," should now look like:"),(0,a.kt)("div",{class:"filename"},"src/hooks/Timer.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport useTimer from './hooks/useTimer';\n\nfunction Timer() {\n  return (\n    <React.Fragment>\n      {isActive ? <h1>{timer}</h1> : <h1>Timer Stopped</h1>}\n      <button onClick={() => setIsActive(!isActive)}>Start/Stop</button>\n    </React.Fragment>\n  );\n}\n\nexport default Timer;\n")),(0,a.kt)("p",null,"At this point, we'll get a lot of compilation errors because ",(0,a.kt)("inlineCode",{parentName:"p"},"Timer.js")," is rendering variables that don't exist! Specifically: ",(0,a.kt)("inlineCode",{parentName:"p"},"isActive"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"timer"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"setIsActive"),"."),(0,a.kt)("p",null,"And while we've imported the ",(0,a.kt)("inlineCode",{parentName:"p"},"useTimer")," hook at the top of ",(0,a.kt)("inlineCode",{parentName:"p"},"Timer.js"),", we're not quite ready to use it because our ",(0,a.kt)("inlineCode",{parentName:"p"},"useTimer")," hook doesn't return anything just yet. "),(0,a.kt)("p",null,"So what should we return from our custom hook? Quite simply, any of the logic that we'll need to render. We can figure out what this is by looking at the variables in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Timer")," component's return statement. As noted earlier, these variables are ",(0,a.kt)("inlineCode",{parentName:"p"},"isActive"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"timer"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"setIsActive"),". So, let's update our ",(0,a.kt)("inlineCode",{parentName:"p"},"useTimer")," hook to return these variables."),(0,a.kt)("div",{class:"filename"},"src/hooks/useTimer.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { useState, useEffect } from 'react';\n\nfunction useTimer() {\n  const [isActive, setIsActive] = useState(false);\n  const [timer, setTimer] = useState(0);\n\n  useEffect(() => {\n    let interval;\n\n    if (isActive) {\n      interval = setInterval(() => {\n        setTimer(timerState => timerState + 1)\n      }, 1000\n    )}\n\n    return () => clearInterval(interval);\n  }, [isActive]);\n\n  // New line below!\n  return [isActive, timer, setIsActive]; \n}\n\nexport default useTimer;\n")),(0,a.kt)("p",null,"Just like with the ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," hook, we're returning our variables in an array. We could choose an object instead, if that is preferable to structure your data."),(0,a.kt)("p",null,"Now, let's update our ",(0,a.kt)("inlineCode",{parentName:"p"},"Timer.js")," component to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useTimer")," hook:"),(0,a.kt)("div",{class:"filename"},"src/hooks/Timer.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport useTimer from './hooks/useTimer';\n\nfunction Timer() {\n  // New line below!\n  const [isActive, timer, setIsActive] = useTimer();\n\n  return (\n    <React.Fragment>\n      {isActive ? <h1>{timer}</h1> : <h1>Timer Stopped</h1>}\n      <button onClick={() => setIsActive(!isActive)}>Start/Stop</button>\n    </React.Fragment>\n  );\n}\n\nexport default Timer;\n")),(0,a.kt)("p",null,"We destructure the three variables from the ",(0,a.kt)("inlineCode",{parentName:"p"},"useTimer")," hook in the same order in which they are returned. "),(0,a.kt)("p",null,"Take note that when we destructure values from an array we can name these variables whatever we want. For example:"),(0,a.kt)("div",{class:"filename"},"src/hooks/useTimer.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport useTimer from './hooks/useTimer';\n\nfunction Timer() {\n  const [isOn, stopwatch, setIsOn] = useTimer();\n\n  return (\n    <React.Fragment>\n      {isOn ? <h1>{stopwatch}</h1> : <h1>Timer Stopped</h1>}\n      <button onClick={() => setIsOn(!isOn)}>Start/Stop</button>\n    </React.Fragment>\n  );\n}\n\nexport default Timer;\n")),(0,a.kt)("p",null,"And with that, we've successfully created a custom hook called ",(0,a.kt)("inlineCode",{parentName:"p"},"useTimer"),"! We can now import this hook into any component that we want to use a timer in. If we had three separate components, we could use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useTimer")," hook to create three separate timers, all with separate state. This is exactly what it means to ",(0,a.kt)("strong",{parentName:"p"},"reuse stateful logic"),", and hopefully you can agree that it was pretty easy to do with a custom hook."),(0,a.kt)("p",null,"To learn more about building custom hooks, visit the React docs on ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-custom.html"},"Building Your Own Hooks"),"."),(0,a.kt)("h3",{id:"before-hooks"},"Before Hooks"),(0,a.kt)("p",null,"Prior to hooks, developers would use a combination of mixins, higher-order components, context, and render props. At this point, mixins are considered harmful, as detailed in the React blog post ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html"},"Mixins Considered Harmful"),". ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/higher-order-components.html"},"Higher-order components"),", ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"context"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/render-props.html"},"render props"),' are all still in use in React, and they are each different tools that enable sharing code between two or more components. The issue with these tools is that they lead to "wrapper hell", where there\'s an excess of "wrapper" components that handle transferring data, but don\'t render anything to the UI.'),(0,a.kt)("p",null,"Courtesy of ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"reactjs.org"),", we can get a sense of what wrapper hell is by inspecting the component tree with our React DevTools:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-4-React-2020/react-component-wrapper-hell.png",alt:'The React DevTools show a series of nested components that transfer data, but do not render anything to the UI. This is considered "wrapper hell".'})),(0,a.kt)("p",null,"All of the components pictured are wrapper components that do not actually render anything in the page, but instead transfer data. The React docs offer a helpful description of what we are seeing:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you look at a typical React application in React DevTools, you will likely find a \u201cwrapper hell\u201d of components surrounded by layers of providers, consumers, higher-order components, render props, and other abstractions. ")),(0,a.kt)("p",null,'The problem with "wrapper hell" is that it is hard to track the flow of data, which makes maintaining and debugging an application that much harder. '),(0,a.kt)("p",null,"With hooks, we can extract data that we want to reuse in a function and import it directly into the components where we need to use that data. What's more, since hooks are just JavaScript functions, we aren't adding a component to our app's hierarchy of components when we share data via hooks."),(0,a.kt)("p",null,"And with that, we covered the very basics of why hooks are so awesome and beloved by the React community. You'll likely still have questions, like what is \"render props\"? For now, we'll leave that advanced topic to further exploration, so we can focus on hooks. "),(0,a.kt)("p",null,"Next up, we'll return to our Help Queue application and refactor ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," to be a function component that uses hooks. "),(0,a.kt)("h2",{id:"theres-much-more-to-explore"},"There's Much More to Explore!"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"As always, there's much more to explore about hooks. To see a list of all built-in React hooks, check out this documentation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-reference.html"},"Hooks API Reference"))),(0,a.kt)("p",null,"To learn more about hooks in general, check out this documentation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-faq.html"},"Hooks FAQ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-intro.html"},"Introducing Hooks")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-overview.html"},"Hooks at a Glance"))),(0,a.kt)("p",null,"To review React main concepts, read this guide:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/thinking-in-react.html"},"Thinking in React"))),(0,a.kt)("p",null,'We suggest that you read about context, render props, and higher-order components later. If you are interested in finding more about these tools, look in the "Advanced Guides" section of the React docs.'))}p.isMDXComponent=!0}}]);