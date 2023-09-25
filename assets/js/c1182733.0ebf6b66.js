"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[88883],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,m=d["".concat(o,".").concat(u)]||d[u]||h[u]||l;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const l={title:"Class Methods",id:"class_methods",slug:"class_methods",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/4_basic-console-apps/0f_methods.md"},r=void 0,s={unversionedId:"c_and_net_classic/basic-console-apps/class_methods",id:"c_and_net_classic/basic-console-apps/class_methods",title:"Class Methods",description:"In this lesson, we'll add a method that determines what type of triangle we have: isosceles, equilateral, scalene, or not a triangle. The logic in this method will be an exact copy from the Shape Tracker logic we created in JavaScript, only it will be written in C# with C# indentation and spacing. If you want to check out the JS before proceeding, visit this link here.",source:"@site/docs/c_and_net_classic/4_basic-console-apps/0f_methods.md",sourceDirName:"c_and_net_classic/4_basic-console-apps",slug:"/c_and_net_classic/basic-console-apps/class_methods",permalink:"/lhtp/c_and_net_classic/basic-console-apps/class_methods",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Class Methods",id:"class_methods",slug:"class_methods",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/4_basic-console-apps/0f_methods.md"},sidebar:"c_and_net_classic",previous:{title:"Class Fields and Constructors",permalink:"/lhtp/c_and_net_classic/basic-console-apps/class_fields_and_constructors"},next:{title:"Access Modifiers, Best Practices with Fields, and Getter and Setter Methods",permalink:"/lhtp/c_and_net_classic/basic-console-apps/access_modifiers_best_practices_with_fields_and_getter_and_setter_methods"}},o={},c=[{value:"Class Methods",id:"class-methods",level:2},{value:"Calling a Class Method",id:"calling-a-class-method",level:2},{value:"Updating <code>CheckType()</code> Logic",id:"updating-checktype-logic",level:2},{value:"Repository Reference",id:"repository-reference",level:3}],p={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this lesson, we'll add a method that determines what type of triangle we have: isosceles, equilateral, scalene, or not a triangle. The logic in this method will be an exact copy from the Shape Tracker logic we created in JavaScript, only it will be written in C# with C# indentation and spacing. If you want to check out the JS before proceeding, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/epicodus-lessons/section-5-shape-tracker/blob/3_multiple_business_logic_files/src/js/triangle.js"},"visit this link here"),"."),(0,i.kt)("h2",{id:"class-methods"},"Class Methods"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Any C# class method needs a name and a return type. Parameters and access level modifiers are optional. (We'll learn about access level modifiers in the next lesson.)"),(0,i.kt)("p",null,"Let's add a first draft of a new ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckType")," method to ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle.cs")," now:"),(0,i.kt)("div",{class:"filename"},"Models/Triangle.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace ShapeTracker.Models \n{\n  public class Triangle \n  {\n    public int Side1;\n    public int Side2;\n    public int Side3;\n\n    public Triangle(int length1, int length2, int length3) \n    {\n      Side1 = length1;\n      Side2 = length2;\n      Side3 = length3;\n    }\n\n    public string CheckType() \n    {\n      return "I can\'t answer that yet";\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Here are the parts to our method:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"public")," is the access level modifier which determines where in the application our method can be accessed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string")," is the return type of our method. Specifying the type of the return value is a requirement of C# as a strictly-typed language. If there is no return value for a method we list ",(0,i.kt)("inlineCode",{parentName:"li"},"void"),', which means "nothing".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CheckType")," is the name of our method. Methods are always named in Pascal case. "),(0,i.kt)("li",{parentName:"ul"},"Any parameters go between the parens ",(0,i.kt)("inlineCode",{parentName:"li"},"()")," following the method name."),(0,i.kt)("li",{parentName:"ul"},"Between the two curly braces ",(0,i.kt)("inlineCode",{parentName:"li"},"{ }")," is the body of our method \u2014 any code that we want the method to run.  ")),(0,i.kt)("h2",{id:"calling-a-class-method"},"Calling a Class Method"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Let's see how we can call the ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckType()")," method. Here's how we'll update our UI logic in ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs"),":"),(0,i.kt)("div",{class:"filename"},"Program.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker\n{\n  class Program\n  {\n    static void Main()\n    {\n      Triangle testTriangle = new Triangle(3,4,5);\n      Console.WriteLine($"Side one of the triangle: {testTriangle.Side1}");\n      Console.WriteLine($"Side two of the triangle: {testTriangle.Side2}");\n      Console.WriteLine($"Side three of the triangle: {testTriangle.Side3}");\n      Console.WriteLine("Want to know what type of triangle you have?");\n      Console.WriteLine("Calculating...");\n      Console.WriteLine($"Your triangle is: {testTriangle.CheckType()}.");\n    }\n  }\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckType()")," method is an ",(0,i.kt)("strong",{parentName:"p"},"instance method")," so we need to call it on an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," class, which is exactly what the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"testTriangle")," is. "),(0,i.kt)("p",null,"If we run our code, we'll see new terminal output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Side one of the triangle: 3\nSide two of the triangle: 4\nSide three of the triangle: 5\nWant to know what type of triangle you have?\nCalculating...\nYour triangle is: I can't answer that yet.\n")),(0,i.kt)("h2",{id:"updating-checktype-logic"},"Updating ",(0,i.kt)("inlineCode",{parentName:"h2"},"CheckType()")," Logic"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Now, let's update the logic within ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckType()")," to actually return the different values: isosceles, scalene, equilateral, or not a triangle."),(0,i.kt)("div",{class:"filename"},"Models/Triangle.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace ShapeTracker.Models \n{\n  public class Triangle \n  {\n    public int Side1;\n    public int Side2;\n    public int Side3;\n\n    public Triangle(int length1, int length2, int length3) \n    {\n      Side1 = length1;\n      Side2 = length2;\n      Side3 = length3;\n    }\n\n    public string CheckType() \n    {\n      if ((Side1 > (Side2 + Side3)) || (Side2 > (Side1 + Side3)) || (Side3 > (Side1 + Side2)))\n      {\n        return "not a triangle";\n      } \n      else if ((Side1 != Side2) && ((Side1 != Side3)) && ((Side2 != Side3))) \n      {\n        return "scalene triangle";\n      }  \n      else if ((Side1 == Side2) && (Side1 == Side3)) \n      {\n        return "equilateral triangle";\n      } \n      else \n      {\n        return "isosceles triangle";\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Again, the triangle-calculating logic is the same as in our JavaScript Shape Tracker, so we won't go over it in detail now. The main difference in the logic is the indentation with each curly bracket and ",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"else if"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"else")," statement on new lines."),(0,i.kt)("p",null,"It's time to test out our console app. Try inputting different values to the constructor to test out all of the possible results from the ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckType()")," method."),(0,i.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,i.kt)("p",null,"Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/prework-shape-tracker-csharp-net6/tree/2_basic_triangle_class"},(0,i.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for Shape Tracker: ",(0,i.kt)("inlineCode",{parentName:"a"},"2_basic_triangle_class")))))}h.isMDXComponent=!0}}]);