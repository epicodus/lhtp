"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[54367],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var o=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),h=i,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||n;return a?o.createElement(m,r(r({ref:t},c),{},{components:a})):o.createElement(m,r({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var u=2;u<n;u++)r[u]=a[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},21345:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var o=a(87462),i=(a(67294),a(3905));const n={title:"Building a React Application with Redux From Scratch",id:"building_a_react_application_with_redux_from_scratch",slug:"building_a_react_application_with_redux_from_scratch",hide_table_of_contents:!0,sidebar_position:23,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/1d_building_a_react_redux_application_ground_up.md"},r=void 0,l={unversionedId:"react_part_time_evening/react-with-redux/building_a_react_application_with_redux_from_scratch",id:"react_part_time_evening/react-with-redux/building_a_react_application_with_redux_from_scratch",title:"Building a React Application with Redux From Scratch",description:"So far, we've focused on refactoring our React Help Queue application to incorporate Redux. However, what should we do if we want to build a React application with Redux from the ground up?",source:"@site/docs/react_part_time_evening/6_react-with-redux/1d_building_a_react_redux_application_ground_up.md",sourceDirName:"react_part_time_evening/6_react-with-redux",slug:"/react_part_time_evening/react-with-redux/building_a_react_application_with_redux_from_scratch",permalink:"/react_part_time_evening/react-with-redux/building_a_react_application_with_redux_from_scratch",draft:!1,tags:[],version:"current",sidebarPosition:23,frontMatter:{title:"Building a React Application with Redux From Scratch",id:"building_a_react_application_with_redux_from_scratch",slug:"building_a_react_application_with_redux_from_scratch",hide_table_of_contents:!0,sidebar_position:23,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/1d_building_a_react_redux_application_ground_up.md"},sidebar:"react_part_time_evening",previous:{title:"Forum, Word Puzzle, Tic Tac Toe (Multi-Day Project) (day 2)",permalink:"/react_part_time_evening/react-with-redux/forum_word_puzzle_tic_tac_toe_multi_day_project_day_2"},next:{title:"Technical Interview Practice: React and Redux",permalink:"/react_part_time_evening/react-with-redux/technical_interview_practice_react_and_redux"}},s={},u=[{value:"1. Plan Your Component Tree",id:"1-plan-your-component-tree",level:3},{value:"2. Build a Static Site",id:"2-build-a-static-site",level:3},{value:"3. Time to Think About State!",id:"3-time-to-think-about-state",level:3},{value:"4. Test and Write Reducers",id:"4-test-and-write-reducers",level:3},{value:"5. Add Redux to Application",id:"5-add-redux-to-application",level:3},{value:"6. Be Ready to Debug... Don&#39;t Pull Your Hair Out!",id:"6-be-ready-to-debug-dont-pull-your-hair-out",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"So far, we've focused on refactoring our React Help Queue application to incorporate Redux. However, what should we do if we want to build a React application with Redux from the ground up?"),(0,i.kt)("p",null,"Well, that's a bit of a trick question. Over the last several sections, we've actually built out our Help Queue following the best practices we should use to build a React-Redux application from scratch. In this lesson, we'll go over those best practices so you can apply them for this section's projects."),(0,i.kt)("p",null,"Before we start, a quick reminder: building React applications that use Redux is hard. You've just started learning Redux \u2014 so be patient with yourself. Like many other topics we cover at Epicodus, we have to cover these concepts quickly to give you as much breadth in your knowledge as possible during your time as a student. It's totally normal if you need a lot more practice with React and Redux before it really clicks. That means it might not fully click until ",(0,i.kt)("em",{parentName:"p"},"after")," you graduate from Epicodus. That's okay. Like we said, this stuff is hard."),(0,i.kt)("h3",{id:"1-plan-your-component-tree"},"1. Plan Your Component Tree"),(0,i.kt)("p",null,"You might be really excited to start writing and testing reducers but that's not the first thing you'll do when you build an application from scratch. We should always start by planning our component tree and drawing a diagram. We discussed this in React Fundamentals with ",(0,i.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/react/react-fundamentals/planning-a-react-application"},"Planning a React Application"),". In that lesson, we provided a link to an article in the official React docs called ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/thinking-in-react.html"},"Thinking in React"),". That article doesn't even mention Redux \u2014 and yet we should follow ",(0,i.kt)("em",{parentName:"p"},"all")," of the steps from that article ",(0,i.kt)("em",{parentName:"p"},"before")," we start incorporating Redux. If you're feeling a bit hazy about that article, we recommend reading it again."),(0,i.kt)("p",null,"In Intermediate JavaScript, we really focused on writing (and testing) business logic first before building a UI. For that reason, the approach we should take with a React/Redux application might still feel a bit counter-intuitive. Instead of writing and testing our business logic first (the reducers), we need to start with the UI."),(0,i.kt)("h3",{id:"2-build-a-static-site"},"2. Build a Static Site"),(0,i.kt)("p",null,"This is exactly what we did in React Fundamentals. Once we planned the basic structure of our application, we built out a static site that included all of our components. By the way, this ",(0,i.kt)("em",{parentName:"p"},"doesn't")," mean graphic design and making it look pretty. Don't worry about adding lots of CSS and content. This should be a bare-bones static site. "),(0,i.kt)("p",null,"By the time you're done, it should include all the components and just enough content so you can see that the components are all working together correctly. If your site looks nice, you probably spent too much time on this step! This would also be a good time to add props and prop types. However, if you still aren't sure how your props will look yet because you haven't thought about state, it's okay to wait until the next section."),(0,i.kt)("h3",{id:"3-time-to-think-about-state"},"3. Time to Think About State!"),(0,i.kt)("p",null,"Once you've completely built out a static site, you're ready to think about state. In ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/thinking-in-react.html"},"Thinking in React"),", this step is described as ",(0,i.kt)("em",{parentName:"p"},"Identify The Minimal (but complete) Representation Of UI State"),". The key words here are ",(0,i.kt)("em",{parentName:"p"},"minimal")," and ",(0,i.kt)("em",{parentName:"p"},"complete"),". You don't want to clutter your application with too much state. Also, you want to have a good plan for all the state your application needs. It's no fun to realize later that you've forgotten an essential piece of state \u2014 only to discover that adding it in results in a painful refactor."),(0,i.kt)("p",null,"At this point, take the time to write out the state your application needs. Be thorough. "),(0,i.kt)("p",null,"For instance, one of the project prompts in this section is the word guessing game we call Word Puzzle. For the Word Puzzle game, players are supposed to guess a word, letter by letter, within about 6 or so guesses. For the UI, the word is hidden, but we tell the player how many letters are in it. Each time the player guesses a correct letter, the UI is updated with that correct letter."),(0,i.kt)("p",null,"For Word Puzzle, it's not enough to just write ",(0,i.kt)("em",{parentName:"p"},"add letters to game board"),". There's a lot more to the UI than that. Here are a few steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generate a word."),(0,i.kt)("li",{parentName:"ul"},"Generate blanks (or spaces or lines) based on the number of letters in the word."),(0,i.kt)("li",{parentName:"ul"},"If a player guesses correctly, fill in the blanks that should be that letter."),(0,i.kt)("li",{parentName:"ul"},"If a player guesses incorrectly, subtract one from the number of available guesses.")),(0,i.kt)("p",null,"Next, we need to differentiate between application state and local state. Generally, if we want to follow best practices closely, we'd let React handle local state and we'd let Redux handle application state. However, in this section we encourage you to practice using Redux as much as possible. That means it's fine if you use Redux to handle all state including local state. You will still need to think about where that state should live and how it should flow through your application regardless of what kind of state it is."),(0,i.kt)("p",null,"If you haven't added props and prop types, now's the time to do it. You know how the state should look in your application. Don't forget that props are read-only! Even though we haven't added state yet, you should know where the state should live and you should have any ",(0,i.kt)("inlineCode",{parentName:"p"},"Control")," components in place \u2014 and you should also figure out how components will deal with shared state as needed. This might involve some time spent thinking and brainstorming with your pair. With more challenging coding problems, you'll often have to spend extra time with your hands off the keyboard. That means planning and discussing the pros and cons of different approaches."),(0,i.kt)("h3",{id:"4-test-and-write-reducers"},"4. Test and Write Reducers"),(0,i.kt)("p",null,"This is where we diverge from ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/thinking-in-react.html"},"Thinking in React"),". That's because we aren't thinking in React anymore. We're thinking in Redux! At this point, we should've identified all the state our application will need."),(0,i.kt)("p",null,"We can apply our TDD principles to start with the simplest behaviors possible. In the case of our Word Puzzle game, a reducer should be able to take the word that the player is supposed to guess and return some basic information about it. For instance, if we input a six-letter word into a ",(0,i.kt)("inlineCode",{parentName:"p"},"SHOW_BLANKS")," action, the action might start by returning six blanks (or spaces or lines). Gradually, we'd need to think about how our action will handle which blank should be letters. We'd need to write several tests and updates to our action."),(0,i.kt)("p",null,"You may be able to test and write all of your reducers at this point \u2014 or you might realize later that you need to add additional actions. Regardless, you should always start with a test. Test the simplest behavior possible. Repeat this process with another test and the next simplest behavior until the action is fully tested and functioning correctly. Remember, you can apply this process throughout your career to break down a difficult problem into more manageable parts."),(0,i.kt)("p",null,"Don't even think about incorporating Redux into your application until you have some fully tested reducers and actions that you're ready to incorporate. Your tests and reducers should be airtight. If not, your application could end up a total mess \u2014 and it'll be much harder to find what's causing any bugs. "),(0,i.kt)("h3",{id:"5-add-redux-to-application"},"5. Add Redux to Application"),(0,i.kt)("p",null,"Only now are we ready to add Redux to the application. You can follow along with this Help Queue lesson again to walk through each step: ",(0,i.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/react/react-with-redux/adding-redux-to-react-part-2"},"React with Redux: Adding Redux to React: Part 2"),". Also, don't forget to install react and react-redux if they aren't already in your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"$ npm install redux@4.2.0 react-redux@8.0.2\n")),(0,i.kt)("p",null,"While the lesson linked above walks through refactoring the Help Queue project, all the same steps apply to your new application. If you've following all the steps outlined in this lesson, it's the same process that we've used to build out the Help Queue application. In the ",(0,i.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/react/react-with-redux/adding-redux-to-react-part-2"},"React with Redux: Adding Redux to React: Part 2")," lesson, we wire up Redux to the ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl.js")," component. At this point, you likely have a ",(0,i.kt)("inlineCode",{parentName:"p"},"Control")," component or another component that's handling most or all of the state in your application."),(0,i.kt)("h3",{id:"6-be-ready-to-debug-dont-pull-your-hair-out"},"6. Be Ready to Debug... Don't Pull Your Hair Out!"),(0,i.kt)("p",null,"Okay, we're serious about the debugging part. Hopefully you won't get so frustrated that any hair is at risk. But there are a lot of parts working together here so frustration ",(0,i.kt)("em",{parentName:"p"},"is")," common \u2014 especially if things aren't working as you expected. "),(0,i.kt)("p",null,"At the very least, you should feel good about your reducers and actions \u2014 they should be well-tested, after all. More likely, you might run into issues with communication between components. If you haven't familiarized yourself with React Developer Tools yet, this is a good time to practice. Don't forget about this ",(0,i.kt)("a",{parentName:"p",href:"https://react-devtools-tutorial.now.sh/"},"interactive tutorial for using React Developer Tools")," which you've hopefully already checked out at this point. We also recommend checking out the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zalmoxisus/redux-devtools-extension"},"Redux DevTools Extension")," as well."),(0,i.kt)("p",null,"Once again, be patient with yourself if you get to this point and things just... aren't... working. We'll say it again. React with Redux is hard. The experience you'll need to feel fully comfortable with React and Redux is likely considerably more than the time we have to cover it at Epicodus. Don't forget you have your whole career to get better at these tools and any others that you might need to learn for future jobs."))}p.isMDXComponent=!0}}]);