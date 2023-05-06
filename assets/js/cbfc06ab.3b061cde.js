"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[6155],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,g=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},53054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"14. Business and User Interface Logic",id:"business_and_user_interface_logic",slug:"business_and_user_interface_logic",hide_table_of_contents:!0,sidebar_position:37,day:"monday",type:"lesson",url:"https://github.com/epicodus-classroom/test-intro/blob/main/2_javascript_and_web_browsers/1m_business_and_user_interface_logic.md"},s=void 0,o={unversionedId:"test_intro/javascript_and_web_browsers/business_and_user_interface_logic",id:"test_intro/javascript_and_web_browsers/business_and_user_interface_logic",title:"14. Business and User Interface Logic",description:"Well-organized code is easier to debug, it appears more professional, and is easier to revisit later. Writing organized code is a highly-valued skill in the programming field. When working on a team, you'll often collaborate with other developers. Clean code is easier for others to understand and contribute to. Before we begin writing more complex JavaScript, let's make sure we understand how to organize our code using the best, most professional practices from the very beginning.",source:"@site/docs/test_intro/2_javascript_and_web_browsers/1m_business_and_user_interface_logic.md",sourceDirName:"test_intro/2_javascript_and_web_browsers",slug:"/test_intro/javascript_and_web_browsers/business_and_user_interface_logic",permalink:"/lhtp/test_intro/javascript_and_web_browsers/business_and_user_interface_logic",draft:!1,tags:[],version:"current",sidebarPosition:37,frontMatter:{title:"14. Business and User Interface Logic",id:"business_and_user_interface_logic",slug:"business_and_user_interface_logic",hide_table_of_contents:!0,sidebar_position:37,day:"monday",type:"lesson",url:"https://github.com/epicodus-classroom/test-intro/blob/main/2_javascript_and_web_browsers/1m_business_and_user_interface_logic.md"},sidebar:"test_intro",previous:{title:"13. Adding JS to a Project",permalink:"/lhtp/test_intro/javascript_and_web_browsers/adding_js_to_a_project"},next:{title:"15. Calculator UI and Business Logic",permalink:"/lhtp/test_intro/javascript_and_web_browsers/calculator_ui_and_business_logic"}},l={},c=[{value:"User Interface and Business Logics",id:"user-interface-and-business-logics",level:2},{value:"Separation of Logic",id:"separation-of-logic",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Well-organized code is easier to debug, it appears more professional, and is easier to revisit later. Writing organized code is a highly-valued skill in the programming field. When working on a team, you'll often collaborate with other developers. Clean code is easier for others to understand and contribute to. Before we begin writing more complex JavaScript, let's make sure we understand how to organize our code using the best, most professional practices from the very beginning."),(0,a.kt)("p",null,"One of the most important organizational rules to follow is keeping what is known as your user interface and business logic separate. In this lesson we'll explore what user interface and business logics are, and what each handles."),(0,a.kt)("h2",{id:"user-interface-and-business-logics"},"User Interface and Business Logics"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Consider a basic calculator application. Its code falls into two categories: Code that performs calculations, or code responsible for interacting with the user."),(0,a.kt)("p",null,"The code that handles arithmetic is the ",(0,a.kt)("strong",{parentName:"p"},"business logic"),". It's the 'inner workings' of the application that performs calculations and returns a value. It's what takes the numbers ",(0,a.kt)("inlineCode",{parentName:"p"},"4")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"5"),", adds them together, and arrives at ",(0,a.kt)("inlineCode",{parentName:"p"},"9"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"add()")," function we've created is a business logic function."),(0,a.kt)("p",null,"The code that handles interacting with users is the ",(0,a.kt)("strong",{parentName:"p"},"user interface logic"),". It retrieves and displays information from the user and provides it to the business logic to calculate. While buttons on a calculator may be ",(0,a.kt)("em",{parentName:"p"},"labeled")," with numbers, they're just visual buttons. User interface logic is what translates clicking on this area of the page:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week2-js-jquery/button-on-calculator.png",alt:"button-on-calculator"})),(0,a.kt)("p",null,"... into the number ",(0,a.kt)("inlineCode",{parentName:"p"},"4"),".  After all, we cannot perform addition on ",(0,a.kt)("em",{parentName:"p"},"buttons"),", but you can perform addition on ",(0,a.kt)("em",{parentName:"p"},"numbers"),'. The user interface logic registers that the user has pushed the button labeled "4". It then provides the number ',(0,a.kt)("inlineCode",{parentName:"p"},"4")," to the business logic where we may perform calculations with it."),(0,a.kt)("p",null,'Let\'s say we also press the buttons labeled "+" and "5". The user interface logic also translates these interactions into the number ',(0,a.kt)("inlineCode",{parentName:"p"},"5")," and recognizes it will need a method for addition. The business logic then adds the numbers ",(0,a.kt)("inlineCode",{parentName:"p"},"4")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"5")," together, and returns ",(0,a.kt)("inlineCode",{parentName:"p"},"9"),". The user interface logic can then display this result to the user:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week2-js-jquery/result-displayed-from-calculator.png",alt:"result-from-calculator"})),(0,a.kt)("p",null,"User interface logic handles interacting with the user including displaying or gathering information. The business logic handles calculating or manipulating information behind the scenes."),(0,a.kt)("h2",{id:"separation-of-logic"},"Separation of Logic"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Our goal is to write clean, well-organized code. ",(0,a.kt)("strong",{parentName:"p"},"Because user interface and business logic have separate purposes, their code should always be separate"),". Keep this rule in mind as we begin to explore event handling in the coming lessons."),(0,a.kt)("p",null,"You may be wondering about ",(0,a.kt)("inlineCode",{parentName:"p"},"window.prompt()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"window.alert()"),". These are both considered user interface logic, because they handle gathering and displaying information to the user. However, ",(0,a.kt)("inlineCode",{parentName:"p"},"window.prompt()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"window.alert()")," really shouldn't be in our code at all \u2014 very few users like to be prompted or alerted (and both now have strong associations with hacky sites and malware). We've been using these ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," methods because they are the easiest way for beginners to get a user response, and we will continue to use them for a little while longer because they are so easy to use \u2014 but be aware they should generally be avoided."),(0,a.kt)("p",null,"At this point, it's okay if everything we discussed isn't entirely clear right now. Just understand the basic differences between these two logics, and know they should be separate. Throughout the section, we will see what this actually looks like in practice. By keeping this basic information in mind ",(0,a.kt)("em",{parentName:"p"},"before")," we write more complex JavaScript, you'll learn the most professional practices from the very beginning!"))}p.isMDXComponent=!0}}]);