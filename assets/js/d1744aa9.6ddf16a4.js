"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[79348],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||n;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<n;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6876:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var a=r(87462),o=(r(67294),r(3905));const n={title:"Forum, Word Puzzle, Tic Tac Toe (Multi-Day Project) (day 2)",id:"forum-word-puzzle-tic-tac-toe-multi-day-project-day-2",slug:"forum-word-puzzle-tic-tac-toe-multi-day-project-day-2",hide_table_of_contents:!0,sidebar_position:6,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2a_classwork_redux_forum_hangman_tic_tac_toe_three_day_project.md"},i=void 0,l={unversionedId:"react-part-time/react-with-redux-part-2/forum-word-puzzle-tic-tac-toe-multi-day-project-day-2",id:"react-part-time/react-with-redux-part-2/forum-word-puzzle-tic-tac-toe-multi-day-project-day-2",title:"Forum, Word Puzzle, Tic Tac Toe (Multi-Day Project) (day 2)",description:"Goals: Spend the rest of the course section building out a fully-functional Redux project. For full-time students, this will be a three-day project. For part-time students, this will be a multi-day project.",source:"@site/docs/react-part-time/7_react-with-redux-part-2/2a-classwork-redux-forum-hangman-tic-tac-toe-three-day-project-day-2.md",sourceDirName:"react-part-time/7_react-with-redux-part-2",slug:"/react-part-time/react-with-redux-part-2/forum-word-puzzle-tic-tac-toe-multi-day-project-day-2",permalink:"/react-part-time/react-with-redux-part-2/forum-word-puzzle-tic-tac-toe-multi-day-project-day-2",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Forum, Word Puzzle, Tic Tac Toe (Multi-Day Project) (day 2)",id:"forum-word-puzzle-tic-tac-toe-multi-day-project-day-2",slug:"forum-word-puzzle-tic-tac-toe-multi-day-project-day-2",hide_table_of_contents:!0,sidebar_position:6,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2a_classwork_redux_forum_hangman_tic_tac_toe_three_day_project.md"},sidebar:"react-part-time",previous:{title:"Adding Wait Time to the Queue Part 2",permalink:"/react-part-time/react-with-redux-part-2/adding-wait-time-to-the-queue-part-2"},next:{title:"Forum, Word Puzzle, Tic Tac Toe (Multi-Day Project) (day 3)",permalink:"/react-part-time/react-with-redux-part-2/forum-word-puzzle-tic-tac-toe-multi-day-project-day-3"}},s={},u=[{value:"Warm Up",id:"warm-up",level:2},{value:"Combining Reducers",id:"combining-reducers",level:3},{value:"Action Creators and Constants",id:"action-creators-and-constants",level:3},{value:"Lifecycle Methods",id:"lifecycle-methods",level:3},{value:"Code",id:"code",level:2},{value:"Redux Help Queue",id:"redux-help-queue",level:3},{value:"Redux Vote-Based Discussion Forum",id:"redux-vote-based-discussion-forum",level:3},{value:"Further Exploration",id:"further-exploration",level:4},{value:"Redux Word Puzzle",id:"redux-word-puzzle",level:3},{value:"Redux Tic-Tac-Toe",id:"redux-tic-tac-toe",level:3},{value:"Redux Minesweeper",id:"redux-minesweeper",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Goals:")," Spend the rest of the course section building out a fully-functional Redux project. For full-time students, this will be a three-day project. For part-time students, this will be a multi-day project."),(0,o.kt)("p",null,"Start by taking the first class session(s) to focus on understanding Redux state management and following the flow of data between React and Redux. Practice combining reducers."),(0,o.kt)("p",null,"Then take the next class session(s) to add action creators and constants."),(0,o.kt)("p",null,"Then, take the remaining class session(s) to put the finishing touches on your project and consider experimenting with lifecycle methods."),(0,o.kt)("h2",{id:"warm-up"},"Warm Up"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Use these warm ups after you've read the corresponding homework for each topic. You may work through these warm ups each class session or over time until you've completed them all."),(0,o.kt)("h3",{id:"combining-reducers"},"Combining Reducers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What does Redux's ",(0,o.kt)("inlineCode",{parentName:"li"},"combineReducers()")," do? When should we use it?"),(0,o.kt)("li",{parentName:"ul"},"How might we determine when an application needs multiple reducers?"),(0,o.kt)("li",{parentName:"ul"},"When we combine reducers with ",(0,o.kt)("inlineCode",{parentName:"li"},"combineReducers()"),", what do we need to do to ensure that we are able to access all state slices in our React application?")),(0,o.kt)("h3",{id:"action-creators-and-constants"},"Action Creators and Constants"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What are action creators and how can they help us clean up our code?"),(0,o.kt)("li",{parentName:"ul"},"What is the benefit of using constants instead of strings for action types?"),(0,o.kt)("li",{parentName:"ul"},"Walk through how Redux reducers, actions, and stores all work together to manage application state.")),(0,o.kt)("h3",{id:"lifecycle-methods"},"Lifecycle Methods"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What is a lifecycle method?"),(0,o.kt)("li",{parentName:"ul"},"List the most used lifecycle methods (in the order they are called) and what we might use them for.")),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"First, follow along with the Help Queue lessons throughout the course section to make sure you understand key concepts. Once you are done, work on your project of choice."),(0,o.kt)("p",null,"You will be working with the same pair for this multi-day project. There are four options for your project."),(0,o.kt)("h3",{id:"redux-help-queue"},"Redux Help Queue"),(0,o.kt)("p",null,"Follow along with the Help Queue lessons throughout the course section to make sure you understand key concepts. Once you are done, work on your project of choice."),(0,o.kt)("h3",{id:"redux-vote-based-discussion-forum"},"Redux Vote-Based Discussion Forum"),(0,o.kt)("p",null,"Sites like ",(0,o.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/aww/"},"Reddit"),", ",(0,o.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/newest"},"HackerNews")," and others offer a collection of different pages or forums where users may post news, pictures, and other information around a certain topic. Other users can then upvote or downvote content. The more upvotes an item receives, the higher it's displayed on the list. Recreate a basic subreddit and/or vote-based discussion board using React and Redux. Here are some user stories to get you started:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As a user, I want to enter content into a form and submit to create a new post."),(0,o.kt)("li",{parentName:"ul"},"As a user, I want my new posts to include a timestamp. And I want to see when other listings were posted, too."),(0,o.kt)("li",{parentName:"ul"},"As a user, I want to upvote posts I particularly enjoy."),(0,o.kt)("li",{parentName:"ul"},"As a user, I want to downvote posts I don't like, or find inappropriate."),(0,o.kt)("li",{parentName:"ul"},"As a user, I'd like posts with the most upvotes to appear higher on the page. (We haven't ",(0,o.kt)("strong",{parentName:"li"},"explicitly")," covered this in our curriculum, but here's a hint: You can complete logic before the ",(0,o.kt)("inlineCode",{parentName:"li"},"return")," statement of a ",(0,o.kt)("inlineCode",{parentName:"li"},"mapStateToProps()")," method!)")),(0,o.kt)("h4",{id:"further-exploration"},"Further Exploration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As a user, I want to click a post to view additional details. For now simply hide/show some message content. (Hint: You could create a ",(0,o.kt)("inlineCode",{parentName:"li"},"currentlySelectedPost")," Redux state key, and alter the value based on which post the user is selecting.)")),(0,o.kt)("h3",{id:"redux-word-puzzle"},"Redux Word Puzzle"),(0,o.kt)("p",null,"Create a React and Redux application that allows users to play a word guessing game, where users have to guess the word in 6 (or so) tries. Users should be presented with a number of blank spaces corresponding to the number of letters in a word. Each round, users should guess a letter: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if the letter is in the word, the letter should show up on the webpage"),(0,o.kt)("li",{parentName:"ul"},"if the letter is not in the word, the number of allowed guesses counts down by 1. ")),(0,o.kt)("p",null,"Once the number of guesses reaches 0, the game is over. If the user guesses the word before the number of guesses runs out, they win the game."),(0,o.kt)("p",null,"Make sure to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Provide a form that the player can use to make a guess. The app should tell them if it's right or wrong, and keep track of how many guesses they have left."),(0,o.kt)("li",{parentName:"ul"},"On the game page, display the letters they have guessed correctly so far, like: ",(0,o.kt)("inlineCode",{parentName:"li"},"b _ b b _ _")),(0,o.kt)("li",{parentName:"ul"},"Display the letters the player has guessed incorrectly, and how many guesses they have left."),(0,o.kt)("li",{parentName:"ul"},"Make sure to display messages telling the user whether they've guessed correctly or incorrectly. Then a \"Game Over\" message if they're out of guesses."),(0,o.kt)("li",{parentName:"ul"},"Don't allow duplicate guesses. If the user tries to guess the same letter twice they should be told to try again.")),(0,o.kt)("p",null,"Bonus functionality:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Try to change the color of an element on your game page based on whether the guess was right or wrong. Play around with changing the layout of your template file based on whether a guess is right or wrong, and whether or not the game is over."),(0,o.kt)("li",{parentName:"ul"},"Make the game two-player! Create a new form page where one user can choose a word for the other user to guess."),(0,o.kt)("li",{parentName:"ul"},"Try stylizing this game like ",(0,o.kt)("a",{parentName:"li",href:"https://wordplay.com/"},"Wordle"),".")),(0,o.kt)("h3",{id:"redux-tic-tac-toe"},"Redux Tic-Tac-Toe"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Please be aware that this prompt is more challenging than the Word Puzzle prompt. Stick with the first prompt if you are still getting the hang of Redux."),(0,o.kt)("p",null,"Create a React and Redux application that allows users to play tic-tac-toe. Begin by following ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/tutorial/tutorial.html"},"this highly-recommended tutorial from the React documentation")," that walks through the creation of a ",(0,o.kt)("em",{parentName:"p"},"non"),"-Redux tic-tac-toe game."),(0,o.kt)("p",null,"Even though you already know how to make non-Redux React apps, take your time and pay careful attention to each step of this tutorial. The tutorial includes shortcuts and pieces of functionality we haven't covered such as creating helper methods to dynamically render JSX."),(0,o.kt)("p",null,"Once you've successfully completed the tutorial, add Redux and React-Redux to your tic-tac-toe game and refactor the application to rely solely on Redux for all application state management."),(0,o.kt)("h3",{id:"redux-minesweeper"},"Redux Minesweeper"),(0,o.kt)("p",null,"If you finish creating tic-tac-toe before the end of the course section, try creating a Minesweeper game in Redux and React."),(0,o.kt)("p",null,"Not sure how to tackle this? Check out ",(0,o.kt)("a",{parentName:"p",href:"https://codepen.io/FullR/pen/qNbRGz"},"James Meyers' Minesweeper Codepen"),". Don't just copy this code.  Take the time to analyze it and see if you can figure out how it works. This is something you'll do a lot at future internships and jobs. Next, try creating your own Minesweeper application based on what you learned.   "),(0,o.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Application state is successfully managed by Redux."),(0,o.kt)("li",{parentName:"ul"},"All Redux reducers are pure functions."),(0,o.kt)("li",{parentName:"ul"},"Actions are successfully dispatched to specify changes to state."),(0,o.kt)("li",{parentName:"ul"},"Reducers receive and handle actions to correctly mutate the store's state."),(0,o.kt)("li",{parentName:"ul"},"Jest unit tests are included for any Redux reducers and tests pass."),(0,o.kt)("li",{parentName:"ul"},"Previous objectives and React best practices are followed"),(0,o.kt)("li",{parentName:"ul"},"Reducers are combined when necessary.")))}p.isMDXComponent=!0}}]);