"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[5855],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70813:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"4. Combining Redux Reducers",id:"combining_redux_reducers",slug:"combining_redux_reducers",hide_table_of_contents:!0,sidebar_position:19,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/4_react-with-redux/1b_combining_reducers_in_redux.md"},o=void 0,s={unversionedId:"react/react-with-redux/combining_redux_reducers",id:"react/react-with-redux/combining_redux_reducers",title:"4. Combining Redux Reducers",description:"Because our Help Queue is a simple application, we can handle all of our actions with a single reducer. However, what should we do once our reducers start handling multiple slices of state?",source:"@site/docs/react/4_react-with-redux/1b_combining_reducers_in_redux.md",sourceDirName:"react/4_react-with-redux",slug:"/react/react-with-redux/combining_redux_reducers",permalink:"/lhtp/react/react-with-redux/combining_redux_reducers",draft:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"4. Combining Redux Reducers",id:"combining_redux_reducers",slug:"combining_redux_reducers",hide_table_of_contents:!0,sidebar_position:19,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/4_react-with-redux/1b_combining_reducers_in_redux.md"},sidebar:"react",previous:{title:"3. Redux Help Queue, Project Refactor",permalink:"/lhtp/react/react-with-redux/redux_help_queue_project_refactor"},next:{title:"5. Adding Combined Reducers to React",permalink:"/lhtp/react/react-with-redux/adding_combined_reducers_to_react"}},l={},c=[{value:"Creating a New Reducer",id:"creating-a-new-reducer",level:2},{value:"Root Reducer",id:"root-reducer",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Because our Help Queue is a simple application, we can handle all of our actions with a single reducer. However, what should we do once our reducers start handling multiple slices of state?"),(0,a.kt)("p",null,"In this lesson, we'll create an additional reducer to handle the ",(0,a.kt)("inlineCode",{parentName:"p"},"formVisibleOnPage")," boolean in our React application. Then we will learn how to use Redux's ",(0,a.kt)("inlineCode",{parentName:"p"},"combineReducers()")," function to combine all of our individual reducers into a single root reducer."),(0,a.kt)("p",null,"Then, in the next lesson, we will integrate our combined reducers into our React application."),(0,a.kt)("p",null,"If the Help Queue were a production application, we'd probably leave ",(0,a.kt)("inlineCode",{parentName:"p"},"formVisibleOnPage")," as local state instead of adding it to our Redux store. However, making this change provides the simplest use case in our application for making an additional reducer, combining it, and then doing minimal refactoring in our application to get it working. On the other hand, handling ",(0,a.kt)("inlineCode",{parentName:"p"},"selectedTicket")," with the Redux store would require quite a bit more refactoring in our ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," component because it is changed in so many places. You will have the chance to move all local state into Redux during class time, which is excellent practice for improving your Redux skills. As stated in prior lessons, it's fine if Redux handles local state but there's no one size fits all approach."),(0,a.kt)("h2",{id:"creating-a-new-reducer"},"Creating a New Reducer"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"First, let's create our new reducer. We need to test it and get it working independently before we combine it with our existing reducer."),(0,a.kt)("p",null,"As always, we'll start with a test. Our first test will just check to make sure that the reducer can accept a boolean value (",(0,a.kt)("inlineCode",{parentName:"p"},"false"),") and return the default state if no action type is provided."),(0,a.kt)("p",null,"We'll create a ",(0,a.kt)("inlineCode",{parentName:"p"},"form-visible-reducer.test.js")," file in ",(0,a.kt)("inlineCode",{parentName:"p"},"__tests__")," and add the following test:"),(0,a.kt)("div",{class:"filename"},"__tests__/reducers/form-visible-reducer.test.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import formVisibleReducer from '../../reducers/form-visible-reducer';\n\ndescribe(\"formVisibleReducer\", () => {\n\n  test('Should return default state if no action type is recognized', () => {\n    expect(formVisibleReducer(false, { type: null })).toEqual(false);\n  });\n});\n")),(0,a.kt)("p",null,"We can run ",(0,a.kt)("inlineCode",{parentName:"p"},"$ npm run test")," and verify that our tests fails."),(0,a.kt)("p",null,"Now let's create our new reducer and add just enough code to make our test pass:"),(0,a.kt)("div",{class:"filename"},"src/reducers/form-visible-reducer.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const reducer = (state = false, action) => {\n  return state;\n};\n\nexport default reducer;\n")),(0,a.kt)("p",null,"This reducer will always return a boolean with a default state of ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". Our test should now pass!"),(0,a.kt)("p",null,"It's time to test for the next simplest behavior. Can our reducer successfully toggle between true and false?"),(0,a.kt)("div",{class:"filename"},"__tests__/reducers/form-visible-reducer.test.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import formVisibleReducer from '../../reducers/form-visible-reducer';\n\ndescribe(\"formVisibleReducer\", () => {\n\n  // First test omitted for brevity.\n\n  test('Should toggle form visibility state to true', () => {\n    expect(formVisibleReducer(false, { type: 'TOGGLE_FORM' })).toEqual(true);\n  });\n\n});\n")),(0,a.kt)("p",null,"Given a value of ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," and an action type called ",(0,a.kt)("inlineCode",{parentName:"p"},"'TOGGLE_FORM'"),", our new reducer should return ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("p",null,"Our test will fail as expected."),(0,a.kt)("p",null,"Now let's add the logic to make our second test pass:"),(0,a.kt)("div",{class:"filename"},"src/reducers/form-visible-reducer.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const reducer = (state = false, action) => {\n  switch (action.type) {\n  case 'TOGGLE_FORM':\n    return !state;\n  default:\n    return state;\n  }\n};\n\nexport default reducer;\n")),(0,a.kt)("p",null,"As we can see, this is a very simple reducer. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"'TOGGLE_FORM'")," action is passed into the reducer, the boolean state will be toggled. That's all there is to it! Our test will now pass."),(0,a.kt)("h2",{id:"root-reducer"},"Root Reducer"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Our application now has two reducers. However, our ",(0,a.kt)("inlineCode",{parentName:"p"},"store")," can only take a single reducer as an argument."),(0,a.kt)("p",null,"We'll need to create an additional reducer called a ",(0,a.kt)("strong",{parentName:"p"},"root reducer")," that handles the work of combining our application's reducers. It may seem like extraneous code when our application is so small, but root reducers can help us keep our code modular and allow us to create many different reducers that can handle different slices of state."),(0,a.kt)("p",null,"We've tested both of the reducers we've created so far and we'll have to test this one, too. After all, we have to make sure that our root reducer correctly combines state slices."),(0,a.kt)("p",null,"Let's create a test file at ",(0,a.kt)("inlineCode",{parentName:"p"},"__tests__/reducers/index-reducer.test.js"),". It's common to combine reducers in a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"reducers/index.js")," \u2014 that's why we name our test file ",(0,a.kt)("inlineCode",{parentName:"p"},"index-reducer.test.js"),"."),(0,a.kt)("p",null,"Before we move on, we will address the naming convention. Why put the root reducer in a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js"),"?"),(0,a.kt)("p",null,"When a file is responsible for retrieving logic from other files in its directory and importing it all into one big module, it's known as a ",(0,a.kt)("strong",{parentName:"p"},"module index"),". Our ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," file will hold a root reducer that combines logic from all of our other reducer files \u2014 hence the naming convention."),(0,a.kt)("p",null,"Now we're ready to move on to tests. Here's our first one:"),(0,a.kt)("div",{class:"filename"},"__tests__/reducers/index-reducer.test.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import rootReducer from '../../reducers/index';\n\ndescribe(\"rootReducer\", () => {\n\n  test('Should return default state if no action type is recognized', () => {\n    expect(rootReducer({}, { type: null })).toEqual({\n      mainTicketList: {},\n      formVisibleOnPage: false\n    });\n  });\n\n});\n")),(0,a.kt)("p",null,"As with our other reducer tests, the first \u2014 and simplest \u2014 behavior we can test is that the reducer returns the default state."),(0,a.kt)("p",null,"The default state for our root reducer is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  mainTicketList: {},\n  formVisibleOnPage: false\n}\n")),(0,a.kt)("p",null,"As we can see, it will store multiple slices of state. We could combine many reducers if we wished \u2014 and our root reducer can have many state slices."),(0,a.kt)("p",null,"Now it's time to actually create our root reducer. Create a new file called ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"reducers")," directory and add the following code:"),(0,a.kt)("div",{class:"filename"},"reducers/index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import formVisibleReducer from './form-visible-reducer';\nimport ticketListReducer from './ticket-list-reducer';\nimport { combineReducers } from 'redux';\n\nconst rootReducer = combineReducers({\n  formVisibleOnPage: formVisibleReducer,\n  mainTicketList: ticketListReducer\n});\n\nexport default rootReducer;\n")),(0,a.kt)("p",null,"Our root reducer has three import statements. The first two are the reducers it needs to access. Any reducers being combined in the root reducer must be imported."),(0,a.kt)("p",null,"The final import statement is the ",(0,a.kt)("inlineCode",{parentName:"p"},"combineReducers()")," function from Redux. This is ",(0,a.kt)("em",{parentName:"p"},"not")," part of React Redux \u2014 this is core Redux functionality. Whenever we create a reducer that combines other reducers, we need to import this function."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"combineReducers()")," takes an object as an argument. That object contains key-value pairs. The key represents the state slice while the value represents the reducer that handles actions related to that state slice. Our ",(0,a.kt)("inlineCode",{parentName:"p"},"formVisibleReducer")," handles the ",(0,a.kt)("inlineCode",{parentName:"p"},"formVisibleOnPage")," state slice while our ",(0,a.kt)("inlineCode",{parentName:"p"},"ticketListReducer")," handles the ",(0,a.kt)("inlineCode",{parentName:"p"},"mainTicketList")," state slice."),(0,a.kt)("p",null,"And that's a root reducer. It just combines other reducers into a single file. The ",(0,a.kt)("inlineCode",{parentName:"p"},"combineReducers()")," function makes this process very easy. We can create as many reducers as we need, keeping our code modular and our individual files small (both coding best practices) and then use our root reducer to combine all these smaller reducers. The root reducer will then be passed into our application's store."),(0,a.kt)("p",null,"We ",(0,a.kt)("em",{parentName:"p"},"could")," stop our testing here but something doesn't feel quite right. We haven't actually tested that our root reducer is connected to our other reducers yet."),(0,a.kt)("p",null,"In this case, we don't want to retest each individual reducer's functionality again \u2014 we've already done that. Instead, we'll have some basic ",(0,a.kt)("strong",{parentName:"p"},"smoke tests"),". A smoke test is just a simple test to ensure the basic functionality works. It isn't comprehensive testing, but it will get the job done."),(0,a.kt)("p",null,"In this case, we just want to test that our root reducers will receive values from any reducers that it combines. In order to do that, we'll actually need to create a store."),(0,a.kt)("div",{class:"filename"},"__tests__/index-reducer.test.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\nimport { createStore } from 'redux';\n\nlet store = createStore(rootReducer);\n\n...\n")),(0,a.kt)("p",null,"In effect, we are creating a little Redux application in our tests that is separate from our React application. We are creating a store so we can dispatch a few actions and check that our reducers are working together."),(0,a.kt)("p",null,"First, we'll add a few tests to ensure that our root reducer is returning the default state of each individual reducer:"),(0,a.kt)("div",{class:"filename"},"__tests__/index-reducer.test.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import rootReducer from '../../reducers/index';\nimport { createStore } from 'redux';\nimport formVisibleReducer from '../../reducers/form-visible-reducer';\nimport ticketListReducer from '../../reducers/ticket-list-reducer';\n\n...\n\ntest('Check that initial state of ticketListReducer matches root reducer', () => {\n  expect(store.getState().mainTicketList).toEqual(ticketListReducer(undefined, { type: null }));\n});\n\ntest('Check that initial state of formVisibleReducer matches root reducer', () => {\n  expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));\n});\n...\n")),(0,a.kt)("p",null,"These tests are checking the same thing, first with our reducer for the ticket list and then with our reducer for form visibility: does the default state of each individual reducer (",(0,a.kt)("inlineCode",{parentName:"p"},"mainTicketList")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"formVisibleOnPage"),") match the default state for each state slice in the root reducer (",(0,a.kt)("inlineCode",{parentName:"p"},"rootReducer.mainTicketList")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rootReducer.formVisibleOnPage"),")? This is part of the reason we need to instantiate a store \u2014 so we can use Redux's ",(0,a.kt)("inlineCode",{parentName:"p"},"getState()")," method."),(0,a.kt)("p",null,'These tests will pass because we\'ve already correctly created our root reducer. These are essentially "sanity checks" to make sure everything works together.'),(0,a.kt)("p",null,"We'll do one more pair of tests. These tests will ensure that when we pass actions into our combined reducers, the root reducer reflects those changes."),(0,a.kt)("div",{class:"filename"},"__tests__/index-reducer.test.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"...\ntest('Check that ADD_TICKET action works for ticketListReducer and root reducer', () => {\n  const action = {\n    type: 'ADD_TICKET',\n    names: 'Ryan & Aimen',\n    location: '4b',\n    issue: 'Redux action is not working correctly.',\n    id: 1\n  }\n  store.dispatch(action);\n  expect(store.getState().mainTicketList).toEqual(ticketListReducer(undefined, action));\n});\n\ntest('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {\n  const action = {\n    type: 'TOGGLE_FORM'\n  }\n  store.dispatch(action);\n  expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));\n});\n...\n")),(0,a.kt)("p",null,"In both of these tests, we dispatch an action. We then expect our root reducer to properly handle those actions by passing them into our individual reducers. The store's state slice should be updated accordingly \u2014 and should be equal to the return result of the individual reducer that handled the action."),(0,a.kt)("p",null,"Now that we've set up and tested a root reducer, we are ready to update our React application to use it! We'll do that in the next lesson."))}p.isMDXComponent=!0}}]);