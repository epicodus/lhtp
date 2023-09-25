"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[54112],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>_});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,_=p["".concat(l,".").concat(d)]||p[d]||h[d]||i;return r?o.createElement(_,n(n({ref:t},c),{},{components:r})):o.createElement(_,n({ref:t},c))}));function _(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,n=new Array(i);n[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,n[1]=s;for(var u=2;u<i;u++)n[u]=r[u];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2743:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=r(87462),a=(r(67294),r(3905));const i={title:"1. Firestore Survey, Quiz of Choice (Three-Day Project) - Part 3",id:"firestore_survey_quiz_of_choice_three_day_project___part_3",slug:"firestore_survey_quiz_of_choice_three_day_project___part_3",hide_table_of_contents:!0,sidebar_position:25,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/8_react-with-nosql/1a_classwork_firestore_survey_quiz_of_choice_3.md"},n=void 0,s={unversionedId:"react_part_time/react-with-nosql/firestore_survey_quiz_of_choice_three_day_project___part_3",id:"react_part_time/react-with-nosql/firestore_survey_quiz_of_choice_three_day_project___part_3",title:"1. Firestore Survey, Quiz of Choice (Three-Day Project) - Part 3",description:"Goals: Use Firestore as a data solution for a React application. Use hooks to manage state and component lifecycle events. Going forward, you should not use class components.",source:"@site/docs/react_part_time/8_react-with-nosql/1a_classwork_firestore_survey_quiz_of_choice_3.md",sourceDirName:"react_part_time/8_react-with-nosql",slug:"/react_part_time/react-with-nosql/firestore_survey_quiz_of_choice_three_day_project___part_3",permalink:"/lhtp/react_part_time/react-with-nosql/firestore_survey_quiz_of_choice_three_day_project___part_3",draft:!1,tags:[],version:"current",sidebarPosition:25,frontMatter:{title:"1. Firestore Survey, Quiz of Choice (Three-Day Project) - Part 3",id:"firestore_survey_quiz_of_choice_three_day_project___part_3",slug:"firestore_survey_quiz_of_choice_three_day_project___part_3",hide_table_of_contents:!0,sidebar_position:25,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/8_react-with-nosql/1a_classwork_firestore_survey_quiz_of_choice_3.md"},sidebar:"react_part_time",previous:{title:"1. Firestore Survey, Quiz of Choice (Three-Day Project) - Part 2",permalink:"/lhtp/react_part_time/react-with-nosql/firestore_survey_quiz_of_choice_three_day_project___part_2"},next:{title:"1. Technical Interview Practice: NoSQL",permalink:"/lhtp/react_part_time/react-with-nosql/technical_interview_practice_nosql"}},l={},u=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Help Queue with Firestore",id:"help-queue-with-firestore",level:3},{value:"Integrating Firestore with React Project",id:"integrating-firestore-with-react-project",level:3},{value:"Prompt #1: Survey or Quiz of Choice",id:"prompt-1-survey-or-quiz-of-choice",level:4},{value:"Prompt #2: Memory Lane",id:"prompt-2-memory-lane",level:4},{value:"Peer Code Review",id:"peer-code-review",level:2}],c={toc:u},p="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Goals:")," Use Firestore as a data solution for a React application. Use hooks to manage state and component lifecycle events. ",(0,a.kt)("strong",{parentName:"p"},"Going forward, you should not use class components."),"   "),(0,a.kt)("p",null,"Starting with this class session, students will pick a project to work on for a multi-day project."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For full-time students, you can choose between a two-day or week-long project. If you choose to work on a two-day project, you will start a different two-day project on Wednesday."),(0,a.kt)("li",{parentName:"ul"},"For part-time students, you can choose to do a week-long project, one for each of the course section weeks, or one project for the entire course section. If you choose to work on a week-long project, you will start a different week-long project at the start of React with NoSQL Part 2.")),(0,a.kt)("p",null,"Check in with your instructor if you have any questions."),(0,a.kt)("h2",{id:"warm-up"},"Warm Up"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What is the difference between Firebase and Firestore? (You may need to do additional research to answer this question.)"),(0,a.kt)("li",{parentName:"ul"},"What is the CAP theorem? What does each letter represent?"),(0,a.kt)("li",{parentName:"ul"},"What are some of the ways a NoSQL database differs from a SQL database?"),(0,a.kt)("li",{parentName:"ul"},"What are hooks? What pain points do hooks solve for React development?")),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"help-queue-with-firestore"},"Help Queue with Firestore"),(0,a.kt)("p",null,"Work through the weekend homework and update the Help Queue application to use hooks and Firestore as a data solution."),(0,a.kt)("h3",{id:"integrating-firestore-with-react-project"},"Integrating Firestore with React Project"),(0,a.kt)("p",null,"What you work on is ultimately up to you. We will provide two options but you may choose to work on another project as long as the focus of the project is using React hooks with Firebase services (like a Firestore database and authentication)."),(0,a.kt)("h4",{id:"prompt-1-survey-or-quiz-of-choice"},"Prompt #1: Survey or Quiz of Choice"),(0,a.kt)("p",null,"Create an application that allows a user to complete a quiz or survey. Users should be able to create new quizzes or surveys while other users should have the ability to fill out those surveys. To make this prompt a bit easier, you can have a set number of questions for each quiz or survey \u2014 that way, the surveys don't need to be dynamically rendered. (For instance, the form could have fields for ",(0,a.kt)("inlineCode",{parentName:"p"},"response1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"response2"),", and so on.)"),(0,a.kt)("p",null,"Try implementing the following features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A user should be able to create, update and delete a survey. All surveys should be stored in the database."),(0,a.kt)("li",{parentName:"ul"},"A user should be able to fill out and submit surveys. Survey results should be submitted to the database. (A survey result can be associated to a survey by mimicking a one-to-many relationship.)"),(0,a.kt)("li",{parentName:"ul"},"A user should be able to sign up, sign in, and sign out."),(0,a.kt)("li",{parentName:"ul"},"A user should have their own dashboard which lists the surveys they've created."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bonus"),": A user should be able to see the combined data on a survey in their dashboard. For instance, if a survey provides a 1-5 rating, return an average rating for all surveys."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Challenging"),": Try using ",(0,a.kt)("a",{parentName:"li",href:"https://d3js.org/"},"a library like D3")," to visualize data from surveys. This is only recommended if you have time to spare, interest in data visualization, and are doing one project for the entire course section.")),(0,a.kt)("h4",{id:"prompt-2-memory-lane"},"Prompt #2: Memory Lane"),(0,a.kt)("p",null,"Create an application that stores our memories so we don't have to store them ourselves anymore! Implementation is up to you \u2014 it could be a surreal exploration of dreams and the subconscious \u2014 or it could be a more practical collection of technical information you've learned and want to store in flashcard form."),(0,a.kt)("p",null,"Try adding the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Full CRUD functionality with hooks and Firestore."),(0,a.kt)("li",{parentName:"ul"},"User authentication and basic authorization."),(0,a.kt)("li",{parentName:"ul"},"Routing with react-router."),(0,a.kt)("li",{parentName:"ul"},"Ability to associate memories with specific users.")),(0,a.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Application correctly uses Firestore for data storage."),(0,a.kt)("li",{parentName:"ul"},"Application uses hooks for component state and lifecycle events; there are no class components."),(0,a.kt)("li",{parentName:"ul"},"Data is organized in a logical manner."),(0,a.kt)("li",{parentName:"ul"},"All previous objectives are met.")))}h.isMDXComponent=!0}}]);