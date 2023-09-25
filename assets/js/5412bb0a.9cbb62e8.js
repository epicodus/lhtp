"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[8263],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},79357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"Booleans, Branching, and Operators",id:"booleans_branching_and_operators",slug:"booleans_branching_and_operators",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/3_data-types-variables-branching-and-looping/0e_branching_and_booleans.md"},i=void 0,o={unversionedId:"c_and_net_part_time_evening/data-types-variables-branching-and-looping/booleans_branching_and_operators",id:"c_and_net_part_time_evening/data-types-variables-branching-and-looping/booleans_branching_and_operators",title:"Booleans, Branching, and Operators",description:"As we learned in Intro, we can use branching to execute different code depending on specific conditions. In this lesson, we'll learn how to create booleans in C#. Then, we'll learn how to use both if/else and switch statements. We'll end this lesson by reviewing the operators we can use within conditionals and other resources for continued learning and exploration.",source:"@site/docs/c_and_net_part_time_evening/3_data-types-variables-branching-and-looping/0e_branching_and_booleans.md",sourceDirName:"c_and_net_part_time_evening/3_data-types-variables-branching-and-looping",slug:"/c_and_net_part_time_evening/data-types-variables-branching-and-looping/booleans_branching_and_operators",permalink:"/lhtp/c_and_net_part_time_evening/data-types-variables-branching-and-looping/booleans_branching_and_operators",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Booleans, Branching, and Operators",id:"booleans_branching_and_operators",slug:"booleans_branching_and_operators",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/3_data-types-variables-branching-and-looping/0e_branching_and_booleans.md"},sidebar:"c_and_net_part_time_evening",previous:{title:"Variables",permalink:"/lhtp/c_and_net_part_time_evening/data-types-variables-branching-and-looping/variables"},next:{title:"Classes and Instance Methods",permalink:"/lhtp/c_and_net_part_time_evening/data-types-variables-branching-and-looping/classes_and_instance_methods"}},s={},p=[{value:"Booleans",id:"booleans",level:2},{value:"Comparison Operators and Booleans",id:"comparison-operators-and-booleans",level:3},{value:"<code>bool</code> Variables",id:"bool-variables",level:3},{value:"Branching",id:"branching",level:2},{value:"Switch Statements",id:"switch-statements",level:2},{value:"Other Operators",id:"other-operators",level:2},{value:"Equality",id:"equality",level:3},{value:"Relational",id:"relational",level:3},{value:"Logical",id:"logical",level:3},{value:"More Resources",id:"more-resources",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As we learned in Intro, we can use ",(0,r.kt)("strong",{parentName:"p"},"branching")," to execute different code depending on specific conditions. In this lesson, we'll learn how to create booleans in C#. Then, we'll learn how to use both if/else and switch statements. We'll end this lesson by reviewing the operators we can use within conditionals and other resources for continued learning and exploration."),(0,r.kt)("h2",{id:"booleans"},"Booleans"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"As we covered in Intro, ",(0,r.kt)("strong",{parentName:"p"},"booleans")," can hold one of two values: ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". We can use the C# ",(0,r.kt)("strong",{parentName:"p"},"equality operator")," ",(0,r.kt)("inlineCode",{parentName:"p"},"==")," to see if one thing is equal to another. If it is true, C# returns a boolean with a ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," value. If it isn't, C# will return a ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," value."),(0,r.kt)("p",null,"In Intro, we used JavaScript's ",(0,r.kt)("strong",{parentName:"p"},"strict equality")," operator ",(0,r.kt)("inlineCode",{parentName:"p"},"===")," to determine whether two things are ",(0,r.kt)("em",{parentName:"p"},"completely identical"),", including their types. In C#, ",(0,r.kt)("strong",{parentName:"p"},"we only use two equals signs ",(0,r.kt)("inlineCode",{parentName:"strong"},"==")," to evaluate equality.")),(0,r.kt)("h3",{id:"comparison-operators-and-booleans"},"Comparison Operators and Booleans"),(0,r.kt)("p",null,"Let's open the C# REPL (with the ",(0,r.kt)("inlineCode",{parentName:"p"},"$ dotnet-script")," command) and observe several operators that return booleans."),(0,r.kt)("p",null,"We can compare two strings like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'> "1" == "1"\ntrue\n')),(0,r.kt)("p",null,"The same is true for ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," data types:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> 1 == 1\ntrue\n")),(0,r.kt)("p",null,"If we compare things that ",(0,r.kt)("em",{parentName:"p"},"aren't")," the same, C# will return ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'>  "1" == "2"\nfalse\n')),(0,r.kt)("h3",{id:"bool-variables"},(0,r.kt)("inlineCode",{parentName:"h3"},"bool")," Variables"),(0,r.kt)("p",null,"In C#, we can declare boolean variables with the ",(0,r.kt)("inlineCode",{parentName:"p"},"bool")," data type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> bool mathIsWrong = 1 > 2;\n> mathIsWrong\nfalse\n> bool mathIsRight = 1 < 2;\n> mathIsRight\ntrue\n")),(0,r.kt)("h2",{id:"branching"},"Branching"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Next, we'll learn how to write an ",(0,r.kt)("strong",{parentName:"p"},"if/else")," statement in C#. First, take note that if/else statements are impossible to run in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet-script")," REPL without changing the standard indentation and spacing; so, we'll review the following examples of branching without running them in the REPL. Later in the pre-work we'll take the time to run and test branching that we add to a console application "),(0,r.kt)("p",null,"Writing an if/else statement is the same in C# and in JavaScript, except for the indentation. Let's write an if/else statement determine whether someone is old enough to see an R-rated film in theaters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'int intUserAge = 16;\nif (intUserAge >= 17) \n{\n  return "You can see the movie!";\n} \nelse \n{\n  return "I\'m sorry, you are too young to see the movie.";\n}\n')),(0,r.kt)("p",null,"Our branching statement evaluates an age saved in ",(0,r.kt)("inlineCode",{parentName:"p"},"intUserAge")," and then returns a string with a message depending on whether or not they are 17 year old."),(0,r.kt)("p",null,"As we can see, the main difference between C# and JavaScript is the spacing and indentation, where the curly brackets are always on a new line, as are the ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"else")," statements themselves."),(0,r.kt)("p",null,"Just like in JavaScript, we can also include an ",(0,r.kt)("inlineCode",{parentName:"p"},"else if")," statement, as many as we need. Let's update our code to include a special message to 16 year olds letting them know they are almost the right age to be let into a movie that is rated R. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'int intUserAge = 16;\nif (intUserAge >= 17) \n{\n  return "You can see the movie!";\n} \nelse if (intUserAge == 16)\n{\n  return "You\'re almost there! One more year and you\'ll be 17.";\n}\nelse\n{\n  return "I\'m sorry, you are too young to see the movie.";\n}\n')),(0,r.kt)("h2",{id:"switch-statements"},"Switch Statements"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Just like JavaScript, in C# we can use ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/selection-statements#the-switch-statement"},"switch statements")," as an alternative to branching with ",(0,r.kt)("inlineCode",{parentName:"p"},"if/else"),"."),(0,r.kt)("p",null,"Here's an example of the same branching as above in a switch statement. You can copy/paste the following code directly in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet-script")," REPL to try it out."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'int intUserAge = 16;\nswitch (intUserAge)\n{\n  case >= 17:\n    return "You can see the movie!";\n  case 16:\n    return "You\'re almost there! One more year and you\'ll be 17.";\n  default:\n    return "I\'m sorry, you are too young to see the movie.";\n} \n')),(0,r.kt)("p",null,"There's a few things to remember about switch cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The switch statement moves through each case to see if it matches the specified  expression, in our case the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"intUserAge"),"."),(0,r.kt)("li",{parentName:"ul"},"If there's a match between the case and the expression, then the code within that case will run. In our example ",(0,r.kt)("inlineCode",{parentName:"li"},"case 16")," matches the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"intUserAge"),", so the REPL will return ",(0,r.kt)("inlineCode",{parentName:"li"},"\"You're almost there! One more year and you'll be 17.\""),". Notice that we don't need to include ",(0,r.kt)("inlineCode",{parentName:"li"},"==")," to indicate that we want ",(0,r.kt)("inlineCode",{parentName:"li"},"intUserAge")," to be equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"16"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"default")," case is run if there are no matches with the specified expression, in our case the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"intUserAge"),". Our default case will run if ",(0,r.kt)("inlineCode",{parentName:"li"},"intUserAge")," is any number below 16."),(0,r.kt)("li",{parentName:"ul"},"Even if we match with a case before our default case, all of the cases thereafter will be run unless we include a ",(0,r.kt)("inlineCode",{parentName:"li"},"return")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"break")," statement in the matching case; because of this, it's a best practice to always include a ",(0,r.kt)("inlineCode",{parentName:"li"},"return")," or ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/jump-statements#the-break-statement"},(0,r.kt)("inlineCode",{parentName:"a"},"break;")," statement")," in each case. ")),(0,r.kt)("h2",{id:"other-operators"},"Other Operators"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"It's worth noting that all of the operators we used in JavaScript, we can also use in C#. Let's review the most commonly used operators now:"),(0,r.kt)("h3",{id:"equality"},"Equality"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"==")),(0,r.kt)("td",{parentName:"tr",align:null},"equal to"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1 == 1")," is true. ",(0,r.kt)("inlineCode",{parentName:"td"},"1 == 2")," is false.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"!=")),(0,r.kt)("td",{parentName:"tr",align:null},"not equal to"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1 != 2")," is true. ",(0,r.kt)("inlineCode",{parentName:"td"},"1 != 1")," is false.")))),(0,r.kt)("h3",{id:"relational"},"Relational"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},">")),(0,r.kt)("td",{parentName:"tr",align:null},"greater than"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2 > 1")," is true.  ",(0,r.kt)("inlineCode",{parentName:"td"},"1 > 2")," is false.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},">=")),(0,r.kt)("td",{parentName:"tr",align:null},"greater than or equal to"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2 >= 2")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"2 >= 1")," are both true. ",(0,r.kt)("inlineCode",{parentName:"td"},"2 >= 3")," is false.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<")),(0,r.kt)("td",{parentName:"tr",align:null},"less than"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1 < 2")," is true.  ",(0,r.kt)("inlineCode",{parentName:"td"},"2 < 1")," is false.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<=")),(0,r.kt)("td",{parentName:"tr",align:null},"less than or equal to"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1 <= 1")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"1 <= 2")," are both true.  ",(0,r.kt)("inlineCode",{parentName:"td"},"2 <= 1")," is false.")))),(0,r.kt)("h3",{id:"logical"},"Logical"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"|","|")),(0,r.kt)("td",{parentName:"tr",align:null},'The conditional logical "or" operator returns true if either statements is true; the second statement won\'t be evaluated if the first is true.'),(0,r.kt)("td",{parentName:"tr",align:null},"The code ",(0,r.kt)("code",null,"num ","<"," 4 ","|","|"," num ",">"," 6")," will evaluate as true if ",(0,r.kt)("inlineCode",{parentName:"td"},"num")," is less than 4 OR if ",(0,r.kt)("inlineCode",{parentName:"td"},"num")," is greater than 6.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"&&")),(0,r.kt)("td",{parentName:"tr",align:null},'The conditional logical "and" operator returns true if both statements are true.'),(0,r.kt)("td",{parentName:"tr",align:null},"The code ",(0,r.kt)("inlineCode",{parentName:"td"},"num < 4 && num > 1")," will evaluate as true if ",(0,r.kt)("inlineCode",{parentName:"td"},"num")," is BOTH less than 4 AND greater than 1; ",(0,r.kt)("inlineCode",{parentName:"td"},"num")," would have to be ",(0,r.kt)("inlineCode",{parentName:"td"},"2")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"3"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"!")),(0,r.kt)("td",{parentName:"tr",align:null},"The logical negation operator returns false if the result is true."),(0,r.kt)("td",{parentName:"tr",align:null},"The code ",(0,r.kt)("inlineCode",{parentName:"td"},"num != 2")," will evaluate as true so long as ",(0,r.kt)("inlineCode",{parentName:"td"},"num")," is not ",(0,r.kt)("inlineCode",{parentName:"td"},"2"),".")))),(0,r.kt)("h2",{id:"more-resources"},"More Resources"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"C# actually has a lot of operators that JavaScript does not. For example, there's also the logical OR ",(0,r.kt)("inlineCode",{parentName:"p"},"|")," and logical ORX ",(0,r.kt)("inlineCode",{parentName:"p"},"^")," operators that can be used outside of conditional statements. To learn more, start by perusing ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/"},"the Microsoft (MS) Docs on operators and expressions"),"."))}m.isMDXComponent=!0}}]);