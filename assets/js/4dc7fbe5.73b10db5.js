"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[22820],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>h});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=t.createContext({}),c=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(o.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,h=d["".concat(o,".").concat(u)]||d[u]||m[u]||s;return n?t.createElement(h,i(i({ref:a},p),{},{components:n})):t.createElement(h,i({ref:a},p))}));function h(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89224:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=n(87462),r=(n(67294),n(3905));const s={title:"4. Classes and Namespaces",id:"classes_and_namespaces",slug:"classes_and_namespaces",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/4_basic-console-apps/0d_classes_and_namespaces.md"},i=void 0,l={unversionedId:"c_and_net/basic-console-apps/classes_and_namespaces",id:"c_and_net/basic-console-apps/classes_and_namespaces",title:"4. Classes and Namespaces",description:"We previously learned that .NET organizes its code into classes and namespaces:",source:"@site/docs/c_and_net/4_basic-console-apps/0d_classes_and_namespaces.md",sourceDirName:"c_and_net/4_basic-console-apps",slug:"/c_and_net/basic-console-apps/classes_and_namespaces",permalink:"/lhtp/c_and_net/basic-console-apps/classes_and_namespaces",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"4. Classes and Namespaces",id:"classes_and_namespaces",slug:"classes_and_namespaces",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/4_basic-console-apps/0d_classes_and_namespaces.md"},sidebar:"c_and_net",previous:{title:"3. The Shape Tracker Project Structure",permalink:"/lhtp/c_and_net/basic-console-apps/the_shape_tracker_project_structure"},next:{title:"5. Class Fields and Constructors",permalink:"/lhtp/c_and_net/basic-console-apps/class_fields_and_constructors"}},o={},c=[{value:"Creating and Using the <code>Triangle</code> Class",id:"creating-and-using-the-triangle-class",level:2},{value:"Creating a New <code>Triangle</code> Instance",id:"creating-a-new-triangle-instance",level:3},{value:"Compiling and Executing the App",id:"compiling-and-executing-the-app",level:3},{value:"Compiler Errors",id:"compiler-errors",level:3},{value:"Creating and Using Namespaces",id:"creating-and-using-namespaces",level:2},{value:"Adding a Namespace for UI Logic",id:"adding-a-namespace-for-ui-logic",level:3},{value:"Adding a Namespace for Business Logic",id:"adding-a-namespace-for-business-logic",level:3},{value:"We Access Classes through their Namespace",id:"we-access-classes-through-their-namespace",level:3},{value:"Takeaways",id:"takeaways",level:2},{value:"Repository Reference",id:"repository-reference",level:3}],p={toc:c},d="wrapper";function m(e){let{components:a,...n}=e;return(0,r.kt)(d,(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We previously learned that .NET organizes its code into classes and namespaces:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("strong",{parentName:"li"},"class")," is a template for creating objects of a specific type. In this way, a class groups related functionality into one unit (a template or blueprint) that can be used again and again to create a specific type of object."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("strong",{parentName:"li"},"namespace")," is a grouping of related classes based on their importance or function. ")),(0,r.kt)("p",null,"In this lesson, we'll learn how to create our own custom classes and namespaces. "),(0,r.kt)("h2",{id:"creating-and-using-the-triangle-class"},"Creating and Using the ",(0,r.kt)("inlineCode",{parentName:"h2"},"Triangle")," Class"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We actually already created a basic ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," class in the previous lesson. Let's take another look at it:"),(0,r.kt)("div",{class:"filename"},"Models/Triangle.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Triangle\n{ \n  // Code for Triangle business logic will go here.\n}\n")),(0,r.kt)("p",null,"To create a class, we need to do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Declare a class using the ",(0,r.kt)("inlineCode",{parentName:"li"},"class"),' keyword followed by the name of the class in Pascal case, or "UpperCamelCase". Our class is called ',(0,r.kt)("inlineCode",{parentName:"li"},"Triangle"),"."),(0,r.kt)("li",{parentName:"ul"},"Include the ",(0,r.kt)("strong",{parentName:"li"},"access modifier")," ",(0,r.kt)("inlineCode",{parentName:"li"},"public")," in order to make our class accessible anywhere within our application. There are other access modifiers than ",(0,r.kt)("inlineCode",{parentName:"li"},"public"),", and we won't always include an access modifier. We'll learn about access modifiers in depth in an upcoming lesson."),(0,r.kt)("li",{parentName:"ul"},"On new lines, we include an opening ",(0,r.kt)("inlineCode",{parentName:"li"},"{")," and closing ",(0,r.kt)("inlineCode",{parentName:"li"},"}")," curly brace. It's within these curly braces that we will later add a constructor, methods, and more!")),(0,r.kt)("p",null,"And that's all that we need to create and use a class, albeit not a very useful class. "),(0,r.kt)("h3",{id:"creating-a-new-triangle-instance"},"Creating a New ",(0,r.kt)("inlineCode",{parentName:"h3"},"Triangle")," Instance"),(0,r.kt)("p",null,"Let's try using our class in our user interface logic file, ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs"),". We'll simply create a new instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," class and print the object to the console:"),(0,r.kt)("div",{class:"filename"},"Program.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\n\nclass Program\n{\n  static void Main()\n  {\n    Triangle testTriangle = new Triangle();\n    Console.WriteLine(testTriangle.GetType());\n  }\n}\n")),(0,r.kt)("p",null,"We've update ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs")," in a few ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We've added a using directive for ",(0,r.kt)("inlineCode",{parentName:"li"},"System")," in order to access the ",(0,r.kt)("inlineCode",{parentName:"li"},"Console")," library so we can write to the terminal."),(0,r.kt)("li",{parentName:"ul"},"We've created a new instance of the Triangle class with ",(0,r.kt)("inlineCode",{parentName:"li"},"Triangle testTriangle = new Triangle();"),". This should look similar to JavaScript classes as well as using C# lists and dictionaries:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We start by creating a variable: ",(0,r.kt)("inlineCode",{parentName:"li"},"Triangle testTriangle"),"."),(0,r.kt)("li",{parentName:"ul"},"We then use the assignment operator ",(0,r.kt)("inlineCode",{parentName:"li"},"=")," to set the ",(0,r.kt)("inlineCode",{parentName:"li"},"testTriangle")," variable to a new ",(0,r.kt)("inlineCode",{parentName:"li"},"Triangle")," object which we create using the ",(0,r.kt)("inlineCode",{parentName:"li"},"new")," keyword and by invoking the ",(0,r.kt)("inlineCode",{parentName:"li"},"Triangle()")," constructor method."))),(0,r.kt)("li",{parentName:"ul"},"We get and print the type of the ",(0,r.kt)("inlineCode",{parentName:"li"},"testTriangle")," variable to the terminal using ",(0,r.kt)("inlineCode",{parentName:"li"},"Console.WriteLine()"),".  ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notice that we do not need to create a constructor in our class in order to have access to a constructor method.")," That is because a constructor method is automatically created anytime you create a new class. Later, we'll learn how to customize class constructor methods."),(0,r.kt)("h3",{id:"compiling-and-executing-the-app"},"Compiling and Executing the App"),(0,r.kt)("p",null,"We can compile and execute our console app by running the following command within the ",(0,r.kt)("inlineCode",{parentName:"p"},"ShapeTracker/")," project directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ dotnet run\n")),(0,r.kt)("p",null,"We should see the name of our class output in the terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Triangle\n")),(0,r.kt)("p",null,"That's not very exciting, but this does confirm that our ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," class is working and we've successfully created an instance of it."),(0,r.kt)("p",null,"Remember that the ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet run")," command both compiles and runs our project. If we only want to compile our project, we would use the command ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet build"),"."),(0,r.kt)("h3",{id:"compiler-errors"},"Compiler Errors"),(0,r.kt)("p",null,'keep in mind that we need to include a semicolon after every statement and "using" directive within our C# code files.'),(0,r.kt)("p",null,"For example, if we remove the semicolon from the end of ",(0,r.kt)("inlineCode",{parentName:"p"},"Console.WriteLine(testTriangle)")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs"),", we'll get a loud red error in our terminal stating the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{style:{color:"red"}},"/Users/staff/Desktop/ShapeTracker.Solution/ShapeTracker/Program.cs(7,36): error CS1002: ; expected [/Users/staff/Desktop/ShapeTracker.Solution/ShapeTracker/ShapeTracker.csproj] The build failed. Fix the build errors and run again.")),(0,r.kt)("p",null,"Try it out!"),(0,r.kt)("p",null,"This type of error is called a ",(0,r.kt)("strong",{parentName:"p"},"compiler error"),", which is an error generated when our code is being compiled. Compiler errors break our code so they need to be fixed before we can successfully run our apps."),(0,r.kt)("h2",{id:"creating-and-using-namespaces"},"Creating and Using Namespaces"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Right now we have two classes in our application: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Program"),", which contains our user interface code, like the ",(0,r.kt)("inlineCode",{parentName:"li"},"Main()")," method."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Triangle"),", which contains business logic for ",(0,r.kt)("inlineCode",{parentName:"li"},"Triangle")," objects.")),(0,r.kt)("p",null,"With only two classes, it may not seem like it makes sense to group these into namespaces, but it is actually a best practice to intentionally set up namespaces from the start of every program. "),(0,r.kt)("p",null,"We'll use two namespaces in our Shape Tracker app, one for our business logic and another for our user interface (UI) logic. With these namespaces in place, if we add more user interface or business logic files later, we can group them into their appropriate namespace."),(0,r.kt)("h3",{id:"adding-a-namespace-for-ui-logic"},"Adding a Namespace for UI Logic"),(0,r.kt)("p",null,"Let's add a namespace to ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs"),", the only code file we have so far for user interface logic."),(0,r.kt)("div",{class:"filename"},"Program.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\n\nnamespace ShapeTracker\n{\n  class Program\n  {\n    static void Main()\n    {\n      Triangle testTriangle = new Triangle();\n      Console.WriteLine(testTriangle.GetType());\n    }\n  }\n}\n")),(0,r.kt)("p",null,"Creating a namespace is similar to creating a class:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We use the ",(0,r.kt)("inlineCode",{parentName:"li"},"namespace"),' keyword to declare a namespace followed by the name of the namespace in Pascal case, or "UpperCamelCase". '),(0,r.kt)("li",{parentName:"ul"},"On new lines, we include an opening ",(0,r.kt)("inlineCode",{parentName:"li"},"{")," and closing ",(0,r.kt)("inlineCode",{parentName:"li"},"}")," curly brace. It's within these curly braces that we add the class(es) that we want included in the namespace.")),(0,r.kt)("p",null,"As far as conventions go:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It's common to name all namespaces in a project starting with the name of the project or company."),(0,r.kt)("li",{parentName:"ul"},"It's common for the ",(0,r.kt)("strong",{parentName:"li"},"entry point")," of the application to have a namespace name that is just the name of the project or company."),(0,r.kt)("li",{parentName:"ul"},"When .NET compiles, it locates the entry point of our application by the method name ",(0,r.kt)("inlineCode",{parentName:"li"},"Main()")," and the fact that it is a ",(0,r.kt)("inlineCode",{parentName:"li"},"static")," method. So we don't have to worry about our namespace or class name affecting the compiler's ability to locate the ",(0,r.kt)("inlineCode",{parentName:"li"},"Main()")," method.")),(0,r.kt)("h3",{id:"adding-a-namespace-for-business-logic"},"Adding a Namespace for Business Logic"),(0,r.kt)("p",null,"Next, let's create a namespace for our business logic file, ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle.cs"),":"),(0,r.kt)("div",{class:"filename"},"Models/Triangle.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ShapeTracker.Models\n{\n  public class Triangle\n  {\n    \n  }\n}\n")),(0,r.kt)("p",null,"We're naming this namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Models")," because it will hold all of the classes that contain our business logic. Why not ",(0,r.kt)("inlineCode",{parentName:"p"},"ShapeTracker.BusinessLogic"),"? The name ",(0,r.kt)("strong",{parentName:"p"},"models"),' is the standard name in C# to describe "business logic". '),(0,r.kt)("p",null,"We're seeing new conventions with the namespace name ",(0,r.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Models"),", so let's review those now:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We can give a namespace multiple names, separated by a period ",(0,r.kt)("inlineCode",{parentName:"li"},"."),". In this case we're using two names, the name of our project, ",(0,r.kt)("inlineCode",{parentName:"li"},"ShapeTracker"),", and the name of a component within our project, ",(0,r.kt)("inlineCode",{parentName:"li"},"Models"),", to create one namespace: ",(0,r.kt)("inlineCode",{parentName:"li"},"ShapeTracker.Models"),"."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("strong",{parentName:"li"},"component")," is one aspect of our project. Our two components are user interface and business logic, two basic groupings we can organize our code with; however, we could identify components in other ways.")),(0,r.kt)("p",null,"In summary, with the namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Models"),", we're seeing another very common convention in namespace naming: start with the name of the project or company and then add the name of the component or feature that the namespace groups."),(0,r.kt)("p",null,"To read more about naming namespaces, visit the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/standard/design-guidelines/names-of-namespaces"},"MS docs"),"."),(0,r.kt)("h3",{id:"we-access-classes-through-their-namespace"},"We Access Classes through their Namespace"),(0,r.kt)("p",null,"Let's re-run our console app now that we have our two new namespaces in place. Run the following command within the ",(0,r.kt)("inlineCode",{parentName:"p"},"ShapeTracker/")," project directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ dotnet run\n")),(0,r.kt)("p",null,"Uh-oh... we're getting compiler errors!"),(0,r.kt)("pre",null,(0,r.kt)("code",{style:{color:"red"}},"/Users/staff/Desktop/ShapeTracker.Solution/ShapeTracker/Program.cs(10,7): error CS0246: The type or namespace name 'Triangle' could not be found (are you missing a using directive or an assembly reference?) [/Users/staff/Desktop/ShapeTracker.Solution/ShapeTracker/test.csproj] /Users/staff/Desktop/ShapeTracker.Solution/ShapeTracker/Program.cs(10,35): error CS0246: The type or namespace name 'Triangle' could not be found (are you missing a using directive or an assembly reference?) [/Users/staff/Desktop/ShapeTracker.Solution/ShapeTracker/test.csproj] The build failed. Fix the build errors and run again.")),(0,r.kt)("p",null,"We're actually getting the same error twice: once for each time we reference the ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," type in ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"Triangle testTriangle = new Triangle();\n")),(0,r.kt)("p",null,"What this error message is telling us is that the compiler cannot locate our ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," class. Can you guess why this might be? "),(0,r.kt)("p",null,"It's because the ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," class doesn't exist anymore. Instead we have a ",(0,r.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Models.Triangle")," class. As we can see, when we add a class to a namespace, the name of our class is updated to include the namespace."),(0,r.kt)("p",null,"Let's fix the compiler errors. Here's how we'll update ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs"),":"),(0,r.kt)("div",{class:"filename"},"Program.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\n\nnamespace ShapeTracker\n{\n  class Program\n  {\n    static void Main()\n    {\n      ShapeTracker.Models.Triangle testTriangle = new ShapeTracker.Models.Triangle();\n      Console.WriteLine(testTriangle.GetType());\n    }\n  }\n}\n")),(0,r.kt)("p",null,"Now if we run our app, our compiler errors will be resolved. We'll see that even the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"testTriangle")," has updated to show both its namespace and class name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ShapeTracker.Models.Triangle\n")),(0,r.kt)("p",null,"Typing out ",(0,r.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Models.Triangle")," every time we need to reference the ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," class is going to get tedious fast, so let's update ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs")," with a new using directive for ",(0,r.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Models"),":"),(0,r.kt)("div",{class:"filename"},"Program.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing ShapeTracker.Models;  // new directive\n\nnamespace ShapeTracker\n{\n  class Program\n  {\n    static void Main()\n    {\n      Triangle testTriangle = new Triangle(); // updated code\n      Console.WriteLine(testTriangle.GetType());\n    }\n  }\n}\n")),(0,r.kt)("p",null,"That's better. Now if we run our app, we'll still get the same value as before: ",(0,r.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Models.Triangle"),". "),(0,r.kt)("h2",{id:"takeaways"},"Takeaways"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Namespaces and classes allow us to group and organize our code. "),(0,r.kt)("p",null,"It's important to set up namespaces from the start of your application, even if you won't have that many files and classes. This ensures that we are being intentional with our code organization and writing code that can scale easily. In the example projects we create, we will create a namespace for UI logic and another for business logic. "),(0,r.kt)("p",null,"Namespaces and classes are declared in a similar way, using a ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," keyword. Classes are always nested inside of namespaces."),(0,r.kt)("p",null,"Once we add a class to a namespace, we need to access that class via the namespace. This is just like we saw with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," class after we added it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Models")," namespace: we needed to access ",(0,r.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Models.Triangle")," instead of just ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle"),"."),(0,r.kt)("p",null,"Now that we have two namespaces declared in our Shape Tracker app, we can do more with them:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We can add more classes to each namespace, either in the same file or in another file. Whether we do this depends on our project. For example, if we added a ",(0,r.kt)("inlineCode",{parentName:"li"},"Rectangle")," class to our Shape Tracker app, then we'd create a new ",(0,r.kt)("inlineCode",{parentName:"li"},"Rectangle.cs")," file, with a new ",(0,r.kt)("inlineCode",{parentName:"li"},"Rectangle")," class inside of the ",(0,r.kt)("inlineCode",{parentName:"li"},"ShapeTracker.Models")," namespace. We'll see what this looks like later on."),(0,r.kt)("li",{parentName:"ul"},"We can also create namespaces within this namespace, but we won't ever get into that sort of nesting in the projects we create in the program."),(0,r.kt)("li",{parentName:"ul"},"If two classes are in the same namespace, they will 'know' about each other and be in the same ",(0,r.kt)("strong",{parentName:"li"},"scope"),". ")),(0,r.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,r.kt)("p",null,"Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a the default branch in the repository."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/prework-shape-tracker-csharp-net6"},(0,r.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for Shape Tracker: ",(0,r.kt)("inlineCode",{parentName:"a"},"1_basic_console_app_structure")))))}m.isMDXComponent=!0}}]);