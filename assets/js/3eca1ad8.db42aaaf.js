"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[69586],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},27807:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"Integers, Decimals, and Arithmetic",id:"integers_decimals_and_arithmetic",slug:"integers_decimals_and_arithmetic",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/3_data-types-variables-branching-and-looping/0c_integers_and_arithmetic.md"},l=void 0,o={unversionedId:"c_and_net/data-types-variables-branching-and-looping/integers_decimals_and_arithmetic",id:"c_and_net/data-types-variables-branching-and-looping/integers_decimals_and_arithmetic",title:"Integers, Decimals, and Arithmetic",description:"Let\u2019s look at the data types that represent numbers: integers, longs,  floats, and doubles. Between these four data types, C# covers whole and decimal numbers, as well as numbers with many digits and fewer digits. As we'll see, C# numbers are very similar to JavaScript numbers; the main difference is that JavaScript has fewer data types that represent numbers than in C#.",source:"@site/docs/c_and_net/3_data-types-variables-branching-and-looping/0c_integers_and_arithmetic.md",sourceDirName:"c_and_net/3_data-types-variables-branching-and-looping",slug:"/c_and_net/data-types-variables-branching-and-looping/integers_decimals_and_arithmetic",permalink:"/lhtp/c_and_net/data-types-variables-branching-and-looping/integers_decimals_and_arithmetic",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Integers, Decimals, and Arithmetic",id:"integers_decimals_and_arithmetic",slug:"integers_decimals_and_arithmetic",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/3_data-types-variables-branching-and-looping/0c_integers_and_arithmetic.md"},sidebar:"c_and_net",previous:{title:"Strings, String Concatenation and Interpolation, and Chars",permalink:"/lhtp/c_and_net/data-types-variables-branching-and-looping/strings_string_concatenation_and_interpolation_and_chars"},next:{title:"Variables",permalink:"/lhtp/c_and_net/data-types-variables-branching-and-looping/variables"}},s={},p=[{value:"Integers and Longs",id:"integers-and-longs",level:2},{value:"Assigning Integers to Variables",id:"assigning-integers-to-variables",level:3},{value:"Choosing the Right Data Type: <code>int</code> or <code>long</code>",id:"choosing-the-right-data-type-int-or-long",level:3},{value:"Floats and Doubles",id:"floats-and-doubles",level:2},{value:"Assigning Floating-Point Numbers to Variables",id:"assigning-floating-point-numbers-to-variables",level:3},{value:"Choosing the Right Data Type: <code>float</code> or <code>double</code>",id:"choosing-the-right-data-type-float-or-double",level:3},{value:"Arithmetic Operators",id:"arithmetic-operators",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Let\u2019s look at the data types that represent numbers: integers, longs,  floats, and doubles. Between these four data types, C# covers whole and decimal numbers, as well as numbers with many digits and fewer digits. As we'll see, C# numbers are very similar to JavaScript numbers; the main difference is that JavaScript has fewer data types that represent numbers than in C#. "),(0,r.kt)("p",null,"We'll practice working with C# number types in the REPL. Start by opening your REPL with the ",(0,r.kt)("inlineCode",{parentName:"p"},"$ dotnet-script")," command in the Terminal (for Mac) or GitBash (for Windows)."),(0,r.kt)("h2",{id:"integers-and-longs"},"Integers and Longs"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Both integers and longs represent whole numbers, that is, numbers without decimals. ",(0,r.kt)("strong",{parentName:"p"},"Integers")," are meant to hold smaller numbers between -2,147,483,648 and 2,147,483,647. ",(0,r.kt)("strong",{parentName:"p"},"Longs")," are meant to hold larger numbers between -9,223,372,036,854,775,808 and 9,223,372,036,854,775,807."),(0,r.kt)("p",null,"We can create a new integer like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> 1\n1\n")),(0,r.kt)("p",null,"Or a new long like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> 9222222222222222\n9222222222222222\n")),(0,r.kt)("p",null,"Easy enough! But do notice this is ",(0,r.kt)("em",{parentName:"p"},"very")," different than:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'> "1"\n"1"\n')),(0,r.kt)("p",null,"The second example is a string ",(0,r.kt)("em",{parentName:"p"},"containing")," an integer. Strings are the ",(0,r.kt)("strong",{parentName:"p"},"only")," type of data wrapped in quotation marks. If we put quotation marks around a number, it's actually a string... and will act as such!"),(0,r.kt)("p",null,"For instance, check out what happens when we add two numbers wrapped in quotations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'> "1" + "1"\n"11"\n')),(0,r.kt)("p",null,"1 + 1 isn't 11! But we receive this result because the REPL is actually concatenating two ",(0,r.kt)("em",{parentName:"p"},"strings")," containing the character ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," together. You likely already recognize this type of error from JavaScript but it's so common it's worth mentioning again!"),(0,r.kt)("p",null,"We can avoid this erroneous math by avoiding quotation marks and ensuring numerical values are integers like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> 1 + 1\n2\n")),(0,r.kt)("p",null,"That's more like it!"),(0,r.kt)("h3",{id:"assigning-integers-to-variables"},"Assigning Integers to Variables"),(0,r.kt)("p",null,"Finally, we can store integers in a variable by declaring it of the type ",(0,r.kt)("inlineCode",{parentName:"p"},"int"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> int myAge = 45;\n> myAge\n45\n")),(0,r.kt)("p",null,"We can store longs in a variable by declaring it of the type ",(0,r.kt)("inlineCode",{parentName:"p"},"long"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> long superBigNumber = 9222222222222222;\n> superBigNumber\n9222222222222222\n")),(0,r.kt)("h3",{id:"choosing-the-right-data-type-int-or-long"},"Choosing the Right Data Type: ",(0,r.kt)("inlineCode",{parentName:"h3"},"int")," or ",(0,r.kt)("inlineCode",{parentName:"h3"},"long")),(0,r.kt)("p",null,"So what happens if we store a long in an int?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> int superBigNumber = 9222222222222222;\n")),(0,r.kt)("p",null,"We'll actually get a helpful error message:"),(0,r.kt)("code",{style:{color:"red"}},"(1,22): error CS0266: Cannot implicitly convert type 'long' to 'int'. An explicit conversion exists (are you missing a cast?)"),(0,r.kt)("p",null,"This error message lets us know that we can't store a ",(0,r.kt)("inlineCode",{parentName:"p"},"long")," number into a variable that's declared for an ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," type. We either need to update our variable's data type to ",(0,r.kt)("inlineCode",{parentName:"p"},"long"),', or convert one data type into another. Data type conversion is also called "type casting", and we\'ll learn about it a bit later on. '),(0,r.kt)("p",null,"So what happens if we store a small number in a long?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> long aNumber = 2;\n> aNumber\n2\n")),(0,r.kt)("p",null,"This will work as expected! In this case, the ",(0,r.kt)("inlineCode",{parentName:"p"},"aNumber")," variable is of the type ",(0,r.kt)("inlineCode",{parentName:"p"},"long"),", so it can hold a very large number at any point. For example, we could update the ",(0,r.kt)("inlineCode",{parentName:"p"},"aNumber")," variable to hold a very large number:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> aNumber = 9222222222222222;\n> aNumber\n9222222222222222\n")),(0,r.kt)("p",null,"Generally we shouldn't use a ",(0,r.kt)("inlineCode",{parentName:"p"},"long")," data type for small numbers that could be declared as ",(0,r.kt)("inlineCode",{parentName:"p"},"int"),". That's because ",(0,r.kt)("inlineCode",{parentName:"p"},"long")," takes up more space in memory than ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," does, and we should be mindful of conversing memory in simple cases like these. "),(0,r.kt)("p",null,"In the example projects for this course, we'll primarily use the ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," data type because we won't be working with long whole numbers. However, if you know that you are dealing with very large numbers in a project you create, you should be mindful to investigate whether or not it's best to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"long")," data type. "),(0,r.kt)("h2",{id:"floats-and-doubles"},"Floats and Doubles"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The float and double data types represent decimal numbers like 3.14  or 9.2342342342342. ",(0,r.kt)("strong",{parentName:"p"},"Floats")," are meant to hold numbers with a smaller number of decimals, about 6 to 9 digits. ",(0,r.kt)("strong",{parentName:"p"},"Doubles")," are meant to hold numbers with a larger amount of decimals, about 15 to 17 digits. Collectively, numbers with a decimal point are referred to as ",(0,r.kt)("strong",{parentName:"p"},"floating-point numbers")," in computer programming."),(0,r.kt)("p",null,"We can create a new double like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> 9.2342342342342\n9.2342342342342\n")),(0,r.kt)("p",null,"Or a new float like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> 3.14F\n3.14\n")),(0,r.kt)("p",null,"Notice that we add the suffix ",(0,r.kt)("inlineCode",{parentName:"p"},"F")," to our number to declare it as a float. We need to do this, otherwise the number ",(0,r.kt)("inlineCode",{parentName:"p"},"3.14")," will be declared as a double. That's because ",(0,r.kt)("strong",{parentName:"p"},"C# performs an implicit conversion of all floats to doubles"),". If we want to make sure that this implicit conversion does not happen, we need to include the suffix ",(0,r.kt)("inlineCode",{parentName:"p"},"F")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," at the end of the number we want to declare as a ",(0,r.kt)("inlineCode",{parentName:"p"},"float"),", as in ",(0,r.kt)("inlineCode",{parentName:"p"},"3.14F"),". "),(0,r.kt)("p",null,"There's also a suffix for numbers that we want to declare as a double that we can use as needed, which is ",(0,r.kt)("inlineCode",{parentName:"p"},"D")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"d"),". To summarize, all of the following examples creates a double:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> 9.2342342342342\n9.2342342342342\n> 3.14\n3.14\n> 0.124123123123D\n0.124123123123\n")),(0,r.kt)("h3",{id:"assigning-floating-point-numbers-to-variables"},"Assigning Floating-Point Numbers to Variables"),(0,r.kt)("p",null,"We can store doubles in a variables by declaring our variable of the ",(0,r.kt)("inlineCode",{parentName:"p"},"double")," data type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> double aLongDecimal = 9.2342342342342;\n> aLongDecimal\n9.2342342342342\n")),(0,r.kt)("p",null,"We can store floats in a variable by declaring our variable of the ",(0,r.kt)("inlineCode",{parentName:"p"},"float")," data type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> float pi = 3.14F;\n> pi\n3.14\n")),(0,r.kt)("p",null,"Notice that we need to include an ",(0,r.kt)("inlineCode",{parentName:"p"},"F")," suffix at the end of the decimal number that we're declaring as a float: ",(0,r.kt)("inlineCode",{parentName:"p"},"3.14F"),". If we don't include the ",(0,r.kt)("inlineCode",{parentName:"p"},"F"),", we'll get an error:"),(0,r.kt)("code",{style:{color:"red"}},"(1,12): error CS0664: Literal of type double cannot be implicitly converted to type 'float'; use an 'F' suffix to create a literal of this type"),(0,r.kt)("p",null,"Again, this is because C# performs an implicit conversion of all floats to doubles. If we want to make sure that this implicit conversion does not happen, we need to include the suffix ",(0,r.kt)("inlineCode",{parentName:"p"},"F")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," at the end of the number we want to declare as a ",(0,r.kt)("inlineCode",{parentName:"p"},"float"),", as in ",(0,r.kt)("inlineCode",{parentName:"p"},"3.14F"),". "),(0,r.kt)("h3",{id:"choosing-the-right-data-type-float-or-double"},"Choosing the Right Data Type: ",(0,r.kt)("inlineCode",{parentName:"h3"},"float")," or ",(0,r.kt)("inlineCode",{parentName:"h3"},"double")),(0,r.kt)("p",null,"If we choose the wrong data type between ",(0,r.kt)("inlineCode",{parentName:"p"},"float")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"double"),", we're at risk of losing data and we won't get an error message about it. "),(0,r.kt)("p",null,"Take this for example, where we store a very long decimal into a variable called ",(0,r.kt)("inlineCode",{parentName:"p"},"testNum")," declared as the ",(0,r.kt)("inlineCode",{parentName:"p"},"float")," type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> float testNum = 9.2342342342342F;\n> testNum\n9.234234\n")),(0,r.kt)("p",null,"Notice that our decimal number got shortened! From ",(0,r.kt)("inlineCode",{parentName:"p"},"9.2342342342342")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"9.234234"),". Well, this is what happens in C# if we don't pick the right data type for floating point numbers. "),(0,r.kt)("p",null,"Now, if we save a number with a small amount of decimals to a variable that's declared as a ",(0,r.kt)("inlineCode",{parentName:"p"},"double"),", we'd simply be taking up more space in memory. Something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> double testNum2 = 9.1;\n> testNum2\n9.1\n")),(0,r.kt)("p",null,"However, this is the right choice if we plan to later update our ",(0,r.kt)("inlineCode",{parentName:"p"},"testNum2")," variable to a new number that has many decimals:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> testNum2 = 16.11231231222312;\n> testNum2\n16.11231231222312\n")),(0,r.kt)("p",null,"We won't work often with decimals in the example projects in this course. However, you'll likely find use cases for ",(0,r.kt)("inlineCode",{parentName:"p"},"float")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"double")," in your own practice projects that you create. "),(0,r.kt)("h2",{id:"arithmetic-operators"},"Arithmetic Operators"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The five ",(0,r.kt)("strong",{parentName:"p"},"arithmetic operators")," we used in JavaScript work the same in C#. You should recall these basic operators:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," for addition, as seen in the example above."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-")," for subtraction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"*")," for multiplication."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/")," for division."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%")," for modulo, which gives us the remainder of dividing two numbers.")),(0,r.kt)("p",null,"We can use each with integers in the REPL and receive expected results. Note that the following examples use whole numbers of the ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," type, but they will work the same with floating point numbers."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Subtraction"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> 1 - 1\n0\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Addition:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> 1 + 1\n2\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Multiplication:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> 2 * 2\n4\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Division:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> 4 / 2\n2\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Modulo:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> 5 % 2\n1\n")),(0,r.kt)("p",null,"Remember that a ",(0,r.kt)("strong",{parentName:"p"},"modulo")," gives us the remainder of dividing two numbers an it has anything to do with percentages!"))}u.isMDXComponent=!0}}]);