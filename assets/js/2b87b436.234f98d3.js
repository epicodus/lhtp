"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[15168],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=i,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||o;return r?a.createElement(m,n(n({ref:t},u),{},{components:r})):a.createElement(m,n({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,n=new Array(o);n[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,n[1]=l;for(var s=2;s<o;s++)n[s]=r[s];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89824:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(87462),i=(r(67294),r(3905));const o={title:"1. Build Your Own RPG, Haiku Checker (Multi-day Project)",id:"build_your_own_rpg_haiku_checker_multi_day_project",slug:"build_your_own_rpg_haiku_checker_multi_day_project",hide_table_of_contents:!0,sidebar_position:5,day:"wednesday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3_functional-programming-with-javascript-part-2/3a_classwork_rpg_haiku_checker.md"},n=void 0,l={unversionedId:"react_part_time/functional-programming-with-javascript-part-2/build_your_own_rpg_haiku_checker_multi_day_project",id:"react_part_time/functional-programming-with-javascript-part-2/build_your_own_rpg_haiku_checker_multi_day_project",title:"1. Build Your Own RPG, Haiku Checker (Multi-day Project)",description:"Goal: For this project, continue building functional applications. Try incorporating all the different tools you've learned so far from closures to recursion to composition. You may incorporate object-oriented elements in your applications, but try to keep your code functional where possible.",source:"@site/docs/react_part_time/3_functional-programming-with-javascript-part-2/3a_classwork_rpg_haiku_checker.md",sourceDirName:"react_part_time/3_functional-programming-with-javascript-part-2",slug:"/react_part_time/functional-programming-with-javascript-part-2/build_your_own_rpg_haiku_checker_multi_day_project",permalink:"/lhtp/react_part_time/functional-programming-with-javascript-part-2/build_your_own_rpg_haiku_checker_multi_day_project",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"1. Build Your Own RPG, Haiku Checker (Multi-day Project)",id:"build_your_own_rpg_haiku_checker_multi_day_project",slug:"build_your_own_rpg_haiku_checker_multi_day_project",hide_table_of_contents:!0,sidebar_position:5,day:"wednesday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3_functional-programming-with-javascript-part-2/3a_classwork_rpg_haiku_checker.md"},sidebar:"react_part_time",previous:{title:"3. Addressing Implicit Bias",permalink:"/lhtp/react_part_time/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/addressing_implicit_bias"},next:{title:"NaN. Whiteboard Practice: Project Euler",permalink:"/lhtp/react_part_time/functional-programming-with-javascript-part-2/whiteboard_practice_project_euler"}},c={},s=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Build Your Own RPG",id:"build-your-own-rpg",level:3},{value:"Haiku Checker/Creator",id:"haiku-checkercreator",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],u={toc:s},p="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Goal:")," For this project, continue building functional applications. Try incorporating all the different tools you've learned so far from closures to recursion to composition. You may incorporate object-oriented elements in your applications, but try to keep your code functional where possible."),(0,i.kt)("h2",{id:"warm-up"},"Warm Up"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What does it mean to mutate state? Why should we generally avoid this in functional programming?"),(0,i.kt)("li",{parentName:"ul"},"What does it mean that functions are first class citizens? "),(0,i.kt)("li",{parentName:"ul"},"What does LIFO mean in terms of the JavaScript stack? Why is this important for recursive functions?")),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"build-your-own-rpg"},"Build Your Own RPG"),(0,i.kt)("p",null,"In Intermediate JavaScript, you had the opportunity to build your own RPG using object-oriented techniques. Try building another RPG \u2014 this time using functional techniques such as composition. You may also choose to refactor an RPG you've already started working on. Refactoring object-oriented code to functional code can be a great way to improve your skills."),(0,i.kt)("p",null,"An RPG (Role Playing Game) is a game where players assume the roles of characters in a fictional world. Build and fully unit test the business logic for a Medieval Role Playing Game (or another genre that you prefer: sci-fi, cyberpunk, '80's high school)."),(0,i.kt)("p",null,"Logic could include the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Character creation:")," Use composition to generate different character types. Be creative with your character types... warriors, wizards, scientists, prom queen... whatever! Characters should have specific attributes. For instance, in a medieval RPG, characters might have ",(0,i.kt)("inlineCode",{parentName:"p"},"strength")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"intelligence")," attributes among others. In an '80's high school RPG, characters might have ",(0,i.kt)("inlineCode",{parentName:"p"},"snark")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"charm"),". You can add and even update these attributes using composition.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Battle system:"),' Many RPGs have a battle system so characters can fight monsters, though that could just as easily be a high school \u201cbattle\u201d system where the prom queen has a dance-off with the theater aficionado. Determine conditions for "winning" a battle, whether that\'s defeating monsters (with swords and spells doing damage), accumulating dance-off style points, or any other system you think of.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Level up:")," Determine a leveling system. Characters should be able to go from Level 1 to Level 2 and so on. Generally each level comes with new abilities. How do characters level up in your game? What attributes and powers do they gain? Does their ",(0,i.kt)("inlineCode",{parentName:"p"},"strength")," go up or do they learn new spells? You will need to use some object-oriented programming to complete this objective \u2014 characters can be individual objects with their own set of attributes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Inventory:")," Characters should be able to have items that enhance their abilities. Maybe the Magic Armor increases their defense power or legwarmers increase their dance-off ability. Create a limit to the number of items a character can have. Characters should be able to add, drop, buy and sell items."))),(0,i.kt)("p",null,"Feel free to build out your RPG as you see fit. Keep in mind that incorporating some object-oriented principles are okay, but try to use functional programming where possible."),(0,i.kt)("h3",{id:"haiku-checkercreator"},"Haiku Checker/Creator"),(0,i.kt)("p",null,"Here's another project from Intermediate JavaScript \u2014 if you've already built this project, try refactoring your object-oriented approach so that it's functional instead. You may also choose to build a functional application from scratch."),(0,i.kt)("p",null,"A haiku is a poem that consists of three lines. The first has five syllables, the second has seven, and the third has five. Start by creating an application that checks whether a poem is in fact a haiku. If you have time, build out your application so that it can randomly generate haikus."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your logic should verify that the poem has three lines."),(0,i.kt)("li",{parentName:"ul"},"Your logic should verify English syllable rules (and exceptions) one at a time. A quick Google search will provide information on English syllable rules."),(0,i.kt)("li",{parentName:"ul"},"If you successfully complete a Haiku checker, continue to build out your application to randomly generate haikus.")),(0,i.kt)("p",null,"Make sure you test your application for each new rule you implement."),(0,i.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Code uses functional programming and avoids mutating state as much as possible."),(0,i.kt)("li",{parentName:"ul"},"Code is well tested."),(0,i.kt)("li",{parentName:"ul"},"Code demonstrates an understanding of closures, recursion, and other functional concepts."),(0,i.kt)("li",{parentName:"ul"},"Application works as expected.")))}h.isMDXComponent=!0}}]);