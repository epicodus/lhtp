"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[63153],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},75085:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"JavaScript Variables",id:"javascript_variables",slug:"javascript_variables",hide_table_of_contents:!0,sidebar_position:12,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3_javascript-and-web-browsers/0i_javascript_variables.md"},o=void 0,l={unversionedId:"introduction_to_programming_part_time/javascript-and-web-browsers/javascript_variables",id:"introduction_to_programming_part_time/javascript-and-web-browsers/javascript_variables",title:"JavaScript Variables",description:"Variables are one of the major features of computer programming and we will use them all the time. A variable is just a container that stores some information such as a number, an object, or a string.",source:"@site/docs/introduction_to_programming_part_time/3_javascript-and-web-browsers/0i_javascript_variables.md",sourceDirName:"introduction_to_programming_part_time/3_javascript-and-web-browsers",slug:"/introduction_to_programming_part_time/javascript-and-web-browsers/javascript_variables",permalink:"/lhtp/introduction_to_programming_part_time/javascript-and-web-browsers/javascript_variables",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"JavaScript Variables",id:"javascript_variables",slug:"javascript_variables",hide_table_of_contents:!0,sidebar_position:12,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3_javascript-and-web-browsers/0i_javascript_variables.md"},sidebar:"introduction_to_programming_part_time",previous:{title:"Practice: Arithmetic",permalink:"/lhtp/introduction_to_programming_part_time/javascript-and-web-browsers/practice_arithmetic"},next:{title:"Strings",permalink:"/lhtp/introduction_to_programming_part_time/javascript-and-web-browsers/strings"}},s={},p=[{value:"<code>var</code>",id:"var",level:2},{value:"Using the Assignment Operator <code>=</code>",id:"using-the-assignment-operator-",level:3},{value:"JavaScript Statements",id:"javascript-statements",level:3},{value:"Reassigning a Variable&#39;s Value",id:"reassigning-a-variables-value",level:3},{value:"Variables Can Be Treated as the Data Types They Represent",id:"variables-can-be-treated-as-the-data-types-they-represent",level:3},{value:"Naming Variables",id:"naming-variables",level:3},{value:"Using <code>Var</code> Is Outmoded",id:"using-var-is-outmoded",level:3},{value:"<code>let</code>",id:"let",level:2},{value:"<code>const</code>",id:"const",level:2},{value:"One More Advantage of <code>let</code> and <code>const</code>",id:"one-more-advantage-of-let-and-const",level:2},{value:"Declaring a variable without <code>var</code>, <code>let</code> or <code>const</code>",id:"declaring-a-variable-without-var-let-or-const",level:2}],d={toc:p},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Variables")," are one of the major features of computer programming and we will use them all the time. A variable is just a container that stores some information such as a number, an object, or a string."),(0,r.kt)("p",null,"A variable can be declared with one of the following JavaScript reserved words:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"var")," is short for variable. This is the traditional way of declaring a variable but it has some longstanding issues so we won't use this option."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"let")," is a more modern way to declare a variable whose value will change."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"const")," is a more modern way to declare a variable whose value will never change.")),(0,r.kt)("p",null,"These reserved words are called ",(0,r.kt)("strong",{parentName:"p"},"statements"),". There are different types of statements in JavaScript that all serve a specific purpose. For ",(0,r.kt)("inlineCode",{parentName:"p"},"var"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"let"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"const"),", these statements are declaration statements that create variables."),(0,r.kt)("p",null,"We will learn more about the advantages of ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," in this lesson. In a future lesson, we will learn about the major disadvantage of ",(0,r.kt)("inlineCode",{parentName:"p"},"var"),"."),(0,r.kt)("h2",{id:"var"},(0,r.kt)("inlineCode",{parentName:"h2"},"var")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Up until ES6, which was released in 2015, all variables in JavaScript were declared using ",(0,r.kt)("inlineCode",{parentName:"p"},"var"),". Remember, ES is short for ECMAScript, the scripting-language specification for JavaScript. Here's how we can declare a variable using ",(0,r.kt)("inlineCode",{parentName:"p"},"var"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> var myNumber;\n")),(0,r.kt)("p",null,"In the example above, we declare a variable called ",(0,r.kt)("inlineCode",{parentName:"p"},"myNumber"),". It doesn't have a value yet. In fact, if we check its value in the console, it will be ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),". Also, note the semicolon at the end of the line. For now, we will always be including semicolons at the end of each line. We will let you know when that changes."),(0,r.kt)("p",null,"Note that the first word ",(0,r.kt)("inlineCode",{parentName:"p"},"my")," is lowercased while the second word ",(0,r.kt)("inlineCode",{parentName:"p"},"Number")," is capitalized. This naming convention is called ",(0,r.kt)("strong",{parentName:"p"},"lower camel case")," because the lower and upper case letters look a little like the humps on a camel. (There are other camel case naming conventions such as upper camel case, too, which will learn about when they are needed.)"),(0,r.kt)("p",null,"With lower camel case, we always lowercase the first letter of the first word but then capitalize the first letter of any other word in the variable."),(0,r.kt)("p",null,"Here's another example of lower camel case:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> var thisIsALongNumber;\n")),(0,r.kt)("p",null,"In general, we want to keep variable names short and concise, which the example above certainly doesn't do. However, it does illustrate how lower camel case looks."),(0,r.kt)("p",null,"JavaScript doesn't care whether you capitalize the letters or not but other developers do. Folks will get upset if you don't follow proper naming conventions! ",(0,r.kt)("strong",{parentName:"p"},"You'll be expected to always use lower camel case and be consistent when declaring JavaScript variables.")),(0,r.kt)("h3",{id:"using-the-assignment-operator-"},"Using the Assignment Operator ",(0,r.kt)("inlineCode",{parentName:"h3"},"=")),(0,r.kt)("p",null,"In the example above, we declared a variable without assigning it a value. We could've declared the variable ",(0,r.kt)("em",{parentName:"p"},"and")," assigned it a value at the same time like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> var myNumber = 45;\nundefined\n")),(0,r.kt)("p",null,"In the example above, ",(0,r.kt)("inlineCode",{parentName:"p"},"myNumber")," is a number, but as we mentioned before, a variable can hold many different kinds of data types. Of course we'd want to name it differently if it's something other than a number \u2014 otherwise our variable names would confuse other developers."),(0,r.kt)("h3",{id:"javascript-statements"},"JavaScript Statements"),(0,r.kt)("p",null,"In the example above, take note that JavaScript returns ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," because ",(0,r.kt)("inlineCode",{parentName:"p"},"var myNumber = 45;")," is a ",(0,r.kt)("strong",{parentName:"p"},"statement"),". A statement doesn't return a value, which means its return value is just ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,r.kt)("p",null,"That doesn't mean ",(0,r.kt)("inlineCode",{parentName:"p"},"myNumber")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),", though. Type the variable name in the console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> myNumber;\n45\n")),(0,r.kt)("p",null,"The console returns the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"myNumber"),", which is ",(0,r.kt)("inlineCode",{parentName:"p"},"45"),"."),(0,r.kt)("h3",{id:"reassigning-a-variables-value"},"Reassigning a Variable's Value"),(0,r.kt)("p",null,"We can modify ",(0,r.kt)("inlineCode",{parentName:"p"},"myNumber")," if we want:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> myNumber = myNumber + 5;\n50\n")),(0,r.kt)("p",null,"Note that we don't use ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," again when we modify ",(0,r.kt)("inlineCode",{parentName:"p"},"myNumber"),". We only use ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," when we are ",(0,r.kt)("strong",{parentName:"p"},"declaring")," a variable \u2014 that is, the first time it shows up in our code."),(0,r.kt)("p",null,"Think of a variable as being like an actor that comes on stage and introduces their character. Over the course of the play, their character may change but the actor doesn't need to introduce themselves again \u2014 like a variable, they've already been declared. We'd be pretty annoyed if they introduced themselves again every time they came out."),(0,r.kt)("p",null,"Let's take another look at the example above: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> myNumber = myNumber + 5;\n50\n")),(0,r.kt)("p",null,"If we look at this from the perspective of using variables in math class in school, this would be mathematically impossible. But things are a little different in programming and this is one of those things that takes a little getting used to. When we modify a variable, we usually want to take the ",(0,r.kt)("em",{parentName:"p"},"old")," value of the variable, make a change to it, and then have the variable be equal to the ",(0,r.kt)("em",{parentName:"p"},"new")," value."),(0,r.kt)("p",null,"This is called ",(0,r.kt)("strong",{parentName:"p"},"reassigning a variable"),". It just means we are changing the value of the variable to something else. In the example above, we are doing the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"New Value = Original Value + Change We Want to Make to Original Value\n")),(0,r.kt)("p",null,"Note, the variable that is holding the value is always on the left side of the assignment operator ",(0,r.kt)("inlineCode",{parentName:"p"},"="),". In our example, the variable holding the value is ",(0,r.kt)("inlineCode",{parentName:"p"},"myNumber"),". The expression that's going to be evaluated is always on the right side of the assignment operator. In our example, the expression is ",(0,r.kt)("inlineCode",{parentName:"p"},"myNumber + 5"),", which is accessing the original value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"myNumber")," variable and adding 5 to it."),(0,r.kt)("p",null,"We will get plenty of practice with reassigning variables \u2014 though many developers don't think reassigning variables is a great idea. We will cover this more when we get to declaring variables with ",(0,r.kt)("inlineCode",{parentName:"p"},"const"),"."),(0,r.kt)("p",null,"Here's a little shortcut we can do that's exactly the same thing as ",(0,r.kt)("inlineCode",{parentName:"p"},"myNumber = myNumber + 5"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> myNumber += 5;\n50\n")),(0,r.kt)("p",null,"You'll see (and use) this shorthand a lot in JavaScript."),(0,r.kt)("p",null,"Before we move on, what do you think happens to the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"myNumber")," if we do this?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> myNumber + 5;\n50\n")),(0,r.kt)("p",null,"The console will correctly return the new value. However, if we check the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"myNumber"),", we will see that it hasn't changed. That's because we didn't actually ",(0,r.kt)("em",{parentName:"p"},"reassign")," the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"myNumber"),". To actually change the value, you can probably guess by this point what we need to do:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> myNumber = myNumber + 5;\n50\n")),(0,r.kt)("p",null,"Alternatively, we can use the shorthand ",(0,r.kt)("inlineCode",{parentName:"p"},"myNumber +=5"),"."),(0,r.kt)("h3",{id:"variables-can-be-treated-as-the-data-types-they-represent"},"Variables Can Be Treated as the Data Types They Represent"),(0,r.kt)("p",null,"Let's look at another thing we can do with variables. We can combine several together to make something new. Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> var num1 = 1;\n> var num2 = 2;\n> var num3 = num1 + num2;\n3\n")),(0,r.kt)("p",null,"In the example above, we assign values to two different variables. Finally, we add those two variables together and assign that value to a new variable. Because ",(0,r.kt)("inlineCode",{parentName:"p"},"num1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"num2")," represent numbers, we can treat them as numbers and do math with them."),(0,r.kt)("p",null,"In short, we can do anything with variables that we'd do with the things contained inside those variables. If the variables contain numbers, we can do anything that we can do with numbers. If they contain strings, we can do anything we'd do with strings. And so on and on."),(0,r.kt)("h3",{id:"naming-variables"},"Naming Variables"),(0,r.kt)("p",null,"You can give variables any name. Using our last example, we could rewrite it to look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> var pig = 1;\n> var horse = 2;\n> var cow = pig + horse;\n3\n")),(0,r.kt)("p",null,"And we will still get the number ",(0,r.kt)("inlineCode",{parentName:"p"},"3")," returned."),(0,r.kt)("p",null,"Using the same example, we could also name our variables like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> var a = 1;\n> var b = 2;\n> var ab = a + b;\n3\n")),(0,r.kt)("p",null,"And just as before, we will still get the number ",(0,r.kt)("inlineCode",{parentName:"p"},"3")," returned. "),(0,r.kt)("p",null,"So what's best practice? Generally it's best to give your variables a name that is descriptive of what it represents. Using our example, ",(0,r.kt)("inlineCode",{parentName:"p"},"num1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"num2"),' are the most descriptive, because we\'re using "num", short for "number" to indicate its data type, and we\'re distinguishing each variable by numbering them with "1" or "2".'),(0,r.kt)("p",null,"Variable naming can be a subjective process. When deciding what to name your variables, think about someone else reading your code and trying to understand what the variable represents and does. This means naming your variable based off of the answers to these questions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What is the variable's data type? "),(0,r.kt)("li",{parentName:"ul"},"How will the variable be used in the code?")),(0,r.kt)("h3",{id:"using-var-is-outmoded"},"Using ",(0,r.kt)("inlineCode",{parentName:"h3"},"Var")," Is Outmoded"),(0,r.kt)("p",null,"It's important to know about ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," because you will see it frequently in code examples and legacy code. It was the only option for declaring a variable up until 2015, and even after that, it's taken additional time for some developers to change their practices and update old code."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"However, we won't be using ",(0,r.kt)("inlineCode",{parentName:"strong"},"var")," at Epicodus \u2014 as we mentioned before, it has some problems that ",(0,r.kt)("inlineCode",{parentName:"strong"},"let")," and ",(0,r.kt)("inlineCode",{parentName:"strong"},"const")," address. Modern JavaScript developers don't use ",(0,r.kt)("inlineCode",{parentName:"strong"},"var"),", and you shouldn't, either!")),(0,r.kt)("h2",{id:"let"},(0,r.kt)("inlineCode",{parentName:"h2"},"let")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"let")," is an ES6 (ECMAscript 6) feature that came out in 2015. Like ",(0,r.kt)("inlineCode",{parentName:"p"},"const"),", it has a couple of major advantages over ",(0,r.kt)("inlineCode",{parentName:"p"},"var"),". First, it's more descriptive. We will discuss that further in this lesson. Second, it doesn't have the problems with scope that ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," has. We will cover these specific scoping issues later in this section when we get to branching."),(0,r.kt)("p",null,"In most ways, both ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," work exactly the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"var"),". Let's look at the same example we used with ",(0,r.kt)("inlineCode",{parentName:"p"},"var"),", but this time we'll use ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," instead. (You'll need to refresh the browser to do this in the console or you'll get an error. We'll discuss this error towards the end of this lesson.)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> let myNumber = 45;\nundefined\n> myNumber = myNumber + 5;\n50\n")),(0,r.kt)("p",null,"As we mentioned at the beginning of this lesson, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," to signify a variable that will change over time. As you can see, ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," already has a huge advantage over ",(0,r.kt)("inlineCode",{parentName:"p"},"var"),". Any developer can tell just by looking at it that the value of the variable will change at some point."),(0,r.kt)("p",null,"A big part of being a good developer is good communication. Part of good communication is code that clearly shows what it's meant to do. If another developer sees ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," in front of a variable, they've already learned something important about that variable that they wouldn't have known with just ",(0,r.kt)("inlineCode",{parentName:"p"},"var"),". It's going to change over time. Now they might want to see exactly where it's going to change and how \u2014 especially if they are hunting down a bug or refactoring code."),(0,r.kt)("h2",{id:"const"},(0,r.kt)("inlineCode",{parentName:"h2"},"const")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Finally, we have ",(0,r.kt)("inlineCode",{parentName:"p"},"const"),", which is short for constant. As the name implies, a ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," is a variable that doesn't change over time \u2014 it stays constant. For this reason, there are a few ways in which ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," works differently than ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"var"),"."),(0,r.kt)("p",null,"Let's take a look at ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," in action (refresh your browser first):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> const myNumber = 45;\n> myNumber = myNumber + 5;\n")),(0,r.kt)("p",null,"If we try to do this, we get an error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"Uncaught TypeError: Assignment to constant variable.\n")),(0,r.kt)("p",null,"We can't reassign ",(0,r.kt)("inlineCode",{parentName:"p"},"myNumber")," because it is a constant. This is a very useful advantage that a ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," provides that we can't get with ",(0,r.kt)("inlineCode",{parentName:"p"},"var"),'. It will "freeze" the value of our variable, which is very nice if we want to make sure it doesn\'t change.'),(0,r.kt)("p",null,"As you might expect, you can't just declare a constant without assigning a value to it. Try this out in the console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const thisIsAConstant;\n")),(0,r.kt)("p",null,"We'll get the following error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"Uncaught SyntaxError: Missing initializer in const declaration\n")),(0,r.kt)("p",null,"This just means that when we create a constant, we have to assign a value to it. That's because we aren't ever supposed to reassign new values to constants. Even if a variable is declared without a value, reassigning it to have a value is still changing it."),(0,r.kt)("p",null,"Note that JavaScript actually isn't always very good about freezing constants. JavaScript will make sure that primitives like numbers can't be reassigned. However, we can change more complex objects even if they are constants and JavaScript won't complain. We should never do this \u2014 and we will cover this problem further once we start working with those more complex types of objects. It's not something you need to worry about right now, but it's important to know that constants in JavaScripts have their issues, too."),(0,r.kt)("p",null,"Now let's get back to our example above. What if we want to compute a new value based on ",(0,r.kt)("inlineCode",{parentName:"p"},"myNumber"),"? We can do this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> const myNumber = 45;\n> const myNewNumber = myNumber + 5;\n> myNewNumber;\n50\n")),(0,r.kt)("p",null,"We just need to create a ",(0,r.kt)("em",{parentName:"p"},"new")," variable to hold our new value. Meanwhile, ",(0,r.kt)("inlineCode",{parentName:"p"},"myNumber")," doesn't change \u2014 it is still ",(0,r.kt)("inlineCode",{parentName:"p"},"45"),". This is because we didn't reassign ",(0,r.kt)("inlineCode",{parentName:"p"},"myNumber"),". Instead, we declared a new ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"myNewNumber")," and assigned the value to our new variable."),(0,r.kt)("p",null,"Many developers believe that ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," is the only way to go and that we shouldn't use ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," at all. This is because when we reassign variables, we might introduce a problem that's hard to track down. With ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"var"),", we can never be sure of the value of a variable unless we check it, since it's always possible it will change. With ",(0,r.kt)("inlineCode",{parentName:"p"},"const"),", we assign a value to a variable and then we know what it is. We don't have to worry about it changing!"),(0,r.kt)("p",null,"In the example above, we don't have to worry whether ",(0,r.kt)("inlineCode",{parentName:"p"},"myNumber")," is 45, 50, or something else. ",(0,r.kt)("inlineCode",{parentName:"p"},"myNumber")," will always be 45, ",(0,r.kt)("inlineCode",{parentName:"p"},"myNewNumber")," will always be 50, and we can always make good choices about our variable naming to ensure that other developers understand how the values are changing. It's another opportunity to communicate clearly, which will make everyone happy."),(0,r.kt)("p",null,"We recommend using ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," wherever possible, but you may use both ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," to declare variables at this point. For now, there is one hard and fast rule \u2014 don't use ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," if the variable's value won't change in your application. Even though things will work fine, that's not clear communication. That's like saying, \"yeah, this is gonna change... no, wait, never mind.\""),(0,r.kt)("h2",{id:"one-more-advantage-of-let-and-const"},"One More Advantage of ",(0,r.kt)("inlineCode",{parentName:"h2"},"let")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"const")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Before we move on, let's take a look at another advantage of ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," over ",(0,r.kt)("inlineCode",{parentName:"p"},"var"),". As we discussed earlier in this lesson, we should only declare a variable once. "),(0,r.kt)("p",null,"Try doing the following in the console (one at a time, pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"Enter")," after each entry):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> var myNumber = 1;\n> var myNumber = 2;\n> let myNumber = 3;\n> const myNumber = 4;\n")),(0,r.kt)("p",null,"When we declare ",(0,r.kt)("inlineCode",{parentName:"p"},"myNumber")," a second time with ",(0,r.kt)("inlineCode",{parentName:"p"},"var"),", JavaScript doesn't complain even though it would be a very bad practice to declare two variables with the exact same name in an application. Why is it a bad practice? Well, since we are just beginning to learn about variables, it's hard to show an example just yet \u2014 however, it can make our code much buggier and more unreliable because it indicates that one or more developers are trying to do different things with two different variables \u2014 but when our code executes, our machine will think they are the same variable because they have the same name, leading to problems."),(0,r.kt)("p",null,"Here's another way of putting it. If two Janes work at your company, there's a good chance you'll cause confusion if you always refer to both of them as Jane without any clarification about which Jane you're referring to. Did you mean Jane the senior developer or Jane the data analyst? You might need to refer to them as Jane M. and Jane S. instead."),(0,r.kt)("p",null,"Returning to our example above, when we use ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," to try to declare a variable that's already been declared, we get the following error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"Uncaught SyntaxError: Identifier 'myNumber' has already been declared\n")),(0,r.kt)("p",null,"This is a good error! ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," won't let us make this mistake."),(0,r.kt)("p",null,'Going back to our example about two Janes, this would be like someone stopping us and asking, "Wait, we are still talking about Jane S., right?" And then, to clarify, we\'d say, "No, actually, I\'m talking about Jane M. now. She\'s the one that will be working on this new project."'),(0,r.kt)("p",null,"This is a major difference between the JavaScript of the past and newer specifications that are being added to JavaScript. The JavaScript of the past is very flexible \u2014 in fact, too much so. The JavaScript of the past doesn't care which Jane we are referring to, even if it means assigning a new project to the wrong Jane."),(0,r.kt)("p",null,"There'd be nary a complaint from the JavaScript interpreter when we did something wrong \u2014 the code would just execute until something silently broke. But that's not helpful for developers. We want things to break loudly and clearly so we can see exactly where things went wrong. Otherwise, tenacious bugs will be hard to find and fix \u2014 and even worse, they could be so silent at first that they sneak into production code, making the users of our applications angry. Not good if you are working on an application for a bank. When a user's trust goes away, they probably won't use your application anymore. Likewise, when the wrong Jane goes to a meeting with the wrong client, neither Jane nor the client are going to be very happy. For that reason, we need to combine good communication in our code with modern JavaScript specifications."),(0,r.kt)("h2",{id:"declaring-a-variable-without-var-let-or-const"},"Declaring a variable without ",(0,r.kt)("inlineCode",{parentName:"h2"},"var"),", ",(0,r.kt)("inlineCode",{parentName:"h2"},"let")," or ",(0,r.kt)("inlineCode",{parentName:"h2"},"const")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"JavaScript is so flexible that it won't complain if we declare a variable like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> myNumber = 10;\n")),(0,r.kt)("p",null,"In the example above, we don't use ",(0,r.kt)("inlineCode",{parentName:"p"},"var"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"let"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"const"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"However, this is very bad for two reasons.")),(0,r.kt)("p",null,"Reason #1 has to do with a slightly more advanced concept called scope that we will learn about later in this section. We won't cover that in depth now, but it's enough to say that if we declare a variable in this way, it won't just be where you think it is, it'll be everywhere in your code, potentially causing trouble. Going back to our coworker Jane, it would be a little like the team lead accidentally assigning her to ",(0,r.kt)("em",{parentName:"p"},"all")," of the projects at our company instead of just the one she's focusing on."),(0,r.kt)("p",null,"Reason #2 goes back to clear communication. ",(0,r.kt)("inlineCode",{parentName:"p"},"var"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," communicate very clearly to other developers that a variable is being declared. Writing ",(0,r.kt)("inlineCode",{parentName:"p"},"const myNumber"),' in our code is like saying "Hey everyone, I\'m introducing a new variable that should never change called myNumber."'),(0,r.kt)("p",null,"However, if we declared ",(0,r.kt)("inlineCode",{parentName:"p"},"myNumber")," on its own, another developer might think it's been declared elsewhere. We won't even be communicating that we declared a new variable. That is poor communication and it will make other developers upset."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"So going forward, make sure to use ",(0,r.kt)("inlineCode",{parentName:"strong"},"let")," or ",(0,r.kt)("inlineCode",{parentName:"strong"},"const")," (and preferably ",(0,r.kt)("inlineCode",{parentName:"strong"},"const"),"). JavaScript won't care but other developers will thank you.")))}c.isMDXComponent=!0}}]);