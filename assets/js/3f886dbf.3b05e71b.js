"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[10907],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:o,l[1]=r;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},67286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={title:"6. Updating State with Events",id:"updating_state_with_events",slug:"updating_state_with_events",hide_table_of_contents:!0,sidebar_position:24,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3_react-fundamentals/1f_updating_state_with_events.md"},l=void 0,r={unversionedId:"react_classic/react-fundamentals/updating_state_with_events",id:"react_classic/react-fundamentals/updating_state_with_events",title:"6. Updating State with Events",description:"In this lesson, we'll handle our first event in a React application. We've handled many events before \u2014 every time we use functions to respond to a click or a submit button, we are handling an event. There are some fundamental differences to handling events in React, but for the most part, the process is very similar:",source:"@site/docs/react_classic/3_react-fundamentals/1f_updating_state_with_events.md",sourceDirName:"react_classic/3_react-fundamentals",slug:"/react_classic/react-fundamentals/updating_state_with_events",permalink:"/lhtp/react_classic/react-fundamentals/updating_state_with_events",draft:!1,tags:[],version:"current",sidebarPosition:24,frontMatter:{title:"6. Updating State with Events",id:"updating_state_with_events",slug:"updating_state_with_events",hide_table_of_contents:!0,sidebar_position:24,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3_react-fundamentals/1f_updating_state_with_events.md"},sidebar:"react_classic",previous:{title:"5. Conditional Rendering",permalink:"/lhtp/react_classic/react-fundamentals/conditional_rendering"},next:{title:"7. Binding Functions in React",permalink:"/lhtp/react_classic/react-fundamentals/binding_functions_in_react"}},s={},c=[{value:"Adding a Click Handler to JSX",id:"adding-a-click-handler-to-jsx",level:2},{value:"Calling a Function in a State Component",id:"calling-a-function-in-a-state-component",level:2},{value:"Toggling a Boolean When Updating State",id:"toggling-a-boolean-when-updating-state",level:2},{value:"Refactoring Our Button to Toggle Between Components",id:"refactoring-our-button-to-toggle-between-components",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson, we'll handle our first event in a React application. We've handled many events before \u2014 every time we use functions to respond to a click or a submit button, we are handling an event. There are some fundamental differences to handling events in React, but for the most part, the process is very similar:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First, we add a click handler to an element (such as a button)."),(0,o.kt)("li",{parentName:"ul"},"Next, that click handler will trigger some code, often a function. We need to write that function as well.")),(0,o.kt)("h2",{id:"adding-a-click-handler-to-jsx"},"Adding a Click Handler to JSX"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Here's how our click handler will look:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<button onClick={this.handleClick}>Add ticket</button>\n")),(0,o.kt)("p",null,"Here, we take a ",(0,o.kt)("inlineCode",{parentName:"p"},"button")," element and add an ",(0,o.kt)("inlineCode",{parentName:"p"},"onClick")," handler to it. We need to specify the function ",(0,o.kt)("inlineCode",{parentName:"p"},"onClick")," will trigger. As always, we need to use curly braces to make sure that JSX properly evaluates any JS code to the right of our ",(0,o.kt)("inlineCode",{parentName:"p"},"onClick")," handler."),(0,o.kt)("p",null,"In the example above, our ",(0,o.kt)("inlineCode",{parentName:"p"},"onClick")," handler will trigger ",(0,o.kt)("inlineCode",{parentName:"p"},"this.handleClick"),". As you can probably guess ",(0,o.kt)("inlineCode",{parentName:"p"},"handleClick()")," is the function that will be called when the handler is triggered. But what is ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),"? In this case, we are going to be rendering an object that's an instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketControl")," component. ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," refers to the specific instance that is being rendered."),(0,o.kt)("p",null,"Note that we don't use ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," with function components \u2014 just class components. But we won't worry about that right now. We will get a chance to add functions to function components soon enough."),(0,o.kt)("p",null,"Note that there are a few syntactical differences between how we do this in React as opposed to how we'd accomplish the same thing with JavaScript. Instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"onclick"),", we use ",(0,o.kt)("inlineCode",{parentName:"p"},"onClick")," (as always, case is important). In plain old JavaScript, we'd wrap the function being called in a string. For instance, we might do this: ",(0,o.kt)("inlineCode",{parentName:"p"},'<button onclick="doSomething()">'),". In JSX, we use curly braces. Other than these syntactical differences, attaching click handlers in React is very similar to how we might attach a click handler in a vanilla JavaScript application."),(0,o.kt)("p",null,"Now let's actually add our event handler to our component. Our event handler will go in the ",(0,o.kt)("inlineCode",{parentName:"p"},"render()")," method of ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketControl.js"),":"),(0,o.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"...\n\n  render(){\n    let currentlyVisibleState = null;\n    let addTicketButton = null; // new code\n    if (this.state.formVisibleOnPage) {\n      currentlyVisibleState = <NewTicketForm />\n    } else {\n      currentlyVisibleState = <TicketList />\n      addTicketButton = <button onClick={this.handleClick}>Add ticket</button> // new code\n    }\n    return (\n      <React.Fragment>\n        {currentlyVisibleState}\n        {addTicketButton} { /* new code */}\n      </ React.Fragment>\n    );\n  }\n\n...\n")),(0,o.kt)("p",null,"Before we continue, note that there are two different kinds of comments above \u2014 this is expected. Comments in JSX syntax need to be wrapped in curly braces, unlike the other comments, which are standard JS comments."),(0,o.kt)("p",null,"We've added three lines of code:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First, we create a new variable called ",(0,o.kt)("inlineCode",{parentName:"li"},"addTicketButton")," and set its value to ",(0,o.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,o.kt)("li",{parentName:"ul"},"Next, if ",(0,o.kt)("inlineCode",{parentName:"li"},"this.state.formVisibleOnPage")," is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),", we will set the value of our ",(0,o.kt)("inlineCode",{parentName:"li"},"addTicketButton")," variable to our button with its click handler."),(0,o.kt)("li",{parentName:"ul"},"Finally, we make sure that ",(0,o.kt)("inlineCode",{parentName:"li"},"{addTicketButton}")," will be returned from our function. If its value is still ",(0,o.kt)("inlineCode",{parentName:"li"},"null"),", there's nothing to add to the DOM. However, if it has a value, the button will be added to the DOM.")),(0,o.kt)("p",null,"You may wonder why we have this button here instead of in the ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketList")," component. Well, this button has nothing to do with our ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketList")," component so it shouldn't be there. However, it ",(0,o.kt)("em",{parentName:"p"},"does")," have a lot to do with ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketControl")," \u2014 it's a large part of determining which component should be showing!"),(0,o.kt)("p",null,"There's one other reason the button isn't in another component. If it were in a child component, we'd have to pass our ",(0,o.kt)("inlineCode",{parentName:"p"},"this.handleClick")," function to the child component using something called ",(0,o.kt)("strong",{parentName:"p"},"unidirectional data flow"),". That makes things a bit more complicated and we aren't quite there yet."),(0,o.kt)("h2",{id:"calling-a-function-in-a-state-component"},"Calling a Function in a State Component"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Next, we need to write the function that we've associated with our event handler. That way, when an event actually triggers the handler, the function is called. Any functions we write will go after the constructor and before the ",(0,o.kt)("inlineCode",{parentName:"p"},"render()")," method. Let's write a ",(0,o.kt)("inlineCode",{parentName:"p"},"handleClick()"),' method now. Note that we are using the term "method" here. Remember that a method is a function that\'s called on an object. ',(0,o.kt)("inlineCode",{parentName:"p"},"handleClick()")," is a method that has to be called on an instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketControl")," class \u2014 it can't be called elsewhere."),(0,o.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"...\n\nclass TicketControl extends React.Component {\n\n  constructor(props) {\n    super(props);\n    this.state = {\n      formVisibleOnPage: false\n    };\n  }\n\n  handleClick = () => {\n    this.setState({formVisibleOnPage: true});\n  }\n\n...\n")),(0,o.kt)("p",null,"Our new ",(0,o.kt)("inlineCode",{parentName:"p"},"handleClick()")," method uses arrow notation. This is very important. We will go over why in the next lesson when we discuss binding functions."),(0,o.kt)("p",null,"Let's take a look at the code in our new method. There's only a single line of code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"this.setState({formVisibleOnPage: true});\n")),(0,o.kt)("p",null,"As we discussed in ",(0,o.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/react/react-fundamentals/introduction-to-state"},"Introduction to State"),", we should only ever modify state in a pure React application with the ",(0,o.kt)("inlineCode",{parentName:"p"},"setState()")," method. In its simplest form, ",(0,o.kt)("inlineCode",{parentName:"p"},"setState()")," takes an object as an argument. The object contains any key-value pairs that our application should update."),(0,o.kt)("p",null,'Now if we run our application, we can successfully click on "Add Ticket" and our form will show.'),(0,o.kt)("h2",{id:"toggling-a-boolean-when-updating-state"},"Toggling a Boolean When Updating State"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"When we add a working form to our application, our submit button will return users to the list of tickets. However, what if a user changes their mind and wants to return to the queue, anyway? Let's add a button that users can click to return to the queue from the form page without submitting a ticket. That way, we can learn about efficiently toggling a boolean in React state."),(0,o.kt)("p",null,"First, we'll update our ",(0,o.kt)("inlineCode",{parentName:"p"},"handleClick()")," method:"),(0,o.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"...\n  handleClick = () => {\n    this.setState(prevState => ({\n      formVisibleOnPage: !prevState.formVisibleOnPage\n    }));\n  }\n...\n")),(0,o.kt)("p",null,"As we can see, ",(0,o.kt)("inlineCode",{parentName:"p"},"setState()")," just got more complex. This method can just take an object \u2014 and more often than not, just passing in an object will suit our needs."),(0,o.kt)("p",null,"However, if we want to refer to the previous state (such as with toggling a boolean or incrementing a counter), we need to know a little more about ",(0,o.kt)("inlineCode",{parentName:"p"},"setState()"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"setState()")," can optionally take two arguments (we will only discuss the first here). This is the actual first argument that ",(0,o.kt)("inlineCode",{parentName:"p"},"setState()")," can take:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"(state, props) => stateChange\n")),(0,o.kt)("p",null,"We can choose to just pass in an object (the ",(0,o.kt)("inlineCode",{parentName:"p"},"stateChange"),"), but we can also pass in an arrow function that takes the current ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," as arguments. As we just mentioned, there are plenty of use cases where we need to know about the current state. Here are some examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"We want to toggle a boolean.")," That means we need to know the current state of the boolean so we can toggle it to its opposite state."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"We want to increment or decrement a value.")," A prime example is a counter that we need to increment by one or some other value each time a button is clicked."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"We want to update the state of a game.")," Let's say we are making a game where the location of pieces is constantly changing. We need to know the previous state to determine where pieces can move next.")),(0,o.kt)("p",null,"Now let's return to the ",(0,o.kt)("inlineCode",{parentName:"p"},"setState()")," method in ",(0,o.kt)("inlineCode",{parentName:"p"},"handleClick()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"this.setState(prevState => ({\n  formVisibleOnPage: !prevState.formVisibleOnPage\n}));\n")),(0,o.kt)("p",null,"We pass in the current state of the ",(0,o.kt)("inlineCode",{parentName:"p"},"formVisibleOnPage")," boolean to ",(0,o.kt)("inlineCode",{parentName:"p"},"prevState"),". Now that we know this value, we can say the new state should be ",(0,o.kt)("inlineCode",{parentName:"p"},"!prevState.formVisibleOnPage")," (the opposite of the old state)."),(0,o.kt)("p",null,"We recommend experimenting with adding counters, booleans, and other states that need updating to your applications to get more practice with this slightly more complex implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"setState()"),"."),(0,o.kt)("h3",{id:"refactoring-our-button-to-toggle-between-components"},"Refactoring Our Button to Toggle Between Components"),(0,o.kt)("p",null,"Now that we've updated our ",(0,o.kt)("inlineCode",{parentName:"p"},"handleClick()")," method, we just need to update our ",(0,o.kt)("inlineCode",{parentName:"p"},"render()")," method so that we have a button to toggle back to the Help Queue with our form. Let's do this with the minimum amount of code possible. We'll need to refactor just a little."),(0,o.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'  render(){\n    let currentlyVisibleState = null;\n    let buttonText = null; // new code\n    if (this.state.formVisibleOnPage) {\n      currentlyVisibleState = <NewTicketForm />;\n      buttonText = "Return to Ticket List"; // new code\n    } else {\n      currentlyVisibleState = <TicketList />;\n      buttonText = "Add Ticket"; // new code\n    }\n    return (\n      <React.Fragment>\n        {currentlyVisibleState}\n        <button onClick={this.handleClick}>{buttonText}</button> { /* new code */ }\n      </React.Fragment>\n    );\n  }\n')),(0,o.kt)("p",null,"Now that we know we need our button in both components, we can move it out of the conditional and into our ",(0,o.kt)("inlineCode",{parentName:"p"},"return()")," statement. We only need to change the text on the button so we create a new variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"buttonText"),". It's the same button regardless of which component the user is looking at \u2014 but the text will make it seem like it's a different button."),(0,o.kt)("p",null,"At this point, we've successfully added local state and we can use a button to toggle back and forth between two components. In the process, we've also learned more about how ",(0,o.kt)("inlineCode",{parentName:"p"},"setState()")," works. Make sure to take the time to practice working with local state and getting to learn the ins and outs of ",(0,o.kt)("inlineCode",{parentName:"p"},"setState()"),"."))}p.isMDXComponent=!0}}]);