"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[39204],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,p=d["".concat(l,".").concat(h)]||d[h]||g[h]||r;return n?o.createElement(p,i(i({ref:t},c),{},{components:n})):o.createElement(p,i({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},51061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(87462),a=(n(67294),n(3905));const r={title:"12. Debugging Tools",id:"debugging_tools",slug:"debugging_tools",hide_table_of_contents:!0,sidebar_position:12,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/5_tdd-and-debugging/0l_debugging_tools.md"},i=void 0,s={unversionedId:"c_and_net_part_time_evening/tdd-and-debugging/debugging_tools",id:"c_and_net_part_time_evening/tdd-and-debugging/debugging_tools",title:"12. Debugging Tools",description:"As our applications grow, we'll run into more complex bugs. Fortunately, there are multiple tools, techniques and approaches to quickly locate and squash pesky bugs.",source:"@site/docs/c_and_net_part_time_evening/5_tdd-and-debugging/0l_debugging_tools.md",sourceDirName:"c_and_net_part_time_evening/5_tdd-and-debugging",slug:"/c_and_net_part_time_evening/tdd-and-debugging/debugging_tools",permalink:"/lhtp/c_and_net_part_time_evening/tdd-and-debugging/debugging_tools",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"12. Debugging Tools",id:"debugging_tools",slug:"debugging_tools",hide_table_of_contents:!0,sidebar_position:12,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/5_tdd-and-debugging/0l_debugging_tools.md"},sidebar:"c_and_net_part_time_evening",previous:{title:"11. MSTest Configuration Quick Reference",permalink:"/lhtp/c_and_net_part_time_evening/tdd-and-debugging/mstest_configuration_quick_reference"},next:{title:"13. Improving Development by Using a Watcher",permalink:"/lhtp/c_and_net_part_time_evening/tdd-and-debugging/improving_development_by_using_a_watcher"}},l={},u=[{value:"General Debugging Techniques for Any Language",id:"general-debugging-techniques-for-any-language",level:2},{value:"Learn to Love Errors!",id:"learn-to-love-errors",level:3},{value:"<em>&quot;What if I have no errors?!&quot;</em>",id:"what-if-i-have-no-errors",level:3},{value:"Document Work",id:"document-work",level:3},{value:"Use the Console",id:"use-the-console",level:3},{value:"Comment Out Until it Works and Then Uncomment Until it Breaks Again",id:"comment-out-until-it-works-and-then-uncomment-until-it-breaks-again",level:3},{value:"Googling",id:"googling",level:3},{value:"Don&#39;t Get Mad",id:"dont-get-mad",level:3},{value:"One Thing at a Time",id:"one-thing-at-a-time",level:3},{value:"Ask a Friend",id:"ask-a-friend",level:3},{value:"When We Find the Solution...",id:"when-we-find-the-solution",level:3}],c={toc:u},d="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As our applications grow, we'll run into more complex bugs. Fortunately, there are multiple tools, techniques and approaches to quickly locate and squash pesky bugs."),(0,a.kt)("h2",{id:"general-debugging-techniques-for-any-language"},"General Debugging Techniques for Any Language"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"learn-to-love-errors"},"Learn to Love Errors!"),(0,a.kt)("p",null,"C# offers lots of information when we encounter an error. Errors are there to give clues. They might not tell us exactly what's wrong with our code but they usually point us in the right direction."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The first step in debugging should always be to follow the errors.")," Check the line number that the error references as well as the lines directly before and after the error. So much of programming is about pattern recognition, which is why stylistic things like indentation are important. As we get used to the way clean code looks, more mistakes will be visually obvious and easier to debug."),(0,a.kt)("p",null,"Let's briefly look at two common errors within the C# REPL."),(0,a.kt)("p",null,"The first error message lets us know that the variable doesn't exist in the current context. When we get an error message like that, it's almost always because there's a typo. Indeed, that's the issue in the following code."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/prework/error-variable-doesnt-exist-due-to-typo.png",alt:"Error that tells us that a variable doesn't exist, because of a typo."})),(0,a.kt)("p",null,"The next error message could actually be due to a handful of issues. Take a look:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/prework/error-method-doesnt-exist-due-to-casing.png",alt:"Error that tells us that a method doesn't exist because of incorrect casing."})),(0,a.kt)("p",null,"We could be getting this error because we've forgotten a using directive, there's a typo in the method/field/property/class name that we're referencing, and even if we're using incorrect case. When there are many reasons why something is wrong, we need to look at the context. "),(0,a.kt)("p",null,"In this example, we're using incorrect case. If we look at the context and error message, it's letting us know that ",(0,a.kt)("inlineCode",{parentName:"p"},"toUpper()")," doesn't exist. When we double check the spelling of the ",(0,a.kt)("inlineCode",{parentName:"p"},"String.ToUpper()")," instance method, we should be able to see that we used incorrect case. However, sometimes it takes a fresh pair of eyes (someone else looking at our code) to spot these pesky typos."),(0,a.kt)("p",null,"Finally, take note that compiler errors typically have an ID number that we can use to look up more information about the error. In the above two examples, there's C# error codes CS0103 and CS1061."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Remember to carefully read error messages from failed tests.")," Test failure messages contain a lot of information about what failed, where, and why. Check out the following failure message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{style:{color:"red"}},"Failed CheckType_DeterminesWhenScalene_String [59 ms] Error Message: Assert.AreEqual failed. Expected:<scalene>. Actual:<not a triangle>. Stack Trace: at ShapeTracker.Tests.TriangleTests.CheckType_DeterminesWhenScalene_String() in C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ModelTests\\TriangleTests.cs:line 107 Failed!  - Failed:     1, Passed:     8, Skipped:     0, Total:     9, Duration: 117 ms - ShapeTracker.Tests.dll (net6.0)")),(0,a.kt)("p",null,"In the failure message, we can get the following helpful information about what went wrong:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We can read the name of the test method that failed, ",(0,a.kt)("inlineCode",{parentName:"li"},"CheckType_DeterminesWhenScalene_String")),(0,a.kt)("li",{parentName:"ul"},"We can see the values for what we expect, ",(0,a.kt)("inlineCode",{parentName:"li"},"Expected:<scalene>"),", versus what we actually got, ",(0,a.kt)("inlineCode",{parentName:"li"},"Actual:<not a triangle>"),"."),(0,a.kt)("li",{parentName:"ul"},"We can see a stack trace that takes us to the failed ",(0,a.kt)("inlineCode",{parentName:"li"},"Assert.AreEqual()")," method on line 107 of ",(0,a.kt)("inlineCode",{parentName:"li"},"TriangleTests.cs"),".")),(0,a.kt)("h3",{id:"what-if-i-have-no-errors"},(0,a.kt)("em",{parentName:"h3"},'"What if I have no errors?!"')),(0,a.kt)("p",null,"Sometimes code won't execute as expected and there isn't a detailed error. If this happens, don't panic! Again, it's important to accept that encountering bugs is just part of programming. Here's a few of the most common methods for debugging."),(0,a.kt)("h3",{id:"document-work"},"Document Work"),(0,a.kt)("p",null,"It's easy to get lost when debugging if we don't keep track of what we've tried already."),(0,a.kt)("p",null,"As we debug, it's important to write down what we try and what the result is. This keeps track of the clues we uncover while we're troubleshooting. It also makes it easier to explain a problem to someone else. If other developers can see what we've tried so far, they can better understand the issue at hand. Instead of simply saying \"my code isn't working,\" we can say something like  \"My code isn't working and I've tried X and Y.\""),(0,a.kt)("p",null,"Organization is key \u2014 we don't want to be running in circles trying the same things over and over. We also want to be able to succinctly communicate our issues and troubleshooting attempts to other developers."),(0,a.kt)("h3",{id:"use-the-console"},"Use the Console"),(0,a.kt)("p",null,"We can use ",(0,a.kt)("inlineCode",{parentName:"p"},"Console.WriteLine()")," to print the value of variables, what a method is returning, and so on. In fact, we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"Console.WriteLine()")," just as we use ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log()")," with JavaScript. This is one of the easiest and most useful ways we can debug our code."),(0,a.kt)("h3",{id:"comment-out-until-it-works-and-then-uncomment-until-it-breaks-again"},"Comment Out Until it Works and Then Uncomment Until it Breaks Again"),(0,a.kt)("p",null,"Another good way to diagnose what's wrong with our code is to debug it one section at a time. Comment out everything in a problematic area of code. Then uncomment out code line by line, seeing what works and what doesn't. This can help determine exactly which line caused the issue."),(0,a.kt)("p",null,"Also, regular commits can help us with debugging. We should commit whenever we make working updates. That way, when our code breaks and we can't find a way out, we can revert to a previous commit. We can check our previous revisions on GitHub by clicking on ",(0,a.kt)("em",{parentName:"p"},"Commits")," in the top left corner of a repo."),(0,a.kt)("p",null,"We can also revert our code to a previous commit by running the following series of commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git log --oneline\n")),(0,a.kt)("p",null,"This will list all of our local Git commits. Locate the number of the commit to revert back to and save it."),(0,a.kt)("p",null,"Then, run the following command, providing the specific commit number:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git reset <commit-number>\n")),(0,a.kt)("p",null,"For example, if a commit had the identifier ",(0,a.kt)("inlineCode",{parentName:"p"},"56e05fced"),", we would revert back to that point in time with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git reset 56e05fced\n")),(0,a.kt)("h3",{id:"googling"},"Googling"),(0,a.kt)("p",null,"Google is a fantastic tool but should be used with caution. Look at message boards like Stack Overflow to see if others have encountered a similar problem. However, when using someone else's code, it's essential to understand exactly what it does. Blindly copying and pasting code because \"it just works\" will only create headaches later."),(0,a.kt)("h3",{id:"dont-get-mad"},"Don't Get Mad"),(0,a.kt)("p",null,"Sometimes it's necessary to take a break and step away from our code, especially if we find ourselves getting angry or frustrated. Take a walk or have a snack. Stepping away from a problem can also indirectly \u2014 or even directly \u2014 lead to a solution. This is in part because our brains often continue to mull over the problem in a subconscious, decentralized way, which might be just what we need to attack the issue from a different angle."),(0,a.kt)("h3",{id:"one-thing-at-a-time"},"One Thing at a Time"),(0,a.kt)("p",null,"Step through code line by line from beginning to end. It can help to say the code out loud or even write it down. Try testing code in a REPL, check the value of variables and so on. Simplify everything. Check code that is assumed to be working \u2014 we might have accidentally introduced a bug or there could be another unintended effect of that code we haven't considered."),(0,a.kt)("p",null,"For example, maybe nothing is working because we've been editing the wrong copy of the file. We have seen this happen many times to students!"),(0,a.kt)("h3",{id:"ask-a-friend"},"Ask a Friend"),(0,a.kt)("p",null,"Ask a classmate to take a look. Sometimes a different pair of eyes can spot something simple like a spelling error. In fact, frequently, just the act of explaining a problem to someone can be enough to help figure out a solution."),(0,a.kt)("h3",{id:"when-we-find-the-solution"},"When We Find the Solution..."),(0,a.kt)("p",null,'Document all bugs and their solutions. We should discuss the solution with our pair and ask ourselves the following questions: "How will I prevent this problem from happening again? What error messages should I watch for? If I see the error again, where should I look for a solution?" This will help save time so we can learn from our mistakes. Embrace bugs as an opportunity to learn programming more deeply and to avoid future bugs.'))}g.isMDXComponent=!0}}]);