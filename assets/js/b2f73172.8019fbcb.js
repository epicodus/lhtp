"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[31442],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),h=o,g=u["".concat(l,".").concat(h)]||u[h]||p[h]||a;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var d=2;d<a;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},90619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a={title:"Overloading Constructors and Methods",id:"overloading_constructors_and_methods",slug:"overloading_constructors_and_methods",hide_table_of_contents:!0,sidebar_position:7,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/6_test-driven-development-with-c/1c_overloaded_constructors.md"},s=void 0,i={unversionedId:"c_and_net/test-driven-development-with-c/overloading_constructors_and_methods",id:"c_and_net/test-driven-development-with-c/overloading_constructors_and_methods",title:"Overloading Constructors and Methods",description:"Let's learn a technique that will allow us to make our class constructors and methods more flexible: overloads. As we usually do, let's start with an example.",source:"@site/docs/c_and_net/6_test-driven-development-with-c/1c_overloaded_constructors.md",sourceDirName:"c_and_net/6_test-driven-development-with-c",slug:"/c_and_net/test-driven-development-with-c/overloading_constructors_and_methods",permalink:"/lhtp/c_and_net/test-driven-development-with-c/overloading_constructors_and_methods",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Overloading Constructors and Methods",id:"overloading_constructors_and_methods",slug:"overloading_constructors_and_methods",hide_table_of_contents:!0,sidebar_position:7,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/6_test-driven-development-with-c/1c_overloaded_constructors.md"},sidebar:"c_and_net",previous:{title:"A Closer Look at Compiling and Executing C# Programs",permalink:"/lhtp/c_and_net/test-driven-development-with-c/a_closer_look_at_compiling_and_executing_c_programs"},next:{title:"Try/Catch Blocks",permalink:"/lhtp/c_and_net/test-driven-development-with-c/trycatch_blocks"}},l={},d=[{value:"Overloaded Constructors",id:"overloaded-constructors",level:2},{value:"Syntax to DRY Up Our Overloaded Constructor",id:"syntax-to-dry-up-our-overloaded-constructor",level:3},{value:"Overloaded Methods",id:"overloaded-methods",level:2},{value:"When to Use Overloads",id:"when-to-use-overloads",level:2},{value:"Look for Overloads in Documentation",id:"look-for-overloads-in-documentation",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Let's learn a technique that will allow us to make our class constructors and methods more flexible: ",(0,o.kt)("strong",{parentName:"p"},"overloads"),". As we usually do, let's start with an example. "),(0,o.kt)("h2",{id:"overloaded-constructors"},"Overloaded Constructors"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Let's modify our Shape Tracker's ",(0,o.kt)("inlineCode",{parentName:"p"},"Triangle")," class to include a new auto-implemented ",(0,o.kt)("inlineCode",{parentName:"p"},"Guess")," property, so that users can submit a guess about what type of triangle they have, before they are told (by our ",(0,o.kt)("inlineCode",{parentName:"p"},"Triangle.CheckType()")," instance method):"),(0,o.kt)("div",{class:"filename"},"ShapeTracker/Models/Triangle.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"using System.Collections.Generic;\n\nnamespace ShapeTracker.Models\n{\n  public class Triangle\n  {\n    private int _side1;\n    public int Side1\n    {\n      get { return _side1; }\n      set { _side1 = value; }\n    }\n    public int Side2 { get; set; }\n    private int _side3;\n    private static List<Triangle> _instances = new List<Triangle> {};\n    // New auto-implemented property below!\n    public string Guess { get; set; }\n\n    public Triangle(int length1, int length2, int length3)\n    {\n      _side1 = length1;\n      Side2 = length2;\n      _side3 = length3;\n      _instances.Add(this);\n    }\n\n    ... // other methods omitted for brevity\n  }\n}\n")),(0,o.kt)("p",null,"Now we need to update each use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Triangle()")," constructor (in our tests and source code) to include an argument for the user's guess:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'Triangle newTriangle = new Triangle(3, 4, 5, "isosceles");\n')),(0,o.kt)("p",null,"Aside from the headache of having to update our code, what if we wanted making a guess to be optional? Well, we can use an ",(0,o.kt)("strong",{parentName:"p"},"overloaded constructor")," that gives us the flexibility to pass in different configurations of arguments. With an overloaded constructor, we could pass in values just for the triangle's sides, or values for the triangle's sides ",(0,o.kt)("em",{parentName:"p"},"and")," a guess. "),(0,o.kt)("p",null,"Here's how we would create an overloaded constructor for our ",(0,o.kt)("inlineCode",{parentName:"p"},"Triangle")," class:"),(0,o.kt)("div",{class:"filename"},"ShapeTracker/Models/Triangle.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"using System.Collections.Generic;\n\nnamespace ShapeTracker.Models\n{\n  public class Triangle\n  {\n    private int _side1;\n    public int Side1\n    {\n      get { return _side1; }\n      set { _side1 = value; }\n    }\n    public int Side2 { get; set; }\n    private int _side3;\n    private static List<Triangle> _instances = new List<Triangle> {};\n    public string Guess { get; set; }\n\n    public Triangle(int length1, int length2, int length3)\n    {\n      _side1 = length1;\n      Side2 = length2;\n      _side3 = length3;\n      _instances.Add(this);\n    }\n\n    // New overloaded constructor below!!!\n    public Triangle(int length1, int length2, int length3, string userGuess)\n    {\n      _side1 = length1;\n      Side2 = length2;\n      _side3 = length3;\n      Guess = userGuess;\n      _instances.Add(this);\n    }\n\n    ... // other methods omitted for brevity\n  }\n}\n")),(0,o.kt)("p",null,"We've added a second constructor in the code above. The first constructor includes parameters for the three sides of a triangle, and the second constructor includes parameters for the three sides and a user's guess. "),(0,o.kt)("p",null,"Now we can instantiate new ",(0,o.kt)("inlineCode",{parentName:"p"},"Triangle")," objects in two ways:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'Triangle newTriangle = new Triangle(15, 44, 9);\nTriangle newTriangle = new Triangle(3, 4, 5, "isosceles");\n')),(0,o.kt)("h3",{id:"syntax-to-dry-up-our-overloaded-constructor"},"Syntax to DRY Up Our Overloaded Constructor"),(0,o.kt)("p",null,"However, our constructors aren't very DRY. Multiple lines of code are repeated. We can refactor our code with special syntax and the ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," keyword:"),(0,o.kt)("div",{class:"filename"},"ShapeTracker/Models/Triangle.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"    ... // code omitted for brevity\n\n    public Triangle(int length1, int length2, int length3)\n    {\n      _side1 = length1;\n      Side2 = length2;\n      _side3 = length3;\n      _instances.Add(this);\n    }\n\n    public Triangle(int length1, int length2, int length3, string userGuess) : this(length1, length2, length3)\n    {\n      Guess = userGuess;\n    }\n\n    ... // code omitted for brevity\n")),(0,o.kt)("p",null,"Our first constructor looks the same while the second has new syntax. We add ",(0,o.kt)("inlineCode",{parentName:"p"},": this(length1, length2, length3)"),". ",(0,o.kt)("inlineCode",{parentName:"p"},": this()")," allows the second constructor to utilize everything that's in the first constructor, which means we don't need to repeat any code that's already in the first constructor. We have to pass in ",(0,o.kt)("inlineCode",{parentName:"p"},"length1, length2, length3")," because we are utilizing the first constructor and it expects the three ",(0,o.kt)("inlineCode",{parentName:"p"},"length1, length2, length3")," parameters. Then our second, overloaded constructor will take care of the rest."),(0,o.kt)("h2",{id:"overloaded-methods"},"Overloaded Methods"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We can also overload methods just like we can with constructors. Here's a simple example of creating an overload for a static ",(0,o.kt)("inlineCode",{parentName:"p"},"Add()")," method in a made up ",(0,o.kt)("inlineCode",{parentName:"p"},"Calc")," class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Calc\n{\n  public static int Add(int a, int b)\n  {\n    return a + b;\n  }\n  public static int Add(int a, int b, int c)\n  {\n    return a + b + c;\n  }\n}\n")),(0,o.kt)("p",null,"With the first definition of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add()")," method, we only calculate the total of adding two numbers. In the second overloaded method, we calculate the total of adding three numbers."),(0,o.kt)("p",null,"Just like with constructors, we can use overloaded methods to greatly increase the flexibility of our code!"),(0,o.kt)("h2",{id:"when-to-use-overloads"},"When to Use Overloads"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"When we define two or more constructors or methods in a class, those constructors/methods that differ from the first constructor are called ",(0,o.kt)("strong",{parentName:"p"},"overloads"),". Let's look at three use cases for overloads using examples for constructors in the Shape Tracker console app:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Order of parameters:")," If we want to pass in a ",(0,o.kt)("inlineCode",{parentName:"p"},"userGuess")," first and then ",(0,o.kt)("inlineCode",{parentName:"p"},"length1"),", etc. afterwards, we could add an overloaded constructor that accounts for arguments being passed into the constructor in a different order."),(0,o.kt)("div",{class:"filename"},"ShapeTracker/Models/Triangle.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"    ... // code omitted for brevity\n    public string Guess { get; set; }\n\n    public Triangle(int length1, int length2, int length3)\n    {\n      _side1 = length1;\n      Side2 = length2;\n      _side3 = length3;\n      _instances.Add(this);\n    }\n\n    public Triangle(string userGuess, int length1, int length2, int length3) : this(length1, length2, length3)\n    {\n      Guess = userGuess;\n    }\n\n    ... // code omitted for brevity\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Data type of parameters:")," If we want to allow users to enter an open-ended guess, like entering the string ",(0,o.kt)("inlineCode",{parentName:"p"},'"isosceles"'),", or make a selection from a predefined list, like choosing the char ",(0,o.kt)("inlineCode",{parentName:"p"},"'a'")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"'b'"),", we can add overloaded constructors to account for different type of data. Note that you will need separate properties/fields for each type of data you want to store."),(0,o.kt)("div",{class:"filename"},"ShapeTracker/Models/Triangle.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"    ... // code omitted for brevity\n    public string OpenGuess { get; set; }\n    public char MultipleChoiceGuess { get; set; }\n\n    public Triangle(int length1, int length2, int length3)\n    {\n      _side1 = length1;\n      Side2 = length2;\n      _side3 = length3;\n      _instances.Add(this);\n    }\n\n    public Triangle(int length1, int length2, int length3, string userGuess) : this(length1, length2, length3)\n    {\n      OpenGuess = userGuess;\n    }\n    \n    public Triangle(int length1, int length2, int length3, char userGuess) : this(length1, length2, length3)\n    {\n      MultipleChoiceGuess = userGuess;\n    }\n\n    ... // code omitted for brevity\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Flexibility of parameters:")," We can choose to have a different number of parameters (as seen in the example we use above) or even no parameters at all. To include no parameters, add an empty constructor like this: "),(0,o.kt)("div",{class:"filename"},"ShapeTracker/Models/Triangle.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"    ... // code omitted for brevity\n\n    public Triangle(int length1, int length2, int length3)\n    {\n      _side1 = length1;\n      Side2 = length2;\n      _side3 = length3;\n      _instances.Add(this);\n    }\n\n    public Triangle() { }\n\n    ... // code omitted for brevity\n")),(0,o.kt)("p",null,"As we can see, overloaded constructors give us additional flexibility in our code. C# is strict about the number of parameters that can be passed into any method, including a constructor. However, in the real world, data can be messy and overloaded constructors can help us write resilient, reusable applications."),(0,o.kt)("h2",{id:"look-for-overloads-in-documentation"},"Look for Overloads in Documentation"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Built-in C# and .NET classes and methods often use overloads. For example, if we look at the MS documentation for the static method ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.console.writeline?view=net-6.0"},(0,o.kt)("inlineCode",{parentName:"a"},"Console.WriteLine()")),", we'll see that there are 18 overloaded constructors listed, which effectively means there are 18 different ways we can use this method!"),(0,o.kt)("p",null,"As the image below shows, we can quickly get a sense of all overloads for ",(0,o.kt)("inlineCode",{parentName:"p"},"Console.WriteLine()"),' by looking at the "In this article" right-hand menu, or we can start scrolling on the main page to look through the "Overloads" section.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/Section_One/overloaded-methods-on-MS-docs.png",alt:"Documentation for `Console.WriteLine()` that shows multiple overloads for the method."})))}p.isMDXComponent=!0}}]);