"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[22915],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,d=u["".concat(l,".").concat(f)]||u[f]||h[f]||i;return n?a.createElement(d,r(r({ref:t},p),{},{components:n})):a.createElement(d,r({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},60275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={title:"3. Running Side Effects with the useEffect Hook",id:"running_side_effects_with_the_useeffect_hook",slug:"running_side_effects_with_the_useeffect_hook",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/8_react-with-nosql/0c_intro_to_useEffect_hook.md"},r=void 0,s={unversionedId:"react_part_time_evening/react-with-nosql/running_side_effects_with_the_useeffect_hook",id:"react_part_time_evening/react-with-nosql/running_side_effects_with_the_useeffect_hook",title:"3. Running Side Effects with the useEffect Hook",description:"As we learned in the last lesson, hooks allow us to use React state and lifecycle features in function components. Historically, these features were only available in class components. Now that we know how to use state in our function components with the useState hook, let's learn how to perform side effects with the useEffect hook.",source:"@site/docs/react_part_time_evening/8_react-with-nosql/0c_intro_to_useEffect_hook.md",sourceDirName:"react_part_time_evening/8_react-with-nosql",slug:"/react_part_time_evening/react-with-nosql/running_side_effects_with_the_useeffect_hook",permalink:"/lhtp/react_part_time_evening/react-with-nosql/running_side_effects_with_the_useeffect_hook",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"3. Running Side Effects with the useEffect Hook",id:"running_side_effects_with_the_useeffect_hook",slug:"running_side_effects_with_the_useeffect_hook",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/8_react-with-nosql/0c_intro_to_useEffect_hook.md"},sidebar:"react_part_time_evening",previous:{title:"2. Introduction to Hooks with the useState Hook",permalink:"/lhtp/react_part_time_evening/react-with-nosql/introduction_to_hooks_with_the_usestate_hook"},next:{title:"4. The Rules of Hooks, Custom Hooks, and Why Hooks Are Awesome",permalink:"/lhtp/react_part_time_evening/react-with-nosql/the_rules_of_hooks_custom_hooks_and_why_hooks_are_awesome"}},l={},c=[{value:"<code>useEffect</code>",id:"useeffect",level:2},{value:"Skipping Effects",id:"skipping-effects",level:3},{value:"Only Running the Effect Once",id:"only-running-the-effect-once",level:3},{value:"Performing Clean-Up Tasks",id:"performing-clean-up-tasks",level:3},{value:"When a Dependency Changes too Often",id:"when-a-dependency-changes-too-often",level:3},{value:"Resources and Next Steps",id:"resources-and-next-steps",level:2}],p={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As we learned in the last lesson, hooks allow us to use React state and lifecycle features in function components. Historically, these features were only available in class components. Now that we know how to use state in our function components with the ",(0,o.kt)("inlineCode",{parentName:"p"},"useState")," hook, let's learn how to perform side effects with the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook. "),(0,o.kt)("p",null,"Keep in mind that a ",(0,o.kt)("strong",{parentName:"p"},"side effect")," is not a React-specific term; instead, it's a way of describing functions in general. A function has side effects when it changes something outside of its own scope. Often this looks like making a network request to an API, but this also includes changing the value of a variable that exists outside of the scope of the function. Another good example of a side effect is updating a value in the DOM. "),(0,o.kt)("p",null,"As we know, when a function does not have side effects, we call it a ",(0,o.kt)("strong",{parentName:"p"},"pure function"),", where for any given input, you can always expect the same output. These functions are predictable, easy to test, simple to reason about, and easy to maintain and refactor."),(0,o.kt)("p",null,"With that review, let's dive into what the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook can do for us! For the examples in this lesson, we'll add to our ",(0,o.kt)("inlineCode",{parentName:"p"},"intro-to-hooks")," application, by expanding the functionality of our ",(0,o.kt)("inlineCode",{parentName:"p"},"Counter")," component and creating a brand new ",(0,o.kt)("inlineCode",{parentName:"p"},"Timer")," component. Later on when we connect our Help Queue application to a NoSQL database via Google's Firebase, we'll use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook to fetch data for us."),(0,o.kt)("h2",{id:"useeffect"},(0,o.kt)("inlineCode",{parentName:"h2"},"useEffect")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We should use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook when we want to run code in any of the following cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"After our component is first rendered. This corresponds to the ",(0,o.kt)("inlineCode",{parentName:"li"},"componentDidMount")," lifecycle method."),(0,o.kt)("li",{parentName:"ul"},"When a state variable in our component changes. This corresponds to looking at the ",(0,o.kt)("inlineCode",{parentName:"li"},"prevState")," variable available in the ",(0,o.kt)("inlineCode",{parentName:"li"},"componentDidUpdate")," lifecycle method to determine if state has changed, and to only make an update if it has."),(0,o.kt)("li",{parentName:"ul"},"After every re-render of our component. This corresponds to the ",(0,o.kt)("inlineCode",{parentName:"li"},"componentDidUpdate")," lifecycle method.")),(0,o.kt)("p",null,"The last case is the default behavior for the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook. Let's take a look. "),(0,o.kt)("p",null,"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"Counter")," component, and add this code:"),(0,o.kt)("div",{class:"filename"},"src/Counter.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useState, useEffect } from 'react';\n\nfunction Counter() {\n  const [counter, setCounter] = useState(0);\n  const [hidden, setHidden] = useState(false);\n\n  useEffect(() => {\n    console.log(\"effect!\");\n  });\n\n  return (\n    <React.Fragment>\n      {hidden ? <h1>Count Hidden</h1> : <h1>{counter}</h1>}\n      <button onClick={() => setCounter(counter + 1)}>Count!</button>\n      <button onClick={() => setHidden(!hidden)}>Hide/Show</button>\n    </React.Fragment>\n  );\n}\n\nexport default Counter;\n")),(0,o.kt)("p",null,"First, we import the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook at the top of the file, and then we call it within our ",(0,o.kt)("inlineCode",{parentName:"p"},"Counter")," component. There's a couple things to note about the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useEffect")," is first run after the first render of the component."),(0,o.kt)("li",{parentName:"ul"},"Without further configuration, ",(0,o.kt)("inlineCode",{parentName:"li"},"useEffect")," runs after every re-render of the component."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useEffect"),' takes a callback function as an argument, which acts as our "effect". This function is called every time the ',(0,o.kt)("inlineCode",{parentName:"li"},"useEffect")," hook runs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useEffect")," doesn't return anything.")),(0,o.kt)("p",null,"If we run our app and click on our ",(0,o.kt)("em",{parentName:"p"},"Count!")," and ",(0,o.kt)("em",{parentName:"p"},"Hide/Show")," buttons, we'll see our ",(0,o.kt)("inlineCode",{parentName:"p"},'"effect!"')," message logged each time. That's because every time we use ",(0,o.kt)("inlineCode",{parentName:"p"},"setCounter()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"setHidden()")," to update a state variable, our component re-renders to display the new state value, and every time our component re-renders, the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook calls the function we pass into it."),(0,o.kt)("p",null,"That's the basics of the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook. As noted earlier, the default configuration of the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook matches the functionality of two class component lifecycle methods: ",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidMount"),", since ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," runs after the first render, and ",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidUpdate"),", since ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," runs after every re-render of our component. "),(0,o.kt)("p",null,"Let's try adding something other than a ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log()"),". Update your ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook to perform the following side effect:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'  useEffect(() => {\n    console.log("effect!");\n    document.title = counter;\n  });\n')),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"document.title = counter"),", we're updating the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<title>")," tags of our HTML to the current value of our counter. Now if we click on our ",(0,o.kt)("em",{parentName:"p"},"Count!")," and ",(0,o.kt)("em",{parentName:"p"},"Hide/Show")," buttons, we'll see our ",(0,o.kt)("inlineCode",{parentName:"p"},'"effect!"')," message logged each time and the title will match the current value of our ",(0,o.kt)("inlineCode",{parentName:"p"},"counter"),". "),(0,o.kt)("p",null,"It's important to note that the function we pass as an argument into ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," (a callback function) is newly created each time ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," is run. This is the argument we are passing into ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'() => {\n  console.log("effect!");\n  document.title = counter;\n}\n')),(0,o.kt)("p",null,"This allows the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook to access the most up-to-date value of our ",(0,o.kt)("inlineCode",{parentName:"p"},"counter")," state variable."),(0,o.kt)("h3",{id:"skipping-effects"},"Skipping Effects"),(0,o.kt)("p",null,"As is, we can optimize our code in the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook. How? Well, we really only need to update the title of our HTML document to the new counter value when the value of our counter changes. Right now, it will get updated every re-render, which is caused by any change in state, including the showing and hiding of our counter. "),(0,o.kt)("p",null,"React developers have a solution for this, and this is what it looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'  useEffect(() => {\n    console.log("effect!");\n    document.title = counter;\n  }, [counter]);\n')),(0,o.kt)("p",null,"Notice that we've added a second argument to our ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook: ",(0,o.kt)("inlineCode",{parentName:"p"},"[counter]"),". This second argument is called ",(0,o.kt)("strong",{parentName:"p"},"a dependency array"),", and it can contain one or more state variables or props within it. When we add a dependency array to our ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook, we're saying that whether our effect should run depends on whether the value of the state variables in our dependency array have changed. "),(0,o.kt)("p",null,"When we add ",(0,o.kt)("inlineCode",{parentName:"p"},"counter")," as our dependency, we're specifically directing ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," to run  the effect only if the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"counter")," changes. If ",(0,o.kt)("inlineCode",{parentName:"p"},"counter")," does not change, the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook will skip the effect."),(0,o.kt)("p",null,"We can test this out. Now if we run our ",(0,o.kt)("inlineCode",{parentName:"p"},"intro-to-hooks")," application and click on our ",(0,o.kt)("em",{parentName:"p"},"Count!")," and ",(0,o.kt)("em",{parentName:"p"},"Hide/Show")," buttons, we'll only see our ",(0,o.kt)("inlineCode",{parentName:"p"},'"effect!"')," message logged when we click on the ",(0,o.kt)("em",{parentName:"p"},"Count!")," button. "),(0,o.kt)("p",null,"As noted above, adding a dependency array to the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook performs the same functionality as comparing ",(0,o.kt)("inlineCode",{parentName:"p"},"prevState")," with current state in a ",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidUpdate")," lifecycle method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"componentDidUpdate(prevProps, prevState) {\n  if (prevState.counter !== this.state.counter) {\n    document.title = counter;\n  }\n}\n")),(0,o.kt)("h3",{id:"only-running-the-effect-once"},"Only Running the Effect Once"),(0,o.kt)("p",null,"You can tell the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook to run its effect once by passing in an empty dependency array:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'  useEffect(() => {\n    console.log("effect!");\n    document.title = counter;\n  }, []);\n')),(0,o.kt)("p",null,"In this case, we're saying that our effect does not depend on the change of any state variables or props in our component, and it should only run once, after the first render."),(0,o.kt)("p",null,"We won't use this in our ",(0,o.kt)("inlineCode",{parentName:"p"},"intro-to-hooks")," application now, but you can try it out if you like. Later on we'll use an empty dependency array to set up a subscription to our NoSQL database (provided by Firebase) once, after the first render of our component."),(0,o.kt)("h3",{id:"performing-clean-up-tasks"},"Performing Clean-Up Tasks"),(0,o.kt)("p",null,"Let's look at one last example with the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook to understand how we can perform clean up tasks. In this example, we'll create a timer that counts up from 0 every second. We'll also be able to pause the timer as well!"),(0,o.kt)("p",null,"First, let's update our ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," component in the ",(0,o.kt)("inlineCode",{parentName:"p"},"intro-to-hooks")," application to import and render a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Timer")," component. Here's the code:"),(0,o.kt)("div",{class:"filename"},"src/App.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import './App.css';\nimport Counter from './Counter';\nimport Timer from './Timer';\n\nfunction App() {\n  return (\n    <div className=\"App\">\n      <Counter />\n      <Timer />\n    </div>\n  );\n}\n\nexport default App;\n")),(0,o.kt)("p",null,"Next, let's create a new file called ",(0,o.kt)("inlineCode",{parentName:"p"},"Timer.js"),", also in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," folder. Here's the code that we'll add inside of ",(0,o.kt)("inlineCode",{parentName:"p"},"Timer.js")," to create the new ",(0,o.kt)("inlineCode",{parentName:"p"},"Timer")," component:"),(0,o.kt)("div",{class:"filename"},"src/Timer.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useState, useEffect } from 'react';\n\nfunction Timer() {\n  const [isActive, setIsActive] = useState(false);\n  const [timer, setTimer] = useState(0);\n\n  useEffect(() => {\n    let interval;\n\n    if (isActive) {\n      interval = setInterval(() => {\n        setTimer(timerState => timerState + 1)\n      }, 1000\n    )}\n\n    return () => clearInterval(interval);\n  }, [isActive]);\n\n  return (\n    <React.Fragment>\n      {isActive ? <h1>{timer}</h1> : <h1>Timer Stopped</h1>}\n      <button onClick={() => setIsActive(!isActive)}>Start/Stop</button>\n    </React.Fragment>\n  );\n}\n\nexport default Timer;\n")),(0,o.kt)("p",null,"We're doing quite a few things in our new ",(0,o.kt)("inlineCode",{parentName:"p"},"Timer")," component, some of which should look familiar: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We're using two state variables, ",(0,o.kt)("inlineCode",{parentName:"li"},"timer")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"isActive"),", to track the value of our timer and whether it is active or not. "),(0,o.kt)("li",{parentName:"ul"},"We include a button to start and stop the timer."),(0,o.kt)("li",{parentName:"ul"},"We use a ",(0,o.kt)("inlineCode",{parentName:"li"},"useEffect")," hook to set up an interval when our timer is active, and to remove it when our timer is stopped.")),(0,o.kt)("p",null,"Let's take a closer look at our ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  useEffect(() => {\n    let interval;\n\n    if (isActive) {\n      interval = setInterval(() => {\n        setTimer(timerState => timerState + 1)\n      }, 1000\n    )}\n\n    return () => clearInterval(interval);\n  }, [isActive]);\n")),(0,o.kt)("p",null,"Notice that we have one dependency that we've passed into the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," dependency array: ",(0,o.kt)("inlineCode",{parentName:"p"},"[isActive]"),". That's because we want our effect to run only when the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"isActive")," changes. "),(0,o.kt)("p",null,"When we first set up the interval with JavaScript's ",(0,o.kt)("inlineCode",{parentName:"p"},"setInterval")," function, we specify that we only want to create a new interval if the timer is started, or in code, if ",(0,o.kt)("inlineCode",{parentName:"p"},"isActive")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". The interval itself specifies that we should call the ",(0,o.kt)("inlineCode",{parentName:"p"},"setTimer")," function to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"timer")," state every second. "),(0,o.kt)("p",null,"But how do we stop the timer? That's where the optional ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," clean up mechanism comes in handy! To use this mechanism, we simply need to return a function from the callback function we pass into the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  useEffect(() => {\n    ...\n\n    return () => clearInterval(interval);\n  }, [isActive]);\n")),(0,o.kt)("p",null,"Here we return an anonymous arrow function that makes use of an implicit return. Note that we can rewrite this return statement as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  useEffect(() => {\n    ...\n\n    return function() {\n      clearInterval(interval);\n    }\n  }, [isActive]);\n")),(0,o.kt)("p",null,"And what does this function do? It calls JavaScript's built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"clearInterval")," function to clear the interval we created. "),(0,o.kt)("p",null,"When we return a function from a ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook, it will run this function when our component unmounts to clean up our effects. However, since React runs effects every re-render (unless we specify otherwise), React also performs this clean up before re-running the effect on a subsequent render.  "),(0,o.kt)("p",null,"In the case of our ",(0,o.kt)("inlineCode",{parentName:"p"},"Timer")," component, we've specified that our effect should only run when the ",(0,o.kt)("inlineCode",{parentName:"p"},"isActive")," state variable changes. So, anytime ",(0,o.kt)("inlineCode",{parentName:"p"},"isActive")," changes our interval will be cleared and then re-created only if ",(0,o.kt)("inlineCode",{parentName:"p"},"isActive")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h3",{id:"when-a-dependency-changes-too-often"},"When a Dependency Changes too Often"),(0,o.kt)("p",null,"You may have noticed something else that's new in the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook that we've created for our ",(0,o.kt)("inlineCode",{parentName:"p"},"Timer")," component. Notice that when we create the interval, we're passing in a function when we call ",(0,o.kt)("inlineCode",{parentName:"p"},"setTimer")," to update the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"timer")," state: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  useEffect(() => {\n    let interval;\n\n    if (isActive) {\n      interval = setInterval(() => {\n        // Notice the argument we pass into setTimer\n        setTimer(timerState => timerState + 1)\n      }, 1000\n    )}\n\n    return () => clearInterval(interval);\n  }, [isActive]);\n")),(0,o.kt)("p",null,"This is in contrast to what we've done up until now, which is to directly pass in a new value for the state variable. For our ",(0,o.kt)("inlineCode",{parentName:"p"},"timer")," state variable, this would look like ",(0,o.kt)("inlineCode",{parentName:"p"},"setTimer(timer + 1)"),". "),(0,o.kt)("p",null,"Note that the arrow function makes use of an implicit return, which can be hard to read and reason about. If you prefer, the same arrow function above can be re-written as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"setTimer(timerState => {\n  return timerState + 1\n})\n")),(0,o.kt)("p",null,"So why pass in a callback function? It allows us to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"timer")," state, without having to pass in ",(0,o.kt)("inlineCode",{parentName:"p"},"timer")," as a dependency to our ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook. To understand this, let's look at the alternative. "),(0,o.kt)("p",null,"If we don't use a callback function, we would have to pass in the ",(0,o.kt)("inlineCode",{parentName:"p"},"timer")," state variable as a dependency like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  useEffect(() => {\n    let interval;\n\n    if (isActive) {\n      interval = setInterval(() => {\n        // Notice the updated code below.\n        setTimer(timer + 1)\n      }, 1000\n    )}\n\n    return () => clearInterval(interval);\n  }, [isActive, timer]); // Notice the new dependency.\n")),(0,o.kt)("p",null,"While our timer will work as expected, the issue with this code is that it's less efficient because our effect will be called every time the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"timer")," state variable changes! That's every second. The solution here is to use the option to pass in a function to ",(0,o.kt)("inlineCode",{parentName:"p"},"setTimer")," instead of a new state value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"setTimer(timerState => timerState + 1)\n")),(0,o.kt)("p",null,"With this callback function, our ",(0,o.kt)("inlineCode",{parentName:"p"},"useState")," hook will handle passing in the ",(0,o.kt)("inlineCode",{parentName:"p"},"timer")," state as the value for the ",(0,o.kt)("inlineCode",{parentName:"p"},"timerState")," parameter. In turn, this code will increment ",(0,o.kt)("inlineCode",{parentName:"p"},"timer")," state by 1. What's more, we don't have to pass in ",(0,o.kt)("inlineCode",{parentName:"p"},"timer")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," dependency array. This means that our effect will only be called when ",(0,o.kt)("inlineCode",{parentName:"p"},"isActive")," changes, which is exactly what we want. "),(0,o.kt)("p",null,"This last topic we just covered is a slightly more of an advanced topic with using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook, but a pertinent one none-the-less. If you want to read more about it, visit this entry called ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often"},"What can I do if my effect dependencies change too often?"),"."),(0,o.kt)("h2",{id:"resources-and-next-steps"},"Resources and Next Steps"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Whew! We've covered a lot in this lesson. If anything about the ",(0,o.kt)("inlineCode",{parentName:"p"},"useState")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook isn't feeling entirely clear, know that we'll be using both of these hooks again when we implement them in our Help Queue application. Before we start in on the Help Queue, we're going to wrap up our introduction to hooks by reviewing the rules of hooks, their benefits, and how you should use them in React applications."),(0,o.kt)("p",null,"Note that it's normal for unexpected things to happen when we're first learning about hooks and how to implement them. If you run into issues, you should always start by referencing ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"the React docs on Hooks"),"."),(0,o.kt)("p",null,"For docs specifically on the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook, visit these links:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-effect.html"},"Using the Effect Hook")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-reference.html#useeffect"},"Hook API Reference: useEffect")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-faq.html"},"Hooks FAQ"))))}h.isMDXComponent=!0}}]);