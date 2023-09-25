"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[53133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,u=d["".concat(o,".").concat(m)]||d[m]||h[m]||l;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const l={title:"Static Class Members",id:"static_class_members",slug:"static_class_members",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/4_basic-console-apps/0i_static_class_members.md"},r=void 0,s={unversionedId:"c_and_net_part_time_evening/basic-console-apps/static_class_members",id:"c_and_net_part_time_evening/basic-console-apps/static_class_members",title:"Static Class Members",description:"We've learned how to create and call instance class members, which are called on an object of a specific type. We also learned how to call built-in static methods, which are called on the class, like Console.WriteLine(). In this lesson, we'll complete our practice with static and instance class members by adding a static field and method to our Triangle class. Since we'll continue to make our fields private and expose public methods to access the fields, this will be another example of encapsulation.",source:"@site/docs/c_and_net_part_time_evening/4_basic-console-apps/0i_static_class_members.md",sourceDirName:"c_and_net_part_time_evening/4_basic-console-apps",slug:"/c_and_net_part_time_evening/basic-console-apps/static_class_members",permalink:"/lhtp/c_and_net_part_time_evening/basic-console-apps/static_class_members",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Static Class Members",id:"static_class_members",slug:"static_class_members",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/4_basic-console-apps/0i_static_class_members.md"},sidebar:"c_and_net_part_time_evening",previous:{title:"APIE: Encapsulation",permalink:"/lhtp/c_and_net_part_time_evening/basic-console-apps/apie_encapsulation"},next:{title:"Creating a User Interface for a Console App",permalink:"/lhtp/c_and_net_part_time_evening/basic-console-apps/creating_a_user_interface_for_a_console_app"}},o={},c=[{value:"Static Field",id:"static-field",level:2},{value:"Updating the Constructor",id:"updating-the-constructor",level:2},{value:"Static Method",id:"static-method",level:2},{value:"<code>Triangle.GetAll()</code>",id:"trianglegetall",level:3},{value:"<code>Triangle.ClearAll()</code>",id:"triangleclearall",level:3},{value:"Using Static Methods",id:"using-static-methods",level:2},{value:"Repository Reference",id:"repository-reference",level:3}],p={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We've learned how to create and call ",(0,i.kt)("strong",{parentName:"p"},"instance")," class members, which are called on an object of a specific type. We also learned how to call built-in ",(0,i.kt)("strong",{parentName:"p"},"static")," methods, which are called on the class, like ",(0,i.kt)("inlineCode",{parentName:"p"},"Console.WriteLine()"),". In this lesson, we'll complete our practice with static and instance class members by adding a static field and method to our ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," class. Since we'll continue to make our fields private and expose public methods to access the fields, this will be another example of encapsulation."),(0,i.kt)("p",null,"When we create a static field or method, it should contain data or perform functionality that's relevant to the entire class. Alternatively we might design a class that only has static members, because there's no need to ever create an instance of the class; a good example of this is ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.math?view=net-6.0"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"Math")," class"),"."),(0,i.kt)("p",null,"We do want to create instances of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," class, so we'll want to create a field or method that's relevant to the entire class. Given these goals, let's create a new field called ",(0,i.kt)("inlineCode",{parentName:"p"},"_instances")," that will hold a list of all ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," objects ever created, and two methods that will allow us to access and clear the list."),(0,i.kt)("p",null,"Let's get into it!"),(0,i.kt)("h2",{id:"static-field"},"Static Field"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"To create a static field, we simply need to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"static")," keyword. Here's how we'll create our new ",(0,i.kt)("inlineCode",{parentName:"p"},"_instances")," field:"),(0,i.kt)("div",{class:"filename"},"Models/Triangle.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using System.Collections.Generic; // new using directive\n\nnamespace ShapeTracker.Models \n{\n  public class Triangle \n  {\n    private int _side1;\n    private int _side2;\n    private int _side3;\n    private static List<Triangle> _instances = new List<Triangle> {};\n\n    ... // other code omitted for brevity\n  }\n}\n")),(0,i.kt)("p",null,"First notice that we've added a new using directive for the namespace ",(0,i.kt)("inlineCode",{parentName:"p"},"System.Collections.Generic"),". The class ",(0,i.kt)("inlineCode",{parentName:"p"},"List<T>")," lives inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.Collections.Generic")," namespace, so we need to make sure to import the namespace into our file before we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"List<T>"),". "),(0,i.kt)("p",null,"Next, notice our new field ",(0,i.kt)("inlineCode",{parentName:"p"},"_instances"),". We declare ",(0,i.kt)("inlineCode",{parentName:"p"},"_instances")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"private")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"static")," and we give it a type of ",(0,i.kt)("inlineCode",{parentName:"p"},"List<Triangle>")," (a list of triangle objects). "),(0,i.kt)("p",null,"We then use the assignment operator ",(0,i.kt)("inlineCode",{parentName:"p"},"=")," to give ",(0,i.kt)("inlineCode",{parentName:"p"},"_instances")," an initial value of an empty list of triangle objects. "),(0,i.kt)("p",null,"Next, let's update our constructor to add new triangle objects directly to our static list."),(0,i.kt)("h2",{id:"updating-the-constructor"},"Updating the Constructor"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We can use the keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," within our constructor to reference the object instance that's being created. Let's see how this works:"),(0,i.kt)("div",{class:"filename"},"Models/Triangle.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ShapeTracker.Models \n{\n  public class Triangle \n  {\n    private int _side1;\n    private int _side2;\n    private int _side3;\n    private static List<Triangle> _instances = new List<Triangle> {};\n\n    public Triangle(int length1, int length2, int length3) \n    {\n      _side1 = length1;\n      _side2 = length2;\n      _side3 = length3;\n      _instance.Add(this);  // new code\n    }\n\n    ... // other code omitted for brevity\n  }\n}\n")),(0,i.kt)("p",null,"First of all, we call ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1.add?view=net-6.0"},"the built in ",(0,i.kt)("inlineCode",{parentName:"a"},"List<T>.Add()")," method")," to add a new element to our list. The argument we pass into the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add()")," method is ",(0,i.kt)("inlineCode",{parentName:"p"},"this"),", the special keyword that represents the object instance that's being created. To learn more about ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," and other ways we can use it, ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/this"},"visit the MS docs"),"."),(0,i.kt)("h2",{id:"static-method"},"Static Method"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"At this point we have the code in place to populate our list, but we still do not have any tools to access or manage the list outside of our class. So let's do just that. We'll create two public and static methods, one that acts as a getter, and the other that acts as a setter. "),(0,i.kt)("h3",{id:"trianglegetall"},(0,i.kt)("inlineCode",{parentName:"h3"},"Triangle.GetAll()")),(0,i.kt)("p",null,"We'll name our static getter method ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle.GetAll()")," and it will return ",(0,i.kt)("inlineCode",{parentName:"p"},"_instances"),", our list of triangle objects. Here's the new method that we'll add at the end of our file:"),(0,i.kt)("div",{class:"filename"},"Models/Triangle.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ShapeTracker.Models \n{\n  public class Triangle \n  {\n    private int _side1;\n    private int _side2;\n    private int _side3;\n    private static List<Triangle> _instances = new List<Triangle> {};\n\n    public Triangle(int length1, int length2, int length3) \n    {\n      _side1 = length1;\n      _side2 = length2;\n      _side3 = length3;\n      _instance.Add(this);  // new code\n    }\n\n    ... // other code omitted for brevity\n\n    public static List<Triangle> GetAll()\n    {\n      return _instances;\n    }\n  }\n}\n")),(0,i.kt)("p",null,"This looks like other getter methods we've created, with two differences:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We've included the ",(0,i.kt)("inlineCode",{parentName:"li"},"static")," keyword to make this a static method called on the class."),(0,i.kt)("li",{parentName:"ul"},"We're not following the getter naming convention of ",(0,i.kt)("inlineCode",{parentName:"li"},"Get")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"NameOfField")," in Pascal case. Instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"GetInstances"),", we're using the shortened name ",(0,i.kt)("inlineCode",{parentName:"li"},"GetAll"),". Variations like this are fine so long as your code is easy to understand.")),(0,i.kt)("h3",{id:"triangleclearall"},(0,i.kt)("inlineCode",{parentName:"h3"},"Triangle.ClearAll()")),(0,i.kt)("p",null,"Next, let's create a static setter method called ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle.ClearAll()"),". As the name implies, this method will clear all triangle objects from our list."),(0,i.kt)("p",null,"Here's the new method that we'll add below the ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAll()")," method:"),(0,i.kt)("div",{class:"filename"},"Models/Triangle.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ShapeTracker.Models \n{\n  public class Triangle \n  {\n    private int _side1;\n    private int _side2;\n    private int _side3;\n    private static List<Triangle> _instances = new List<Triangle> {};\n\n    public Triangle(int length1, int length2, int length3) \n    {\n      _side1 = length1;\n      _side2 = length2;\n      _side3 = length3;\n      _instance.Add(this);  // new code\n    }\n\n    ... // other code omitted for brevity\n\n    public static List<Triangle> GetAll()\n    {\n      return _instances;\n    }\n\n    public static void ClearAll()\n    {\n      _instances.Clear();\n    }\n  }\n}\n")),(0,i.kt)("p",null,"Since we don't return anything we specify ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ClearAll()")," method signature."),(0,i.kt)("p",null,"Within the method body, we call on ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1.clear?view=net-6.0"},"the built in ",(0,i.kt)("inlineCode",{parentName:"a"},"List<T>.Clear()")," method"),"."),(0,i.kt)("h2",{id:"using-static-methods"},"Using Static Methods"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Now we're ready to put our new methods into practice. In ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs"),", let's update the UI logic within the ",(0,i.kt)("inlineCode",{parentName:"p"},"Main()")," method to show the contents of ",(0,i.kt)("inlineCode",{parentName:"p"},"_instances")," after we create two  triangle objects."),(0,i.kt)("div",{class:"filename"},"Program.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing ShapeTracker.Models;\nusing System.Collections.Generic;  // new using directive!\n\nnamespace ShapeTracker\n{\n  class Program\n  {\n    static void Main()\n    {\n      List<Triangle> allTriangles = Triangle.GetAll();\n      Triangle testTriangle = new Triangle(3,4,5);\n      Triangle secondTriangle = new Triangle(32,74,75);\n      if (allTriangles.Count == 0)\n      {\n        Console.WriteLine("There are no triangles!");\n      }\n      else\n      {\n        Console.WriteLine("----------------------------------");\n        foreach (Triangle tri in allTriangles)\n        {\n          Console.WriteLine($"Side one of the triangle: {tri.GetSide1()}");\n          Console.WriteLine($"Side two of the triangle: {tri.GetSide2()}");\n          Console.WriteLine($"Side three of the triangle: {tri.GetSide3()}");\n          Console.WriteLine("----------------------------------");\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Our user interface logic is a bit more complicated than before, because we're now using branching and a foreach loop. Let's discuss the changes."),(0,i.kt)("p",null,"Towards the top of the file:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Since our new UI logic uses the ",(0,i.kt)("inlineCode",{parentName:"li"},"List<T>")," type, the very first update we make is adding a new using directive for the namespace ",(0,i.kt)("inlineCode",{parentName:"li"},"System.Collections.Generic;"),".")),(0,i.kt)("p",null,"Within the ",(0,i.kt)("inlineCode",{parentName:"p"},"Main()")," method:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First we call the static ",(0,i.kt)("inlineCode",{parentName:"li"},"Triangle.GetAll()")," method to get our static list of triangle objects. There won't be any triangles in it at this point, but that doesn't matter because the value of the ",(0,i.kt)("inlineCode",{parentName:"li"},"allTriangles")," variable will update as we create new triangles. "),(0,i.kt)("li",{parentName:"ul"},"Next, we create two new triangle instances."),(0,i.kt)("li",{parentName:"ul"},"Then, we run our code through a conditional: ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"if"),' statement, we check if our list of triangles is empty, and if so, we show a message saying "There are no triangles!".'),(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"else")," statement, we handle all other cases, that is, when there are triangles in our list. If there are triangles, then we loop through the list and print information about each triangle. ")))),(0,i.kt)("p",null,"The output of the new UI logic will look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"You have triangles!\n----------------------------------\nSide one of the triangle: 3\nSide two of the triangle: 4\nSide three of the triangle: 5\n----------------------------------\nSide one of the triangle: 32\nSide two of the triangle: 74\nSide three of the triangle: 75\n----------------------------------\n")),(0,i.kt)("p",null,"We can update our UI logic to clear the triangles before our ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statement using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle.ClearAll()")," method:"),(0,i.kt)("div",{class:"filename"},"Program.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing ShapeTracker.Models;\nusing System.Collections.Generic;\n\nnamespace ShapeTracker\n{\n  class Program\n  {\n    static void Main()\n    {\n      List<Triangle> allTriangles = Triangle.GetAll();\n      Triangle testTriangle = new Triangle(3,4,5);\n      Triangle secondTriangle = new Triangle(32,74,75);\n      // new code below!!\n      Triangle.ClearAll();\n      // new code above!!   \n      if (allTriangles.Count == 0)\n      {\n        Console.WriteLine("There are no triangles!");\n      }\n      else\n      {\n        Console.WriteLine("----------------------------------");\n        foreach (Triangle tri in allTriangles)\n        {\n          Console.WriteLine($"Side one of the triangle: {tri.GetSide1()}");\n          Console.WriteLine($"Side two of the triangle: {tri.GetSide2()}");\n          Console.WriteLine($"Side three of the triangle: {tri.GetSide3()}");\n          Console.WriteLine("----------------------------------");\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"If we do that the terminal output will let us know:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"There are no triangles!\n")),(0,i.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,i.kt)("p",null,"Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/prework-shape-tracker-csharp-net6/tree/4_static_class_members"},(0,i.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for Shape Tracker: ",(0,i.kt)("inlineCode",{parentName:"a"},"4_static_class_members")))))}h.isMDXComponent=!0}}]);