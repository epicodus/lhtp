"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[24685],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),u=r,d=h["".concat(l,".").concat(u)]||h[u]||m[u]||a;return n?o.createElement(d,i(i({ref:t},c),{},{components:n})):o.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"Context Best Practices, Alternatives, and Further Exploration",id:"context_best_practices_alternatives_and_further_exploration",slug:"context_best_practices_alternatives_and_further_exploration",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/10_react-with-apis/0k_context_best_practices_and_alternatives_and_further_exploration.md"},i=void 0,s={unversionedId:"react_part_time/react-with-apis/context_best_practices_alternatives_and_further_exploration",id:"react_part_time/react-with-apis/context_best_practices_alternatives_and_further_exploration",title:"Context Best Practices, Alternatives, and Further Exploration",description:"To wrap-up to the whirlwind of information about context, let's review some of the best practices for using context, the alternatives to context, and a few further exploration opportunities.",source:"@site/docs/react_part_time/10_react-with-apis/0k_context_best_practices_and_alternatives_and_further_exploration.md",sourceDirName:"react_part_time/10_react-with-apis",slug:"/react_part_time/react-with-apis/context_best_practices_alternatives_and_further_exploration",permalink:"/lhtp/react_part_time/react-with-apis/context_best_practices_alternatives_and_further_exploration",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Context Best Practices, Alternatives, and Further Exploration",id:"context_best_practices_alternatives_and_further_exploration",slug:"context_best_practices_alternatives_and_further_exploration",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/10_react-with-apis/0k_context_best_practices_and_alternatives_and_further_exploration.md"},sidebar:"react_part_time",previous:{title:"Help Queue: Adding Context Consumers and Error Handling",permalink:"/lhtp/react_part_time/react-with-apis/help_queue_adding_context_consumers_and_error_handling"},next:{title:"Pitching Your Capstone",permalink:"/lhtp/react_part_time/react-with-apis/pitching_your_capstone"}},l={},p=[{value:"Best Practices with Context",id:"best-practices-with-context",level:2},{value:"The Alternatives to Context",id:"the-alternatives-to-context",level:2},{value:"Further Exploration with Context",id:"further-exploration-with-context",level:2}],c={toc:p},h="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To wrap-up to the whirlwind of information about context, let's review some of the best practices for using context, the alternatives to context, and a few further exploration opportunities."),(0,r.kt)("h2",{id:"best-practices-with-context"},"Best Practices with Context"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. You can and should have multiple context providers for different state that needs to be disseminated.")," For example, if we wanted to disseminate the current user and the color theme in the Help Queue, those should be in two separate contexts."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Locate your provider as close as possible to the consumer components.")," This is a general best practice that may not be possible in some cases. For example, when your consumer components are nested in your component tree and they are on different branches, it often will not be possible to locate your context provider that close to any consumer components. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Make sure that only the components that need the context data, have it.")," You shouldn't make a component a consumer if it doesn't absolutely need to. Keep in mind that anytime the context provider's value changes, all components that consume that context value will re-render. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4. Use context judiciously.")," Context should be the last tool you reach for, before prop drilling, lifting state up, and composition. Using context in components makes them harder to reuse. How so? Because any consumer component needs to be located downstream of a provider component. So, before you use context, ask yourself if the data that you need to disseminate is really needed on a global or wide scale. Also, before reaching for context, first try using props and composing your components to make passing props easier."),(0,r.kt)("h2",{id:"the-alternatives-to-context"},"The Alternatives to Context"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"It's important to understand that the Help Queue doesn't need context to have a light and dark theme that we can toggle in between. Why? The Help Queue is small \u2014 with only 10 components, and 4 of those that need the theme data \u2014 and we're not planning on expanding its functionality."),(0,r.kt)("p",null,"What we should do instead is use two big alternatives to context to handle transferring data between components: props and component composition. At this point, we should be well familiar with how props work, but component composition is more nebulous. This is by nature: composition really depends on the needs and structure of your application!"),(0,r.kt)("p",null,"However to make component composition more concrete, we've created a version of Help Queue that has a toggleable light and dark theme and that uses only props and composition to achieve this. You can find it on this branch:"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/react-help-queue-with-context/tree/02_with_props_and_composition"},(0,r.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  GitHub Repo for Help Queue with Light/Dark Theme using Props and Composition"))),(0,r.kt)("p",null,"We won't walk through all of the changes made in the above branch. Instead, we'll focus on understanding how we've updated the Help Queue to use component composition in ",(0,r.kt)("inlineCode",{parentName:"p"},"TicketControl")," to lower the amount of props we have to pass down from the ",(0,r.kt)("inlineCode",{parentName:"p"},"TicketControl")," component. The main updates have to do with how we render two sets of components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NewTicketForm")," which renders ",(0,r.kt)("inlineCode",{parentName:"li"},"ReusableForm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EditTicketForm")," which renders ",(0,r.kt)("inlineCode",{parentName:"li"},"ReusableForm"))),(0,r.kt)("p",null,"Previously this was the order in which the above components are rendered:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TicketControl")," imports, passes props to, and renders ",(0,r.kt)("inlineCode",{parentName:"li"},"NewTicketForm"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"NewTicketForm")," imports, passes props to, and renders ",(0,r.kt)("inlineCode",{parentName:"li"},"ReusableForm"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TicketControl")," imports, passes props to, and renders ",(0,r.kt)("inlineCode",{parentName:"li"},"EditTicketForm"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"EditTicketForm")," imports, passes props to, and renders ",(0,r.kt)("inlineCode",{parentName:"li"},"ReusableForm"),".")),(0,r.kt)("p",null,"With the update, we've decided to compose our components and their props in ",(0,r.kt)("inlineCode",{parentName:"p"},"TicketControl"),". Now this is the order in which the components are rendered:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TicketControl")," imports, passes props to, and renders ",(0,r.kt)("inlineCode",{parentName:"li"},"NewTicketForm")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ReusableForm"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TicketControl")," imports, passes props to, and renders ",(0,r.kt)("inlineCode",{parentName:"li"},"EditTicketForm")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ReusableForm"),".")),(0,r.kt)("p",null,"Let's look at just one example: how we compose ",(0,r.kt)("inlineCode",{parentName:"p"},"EditTicketForm")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ReusableForm")," to render both components from ",(0,r.kt)("inlineCode",{parentName:"p"},"TicketControl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"...\nimport EditTicketForm from './EditTicketForm';\nimport ReusableForm from './ReusableForm';\n\nclass TicketControl extends React.Component {\n  ...\n\n  ...\n\n  render(){\n    let theme = this.props.theme;\n\n    const buttonStyles = { \n      backgroundColor: theme.buttonBackground, \n      color:'theme'.textColor, \n    }\n\n    let currentlyVisibleState = null;\n    let buttonText = null; \n    \n    if (this.state.editing ) {      \n      // new code below!\n      currentlyVisibleState = (\n        <EditTicketForm>\n          <ReusableForm \n            handleFormSubmission={this.handleEditingTicketInList}\n            buttonText=\"Update Ticket\" \n            theme={theme}/>\n        </EditTicketForm>\n      );\n      buttonText = \"Return to Ticket List\";\n    } else if (this.state.selectedTicket != null) {\n      ...\n    } else if (this.state.formVisibleOnPage) {\n      ...\n    } else {\n      ...\n    }\n\n    return (\n      <React.Fragment>\n        {currentlyVisibleState}\n        <button style={buttonStyles}  onClick={this.handleClick}>{buttonText}</button> \n      </React.Fragment>\n    );\n  }\n}\n\n...\n\nexport default TicketControl;\n")),(0,r.kt)("p",null,"Notice in the above code snippet that we render both ",(0,r.kt)("inlineCode",{parentName:"p"},"EditTicketForm")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ReusableForm")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"TicketControl")," component by composing them together and saving them in the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"currentlyVisibleState"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'currentlyVisibleState = (\n  <EditTicketForm>\n    <ReusableForm \n      handleFormSubmission={this.handleEditingTicketInList}\n      buttonText="Update Ticket" \n      theme={theme}/>\n  </EditTicketForm>\n);\n')),(0,r.kt)("p",null,"This is called ",(0,r.kt)("strong",{parentName:"p"},"inversion of control"),", where a component higher up in the tree composes multiple components and either renders them, or saves them in a variable to pass down as a prop to other components. This improves the burden of prop drilling by making it so that we don't have to pass props down through as many levels of components, or so that we can pass fewer props down. "),(0,r.kt)("p",null,'More specifically, the "inversion of control" here is giving a root component like ',(0,r.kt)("inlineCode",{parentName:"p"},"TicketControl")," more control, rather than leaving component composition to components further down the component tree. ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html#before-you-use-context"},"The React docs on context")," explains that this is not always the best choice:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Such inversion, however, isn\u2019t the right choice in every case; moving more complexity higher in the tree makes those higher-level components more complicated and forces the lower-level components to be more flexible than you may want.")),(0,r.kt)("p",null,"As it goes, component composition is always subjective and depends on the needs of your application. In any case, always give component composition a try before you reach for context."),(0,r.kt)("p",null,"Hopefully this abbreviated example with the Help Queue gives you a better idea of what component composition can look like and how it can ease prop drilling. To see the full context of the above example, check out the GitHub repo we linked to earlier in this lesson. There's a couple things to note about the GitHub repo:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The link takes you to a branch of the Help Queue app called ",(0,r.kt)("inlineCode",{parentName:"li"},"02_with_props_and_composition")," that implements a light and dark theme with props and component composition. There is no context used in that branch!"),(0,r.kt)("li",{parentName:"ul"},"Note that you'll have to learn about the ",(0,r.kt)("inlineCode",{parentName:"li"},"children")," props in ",(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/composition-vs-inheritance.html#containment"},"the React docs on composition and containment")," to make sense of the changes made to ",(0,r.kt)("inlineCode",{parentName:"li"},"NewTicketForm")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"EditTicketForm"),".")),(0,r.kt)("p",null,"For another example of component composition, check out the section of the React docs on context that's titled ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html#before-you-use-context"},"Before You Use Context"),". "),(0,r.kt)("h2",{id:"further-exploration-with-context"},"Further Exploration with Context"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"There a few further exploration opportunities to discuss:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. For more examples and discussion, check out the docs.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/context.html"},"Context")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-reference.html#usecontext"},"The ",(0,r.kt)("inlineCode",{parentName:"a"},"useContext")," Hook"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. To learn how to work with multiple contexts, check out the docs.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/context.html#consuming-multiple-contexts"},"Consuming Multiple Contexts"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Explore how to implement a custom provider component and consumer hook with context to DRY up your code.")," Kent C. Dodds has a great article called ",(0,r.kt)("a",{parentName:"p",href:"https://kentcdodds.com/blog/how-to-use-react-context-effectively"},'"How to Use React Context Effectively"')," that shows how to combine the context state management with a custom provider component and abstracts the context consumer logic into a custom hook. ",(0,r.kt)("a",{parentName:"p",href:"https://kentcdodds.com/about"},"Kent C. Dodds")," is a computer programming educator and has many great articles about React. "),(0,r.kt)("p",null,"Once you've read the article, try implementing a custom provider component and consumer hook  in the Help Queue or another project."),(0,r.kt)("p",null,"Optionally, check out the repo branch linked below that demonstrates how to implement the concepts from Kent C. Dodds' article with a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"useTheme()")," hook and a ",(0,r.kt)("inlineCode",{parentName:"p"},"ThemeProvider")," component."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/react-help-queue-with-context/tree/03_custom_consumer_hook_and_provider"},(0,r.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  GitHub Repo for Help Queue with Light/Dark Theme using Custom Provider Component and Consumer Hook"))))}m.isMDXComponent=!0}}]);