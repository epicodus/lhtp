"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[53411],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),h=n,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return a?r.createElement(m,o(o({ref:t},u),{},{components:a})):r.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},57263:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={title:"Weekday Calculator, Haiku Creator, RPG (Week-Long Project) - Part 1",id:"weekday_calculator_haiku_creator_rpg_week_long_project___part_1",slug:"weekday_calculator_haiku_creator_rpg_week_long_project___part_1",hide_table_of_contents:!0,sidebar_position:1,day:"sunday",type:"exercise",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/6_test-driven-development-part-2/3a_classwork_haiku_creator_rpg_sudoku_solver.md",paginationPrev:null},o=void 0,l={unversionedId:"intermediate_javascript_part_time_evening/test-driven-development-part-2/weekday_calculator_haiku_creator_rpg_week_long_project___part_1",id:"intermediate_javascript_part_time_evening/test-driven-development-part-2/weekday_calculator_haiku_creator_rpg_week_long_project___part_1",title:"Weekday Calculator, Haiku Creator, RPG (Week-Long Project) - Part 1",description:"Goal: Continue to practice testing with Jest and implementing ES6 features along the way. You should use ES6 classes, since those will be required on the code review. Test all of your business logic using TDD and Jest.",source:"@site/docs/intermediate_javascript_part_time_evening/6_test-driven-development-part-2/3a_classwork_haiku_creator_rpg_sudoku_solver.md",sourceDirName:"intermediate_javascript_part_time_evening/6_test-driven-development-part-2",slug:"/intermediate_javascript_part_time_evening/test-driven-development-part-2/weekday_calculator_haiku_creator_rpg_week_long_project___part_1",permalink:"/lhtp/intermediate_javascript_part_time_evening/test-driven-development-part-2/weekday_calculator_haiku_creator_rpg_week_long_project___part_1",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Weekday Calculator, Haiku Creator, RPG (Week-Long Project) - Part 1",id:"weekday_calculator_haiku_creator_rpg_week_long_project___part_1",slug:"weekday_calculator_haiku_creator_rpg_week_long_project___part_1",hide_table_of_contents:!0,sidebar_position:1,day:"sunday",type:"exercise",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/6_test-driven-development-part-2/3a_classwork_haiku_creator_rpg_sudoku_solver.md",paginationPrev:null},sidebar:"intermediate_javascript_part_time_evening",previous:{title:"Homework: Asking and Listening",permalink:"/lhtp/intermediate_javascript_part_time_evening/test-driven-development/homework_asking_and_listening"},next:{title:"ES6 Arrow Notation",permalink:"/lhtp/intermediate_javascript_part_time_evening/test-driven-development-part-2/es6_arrow_notation"}},s={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Weekday Calculator",id:"weekday-calculator",level:3},{value:"Haiku Checker/Creator",id:"haiku-checkercreator",level:3},{value:"Build Your Own RPG",id:"build-your-own-rpg",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Goal:")," Continue to practice testing with Jest and implementing ES6 features along the way. You should use ES6 classes, since those will be required on the code review. Test all of your business logic using TDD and Jest."),(0,n.kt)("h2",{id:"warm-up"},"Warm Up"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Why should we separate our business logic into multiple files?"),(0,n.kt)("li",{parentName:"ul"},"Why would we use the ",(0,n.kt)("inlineCode",{parentName:"li"},"class")," keyword in our code? What does it do?"),(0,n.kt)("li",{parentName:"ul"},"When would we use an arrow function in our code? Think back to the ",(0,n.kt)("inlineCode",{parentName:"li"},"Box")," object example and using ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.forEach()")," in the ",(0,n.kt)("inlineCode",{parentName:"li"},"Box")," object's method to ",(0,n.kt)("inlineCode",{parentName:"li"},"addJunk")," to our box.")),(0,n.kt)("h2",{id:"code"},"Code"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Pick one of the following projects to complete. If you finish with more time on your hands, pick another project."),(0,n.kt)("h3",{id:"weekday-calculator"},"Weekday Calculator"),(0,n.kt)("p",null,"This prompt will give you the chance to try out working with ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"},"the JavaScript ",(0,n.kt)("inlineCode",{parentName:"a"},"Date")," object"),". "),(0,n.kt)("p",null,"Create an app for calculating the day for any given date. The user should be able to enter in a date and see what day of the week that date occurred on. "),(0,n.kt)("p",null,"If you enjoy brain teasers, try to work out your own algorithm. If you need help getting started, check out the ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Determination_of_the_day_of_the_week"},"Wikipedia article"),". The program should be able to handle past dates, future dates, and invalid dates (user should be notified if the date is invalid)."),(0,n.kt)("p",null,"Make sure to use ",(0,n.kt)("inlineCode",{parentName:"p"},"class")," syntax and, as always, use TDD to develop your business logic before writing any user interface logic. "),(0,n.kt)("h3",{id:"haiku-checkercreator"},"Haiku Checker/Creator"),(0,n.kt)("p",null,"A haiku is a poem that consists of three lines. The first has five syllables, the second has seven, and the third has five. Start by creating an application that checks whether a poem is in fact a haiku. If you have time, build out your application so that it can randomly generate haikus."),(0,n.kt)("p",null,"This project provides an excellent opportunity for TDD with Jest."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Your logic should verify that the poem has three lines."),(0,n.kt)("li",{parentName:"ul"},"Your logic should verify English syllable rules (and exceptions) one at a time. A quick Google search will provide information on English syllable rules."),(0,n.kt)("li",{parentName:"ul"},"If you successfully complete a Haiku checker, continue to build out your application to randomly generate haikus.")),(0,n.kt)("p",null,"Make sure to use ",(0,n.kt)("inlineCode",{parentName:"p"},"class")," syntax and, as always, use TDD to develop your business logic before writing any user interface logic. "),(0,n.kt)("h3",{id:"build-your-own-rpg"},"Build Your Own RPG"),(0,n.kt)("p",null,"An RPG (Role Playing Game) is a game where players assume the roles of characters in a fictional world. Build and fully unit test the business logic for a Medieval Role Playing Game (or another genre that you prefer: sci-fi, cyberpunk, '80's high school)."),(0,n.kt)("p",null,"Logic could include the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Character creation:")," Use ES6 classes to generate different character types. Be creative with your character types \u2014 use warriors, wizards, scientists, prom queen, whatever! Characters should have specific attributes. For instance, in a medieval RPG, characters might have ",(0,n.kt)("inlineCode",{parentName:"p"},"strength")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"intelligence")," attributes among others. In an '80's high school RPG, characters might have ",(0,n.kt)("inlineCode",{parentName:"p"},"snark")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"charm"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Battle system:")," Many RPGs have a battle system so characters can fight monsters, though that could just as easily be a high school 'battle' system where the prom queen has a dance-off with the theater aficionado. Determine conditions for winning a battle, whether that's defeating monsters (with swords and spells doing damage), accumulating dance-off style points, or any other system you think of.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Level up:")," Determine a leveling system. Characters should be able to go from Level 1 to Level 2 and so on. Generally each level comes with new abilities. How do characters level up in your game? What attributes and powers do they gain? Does their ",(0,n.kt)("inlineCode",{parentName:"p"},"strength")," go up or do they learn new spells?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Inventory:")," Characters should be able to have items that enhance their abilities. Maybe the Magic Armor increases their defense power or legwarmers increase their dance-off ability. Create a limit to the number of items a character can have. Characters should be able to add, drop, buy and sell items."))),(0,n.kt)("p",null,"Feel free to build out your RPG as you see fit. The goal is to use ",(0,n.kt)("inlineCode",{parentName:"p"},"class")," syntax and TDD to create well-tested business logic. You are not expected to have a functioning game in the browser. Instead, focus on testing and business logic!"),(0,n.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Tests were committed before code."),(0,n.kt)("li",{parentName:"ul"},"Business logic has 100% line coverage with Jest."),(0,n.kt)("li",{parentName:"ul"},"Project utilizes ES6 classes."),(0,n.kt)("li",{parentName:"ul"},"Dependencies are managed with npm."),(0,n.kt)("li",{parentName:"ul"},"webpack is used to lint, bundle, and process code.")))}d.isMDXComponent=!0}}]);