"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[78284],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},66350:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Assignment, Comparison, and Equality Operators",id:"assignment_comparison_and_equality_operators",slug:"assignment_comparison_and_equality_operators",hide_table_of_contents:!0,sidebar_position:18,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_javascript-and-web-browsers/0r_assignment_comparison_and_equality_operators.md"},i=void 0,l={unversionedId:"introduction_to_programming/javascript-and-web-browsers/assignment_comparison_and_equality_operators",id:"introduction_to_programming/javascript-and-web-browsers/assignment_comparison_and_equality_operators",title:"Assignment, Comparison, and Equality Operators",description:"JavaScript has many operators for many different situations. We've already learned about a two types of operators:",source:"@site/docs/introduction_to_programming/2_javascript-and-web-browsers/0r_assignment_comparison_and_equality_operators.md",sourceDirName:"introduction_to_programming/2_javascript-and-web-browsers",slug:"/introduction_to_programming/javascript-and-web-browsers/assignment_comparison_and_equality_operators",permalink:"/lhtp/introduction_to_programming/javascript-and-web-browsers/assignment_comparison_and_equality_operators",draft:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"Assignment, Comparison, and Equality Operators",id:"assignment_comparison_and_equality_operators",slug:"assignment_comparison_and_equality_operators",hide_table_of_contents:!0,sidebar_position:18,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_javascript-and-web-browsers/0r_assignment_comparison_and_equality_operators.md"},sidebar:"introduction_to_programming",previous:{title:"Practice: Using MDN Documentation JavaScript",permalink:"/lhtp/introduction_to_programming/javascript-and-web-browsers/practice_using_mdn_documentation_javascript"},next:{title:"Practice: Assignment, Comparison, and Equality Operators",permalink:"/lhtp/introduction_to_programming/javascript-and-web-browsers/practice_assignment_comparison_and_equality_operators"}},s={},p=[{value:"Assignment Operators",id:"assignment-operators",level:2},{value:"Documentation on Assignment Operators",id:"documentation-on-assignment-operators",level:3},{value:"Comparison Operators",id:"comparison-operators",level:2},{value:"Greater Than Operator <code>&gt;</code>",id:"greater-than-operator-",level:3},{value:"Less Than Operator <code>&lt;</code>",id:"less-than-operator-",level:3},{value:"Greater Than or Equal Operator <code>&gt;=</code>",id:"greater-than-or-equal-operator-",level:3},{value:"Less Than or Equal Operator <code>&lt;=</code>",id:"less-than-or-equal-operator-",level:3},{value:"Documentation on Comparison/Relational Operators",id:"documentation-on-comparisonrelational-operators",level:3},{value:"Equality Operators",id:"equality-operators",level:2},{value:"Equality Operator <code>===</code>",id:"equality-operator-",level:3},{value:"Inequality Operator <code>!==</code>",id:"inequality-operator-",level:3},{value:"Documentation on Equality Operators",id:"documentation-on-equality-operators",level:3}],u={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"JavaScript has many operators for many different situations. We've already learned about a two types of operators: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Arithmetic operators: ",(0,r.kt)("inlineCode",{parentName:"li"},"+"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"-"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"*"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"/"),". "),(0,r.kt)("li",{parentName:"ul"},"The assignment operator: ",(0,r.kt)("inlineCode",{parentName:"li"},"="))),(0,r.kt)("p",null,"Let's now take the time to learn about more JavaScript operators used for assignment and comparison. For a list of all JavaScript operators, visit the MDN reference page on ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators"},"Expressions and Operators"),'. We\'ll be linking to specific sections within the MDN "Expressions and Operators" page throughout this lesson.'),(0,r.kt)("h2",{id:"assignment-operators"},"Assignment Operators"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We've already seen how we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," assignment operator to set a variable equal to a value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"> const favoriteNumber = 42;\n> favoriteNumber;\n42\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," is called an ",(0,r.kt)("strong",{parentName:"p"},"assignment operator")," because it assigns the value on the right of the operator to the variable on the left. In the above example, ",(0,r.kt)("inlineCode",{parentName:"p"},"favoriteNumber")," is assigned the value 42."),(0,r.kt)("p",null,"Another assignment operator is the ",(0,r.kt)("inlineCode",{parentName:"p"},"+=")," operator, because it also assigns a new value to the variable on the left based on the value to the right."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"> let myNumber = 5;\n> myNumber += 1;\n> myNumber;\n6\n")),(0,r.kt)("p",null,"There is an assignment operator for each of the mathematical functions: addition, subtraction, multiplication and division."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+=\n-=\n*=\n/=\n")),(0,r.kt)("p",null,"When you use any of these assignment operators, the value of the variable on the left side is changed by the math operation and value on the right.  Let's do one of each:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> let testNumber = 10;\n> testNumber += 5;\n> testNumber;\n15\n> testNumber -= 9;\n> testNumber;\n6\n> testNumber *= 3;\n> testNumber;\n18\n> testNumber /= 2\n> testNumber;\n9\n")),(0,r.kt)("h3",{id:"documentation-on-assignment-operators"},"Documentation on Assignment Operators"),(0,r.kt)("p",null,"Visit this link for the MDN reference page on assignment operators:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("span",{class:"glyphicon glyphicon-link"})," ",(0,r.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators"},"Assignment Operators"))," ")),(0,r.kt)("h2",{id:"comparison-operators"},"Comparison Operators"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Assignment operators change the value of the variable on the left of the operator. ",(0,r.kt)("strong",{parentName:"p"},"Comparison operators")," do not change any values, but return the booleans ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," depending on whether the JavaScript expression evaluates as true or false."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"> const myNumber = 5;\n> myNumber < 10;\ntrue\n> myNumber > 10;\nfalse\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Comparison operators")," are also called ",(0,r.kt)("strong",{parentName:"p"},"relational operators"),', because they help find the relationship between two operands, asking questions like "is 10 bigger than 5?".'),(0,r.kt)("h3",{id:"greater-than-operator-"},"Greater Than Operator ",(0,r.kt)("inlineCode",{parentName:"h3"},">")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},">"),' means "greater-than (and not equal to)":'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3 > 4")," evaluates to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3 > 3")," also evaluates to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),", because 3 is equal to 3 and not greater."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3 > 2")," evaluates to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,r.kt)("h3",{id:"less-than-operator-"},"Less Than Operator ",(0,r.kt)("inlineCode",{parentName:"h3"},"<")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<")," is the opposite of ",(0,r.kt)("inlineCode",{parentName:"p"},">"),'. It means "less-than (and not equal to)": '),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3 < 5")," evaluates to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),". "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3 < 3")," evaluates to ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," because they are equal.")),(0,r.kt)("h3",{id:"greater-than-or-equal-operator-"},"Greater Than or Equal Operator ",(0,r.kt)("inlineCode",{parentName:"h3"},">=")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},">=")," is the same as ",(0,r.kt)("inlineCode",{parentName:"p"},">"),", except it evaluates to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the two sides are equal: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3 >= 3")," evaluates to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3 >= 2")," also evaluates to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,r.kt)("h3",{id:"less-than-or-equal-operator-"},"Less Than or Equal Operator ",(0,r.kt)("inlineCode",{parentName:"h3"},"<=")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<=")," is the opposite of ",(0,r.kt)("inlineCode",{parentName:"p"},">="),'. It means "less-than-or-equal-to": '),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3 <= 3")," evaluates to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," because 3 is equal to 3. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3 <= 1")," evaluates to ",(0,r.kt)("inlineCode",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3 <= 5")," evaluates to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,r.kt)("p",null,"In the above examples, notice that the comparison operators return one of two values: ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". Notice that there are no quotes around these values. ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," aren't strings \u2014 they're called ",(0,r.kt)("strong",{parentName:"p"},"booleans"),". They simply represent being true or false."),(0,r.kt)("h3",{id:"documentation-on-comparisonrelational-operators"},"Documentation on Comparison/Relational Operators"),(0,r.kt)("p",null,"Visit this link for the MDN reference page on relational operators:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("span",{class:"glyphicon glyphicon-link"})," ",(0,r.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#relational_operators"},"Relational Operators"))," ")),(0,r.kt)("h2",{id:"equality-operators"},"Equality Operators"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We can also compare the equality of two operands with ",(0,r.kt)("strong",{parentName:"p"},"equality operators"),". This means we can check to see whether or not two operands have the same value. Equality operators return a ",(0,r.kt)("strong",{parentName:"p"},"boolean"),"; ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"> const myNumber = 5;\n> myNumber === 10;\nfalse\n> myNumber === 5;\ntrue\n")),(0,r.kt)("p",null,"Notice the triple equal signs syntax: ",(0,r.kt)("inlineCode",{parentName:"p"},"==="),". This is a type of ",(0,r.kt)("strong",{parentName:"p"},"equality operator")," called ",(0,r.kt)("strong",{parentName:"p"},"strict equality"),". We use 3 equal signs ",(0,r.kt)("inlineCode",{parentName:"p"},"===")," when we are asking if two operands are equal to each other. When we're assigning a variable to a value, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"const myNumber = 5")," we use a single equal sign ",(0,r.kt)("inlineCode",{parentName:"p"},"="),". Mixing these up is one of the easiest syntax errors to make."),(0,r.kt)("p",null,"JavaScript also has an equal operator with 2 equal signs, ",(0,r.kt)("inlineCode",{parentName:"p"},"=="),", but it is almost never used and you should generally avoid it. Try out this example in the DevTools Console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'> const myNumber = 5;\n> myNumber === 5;\ntrue\n> myNumber === "5"\nfalse\n> myNumber == "5"\ntrue\n')),(0,r.kt)("p",null,"The double equals operator returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," when comparing ",(0,r.kt)("inlineCode",{parentName:"p"},'5 == "5"'),", indicating that a number and a string are the same. Whereas the strict equality operator with 3 equal signs returns ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," when comparing ",(0,r.kt)("inlineCode",{parentName:"p"},'5 === "5"'),", because a number and a string are not the same data type. With the double equals operator, JavaScript will make the assumption that you want the two different data types to be evaluated the same. As a developer you may not be expecting that assumption and this can lead to confusing bugs in your code."),(0,r.kt)("p",null,"Take some time to play around more with the double equals operator and the strict equality operator by visiting the MDN documentation: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality"},"Strict Equality Operator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality"},"Double Equals Operator"))),(0,r.kt)("p",null,"We can also check the opposite of equality \u2014 not being equal \u2014 with the ",(0,r.kt)("strong",{parentName:"p"},"inequality operator")," ",(0,r.kt)("inlineCode",{parentName:"p"},"!=="),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"> const myNumber = 5;\n> myNumber !== 10;\ntrue\n> myNumber !== 5;\nfalse\n")),(0,r.kt)("p",null,"Equality operators work for strings as well."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'> const greeting = "hello world";\n> greeting === "hello world";\ntrue\n> greeting === "goodbye";\nfalse\n> greeting;\n"hello world"\n')),(0,r.kt)("p",null,"Notice that if you type ",(0,r.kt)("inlineCode",{parentName:"p"},"greeting")," after using the equality operators, you will see that the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"greeting")," still contains the string ",(0,r.kt)("inlineCode",{parentName:"p"},'"hello world"'),". ",(0,r.kt)("strong",{parentName:"p"},"Comparison and equality operators do not change the value of the variable.")," Let's look at another example to illustrate that important difference between assignment operators and comparison/equality operators."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"> let myNumber = 5;\n> myNumber === 5;\ntrue\n> myNumber === 10;\nfalse\n> myNumber = 10;\n> myNumber === 10;\ntrue\n> myNumber === 5;\nfalse\n")),(0,r.kt)("p",null,"Notice that we use ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," here because we reassign the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"myNumber")," to 10. We wouldn't be able to do that if ",(0,r.kt)("inlineCode",{parentName:"p"},"myNumber")," were a constant variable declared with ",(0,r.kt)("inlineCode",{parentName:"p"},"const"),"."),(0,r.kt)("p",null,"Here are some more examples of equality operators."),(0,r.kt)("h3",{id:"equality-operator-"},"Equality Operator ",(0,r.kt)("inlineCode",{parentName:"h3"},"===")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"==="),' means "equal-to". '),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"5 === 5")," or ",(0,r.kt)("inlineCode",{parentName:"li"},'"cat" === "cat"')," evaluate to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3 === 5")," or ",(0,r.kt)("inlineCode",{parentName:"li"},'"cat" === "dog"')," evaluate to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,r.kt)("h3",{id:"inequality-operator-"},"Inequality Operator ",(0,r.kt)("inlineCode",{parentName:"h3"},"!==")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"!=="),' means "not-equal-to". It is the opposite of ',(0,r.kt)("inlineCode",{parentName:"p"},"==="),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"cat" !== "dog"')," evaluates to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"5 !== 5")," evaluates to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),", because saying that 5 is not equal to 5 is not true.")),(0,r.kt)("h3",{id:"documentation-on-equality-operators"},"Documentation on Equality Operators"),(0,r.kt)("p",null,"Visit this link for the MDN reference page on equality operators:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("span",{class:"glyphicon glyphicon-link"})," ",(0,r.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#equality_operators"},"Equality Operators")))))}d.isMDXComponent=!0}}]);