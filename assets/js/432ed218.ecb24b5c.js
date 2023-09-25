"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[47862],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(r),h=i,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},43230:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const a={title:"Writing Our First Redux Test",id:"writing_our_first_redux_test",slug:"writing_our_first_redux_test",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0d_writing_our_first_redux_test.md"},s=void 0,o={unversionedId:"react_classic/react-with-redux/writing_our_first_redux_test",id:"react_classic/react-with-redux/writing_our_first_redux_test",title:"Writing Our First Redux Test",description:"Our project is set up and ready to go. It's time to write our first test. In the process, we will learn a bit more about reducers. Once we've finished testing and building our first reducer, we will review what reducers are and how they work.",source:"@site/docs/react_classic/4_react-with-redux/0d_writing_our_first_redux_test.md",sourceDirName:"react_classic/4_react-with-redux",slug:"/react_classic/react-with-redux/writing_our_first_redux_test",permalink:"/react_classic/react-with-redux/writing_our_first_redux_test",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Writing Our First Redux Test",id:"writing_our_first_redux_test",slug:"writing_our_first_redux_test",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0d_writing_our_first_redux_test.md"},sidebar:"react_classic",previous:{title:"Setting Up Our First Project",permalink:"/react_classic/react-with-redux/setting_up_our_first_project"},next:{title:"Writing Our Second Redux Test",permalink:"/react_classic/react-with-redux/writing_our_second_redux_test"}},l={},u=[{value:"Failing Our First Test",id:"failing-our-first-test",level:3},{value:"Passing Our First Test",id:"passing-our-first-test",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Our project is set up and ready to go. It's time to write our first test. In the process, we will learn a bit more about reducers. Once we've finished testing and building our first reducer, we will review what reducers are and how they work."),(0,i.kt)("p",null,"As always, we should start by testing the simplest behavior we can. In this case, the simplest behavior we can test is the initial state of our Help Queue. The initial state will be an empty object ",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),". That is because our list of tickets is an object \u2014 each key-value pair inside that object represents a ticket."),(0,i.kt)("p",null,"Here's our test:"),(0,i.kt)("div",{class:"filename"},"src/__tests__/reducers/ticket-list-reducer.test.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import ticketListReducer from '../../reducers/ticket-list-reducer';\n\ndescribe('ticketListReducer', () => {\n  test('Should return default state if there is no action type passed into the reducer', () => {\n    expect(ticketListReducer({}, { type: null })).toEqual({});\n  });\n});\n")),(0,i.kt)("p",null,"We will start by importing our reducer. (Note that we haven't actually created any reducers yet.) We'll store the imported code in a variable called ",(0,i.kt)("inlineCode",{parentName:"p"},"ticketListReducer"),". We will have to jump up two directories in our relative path (",(0,i.kt)("inlineCode",{parentName:"p"},"../../"),") to reach the ",(0,i.kt)("inlineCode",{parentName:"p"},"reducers")," directory where our ticket list reducer will be stored."),(0,i.kt)("p",null,"Our test syntax should look somewhat familiar from JavaScript \u2014 though it's been just long enough that the work we did with Jest and vanilla JS may seem like a distant memory already. It's a common issue for coders and it's completely normal. We often need to move back and forth between tools, libraries and frameworks, and it's not always easy to remember the little details!"),(0,i.kt)("p",null,"A quick refresher:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"describe")," blocks are for grouping together related tests. All of our ",(0,i.kt)("inlineCode",{parentName:"li"},"ticketListReducer")," tests will be grouped together in one ",(0,i.kt)("inlineCode",{parentName:"li"},"describe")," block."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test")," refers to the individual test. This test will make sure our reducer returns the correct default value."),(0,i.kt)("li",{parentName:"ul"},"Our ",(0,i.kt)("inlineCode",{parentName:"li"},"expect")," statement lets our test know what the expected value will be.")),(0,i.kt)("p",null,"In the test above, we expect the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"expect(ticketListReducer({}, { type: null })).toEqual({});\n")),(0,i.kt)("p",null,"As we can see here, our reducer will take two arguments. The first argument is the current state while the second argument is an action that will be applied to the current state. Note that the action's type is stored inside an object. This object can potentially contain other things besides the name of the action itself. We will cover this further in the next lesson."),(0,i.kt)("p",null,"Remember that reducers are pure functions. For that reason, they will never hold any information about an application's current state. If they knew about application state and could directly alter it, they wouldn't be pure functions! That would be a side effect \u2014 and it would make our application more prone to bugs and other issues."),(0,i.kt)("p",null,"In other words, our reducer needs to know two things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What is the thing that needs to be changed (the current state)?"),(0,i.kt)("li",{parentName:"ul"},"How should that thing be changed (what action should be applied to that thing)?")),(0,i.kt)("p",null,"As long as the reducer knows these two things, it will be able to take care of the rest \u2014 returning the new state of the thing once the change has been applied to it."),(0,i.kt)("p",null,"Looking at our test above, our expectation should be clear. If our current state is an empty object ",(0,i.kt)("inlineCode",{parentName:"p"},"{}")," and we do nothing to it (the action type is ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"), then the reducer should return the current state ",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),"."),(0,i.kt)("h3",{id:"failing-our-first-test"},"Failing Our First Test"),(0,i.kt)("p",null,"Next, we want to add just enough code to our reducer to have a successful fail. Here's the code:"),(0,i.kt)("div",{class:"filename"},"src/reducers/ticket-list-reducer.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const reducer = (state = {}, action) => {\n\n};\n\nexport default reducer; \n")),(0,i.kt)("p",null,"Note that our ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," statement includes ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," because this file will only have one function inside it \u2014 the reducer for our ticket list. That way, when we import the reducer into our test or anywhere else, we can store all the code directly inside a single variable such as ",(0,i.kt)("inlineCode",{parentName:"p"},"ticketListReducer"),"."),(0,i.kt)("p",null,"Next, our function has two parameters. The first is the ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," that will need to be changed while the second is the ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," that will be applied to that state."),(0,i.kt)("p",null,"Our first parameter has a default value. This is an ES6 feature. We can pass default arguments as parameters to functions. That way, if an argument isn't passed into the parameter when the function is called, the function can just use the default."),(0,i.kt)("p",null,"Let's try running our test with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm test"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"}," FAIL  src/__tests__/reducers/ticket-list-reducer.test.js\n  \u25cf ticketListReducer \u203a Should return default state if no action type is recognized\n\n    expect(received).toEqual(expected)\n    \n    Expected value to equal:\n      {}\n    Received:\n      undefined\n    \n    Difference:\n    \n      Comparing two different types of values. Expected object but received undefined.\n      \n      at Object.test (src/__tests__/reducers/ticket-list-reducer.test.js:6:146)\n          at <anonymous>\n\n PASS  src/App.test.js\n\nTest Suites: 1 failed, 1 passed, 2 total\nTests:       1 failed, 1 passed, 2 total\nSnapshots:   0 total\nTime:        1.433s\nRan all test suites.\n")),(0,i.kt)("p",null,"Our test fails as expected. We want an empty object ",(0,i.kt)("inlineCode",{parentName:"p"},"{}")," but instead our reducer returns ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),". It should be clear why this is happening \u2014 our reducer isn't returning anything yet!"),(0,i.kt)("p",null,"However, it's important to have a meaningful fail. That way, we can make sure that our test is correctly wired up to the reducer \u2014 and also that we don't get a false positive."),(0,i.kt)("h2",{id:"passing-our-first-test"},"Passing Our First Test"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We only need to make a small change to our reducer to get our first test passing:"),(0,i.kt)("div",{class:"filename"},"src/reducers/ticket-list-reducer.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const reducer = (state = {}, action) => {\n  return state;\n};\n\nexport default reducer;\n")),(0,i.kt)("p",null,"If no action has been specified, what goes in is exactly what should come out. Our test passes and returns ",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),"."),(0,i.kt)("p",null,"At this point, we aren't even using Redux yet \u2014 we're just using vanilla JavaScript to write and test a pure function."),(0,i.kt)("p",null,"In the next lesson, we will work on our second test \u2014 and continue practicing with reducers!"))}p.isMDXComponent=!0}}]);