"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[5267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,u=d["".concat(l,".").concat(m)]||d[m]||h[m]||r;return n?a.createElement(u,s(s({ref:t},p),{},{components:n})):a.createElement(u,s({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"Interfaces: Another Tool for Abstraction and Inheritance",id:"interfaces_another_tool_for_abstraction_and_inheritance",slug:"interfaces_another_tool_for_abstraction_and_inheritance",hide_table_of_contents:!0,sidebar_position:3,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/7_test-driven-development-with-c-part-2/2c_interfaces.md"},s=void 0,o={unversionedId:"c_and_net_part_time_evening/test-driven-development-with-c-part-2/interfaces_another_tool_for_abstraction_and_inheritance",id:"c_and_net_part_time_evening/test-driven-development-with-c-part-2/interfaces_another_tool_for_abstraction_and_inheritance",title:"Interfaces: Another Tool for Abstraction and Inheritance",description:"In this lesson, we'll cover another important tool in C# and other strongly-typed languages: interfaces. We can think of an interface as a blueprint of things that must be included within any class that utilizes the interface. The interface doesn't actually care how these things are implemented \u2014 it only cares that they're included in the class.",source:"@site/docs/c_and_net_part_time_evening/7_test-driven-development-with-c-part-2/2c_interfaces.md",sourceDirName:"c_and_net_part_time_evening/7_test-driven-development-with-c-part-2",slug:"/c_and_net_part_time_evening/test-driven-development-with-c-part-2/interfaces_another_tool_for_abstraction_and_inheritance",permalink:"/lhtp/c_and_net_part_time_evening/test-driven-development-with-c-part-2/interfaces_another_tool_for_abstraction_and_inheritance",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Interfaces: Another Tool for Abstraction and Inheritance",id:"interfaces_another_tool_for_abstraction_and_inheritance",slug:"interfaces_another_tool_for_abstraction_and_inheritance",hide_table_of_contents:!0,sidebar_position:3,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/7_test-driven-development-with-c-part-2/2c_interfaces.md"},sidebar:"c_and_net_part_time_evening",previous:{title:"APIE: Inheritance, Abstract Classes, and Virtual Class Members",permalink:"/lhtp/c_and_net_part_time_evening/test-driven-development-with-c-part-2/apie_inheritance_abstract_classes_and_virtual_class_members"},next:{title:"APIE: Polymorphism",permalink:"/lhtp/c_and_net_part_time_evening/test-driven-development-with-c-part-2/apie_polymorphism"}},l={},c=[{value:"Interfaces",id:"interfaces",level:2},{value:"Implementing an Interface and Naming Conventions",id:"implementing-an-interface-and-naming-conventions",level:3},{value:"Inheriting from Multiple Interfaces and a Single Class",id:"inheriting-from-multiple-interfaces-and-a-single-class",level:3},{value:"Difference Between Abstract Classes and Interfaces",id:"difference-between-abstract-classes-and-interfaces",level:2},{value:"When to Use an Interface",id:"when-to-use-an-interface",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this lesson, we'll cover another important tool in C# and other strongly-typed languages: ",(0,i.kt)("strong",{parentName:"p"},"interfaces"),". We can think of an interface as a blueprint of things that must be included within any class that utilizes the interface. The interface doesn't actually care how these things are implemented \u2014 it only cares that they're included in the class."),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"This is a tricky concept so we'll start with an example. "),(0,i.kt)("p",null,"Let's say we have an ",(0,i.kt)("inlineCode",{parentName:"p"},"IMotor")," interface that includes an ",(0,i.kt)("inlineCode",{parentName:"p"},"OnSwitch()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"interface IMotor\n{\n  string OnSwitch();\n}\n")),(0,i.kt)("p",null,"We could have a set of classes that inherit the ",(0,i.kt)("inlineCode",{parentName:"p"},"IMotor")," interface such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Radio"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Television"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"CoffeeMachine"),". Now that they inherit from ",(0,i.kt)("inlineCode",{parentName:"p"},"IMotor"),", each of these classes must have an ",(0,i.kt)("inlineCode",{parentName:"p"},"OnSwitch()")," method. However, something different will happen in the ",(0,i.kt)("inlineCode",{parentName:"p"},"OnSwitch()")," method of each of these classes: an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"Radio")," will make music, an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"Television")," will turn on the screen, and an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"CoffeeMachine")," will start heating water. The ",(0,i.kt)("inlineCode",{parentName:"p"},"IMotor")," interface doesn't care about any of that stuff as long as the ",(0,i.kt)("inlineCode",{parentName:"p"},"OnSwitch")," method is included in the class."),(0,i.kt)("p",null,"Now let's look at a more concrete example. We've already been working with MSTest's ",(0,i.kt)("inlineCode",{parentName:"p"},"IDisposable")," interface. We can add the ",(0,i.kt)("inlineCode",{parentName:"p"},"IDisposable")," interface to a test class like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public class TriangleTests : IDisposable\n")),(0,i.kt)("p",null,"This is the syntax for extending a class with an interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public class ClassToBeExtended : InterfaceToInclude\n")),(0,i.kt)("p",null,"After the class, we use a ",(0,i.kt)("inlineCode",{parentName:"p"},":")," followed by the name of the interface that will extend the class."),(0,i.kt)("p",null,"Once ",(0,i.kt)("inlineCode",{parentName:"p"},"IDisposable")," is added, we have access to a new method called ",(0,i.kt)("inlineCode",{parentName:"p"},"Dispose()"),". This is because the ",(0,i.kt)("inlineCode",{parentName:"p"},"IDisposable")," interface ",(0,i.kt)("strong",{parentName:"p"},"extends")," the functionality of the ",(0,i.kt)("inlineCode",{parentName:"p"},"TriangleTests")," class by adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dispose()")," method to it. In other words, it gives our ",(0,i.kt)("inlineCode",{parentName:"p"},"TriangleTests")," class more functionality."),(0,i.kt)("p",null,"However, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dispose()")," method doesn't actually do much when we add it to our code. The method runs after each test, but we have to tell it what code to execute. For instance, we could add a ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle.ClearAll()")," method to reset the value of our static variables. However, we could add any code we want to here. This is similar to the ",(0,i.kt)("inlineCode",{parentName:"p"},"OnSwitch()")," method our ",(0,i.kt)("inlineCode",{parentName:"p"},"IMotor")," interface provides."),(0,i.kt)("p",null,"What happens if we extend our ",(0,i.kt)("inlineCode",{parentName:"p"},"TriangleTests")," class with ",(0,i.kt)("inlineCode",{parentName:"p"},"IDisposable")," but don't actually add a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dispose()")," method? We'll get an error when we run our tests:"),(0,i.kt)("code",{style:{color:"red"}},"'TriangleTests' does not implement interface member 'IDisposable.Dispose()'"),(0,i.kt)("p",null,"Once we extend our class with the ",(0,i.kt)("inlineCode",{parentName:"p"},"IDisposable")," interface, we ",(0,i.kt)("em",{parentName:"p"},"must")," add a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dispose()")," method."),(0,i.kt)("h3",{id:"implementing-an-interface-and-naming-conventions"},"Implementing an Interface and Naming Conventions"),(0,i.kt)("p",null,"We can implement our own interfaces like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"interface IMotor\n{\n  string OnSwitch();\n}\n")),(0,i.kt)("p",null,"By convention, interface names begin with a capital ",(0,i.kt)("inlineCode",{parentName:"p"},"I"),". "),(0,i.kt)("p",null,"Notice that we only define the name and return value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"OnSwitch()")," method, but nothing else. That's exactly what interfaces are meant to do: define the required functionality (to turn on), but not the exact implementation of the functionality (what's required to turn on the machine, or what happens as a result)."),(0,i.kt)("p",null,"Finally, remember that interfaces can only include methods or properties, but not fields or ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/constants"},"constants"),". In this way, interfaces are always focused on describing behavior, but again, not the exact implementation of the behavior."),(0,i.kt)("p",null,"We use a ",(0,i.kt)("inlineCode",{parentName:"p"},":")," to extend a class with the ",(0,i.kt)("inlineCode",{parentName:"p"},"IMotor")," interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'public class CoffeeMachine : IMotor\n{\n  public string OnSwitch()\n  {\n    return "Bubble bubble hiss.";\n  }\n}\n')),(0,i.kt)("p",null,"As we can see in the code snippet above, when the ",(0,i.kt)("inlineCode",{parentName:"p"},"CoffeeMachine")," class implements the ",(0,i.kt)("inlineCode",{parentName:"p"},"OnSwitch()")," method it provides all of the implementation details: an access modifier and a body for the method."),(0,i.kt)("p",null,"Remember that any class that inherits from/extends the interface must implement all of the methods (or properties) inside of the interface. Because of this, interfaces are often described as contracts that the derived class must fulfill. "),(0,i.kt)("h3",{id:"inheriting-from-multiple-interfaces-and-a-single-class"},"Inheriting from Multiple Interfaces and a Single Class"),(0,i.kt)("p",null,"A class can inherit from multiple interfaces and a single class. Here's the syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Radio : BaseClass, IMotor, IPlayMusic\n")),(0,i.kt)("p",null,"Notice that the base class ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseClass")," is listed first, before the two interfaces."),(0,i.kt)("h2",{id:"difference-between-abstract-classes-and-interfaces"},"Difference Between Abstract Classes and Interfaces"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"It may seem like abstract classes and interfaces are very similar. For example, neither abstract classes nor interfaces can be instantiated. Instead, other classes must extend or inherit their behavior. However, there are a number of key differences between the two. Here are a few:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A child class can only inherit from one parent class, whether or not it's a regular class or abstract class. However, a class can inherit multiple interfaces."),(0,i.kt)("li",{parentName:"ul"},"Abstract classes can have any other class member including fields, while interfaces can only have properties and methods."),(0,i.kt)("li",{parentName:"ul"},"It's optional to override abstract members of abstract classes, and to make use of the members of an abstract class. With interfaces, we must implement all methods or properties defined in the interface. ")),(0,i.kt)("p",null,"However, the biggest difference between abstract classes and interfaces are in how they are used. An abstract class provides ",(0,i.kt)("strong",{parentName:"p"},"core")," functionality to its child classes, just like the ",(0,i.kt)("inlineCode",{parentName:"p"},"Feline")," class contains universal core elements about all felines."),(0,i.kt)("p",null,"On the other hand, an interface provides ",(0,i.kt)("strong",{parentName:"p"},"peripheral")," functionality to the classes it extends. We can also think of interfaces as providing feature-focused functionality. As we saw with the ",(0,i.kt)("inlineCode",{parentName:"p"},"IMotor")," interface, it is focused on the functionality of turning a machine on (or off), which is just one feature of many that any machine should have. "),(0,i.kt)("p",null,"This difference between ",(0,i.kt)("strong",{parentName:"p"},"core")," and ",(0,i.kt)("strong",{parentName:"p"},"peripheral")," functionality is in part philosophical and up for debate. For example, we wouldn't want instances of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Robot")," class to inherit ",(0,i.kt)("inlineCode",{parentName:"p"},"Walk()")," functionality from an abstract ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal")," class because robots aren't animals. However, a ",(0,i.kt)("inlineCode",{parentName:"p"},"Robot")," could inherit ",(0,i.kt)("inlineCode",{parentName:"p"},"Walk()")," functionality from an ",(0,i.kt)("inlineCode",{parentName:"p"},"IMobility")," interface. In this case, our application would be structured so that any kind of object with mobility includes a ",(0,i.kt)("inlineCode",{parentName:"p"},"Walk()")," method whether they are ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Robot")," objects. We could easily argue that ",(0,i.kt)("inlineCode",{parentName:"p"},"Walk()")," should belong within either an abstract parent class or an interface. In fact, which option we choose will largely depend on the needs of our application."),(0,i.kt)("p",null,"There are other differences between abstract classes and interfaces, but they are beyond the scope of this lesson. To learn more about interfaces, ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/interfaces"},"visit the MS Docs on Interfaces.")," To learn more about abstract classes, check the MS Docs on ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/abstract-and-sealed-classes-and-class-members"},"Abstract and Sealed Classes and Class Members.")),(0,i.kt)("h2",{id:"when-to-use-an-interface"},"When to Use an Interface"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Whether you choose to use an abstract class or an interface, both of these are making use of the OOP principles of abstraction and inheritance. Implementing inheritance is no big deal \u2014 it's a mechanism in OOP. However, abstraction is both more conceptual and all about design decisions. We should always carefully consider if an abstraction would improve our code or not. Here's a few use cases for interfaces:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We should consider using an interface when there's functionality we want to define that many unrelated classes may need to use. Here, the interface would define the behavior, and any class that extends the interface would define the specific implementation of the behavior."),(0,i.kt)("li",{parentName:"ul"},"We should consider using an interface when we want to separate class requirements from the exact implementation of those requirements. The interface would describe the requirements, and any class that extends the interface would need to include those requirements, but in varying ways. When we do this, we can more easily substitute one class with another class when they both extend the same interface.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"You are not required to use an interface for this section's independent project.")," However, you are encouraged to experiment with them and add them to projects if possible."))}h.isMDXComponent=!0}}]);