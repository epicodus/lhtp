"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[39591],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?o.createElement(h,a(a({ref:t},d),{},{components:n})):o.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const r={title:"Adding Combined Reducers to React",id:"adding_combined_reducers_to_react",slug:"adding_combined_reducers_to_react",hide_table_of_contents:!0,sidebar_position:20,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/1c_adding_our_combined_reducer_to_react.md"},a=void 0,s={unversionedId:"react/react-with-redux/adding_combined_reducers_to_react",id:"react/react-with-redux/adding_combined_reducers_to_react",title:"Adding Combined Reducers to React",description:"We've successfully added two additional reducers to our application \u2014 one for handling form visibility and another to combine our reducers into a single root reducer. Now we need to refactor our help application to utilize our new root reducer.",source:"@site/docs/react/4_react-with-redux/1c_adding_our_combined_reducer_to_react.md",sourceDirName:"react/4_react-with-redux",slug:"/react/react-with-redux/adding_combined_reducers_to_react",permalink:"/react/react-with-redux/adding_combined_reducers_to_react",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Adding Combined Reducers to React",id:"adding_combined_reducers_to_react",slug:"adding_combined_reducers_to_react",hide_table_of_contents:!0,sidebar_position:20,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/1c_adding_our_combined_reducer_to_react.md"},sidebar:"react",previous:{title:"Combining Redux Reducers",permalink:"/react/react-with-redux/combining_redux_reducers"},next:{title:"Building a React Application with Redux From Scratch",permalink:"/react/react-with-redux/building_a_react_application_with_redux_from_scratch"}},l={},c=[{value:"1. Update the Root Reducer",id:"1-update-the-root-reducer",level:3},{value:"2. Update <code>mapStateToProps</code>",id:"2-update-mapstatetoprops",level:3},{value:"3. Remove <code>formVisibleOnPage</code> State From <code>TicketControl.js</code>",id:"3-remove-formvisibleonpage-state-from-ticketcontroljs",level:3},{value:"4. Handle Form Visibility State with Redux",id:"4-handle-form-visibility-state-with-redux",level:3},{value:"5. Change <code>this.state</code> to <code>this.props</code> for Form Visibility Property",id:"5-change-thisstate-to-thisprops-for-form-visibility-property",level:3},{value:"Conclusion",id:"conclusion",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We've successfully added two additional reducers to our application \u2014 one for handling form visibility and another to combine our reducers into a single root reducer. Now we need to refactor our help application to utilize our new root reducer."),(0,i.kt)("p",null,"We'll need to make the following changes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Pass the root reducer into our store in ",(0,i.kt)("inlineCode",{parentName:"li"},"src/index.js")," (our application entry point \u2014 not the file where our root reducer is stored)!"),(0,i.kt)("li",{parentName:"ol"},"Update our ",(0,i.kt)("inlineCode",{parentName:"li"},"mapStateToProps")," function to handle our new slice of state."),(0,i.kt)("li",{parentName:"ol"},"Remove ",(0,i.kt)("inlineCode",{parentName:"li"},"formVisibleOnPage")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"TicketControl"),"'s state \u2014 our Redux store will handle it now."),(0,i.kt)("li",{parentName:"ol"},"Refactor our application to correctly dispatch the ",(0,i.kt)("inlineCode",{parentName:"li"},"'TOGGLE_FORM'")," action where needed."),(0,i.kt)("li",{parentName:"ol"},"Ensure that our ",(0,i.kt)("inlineCode",{parentName:"li"},"TicketControl")," component receives information about ",(0,i.kt)("inlineCode",{parentName:"li"},"formVisibleOnPage")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"this.props")," (because our props have been mapped from the store) instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"this.state")," (the component's state).")),(0,i.kt)("p",null,"Because we are refactoring the simplest piece of shared state in our application and moving it into Redux, these changes will be fairly minimal."),(0,i.kt)("h3",{id:"1-update-the-root-reducer"},"1. Update the Root Reducer"),(0,i.kt)("p",null,"First, we need to import our new root reducer into our application's entry point file \u2014 and then pass the root reducer into our store:"),(0,i.kt)("div",{class:"filename"},"src/index.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// import reducer from './reducers/ticket-list-reducer';\nimport rootReducer from './reducers/index';\n\nconst store = createStore(rootReducer);\n")),(0,i.kt)("p",null,"We import ",(0,i.kt)("inlineCode",{parentName:"p"},"rootReducer")," and pass it into the store. Note that our previous reducer is now commented-out. We only need to import the root reducer and any other reducer imports can now be removed from this file."),(0,i.kt)("h3",{id:"2-update-mapstatetoprops"},"2. Update ",(0,i.kt)("inlineCode",{parentName:"h3"},"mapStateToProps")),(0,i.kt)("p",null,"Next, we need to update the state we are mapping to props in our ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl")," component. Currently, the function returns the following object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  mainTicketList: state\n}\n")),(0,i.kt)("p",null,"However, we now want it to return slices of state to be mapped to props. The updated ",(0,i.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," function should look like this:"),(0,i.kt)("div",{class:"filename"},"components/TicketControl.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\nconst mapStateToProps = state => {\n  return {\n    mainTicketList: state.mainTicketList,\n    formVisibleOnPage: state.formVisibleOnPage\n  }\n}\n...\n")),(0,i.kt)("p",null,"Now each prop corresponds to a property of ",(0,i.kt)("inlineCode",{parentName:"p"},"state"),". We can map as many state slices to props as we need. In this case, we are only using two \u2014 but complex applications could easily have more."),(0,i.kt)("p",null,"We also need to add prop types as well:"),(0,i.kt)("div",{class:"filename"},"components/TicketControl.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"TicketControl.propTypes = {\n  mainTicketList: PropTypes.object,\n  formVisibleOnPage: PropTypes.bool\n};\n")),(0,i.kt)("h3",{id:"3-remove-formvisibleonpage-state-from-ticketcontroljs"},"3. Remove ",(0,i.kt)("inlineCode",{parentName:"h3"},"formVisibleOnPage")," State From ",(0,i.kt)("inlineCode",{parentName:"h3"},"TicketControl.js")),(0,i.kt)("p",null,"Next, we will remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"formVisibleOnPage")," property from our ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl")," component's state. While we are at it, we will remove any lines where we use React's ",(0,i.kt)("inlineCode",{parentName:"p"},"setState()")," method to update ",(0,i.kt)("inlineCode",{parentName:"p"},"formVisibleOnPage"),". Because Redux will be handling this slice of state, we won't be using React or ",(0,i.kt)("inlineCode",{parentName:"p"},"setState()")," to take care of form visibility any longer."),(0,i.kt)("p",null,"Several lines of code need to be removed from ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl.js"),". They are commented out in the code below. You may comment out these lines in your code or remove them completely."),(0,i.kt)("div",{class:"filename"},"components/TicketControl.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\nconstructor(props) {\n  super(props);\n  console.log(props);\n  this.state = {\n    // formVisibleOnPage: false,\n    selectedTicket: null,\n    editing: false\n  };\n}\n\nhandleClick = () => {\n    if (this.state.selectedTicket != null) {\n      this.setState({\n        // formVisibleOnPage: false,\n        selectedTicket: null,\n        editing: false\n      });\n    } else {\n      // this.setState(prevState => ({\n      //   formVisibleOnPage: !prevState.formVisibleOnPage,\n      // }));\n    }\n  }\n\n...\n\nhandleAddingNewTicketToList = (newTicket) => {\n  const { dispatch } = this.props;\n  const { id, names, location, issue } = newTicket;\n  const action = {\n    type: 'ADD_TICKET',\n    id: id,\n    names: names,\n    location: location,\n    issue: issue,\n  }\n  dispatch(action);\n  // this.setState({formVisibleOnPage: false});\n}\n\n...\n")),(0,i.kt)("p",null,"It should be clear where we will need to dispatch Redux actions \u2014 the exact same place where we previously used ",(0,i.kt)("inlineCode",{parentName:"p"},"setState()")," to change our form's visibility. When refactoring an application to use Redux instead of React for state, this can be a very helpful way to see where the refactor needs to happen. We don't necessarily need to create new methods in our components. We just need to rewire the relevant methods to use Redux instead of React for state."),(0,i.kt)("h3",{id:"4-handle-form-visibility-state-with-redux"},"4. Handle Form Visibility State with Redux"),(0,i.kt)("p",null,"We're ready to update ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl.js")," to use Redux instead of React for form visibility state. As shown in the previous section, we'll need to dispatch actions to our store in two different methods. You may want to try wiring this up yourself before continuing with this lesson \u2014 it's good practice and you learned how to dispatch actions over the weekend homework."),(0,i.kt)("p",null,"Here are the revised methods. (Note that the commented-out code from the previous section has been removed now.)"),(0,i.kt)("div",{class:"filename"},"components/TicketControl.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n\nhandleClick = () => {\n  if (this.state.selectedTicket != null) {\n    this.setState({\n      selectedTicket: null,\n      editing: false\n    });\n  } else {\n    const { dispatch } = this.props;\n    const action = {\n      type: 'TOGGLE_FORM'\n    }\n    dispatch(action);\n  }\n}\n\n...\n\nhandleAddingNewTicketToList = (newTicket) => {\n  const { dispatch } = this.props;\n  const { id, names, location, issue } = newTicket;\n  const action = {\n    type: 'ADD_TICKET',\n    id: id,\n    names: names,\n    location: location,\n    issue: issue,\n  }\n  dispatch(action);\n  const action2 = {\n    type: 'TOGGLE_FORM'\n  }\n  dispatch(action2);\n}\n")),(0,i.kt)("p",null,"We deconstruct the dispatch function from ",(0,i.kt)("inlineCode",{parentName:"p"},"this.props")," if needed, define the action in a constant, and then dispatch it."),(0,i.kt)("p",null,"Our ",(0,i.kt)("inlineCode",{parentName:"p"},"handleClick()")," method just got a bit more clunky \u2014 but our goal here is to demonstrate combining reducers. If we were to refactor this now, it would probably be best to break it down into two methods."),(0,i.kt)("p",null,"Note that the second method above now dispatches two actions. You may be wondering if the code above is smelly or not. It certainly has the potential to be buggy. This is because the ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch()")," function is asynchronous. If one of our actions depended on the other, we could run into race conditions where the first action isn't complete before the second one starts. In the example above, the two actions aren't dependent on each other. In future lessons, we will learn how to use middleware to deal with this issue."),(0,i.kt)("h3",{id:"5-change-thisstate-to-thisprops-for-form-visibility-property"},"5. Change ",(0,i.kt)("inlineCode",{parentName:"h3"},"this.state")," to ",(0,i.kt)("inlineCode",{parentName:"h3"},"this.props")," for Form Visibility Property"),(0,i.kt)("p",null,"This is a small change but a necessary one for our application to work correctly. Currently, our conditional rendering is still using ",(0,i.kt)("inlineCode",{parentName:"p"},"this.state.formVisibleOnPage"),". We need to update that line of code to ",(0,i.kt)("inlineCode",{parentName:"p"},"this.props.formVisibleOnPage")," because information about the property is now coming from ",(0,i.kt)("inlineCode",{parentName:"p"},"mapStateToProps"),". There is only one place in our code that uses this property:"),(0,i.kt)("div",{class:"filename"},"components/TicketControl.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n//else if (this.state.formVisibleOnPage) {\nelse if (this.props.formVisibleOnPage) {\n...\n")),(0,i.kt)("p",null,"Change the code from the commented out line (which you can delete) to the active line of code that uses ",(0,i.kt)("inlineCode",{parentName:"p"},"this.props")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"this.state"),"."),(0,i.kt)("h3",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"At this point, we've successfully refactored our application to use a root reducer. We now know how to use our root reducer and ",(0,i.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," to manage multiple reducers and multiple slices of state. We refactored our React Help Queue to use Redux for ",(0,i.kt)("inlineCode",{parentName:"p"},"formVisibleOnPage")," information instead of our component's local state. In the upcoming classwork, you will have the opportunity to refactor the Help Queue to use Redux instead of local state."))}u.isMDXComponent=!0}}]);