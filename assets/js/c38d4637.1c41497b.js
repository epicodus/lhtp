"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[69047],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=i,u=m["".concat(o,".").concat(h)]||m[h]||d[h]||l;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},24419:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const l={title:"APIE: Inheritance, Abstract Classes, and Virtual Class Members",id:"apie-inheritance-abstract-classes-and-virtual-class-members",slug:"apie-inheritance-abstract-classes-and-virtual-class-members",hide_table_of_contents:!0,sidebar_position:2,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/2b_oop_inheritance_and_abstract_classes.md"},r=void 0,s={unversionedId:"c-and-net-part-time-evening/test-driven-development-with-c-part-2/apie-inheritance-abstract-classes-and-virtual-class-members",id:"c-and-net-part-time-evening/test-driven-development-with-c-part-2/apie-inheritance-abstract-classes-and-virtual-class-members",title:"APIE: Inheritance, Abstract Classes, and Virtual Class Members",description:"In this lesson, we're going to revisit the four principles of Object-Oriented Programming (OOP), often referred to as APIE:",source:"@site/docs/c-and-net-part-time-evening/7_test-driven-development-with-c-part-2/2b-oop-inheritance-and-abstract-classes.md",sourceDirName:"c-and-net-part-time-evening/7_test-driven-development-with-c-part-2",slug:"/c-and-net-part-time-evening/test-driven-development-with-c-part-2/apie-inheritance-abstract-classes-and-virtual-class-members",permalink:"/c-and-net-part-time-evening/test-driven-development-with-c-part-2/apie-inheritance-abstract-classes-and-virtual-class-members",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"APIE: Inheritance, Abstract Classes, and Virtual Class Members",id:"apie-inheritance-abstract-classes-and-virtual-class-members",slug:"apie-inheritance-abstract-classes-and-virtual-class-members",hide_table_of_contents:!0,sidebar_position:2,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/2b_oop_inheritance_and_abstract_classes.md"},sidebar:"c-and-net-part-time-evening",previous:{title:"Workplace Accommodations",permalink:"/c-and-net-part-time-evening/test-driven-development-with-c-part-2/workplace-accommodations"},next:{title:"Interfaces: Another Tool for Abstraction and Inheritance",permalink:"/c-and-net-part-time-evening/test-driven-development-with-c-part-2/interfaces-another-tool-for-abstraction-and-inheritance"}},o={},c=[{value:"Inheritance",id:"inheritance",level:2},{value:"Implementing Inheritance",id:"implementing-inheritance",level:3},{value:"Another Example of Inheritance",id:"another-example-of-inheritance",level:3},{value:"Abstract Classes",id:"abstract-classes",level:2},{value:"Implementing an Abstract Class",id:"implementing-an-abstract-class",level:3},{value:"Abstract Members of an Abstract Class",id:"abstract-members-of-an-abstract-class",level:3},{value:"Non-Abstract Members within an Abstract Class",id:"non-abstract-members-within-an-abstract-class",level:3},{value:"Another Tool for Inheritance: Virtual Members",id:"another-tool-for-inheritance-virtual-members",level:2},{value:"When To Use Inheritance",id:"when-to-use-inheritance",level:2},{value:"When To Use <code>abstract</code>",id:"when-to-use-abstract",level:3},{value:"When To Use <code>virtual</code>",id:"when-to-use-virtual",level:3}],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this lesson, we're going to revisit the four principles of Object-Oriented Programming (OOP), often referred to as APIE: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"A"),"bstraction"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"P"),"olymorphism"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"I"),"nheritance"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"E"),"ncapsulation")),(0,i.kt)("p",null,"So far, we're familiar with abstraction and encapsulation. In this lesson, we'll learn about ",(0,i.kt)("strong",{parentName:"p"},"inheritance")," through which one class shares functionality with another class. In the process, we'll learn about tools we can use to determine how two objects should share functionality between each other:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We'll create and use an ",(0,i.kt)("strong",{parentName:"li"},"abstract class"),"."),(0,i.kt)("li",{parentName:"ul"},"We'll learn how to apply new C# modifiers called ",(0,i.kt)("inlineCode",{parentName:"li"},"abstract"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"virtual"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"override"),". "),(0,i.kt)("li",{parentName:"ul"},"We'll learn about new terminology like ",(0,i.kt)("strong",{parentName:"li"},"base class")," and ",(0,i.kt)("strong",{parentName:"li"},"derived class"),".")),(0,i.kt)("p",null,"We're already familiar with the concept of inheritance from JavaScript, which is helpful! However, take note that ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"},"JavaScript uses prototype-based inheritance"),", while OOP languages like C#, C++, and Java use class-based inheritance."),(0,i.kt)("h2",{id:"inheritance"},"Inheritance"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Inheritance")," is simply the process of passing on functionality from a parent class to a child class. C# has ",(0,i.kt)("strong",{parentName:"p"},"single inheritance"),", which means that a class can only inherit from a single other class. In turn, that class can inherit from yet another class. A subclass, or child class, ultimately inherits the functionality of each of those parent classes. For example, we could have a chain of inheritance that look like this:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Animal -> Mammal -> Feline -> Cat")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Cat")," can only inherit from one class \u2014 ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline")," \u2014 but it will ultimately inherit all the functionality of each of the classes above, including ",(0,i.kt)("inlineCode",{parentName:"p"},"Mammal")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal"),", because they have been passed down to ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline"),"."),(0,i.kt)("p",null,"We've used the terms ",(0,i.kt)("strong",{parentName:"p"},"parent class"),", ",(0,i.kt)("strong",{parentName:"p"},"child class"),", and ",(0,i.kt)("strong",{parentName:"p"},"inherits"),", but there is additional terminology to learn that's commonly used when describing inheritance. If we look at the inheritance between the classes ",(0,i.kt)("inlineCode",{parentName:"p"},"Mammal")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Feline")," ",(0,i.kt)("strong",{parentName:"li"},"inherits")," from the ",(0,i.kt)("inlineCode",{parentName:"li"},"Mammal")," class. We also can say that ",(0,i.kt)("inlineCode",{parentName:"li"},"Feline")," ",(0,i.kt)("strong",{parentName:"li"},"extends")," the functionality in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Mammal")," class. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Mammal")," is the ",(0,i.kt)("strong",{parentName:"li"},"parent")," or ",(0,i.kt)("strong",{parentName:"li"},"base")," class."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Feline")," is the ",(0,i.kt)("strong",{parentName:"li"},"child")," or ",(0,i.kt)("strong",{parentName:"li"},"derived")," class that is inheriting functionality from the ",(0,i.kt)("inlineCode",{parentName:"li"},"Mammal")," class.")),(0,i.kt)("p",null,"As another example, we can use this same language to describe the inheritance between ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Cat"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Cat")," ",(0,i.kt)("strong",{parentName:"li"},"inherits")," from the ",(0,i.kt)("inlineCode",{parentName:"li"},"Feline")," class. We also can say that ",(0,i.kt)("inlineCode",{parentName:"li"},"Cat")," ",(0,i.kt)("strong",{parentName:"li"},"extends")," the functionality in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Feline")," class. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Feline")," is the ",(0,i.kt)("strong",{parentName:"li"},"parent")," or ",(0,i.kt)("strong",{parentName:"li"},"base")," class."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Cat")," is the ",(0,i.kt)("strong",{parentName:"li"},"child")," or ",(0,i.kt)("strong",{parentName:"li"},"derived")," class that is inheriting functionality from the ",(0,i.kt)("inlineCode",{parentName:"li"},"Feline")," class.")),(0,i.kt)("p",null,"However, we couldn't say that ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal")," is the base class for the derived class ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline"),". That's because classes can only inherit from one other class: in our example chain of inheritance, ",(0,i.kt)("inlineCode",{parentName:"p"},"Cat")," inherits from ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline")," inherits from ",(0,i.kt)("inlineCode",{parentName:"p"},"Mammal"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Mammal")," inherits from ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal"),"."),(0,i.kt)("h3",{id:"implementing-inheritance"},"Implementing Inheritance"),(0,i.kt)("p",null,"To implement inheritance, we simply need to define a base class and a derived class, and within the derived class, use the correct syntax to extend the derived class with the functionality of the base class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public class DerivedClassToBeExtended : BaseClass\n")),(0,i.kt)("p",null,"Let's make this concrete with an example. Here's our base class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace AnimalGeneaology.Models\n{\n  public class Feline\n  {\n    // Auto-Implemented Properties\n    public bool DoesPurr { get; set; }\n    public bool DoesRoar { get; set; }\n  }\n}\n")),(0,i.kt)("p",null,"And here's a derived class that extends the functionality of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline")," class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace AnimalGeneaology.Models\n{\n  public class Cat : Feline\n  {\n    public string Breed { get; set; } = "";\n\n    public Cat(string breed)\n    {\n      DoesPurr = true;\n      DoesRoar = false;\n      Breed = breed;\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Or, in other words, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Cat")," class inherits functionality from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline")," class. That's why we can access the ",(0,i.kt)("inlineCode",{parentName:"p"},"DoesPurr")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"DoesRoar")," auto-implemented properties within the ",(0,i.kt)("inlineCode",{parentName:"p"},"Cat()")," constructor function, even though they are not explicitly defined within the ",(0,i.kt)("inlineCode",{parentName:"p"},"Cat")," class. Instead, these auto-implemented properties are defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline")," class, which the ",(0,i.kt)("inlineCode",{parentName:"p"},"Cat")," class inherits from."),(0,i.kt)("p",null,"Finally, take note that there's no limit to how many classes can derive from a base class. For example, we could have a whole slew of classes that inherit from ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"public class Cougar : Feline")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"public class Tiger : Feline")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"public class Lynx : Feline")),(0,i.kt)("li",{parentName:"ul"},"etc.")),(0,i.kt)("p",null,"However, each of the derived classes (",(0,i.kt)("inlineCode",{parentName:"p"},"Cougar"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Tiger"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Lynx"),") can only inherit from one base class (",(0,i.kt)("inlineCode",{parentName:"p"},"Feline"),")."),(0,i.kt)("h3",{id:"another-example-of-inheritance"},"Another Example of Inheritance"),(0,i.kt)("p",null,"Let's look at just one more example of inheritance, this time with built-in C# classes. Do you remember the ",(0,i.kt)("inlineCode",{parentName:"p"},"GetType()")," method that we used to check the namespace and class name of different C# objects? For example, when we check the type of a string in the ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet-script")," REPL, we'll get ",(0,i.kt)("inlineCode",{parentName:"p"},"[System.String]")," returned to us:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'> string myFavFlower = "rose";\n> myFavFlower.GetType()\n[System.String]\n')),(0,i.kt)("p",null,"We can call ",(0,i.kt)("inlineCode",{parentName:"p"},"GetType()")," on any object out there. Even the ",(0,i.kt)("inlineCode",{parentName:"p"},"Cat")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline")," classes we created in the last example."),(0,i.kt)("p",null,"Well, all objects have access to ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.object.gettype?view=net-6.0"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"GetType()")," method")," thanks to inheritance. The ",(0,i.kt)("inlineCode",{parentName:"p"},"GetType()")," method is actually defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.Object")," class (the ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")," class that lives in the ",(0,i.kt)("inlineCode",{parentName:"p"},"System")," namespace), and in C#, all objects inherit from ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-6.0"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"Object")," class")," and automatically have access to its methods. Even our custom classes implicitly inherit from ",(0,i.kt)("inlineCode",{parentName:"p"},"System.Object"),". "),(0,i.kt)("p",null,"This is a great example of how inheritance can be used to share functionality across classes. In this case, the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.Object")," class contains basic functionality that all objects should have, like type checking, which is why all C# objects inherit from it."),(0,i.kt)("h2",{id:"abstract-classes"},"Abstract Classes"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"One way to build inheritance into an application is through an abstract class. An ",(0,i.kt)("strong",{parentName:"p"},"abstract class")," is simply a class that is never instantiated. "),(0,i.kt)("p",null,"Let's reconsider our earlier example of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline")," class, from which many child classes \u2014 ",(0,i.kt)("inlineCode",{parentName:"p"},"Cat"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Tiger"),", etc. \u2014 are derived from. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline")," class exists in order to define elements that are universal to all felines, and all of the derived classes contain more specific data about specific types of felines, like house cats. So the question is, will we ever need to create an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline")," class? I don't think so! We want to make ",(0,i.kt)("inlineCode",{parentName:"p"},"Cat")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Cougar")," objects, but not ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline")," objects. Because of this, it would be better to make the ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline")," class abstract that can never be instantiated."),(0,i.kt)("p",null,"In summary, an abstract class exists simply for the purpose of organizing universal elements and functionality and passing that on to other classes. Again, there is no limit to the number of classes that can inherit from a class. ",(0,i.kt)("inlineCode",{parentName:"p"},"Cat")," can only have one parent class but ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline")," can have many child classes."),(0,i.kt)("h3",{id:"implementing-an-abstract-class"},"Implementing an Abstract Class"),(0,i.kt)("p",null,"It's easy to create an abstract class. Let's update our ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline")," class to be abstract:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace AnimalGeneaology.Models\n{\n  public abstract class Feline\n  {\n    // Auto-Implemented Properties\n    public bool DoesPurr { get; set; }\n    public bool DoesRoar { get; set; }\n  }\n}\n")),(0,i.kt)("p",null,"All we need is ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/abstract"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"abstract")," modifier"),". Once we do this, we can no longer instantiate a ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline")," object. If we tried to do something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"Feline fel = new Feline();\n")),(0,i.kt)("p",null,"We would receive the following error:"),(0,i.kt)("code",{style:{color:"red"}},"error CS0144: Cannot create an instance of the abstract type or interface 'Feline'"),(0,i.kt)("h3",{id:"abstract-members-of-an-abstract-class"},"Abstract Members of an Abstract Class"),(0,i.kt)("p",null,"We can also declare members of an abstract class as ",(0,i.kt)("inlineCode",{parentName:"p"},"abstract"),". That includes properties and methods, but not fields. For example, let's declare an abstract instance method called ",(0,i.kt)("inlineCode",{parentName:"p"},"Vocalize()")," within the ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline")," class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace AnimalGeneaology.Models\n{\n  public abstract class Feline\n  {\n    public bool DoesPurr { get; set; }\n    public bool DoesRoar { get; set; }\n\n    // An abstract method\n    public abstract string Vocalize(); \n  }\n}\n")),(0,i.kt)("p",null,"Note that we declare the method is ",(0,i.kt)("inlineCode",{parentName:"p"},"abstract"),". When a class member is declared as abstract, it cannot include any code. Instead, when we include ",(0,i.kt)("strong",{parentName:"p"},"abstract members")," within an abstract class, we're defining functionality that child classes should have (like ",(0,i.kt)("inlineCode",{parentName:"p"},"Vocalize()"),"), but not the exact implementation of this functionality, as in, whether ",(0,i.kt)("inlineCode",{parentName:"p"},"Vocalize()")," will return ",(0,i.kt)("inlineCode",{parentName:"p"},'"meow"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"roar"'),", or ",(0,i.kt)("inlineCode",{parentName:"p"},'"growl"'),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"When an abstract base class has abstract members, derived classes ",(0,i.kt)("em",{parentName:"strong"},"must")," override the abstract member using the ",(0,i.kt)("inlineCode",{parentName:"strong"},"override")," modifier.")," For instance, we'd need to include a ",(0,i.kt)("inlineCode",{parentName:"p"},"Vocalize()")," method in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Cat")," class that overrides the ",(0,i.kt)("inlineCode",{parentName:"p"},"Vocalize()")," method in the parent ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline")," class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace AnimalGeneaology.Models\n{\n  public class Cat : Feline\n  {\n    public string Breed { get; set; } = "";\n\n    public Cat(string breed)\n    {\n      DoesPurr = true;\n      DoesRoar = false;\n      Breed = breed;\n    }\n\n    public override string Vocalize()\n    {\n      return "meow!";\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Want to try this out? Here's what we can do with our ",(0,i.kt)("inlineCode",{parentName:"p"},"Cat")," class within the ",(0,i.kt)("inlineCode",{parentName:"p"},"Main()")," method:"),(0,i.kt)("div",{class:"filename"},"Program.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing AnimalGeneaology.Models;\n\nnamespace AnimalGeneaology\n{\n  class Program\n  {\n    static void Main()\n    {\n      Cat myCat = new Cat("tabby");\n      Console.WriteLine(myCat.GetType());\n      Console.WriteLine(myCat.Vocalize());\n    }\n  }\n}\n')),(0,i.kt)("p",null,"The above code will return:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"AnimalGeneaology.Models.Cat\nmeow!\n")),(0,i.kt)("h3",{id:"non-abstract-members-within-an-abstract-class"},"Non-Abstract Members within an Abstract Class"),(0,i.kt)("p",null,"We can also write regular, non-abstract methods in an abstract class. These methods should include code within the method body. For instance, We could include ",(0,i.kt)("inlineCode",{parentName:"p"},"Walk()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Hunt()")," methods that looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace AnimalGeneaology.Models\n{\n  public abstract class Feline\n  {\n    public bool DoesPurr { get; set; }\n    public bool DoesRoar { get; set; }\n\n    // An abstract method\n    public abstract string Vocalize(); \n\n    // Non-abstract methods:\n    public string Hunt()\n    {\n      return "The feline hunts.";\n    }\n\n    public string Walk()\n    {\n      return "The feline walks.";\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Because this method isn't abstract, we can optionally add code to it."),(0,i.kt)("p",null,"We can then update ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs")," to call on these methods:"),(0,i.kt)("div",{class:"filename"},"Program.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing AnimalGeneaology.Models;\n\nnamespace AnimalGeneaology\n{\n  class Program\n  {\n    static void Main()\n    {\n      Cat myCat = new Cat("tabby");\n      Console.WriteLine(myCat.GetType());\n      Console.WriteLine(myCat.Vocalize());\n      Console.WriteLine(myCat.Hunt());\n      Console.WriteLine(myCat.Walk());\n    }\n  }\n}\n')),(0,i.kt)("p",null,"And we'll get this returned to us:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"AnimalGeneaology.Models.Cat\nmeow!\nThe feline walks.\nThe feline hunts.\n")),(0,i.kt)("h2",{id:"another-tool-for-inheritance-virtual-members"},"Another Tool for Inheritance: Virtual Members"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We can use ",(0,i.kt)("inlineCode",{parentName:"p"},"virtual")," class members as another tool to control how functionality is shared between two classes. When we declare a class member as ",(0,i.kt)("inlineCode",{parentName:"p"},"virtual")," in a base class, it allows all derived classes to optionally override it and create a new definition for that member. Unlike the ",(0,i.kt)("inlineCode",{parentName:"p"},"abstract")," modifier, we can only apply ",(0,i.kt)("inlineCode",{parentName:"p"},"virtual")," to class members and not to classes themselves. Similar to the ",(0,i.kt)("inlineCode",{parentName:"p"},"abstract")," modifier, we can make properties and methods virtual, but not fields."),(0,i.kt)("p",null,"Let's look at an example. We'll update the ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline.Walk()")," method to be virtual:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace AnimalGeneaology.Models\n{\n  public abstract class Feline\n  {\n    public bool DoesPurr { get; set; }\n    public bool DoesRoar { get; set; }\n\n    // An abstract method\n    public abstract string Vocalize(); \n\n    public string Hunt()\n    {\n      return "The feline hunts.";\n    }\n\n    // This is now a virtual method!\n    public virtual string Walk()\n    {\n      return "The feline walks.";\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Now, we can optionally override the ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline.Walk()")," method by creating a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Cat.Walk()")," method with a new definition. Let's see how that works:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace AnimalGeneaology.Models\n{\n  public class Cat : Feline\n  {\n    public string Breed { get; set; } = "";\n\n    public Cat(string breed)\n    {\n      DoesPurr = true;\n      DoesRoar = false;\n      Breed = breed;\n    }\n\n    public override string Vocalize()\n    {\n      return "meow!";\n    }\n\n    public override string Walk()\n    {\n      return "The cat walks.";\n    }\n  }\n}\n')),(0,i.kt)("p",null,"To override a base class (",(0,i.kt)("inlineCode",{parentName:"p"},"Feline"),") method within a derived class (",(0,i.kt)("inlineCode",{parentName:"p"},"Cat"),"), we need to use the same method signature (",(0,i.kt)("inlineCode",{parentName:"p"},"public string Walk()"),") and specifically include the ",(0,i.kt)("inlineCode",{parentName:"p"},"override")," modifier. "),(0,i.kt)("p",null,"Without making any changes to the code in ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs"),", if we re-run the program, we'll get this returned to us in the terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"AnimalGeneaology.Models.Cat\nmeow!\nThe cat walks.\nThe feline hunts.\n")),(0,i.kt)("p",null,'As we can see, the method in the child class replaces the method in the parent class: we get "The cat walks." instead of "The feline walks."'),(0,i.kt)("h2",{id:"when-to-use-inheritance"},"When To Use Inheritance"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"You are not required to use inheritance or an abstract class for this section's independent project.")," However, you are encouraged to experiment with them and add them to projects if possible."),(0,i.kt)("p",null,"Even though inheritance seems to only be about sharing functionality between a parent class and one or more child classes, inheritance is also about creating abstractions. In our ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"Cat")," example, ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline")," is an abstraction that represents universal elements and functionality that all felines have in common, while ",(0,i.kt)("inlineCode",{parentName:"p"},"Cat")," is the more specific implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline"),". "),(0,i.kt)("p",null,"However, creating this sort of abstraction won't make sense for every application. For example, if we're creating an app for a company that takes care of pets while their owners are away, it definitely makes sense to have a ",(0,i.kt)("inlineCode",{parentName:"p"},"Cat")," class, but we're not going to have other felines like tigers and cougars, since people don't (usually) have tigers and cougars as pets. In this context, it doesn't make sense to create an abstract ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline")," class that we'll then have our ",(0,i.kt)("inlineCode",{parentName:"p"},"Cat")," class be derived from. "),(0,i.kt)("p",null,"On the other hand, if we're creating an application for a zoo or a zoologist, we'll be dealing with a lot of different types of felines, and creating an abstract ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline")," class would be beneficial: it would group universal elements and functionality into one class that other classes can inherit from. In other words, the abstract parent class is focused on defining the general elements of all derived classes, whereas each derived class can focus on the specific implementation. "),(0,i.kt)("h3",{id:"when-to-use-abstract"},"When To Use ",(0,i.kt)("inlineCode",{parentName:"h3"},"abstract")),(0,i.kt)("p",null,"When a class or class member is marked as ",(0,i.kt)("inlineCode",{parentName:"p"},"abstract"),", it means the exact implementation (functionality) still needs to be defined."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When you make a class ",(0,i.kt)("inlineCode",{parentName:"li"},"abstract"),", it can no longer be instantiated; instead, we can use it as a base class and have derived classes inherit from it."),(0,i.kt)("li",{parentName:"ul"},"Abstract classes can optionally contain ",(0,i.kt)("inlineCode",{parentName:"li"},"abstract")," members (properties and methods, but not fields). Only abstract classes can contain abstract members."),(0,i.kt)("li",{parentName:"ul"},"When you make a class member ",(0,i.kt)("inlineCode",{parentName:"li"},"abstract"),", you are declaring the name and type of the class member, but not the exact implementation of it."),(0,i.kt)("li",{parentName:"ul"},"Derived classes ",(0,i.kt)("strong",{parentName:"li"},"must")," override all ",(0,i.kt)("inlineCode",{parentName:"li"},"abstract")," class members using the ",(0,i.kt)("inlineCode",{parentName:"li"},"override")," modifier. This is when the exact implementation of an inherited ",(0,i.kt)("inlineCode",{parentName:"li"},"abstract")," class member is being defined. ")),(0,i.kt)("h3",{id:"when-to-use-virtual"},"When To Use ",(0,i.kt)("inlineCode",{parentName:"h3"},"virtual")),(0,i.kt)("p",null,"When a class member is marked as ",(0,i.kt)("inlineCode",{parentName:"p"},"virtual"),", it means it can optionally be overwritten within a derived class. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Both regular and ",(0,i.kt)("inlineCode",{parentName:"li"},"abstract")," classes can contain ",(0,i.kt)("inlineCode",{parentName:"li"},"virtual")," members (properties and methods, but not fields)."),(0,i.kt)("li",{parentName:"ul"},"When a class member is marked as ",(0,i.kt)("inlineCode",{parentName:"li"},"virtual"),", you should define all of it. This ends up being the basic implementation that all derived classes will use (unless they override it). This is unlike with ",(0,i.kt)("inlineCode",{parentName:"li"},"abstract")," members, where only the name and type is declared."),(0,i.kt)("li",{parentName:"ul"},"When you overwrite the ",(0,i.kt)("inlineCode",{parentName:"li"},"virtual")," member in a derived class, you must use the ",(0,i.kt)("inlineCode",{parentName:"li"},"override")," modifier. ")),(0,i.kt)("p",null,"Up next, we'll learn about interfaces, another tool that allows us to implement inheritance and helps us achieve abstraction in our C# code."))}d.isMDXComponent=!0}}]);