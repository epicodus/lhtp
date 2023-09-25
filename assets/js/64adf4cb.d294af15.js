"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[12032],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"2. Weekly Technical Interview Prep: Testing",id:"weekly_technical_interview_prep_testing",slug:"weekly_technical_interview_prep_testing",hide_table_of_contents:!0,sidebar_position:11,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/7_test-driven-development-with-c-part-2/4b_weekly_technical_interview_prep_testing.md"},o=void 0,l={unversionedId:"c_and_net_part_time/test-driven-development-with-c-part-2/weekly_technical_interview_prep_testing",id:"c_and_net_part_time/test-driven-development-with-c-part-2/weekly_technical_interview_prep_testing",title:"2. Weekly Technical Interview Prep: Testing",description:'At the end of every section, we\'ll take a break from coding to practice interview questions with our partner. These questions will (primarily) revolve around the content we learned in the section, and, much like a "real" interview, some will be more technical than others.',source:"@site/docs/c_and_net_part_time/7_test-driven-development-with-c-part-2/4b_weekly_technical_interview_prep_testing.md",sourceDirName:"c_and_net_part_time/7_test-driven-development-with-c-part-2",slug:"/c_and_net_part_time/test-driven-development-with-c-part-2/weekly_technical_interview_prep_testing",permalink:"/lhtp/c_and_net_part_time/test-driven-development-with-c-part-2/weekly_technical_interview_prep_testing",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"2. Weekly Technical Interview Prep: Testing",id:"weekly_technical_interview_prep_testing",slug:"weekly_technical_interview_prep_testing",hide_table_of_contents:!0,sidebar_position:11,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/7_test-driven-development-with-c-part-2/4b_weekly_technical_interview_prep_testing.md"},sidebar:"c_and_net_part_time",previous:{title:"1. Weekday Finder, Scrabble Scorer, Rock Paper Scissors, Find and Replace, Prime Sifting - Part 3 (day 2)",permalink:"/lhtp/c_and_net_part_time/test-driven-development-with-c-part-2/weekday_finder_scrabble_scorer_rock_paper_scissors_find_and_replace_prime_sifting___part_3_day_2"},next:{title:"1. Test-Driven Development with C# Independent Project",permalink:"/lhtp/c_and_net_part_time/test-driven-development-with-c-part-2/test_driven_development_with_c_independent_project"}},s={},p=[{value:"Technical Interview Questions",id:"technical-interview-questions",level:2},{value:"Stories and Examples",id:"stories-and-examples",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'At the end of every section, we\'ll take a break from coding to practice interview questions with our partner. These questions will (primarily) revolve around the content we learned in the section, and, much like a "real" interview, some will be more technical than others.'),(0,i.kt)("p",null,"In addition to learning how to implement the new tools, technologies, and concepts, you want to become comfortable ",(0,i.kt)("em",{parentName:"p"},"talking")," about them so you can accurately ",(0,i.kt)("em",{parentName:"p"},"demonstrate")," and ",(0,i.kt)("em",{parentName:"p"},"communicate")," these skills you've learned to potential employers in an interview."),(0,i.kt)("p",null,"Take turns answering the questions below with your partner."),(0,i.kt)("h2",{id:"technical-interview-questions"},"Technical Interview Questions"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What is encapsulation? Why is encapsulation so important in object-oriented programming?"),(0,i.kt)("li",{parentName:"ul"},"What is abstraction? How can we use it to help encapsulate our code?"),(0,i.kt)("li",{parentName:"ul"},"What is the difference between ",(0,i.kt)("inlineCode",{parentName:"li"},"public")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"private")," methods? When should we use ",(0,i.kt)("inlineCode",{parentName:"li"},"public")," methods and when should we use ",(0,i.kt)("inlineCode",{parentName:"li"},"private")," methods?"),(0,i.kt)("li",{parentName:"ul"},"What is separation of concerns? What are some techniques we can use to write well-separated code?"),(0,i.kt)("li",{parentName:"ul"},"What is the difference between ",(0,i.kt)("inlineCode",{parentName:"li"},"static")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"instance")," methods? When should we use one or the other?"),(0,i.kt)("li",{parentName:"ul"},"What are the benefits of namespacing our classes?"),(0,i.kt)("li",{parentName:"ul"},"What are getters and setters?"),(0,i.kt)("li",{parentName:"ul"},"Why should we separate out our ",(0,i.kt)("inlineCode",{parentName:"li"},"Main()")," method into another class?")),(0,i.kt)("h2",{id:"stories-and-examples"},"Stories and Examples"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Offering a tangible story or example that highlights your skills usually goes ",(0,i.kt)("em",{parentName:"p"},"much further")," in an interview than simply ",(0,i.kt)("em",{parentName:"p"},"telling")," your interviewer you're good at something. (i.e.: Telling a story about a time you tracked down a tricky bug versus simply saying ",(0,i.kt)("em",{parentName:"p"},'"I\'m good at problem-solving!"'),")."),(0,i.kt)("p",null,"Review the ",(0,i.kt)("strong",{parentName:"p"},"STAR")," method, discussed in ",(0,i.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/internship-and-job-search/preparing-for-job-interviews/non-technical-interview"},"this lesson on non-technical interviews"),". Use the ",(0,i.kt)("strong",{parentName:"p"},"STAR")," method to practice answering non-technical questions with your partner."),(0,i.kt)("p",null,"Again, if you come up with a story or example you feel good about, jot it down somewhere! It's tough to come up with stories like this in an interview on the spot. Having a few tucked away to review before an interview will be a huge benefit to you later."))}d.isMDXComponent=!0}}]);