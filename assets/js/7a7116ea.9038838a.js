"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[80924],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=i,h=p["".concat(l,".").concat(g)]||p[g]||d[g]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},77160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"What We'll Learn in this Section",id:"what_we'll_learn_in_this_section",slug:"what_we'll_learn_in_this_section",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/5_tdd-and-debugging/0a_debugging_and_tdd.md",paginationPrev:null},o=void 0,s={unversionedId:"c_and_net_part_time/tdd-and-debugging/what_we'll_learn_in_this_section",id:"c_and_net_part_time/tdd-and-debugging/what_we'll_learn_in_this_section",title:"What We'll Learn in this Section",description:"In this C# and .NET pre-work section, we'll learn about testing and debugging tools, and in this lesson, we'll get a sense of what exactly we'll be doing in this section.",source:"@site/docs/c_and_net_part_time/5_tdd-and-debugging/0a_debugging_and_tdd.md",sourceDirName:"c_and_net_part_time/5_tdd-and-debugging",slug:"/c_and_net_part_time/tdd-and-debugging/what_we'll_learn_in_this_section",permalink:"/lhtp/c_and_net_part_time/tdd-and-debugging/what_we'll_learn_in_this_section",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"What We'll Learn in this Section",id:"what_we'll_learn_in_this_section",slug:"what_we'll_learn_in_this_section",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/5_tdd-and-debugging/0a_debugging_and_tdd.md",paginationPrev:null},sidebar:"c_and_net_part_time",previous:{title:"Configuration Reference and Review of C# Conventions",permalink:"/lhtp/c_and_net_part_time/basic-console-apps/configuration_reference_and_review_of_c_conventions"},next:{title:"Review: the Red, Green, Refactor Workflow and Testing Best Practices",permalink:"/lhtp/c_and_net_part_time/tdd-and-debugging/review_the_red_green_refactor_workflow_and_testing_best_practices"}},l={},c=[{value:"Automated Unit Testing",id:"automated-unit-testing",level:2},{value:"The Benefits of TDD",id:"the-benefits-of-tdd",level:3},{value:"Plan for Learning",id:"plan-for-learning",level:3},{value:"Debugging",id:"debugging",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this C# and .NET pre-work section, we'll learn about testing and debugging tools, and in this lesson, we'll get a sense of what exactly we'll be doing in this section."),(0,i.kt)("h2",{id:"automated-unit-testing"},"Automated Unit Testing"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"In this section, we'll review the Test-Driven Development (TDD) principles and practices that we learned in Intermediate JavaScript. Then, we'll write automated unit tests for our C# and .NET Shape Tracker app. Notably, most of this curriculum will be a ",(0,i.kt)("em",{parentName:"p"},"review")," and not brand new information \u2014 that's because the core concepts of TDD, the Red-Green-Refactor (RGR) workflow, and general testing best practices are the same across languages and testing frameworks."),(0,i.kt)("p",null,"Let's review terminology:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Test-Driven Development (TDD):")," In TDD, the process of writing code is intertwined with writing tests for that code. When we use TDD, we break our code down into the smallest pieces of functionality we can. Next, we write a test for a piece of functionality before we add that functionality to our code. Finally, we add the code to make that test pass."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Red-Green-Refactor (RGR) Workflow:")," The RGR workflow helps us follow best practices for testing. When we use the RGR workflow, we complete three phases for each test we write:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"(Red phase.) After writing a test, we first confirm the test we've written is failing first to ensure there are no false positives (a test that is passing when it should not be). The test should be failing because there should be no code in place to make the test pass."),(0,i.kt)("li",{parentName:"ol"},"(Green phase.) After confirming that the test is failing, we write just enough code to make the test pass and run our automated testing software to ensure that the test is passing."),(0,i.kt)("li",{parentName:"ol"},"(Refactor phase.) After completing the red and green phases, we can optionally refactor our code. After refactoring our code, we need to run our automated tests to make sure that all are still passing."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Automated versus Manual Testing:")," When we write ",(0,i.kt)("strong",{parentName:"li"},"automated")," tests, we are writing coded tests that are run by software (like Jest or MSTest). When we perform ",(0,i.kt)("strong",{parentName:"li"},"manual testing"),", we are clicking around our application (or something similar) to confirm that our code is running as expected. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Unit Tests:")," A unit test focuses on testing a single component of our source code, like a class field or method."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Integration Tests:"),' An integration test focuses on testing how multiple source code components work as a group, typically a combination of business logic and user interface logic. For example, an integration test might check that a user can properly fill out a form, submit it, and be re-routed to a "success page".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"MSTest:")," The testing framework we'll use to write unit tests for our C#/.NET code. Within each unit test, we can list an expected result and then our test will let us know whether that expected result is achieved or not. Just like with Jest and JavaScript, MSTest is just ",(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/core/testing/"},"one of many .NET testing frameworks we can use.")," Visit ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/testfx"},"the MSTest GitHub repo")," to access additional documentation.")),(0,i.kt)("h3",{id:"the-benefits-of-tdd"},"The Benefits of TDD"),(0,i.kt)("p",null,"It's important to review why we bother writing tests at all. Frankly, even if you don't write tests, your code will still be tested. Can you guess who will do this? The customer, of course! That's ",(0,i.kt)("strong",{parentName:"p"},"not")," something we want, and precisely why we write tests: to ensure that the code we write functions as expected. "),(0,i.kt)("p",null,"But writing tests is just one very obvious aspect of Test-Driven Development. Let's take a moment to review all of the advantages of TDD:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TDD helps us create a plan.")," By taking time to think through a program, identify behaviors, and tackle the simplest first, we're creating a game plan. We are laying out each step we need to take in detail, which leads to the next benefit."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"It's easier to tackle complex problems.")," Even the most experienced coders can struggle with approaching complex issues. By identifying and testing the smallest possible behavior at a time, we can take baby steps towards solving bigger problems."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"It prevents errors and makes bugs easier to locate.")," When we implement and test a single behavior at a time, we're preventing errors. Testing each behavior before moving on allows us to spot bugs as soon as they're introduced. Without TDD, we might not spot some of these bugs until they break our application. To make matters worse, if we add more code after introducing a bug, other parts of our application will likely be reliant on our buggy code. To resolve this issue, we'd need to locate the bug, resolve it, and potentially alter all the code that depends on the buggy code. That's a lot of work."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"It allows us to create projects faster.")," Starting a complex project can be daunting. Even if we aren't sure how to code the more difficult features of our application, we can hit the ground running by implementing smaller, identifiable functionality. As we work, the bigger picture will come into focus."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"New features are built upon reliable code.")," By testing functionality as it's implemented and ensuring previous tests still pass when new functionality is introduced, new features are always built on a foundation of reliable, tested code."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"It keeps code DRY.")," By implementing the least amount of code to pass each test, we keep our code DRY. By approaching each piece of our project's functionality individually, we are likely to write more modular code. Modular code is easier to maintain, update, and debug."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"It's employable.")," Testing is an important part of the tech industry and many tech careers rely on it \u2014 ranging from developers and QA testers to devops specialists and site reliability engineers."),(0,i.kt)("h3",{id:"plan-for-learning"},"Plan for Learning"),(0,i.kt)("p",null,"To learn how to use MSTest, we'll revisit our Shape Tracker app and write automated unit tests for all of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," class business logic. We'll start by removing the class entirely so that we can practice true TDD where we write the test before writing the corresponding source code. In the end, we'll learn how to test the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A class constructor."),(0,i.kt)("li",{parentName:"ul"},"A private field via getter and setter methods."),(0,i.kt)("li",{parentName:"ul"},"A private field via a public property."),(0,i.kt)("li",{parentName:"ul"},"An auto-implemented public property (which implicitly creates a private field)."),(0,i.kt)("li",{parentName:"ul"},"Static class members."),(0,i.kt)("li",{parentName:"ul"},"Collections (like lists and dictionaries).")),(0,i.kt)("p",null,"We'll also learn how to use the following MSTest tools:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'How to use "arrange, act, assert" to organize tests.'),(0,i.kt)("li",{parentName:"ul"},"The test methods for collections (like lists) versus non-collections."),(0,i.kt)("li",{parentName:"ul"},"How to implement a teardown method that is run between each test.")),(0,i.kt)("h2",{id:"debugging"},"Debugging"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We'll end this pre-work section by reviewing debugging and development tools that we can use in C# .NET console apps. When we begin to learn how to create web applications, we'll revisit debugging and learn about other tools at our disposal."))}d.isMDXComponent=!0}}]);