"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[19616],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},44685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"Action Constants",id:"action_constants",slug:"action_constants",hide_table_of_contents:!0,sidebar_position:24,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2c_action_constants.md"},i=void 0,s={unversionedId:"react/react-with-redux/action_constants",id:"react/react-with-redux/action_constants",title:"Action Constants",description:"In the last lesson, we learned how to use action creators to clean up our code. In this lesson, we'll make another small refactor to use action constants.",source:"@site/docs/react/4_react-with-redux/2c_action_constants.md",sourceDirName:"react/4_react-with-redux",slug:"/react/react-with-redux/action_constants",permalink:"/react/react-with-redux/action_constants",draft:!1,tags:[],version:"current",sidebarPosition:24,frontMatter:{title:"Action Constants",id:"action_constants",slug:"action_constants",hide_table_of_contents:!0,sidebar_position:24,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2c_action_constants.md"},sidebar:"react",previous:{title:"Action Creators",permalink:"/react/react-with-redux/action_creators"},next:{title:"Introduction to date-fns",permalink:"/react/react-with-redux/introduction_to_date_fns"}},l={},c=[{value:"Organizing Constants in a React Application",id:"organizing-constants-in-a-react-application",level:3},{value:"Importing Constant Files",id:"importing-constant-files",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the last lesson, we learned how to use action creators to clean up our code. In this lesson, we'll make another small refactor to use action constants."),(0,o.kt)("p",null,"So far, all of our action types have been strings. For instance, we have an action type of ",(0,o.kt)("inlineCode",{parentName:"p"},"'TOGGLE_FORM'")," that determines whether a form should be toggled in our application."),(0,o.kt)("p",null,"However, in larger applications (or even smaller ones), using strings for action types can make it harder to track bugs."),(0,o.kt)("p",null,"Try copying the following code in the browser or running it in VS Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const actionConditional = (condition) => {\n  if (condition === 'TOGGLE_FORM') {\n    return \"Form toggled!\"\n  } else {\n    return \"Nothing happened :(\"\n  }\n}\n\nactionConditional('TOGLE_FORM')\n")),(0,o.kt)("p",null,"Our function will work properly but it won't return the result we expect. That's because there's an error in our code. We've passed the string ",(0,o.kt)("inlineCode",{parentName:"p"},"'TOGLE_FORM'")," into our function instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"'TOGGLE_FORM'"),". Because of this misspelling, our function will run correctly but the correct conditional will not be triggered."),(0,o.kt)("p",null,"We've all introduced typos in our code \u2014 and sometimes they can be difficult to spot, especially when they don't throw an error."),(0,o.kt)("p",null,"Wouldn't it be nice if the typo above did throw an error?"),(0,o.kt)("p",null,"Well, we can avoid these kinds of typos (or at least use JavaScript's error handling to avoid them) by saving our strings in constants."),(0,o.kt)("p",null,"Now try the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const TOGGLE_FORM = \'TOGGLE_FORM\';\n\nconst actionConditional = (condition) => {\n  if (condition === TOGGLE_FORM) {\n    return "Form toggled!"\n  } else {\n    return "Nothing happened :("\n  }\n}\n\nactionConditional(TOGLE_FORM);\n')),(0,o.kt)("p",null,"In the example above, we have the exact same typo. The difference, however, is that we've saved the ",(0,o.kt)("inlineCode",{parentName:"p"},"'TOGGLE_FORM")," string in a constant. Now, if we misspell the constant, we'll get the following error along with the line number where the error occurred:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Uncaught ReferenceError: TOGLE_FORM is not defined\n")),(0,o.kt)("p",null,"This could save us a lot of trouble going forward. It's better for our code to fail and throw us a specific error than to have a silent bug that breaks everything for a seemingly inexplicable reason \u2014 at least until we hunt the error down."),(0,o.kt)("h3",{id:"organizing-constants-in-a-react-application"},"Organizing Constants in a React Application"),(0,o.kt)("p",null,"It's typical to save constants in a separate file, especially in a larger application that has many constants. We'll do the same in our application."),(0,o.kt)("p",null,"React and Redux aren't opinionated about where we store these constants. Since we'll only be using them in our action creators \u2014 and because these specific constants will define action types \u2014 we will store them in our ",(0,o.kt)("inlineCode",{parentName:"p"},"actions")," directory in a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"ActionTypes.js"),". If we were to create other constants in our application that aren't related to action types, they wouldn't belong here."),(0,o.kt)("div",{class:"filename"},"src/actions/ActionTypes.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export const ADD_TICKET = 'ADD_TICKET';\nexport const DELETE_TICKET = 'DELETE_TICKET';\nexport const TOGGLE_FORM = 'TOGGLE_FORM';\n")),(0,o.kt)("p",null,"We will export these all individually. Going forward, any time you add an action type to your applications, make sure to use constants."),(0,o.kt)("h3",{id:"importing-constant-files"},"Importing Constant Files"),(0,o.kt)("p",null,"Finally, we need to update our tests, reducers and action creators to use our constants instead of strings for action types."),(0,o.kt)("p",null,"We'll demonstrate how this looks in one file \u2014 our ",(0,o.kt)("inlineCode",{parentName:"p"},"form-visible-reducer.js")," \u2014 because this file will have the fewest changes. The process will be exactly the same for all other files \u2014 and you can do a find and replace to ensure all action types have been updated correctly."),(0,o.kt)("div",{class:"filename"},"reducers/form-visible-reducer.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as c from './../actions/ActionTypes';\n\nconst reducer = (state = false, action) => {\n  switch (action.type) {\n  case c.TOGGLE_FORM:\n    return !state;\n  default:\n    return state;\n  }\n};\n\nexport default reducer;\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"First, we store our constants in the ",(0,o.kt)("inlineCode",{parentName:"p"},"c")," variable. We could call this anything but ",(0,o.kt)("inlineCode",{parentName:"p"},"c")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"constants")," is standard convention. We are using ",(0,o.kt)("inlineCode",{parentName:"p"},"c")," for brevity.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Next, we need to update the action type itself. Our action type will now be written as ",(0,o.kt)("inlineCode",{parentName:"p"},"c.TOGGLE_FORM")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"'TOGGLE_FORM'"),"."))),(0,o.kt)("p",null,"As expected, this will cause all tests related to toggling a form to fail."),(0,o.kt)("p",null,"Go ahead and follow the steps above for all files that include the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reducers;"),(0,o.kt)("li",{parentName:"ul"},"Tests for reducers;"),(0,o.kt)("li",{parentName:"ul"},"Action creators;"),(0,o.kt)("li",{parentName:"ul"},"Tests for action creators.")),(0,o.kt)("p",null,"Note that the relative path to the ",(0,o.kt)("inlineCode",{parentName:"p"},"constants")," directory will vary depending on the file where you are adding an import statement. At this point, you should have a clear sense of how relative paths work and should be able to do this on your own."),(0,o.kt)("p",null,"Finally, run your tests and make sure they work, check that your project still compiles, and run the application and verify all functionality is working correctly."),(0,o.kt)("p",null,'This is the kind of refactor that you might be asked to do as a junior developer. Often, new developers take on "code janitor" roles as they learn a codebase. This means cleaning up code that more experienced developers might not have the time to deal with. This kind of code cleanup is absolutely essential and can be a great way to learn a codebase and start making contributions to a team immediately.'),(0,o.kt)("p",null,"In this lesson, we learned how to use constants for our action types. There are multiple benefits of this \u2014 the biggest benefit is making our application more robust and easier to debug. Using constants can also help us make our intentions clearer to other developers \u2014 and make our code easier to read."))}d.isMDXComponent=!0}}]);