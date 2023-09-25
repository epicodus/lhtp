"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[76154],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=r,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||o;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},27486:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={title:"Console App Project Structure: How to Add More Code Files",id:"console_app_project_structure_how_to_add_more_code_files",slug:"console_app_project_structure_how_to_add_more_code_files",hide_table_of_contents:!0,sidebar_position:12,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0l_multiple_files.md"},i=void 0,s={unversionedId:"c_and_net_classic/basic-console-apps/console_app_project_structure_how_to_add_more_code_files",id:"c_and_net_classic/basic-console-apps/console_app_project_structure_how_to_add_more_code_files",title:"Console App Project Structure: How to Add More Code Files",description:"In this lesson, we'll go over how to add more code files to our Shape Tracker project, and what namespaces we might add them to. We'll also learn that classes in the same namespace are in the same scope and therefore have access to each other without the need of a using directive.",source:"@site/docs/c_and_net_classic/4_basic-console-apps/0l_multiple_files.md",sourceDirName:"c_and_net_classic/4_basic-console-apps",slug:"/c_and_net_classic/basic-console-apps/console_app_project_structure_how_to_add_more_code_files",permalink:"/c_and_net_classic/basic-console-apps/console_app_project_structure_how_to_add_more_code_files",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Console App Project Structure: How to Add More Code Files",id:"console_app_project_structure_how_to_add_more_code_files",slug:"console_app_project_structure_how_to_add_more_code_files",hide_table_of_contents:!0,sidebar_position:12,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0l_multiple_files.md"},sidebar:"c_and_net_classic",previous:{title:"Simplifying Business Logic with Properties",permalink:"/c_and_net_classic/basic-console-apps/simplifying_business_logic_with_properties"},next:{title:"Configuration Reference and Review of C# Conventions",permalink:"/c_and_net_classic/basic-console-apps/configuration_reference_and_review_of_c_conventions"}},l={},c=[{value:"Adding More Business Logic Files",id:"adding-more-business-logic-files",level:2},{value:"Adding More UI Logic Files",id:"adding-more-ui-logic-files",level:2},{value:"Verbatim String Literals",id:"verbatim-string-literals",level:3},{value:"Ascii Banners",id:"ascii-banners",level:3},{value:"Summary",id:"summary",level:2}],p={toc:c},d="wrapper";function h(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this lesson, we'll go over how to add more code files to our Shape Tracker project, and what namespaces we might add them to. We'll also learn that classes in the same namespace are in the same ",(0,r.kt)("strong",{parentName:"p"},"scope")," and therefore have access to each other without the need of a using directive."),(0,r.kt)("h2",{id:"adding-more-business-logic-files"},"Adding More Business Logic Files"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Let's say we want to expand our Shape Tracker project to add a class for ",(0,r.kt)("inlineCode",{parentName:"p"},"Ellipse")," (which includes circles) and ",(0,r.kt)("inlineCode",{parentName:"p"},"Rectangle")," (which includes squares). We might add functionality that will allow users to calculate the area of an ellipse or rectangle, but we're not concerned about those details right now. The big question is where should we add those classes? A straightforward rule to follow is to create separate files for each new class, such that our project structure looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ShapeTracker.Solution/\n  \u251c\u2500\u2500 ShapeTracker/\n  \u2502     \u251c\u2500\u2500 Models/\n  |     |     \u251c\u2500\u2500 Ellipse.cs\n  |     |     \u251c\u2500\u2500 Rectangle.cs\n  \u2502     \u2502     \u2514\u2500\u2500 Triangle.cs\n  \u2502     \u251c\u2500\u2500 ShapeTracker.csproj\n  \u2502     \u2514\u2500\u2500 Program.cs\n  \u251c\u2500\u2500 .gitignore\n  \u2514\u2500\u2500 README.md\n")),(0,r.kt)("p",null,"Since each of these classes are a part of our Shape Tracker models, we should also add each new class to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Models")," namespace:"),(0,r.kt)("div",{class:"filename"},"Models/Ellipse.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ShapeTracker.Models\n{\n  public class Ellipse\n  {\n    // Ellipse code here.\n  }\n}\n")),(0,r.kt)("div",{class:"filename"},"Models/Rectangle.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ShapeTracker.Models\n{\n  public class Rectangle\n  {\n    // Rectangle code here.\n  }\n}\n")),(0,r.kt)("p",null,"As we can see in the above example, we can reuse existing namespaces in new files to add new classes to that namespace. All classes declared in the same namespace will 'know' about each other and be in the same ",(0,r.kt)("strong",{parentName:"p"},"scope"),". For example, this means we don't have to include a using directive for ",(0,r.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Models")," in order to use ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," logic within our ",(0,r.kt)("inlineCode",{parentName:"p"},"Rectangle")," class (even though there's not a good reason to do this anyways). Similarly, we don't need to include a brand new using directive in ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs")," to start using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Ellipse")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Rectangle")," classes. "),(0,r.kt)("p",null,"Another organization we could follow is adding all of our Shape Tracker models to one file. In this case, we could create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Shapes.cs")," and add the ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Rectangle"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Ellipse")," classes within it. The project structure would look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ShapeTracker.Solution/\n  \u251c\u2500\u2500 ShapeTracker/\n  \u2502     \u251c\u2500\u2500 Models/\n  \u2502     \u2502     \u2514\u2500\u2500 Shapes.cs\n  \u2502     \u251c\u2500\u2500 ShapeTracker.csproj\n  \u2502     \u2514\u2500\u2500 Program.cs\n  \u251c\u2500\u2500 .gitignore\n  \u2514\u2500\u2500 README.md\n")),(0,r.kt)("p",null,"Take note that the ",(0,r.kt)("strong",{parentName:"p"},"naming convention")," for files that contain multiple classes is to give the file a plural name, like ",(0,r.kt)("inlineCode",{parentName:"p"},"Shapes.cs"),", and not ",(0,r.kt)("inlineCode",{parentName:"p"},"Shape.cs"),"."),(0,r.kt)("p",null,"And ",(0,r.kt)("inlineCode",{parentName:"p"},"Shapes.cs")," would look like this (with some code omitted for brevity):"),(0,r.kt)("div",{class:"filename"},"Models/Shapes.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ShapeTracker.Models\n{\n  public class Rectangle\n  {\n    // Rectangle code here.\n  }\n\n  public class Ellipse\n  {\n    // Ellipse code here.\n  }\n\n  public class Triangle\n  {\n    // Triangle code here.\n  }\n}\n")),(0,r.kt)("p",null,"In the example projects in the C# .NET course, we'll usually have one class per file. That's because it's more descriptive \u2014 as in, ",(0,r.kt)("inlineCode",{parentName:"p"},"Ellipse")," class logic is found in ",(0,r.kt)("inlineCode",{parentName:"p"},"Ellipse.cs")," \u2014 and individual files have less code in them. Because of these reasons, for the Shape Tracker app, I think it makes more sense to put each shape class within individual files. While there's no hard and fast rule for how you organize classes into files, you always want to make sure the choice you are making leads to source code that is descriptive and easy to navigate. "),(0,r.kt)("h2",{id:"adding-more-ui-logic-files"},"Adding More UI Logic Files"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"For the console app projects we create in this course section, we'll likely be fine to put all UI logic in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Program")," class (separated into multiple methods) within ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs"),". However, if you end up creating a more complex UI logic in your console app, you may want to separate your UI into helper classes within multiple files to better keep your logic organized. A structure like that may look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ShapeTracker.Solution/\n  \u251c\u2500\u2500 ShapeTracker/\n  \u2502     \u251c\u2500\u2500 Models/\n  |     |     \u251c\u2500\u2500 Ellipse.cs\n  |     |     \u251c\u2500\u2500 Rectangle.cs\n  \u2502     \u2502     \u2514\u2500\u2500 Triangle.cs\n  |     \u251c\u2500\u2500 UserInterfaceModels/\n  |     |     \u2514\u2500\u2500 Banners.cs\n  \u2502     \u251c\u2500\u2500 ShapeTracker.csproj\n  \u2502     \u2514\u2500\u2500 Program.cs\n  \u251c\u2500\u2500 .gitignore\n  \u2514\u2500\u2500 README.md\n")),(0,r.kt)("p",null,"We've created a new folder called ",(0,r.kt)("inlineCode",{parentName:"p"},"UserInterfaceModels/")," within the ",(0,r.kt)("inlineCode",{parentName:"p"},"ShapeTracker/")," directory. "),(0,r.kt)("p",null,"Notice that ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs")," is not inside the new ",(0,r.kt)("inlineCode",{parentName:"p"},"UserInterfaceModels/")," directory \u2014 that's because it's best practice to leave ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs")," in the root of the production/project directory since it is the entry point to our application."),(0,r.kt)("p",null,"Within ",(0,r.kt)("inlineCode",{parentName:"p"},"UserInterfaceModels/")," we have a made-up file called ",(0,r.kt)("inlineCode",{parentName:"p"},"Banner.cs")," that will contain multiple classes within it, each of which has a static property that stores different banners:"),(0,r.kt)("div",{class:"filename"},"UserInterfaceModels/Banners.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace ShapeTracker.UserInterfaceModels\n{\n  class WelcomeBanner\n  {\n    public static string Welcome { get; } = @"\n  #####                                #######                                           \n #     # #    #   ##   #####  ######      #    #####    ##    ####  #    # ###### #####  \n #       #    #  #  #  #    # #           #    #    #  #  #  #    # #   #  #      #    # \n  #####  ###### #    # #    # #####       #    #    # #    # #      ####   #####  #    # \n       # #    # ###### #####  #           #    #####  ###### #      #  #   #      #####  \n #     # #    # #    # #      #           #    #   #  #    # #    # #   #  #      #   #  \n  #####  #    # #    # #      ######      #    #    # #    #  ####  #    # ###### #    # \n                                                                                         ";\n  }\n\n  class GoodbyeBanner\n  {\n    // GoodbyeBanner code here.\n  }\n\n  class SubMenuBanner\n  {\n    // SubMenuBanner code here.\n  }\n}\n')),(0,r.kt)("p",null,"First note that we're using a new namespace: ",(0,r.kt)("inlineCode",{parentName:"p"},"ShapeTracker.UserInterfaceModels"),". That means if we want to use any class within the ",(0,r.kt)("inlineCode",{parentName:"p"},"Banners.cs")," file in ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs"),", we'll need to add a new using directive: ",(0,r.kt)("inlineCode",{parentName:"p"},"using ShapeTracker.UserInterfaceModels;"),"."),(0,r.kt)("p",null,"Why not add the classes within ",(0,r.kt)("inlineCode",{parentName:"p"},"Banner.cs")," to the namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"ShapeTracker"),", which contains the ",(0,r.kt)("inlineCode",{parentName:"p"},"Program")," class and our project's entry point? Well, it would actually be fine to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ShapeTracker")," namespace in ",(0,r.kt)("inlineCode",{parentName:"p"},"Banner.cs"),". "),(0,r.kt)("p",null,"In this example of growing our application's source code, we've opted to use three namespaces because it creates a clearer separation of source code:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ShapeTracker.Models")," for our business logic (everything in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Models/")," directory)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ShapeTracker")," for our program's entry point in ",(0,r.kt)("inlineCode",{parentName:"li"},"Program.cs"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ShapeTracker.UserInterfaceModels")," for our additional UI logic models (everything in the ",(0,r.kt)("inlineCode",{parentName:"li"},"UserInterfaceModels/")," directory).")),(0,r.kt)("p",null,"However, you might prefer to keep the namespaces simple, and just go for two: one for the UI logic and the other for business logic. This organizational decision is yours. The baseline requirement is that you organize your code into namespaces so that your code is scalable."),(0,r.kt)("p",null,"Finally, note that we are not including the ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," access modifier on the ",(0,r.kt)("inlineCode",{parentName:"p"},"WelcomeBanner"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"GoodbyeBanner"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"SubMenuBanner")," classes. That means each of these classes will default to the access modifier of ",(0,r.kt)("inlineCode",{parentName:"p"},"internal"),", which means that these classes are available publicly within this assembly, but not outside of the assembly. Why does this matter? The short answer is that we won't be testing our user interface logic, so this code only needs to be accessible within the ",(0,r.kt)("inlineCode",{parentName:"p"},"ShapeTracker")," folder. The long answer is that ",(0,r.kt)("inlineCode",{parentName:"p"},"ShapeTracker")," is one assembly, and when we write tests, we'll be creating a separate assembly; so any Shape Tracker code that we want accessible to our testing folder will need to have the ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," access modifier. We'll revisit this topic when we start writing tests."),(0,r.kt)("h3",{id:"verbatim-string-literals"},"Verbatim String Literals"),(0,r.kt)("p",null,"Before we move on, check out the above code snippet for ",(0,r.kt)("inlineCode",{parentName:"p"},"Banner.cs")," again. Take note of the ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," symbol in front of the string that contains the ",(0,r.kt)("inlineCode",{parentName:"p"},"Welcome")," banner. "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," symbol defines a ",(0,r.kt)("strong",{parentName:"p"},"verbatim string literal"),", which prints the string as-is, without changing formatting or evaluating any escape sequences. An example ",(0,r.kt)("strong",{parentName:"p"},"escape sequence")," is when we include ",(0,r.kt)("inlineCode",{parentName:"p"},"\\n")," within a string to momentarily escape the string, create a new line, and then go back to evaluating the string. Here's an example using the ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet-script")," REPL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'> Console.WriteLine("Hello\\nWorld");\nHello\nWorld\n> Console.WriteLine(@"Hello\\nWorld");\nHello\\nWorld\n')),(0,r.kt)("h3",{id:"ascii-banners"},"Ascii Banners"),(0,r.kt)("p",null,"Ascii text banners are a very cool way to decorate your console apps and create distinct sections within your UI. There's a lot of ascii text generators out there. ",(0,r.kt)("a",{parentName:"p",href:"https://manytools.org/hacker-tools/ascii-banner/"},"Here's one")," you can use in the projects you create."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Organizing code in C# is much the same as it is in JavaScript: we want to separate code by concern and use descriptive names. The big difference between the two languages is that C# has namespaces that we can use to further group code, beyond classes, files, and directories. "),(0,r.kt)("p",null,"For namespaces, keep in mind two things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We can reuse the same namespace across multiple files."),(0,r.kt)("li",{parentName:"ul"},"When classes are in the same namespace, they are in the same scope and automatically have access to each other.")))}h.isMDXComponent=!0}}]);