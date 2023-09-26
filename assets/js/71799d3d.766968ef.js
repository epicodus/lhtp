"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[12023],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?a.createElement(h,n(n({ref:t},p),{},{components:r})):a.createElement(h,n({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,n=new Array(i);n[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,n[1]=l;for(var s=2;s<i;s++)n[s]=r[s];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15483:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(87462),o=(r(67294),r(3905));const i={title:"Game of Choice - Part 4",id:"game-of-choice---part-4",slug:"game-of-choice---part-4",hide_table_of_contents:!0,sidebar_position:10,day:"wednesday",type:"exercise",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3a_classwork_game_of_choice_two_day_project_4.md"},n=void 0,l={unversionedId:"intermediate-javascript-part-time-evening/object-oriented-javascript-part-2/game-of-choice---part-4",id:"intermediate-javascript-part-time-evening/object-oriented-javascript-part-2/game-of-choice---part-4",title:"Game of Choice - Part 4",description:"Goal:  The goal of this multi-day project is to exercise your JavaScript programming skills with constructors, prototypes, objects, properties, methods, and DOM manipulation and traversal.",source:"@site/docs/intermediate-javascript-part-time-evening/4_object-oriented-javascript-part-2/3a-classwork-game-of-choice-two-day-project-4.md",sourceDirName:"intermediate-javascript-part-time-evening/4_object-oriented-javascript-part-2",slug:"/intermediate-javascript-part-time-evening/object-oriented-javascript-part-2/game-of-choice---part-4",permalink:"/intermediate-javascript-part-time-evening/object-oriented-javascript-part-2/game-of-choice---part-4",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Game of Choice - Part 4",id:"game-of-choice---part-4",slug:"game-of-choice---part-4",hide_table_of_contents:!0,sidebar_position:10,day:"wednesday",type:"exercise",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3a_classwork_game_of_choice_two_day_project_4.md"},sidebar:"intermediate-javascript-part-time-evening",previous:{title:"Introduction to Whiteboarding",permalink:"/intermediate-javascript-part-time-evening/object-oriented-javascript-part-2/introduction-to-whiteboarding"},next:{title:"Whiteboard Practice: JavaScript Objects",permalink:"/intermediate-javascript-part-time-evening/object-oriented-javascript-part-2/whiteboard-practice-javascript-objects"}},c={},s=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Pig Dice (Recommended)",id:"pig-dice-recommended",level:3},{value:"Further Exploration",id:"further-exploration",level:4},{value:"Tic Tac Toe (Difficult)",id:"tic-tac-toe-difficult",level:3},{value:"Hints",id:"hints",level:4},{value:"Example",id:"example",level:4},{value:"Further Exploration",id:"further-exploration-1",level:4},{value:"Peer Code Review",id:"peer-code-review",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Goal"),":  The goal of this multi-day project is to exercise your JavaScript programming skills with constructors, prototypes, objects, properties, methods, and DOM manipulation and traversal."),(0,o.kt)("h2",{id:"warm-up"},"Warm Up"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"First, carefully read each project description below, and decide which project to tackle with your partner. Then, work through the following questions as part of a pre-coding brainstorming session. Map out a basic approach for the project and get creative!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'What will happen when a user clicks "Play"?'),(0,o.kt)("li",{parentName:"ul"},"What objects will you need?"),(0,o.kt)("li",{parentName:"ul"},"What key-value pairs will each object need to contain in order for the game to work?"),(0,o.kt)("li",{parentName:"ul"},"What functions?  "),(0,o.kt)("li",{parentName:"ul"},"How will these be triggered throughout the gameplay?  "),(0,o.kt)("li",{parentName:"ul"},"How will information be collected from the user?  How will it be displayed?  "),(0,o.kt)("li",{parentName:"ul"},"When you have a broad overview of how you want to build your game, identify the simplest behavior, and perhaps what behaviors to tackle after that. Remember to start simple and work one step at a time.  ")),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Pick just one prompt below to complete, and then start by completing the warm up."),(0,o.kt)("h3",{id:"pig-dice-recommended"},"Pig Dice (Recommended)"),(0,o.kt)("p",null,"Write a program where two users can play ",(0,o.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Pig_%28dice_game%29"},"Pig dice")," against each other. Start with your business logic, and once it is completed move onto your user interface logic. "),(0,o.kt)("p",null,"Use test-driven development to create your business logic. Include pseudocode tests in your README. After every passing test, make sure to commit your code."),(0,o.kt)("p",null,"Make sure that your user interface and business logics are clearly separated, and practice separation of concerns when designing your user interface function."),(0,o.kt)("h4",{id:"further-exploration"},"Further Exploration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add options to play one of the other variations of Pig Dice using two or more dice"),(0,o.kt)("li",{parentName:"ul"},"Add option to play the computer \u2014 easy or hard levels:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Easy"),": Computer always stops after the second roll."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Hard"),":  Computer uses strategy based on current total and rolled dice.  ")))),(0,o.kt)("h3",{id:"tic-tac-toe-difficult"},"Tic Tac Toe (Difficult)"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note that this project is extra challenging; only begin with this if both you and your partner are fully on board. Or, consider tackling Tic Tac Toe if you finish Pig Dice with time to spare.")),(0,o.kt)("p",null,"Create a ",(0,o.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Tic-tac-toe"},"Tic Tac Toe")," game for two players. Start with your business logic, and once it is completed move onto your user interface logic. "),(0,o.kt)("p",null,"Use test-driven development to create your business logic. Include pseudocode tests in your README. After every passing test, make sure to commit your code."),(0,o.kt)("p",null,"Make sure that your user interface and business logics are clearly separated, and practice separation of concerns when designing your user interface function."),(0,o.kt)("h4",{id:"hints"},"Hints"),(0,o.kt)("p",null,"Consider making four constructors/prototypes: Player, Space, Board, and Game. The objects created from these could include some of the following features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'A player should know whether it\'s an X or an O and be able to report that (e.g. player.mark() could return "X" or "O").'),(0,o.kt)("li",{parentName:"ul"},"A space should know its coordinates and be able to be marked by a player (e.g., space.mark(player_X))."),(0,o.kt)("li",{parentName:"ul"},"A space should be able to report who it's marked by (e.g. space.marked",(0,o.kt)("em",{parentName:"li"},'by() could return "X" or "O", or it could return a player object \u2014 _player1')," or ",(0,o.kt)("em",{parentName:"li"},"player2"),")."),(0,o.kt)("li",{parentName:"ul"},"A board should create 9 spaces with the proper coordinates, and tell if there are three in a row marked by the same player. A board should be able to return a space by its coordinates (e.g., board.find(1, 2))."),(0,o.kt)("li",{parentName:"ul"},"A game should create 2 players and a board, be able to move to the next turn, know which player's turn it is, and be able to tell if the game is over or not.")),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'let testPlayer = new Player("X");\ntestPlayer.mark(); // returns "X"\n\nlet board = new Board();\nlet testSpace = board.find(1, 2); // board.find(1,2) returns a Space object\n\ntestSpace.xCoordinate(); // returns 1\ntestSpace.yCoordinate(); // returns 2\n\ntestSpace.mark(testPlayer);\ntestSpace.markedBy(); // returns testPlayer or "X"\n\nboard.gameOver(); // returns a boolean\n')),(0,o.kt)("h4",{id:"further-exploration-1"},"Further Exploration"),(0,o.kt)("p",null,"Give users the option to play the computer at one of two levels: easy or hard."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Easy"),":  Computer randomly selects squares."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Hard"),": Computer uses strategy (see strategy section in ",(0,o.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/Tic-tac-toe"},"Tic Tac Toe"),").")),(0,o.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Does the application function as expected?"),(0,o.kt)("li",{parentName:"ul"},"Is the code well-refactored and easy to follow?"),(0,o.kt)("li",{parentName:"ul"},"Do objects drive business logic?"),(0,o.kt)("li",{parentName:"ul"},"Are constructors and prototypes used successfully."),(0,o.kt)("li",{parentName:"ul"},"Are pseudocode tests present in the README?")))}d.isMDXComponent=!0}}]);