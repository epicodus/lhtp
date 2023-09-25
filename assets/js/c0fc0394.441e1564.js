"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[43400],{3905:(e,n,o)=>{o.d(n,{Zo:()=>u,kt:()=>m});var t=o(67294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(o),h=r,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||a;return o?t.createElement(m,i(i({ref:n},u),{},{components:o})):t.createElement(m,i({ref:n},u))}));function m(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}h.displayName="MDXCreateElement"},80977:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var t=o(87462),r=(o(67294),o(3905));const a={title:"Further Exploration: While Loops",id:"further_exploration_while_loops",slug:"further_exploration_while_loops",hide_table_of_contents:!0,sidebar_position:46,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4e_while_loops.md"},i=void 0,l={unversionedId:"introduction_to_programming_classic/arrays-and-looping/further_exploration_while_loops",id:"introduction_to_programming_classic/arrays-and-looping/further_exploration_while_loops",title:"Further Exploration: While Loops",description:"Note: This lesson is a _further exploration_, and it is not required that you read it! while and do...while loops aren't as commonly used these days. You can usually solve the same problems with more common loops (such as for). However, you will still see them in the real world and it's one more tool to be aware of.",source:"@site/docs/introduction_to_programming_classic/3_arrays-and-looping/4e_while_loops.md",sourceDirName:"introduction_to_programming_classic/3_arrays-and-looping",slug:"/introduction_to_programming_classic/arrays-and-looping/further_exploration_while_loops",permalink:"/introduction_to_programming_classic/arrays-and-looping/further_exploration_while_loops",draft:!1,tags:[],version:"current",sidebarPosition:46,frontMatter:{title:"Further Exploration: While Loops",id:"further_exploration_while_loops",slug:"further_exploration_while_loops",hide_table_of_contents:!0,sidebar_position:46,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4e_while_loops.md"},sidebar:"introduction_to_programming_classic",previous:{title:"Further Exploration: Looping with for...of",permalink:"/introduction_to_programming_classic/arrays-and-looping/further_exploration_looping_with_forof"},next:{title:"Optional Review: Which Loop Should I Use?",permalink:"/introduction_to_programming_classic/arrays-and-looping/optional_review_which_loop_should_i_use"}},s={},p=[{value:"Looping with <code>while</code> and <code>do...while</code>",id:"looping-with-while-and-dowhile",level:2},{value:"<code>do...while</code>",id:"dowhile",level:3}],u={toc:p},d="wrapper";function c(e){let{components:n,...o}=e;return(0,r.kt)(d,(0,t.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: This lesson is a ",(0,r.kt)("em",{parentName:"strong"},"further exploration"),", and it is not required that you read it!")," ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"do...while")," loops aren't as commonly used these days. You can usually solve the same problems with more common loops (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"for"),"). However, you will still see them in the real world and it's one more tool to be aware of."),(0,r.kt)("p",null,"We'll conclude this section with a quick peek at ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"do...while")," loops. You probably won't use these very often. However, running a loop ",(0,r.kt)("em",{parentName:"p"},"while")," a condition is true is such a fundamental part of programming that it's important to get some exposure to this technique. You'll see ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," loops in just about every programming language."),(0,r.kt)("h2",{id:"looping-with-while-and-dowhile"},"Looping with ",(0,r.kt)("inlineCode",{parentName:"h2"},"while")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"do...while")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"while")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"do...while")," loops return to the most basic concept of looping \u2014 run a loop until a condition is no longer true. Let's create a loop that counts down from ten:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> let number = 10;\n> while (number > 0) {\n  console.log(number);\n  number --;\n}\n> console.log("Blast off!");\n10\n9\n8\n7\n6\n5\n4\n3\n2\n1\nBlast off!\n')),(0,r.kt)("p",null,"As we can see, we get a countdown from 10 logged in the console followed by ",(0,r.kt)("inlineCode",{parentName:"p"},'"Blast off!"'),". The syntax of a ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," loop is simple:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// This is pseudo-code!\nwhile (condition is true) {\n  loop\n}\n")),(0,r.kt)("p",null,"In our countdown example, as long as ",(0,r.kt)("inlineCode",{parentName:"p"},"number > 0"),", our loop will keep running. Note also that we used ",(0,r.kt)("inlineCode",{parentName:"p"},"number --"),". We've mostly used ",(0,r.kt)("inlineCode",{parentName:"p"},"++")," to ",(0,r.kt)("em",{parentName:"p"},"increment")," a number by one, but we can just as easily use ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," to ",(0,r.kt)("em",{parentName:"p"},"decrement")," a number by one."),(0,r.kt)("p",null,"We have to be very careful with ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," loops \u2014 it's very easy to accidentally create an infinite loop, which will crash our application. For instance, if we accidentally omitted ",(0,r.kt)("inlineCode",{parentName:"p"},"number --"),", we'd create an infinite loop because our number would never decrement."),(0,r.kt)("p",null,"Since we've used the doubled array example for every other kind of loop, let's do that again here for comparison's sake:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> const array = [0,1,2,3,4,5];\n> let index = 0;\n> let doubledArray = [];\n> while (index < array.length) {\n  doubledArray.push(array[index] * 2);\n  index ++;\n}\n> doubledArray;\n(6) [0, 2, 4, 6, 8, 10]\n")),(0,r.kt)("p",null,"It's really pretty clunky. In addition to initializing a ",(0,r.kt)("inlineCode",{parentName:"p"},"doubledArray"),", we also have to initialize a variable containing an ",(0,r.kt)("inlineCode",{parentName:"p"},"index"),". Then, when we specify the condition, we need to be very careful about OBOEs and other errors. And if we were to forget ",(0,r.kt)("inlineCode",{parentName:"p"},"index ++"),", that would cause an infinite loop."),(0,r.kt)("p",null,"So as we can see, ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," loops aren't as concise as other kinds of loops \u2014 and when something goes wrong with a ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," loop, it can really go wrong, causing infinite loops and crashed apps."),(0,r.kt)("h3",{id:"dowhile"},(0,r.kt)("inlineCode",{parentName:"h3"},"do...while")),(0,r.kt)("p",null,"Let's look at another type of ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," loop that has slightly different syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> let number = 10;\n> do {\n  console.log(number);\n  number --;\n} while (number > 0);\n> console.log("Blast off!");\n10\n9\n8\n7\n6\n5\n4\n3\n2\n1\nBlast off!\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"do...while")," loop works exactly the same as a ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," loop. It just has different (and honestly, more confusing) syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// This is pseudo-code!\ndo {\n  loop\n} while (condition is true)\n")),(0,r.kt)("p",null,"Even though you probably won't be using ",(0,r.kt)("inlineCode",{parentName:"p"},"while"),' loops very much, there are still valid use cases for them. You should just favor other "higher-level" loops where possible. And as always, try them out and practice writing them!'))}c.isMDXComponent=!0}}]);