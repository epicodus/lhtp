"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[50348],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(n),u=i,k=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[c]="string"==typeof e?e:i,r[1]=d;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={title:"Adding Wait Time to the Queue",id:"adding-wait-time-to-the-queue",slug:"adding-wait-time-to-the-queue",hide_table_of_contents:!0,sidebar_position:4,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3d_adding_wait_time_to_the_queue.md"},r=void 0,d={unversionedId:"react-part-time-evening/react-with-redux-part-2/adding-wait-time-to-the-queue",id:"react-part-time-evening/react-with-redux-part-2/adding-wait-time-to-the-queue",title:"Adding Wait Time to the Queue",description:"Note: The next two lessons provide a walk through of implementing wait times in the queue. Most of the material reviews concepts we've learned already. You will not be expected to implement lifecycle methods outside of constructor() and render() in your independent project.",source:"@site/docs/react-part-time-evening/7_react-with-redux-part-2/3d-adding-wait-time-to-the-queue.md",sourceDirName:"react-part-time-evening/7_react-with-redux-part-2",slug:"/react-part-time-evening/react-with-redux-part-2/adding-wait-time-to-the-queue",permalink:"/react-part-time-evening/react-with-redux-part-2/adding-wait-time-to-the-queue",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Adding Wait Time to the Queue",id:"adding-wait-time-to-the-queue",slug:"adding-wait-time-to-the-queue",hide_table_of_contents:!0,sidebar_position:4,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3d_adding_wait_time_to_the_queue.md"},sidebar:"react-part-time-evening",previous:{title:"Component Lifecycle Methods",permalink:"/react-part-time-evening/react-with-redux-part-2/component-lifecycle-methods"},next:{title:"Adding Wait Time to the Queue Part 2",permalink:"/react-part-time-evening/react-with-redux-part-2/adding-wait-time-to-the-queue-part-2"}},l={},s=[{value:"Adding a Constant for <code>UPDATE_TIME</code> Action Type",id:"adding-a-constant-for-update_time-action-type",level:3},{value:"Writing a Test for <code>UPDATE_TIME</code> Reducer Action",id:"writing-a-test-for-update_time-reducer-action",level:3},{value:"Adding Reducer Logic for <code>UPDATE_TIME</code>",id:"adding-reducer-logic-for-update_time",level:3},{value:"Updating and Testing the <code>ADD_TICKET</code> Action",id:"updating-and-testing-the-add_ticket-action",level:3},{value:"Adding an Action Creator for <code>UPDATE_TIME</code>",id:"adding-an-action-creator-for-update_time",level:3}],p={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," The next two lessons provide a walk through of implementing wait times in the queue. Most of the material reviews concepts we've learned already. You will not be expected to implement lifecycle methods outside of ",(0,i.kt)("inlineCode",{parentName:"p"},"constructor()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"render()")," in your independent project."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We are now ready to implement time elapsed functionality to Help Queue tickets. This is a sizable refactor and we'll need to complete the following steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add a constant for the ",(0,i.kt)("inlineCode",{parentName:"li"},"UPDATE_TIME")," action type."),(0,i.kt)("li",{parentName:"ul"},"Test and write a reducer method for updating elapsed time in the UI."),(0,i.kt)("li",{parentName:"ul"},"Update our ",(0,i.kt)("inlineCode",{parentName:"li"},"ADD_TICKET")," action to handle ticket properties for ",(0,i.kt)("inlineCode",{parentName:"li"},"timeOpen")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"formattedWaitTime"),". ",(0,i.kt)("inlineCode",{parentName:"li"},"timeOpen")," will store when a ticket was opened while ",(0,i.kt)("inlineCode",{parentName:"li"},"formattedWaitTime"),' will store a string with user-friendly elapsed wait time (such as "2 minutes ago").'),(0,i.kt)("li",{parentName:"ul"},"Test and write an action creator to handle the ",(0,i.kt)("inlineCode",{parentName:"li"},"UPDATE_TIME")," action type."),(0,i.kt)("li",{parentName:"ul"},"Add date-fns where needed."),(0,i.kt)("li",{parentName:"ul"},"Add properties called ",(0,i.kt)("inlineCode",{parentName:"li"},"timeOpen")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"formattedWaitTime")," to tickets."),(0,i.kt)("li",{parentName:"ul"},"These properties mean that we will need to refactor other reducer actions like ",(0,i.kt)("inlineCode",{parentName:"li"},"ADD_TICKET"),".")),(0,i.kt)("p",null,"All of these steps may seem overwhelming at first. However, we can always break the problem-solving process down into smaller steps. In this case, it helps to have a bit of tunnel vision. In this lesson, we'll take care of testing and writing reducer actions and action creators. In the next lesson, we'll move on to updating our components to handle this new functionality."),(0,i.kt)("h3",{id:"adding-a-constant-for-update_time-action-type"},"Adding a Constant for ",(0,i.kt)("inlineCode",{parentName:"h3"},"UPDATE_TIME")," Action Type"),(0,i.kt)("p",null,"Because we'll want our action type to be a constant called ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE_TIME"),", not a string, let's start by adding a new constant to our ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionTypes"),":"),(0,i.kt)("div",{class:"filename"},"src/actions/ActionTypes.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\nexport const UPDATE_TIME = 'UPDATE_TIME';\n")),(0,i.kt)("h3",{id:"writing-a-test-for-update_time-reducer-action"},"Writing a Test for ",(0,i.kt)("inlineCode",{parentName:"h3"},"UPDATE_TIME")," Reducer Action"),(0,i.kt)("p",null,"Next, we need to decide where our  ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE_TIME")," reducer action will go. We could create a new reducer for it \u2014 or we could put it in our ticket list reducer, which already handles updates to tickets. Our ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE_TIME")," action will update the ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," property on all of our tickets \u2014 so it makes sense to put it in the ticket list reducer. It would be an equally valid choice to create a new reducer, though."),(0,i.kt)("p",null,"As always, we'll start with a test. Because we are adding the action to our ticket list reducer, the tests for this action should go in the corresponding test file: ",(0,i.kt)("inlineCode",{parentName:"p"},"ticket-list-reducer.test.js"),"."),(0,i.kt)("p",null,"Here is our first test for the ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE_TIME")," action:"),(0,i.kt)("div",{class:"filename"},"__tests__/reducers/ticket-list-reducer.test.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"...\nimport { formatDistanceToNow } from 'date-fns';\n...\n\ndescribe('ticketListReducer', () => {\n\n  ...\n  \n  let action;\n\n  const ticketData = {\n    names: 'Ryan & Aimen',\n    location: '4b',\n    issue: 'Redux action is not working correctly.',\n    timeOpen : new Date(),\n    formattedWaitTime: formatDistanceToNow(new Date(), {\n      addSuffix: true\n    }),\n    id: 1\n  };\n\n  ...\n\n  test('Should add a formatted wait time to ticket entry', () => {\n    const { names, location, issue, timeOpen, id } = ticketData;\n    action = {\n      type: c.UPDATE_TIME,\n      formattedWaitTime: '4 minutes ago',\n      id: id\n    };\n    expect(ticketListReducer({ [id] : ticketData }, action)).toEqual({\n      [id] : {\n        names: names,\n        location: location,\n        issue: issue,\n        timeOpen: timeOpen,\n        id: id,\n        formattedWaitTime: '4 minutes ago'\n      }\n    });\n  });\n...\n")),(0,i.kt)("p",null,"We start by importing date-fns and its helper function ",(0,i.kt)("inlineCode",{parentName:"p"},"formatDistanceToNow()")," because we'll want to ensure our sample ticket data for the ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," property uses a date-fns-formatted time."),(0,i.kt)("p",null,"Then, we update the ",(0,i.kt)("inlineCode",{parentName:"p"},"ticketData")," variable with our sample ticket data to include a ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen")," property which we set to ",(0,i.kt)("inlineCode",{parentName:"p"},"new Date()"),", and a ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," property that we set to a new formatted date from date-fns."),(0,i.kt)("p",null,"Next, our test simply verifies that the ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE_TIME")," action correctly adds a ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," property. It's not leveraging date-fns because that isn't the simplest possible behavior we can test. For now, we just want to see that ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE_TIME")," can update that property."),(0,i.kt)("p",null,"We destructure the ",(0,i.kt)("inlineCode",{parentName:"p"},"ticketData")," values, including ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen"),". Our ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE_TIME")," action needs to have an ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," in its payload. The ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," is necessary to determine which ticket should be updated. The ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," will hold a date-fns-formatted time."),(0,i.kt)("p",null,"To properly test that a ticket is being updated to include the ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime"),", we need to start with an initial state that already has a ticket. That's why we ",(0,i.kt)("inlineCode",{parentName:"p"},"expect(ticketListReducer({ [id] : ticketData }, action))")," to be equal to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ticketData")," provided in our expect statement's initial state, but with one key difference \u2014 the included ticket should now have the ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," property with a value of ",(0,i.kt)("inlineCode",{parentName:"p"},"'4 minutes ago'"),"."),(0,i.kt)("h3",{id:"adding-reducer-logic-for-update_time"},"Adding Reducer Logic for ",(0,i.kt)("inlineCode",{parentName:"h3"},"UPDATE_TIME")),(0,i.kt)("p",null,"Next, we'll verify that our new test fails. Then we're ready to add logic to make it pass. We'll add an ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE_TIME")," ",(0,i.kt)("inlineCode",{parentName:"p"},"case")," to our existing ticket list reducer:"),(0,i.kt)("div",{class:"filename"},"src/reducers/ticket-list-reducer.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as c from './../actions/ActionTypes';\n\nconst reducer = (state = {}, action) => {\n  const { names, location, issue, id, formattedWaitTime, timeOpen } = action;\n  switch (action.type) {\n  case c.ADD_TICKET:\n    ...\n  case c.DELETE_TICKET:\n    ...\n  case c.UPDATE_TIME:\n    const newTicket = Object.assign({}, state[id], {formattedWaitTime});\n    const updatedState = Object.assign({}, state, {\n      [id]: newTicket\n    });\n    return updatedState;\n  default:\n    return state;\n  }\n};\n\nexport default reducer;\n")),(0,i.kt)("p",null,"Let's take a look at our new ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE_TIME")," action:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"First of all, when we deconstruct ",(0,i.kt)("inlineCode",{parentName:"p"},"action"),", we now need to extract ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Then, within ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE_TIME"),", we use ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.assign()")," to grab the ticket that needs to be updated (we use ",(0,i.kt)("inlineCode",{parentName:"p"},"state[id]")," to do this to get the specific ticket from the list of tickets). ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.assign()")," makes a copy of this ticket and then adds the ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," to it. (Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"{formattedWaitTime}")," is an object with the ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," key-value pair in it.)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Then we use ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.assign()")," again \u2014 this time to make a copy of the entire ticket list. The ",(0,i.kt)("inlineCode",{parentName:"p"},"updatedTicket")," will be added to this copy of the ticket list. Since the ",(0,i.kt)("inlineCode",{parentName:"p"},"updatedTicket"),"'s id already exists in the copy of the ticket list, the old ticket will be replaced with the updated ticket.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Finally, we return the updated state."))),(0,i.kt)("p",null,"If we run our tests, they will all pass."),(0,i.kt)("p",null,"This is really all we need for now \u2014 our ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE_TIME")," action just needs to change the ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," of a ticket. We won't use our reducer to handle date-fns. Remember that reducers are pure functions \u2014 the same input should always return the same output. However, if our reducer handled determining the time a ticket is put in, the computed ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedTimeValue")," of one inputted ticket could be completely different from that of another inputted ticket \u2014 which is not pure at all \u2014 and quite difficult to test."),(0,i.kt)("h3",{id:"updating-and-testing-the-add_ticket-action"},"Updating and Testing the ",(0,i.kt)("inlineCode",{parentName:"h3"},"ADD_TICKET")," Action"),(0,i.kt)("p",null,"Astute observers may have noted that our ",(0,i.kt)("inlineCode",{parentName:"p"},"ADD_TICKET")," action doesn't handle ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime"),". If these properties aren't added to tickets when they are created, our application won't work properly."),(0,i.kt)("p",null,"Let's update our ",(0,i.kt)("inlineCode",{parentName:"p"},"ADD_TICKET")," test now:"),(0,i.kt)("div",{class:"filename"},"__tests__/reducers/ticket-list-reducer.test.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n\ntest('should successfully add a ticket to the ticket list that includes date-fns-formatted wait times', () => {\n    const { names, location, issue, timeOpen, formattedWaitTime, id } = ticketData;\n    action = {\n      type: c.ADD_TICKET,\n      names: names,\n      location: location,\n      issue: issue,\n      timeOpen: timeOpen,\n      formattedWaitTime: formattedWaitTime,\n      id: id\n    };\n    expect(ticketListReducer({}, action)).toEqual({\n      [id] : {\n        names: names,\n        location: location,\n        issue: issue,\n        timeOpen: timeOpen,\n        formattedWaitTime: 'less than a minute ago',\n        id: id\n      }\n    });\n  });\n")),(0,i.kt)("p",null,"Here we modify our ",(0,i.kt)("inlineCode",{parentName:"p"},"ADD_TICKET")," test to include the ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," properties. We've also altered the description of the test a bit to make it clearer what exactly we are testing."),(0,i.kt)("p",null,"This test will fail as expected. We'll only need to make a small tweak to our ",(0,i.kt)("inlineCode",{parentName:"p"},"ADD_TICKET")," action to get the test passing again:"),(0,i.kt)("div",{class:"filename"},"src/reducers/ticket-list-reducer.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n\nconst reducer = (state = {}, action) => {\n  const { names, location, issue, id, formattedWaitTime, timeOpen } = action;\n  switch (action.type) {\n  case c.ADD_TICKET:\n    return Object.assign({}, state, {\n      [id]: {\n        names: names,\n        location: location,\n        issue: issue,\n        id: id,\n        timeOpen: timeOpen,\n        formattedWaitTime: formattedWaitTime\n      }\n    });\n  ...\n  }\n};\n\nexport default reducer;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Once again, when we deconstruct ",(0,i.kt)("inlineCode",{parentName:"p"},"action"),", we now also need to extract ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A ticket now needs to include ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," properties."))),(0,i.kt)("p",null,"Our test should now pass!"),(0,i.kt)("h3",{id:"adding-an-action-creator-for-update_time"},"Adding an Action Creator for ",(0,i.kt)("inlineCode",{parentName:"h3"},"UPDATE_TIME")),(0,i.kt)("p",null,"We'll also want to add (and test) an action creator for the ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE_TIME")," action."),(0,i.kt)("p",null,"Here's the test:"),(0,i.kt)("div",{class:"filename"},"__tests__/actions/index.test.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n  it('updateTime should create UPDATE_TIME action', () => {\n    expect(actions.updateTime(1, 'less than a minute ago')).toEqual({\n      type: c.UPDATE_TIME,\n      id: 1,\n      formattedWaitTime: 'less than a minute ago'\n    });\n  });\n...\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"updateTime()")," action creator has two parameters. The first is a ticket's id while the second is the formatted wait time that should be passed into that ticket. This should be equivalent to the ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE_TIME")," action type, which takes in properties for an ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime"),"."),(0,i.kt)("p",null,"Now for the code to get our test passing:"),(0,i.kt)("div",{class:"filename"},"src/actions/index.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export const updateTime = (id, formattedWaitTime) => ({\n  type: c.UPDATE_TIME,\n  id: id,\n  formattedWaitTime: formattedWaitTime\n});\n")),(0,i.kt)("p",null,"At this point, we've tested and written code for our new ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE_TIME")," action, updated and tested code for our ",(0,i.kt)("inlineCode",{parentName:"p"},"ADD_TICKET")," action, and tested and written code for an ",(0,i.kt)("inlineCode",{parentName:"p"},"updateTime()")," action creator. We're ready to move on to updating our components, right?"),(0,i.kt)("p",null,"Not quite. Before we move on, there's a gotcha that could come back to bite us if we don't deal with it now. What about the action creator for our ",(0,i.kt)("inlineCode",{parentName:"p"},"ADD_TICKET")," action? It doesn't deal with ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," yet. If we try to add or update a ticket via that action creator, it won't even acknowledge those properties."),(0,i.kt)("p",null,"So we need to update the test for that action creator first: "),(0,i.kt)("div",{class:"filename"},"__tests__/actions/index.test.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\nit('addTicket should create ADD_TICKET action', () => {\n    expect(actions.addTicket({\n      names: 'Jo and Jasmine', \n      location: '3E', \n      issue: 'Redux not working!', \n      timeOpen: 0,\n      formattedWaitTime: 'less than a minute ago', \n      id: 1\n    })).toEqual({\n      type: c.ADD_TICKET,\n      names: 'Jo and Jasmine',\n      location: '3E',\n      issue: 'Redux not working!',\n      timeOpen: 0,\n      formattedWaitTime: 'less than a minute ago',\n      id: 1\n    });\n  });\n...\n")),(0,i.kt)("p",null,"The only changes we've made here is to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," properties to both the left and right sides of our ",(0,i.kt)("inlineCode",{parentName:"p"},"expect")," statement. "),(0,i.kt)("p",null,"Notice that ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," are each set  to fake data. Well, we can do this here, since we already tested that ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," are properly set to a new date and a new date formatted by date-fns when we tested the ",(0,i.kt)("inlineCode",{parentName:"p"},"ADD_TICKET")," action in our ticket-list-reducer. With our ",(0,i.kt)("inlineCode",{parentName:"p"},"addTicket()")," action creator, our only goal is to make sure that our action creator properly includes these two properties as it creates our action. So, fake data works well here."),(0,i.kt)("p",null,"To make it pass, we just need to make a few tweaks to our ",(0,i.kt)("inlineCode",{parentName:"p"},"addTicket()")," action creator:"),(0,i.kt)("div",{class:"filename"},"src/actions/index.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\nexport const addTicket = (ticket) => {\n  const { names, location, issue, id, formattedWaitTime, timeOpen } = ticket;\n  return {\n    type: c.ADD_TICKET,\n    names: names,\n    location: location,\n    issue: issue,\n    id: id,\n    formattedWaitTime,\n    timeOpen: timeOpen\n  }\n}\n...\n")),(0,i.kt)("p",null,"We need to deconstruct a few more properties (",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen"),") and then make sure those two properties are included in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ADD_TICKET")," action."),(0,i.kt)("p",null,"Now we are finally ready to move on to updating our components and UI. We'll cover that in the next lesson."))}m.isMDXComponent=!0}}]);