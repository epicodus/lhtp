"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[61646],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||r;return n?o.createElement(d,l(l({ref:t},c),{},{components:n})):o.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},97420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={title:"10. Help Queue: Adding Context Consumers and Error Handling",id:"help_queue_adding_context_consumers_and_error_handling",slug:"help_queue_adding_context_consumers_and_error_handling",hide_table_of_contents:!0,sidebar_position:10,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/10_react-with-apis/0j_using_context_in_help_queue_part_3.md"},l=void 0,i={unversionedId:"react_part_time_evening/react-with-apis/help_queue_adding_context_consumers_and_error_handling",id:"react_part_time_evening/react-with-apis/help_queue_adding_context_consumers_and_error_handling",title:"10. Help Queue: Adding Context Consumers and Error Handling",description:"In this lesson, we'll complete the functionality of a light and dark theme in the Help Queue. In the process, we'll learn how to use context consumers in class and function components.",source:"@site/docs/react_part_time_evening/10_react-with-apis/0j_using_context_in_help_queue_part_3.md",sourceDirName:"react_part_time_evening/10_react-with-apis",slug:"/react_part_time_evening/react-with-apis/help_queue_adding_context_consumers_and_error_handling",permalink:"/lhtp/react_part_time_evening/react-with-apis/help_queue_adding_context_consumers_and_error_handling",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"10. Help Queue: Adding Context Consumers and Error Handling",id:"help_queue_adding_context_consumers_and_error_handling",slug:"help_queue_adding_context_consumers_and_error_handling",hide_table_of_contents:!0,sidebar_position:10,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/10_react-with-apis/0j_using_context_in_help_queue_part_3.md"},sidebar:"react_part_time_evening",previous:{title:"9. Help Queue: Creating a Context and Provider",permalink:"/lhtp/react_part_time_evening/react-with-apis/help_queue_creating_a_context_and_provider"},next:{title:"11. Context Best Practices, Alternatives, and Further Exploration",permalink:"/lhtp/react_part_time_evening/react-with-apis/context_best_practices_alternatives_and_further_exploration"}},s={},p=[{value:"Adding Context Consumers",id:"adding-context-consumers",level:2},{value:"Using <code>&lt;ThemeContext.Consumer&gt;</code> in <code>ToggleTheme</code>",id:"using-themecontextconsumer-in-toggletheme",level:3},{value:"Using <code>contextType</code> in the Class Component <code>TicketControl</code>",id:"using-contexttype-in-the-class-component-ticketcontrol",level:3},{value:"Using the <code>useContext()</code> hook in <code>ReusableForm</code> and <code>TicketDetail</code>",id:"using-the-usecontext-hook-in-reusableform-and-ticketdetail",level:3},{value:"Leveraging the Default Context Value for Consumer Error Handling",id:"leveraging-the-default-context-value-for-consumer-error-handling",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this lesson, we'll complete the functionality of a light and dark theme in the Help Queue. In the process, we'll learn how to use context consumers in class and function components. "),(0,a.kt)("p",null,"We'll also discuss the optional default value that we can add to context objects, and how we can leverage it to create error handling for our context consumers."),(0,a.kt)("h2",{id:"adding-context-consumers"},"Adding Context Consumers"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We need to add context consumers to the following components so we can set the background and text color of the buttons and inputs to match the current theme:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ToggleTheme"),": one ",(0,a.kt)("inlineCode",{parentName:"li"},"<button>")," element."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TicketControl"),": one ",(0,a.kt)("inlineCode",{parentName:"li"},"<button>")," element."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TicketDetail.js"),": two ",(0,a.kt)("inlineCode",{parentName:"li"},"<button>")," elements."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ReusableForm.js"),": one ",(0,a.kt)("inlineCode",{parentName:"li"},"<button>")," element, two ",(0,a.kt)("inlineCode",{parentName:"li"},"<input>")," elements, and one ",(0,a.kt)("inlineCode",{parentName:"li"},"<textarea>")," input.")),(0,a.kt)("p",null,"In the process of adding context consumers, we'll learn three different ways to consumer context data:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Class components: setting the class's ",(0,a.kt)("inlineCode",{parentName:"li"},"contextType")," property to ",(0,a.kt)("inlineCode",{parentName:"li"},"ThemeContext"),"."),(0,a.kt)("li",{parentName:"ol"},"Function components: using the ",(0,a.kt)("inlineCode",{parentName:"li"},"<ThemeContext.Consumer>")," component."),(0,a.kt)("li",{parentName:"ol"},"Function components: using the ",(0,a.kt)("inlineCode",{parentName:"li"},"useContext()")," hook, as in ",(0,a.kt)("inlineCode",{parentName:"li"},"const theme = useContext(ThemeContext)"),".")),(0,a.kt)("p",null,"The trend in React development is to favor function components over class components, so the ",(0,a.kt)("inlineCode",{parentName:"p"},"useContext()")," hook will be the most popular way to consume context data. However, it's important to know how to consume context data without hooks, because most applications still use class components, and many applications use versions of React earlier than 16.8, the React version when hooks were introduced!  "),(0,a.kt)("h3",{id:"using-themecontextconsumer-in-toggletheme"},"Using ",(0,a.kt)("inlineCode",{parentName:"h3"},"<ThemeContext.Consumer>")," in ",(0,a.kt)("inlineCode",{parentName:"h3"},"ToggleTheme")),(0,a.kt)("p",null,"We'll start by learning how to consume provider data in a function component by implementing a consumer component in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ToggleTheme")," component. "),(0,a.kt)("p",null,"Consumer components render a function that returns the component or element that will consume context data. The context data is passed into the component/element via the function. This is how these components are structured:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<MyContext.Consumer>\n  {value => /* render a component or element with the context value */}\n</MyContext.Consumer>\n")),(0,a.kt)("p",null,"Note that this is a function: ",(0,a.kt)("inlineCode",{parentName:"p"},"{value => /* render a component or element with the context value */}"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," parameter represents the context value from the provider component. "),(0,a.kt)("p",null,"Let's use a consumer component in ",(0,a.kt)("inlineCode",{parentName:"p"},"App.js"),": we'll add a ",(0,a.kt)("inlineCode",{parentName:"p"},"<ThemeContext.Consumer>")," component in place of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<ToggleTheme>")," component, and set the ",(0,a.kt)("inlineCode",{parentName:"p"},"ToggleTheme")," component as the return value of the the ",(0,a.kt)("inlineCode",{parentName:"p"},"<ThemeContext.Consumer>")," component."),(0,a.kt)("p",null,"Here's the new code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<ThemeContext.Consumer>\n  {contextTheme => <ToggleTheme theme={contextTheme} toggleTheme={toggleTheme}/>}\n</ThemeContext.Consumer>\n")),(0,a.kt)("p",null,"And here is how the new code fits into ",(0,a.kt)("inlineCode",{parentName:"p"},"App.js"),":"),(0,a.kt)("div",{class:"filename"},"src/components/App.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\n\nfunction App(){\n  const [theme, setTheme] = useState(themes.light);\n\n  document.body.style.backgroundColor = theme.backgroundColor;\n  document.body.style.color = theme.textColor;\n\n  function toggleTheme() {\n    ...\n  }\n\n  return (\n    <ThemeContext.Provider value={theme}>\n      <Header />\n      {/* new code below */}\n      <ThemeContext.Consumer>\n        {contextTheme => <ToggleTheme theme={contextTheme} toggleTheme={toggleTheme}/>}\n      </ThemeContext.Consumer>\n      {/* new code above */}\n      <TicketControl />\n    </ThemeContext.Provider>\n  );\n}\n\nexport default App;\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"contextTheme")," parameter represents the data that the provider component transmits via its ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," prop, which is the CSS object for either the light or dark theme. We then use the ",(0,a.kt)("inlineCode",{parentName:"p"},"contextTheme")," parameter as the value of a prop we call ",(0,a.kt)("inlineCode",{parentName:"p"},"theme"),", which we'll use to create styles for our button. We also pass in our ",(0,a.kt)("inlineCode",{parentName:"p"},"toggleTheme")," prop, the same as before."),(0,a.kt)("p",null,"Next, let's update the ",(0,a.kt)("inlineCode",{parentName:"p"},"ToggleTheme")," component to use the theme data. "),(0,a.kt)("div",{class:"filename"},"src/components/ToggleTheme.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport PropTypes from "prop-types";\n\nfunction ToggleTheme(props) {\n  const {theme, toggleTheme} = props;\n\n  const styles = { \n    backgroundColor: theme.buttonBackground, \n    color:\'theme\'.textColor \n  }\n\n  return (\n    <React.Fragment>\n      <button style={styles} onClick={toggleTheme}>\n        {theme.textColor === "AntiqueWhite" ? "toggle light theme" : "toggle dark theme"}\n      </button>\n      <hr/>\n    </React.Fragment>\n  );\n}\n\nToggleTheme.propTypes = {\n  toggleTheme: PropTypes.func,\n  theme: PropTypes.object\n}\n\nexport default ToggleTheme;\n')),(0,a.kt)("p",null,"We've made a few additions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We destructure ",(0,a.kt)("inlineCode",{parentName:"li"},"theme")," from ",(0,a.kt)("inlineCode",{parentName:"li"},"props"),"."),(0,a.kt)("li",{parentName:"ul"},"We create a new CSS object based on the styles that are relevant to the button. We save this object in the variable ",(0,a.kt)("inlineCode",{parentName:"li"},"styles"),"."),(0,a.kt)("li",{parentName:"ul"},"We add a new ",(0,a.kt)("inlineCode",{parentName:"li"},"style={styles}")," attribute to the ",(0,a.kt)("inlineCode",{parentName:"li"},"<button>")," element to apply the theme styles."),(0,a.kt)("li",{parentName:"ul"},'We update the "Toggle Theme" button text to conditionally display "toggle light theme" or "toggle dark theme", depending on whether the theme is dark or light. '),(0,a.kt)("li",{parentName:"ul"},"We list the prop type of the ",(0,a.kt)("inlineCode",{parentName:"li"},"theme")," prop.")),(0,a.kt)("p",null,"Now if you run the project, you'll see that the toggle button changes along with the select theme. "),(0,a.kt)("h3",{id:"using-contexttype-in-the-class-component-ticketcontrol"},"Using ",(0,a.kt)("inlineCode",{parentName:"h3"},"contextType")," in the Class Component ",(0,a.kt)("inlineCode",{parentName:"h3"},"TicketControl")),(0,a.kt)("p",null,"Next, we'll learn how to consume provider data in a class component. We'll do a few things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"contextType")," property for the ",(0,a.kt)("inlineCode",{parentName:"li"},"TicketControl")," component that's set to the ",(0,a.kt)("inlineCode",{parentName:"li"},"ThemeContext")," provider value. "),(0,a.kt)("li",{parentName:"ul"},"Call ",(0,a.kt)("inlineCode",{parentName:"li"},"this.context")," anywhere we need to use the context value."),(0,a.kt)("li",{parentName:"ul"},"Create button styles based on the context theme value and apply it to the button in ",(0,a.kt)("inlineCode",{parentName:"li"},"TicketControl"),".")),(0,a.kt)("p",null,"We'll add the new code and then explain it down below. Most of our updates will be concentrated at the bottom of the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," component."),(0,a.kt)("p",null,"Here's the new code:"),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\n// We import ThemeContext to create a new consumer.\nimport { ThemeContext } from \"../context/theme-context\";\n\nclass TicketControl extends React.Component {\n\n  ...\n\n  ...\n\n  render(){\n    // We access the context value.\n    let theme = this.context;\n  \n    // We create our button styles.\n    const buttonStyles = { \n      backgroundColor: theme.buttonBackground, \n      color:'theme'.textColor, \n    }\n\n    let currentlyVisibleState = null;\n    let buttonText = null; \n\n    if (this.state.editing ) {      \n      ...\n    } else if (this.state.selectedTicket != null) {\n      ...\n    } else if (this.state.formVisibleOnPage) {\n      ...\n    } else {\n      ...\n    }\n\n    return (\n      <React.Fragment>\n        {currentlyVisibleState}\n        {/* We've added a new style attribute to the button below. */}\n        <button style={buttonStyles} onClick={this.handleClick}>{buttonText}</button> \n      </React.Fragment>\n    );\n  }\n\n}\n\n// We've created a contextType property and set it to ThemeContext.\nTicketControl.contextType = ThemeContext;\n\nexport default TicketControl;\n")),(0,a.kt)("p",null,"First we start by importing ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeContext")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"theme-context.js"),". Anytime we want to create a provider or consumer, we'll need to use ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeContext"),". "),(0,a.kt)("p",null,"Then next thing we do is add a new property to the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," class called ",(0,a.kt)("inlineCode",{parentName:"p"},"contextType")," and set its value to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeContext"),". This creates a context consumer for our ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," class that is connected to the provider component in ",(0,a.kt)("inlineCode",{parentName:"p"},"App.js"),". Notice that we do this below the class declaration:"),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'...\nimport { ThemeContext } from "../context/theme-context";\n\nclass TicketControl extends React.Component {\n  ...\n  ...\n}\n\n// We create the new contextType property below the class declaration.\nTicketControl.contextType = ThemeContext; \n\nexport default TicketControl;\n')),(0,a.kt)("p",null,"Once we have the consumer set up via the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl.contextType")," property, we can then access the context value from anywhere within the class by invoking ",(0,a.kt)("inlineCode",{parentName:"p"},"this.context"),"."),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," component, we only need to use the theme context's value to create our button styles, so we can apply them as an inline style to our ",(0,a.kt)("inlineCode",{parentName:"p"},"<button>")," element. All of this code is in the ",(0,a.kt)("inlineCode",{parentName:"p"},"render()")," method of the component:"),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\nimport { ThemeContext } from \"../context/theme-context\";\n\nclass TicketControl extends React.Component {\n  ...\n  ...\n\n  render(){\n    let theme = this.context;\n  \n    const buttonStyles = { \n      backgroundColor: theme.buttonBackground, \n      color:'theme'.textColor, \n    }\n    \n    ...\n\n    return (\n      <React.Fragment>\n        {currentlyVisibleState}\n        <button style={buttonStyles} onClick={this.handleClick}>{buttonText}</button> \n      </React.Fragment>\n    );\n  }\n\n}\n\nTicketControl.contextType = ThemeContext;\n\nexport default TicketControl;\n")),(0,a.kt)("h3",{id:"using-the-usecontext-hook-in-reusableform-and-ticketdetail"},"Using the ",(0,a.kt)("inlineCode",{parentName:"h3"},"useContext()")," hook in ",(0,a.kt)("inlineCode",{parentName:"h3"},"ReusableForm")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"TicketDetail")),(0,a.kt)("p",null,"Next, we'll learn how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useContext()")," hook to create a context consumer. Take note that consumer components and the ",(0,a.kt)("inlineCode",{parentName:"p"},"useContext()")," hook should only be used with function components. "),(0,a.kt)("p",null,"As hooks tend to do, the ",(0,a.kt)("inlineCode",{parentName:"p"},"useContext()")," hook greatly simplifies how to set up a consumer in a function component. We'll update the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketDetail")," component first. Let's take a look at the new code, and then discuss the implementation details."),(0,a.kt)("p",null,"Here's the new code:"),(0,a.kt)("div",{class:"filename"},"src/components/TicketDetail.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// We import the useContext hook.\nimport React, { useContext } from "react";\nimport PropTypes from "prop-types";\n// We import ThemeContext.\nimport { ThemeContext } from "../context/theme-context";\n\nfunction TicketDetail(props){\n  const { ticket, onClickingDelete, onClickingEdit } = props; \n  \n  // We create our consumer.\n  const theme = useContext(ThemeContext);\n\n  // We create our styles.\n  const styles = { \n    backgroundColor: theme.buttonBackground, \n    color:\'theme\'.textColor \n  }\n  \n  return (\n    <React.Fragment>\n      <h2>Ticket Detail</h2>\n      <h3>{ticket.location} - {ticket.names}</h3>\n      <p><em>{ticket.issue}</em></p>\n      {/* We apply our styles to each button. */}\n      <button style={styles} onClick={onClickingEdit}>Update Ticket</button>\n      <button style={styles} onClick={()=> onClickingDelete(ticket.id)}>Close Ticket</button>\n      <hr/>\n    </React.Fragment>\n  );\n}\n\nTicketDetail.propTypes = {\n  ...\n};\n\nexport default TicketDetail;\n')),(0,a.kt)("p",null,"First we import ",(0,a.kt)("inlineCode",{parentName:"p"},"useContext")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"'react'")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeContext")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"theme-context.js"),"."),(0,a.kt)("p",null,"Then, we call the ",(0,a.kt)("inlineCode",{parentName:"p"},"useContext")," hook:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const theme = useContext(ThemeContext);\n")),(0,a.kt)("p",null,"To get the current provider value returned, all we need to do is provide the context we want to use to the ",(0,a.kt)("inlineCode",{parentName:"p"},"useContext()")," hook as an argument. It's as simple as that! Invoking ",(0,a.kt)("inlineCode",{parentName:"p"},"useContext()")," also creates a consumer that is subscribed to any change in the context provider's value. "),(0,a.kt)("p",null,"The only remaining update we make is creating button styles from the ",(0,a.kt)("inlineCode",{parentName:"p"},"theme")," value and applying them as inline styles to each button. This process is the same as with the ",(0,a.kt)("inlineCode",{parentName:"p"},"ToggleTheme")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," components."),(0,a.kt)("p",null,"Let's update the ",(0,a.kt)("inlineCode",{parentName:"p"},"ReusableForm")," component next. We'll do all of the above steps, along with one additional step: creating form input styles and applying them as inline styles to each form input. We won't step through all of the new code, but there are comments in the code snippet that describe each update, so pay attention to them as you read through the code: "),(0,a.kt)("p",null,"Here's the new code:"),(0,a.kt)("div",{class:"filename"},"src/components/ReusableForm.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// We import useContext and ThemeContext\nimport React, { useContext } from \"react\";\nimport { ThemeContext } from \"../context/theme-context\";\nimport PropTypes from \"prop-types\";\n\nfunction ReusableForm(props) {\n  // We create a ThemeContext consumer and \n  // get access to the provider value.\n  const theme = useContext(ThemeContext);\n\n  // We create button styles.\n  const buttonStyles = { \n    backgroundColor: theme.buttonBackground, \n    color:'theme'.textColor, \n  }\n\n  // We create input styles.\n  const inputStyles = { \n    backgroundColor: theme.inputBackground,\n    color:'theme'.textColor, \n  }\n  \n  return (\n    <React.Fragment>\n      <form onSubmit={props.formSubmissionHandler}>\n      <label>Pair Names:\n          <br/>\n          {/* We add input styles. */}\n          <input\n            style={inputStyles}\n            type='text'\n            name='names' />\n        </label>\n        <br/>\n        <label>Location:\n          <br/>\n          {/* We add input styles. */}\n          <input\n            style={inputStyles}\n            type='text'\n            name='location' />\n        </label>\n        <br/>\n        <label>Describe your issue:\n          <br/>\n          {/* We add input styles. */}\n          <textarea\n            style={inputStyles}\n            name='issue' />\n        </label>\n        <br/>\n        {/* We add button styles. */}\n        <button style={buttonStyles}  type='submit'>{props.buttonText}</button>\n      </form>\n      <hr/>\n    </React.Fragment>\n  );\n}\n\nReusableForm.propTypes = {\n  ...\n};\n\nexport default ReusableForm;\n")),(0,a.kt)("p",null,"At this point the functionality for toggling between a light and a dark theme is complete! Go ahead and run your application and test it out. "),(0,a.kt)("h3",{id:"leveraging-the-default-context-value-for-consumer-error-handling"},"Leveraging the Default Context Value for Consumer Error Handling"),(0,a.kt)("p",null,"We need to remember that we cannot consume context data outside of a provider component. That means if we add a context consumer to a part of our component tree that does not have a provider component upstream from the consumer component, our code will break. We can try this out by moving ",(0,a.kt)("inlineCode",{parentName:"p"},"<TicketControl>")," outside of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<ThemeContext.Prodiver>")," components in ",(0,a.kt)("inlineCode",{parentName:"p"},"App.js"),":"),(0,a.kt)("div",{class:"filename"},"src/components/App.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\n\nfunction App(){\n  ...\n\n  return (\n    <React.Fragment>\n      <ThemeContext.Provider value={theme}>\n        <Header />\n        <ThemeContext.Consumer>\n          {contextTheme => <ToggleTheme theme={contextTheme} toggleTheme={toggleTheme}/>}\n        </ThemeContext.Consumer>\n      </ThemeContext.Provider>\n      {/* We've moved <TicketControl> outside of <ThemeContext.Provider> */}\n      <TicketControl />\n    </React.Fragment>\n  );\n}\n\nexport default App;\n")),(0,a.kt)("p",null,"When we do this, we'll get uncaught console errors similar to this one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Uncaught TypeError: Cannot read properties of undefined (reading 'buttonBackground')\n")),(0,a.kt)("p",null,"There's only one solution to the issue of placing a consumer component outside of a provider component: move either component so that they are connected! In the above example case, the solution is simply to move the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," component back within the ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeContext.Provider")," component. "),(0,a.kt)("p",null,"However, there's two different changes we can make in our code to help us better identify the issue at hand: a good change and a not so good change. We'll cover the not so good change we can make first, which is to give our theme context a default value. This is different from the value that we provide the provider component, which is required. "),(0,a.kt)("p",null,"Here's how we set up a default value for our theme context:"),(0,a.kt)("div",{class:"filename"},"src/context/theme-context.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\n\nexport const themes = {\n  light: {\n    ...\n  },\n  dark: {\n    ...\n  }\n};\n\n// We've passed in themes.light to the React.createContext() method!\nexport const ThemeContext = React.createContext(themes.light);\n")),(0,a.kt)("p",null,"We just need to pass in an argument to the ",(0,a.kt)("inlineCode",{parentName:"p"},"React.createContext()")," method call. When we do that, context consumers will use that value anytime they are located outside of a context provider. "),(0,a.kt)("p",null,"However, this change is not so helpful because our code now silently fails: our buttons and inputs that are in ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketDetail"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"ResuableForm")," will always be set to the light theme, and we'll be left to debug what's going on. "),(0,a.kt)("p",null,"The better change we can make to our code is leaving the default context value as ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," and using it as a signal that our consumer component has been placed outside of the range of a provider component. Let's see how this works. "),(0,a.kt)("p",null,"First, remove the default value from the ",(0,a.kt)("inlineCode",{parentName:"p"},"React.createContext()")," method:"),(0,a.kt)("div",{class:"filename"},"src/context/theme-context.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// We won't be using a default context value.\nexport const ThemeContext = React.createContext();\n")),(0,a.kt)("p",null,"Next, open up the ",(0,a.kt)("inlineCode",{parentName:"p"},"ToggleTheme")," component and add the following if statement:"),(0,a.kt)("div",{class:"filename"},"src/components/ToggleTheme.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport PropTypes from "prop-types";\n\nfunction ToggleTheme(props) {\n  const {theme, toggleTheme} = props;\n\n  // New if statement below!\n  if (!theme) {\n    throw new Error("ThemeContext must be used within a ThemeContext.Provider!");\n  }\n\n  const styles = { \n    ...\n  }\n\n  return (\n    ...\n  );\n}\n\nToggleTheme.propTypes = {\n  ...\n}\n\nexport default ToggleTheme;\n')),(0,a.kt)("p",null,"We've added a conditional that checks if the context value saved in the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"theme")," is falsey, and if so, we throw an new error stating that ",(0,a.kt)("inlineCode",{parentName:"p"},'"ThemeContext must be used within a ThemeContext.Provider!"'),"."),(0,a.kt)("p",null,"Now if we place a theme context consumer outside of the range of the provider component, we'll get loud errors with a clear message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Uncaught Error: ThemeContext must be used within a ThemeContext.Provider!\n")),(0,a.kt)("p",null,"The big takeaway here is that we're leveraging an ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," default context value to our advantage to provide ourselves with better error messages. This may not seem like a big deal in the context of the Help Queue, since we don't have plans to expand the functionality or reuse the components we've created anymore than we already are. However, this sort of error handling can be helpful in a large React application that reuses many of its components and has many contributors to its code base. "),(0,a.kt)("p",null,"The next step is to add the following if statement where ever you access the context provider value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'if (!theme) {\n  throw new Error("ThemeContext must be used within a ThemeContext.Provider!");\n}\n')),(0,a.kt)("p",null,"We won't walk through that process in this lesson, so if you are coding along with these lessons, you'll need to make the relevant updates to ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ReusableForm"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketDetail")," yourself."),(0,a.kt)("p",null,"At this point there's nothing more to do with this Help Queue refactor. In the next lesson, we'll take time to review context best practices, alternatives, and further exploration."),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/react-help-queue-with-context"},(0,a.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Example GitHub Repo for Help Queue with Light/Dark Theme using Context"))))}u.isMDXComponent=!0}}]);