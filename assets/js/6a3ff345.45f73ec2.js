"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[34470],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=u(a),p=o,m=c["".concat(l,".").concat(p)]||c[p]||d[p]||n;return a?r.createElement(m,i(i({ref:t},h),{},{components:a})):r.createElement(m,i({ref:t},h))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},776:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var r=a(87462),o=(a(67294),a(3905));const n={title:"To Do List, CD Organizer, Go Fish, Word Puzzle - Part 3 (day 3)",id:"to-do-list-cd-organizer-go-fish-word-puzzle---part-3-day-3",slug:"to-do-list-cd-organizer-go-fish-word-puzzle---part-3-day-3",hide_table_of_contents:!0,sidebar_position:12,day:"wednesday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/4a_to_do_list_cd_organizer_hangman_and_go_fish_classwork.md"},i=void 0,s={unversionedId:"c-and-net-part-time-evening/basic-web-applications-part-2/to-do-list-cd-organizer-go-fish-word-puzzle---part-3-day-3",id:"c-and-net-part-time-evening/basic-web-applications-part-2/to-do-list-cd-organizer-go-fish-word-puzzle---part-3-day-3",title:"To Do List, CD Organizer, Go Fish, Word Puzzle - Part 3 (day 3)",description:"Goal: Create an ASP.NET Core MVC application that uses objects within objects. Pay close attention to how data is passed between routes, views, and forms in an objects-within-objects MVC setup.",source:"@site/docs/c-and-net-part-time-evening/9_basic-web-applications-part-2/4a-to-do-list-cd-organizer-hangman-and-go-fish-classwork-day-3.md",sourceDirName:"c-and-net-part-time-evening/9_basic-web-applications-part-2",slug:"/c-and-net-part-time-evening/basic-web-applications-part-2/to-do-list-cd-organizer-go-fish-word-puzzle---part-3-day-3",permalink:"/c-and-net-part-time-evening/basic-web-applications-part-2/to-do-list-cd-organizer-go-fish-word-puzzle---part-3-day-3",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"To Do List, CD Organizer, Go Fish, Word Puzzle - Part 3 (day 3)",id:"to-do-list-cd-organizer-go-fish-word-puzzle---part-3-day-3",slug:"to-do-list-cd-organizer-go-fish-word-puzzle---part-3-day-3",hide_table_of_contents:!0,sidebar_position:12,day:"wednesday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/4a_to_do_list_cd_organizer_hangman_and_go_fish_classwork.md"},sidebar:"c-and-net-part-time-evening",previous:{title:"The Previous Hosting Model versus the New Minimal Hosting Model",permalink:"/c-and-net-part-time-evening/basic-web-applications-part-2/the-previous-hosting-model-versus-the-new-minimal-hosting-model"},next:{title:"Technical Interview Prep",permalink:"/c-and-net-part-time-evening/basic-web-applications-part-2/technical-interview-prep"}},l={},u=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"To Do List Continued",id:"to-do-list-continued",level:3},{value:"Music Organizer",id:"music-organizer",level:3},{value:"Further Exploration",id:"further-exploration",level:4},{value:"Go Fish",id:"go-fish",level:3},{value:"Word Puzzle",id:"word-puzzle",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],h={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Goal:")," Create an ASP.NET Core MVC application that uses objects within objects. Pay close attention to how data is passed between routes, views, and forms in an objects-within-objects MVC setup."),(0,o.kt)("h2",{id:"warm-up"},"Warm Up"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Referencing the To Do List, what is the purpose of the ",(0,o.kt)("inlineCode",{parentName:"li"},"Category")," class? How does it relate to our ",(0,o.kt)("inlineCode",{parentName:"li"},"Item")," class?"),(0,o.kt)("li",{parentName:"ul"},"How do we pass multiple objects into a View?"),(0,o.kt)("li",{parentName:"ul"},"How does RESTful routing differ when we begin working with objects within objects?"),(0,o.kt)("li",{parentName:"ul"},"Why do we use hidden form fields when creating a new object that resides in another object?")),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"to-do-list-continued"},"To Do List Continued"),(0,o.kt)("p",null,"Follow along with the homework to add a ",(0,o.kt)("inlineCode",{parentName:"p"},"Category")," class with the ability to store a list of items to your ongoing To Do List."),(0,o.kt)("h3",{id:"music-organizer"},"Music Organizer"),(0,o.kt)("p",null,"Make a program for users to catalog and organize their music. This could be a CD, vinyl or even a tape collection."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"They should be able to create a new record, enter the record title, and list out all of their records."),(0,o.kt)("li",{parentName:"ul"},"Add a feature that allows users to add an artist to a record. Keep it simple \u2014 assume each is by a single artist."),(0,o.kt)("li",{parentName:"ul"},"After that, let users list out all the artists and choose an artist to see which records are by that artist."),(0,o.kt)("li",{parentName:"ul"},"All model logic should be thoroughly tested.")),(0,o.kt)("h4",{id:"further-exploration"},"Further Exploration"),(0,o.kt)("p",null,'Try creating another link on the home page to take the user to a "/search',"_","by","_",'artist" page. Users should be able to fill out a form with an artist name to search for their collection. After submitting the form they should be taken to a page listing out all the records they own by that artist.'),(0,o.kt)("p",null,'Then try to improve the search functionality. If the user has created a record object by "JS Bach," they should be able to search for it by typing in "bach," "Bach," or "Johann Sebastian Bach."  Say the user has a record by "Bachman\u2013Turner Overdrive" as well as one by "JS Bach." If the user searches by the name "bach" or "Bach," both the records by "JS Bach" and "Bachman\u2013Turner Overdrive" should be displayed.'),(0,o.kt)("h3",{id:"go-fish"},"Go Fish"),(0,o.kt)("p",null,"Make a game where two people can play Go Fish against each other. Here is a refresher on the ",(0,o.kt)("a",{parentName:"p",href:"https://simple.wikipedia.org/wiki/Go_Fish"},"rules"),". You will need to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Game")," class and a ",(0,o.kt)("inlineCode",{parentName:"p"},"Player")," class, which should at least hold the player's hand of cards. If you are feeling ambitious, you can also try creating a single-player mode where one user can play against the computer."),(0,o.kt)("h3",{id:"word-puzzle"},"Word Puzzle"),(0,o.kt)("p",null,"Make a word guessing game, where users have to guess the word in 6 tries. Users should be presented with a number of blank spaces corresponding to the number of letters in a word. Each round, users should guess a letter: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if the letter is in the word, the letter should show up on the webpage"),(0,o.kt)("li",{parentName:"ul"},"if the letter is not in the word, the number of allowed guesses counts down by 1. ")),(0,o.kt)("p",null,"Once the number of guesses reaches 0, the game is over. If the user guesses the word before the number of guesses runs out, they win the game."),(0,o.kt)("p",null,"Think carefully about the objects you'll use before starting. There are multiple ways to solve this problem."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The computer can generate the words from a pre-set list."),(0,o.kt)("li",{parentName:"ul"},"The user should make a guess by entering a letter into a form. The app should tell them if it's right or wrong, and keep track of how many guesses they have left."),(0,o.kt)("li",{parentName:"ul"},"On the game page, display the letters they have guessed correctly so far, like: ",(0,o.kt)("inlineCode",{parentName:"li"},"E p _ c _ d u s")),(0,o.kt)("li",{parentName:"ul"},"Also, display the letters they have guessed incorrectly, and how many guesses they have left."),(0,o.kt)("li",{parentName:"ul"},"Make sure to display messages telling the user whether they've guessed correctly or incorrectly. Then a \"Game Over\" message if they're out of guesses."),(0,o.kt)("li",{parentName:"ul"},"Don't allow duplicate guesses. If the user tries to guess the same letter twice they should be told to try again.")),(0,o.kt)("p",null,"Bonus functionality:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Try to change the color of an element on your game page based on whether the guess was right or wrong. Play around with changing the layout of your template file based on whether a guess is right or wrong, and whether or not the game is over."),(0,o.kt)("li",{parentName:"ul"},"Make it two-player! Create a new form page where one user can choose a word for the other user to guess."),(0,o.kt)("li",{parentName:"ul"},"Try stylizing this game like ",(0,o.kt)("a",{parentName:"li",href:"https://wordplay.com/"},"Wordle"),".")),(0,o.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Are there two classes in the application?"),(0,o.kt)("li",{parentName:"ul"},"Can a user input a new nested object and see it displayed on the parent object's detail page?"),(0,o.kt)("li",{parentName:"ul"},"Can a user select an object and see the objects associated with it?"),(0,o.kt)("li",{parentName:"ul"},"Is code DRY and functional?")))}d.isMDXComponent=!0}}]);