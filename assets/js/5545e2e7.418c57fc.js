"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[98082],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(o),d=n,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||a;return o?r.createElement(m,i(i({ref:t},c),{},{components:o})):r.createElement(m,i({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},19229:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=o(87462),n=(o(67294),o(3905));const a={title:"Homework: Preparing for Your First Code Review",id:"homework_preparing_for_your_first_code_review",slug:"homework_preparing_for_your_first_code_review",hide_table_of_contents:!0,sidebar_position:18,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4l_preparing_for_your_first_code_review.md"},i=void 0,s={unversionedId:"introduction_to_programming_part_time/git-html-and-css-part-2/homework_preparing_for_your_first_code_review",id:"introduction_to_programming_part_time/git-html-and-css-part-2/homework_preparing_for_your_first_code_review",title:"Homework: Preparing for Your First Code Review",description:"What To Expect",source:"@site/docs/introduction_to_programming_part_time/2_git-html-and-css-part-2/4l_preparing_for_your_first_code_review.md",sourceDirName:"introduction_to_programming_part_time/2_git-html-and-css-part-2",slug:"/introduction_to_programming_part_time/git-html-and-css-part-2/homework_preparing_for_your_first_code_review",permalink:"/introduction_to_programming_part_time/git-html-and-css-part-2/homework_preparing_for_your_first_code_review",draft:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"Homework: Preparing for Your First Code Review",id:"homework_preparing_for_your_first_code_review",slug:"homework_preparing_for_your_first_code_review",hide_table_of_contents:!0,sidebar_position:18,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4l_preparing_for_your_first_code_review.md"},sidebar:"introduction_to_programming_part_time",previous:{title:"Centering Elements and Images",permalink:"/introduction_to_programming_part_time/git-html-and-css-part-2/centering_elements_and_images"},next:{title:"Homework: Git Expectations for Independent Projects",permalink:"/introduction_to_programming_part_time/git-html-and-css-part-2/homework_git_expectations_for_independent_projects"}},l={},u=[{value:"What To Expect",id:"what-to-expect",level:2},{value:"Strategy #1: Focus On the Minimum Viable Product",id:"strategy-1-focus-on-the-minimum-viable-product",level:2},{value:"MVP Example",id:"mvp-example",level:3},{value:"MVP Benefits",id:"mvp-benefits",level:3},{value:"Strategy #2: Learn From the Bugs You Encounter",id:"strategy-2-learn-from-the-bugs-you-encounter",level:2},{value:"What To Do When You Hit a Wall",id:"what-to-do-when-you-hit-a-wall",level:3},{value:"Different Troubleshooting Techniques",id:"different-troubleshooting-techniques",level:3},{value:"Strategy #3: Review Your Work",id:"strategy-3-review-your-work",level:2},{value:"Summary",id:"summary",level:2}],c={toc:u},h="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(h,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-to-expect"},"What To Expect"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"The primary goal of every code review is learning and practice. While the format will prepare you for code reviews at your future workplace, at Epicodus, code reviews are an opportunity to solidify the core concepts you\u2019ve learned in a course section. Because of this, the code review prompts are generally easier than the practice prompts that you encounter towards the end of a course section (which are designed to push your comfort level). "),(0,n.kt)("p",null,"However, ",(0,n.kt)("strong",{parentName:"p"},"we do not expect students to perfectly understand or apply the concepts from the course section.")," We know the time it takes to understand a concept varies, and may require a conversation with your instructor. It can be unnecessarily demoralizing to feel like you are falling behind because you ",(0,n.kt)("em",{parentName:"p"},"think")," you did not do well on a code review. In these cases, trust your instructor to let you know how you are doing. As instructors, we commonly see that students feel badly about their performance when there's no reason to. If you need reassurance about your work and progress, please reach out to your instructor."),(0,n.kt)("p",null,"We know that some students have testing-related anxieties, and other students are getting back into a structured educational setting for the first time in a while. Both of these (and other anxieties) can make it more challenging to do well on a code review. If you can relate, please keep in mind that there's always the opportunity to revise your work after you receive feedback and direction from your instructor. It's OK to not get things perfect the first time around. We also see that some students struggle on the first few code reviews, but do fine thereafter because they\u2019ve gotten used to the assignment and assessment structure at Epicodus. Whatever your experience is, if you feel like you are struggling, check in with your instructor to get some reassurance."),(0,n.kt)("p",null,"Our biggest expectation for students is to use the time during a code review to develop their general research and creative troubleshooting skills. Developers hit walls all of the time, and you will, too. The best tool to move past a roadblock is to be persistent and continue troubleshooting! The more you spend time developing these skills, the stronger they will become. In the long run, this will help you become a self-sufficient developer who is able to take on more complex and ambiguous programming tasks. "),(0,n.kt)("p",null,"We have some practical strategies for approaching code review to share with you in this lesson. Continue reading, and bring any questions or concerns to your instructor. "),(0,n.kt)("h2",{id:"strategy-1-focus-on-the-minimum-viable-product"},"Strategy #1: Focus On the Minimum Viable Product"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"In web development, ",(0,n.kt)("strong",{parentName:"p"},"MVP")," stands for ",(0,n.kt)("strong",{parentName:"p"},"minimum viable product"),". As the name implies, this is the ",(0,n.kt)("em",{parentName:"p"},"minimum")," or ",(0,n.kt)("em",{parentName:"p"},"most basic")," version of an application. The MVP must solve the problem the application is meant to address \u2014 but only in a basic form, without added bells and whistles such as styling, more advanced user interface (UI) features and other stretch goals."),(0,n.kt)("h3",{id:"mvp-example"},"MVP Example"),(0,n.kt)("p",null,"Let's consider some examples of MVPs. For instance, consider the Wright Brothers' famous first flight in 1903 \u2014 it lasted under a minute and the Flyer traveled 852 feet \u2014 and was badly damaged in the process. The Flyer was so unstable that only the Wright brothers could get it in the air at all."),(0,n.kt)("p",null,"But that was the MVP \u2014 they did achieve flight, even if only for a very brief period of time.\nAt that point, the Wright brothers began thinking about improvements they could make to their design. How could it fly longer and higher? How could it be more stable? How could they improve the UI so others could fly their machines? These are all stretch goals beyond the MVP."),(0,n.kt)("p",null,"From the perspective of designing a web application that's an MVP, it's typical to go through the following process:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Build an MVP that does the thing it's supposed to do \u2014 whether it's flying or teaching customers how to make pizza."),(0,n.kt)("li",{parentName:"ul"},"Once the MVP is done, talk to potential users and customers. What can be done to make the product better?")),(0,n.kt)("h3",{id:"mvp-benefits"},"MVP Benefits"),(0,n.kt)("p",null,"By following this MVP process to create our product, we reap two distinct benefits:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"We have a functioning product completed sooner"),". While it may not have all the fancy features we envision, it's better to prioritize building a functioning prototype with fewer features than to add too many features at once, which can result in delays and missed deadlines. You can always add those extra features after your basic MVP is finished."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"We can also gather user feedback before adding extra features"),". After creating an MVP, users can beta-test it and provide feedback. This allows you to determine what additional features users actually want. ")),(0,n.kt)("p",null,"For code reviews at Epicodus, the first benefit is what matters most to us: getting the project done on time. It's easy to get side tracked in general, not to mention side tracked on the bells and whistles of a project. There's also room for your creative direction in code reviews, and we encourage students to have fun with the styling and logic of their websites. However, the downside of this is getting too focused on features that are not a part of the core required functionality, which often results in not completing the project by the end of the work session. Because of this, we strongly suggest that you focus on building your project's MVP first. After that, you can revisit your code and make it more complex, or make improvements to your UI."),(0,n.kt)("p",null,"Every code review prompt has a theme and specific required objectives, which outline the MVP of the application. To stay on track with the MVP, some students find it helpful to create a list of objectives from the CR prompt that they can check off throughout the day. Other students find it helpful to review the prompt requirements at the beginning and end of their work session to ensure they\u2019ve met all of the required objectives. "),(0,n.kt)("p",null,"Do what works best for you, but make sure to focus on the MVP first."),(0,n.kt)("h2",{id:"strategy-2-learn-from-the-bugs-you-encounter"},"Strategy #2: Learn From the Bugs You Encounter"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Running into bugs is a part of the development process. A quick search for web development jokes returns many memes and comics that lament the trials of facing bugs. Sometimes fixing a bug can take hours or days and there's a high likelihood of feeling frustrated. If the bug turns out to be due to a typo, you may even feel a bit silly after solving it. However, this is a normal part of programming, especially when you are just starting out!"),(0,n.kt)("p",null,"Hands down, working on a bug makes for some of the best learning experiences. Sure, it will be frustrating, but debugging is a vital part of developing your troubleshooting and research skills. "),(0,n.kt)("h3",{id:"what-to-do-when-you-hit-a-wall"},"What To Do When You Hit a Wall"),(0,n.kt)("p",null,"When you are working on a bug for a while, or you are just not sure where to start troubleshooting, this is what we suggest: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Take a break"),". Go for a walk, eat a snack, and do whatever you can to get your mind off of the problem. "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Come back to the bug.")," Returning to a problem after a break can help you see your code in a brand new way. "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Be persistent"),". Try out multiple different troubleshooting techniques (see below), one at a time. Keep a record of what you do. Generally, trying out one troubleshooting measure at a time is best to avoid potentially making the problem worse, or solving the problem without knowing why."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Get help"),". If you\u2019ve exhausted your troubleshooting ideas and cannot solve the bug, write a submission note for your instructor about the issue and all of the things you\u2019ve done to try and solve it. If possible, move onto a different aspect of the project.")),(0,n.kt)("h3",{id:"different-troubleshooting-techniques"},"Different Troubleshooting Techniques"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Review the context of your error.")," What did you last do? Undo your last change (with ctrl + z or cmd + z) \u2014 does this undo the bug? It can be helpful to trace your last steps.\n",(0,n.kt)("strong",{parentName:"p"},"Read and research the error message.")," Make sure to pay attention to the date listed on any resource you find. Solutions can be outdated, or platform-specific (for example, specific to a browser or operating system). Error messages often have a line number potentially pointing to the problem in the code.\n",(0,n.kt)("strong",{parentName:"p"},"Research solutions online.")," If you are hitting a wall, look to documentation online for different ways to achieve your goal. You might come across a different tool or method that helps you achieve your coding goal. Generally speaking, avoid using code that you find online that you do not understand.\n",(0,n.kt)("strong",{parentName:"p"},"Look at official documentation.")," If you are executing a series of steps to do something (like creating a gh-pages for your website) and you are not arriving at the expected outcome, it can be helpful to review official documentation."),(0,n.kt)("h2",{id:"strategy-3-review-your-work"},"Strategy #3: Review Your Work"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"This is as straightforward as it sounds: at the end of your work session, review the prompt and your project to make sure you\u2019ve completed all requirements.  While you don\u2019t know what you don\u2019t know, reviewing your work against the project requirements can help you find things you\u2019ve missed or forgotten."),(0,n.kt)("p",null,"In the end, it is your responsibility to complete the project requirements, and you can do that whenever you have the time. If you know something is missing by the time you need to submit your project, you can submit your project ",(0,n.kt)("em",{parentName:"p"},"and")," continue working on it. You also don\u2019t have to wait for instructor feedback to continue to work on your project.  Simply continue to commit and push your changes to your remote repo, and your teacher will see those changes."),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"In this lesson, we covered general expectations for code reviews and common challenges we see. We also reviewed three strategies that can help you be more successful in your code reviews:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Focus on your project's MVP"),(0,n.kt)("li",{parentName:"ul"},"Learn from the bugs you encounter"),(0,n.kt)("li",{parentName:"ul"},"Review your work")),(0,n.kt)("p",null,"Remember, the languages, tools, and approaches you'll learn here are much less important than the general skills of solving problems. If you hit a wall, this is normal. Take a break if you need to, and when you come back to the problem, be persistent and draw on all of your resources."))}p.isMDXComponent=!0}}]);