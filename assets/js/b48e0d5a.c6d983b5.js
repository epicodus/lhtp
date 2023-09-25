"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[25199],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"Switch Cases",id:"switch_cases",slug:"switch_cases",hide_table_of_contents:!0,sidebar_position:3,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/4_object-oriented-javascript-part-2/3c_switch_cases.md"},i=void 0,s={unversionedId:"intermediate_javascript_part_time/object-oriented-javascript-part-2/switch_cases",id:"intermediate_javascript_part_time/object-oriented-javascript-part-2/switch_cases",title:"Switch Cases",description:"In JavaScript and Web Browsers, we explored branching in depth. In this lesson, we'll learn about switch statements, which is another way of writing a conditional. Switch statements are also called switch cases. Switch cases do not add any additional functionality that we can't do with the branching we've already learned. However, you will likely see them in code samples on the internet (if you haven't already). They can also be a very convenient way to write conditionals that have many branches.",source:"@site/docs/intermediate_javascript_part_time/4_object-oriented-javascript-part-2/3c_switch_cases.md",sourceDirName:"intermediate_javascript_part_time/4_object-oriented-javascript-part-2",slug:"/intermediate_javascript_part_time/object-oriented-javascript-part-2/switch_cases",permalink:"/lhtp/intermediate_javascript_part_time/object-oriented-javascript-part-2/switch_cases",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Switch Cases",id:"switch_cases",slug:"switch_cases",hide_table_of_contents:!0,sidebar_position:3,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/4_object-oriented-javascript-part-2/3c_switch_cases.md"},sidebar:"intermediate_javascript_part_time",previous:{title:"Optional: Accessing Stylesheets in the CSSOM",permalink:"/lhtp/intermediate_javascript_part_time/object-oriented-javascript-part-2/optional_accessing_stylesheets_in_the_cssom"},next:{title:"Further Exploration: Local Storage",permalink:"/lhtp/intermediate_javascript_part_time/object-oriented-javascript-part-2/further_exploration_local_storage"}},l={},c=[{value:"Switch Cases",id:"switch-cases",level:2}],p={toc:c},h="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/javascript-and-web-browsers"},"JavaScript and Web Browsers"),", we explored branching in depth. In this lesson, we'll learn about ",(0,o.kt)("strong",{parentName:"p"},"switch statements"),", which is another way of writing a conditional. Switch statements are also called ",(0,o.kt)("strong",{parentName:"p"},"switch cases"),". Switch cases do not add any additional functionality that we can't do with the branching we've already learned. However, you will likely see them in code samples on the internet (if you haven't already). They can also be a very convenient way to write conditionals that have many branches."),(0,o.kt)("p",null,"You won't be expected to use switch statements for this section's independent project \u2014 and you may not even get a chance to explore them in this section (depending on whether you incorporate branching in your projects). However, it's important to know what they look like \u2014 and this lesson will provide a reference if you want to use them in the future."),(0,o.kt)("h2",{id:"switch-cases"},"Switch Cases"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Let's start by looking at the syntax of a switch statement. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const color = "red";\nswitch (color) {\n  case ("red"):\n    console.log("Red!");\n    break;\n  case ("green"):\n    console.log("Green!");\n    break;\n  case ("blue"):\n    console.log("Blue!");\n    break;\n  default:\n    console.log("It\'s not red, blue, or green.");\n}\n')),(0,o.kt)("p",null,"A switch statement uses the keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"switch"),". We then pass in an expression (in this case, ",(0,o.kt)("inlineCode",{parentName:"p"},"color"),", which contains the string ",(0,o.kt)("inlineCode",{parentName:"p"},'"red"'),"). When our code runs, it will execute the code in the ",(0,o.kt)("em",{parentName:"p"},"first")," ",(0,o.kt)("inlineCode",{parentName:"p"},"case")," clause that ",(0,o.kt)("em",{parentName:"p"},"matches")," ",(0,o.kt)("inlineCode",{parentName:"p"},'"red"'),". If none of the conditions match, the code in the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," clause will run. Try the code out in the DevTools console and you'll see that the first ",(0,o.kt)("inlineCode",{parentName:"p"},"case")," is executed."),(0,o.kt)("p",null,"Note that there is a ",(0,o.kt)("inlineCode",{parentName:"p"},"break;")," statement at the end of each ",(0,o.kt)("inlineCode",{parentName:"p"},"case"),". What happens if you take out each ",(0,o.kt)("inlineCode",{parentName:"p"},"break;")," and run the code? Let's do that \u2014 and also change ",(0,o.kt)("inlineCode",{parentName:"p"},"color")," to ",(0,o.kt)("inlineCode",{parentName:"p"},'"green"'),", which matches the second case."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const color = "green";\nswitch (color) {\n  case ("red"):\n    console.log("Red!");\n  case ("green"):\n    console.log("Green!");\n  case ("blue"):\n    console.log("Blue!");\n  default:\n    console.log("It\'s not red, blue, or green.");\n}\n')),(0,o.kt)("p",null,"The following will be logged to the console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Green!\nBlue!\nIt's not red, blue, or green.\n")),(0,o.kt)("p",null,"Well, that's not what we want here. If we omit ",(0,o.kt)("inlineCode",{parentName:"p"},"break;"),", a switch statement will execute the first clause that matches. Then it will continue to run subsequent cases until it hits a ",(0,o.kt)("inlineCode",{parentName:"p"},"break;")," or runs through every case (including the default)."),(0,o.kt)("p",null,"Take a look at this code. What do you think will be logged to the console?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const color = "red";\nswitch (color) {\n  case ("red"):\n    console.log("Red!");\n  case ("green"):\n    console.log("Green!");\n    break;\n  case ("blue"):\n    console.log("Blue!");\n    break;\n  default:\n    console.log("It\'s not red, blue, or green.");\n}\n')),(0,o.kt)("p",null,"The answer is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Red!\nGreen!\n")),(0,o.kt)("p",null,"This is because the switch statement will evaluate the first case as true and then run that code. Then, because there is no ",(0,o.kt)("inlineCode",{parentName:"p"},"break;"),", it will run the next case even though it doesn't actually match the color ",(0,o.kt)("inlineCode",{parentName:"p"},'"red"'),". Then it will hit a ",(0,o.kt)("inlineCode",{parentName:"p"},"break;")," and complete."),(0,o.kt)("p",null,"As you can see, omitting a ",(0,o.kt)("inlineCode",{parentName:"p"},"break;")," could lead to some unintended bugs."),(0,o.kt)("p",null,"Note also that we can't use comparison operators. What do you think will happen when we run this code?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// This code will NOT work as you might hope. Don\'t do this in your own code!\n\nconst number = 3;\nswitch (number) {\n  case (number > 0):\n    console.log("Number greater than 0!");\n    break;\n  case (number < 0):\n    console.log("Number less than 0!");\n    break;\n  default:\n    console.log("The number must be 0.");\n}\n')),(0,o.kt)("p",null,"You might hope that the following will be returned: ",(0,o.kt)("inlineCode",{parentName:"p"},'""Number greater than 0!"'),". However, that's not the case. Instead, this switch statement will return ",(0,o.kt)("inlineCode",{parentName:"p"},'"The number must be 0."'),". That's because it's looking for an ",(0,o.kt)("em",{parentName:"p"},"exact")," match with ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," \u2014 and ",(0,o.kt)("inlineCode",{parentName:"p"},"3 > 0")," equals ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," and not ",(0,o.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,o.kt)("p",null,"Because of these limitations, you might initially think switch statements aren't very useful. However, as long as you are evaluating exact matches (and don't forget to use ",(0,o.kt)("inlineCode",{parentName:"p"},"break;")," if needed), they can be much easier to read than ",(0,o.kt)("inlineCode",{parentName:"p"},"if...else")," statements \u2014 especially when a lot of branches are involved."),(0,o.kt)("p",null,"There are also situations where we might ",(0,o.kt)("em",{parentName:"p"},"want")," every case to run if a condition is met. In these situations, we don't need ",(0,o.kt)("inlineCode",{parentName:"p"},"break;")," at all."),(0,o.kt)("p",null,"Here's an example. We are creating an interactive application about a cat. The cat can have four happiness levels and the effects of happiness are cumulative. If our cat has a ",(0,o.kt)("inlineCode",{parentName:"p"},"happiness")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"4"),", we want every case to run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'switch (happiness) {\n  case (4):\n    console.log("MWAR! I love you!!!");\n  case (3):\n    console.log("PURR...");\n  case (2):\n    console.log("Purr...");\n  case (1):\n    console.log("Meow!");\n    break;\n  default:\n    console.log("grumble grumble...");\n}\n')),(0,o.kt)("p",null,"If we run the code above with a ",(0,o.kt)("inlineCode",{parentName:"p"},"happiness")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),", it'll return the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Purr...\nMeow!\n")),(0,o.kt)("p",null,"That sounds like a fairly happy cat."),(0,o.kt)("p",null,"If we run the code above with a ",(0,o.kt)("inlineCode",{parentName:"p"},"happiness")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"4"),", we'll get this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MWAR! I love you!!!\nPURR...\nPurr...\nMeow!\n")),(0,o.kt)("p",null,"Now that is a ",(0,o.kt)("em",{parentName:"p"},"very")," happy cat."),(0,o.kt)("p",null,"We could write the above code using ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"else")," instead. It looks like this..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'if (happiness > 3) {\n  console.log("MWAR! I love you!!!");\n}\nif (happiness > 2) {\n  console.log("PURR...");\n}\nif (happiness > 1) {\n  console.log("Purr...");\n}\nif (happiness > 0) {\n  console.log("Meow!");\n} else {\n  console.log("grumble grumble...");\n}\n')),(0,o.kt)("p",null,"While it's approximately the same number of lines, there's more to keep track of, including making sure we are using the correct comparison operators."),(0,o.kt)("p",null,"Ultimately, it comes down to a matter of preference. A switch statement is just syntactic sugar, meaning it uses an ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," statement under the hood. And, we can achieve the same thing with an ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," statement. However, switch statements are a good choice when it makes our code more concise and easier to read."))}u.isMDXComponent=!0}}]);