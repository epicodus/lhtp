"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[16737],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(o,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},25430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"Class Fields and Constructors",id:"class_fields_and_constructors",slug:"class_fields_and_constructors",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0e_constructors_and_fields.md"},s=void 0,l={unversionedId:"c_and_net_part_time/basic-console-apps/class_fields_and_constructors",id:"c_and_net_part_time/basic-console-apps/class_fields_and_constructors",title:"Class Fields and Constructors",description:"We know a lot about classes and namespaces at this point, but our Shape Tracker application doesn't do much at all. Let's update our Triangle class to have fields and a constructor.",source:"@site/docs/c_and_net_part_time/4_basic-console-apps/0e_constructors_and_fields.md",sourceDirName:"c_and_net_part_time/4_basic-console-apps",slug:"/c_and_net_part_time/basic-console-apps/class_fields_and_constructors",permalink:"/c_and_net_part_time/basic-console-apps/class_fields_and_constructors",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Class Fields and Constructors",id:"class_fields_and_constructors",slug:"class_fields_and_constructors",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0e_constructors_and_fields.md"},sidebar:"c_and_net_part_time",previous:{title:"Classes and Namespaces",permalink:"/c_and_net_part_time/basic-console-apps/classes_and_namespaces"},next:{title:"Class Methods",permalink:"/c_and_net_part_time/basic-console-apps/class_methods"}},o={},c=[{value:"Adding Fields",id:"adding-fields",level:2},{value:"Accessing Fields",id:"accessing-fields",level:2},{value:"Adding a Constructor",id:"adding-a-constructor",level:2},{value:"Using the Constructor",id:"using-the-constructor",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We know a lot about classes and namespaces at this point, but our Shape Tracker application doesn't do much at all. Let's update our ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," class to have ",(0,r.kt)("strong",{parentName:"p"},"fields")," and a ",(0,r.kt)("strong",{parentName:"p"},"constructor"),". "),(0,r.kt)("h2",{id:"adding-fields"},"Adding Fields"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In JavaScript we often added properties to the objects we created. Well in C#, we add ",(0,r.kt)("strong",{parentName:"p"},"fields"),". In very simple terms, a C# field is exactly what a JavaScript property is. In more technical terms, a C# field is a variable of any type that is declared directly in a class."),(0,r.kt)("p",null,"Let's see what these look like."),(0,r.kt)("div",{class:"filename"},"Models/Triangle.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ShapeTracker.Models \n{\n  public class Triangle \n  {\n    public int Side1;\n    public int Side2 = 4;\n    public int Side3;\n  }\n}\n")),(0,r.kt)("p",null,"We've created three fields: ",(0,r.kt)("inlineCode",{parentName:"p"},"Side1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Side2"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Side3"),". These are meant to hold the three integer values that we'll use to determine the type of a triangle."),(0,r.kt)("p",null,"As we can see, ",(0,r.kt)("inlineCode",{parentName:"p"},"Side1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Side2"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Side3")," look like variables declared within a C# class. Well that's what a ",(0,r.kt)("strong",{parentName:"p"},"field")," is in C#. "),(0,r.kt)("p",null,"We can also describe these fields as ",(0,r.kt)("strong",{parentName:"p"},"members")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," class, since they belong to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," class."),(0,r.kt)("p",null,"Notice that ",(0,r.kt)("inlineCode",{parentName:"p"},"Side2")," looks different from the other fields. That's because we've assigned ",(0,r.kt)("inlineCode",{parentName:"p"},"Side2")," an ",(0,r.kt)("strong",{parentName:"p"},"initial value")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"4"),". We can give initial values to any class field we create."),(0,r.kt)("p",null,"Also notice the keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"public"),". This is one of many ",(0,r.kt)("strong",{parentName:"p"},"access level modifiers"),". As modifiers, keywords like ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," specify the level of protection this data has in our application. As ",(0,r.kt)("inlineCode",{parentName:"p"},"public"),", our three fields can be accessed from anywhere in our application."),(0,r.kt)("p",null,"As far as naming conventions, ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"public")," fields should be in Pascal case"),', or "UpperCamelCase". We are using ',(0,r.kt)("inlineCode",{parentName:"p"},"Side1"),", but we could also use ",(0,r.kt)("inlineCode",{parentName:"p"},"SideOne"),"."),(0,r.kt)("p",null,"Let's look at that next \u2014 how to access these fields."),(0,r.kt)("h2",{id:"accessing-fields"},"Accessing Fields"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Let's update our code in ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs")," to access one of these fields to get a sense of how that works. Update your code as follows:"),(0,r.kt)("div",{class:"filename"},"Program.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker\n{\n  public class Program\n  {\n    static void Main()\n    {\n      Triangle testTriangle = new Triangle();\n      Console.WriteLine(testTriangle.GetType());\n      // new code below\n      testTriangle.Side1 = 65;\n      testTriangle.Side3 = 88;\n      Console.WriteLine($"Side one of the triangle: {testTriangle.Side1}");\n      Console.WriteLine($"Side two of the triangle: {testTriangle.Side2}");\n      Console.WriteLine($"Side three of the triangle: {testTriangle.Side3}");\n    }\n  }\n}\n')),(0,r.kt)("p",null,"The first two lines of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Main()")," method are the same. Below that is new code. "),(0,r.kt)("p",null,"Similar to JavaScript, we use ",(0,r.kt)("strong",{parentName:"p"},"dot notation")," to access fields, like ",(0,r.kt)("inlineCode",{parentName:"p"},"testTriangle.Side1"),". Note that we cannot use brackets ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")," to access fields like we were able to with JavaScript properties. In C# brackets are used to apply indexing, like accessing an array element by its index location."),(0,r.kt)("p",null,"Take note that all of the fields we created are ",(0,r.kt)("strong",{parentName:"p"},"instance fields"),", which means that we access them on an instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," class, specifically ",(0,r.kt)("inlineCode",{parentName:"p"},"testTriangle"),", and not the class itself. "),(0,r.kt)("p",null,"Within the new ",(0,r.kt)("inlineCode",{parentName:"p"},"Console.WriteLine()")," statements, notice that we're using string interpolation to combine strings with variables."),(0,r.kt)("p",null,"We can now run our program with ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet run")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ShapeTracker")," project directory and we'll get the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ShapeTracker.Models.Triangle\nSide one of the triangle: 65\nSide two of the triangle: 4\nSide three of the triangle: 88\n")),(0,r.kt)("p",null,"We now have a ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," with three sides."),(0,r.kt)("h2",{id:"adding-a-constructor"},"Adding a Constructor"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Let's improve our lives as developers and add a custom constructor that sets the values of the three sides when the triangle is created. "),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"constructor")," is a method that is called when a new instance of a class is created. Any information regarding the initial setup of a new object can be included in a constructor.  "),(0,r.kt)("p",null,"Here's how we'll update ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle.cs"),":"),(0,r.kt)("div",{class:"filename"},"Models/Triangle.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ShapeTracker.Models \n{\n  public class Triangle \n  {\n    public int Side1;\n    public int Side2; // no longer setting a default value\n    public int Side3;\n\n    public Triangle(int length1, int length2, int length3) \n    {\n      Side1 = length1;\n      Side2 = length2;\n      Side3 = length3;\n    }\n  }\n}\n")),(0,r.kt)("p",null,"To create a class constructor, we simply need to define a method of the same name as the class."),(0,r.kt)("p",null,"The access modifier ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," means this method is available anywhere in our application."),(0,r.kt)("p",null,"Our constructor can take none or multiple parameters. Each of these parameters (",(0,r.kt)("inlineCode",{parentName:"p"},"length1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"length2"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"length3"),") correspond to the fields a ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," object should have (",(0,r.kt)("inlineCode",{parentName:"p"},"Side1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Side2"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Side3"),"). We can see within the curly braces of the constructor method that we assign each parameter as the value of a field. "),(0,r.kt)("p",null,"Between the two curly braces ",(0,r.kt)("inlineCode",{parentName:"p"},"{ }")," is the body of our constructor method \u2014 any code that we want the constructor to execute. Here, we're setting the values of our three fields, but we could perform other actions as well. "),(0,r.kt)("p",null,"Note that ",(0,r.kt)("strong",{parentName:"p"},"the class's fields are in Pascal case while the constructor's parameters are lowerCamelCase.")," That's because the parameters are variables."),(0,r.kt)("h2",{id:"using-the-constructor"},"Using the Constructor"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Constructors create new instances of a class when the ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," keyword is used. ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," denotes that we're creating a new instance of this class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"Triangle coolTriangle = new Triangle(100, 010, 001);\n")),(0,r.kt)("p",null,"When we call our constructor, we need to pass in an argument for each parameter, or else we'll get a compiler error. For example, if we put no arguments into our ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle()")," constructor call, we'll get this error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{style:{color:"red"}},"/Users/staff/Desktop/ShapeTracker.Solution/ShapeTracker/Program.cs(10,35): error CS7036: There is no argument given that corresponds to the required formal parameter 'length1' of 'Triangle.Triangle(int, int, int)' [/Users/staff/Desktop/ShapeTracker.Solution/ShapeTracker/ShapeTracker.csproj] The build failed. Fix the build errors and run again.")),(0,r.kt)("p",null,"Let's update the user interface code in ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs")," to use the constructor we created:"),(0,r.kt)("div",{class:"filename"},"Program.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker\n{\n  class Program\n  {\n    static void Main()\n    {\n      Triangle testTriangle = new Triangle(3,4,5);\n      Console.WriteLine($"Side one of the triangle: {testTriangle.Side1}");\n      Console.WriteLine($"Side two of the triangle: {testTriangle.Side2}");\n      Console.WriteLine($"Side three of the triangle: {testTriangle.Side3}");\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Now when we run our console app, we'll get this output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Side one of the triangle: 3\nSide two of the triangle: 4\nSide three of the triangle: 5\n")),(0,r.kt)("p",null,"Up next, we'll add a method that determines what type of triangle we have: isosceles, equilateral, scalene, or not a triangle."))}u.isMDXComponent=!0}}]);