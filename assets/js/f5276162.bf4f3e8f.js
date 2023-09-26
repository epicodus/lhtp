"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[36348],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),k=i,u=d["".concat(l,".").concat(k)]||d[k]||m[k]||o;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},60603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={title:"Passing Data Via Callbacks",id:"passing-data-via-callbacks",slug:"passing-data-via-callbacks",hide_table_of_contents:!0,sidebar_position:29,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2d_passing_data_via_callbacks.md"},r=void 0,s={unversionedId:"react/react-fundamentals/passing-data-via-callbacks",id:"react/react-fundamentals/passing-data-via-callbacks",title:"Passing Data Via Callbacks",description:"In the last lesson, we covered the tricky concept of unidirectional data flow. In this lesson, we'll apply what we've learned. To recap, we'll need to do the following:",source:"@site/docs/react/3_react-fundamentals/2d-passing-data-via-callbacks.md",sourceDirName:"react/3_react-fundamentals",slug:"/react/react-fundamentals/passing-data-via-callbacks",permalink:"/react/react-fundamentals/passing-data-via-callbacks",draft:!1,tags:[],version:"current",sidebarPosition:29,frontMatter:{title:"Passing Data Via Callbacks",id:"passing-data-via-callbacks",slug:"passing-data-via-callbacks",hide_table_of_contents:!0,sidebar_position:29,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2d_passing_data_via_callbacks.md"},sidebar:"react",previous:{title:"Unidirectional Data Flow",permalink:"/react/react-fundamentals/unidirectional-data-flow"},next:{title:"Styling React: CSS Objects",permalink:"/react/react-fundamentals/styling-react-css-objects"}},l={},p=[{value:"Step 1: Move mainTicketList into State",id:"step-1-move-mainticketlist-into-state",level:3},{value:"Step #2: Pass New Props to TicketList Component and Add propTypes",id:"step-2-pass-new-props-to-ticketlist-component-and-add-proptypes",level:3},{value:"Step 3: Create a Method to Handle Our Form Submission",id:"step-3-create-a-method-to-handle-our-form-submission",level:3},{value:"Step 4: Pass Method Down to Child Component as a Prop",id:"step-4-pass-method-down-to-child-component-as-a-prop",level:3},{value:"Step 5: Add a Unique ID and Utilize the Parent Component&#39;s Method in the Child Component",id:"step-5-add-a-unique-id-and-utilize-the-parent-components-method-in-the-child-component",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the last lesson, we covered the tricky concept of unidirectional data flow. In this lesson, we'll apply what we've learned. To recap, we'll need to do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Move ",(0,i.kt)("inlineCode",{parentName:"li"},"mainTicketList")," into state."),(0,i.kt)("li",{parentName:"ol"},"Create a method in our parent ",(0,i.kt)("inlineCode",{parentName:"li"},"TicketControl")," component. This method will take any form data and turn it into an actual ticket."),(0,i.kt)("li",{parentName:"ol"},"Pass this method down to the child ",(0,i.kt)("inlineCode",{parentName:"li"},"NewTicketForm")," component as a prop \u2014 and also add PropTypes."),(0,i.kt)("li",{parentName:"ol"},"Add our new method to the existing function in our child component so that it's triggered when a user submits the form.")),(0,i.kt)("p",null,"In order to do this, we only need to add a few lines of code \u2014 and make small modifications to a few other lines. Despite the relatively small amount of code being added, we are still working with challenging new concepts. Be patient with yourself and follow along slowly. If it doesn't all click immediately (and it probably won't), trust the process and keep practicing these concepts in class and on your own."),(0,i.kt)("h3",{id:"step-1-move-mainticketlist-into-state"},"Step 1: Move mainTicketList into State"),(0,i.kt)("p",null,"Let's start by adding a mainTicketList property to state and passing it down as a prop to ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketList")," :"),(0,i.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'class TicketControl extends React.Component {\n\n  constructor(props) {\n    super(props);\n    this.state = {\n      formVisibleOnPage: false,\n      mainTicketList: [] // new code\n    };\n  }\n\n...\n\n    if (this.state.formVisibleOnPage) {\n      currentlyVisibleState = <NewTicketForm />;\n      buttonText = "Return to Ticket List";\n    } else {\n      currentlyVisibleState = <TicketList ticketList={this.state.mainTicketList} />; // new code\n      buttonText = "Add Ticket"; \n    }\n...\n\n')),(0,i.kt)("p",null,"Notice we're initializing mainTicketList as an empty array. We're doing this because we don't want this application to start with fake tickets. The queue should be empty until we start adding tickets via our form. (We'll be removing our array of dummy tickets from ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketList")," in just a moment.) Also, notice how we're passing mainTicketList down to ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketList"),". We include it as a prop and target its place in state with ",(0,i.kt)("inlineCode",{parentName:"p"},"this.state.mainTicketList"),". Here we're calling it ",(0,i.kt)("inlineCode",{parentName:"p"},"ticketList"),", so that's the name we'll use to access it as a prop in ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketList"),"."),(0,i.kt)("h3",{id:"step-2-pass-new-props-to-ticketlist-component-and-add-proptypes"},"Step #2: Pass New Props to TicketList Component and Add propTypes"),(0,i.kt)("p",null,"In the first step, we passed ",(0,i.kt)("inlineCode",{parentName:"p"},"mainTicketList")," state from ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl.js")," down to our ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketList")," component. Now we need to actually add props and prop types to ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketList.js"),". We'll also remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"mainTicketList")," constant that holds our dummy tickets as well."),(0,i.kt)("div",{class:"filename"},"src/components/TicketList.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport Ticket from "./Ticket";\nimport PropTypes from "prop-types";\n\n// remove const mainTicketList = [ ... ]. We no longer want these.\n\nfunction TicketList(props) { // Add props as parameter.\n  return (\n    <React.Fragment>\n      <hr />\n      {props.ticketList.map((ticket, index) => // Loop through the list passed down from TicketControl.\n        <Ticket names={ticket.names}\n          location={ticket.location}\n          issue={ticket.issue}\n          key={index} />\n      )}\n    </React.Fragment>\n  );\n}\n\n// Add propTypes for ticketList.\nTicketList.propTypes = {\n  ticketList: PropTypes.array\n};\n\nexport default TicketList;\n')),(0,i.kt)("p",null,"We've made several changes here. Now that we are passing ",(0,i.kt)("inlineCode",{parentName:"p"},"ticketList")," down through ",(0,i.kt)("inlineCode",{parentName:"p"},"props"),", we need to ",(0,i.kt)("inlineCode",{parentName:"p"},"import prop-types")," and add a prop type of array for our ",(0,i.kt)("inlineCode",{parentName:"p"},"ticketList"),". We also remove our ",(0,i.kt)("inlineCode",{parentName:"p"},"mainTicketList")," constant which stored three fake tickets \u2014 we won't need these anymore!"),(0,i.kt)("p",null,"Now we'll be able to make changes to our ticket list and, ultimately, display tickets as they're added."),(0,i.kt)("h3",{id:"step-3-create-a-method-to-handle-our-form-submission"},"Step 3: Create a Method to Handle Our Form Submission"),(0,i.kt)("p",null,"We'll start with step #1: creating a method in our ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl")," component."),(0,i.kt)("div",{class:"filename"},"TicketControl.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n\nclass TicketControl extends React.Component {\n\n  constructor(props) {\n    ...\n  }\n\n...\n\n  handleAddingNewTicketToList = (newTicket) => {\n    const newMainTicketList = this.state.mainTicketList.concat(newTicket);\n    this.setState({mainTicketList: newMainTicketList,\n                  formVisibleOnPage: false });\n  }\n...\n")),(0,i.kt)("p",null,"Our new method is called ",(0,i.kt)("inlineCode",{parentName:"p"},"handleAddingNewTicketToList")," because it does just that \u2014 handle the process of adding a new ticket in our ",(0,i.kt)("inlineCode",{parentName:"p"},"mainTicketList"),". It takes a ",(0,i.kt)("inlineCode",{parentName:"p"},"newTicket")," as a parameter. "),(0,i.kt)("p",null,"It's common practice to prefix the name of an event handler function with ",(0,i.kt)("inlineCode",{parentName:"p"},"handle"),". Any props containing that function will be prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"on"),". (We will add our prop in the next step.) This is because the prop will be used ",(0,i.kt)("em",{parentName:"p"},"when")," the event occurs, but the function itself is what ",(0,i.kt)("em",{parentName:"p"},"actually handles")," the necessary actions. It also ensures the names are similar enough to easily determine which props and functions correspond, yet different enough to determine when we're referencing a function and when we're referencing a prop containing a function."),(0,i.kt)("p",null,"Next, we create a constant called ",(0,i.kt)("inlineCode",{parentName:"p"},"newMainTicketList"),". Remember that we should ",(0,i.kt)("strong",{parentName:"p"},"never")," alter state directly. Instead, we will let React do that with the ",(0,i.kt)("inlineCode",{parentName:"p"},"setState()")," method."),(0,i.kt)("p",null,"We take ",(0,i.kt)("inlineCode",{parentName:"p"},"this.state.mainTicketList")," and call ",(0,i.kt)("inlineCode",{parentName:"p"},"concat()")," on it. Unlike ",(0,i.kt)("inlineCode",{parentName:"p"},"push()"),", which directly alters the array its called on, ",(0,i.kt)("inlineCode",{parentName:"p"},"concat()")," makes a ",(0,i.kt)("em",{parentName:"p"},"copy")," of that array. Anything passed into ",(0,i.kt)("inlineCode",{parentName:"p"},"concat()")," (in this case, our ",(0,i.kt)("inlineCode",{parentName:"p"},"newTicket"),") will be concatenated to the end of the new array."),(0,i.kt)("p",null,"Next, we set the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"mainTicketList")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"newMainTicketList")," variable we just created. As noted, we are using ",(0,i.kt)("inlineCode",{parentName:"p"},"setState()")," to make our direct change to state."),(0,i.kt)("p",null,"Finally, once the ticket has successfully been submitted, we want to set ",(0,i.kt)("inlineCode",{parentName:"p"},"formVisibleOnPage")," to false again so that the user will see the queue, not the form."),(0,i.kt)("h3",{id:"step-4-pass-method-down-to-child-component-as-a-prop"},"Step 4: Pass Method Down to Child Component as a Prop"),(0,i.kt)("p",null,"Now we need to pass our new ",(0,i.kt)("inlineCode",{parentName:"p"},"handleAddingNewTicketToList")," method down to our ",(0,i.kt)("inlineCode",{parentName:"p"},"NewTicketForm")," component as a prop. We'll start by making a small update to our ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"render()")," method:"),(0,i.kt)("div",{class:"filename"},"TicketControl.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'...\nrender(){\n    ...\n    if (this.state.formVisibleOnPage) {\n      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} /> { // new code in this line }\n      buttonText = "Return to Ticket List";\n    } else {\n      ....\n\n')),(0,i.kt)("p",null,"We will pass ",(0,i.kt)("inlineCode",{parentName:"p"},"this.handleAddingNewTicketToList")," as a prop to the ",(0,i.kt)("inlineCode",{parentName:"p"},"NewTicketForm"),". It will be saved in the prop ",(0,i.kt)("inlineCode",{parentName:"p"},"onNewTicketCreation"),". As noted in Step 1, we prefix the prop with ",(0,i.kt)("inlineCode",{parentName:"p"},"on"),". This differentiates the method in our parent component (which will actually handle the event) from the function in our child component (which is triggered when the event happens)."),(0,i.kt)("p",null,"Next, we need to make a few changes to our child ",(0,i.kt)("inlineCode",{parentName:"p"},"NewTicketForm")," so that it will accept props."),(0,i.kt)("div",{class:"filename"},"NewTicketForm.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport PropTypes from "prop-types"; //import PropTypes\n\nfunction NewTicketForm(props){ // Make sure to add props as a parameter.\n  ...\n}\n\n// We also need to add PropTypes for our new prop.\n\nNewTicketForm.propTypes = {\n  onNewTicketCreation: PropTypes.func\n};\n\nexport default NewTicketForm;\n')),(0,i.kt)("p",null,"We do two things here:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Ensure we are passing ",(0,i.kt)("inlineCode",{parentName:"li"},"props")," into our function component. Otherwise, our ",(0,i.kt)("inlineCode",{parentName:"li"},"NewTicketForm")," won't have access to props from ",(0,i.kt)("inlineCode",{parentName:"li"},"TicketControl"),"."),(0,i.kt)("li",{parentName:"ol"},"We add a ",(0,i.kt)("inlineCode",{parentName:"li"},"PropTypes")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"onNewTicketCreation"),". Remember that ",(0,i.kt)("inlineCode",{parentName:"li"},"this.handleAddingNewTicketToList")," is passed down to the child component as ",(0,i.kt)("inlineCode",{parentName:"li"},"onNewTicketCreation"),".")),(0,i.kt)("h3",{id:"step-5-add-a-unique-id-and-utilize-the-parent-components-method-in-the-child-component"},"Step 5: Add a Unique ID and Utilize the Parent Component's Method in the Child Component"),(0,i.kt)("p",null,"We're almost done! We need to two things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Import the UUID library to assign unique IDs to new tickets."),(0,i.kt)("li",{parentName:"ul"},"Update the ",(0,i.kt)("inlineCode",{parentName:"li"},"handleNewTicketFormSubmission")," function so that it creates a new ticket object and uses our ",(0,i.kt)("inlineCode",{parentName:"li"},"onNewTicketCreation")," prop to send the ticket object to the parent component, ",(0,i.kt)("inlineCode",{parentName:"li"},"TicketControl"),".")),(0,i.kt)("p",null,"Here's the updated code:"),(0,i.kt)("div",{class:"filename"},"NewTicketForm.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\nimport { v4 } from 'uuid'; // new code\n\nfunction NewTicketForm(props){\n  ...\n\n  function handleNewTicketFormSubmission(event) {\n    event.preventDefault();\n    props.onNewTicketCreation({\n      names: event.target.names.value, \n      location: event.target.location.value, \n      issue: event.target.issue.value, \n      id: v4()\n    });\n  }\n\n...\n")),(0,i.kt)("p",null,"Because a function component doesn't have ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," as a reference like a class component, we need to directly refer to the ",(0,i.kt)("inlineCode",{parentName:"p"},"props")," passed into the function component. That's why we do ",(0,i.kt)("inlineCode",{parentName:"p"},"props.onNewTicketCreation()")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"this.onNewTicketCreation()")," (as we'd do if this were a class component)."),(0,i.kt)("p",null,"We create an object with all of the ticket properties and pass it as the argument to ",(0,i.kt)("inlineCode",{parentName:"p"},"props.onNewTicketCreation()"),". We also create a unique ID with the UUID library. "),(0,i.kt)("p",null,"Take note that if we need to get a number from our form, we'd want to parse any form values at this point. For example, say we wanted to track the number of students who need help; in this case, we might have a property called ",(0,i.kt)("inlineCode",{parentName:"p"},"numberOfStudents")," and we'd want to make sure we parse the corresponding form value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"props.onNewTicketCreation({\n  ...\n  numberOfStudents: parseInt(event.target.numberOfStudents.value)\n});\n")),(0,i.kt)("p",null,"Remember that ",(0,i.kt)("inlineCode",{parentName:"p"},"onNewTicketCreation()")," is the callback from the parent component even though it has a different name now. The following method is invoked in ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl"),":"),(0,i.kt)("div",{class:"filename"},"TicketControl.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"handleAddingNewTicketToList = (newTicket) => {\n    const newMainTicketList = this.state.mainTicketList.concat(newTicket);\n    this.setState({\n      mainTicketList: newMainTicketList,\n      formVisibleOnPage: false\n    });\n  }\n")),(0,i.kt)("p",null,"When we call ",(0,i.kt)("inlineCode",{parentName:"p"},"props.onNewTicketCreation({names: names.value, location: location.value, issue: issue.value});")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"NewTicketForm")," component, this object is passed in as an argument to the ",(0,i.kt)("inlineCode",{parentName:"p"},"newTicket")," parameter, updating the ",(0,i.kt)("inlineCode",{parentName:"p"},"mainTicketList"),"."),(0,i.kt)("p",null,"Try it out in the browser. Now when we add a ticket via the form, it will be added to the queue!"))}m.isMDXComponent=!0}}]);