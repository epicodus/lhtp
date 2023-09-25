"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[21424],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),h=r,u=c["".concat(p,".").concat(h)]||c[h]||d[h]||i;return n?a.createElement(u,l(l({ref:t},m),{},{components:n})):a.createElement(u,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},18344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"APIE: Polymorphism",id:"apie_polymorphism",slug:"apie_polymorphism",hide_table_of_contents:!0,sidebar_position:6,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/7_test-driven-development-with-c-part-2/2d_apie_polymorphism.md"},l=void 0,o={unversionedId:"c_and_net_part_time_evening/test-driven-development-with-c-part-2/apie_polymorphism",id:"c_and_net_part_time_evening/test-driven-development-with-c-part-2/apie_polymorphism",title:"APIE: Polymorphism",description:"We have one last principle of Object-Oriented Programming (OOP) to learn about",source:"@site/docs/c_and_net_part_time_evening/7_test-driven-development-with-c-part-2/2d_apie_polymorphism.md",sourceDirName:"c_and_net_part_time_evening/7_test-driven-development-with-c-part-2",slug:"/c_and_net_part_time_evening/test-driven-development-with-c-part-2/apie_polymorphism",permalink:"/lhtp/c_and_net_part_time_evening/test-driven-development-with-c-part-2/apie_polymorphism",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"APIE: Polymorphism",id:"apie_polymorphism",slug:"apie_polymorphism",hide_table_of_contents:!0,sidebar_position:6,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/7_test-driven-development-with-c-part-2/2d_apie_polymorphism.md"},sidebar:"c_and_net_part_time_evening",previous:{title:"Interfaces: Another Tool for Abstraction and Inheritance",permalink:"/lhtp/c_and_net_part_time_evening/test-driven-development-with-c-part-2/interfaces_another_tool_for_abstraction_and_inheritance"},next:{title:"More About Data Types: Value Types, Reference Types, Generic Types, and More",permalink:"/lhtp/c_and_net_part_time_evening/test-driven-development-with-c-part-2/more_about_data_types_value_types_reference_types_generic_types_and_more"}},p={},s=[{value:"Polymorphism",id:"polymorphism",level:2}],m={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We have one last principle of Object-Oriented Programming (OOP) to learn about: polymorphism! As a reminder, polymorphism is one of four principles of OOP that we can remember by the easy acronym ",(0,r.kt)("strong",{parentName:"p"},"APIE"),": "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"A"),"bstraction"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"P"),"olymorphism"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"I"),"nheritance"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"E"),"ncapsulation")),(0,r.kt)("p",null,'The word "polymorphism" comes from Greek and it means "many forms". In terms of programming, ',(0,r.kt)("strong",{parentName:"p"},"polymorphism")," happens when an object or method has multiple forms, but is identified by the same name."),(0,r.kt)("h2",{id:"polymorphism"},"Polymorphism"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Let's start with an example. What follows is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," class adapted from our Shape Tracker app. This ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," class has an overloaded constructor so that we can create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," object with a single value, or we can create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," object with three values, one for each side:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Triangle\n{\n  // Auto-Implemented Properties\n  public int Side1 { get; set; }\n  public int Side2 { get; set; }\n  private int Side3 { get; set; }\n\n  public Triangle(int length)\n  {\n    Side1 = length;\n    Side2 = length;\n    Side3 = length;\n  }\n\n  public Triangle(int length1, int length2, int length3)\n  {\n    Side1 = length1;\n    Side2 = length2;\n    Side3 = length3;\n  }\n}\n")),(0,r.kt)("p",null,"When we use an overloaded constructor, we're using polymorphism: we have two different ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle()")," methods, with just one name, but with two different behaviors. "),(0,r.kt)("p",null,"More specifically, this is called ",(0,r.kt)("strong",{parentName:"p"},"compile-time polymorphism"),", because the compiler will sort out which ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle()")," method to use. So, when we call the following ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"class Program\n{\n  static void Main()\n  {\n    Triangle tri = new Triangle(3);\n  }\n}\n")),(0,r.kt)("p",null,"The compiler will first search for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," class constructor methods, and then determine which is the correct version to use; if the compiler can't find one, it will throw an error. "),(0,r.kt)("p",null,"And that's as simple as it gets: polymorphism happens when an object or method has multiple forms and behaviors."),(0,r.kt)("p",null,"There's also ",(0,r.kt)("strong",{parentName:"p"},"run-time polymorphism")," in which the exact object type or method to run is determined when our program is running. Let's look at an example."),(0,r.kt)("p",null,"This next example will build on the previous example and involve inheritance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Shape\n{\n  public virtual int CalculateArea()\n  {\n    return 0;\n  }\n}\n\npublic class Triangle : Shape\n{\n  // Auto-Implemented Properties\n  public int Side1 { get; set; }\n  public int Side2 { get; set; }\n  private int Side3 { get; set; }\n\n  public Triangle(int length)\n  {\n    Side1 = length;\n    Side2 = length;\n    Side3 = length;\n  }\n\n  public Triangle(int length1, int length2, int length3)\n  {\n    Side1 = length1;\n    Side2 = length2;\n    Side3 = length3;\n  }\n\n  public override int CalculateArea()\n  {\n    return Side1 * Side2 * Side3;\n  }\n}\n")),(0,r.kt)("p",null,"Now we've created a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Shape")," class that extends the ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," class, giving it access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"virtual CalculateArea()")," method. "),(0,r.kt)("p",null,"Within the ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," class, we've overridden the same ",(0,r.kt)("inlineCode",{parentName:"p"},"CalculateArea()")," method. Based on what we learned in the previous lesson about the ",(0,r.kt)("inlineCode",{parentName:"p"},"override")," modifier, we know it allows us to declare a new value for an inherited ",(0,r.kt)("inlineCode",{parentName:"p"},"virtual")," method, and this is exactly what we're doing."),(0,r.kt)("p",null,"Now, when we invoke ",(0,r.kt)("inlineCode",{parentName:"p"},"shp.CalculateArea();")," in the following code, do you think it will return ",(0,r.kt)("inlineCode",{parentName:"p"},"8")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"? Take a moment to review the code and make a guess. Notice that we create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," object, then a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Shape")," object that is assigned ",(0,r.kt)("inlineCode",{parentName:"p"},"tri"),", the original ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," object, as a value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"class Program\n{\n  static void Main()\n  {\n    Triangle tri = new Triangle(2);\n    Shape shp = tri;\n    int area = shp.CalculateArea();\n    // Will 'area' be equal to 8 or 0?\n    System.Console.WriteLine(area);\n  }\n}\n")),(0,r.kt)("p",null,"Determining whether ",(0,r.kt)("inlineCode",{parentName:"p"},"shp.CalculateArea()")," should invoke the ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle.CalculateArea()")," method and return ",(0,r.kt)("inlineCode",{parentName:"p"},"8"),", or the ",(0,r.kt)("inlineCode",{parentName:"p"},"Shape.CalculateArea()")," method and return ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", is an example of polymorphism. Specifically, this is an example of run-time polymorphism, where exactly which method should be called is determined while our program is running. "),(0,r.kt)("p",null,"When we run the above code, we'll get ",(0,r.kt)("inlineCode",{parentName:"p"},"8")," returned to us. That's because while our program is running it determined that the ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle.CalculateArea()")," method has overridden the ",(0,r.kt)("inlineCode",{parentName:"p"},"Shape.CalculateArea()")," method and because of this, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle.CalculateArea()")," method takes precedence. "),(0,r.kt)("p",null,"If we did not want the original ",(0,r.kt)("inlineCode",{parentName:"p"},"Shape.CalculateArea()")," method to be overridden, we can update our ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle.CalculateArea()")," method declaration to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," modifier to indicate that it is a new method that is separate from the inherited ",(0,r.kt)("inlineCode",{parentName:"p"},"Shape.CalculateArea()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Triangle : Shape\n{\n  ... // other logic\n\n  public new int CalculateArea()\n  {\n    return Side1 * Side2 * Side3;\n  }\n}\n")),(0,r.kt)("p",null,"Now if we re-run our program code, as-is, without making any addditional changes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"class Program\n{\n  static void Main()\n  {\n    Triangle tri = new Triangle(2);\n    Shape shp = tri;\n    int area = shp.CalculateArea();\n    System.Console.WriteLine(area);\n  }\n}\n")),(0,r.kt)("p",null,"We'll get ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," returned to us, because at run time our program has determined that the ",(0,r.kt)("inlineCode",{parentName:"p"},"shp.CalculateArea()")," is in fact invoking the base class ",(0,r.kt)("inlineCode",{parentName:"p"},"Shape.CalculateArea()"),". This is happening because the ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle.CalculateArea()")," method is declared as ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," and no longer overrides the base class ",(0,r.kt)("inlineCode",{parentName:"p"},"Shape.CalculateArea()")," method."),(0,r.kt)("p",null,"Is this a little confusing? Well, that's not unexpected with polymorphism since it is all about dealing with an object or method that has multiple forms, but is identified by the same name. Fortunately, it's unlikely that you'll encounter code like we saw in the last example of run time polymorphism, as it is a contrived example. As long as you structure inheritance intentionally in your apps and write tests for your code, any errors that arise from polymorphism will get identified quickly, and you'll be able to resolve those errors just as quickly. "),(0,r.kt)("p",null,"Remember that ",(0,r.kt)("strong",{parentName:"p"},"you are not required to use polymorphism for this section's independent project.")," As always, we encourage you to experiment with it and try it in your code if possible."))}d.isMDXComponent=!0}}]);