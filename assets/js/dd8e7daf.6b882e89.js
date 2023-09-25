"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[28114],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},21174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={title:"The useReducer Hook",id:"the_usereducer_hook",slug:"the_usereducer_hook",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0d_the_useReducer_hook.md"},i=void 0,s={unversionedId:"react_part_time_evening/react-with-apis/the_usereducer_hook",id:"react_part_time_evening/react-with-apis/the_usereducer_hook",title:"The useReducer Hook",description:"The first thing to know about the useReducer() hook is that it is an alternative to the useState() hook. That means useReducer() is a way to initialize and manage state in a function component. This also means that anything we can do with the useReducer() hook, we can also do with the useState() hook. So, when would we use useReducer()? Before getting into the use cases and benefits of the useReducer() hook, let's first get to know how to use it.",source:"@site/docs/react_part_time_evening/10_react-with-apis/0d_the_useReducer_hook.md",sourceDirName:"react_part_time_evening/10_react-with-apis",slug:"/react_part_time_evening/react-with-apis/the_usereducer_hook",permalink:"/react_part_time_evening/react-with-apis/the_usereducer_hook",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"The useReducer Hook",id:"the_usereducer_hook",slug:"the_usereducer_hook",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0d_the_useReducer_hook.md"},sidebar:"react_part_time_evening",previous:{title:"NY Times API: Making an API Call with fetch and useState",permalink:"/react_part_time_evening/react-with-apis/ny_times_api_making_an_api_call_with_fetch_and_usestate"},next:{title:"NY Times API: Writing and Testing our Reducer and Actions",permalink:"/react_part_time_evening/react-with-apis/ny_times_api_writing_and_testing_our_reducer_and_actions"}},l={},u=[{value:"The <code>useReducer()</code> Hook",id:"the-usereducer-hook",level:2},{value:"Setting Up our Practice Project",id:"setting-up-our-practice-project",level:3},{value:"Creating Initial State and a Reducer Function",id:"creating-initial-state-and-a-reducer-function",level:3},{value:"Invoking the <code>useReducer()</code> Hook",id:"invoking-the-usereducer-hook",level:3},{value:"Best Practices",id:"best-practices",level:3},{value:"When to Use <code>useReducer()</code>",id:"when-to-use-usereducer",level:3},{value:"Benefits and Features of <code>useReducer()</code>",id:"benefits-and-features-of-usereducer",level:3},{value:"Next Steps",id:"next-steps",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The first thing to know about the ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook is that it is an alternative to the ",(0,o.kt)("inlineCode",{parentName:"p"},"useState()")," hook. That means ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," is a way to initialize and manage state in a function component. This also means that anything we can do with the ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook, we can also do with the ",(0,o.kt)("inlineCode",{parentName:"p"},"useState()")," hook. So, when would we use ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()"),"? Before getting into the use cases and benefits of the ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook, let's first get to know how to use it."),(0,o.kt)("h2",{id:"the-usereducer-hook"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"useReducer()")," Hook"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"As its name implies, the ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()"),' hook makes use of a "reducer" function that handles evaluating and transforming state. A ',(0,o.kt)("strong",{parentName:"p"},"reducer function")," is just a plain JavaScript function that follows a specific convention in how it is set up:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A reducer takes in two arguments: the current state and an ",(0,o.kt)("strong",{parentName:"li"},"action")," that describes how the state should change. An action contains a ",(0,o.kt)("strong",{parentName:"li"},"type")," property that contains the name of the action and it can optionally contain data to add to state. "),(0,o.kt)("li",{parentName:"ul"},"A reducer uses ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch"},"a switch statement")," to handle different action types. Each action type will lead to a different way of updating state. "),(0,o.kt)("li",{parentName:"ul"},"A reducer then returns the new state. ")),(0,o.kt)("p",null,"Also note that reducer functions are pure functions. A pure function is a function that meets the following criteria:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Always returns an output"),(0,o.kt)("li",{parentName:"ul"},"Has no side effects"),(0,o.kt)("li",{parentName:"ul"},"Does not rely on external variables or state"),(0,o.kt)("li",{parentName:"ul"},"Always returns the same answer for a given input")),(0,o.kt)("p",null,"Here's a reducer that we created for the Help Queue project during the React with Redux course section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const reducer = (state = false, action) => {\n  switch (action.type) {\n    case 'TOGGLE_FORM':\n      return !state;\n    default:\n      return state;\n  }\n};\n")),(0,o.kt)("p",null,"We could use this same reducer with the ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," instead!"),(0,o.kt)("p",null,"Also, if we want to update our state with the ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook we would need to dispatch an action to our reducer, like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"dispatch({type: 'TOGGLE_FORM'})\n")),(0,o.kt)("p",null,"As we can see, this process using reducers and actions is almost exactly the same as the process we follow when we use Redux. ",(0,o.kt)("strong",{parentName:"p"},"However, the ",(0,o.kt)("inlineCode",{parentName:"strong"},"useReducer()")," hook is not from Redux and it does not create or access a global store like Redux does! It simply shares some of its conventions and the names for its tools.")," "),(0,o.kt)("p",null,"With that brief introduction in mind, let's implement a ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook. For this next practice, we'll revisit the ",(0,o.kt)("inlineCode",{parentName:"p"},"intro-to-hooks")," application that we built ",(0,o.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/lessons/introduction-to-hooks-with-the-usestate-hook"},"when we first learned how to use the ",(0,o.kt)("inlineCode",{parentName:"a"},"useState()")," and ",(0,o.kt)("inlineCode",{parentName:"a"},"useEffect()")," hooks"),", and we'll refactor the ",(0,o.kt)("inlineCode",{parentName:"p"},"Counter")," component we created to use a ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook."),(0,o.kt)("h3",{id:"setting-up-our-practice-project"},"Setting Up our Practice Project"),(0,o.kt)("p",null,"If you have an ",(0,o.kt)("inlineCode",{parentName:"p"},"intro-to-hooks")," project saved to a remote GitHub repo, go ahead and clone down that project now. "),(0,o.kt)("p",null,"If you don't have an ",(0,o.kt)("inlineCode",{parentName:"p"},"intro-to-hooks")," project, you can bootstrap a new practice project with create-react-app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ npx create-react-app intro-to-usereducer \n")),(0,o.kt)("p",null,"Then within the newly created ",(0,o.kt)("inlineCode",{parentName:"p"},"intro-to-usereducer")," project folder, follow these steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a new file called ",(0,o.kt)("inlineCode",{parentName:"li"},"Counter.js")," in the ",(0,o.kt)("inlineCode",{parentName:"li"},"src")," folder."),(0,o.kt)("li",{parentName:"ul"},"Create and export an empty ",(0,o.kt)("inlineCode",{parentName:"li"},"Counter")," function component inside of ",(0,o.kt)("inlineCode",{parentName:"li"},"Counter.js"),"."),(0,o.kt)("li",{parentName:"ul"},"Import ",(0,o.kt)("inlineCode",{parentName:"li"},"Counter")," into ",(0,o.kt)("inlineCode",{parentName:"li"},"App.js")," and add it to the ",(0,o.kt)("inlineCode",{parentName:"li"},"return")," statement. ")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," component should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import './App.css';\nimport Counter from './Counter';\n\nfunction App() {\n  return (\n    <div className=\"App\">\n      <Counter />\n    </div>\n  );\n}\n\nexport default App;\n")),(0,o.kt)("p",null,"And here's the logic for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Counter")," component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useState, useEffect } from 'react';\n\nfunction Counter() {\n  const [counter, setCounter] = useState(0);\n  const [hidden, setHidden] = useState(false);\n\n  useEffect(() => {\n    document.title = counter;\n  }, [counter]);\n\n  return (\n    <React.Fragment>\n      {hidden ? <h1>Count Hidden</h1> : <h1>{counter}</h1>}\n      <button onClick={() => setCounter(counter + 1)}>Count!</button>\n      <button onClick={() => setHidden(!hidden)}>Hide/Show</button>\n    </React.Fragment>\n  );\n}\n\nexport default Counter;\n")),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"Counter")," component we have a button to show and hide the counter, as well as a button to increment the count by 1 on each click. We also have a ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect()")," hook that updates the document's ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," attribute with the value of the counter, every time the counter changes in value. "),(0,o.kt)("h3",{id:"creating-initial-state-and-a-reducer-function"},"Creating Initial State and a Reducer Function"),(0,o.kt)("p",null,"In this refactor, we're going to turn the ",(0,o.kt)("inlineCode",{parentName:"p"},"counter")," state variable into state managed by a ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook. We'll start this refactor by importing ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer")," from React at the top of our file:"),(0,o.kt)("div",{class:"filename"},"src/Counter.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useState, useEffect, useReducer } from 'react';\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The ",(0,o.kt)("inlineCode",{parentName:"strong"},"useReducer()")," hook takes two arguments"),": "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A reducer function."),(0,o.kt)("li",{parentName:"ul"},"An object to define initial state. ")),(0,o.kt)("p",null,"Let's create both of those next. We'll create these outside of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Counter")," function component:"),(0,o.kt)("div",{class:"filename"},"src/Counter.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useState, useEffect, useReducer } from 'react';\n\nconst initialState = {\n  counter: 0\n}\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return {\n        counter: state.counter + 1\n      };\n    default:\n      throw new Error(`There is no action matching ${action.type}.`);\n  }\n}\n\nfunction Counter() {\n  ...\n}\n\nexport default Counter;\n")),(0,o.kt)("p",null,"First notice that we've created our initial state and reducer outside of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Counter")," function component, but still within ",(0,o.kt)("inlineCode",{parentName:"p"},"Counter.js"),". This organization is common practice, however, we can also initialize these variables within the ",(0,o.kt)("inlineCode",{parentName:"p"},"Counter")," function component, or in an entirely separate file. There's no right answer as to what's the best organization practice, and it usually depends on what's best for testing and minimizing the complexity of components."),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"initialState")," variable, we've created an object with one key, ",(0,o.kt)("inlineCode",{parentName:"p"},"counter"),", which starts with a value of ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),". This is the state that we'll use when we initialize our ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook."),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"reducer()")," function declaration, we've followed the convention of reducer functions by doing the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Taking in an argument for state and an argument for an action."),(0,o.kt)("li",{parentName:"ul"},"Setting up a switch statement based on the ",(0,o.kt)("inlineCode",{parentName:"li"},"action")," object's ",(0,o.kt)("inlineCode",{parentName:"li"},"type")," property. Our switch statement has:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("inlineCode",{parentName:"li"},"'increment'")," case that increments the ",(0,o.kt)("inlineCode",{parentName:"li"},"counter")," state variable by ",(0,o.kt)("inlineCode",{parentName:"li"},"1")),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"default")," case that throws an error if the ",(0,o.kt)("inlineCode",{parentName:"li"},"action.type")," property does not match any of the available reducer action types.")))),(0,o.kt)("p",null,"Previously we would return the state in the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," case, and this is acceptable. However, it's much better to use the default switch case for error handling. Why? When we throw errors, we fail loudly, and this ultimately makes it easier to debug the issue."),(0,o.kt)("p",null,"There's one difference to note between Redux reducer functions and those used by the ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook: ",(0,o.kt)("strong",{parentName:"p"},"initial state is not initialized by ",(0,o.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters"},"a default parameter"))," in the reducer function. Instead, initial state is passed into the ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook as an argument. We'll see what this looks like in just a moment."),(0,o.kt)("p",null,"A default parameter value would look like ",(0,o.kt)("inlineCode",{parentName:"p"},"state = {counter: 0}")," in the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function reducer(state = {counter: 0}, action) {\n  ...\n}\n")),(0,o.kt)("h3",{id:"invoking-the-usereducer-hook"},"Invoking the ",(0,o.kt)("inlineCode",{parentName:"h3"},"useReducer()")," Hook"),(0,o.kt)("p",null,"Now we're ready to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook. "),(0,o.kt)("p",null,"Here's how we'll update the ",(0,o.kt)("inlineCode",{parentName:"p"},"Counter")," component:"),(0,o.kt)("div",{class:"filename"},"src/Counter.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useState, useEffect, useReducer } from 'react';\n\nconst initialState = {\n  counter: 0\n}\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return {\n        counter: state.counter + 1\n      };\n    default:\n      throw new Error(`There is no action matching ${action.type}.`);\n  }\n}\n\nfunction Counter() {\n  // Here we've replaced the useState hook originally used for counter state.\n  const [state, dispatch] = useReducer(reducer, initialState);\n  const [hidden, setHidden] = useState(false);\n\n  useEffect(() => {\n    // Now we need to access state.counter to get the counter value.\n    document.title = state.counter;\n  }, [state.counter]);\n\n  return (\n    <React.Fragment>\n      {/* Same here: we need to access state.counter to get the counter value. */}\n      {hidden ? <h1>Count Hidden</h1> : <h1>{state.counter}</h1>}\n      {/* Now we use dispatch() to send an action to our reducer to update state. */}\n      <button onClick={() => dispatch({type: 'increment'})}>Count!</button>\n      <button onClick={() => setHidden(!hidden)}>Hide/Show</button>\n    </React.Fragment>\n  );\n}\n\nexport default Counter;\n")),(0,o.kt)("p",null,"There are a lot of updates here, so let's look at them one by one. First, let's look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook itself:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const [state, dispatch] = useReducer(reducer, initialState);\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook takes two arguments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A reducer function"),(0,o.kt)("li",{parentName:"ul"},"Initial state")),(0,o.kt)("p",null,"Just like with the ",(0,o.kt)("inlineCode",{parentName:"p"},"useState()")," hook, he ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook returns two variables that we destructure from an array:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The state. We've called this variable ",(0,o.kt)("inlineCode",{parentName:"li"},"state"),", though we could have called this ",(0,o.kt)("inlineCode",{parentName:"li"},"counterState")," instead."),(0,o.kt)("li",{parentName:"ul"},"A function to update state. We've called this variable ",(0,o.kt)("inlineCode",{parentName:"li"},"dispatch"),", though we could have called this ",(0,o.kt)("inlineCode",{parentName:"li"},"dispatchCounter")," instead.")),(0,o.kt)("p",null,"The remaining updates that we make to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Counter")," component has to do with using the ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," tools that are returned from the ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook. "),(0,o.kt)("p",null,"First, if we want to access the ",(0,o.kt)("inlineCode",{parentName:"p"},"counter")," state, we now need to do so through by accessing the ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," object first:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"state.counter\n")),(0,o.kt)("p",null,"Second, if we want to update the counter state, we need to create an action object with a ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," property that matches the name of a case in our reducer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"dispatch({type: 'increment'})\n")),(0,o.kt)("p",null,"And with that we've covered the basics of using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook! However, there's still plenty to cover as to best practices and use cases."),(0,o.kt)("h3",{id:"best-practices"},"Best Practices"),(0,o.kt)("p",null,"Other than universal best practices like using descriptive variable names, the ",(0,o.kt)("inlineCode",{parentName:"p"},"useState()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hooks share a core best practice:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Practice separation of concerns.")," "),(0,o.kt)("p",null,"You should always use multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hooks to manage multiple and different state values. For example, you could make the argument that the ",(0,o.kt)("inlineCode",{parentName:"p"},"hidden")," state variable should be added to our new ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()"),' hook so that all of the counter related actions are in one place. But is that practicing good separation of concerns? By "good separation of concerns" we are asking the following: does hiding and showing a part of the UI have to do with managing the counter\'s value? I would say that it does not. '),(0,o.kt)("p",null,"If you are ever on the fence about separation of concerns, consider real refactors that you may want to make to your app and its state. For example, what if you no longer want the show/hide feature to be in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Counter"),", but instead  use it in ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js")," to handle showing and hiding both the ",(0,o.kt)("inlineCode",{parentName:"p"},"Timer")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Counter")," components? While making this change is trivial in a small application, it stands to reason that managing the ",(0,o.kt)("inlineCode",{parentName:"p"},"hidden")," state separately from the ",(0,o.kt)("inlineCode",{parentName:"p"},"counter")," state would make this refactor an easier process to complete."),(0,o.kt)("p",null,"However, let's say we wanted to refactor our app to include the functionality to decrement the ",(0,o.kt)("inlineCode",{parentName:"p"},"counter")," and to reset the ",(0,o.kt)("inlineCode",{parentName:"p"},"counter"),". In this case, we would expand our existing ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," to manage this new functionality as well, since it all directly relates to the ",(0,o.kt)("inlineCode",{parentName:"p"},"counter")," state."),(0,o.kt)("h3",{id:"when-to-use-usereducer"},"When to Use ",(0,o.kt)("inlineCode",{parentName:"h3"},"useReducer()")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#usereducer"},"The React docs")," state that you should generally use ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," in two cases:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"When you have complex state that has multiple sub-values."),(0,o.kt)("li",{parentName:"ol"},"When your state update depends on the previous state value.")),(0,o.kt)("p",null,"That said, we don't have to! We can manage complex state and access previous state using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useState()")," hook, as well."),(0,o.kt)("p",null,"It's recommended to use ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," to manage complex state because writing a reducer inherently involves organizing state updates into named actions, which makes it easier to read and reason about. Also, we can create complex objects and make updates to deeply nested properties in the reducer switch cases, which is not as easy to create as an argument to an update function from the ",(0,o.kt)("inlineCode",{parentName:"p"},"useState()")," hook."),(0,o.kt)("p",null,"Similarly, it's recommended to use ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," to access the previous state value, because that's what the ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," variable represents in a reducer, and it can be easier to work with as a result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// The state variable is always equal to the previous state.\nfunction reducer(state, action) {\n  ...\n}\n")),(0,o.kt)("p",null,"Whereas with the ",(0,o.kt)("inlineCode",{parentName:"p"},"useState()")," hook, we'd have to pass in a function to access the previous state, just like in the example below. Again, accessing the previous state isn't particularly harder to do with ",(0,o.kt)("inlineCode",{parentName:"p"},"useState()"),", it's just a bit easier with ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const [counter, setCounter] = useState(0);\n// How to access previous state in a state update:\nsetCounter(prevState => preState + 1);\n")),(0,o.kt)("p",null,"There's other reasons you may end up using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"useState()"),". For one, you might choose ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," because you feel more comfortable using it. That is completely acceptable. Similarly, your development team or company may prefer to use ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," and the conventions it dictates for code structure. As a baseline, you should be familiar with the ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook and be able to implement it in your code, whether or not you use it regularly."),(0,o.kt)("h3",{id:"benefits-and-features-of-usereducer"},"Benefits and Features of ",(0,o.kt)("inlineCode",{parentName:"h3"},"useReducer()")),(0,o.kt)("p",null,"There are other benefits and features that can also influence your decision on whether to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reducers are easier to test."),(0,o.kt)("li",{parentName:"ul"},"You can incorporate programing patterns like action creators and action constants with ",(0,o.kt)("inlineCode",{parentName:"li"},"useReducer()")," that make our code less buggy."),(0,o.kt)("li",{parentName:"ul"},"You can better connect error handling to your state by setting up the ",(0,o.kt)("inlineCode",{parentName:"li"},"default")," case in a reducer to throw or return an error."),(0,o.kt)("li",{parentName:"ul"},"If you declare the reducer for the ",(0,o.kt)("inlineCode",{parentName:"li"},"useReducer()")," hook within the component that uses it (not just in the same file, but within the component), the reducer function can read the component's props. Also, every time the component is re-rendered, the reducer function will be newly created and access the props again; this means that the reducer will always have access to updated props. The React docs doesn't go into this possibility at all, so if you are interested in learning more, you should do some research."),(0,o.kt)("li",{parentName:"ul"},"Instead of passing down callback functions to child components so that they can trigger state updates, you can instead pass down the ",(0,o.kt)("inlineCode",{parentName:"li"},"dispatch()")," function. This can be easier to manage, since you are only passing in one ",(0,o.kt)("inlineCode",{parentName:"li"},"dispatch()")," function, instead of many different callback functions. This can also optimize performance by removing extra callback functions. Why? ",(0,o.kt)("inlineCode",{parentName:"li"},"dispatch()")," is created once, while these callback functions are newly created every time the component re-renders. Less functions equals less memory usage which equals improved performance.")),(0,o.kt)("h3",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"To learn more about the ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook, visit ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#usereducer"},"the React docs"),". In the docs, you'll can learn more about:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-reference.html#specifying-the-initial-state"},"How to specify the initial state.")," This reiterates what we learned in this lesson."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-reference.html#bailing-out-of-a-dispatch"},"React bails out of a dispatch and does not re-render components when state does not change.")," We haven't covered this topic explicitly, and this is true of the ",(0,o.kt)("inlineCode",{parentName:"li"},"useState()")," hook as well."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-reference.html#lazy-initialization"},"How to create initial state lazily.")," This is a brand new topic.")),(0,o.kt)("p",null,"Up next, we're going to refactor our New York Times API call app to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook. If you want to practice more with the ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer()")," hook before moving on, try adding the following functionality to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Counter")," component:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A button that decrements the count by 1."),(0,o.kt)("li",{parentName:"ul"},"A button that resets the count to 0.")))}d.isMDXComponent=!0}}]);