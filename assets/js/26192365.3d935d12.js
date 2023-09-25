"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[9119],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"MSTest Configuration Quick Reference",id:"mstest_configuration_quick_reference",slug:"mstest_configuration_quick_reference",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0k_mstest_configuration_quick_reference.md"},o=void 0,s={unversionedId:"c_and_net_part_time_evening/tdd-and-debugging/mstest_configuration_quick_reference",id:"c_and_net_part_time_evening/tdd-and-debugging/mstest_configuration_quick_reference",title:"MSTest Configuration Quick Reference",description:"This lesson is meant to be a handy reference for creating test-driven projects. We'll review what's needed to get MSTest up and running in a C# program, including naming conventions and requirements, project structure, best practices, and writing tests.",source:"@site/docs/c_and_net_part_time_evening/5_tdd-and-debugging/0k_mstest_configuration_quick_reference.md",sourceDirName:"c_and_net_part_time_evening/5_tdd-and-debugging",slug:"/c_and_net_part_time_evening/tdd-and-debugging/mstest_configuration_quick_reference",permalink:"/c_and_net_part_time_evening/tdd-and-debugging/mstest_configuration_quick_reference",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"MSTest Configuration Quick Reference",id:"mstest_configuration_quick_reference",slug:"mstest_configuration_quick_reference",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0k_mstest_configuration_quick_reference.md"},sidebar:"c_and_net_part_time_evening",previous:{title:"Part 2: Adding a Teardown Method and Completing the Tests for Static Class Members",permalink:"/c_and_net_part_time_evening/tdd-and-debugging/part_2_adding_a_teardown_method_and_completing_the_tests_for_static_class_members"},next:{title:"Debugging Tools",permalink:"/c_and_net_part_time_evening/tdd-and-debugging/debugging_tools"}},l={},c=[{value:"Project Structure",id:"project-structure",level:2},{value:"Add <code>.gitignore</code>, a <code>README.md</code>, and initialize Git",id:"add-gitignore-a-readmemd-and-initialize-git",level:3},{value:"<code>.csproj</code> Files",id:"csproj-files",level:3},{value:"Installing Packages",id:"installing-packages",level:3},{value:"Application Logic",id:"application-logic",level:3},{value:"Testing Files",id:"testing-files",level:3},{value:"Testing",id:"testing",level:2},{value:"Writing Tests",id:"writing-tests",level:3},{value:"Optionally Creating a Teardown Method",id:"optionally-creating-a-teardown-method",level:3},{value:"Running Tests",id:"running-tests",level:3},{value:"Continued Development",id:"continued-development",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This lesson is meant to be a handy reference for creating test-driven projects. We'll review what's needed to get MSTest up and running in a C# program, including naming conventions and requirements, project structure, best practices, and writing tests."),(0,i.kt)("h2",{id:"project-structure"},"Project Structure"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"MSTest requires we set up our project in a specific way:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a parent directory named ",(0,i.kt)("inlineCode",{parentName:"li"},"ProjectName.Solution"),". It's also okay to use ",(0,i.kt)("inlineCode",{parentName:"li"},"ProjectName")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"CompanyName")," instead, though we commonly use ",(0,i.kt)("inlineCode",{parentName:"li"},"ProjectName.Solution")," in the projects we create in LearnHowToProgram.com."),(0,i.kt)("li",{parentName:"ul"},"Within the parent directory, add two subdirectories:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ProjectName")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ProjectName.Tests")))),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"ProjectName")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"ProjectName.Tests"),' directories are different "versions" of our project. The first is our production project and the second is our test project.'),(0,i.kt)("li",{parentName:"ul"},"Each version of the project needs a ",(0,i.kt)("inlineCode",{parentName:"li"},".csproj")," configuration file.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Create a ",(0,i.kt)("inlineCode",{parentName:"li"},"ProjectName.csproj")," file in the ",(0,i.kt)("inlineCode",{parentName:"li"},"ProjectName")," subdirectory."),(0,i.kt)("li",{parentName:"ul"},"Create a ",(0,i.kt)("inlineCode",{parentName:"li"},"ProjectName.Tests.csproj")," file in the ",(0,i.kt)("inlineCode",{parentName:"li"},"ProjectName.Tests")," subdirectory.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"This is the standard naming convention and should be followed in all projects."),"  "),(0,i.kt)("p",null,"After following these steps, the directory should look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ProjectName.Solution/\n  \u251c\u2500\u2500 ProjectName/\n  \u2502     \u2514\u2500\u2500 ProjectName.csproj\n  \u2514\u2500\u2500 ProjectName.Tests/\n        \u2514\u2500\u2500 ProjectName.Tests.csproj\n")),(0,i.kt)("h3",{id:"add-gitignore-a-readmemd-and-initialize-git"},"Add ",(0,i.kt)("inlineCode",{parentName:"h3"},".gitignore"),", a ",(0,i.kt)("inlineCode",{parentName:"h3"},"README.md"),", and initialize Git"),(0,i.kt)("p",null,"We want to add a ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," to the parent directory as one of the very first activities we do when setting up our projects. Within the ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore"),", you should list the ",(0,i.kt)("inlineCode",{parentName:"p"},"obj")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"bin")," folders:"),(0,i.kt)("div",{class:"filename"},"ProjectName.Solution/.gitignore"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"obj\nbin\n")),(0,i.kt)("p",null,"The next step is to initialize Git with ",(0,i.kt)("inlineCode",{parentName:"p"},"git init"),", and then commit your ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ git add .gitignore\n$ git commit -m"add .gitignore"\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"README.md")," can realistically be added at any point, but don't forget it! "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ProjectName.Solution/\n  \u251c\u2500\u2500 ProjectName/\n  \u2502     \u2514\u2500\u2500 ProjectName.csproj\n  \u251c\u2500\u2500 ProjectName.Tests/\n  \u2502     \u2514\u2500\u2500 ProjectName.Tests.csproj\n  \u251c\u2500\u2500 .gitignore\n  \u2514\u2500\u2500 README.md\n")),(0,i.kt)("h3",{id:"csproj-files"},(0,i.kt)("inlineCode",{parentName:"h3"},".csproj")," Files"),(0,i.kt)("p",null,"Our ",(0,i.kt)("inlineCode",{parentName:"p"},".csproj")," files list all outside packages or dependencies a project requires. In this section, our ",(0,i.kt)("inlineCode",{parentName:"p"},".csproj")," files will contain the following:"),(0,i.kt)("div",{class:"filename"},"ProjectName.Solution/ProjectName/ProjectName.csproj"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'<Project Sdk="Microsoft.NET.Sdk">\n\n  <PropertyGroup>\n    <TargetFramework>net6.0</TargetFramework>\n    <OutputType>Exe</OutputType> // This is only needed if your project has a user interface. Read more below.\n  </PropertyGroup>\n\n</Project>\n')),(0,i.kt)("div",{class:"filename"},"ProjectName.Solution/ProjectName.Tests/ProjectName.Tests.csproj"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'<Project Sdk="Microsoft.NET.Sdk">\n\n  <PropertyGroup>\n    <TargetFramework>net6.0</TargetFramework>\n  </PropertyGroup>\n  <ItemGroup>\n    <PackageReference Include="Microsoft.NET.Test.Sdk" Version="17.3.2" />\n    <PackageReference Include="MSTest.TestAdapter" Version="2.2.10" />\n    <PackageReference Include="MSTest.TestFramework" Version="2.2.10" />\n  </ItemGroup>\n\n  <ItemGroup>\n    <ProjectReference Include="..\\ProjectName\\ProjectName.csproj" />  \n  </ItemGroup>\n\n</Project>\n')),(0,i.kt)("p",null,"Keep in mind that your ",(0,i.kt)("inlineCode",{parentName:"p"},".csproj")," should only include an ",(0,i.kt)("inlineCode",{parentName:"p"},"OutputType")," if you have a user interface consisting of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs")," file with a ",(0,i.kt)("inlineCode",{parentName:"p"},"Main()")," method. When you include an ",(0,i.kt)("inlineCode",{parentName:"p"},"OutputType")," before you have a user interface, ",(0,i.kt)("strong",{parentName:"p"},"attempting to compile your project to test your classes will throw an error.")),(0,i.kt)("p",null,"Also, ",(0,i.kt)("strong",{parentName:"p"},"don't forget to update the boilerplate value for the ",(0,i.kt)("inlineCode",{parentName:"strong"},"<ProjectReference>"))," (within the above code snippet) for the ",(0,i.kt)("inlineCode",{parentName:"p"},"ProjectName.Tests/ProjectName.Tests.csproj")," project file."),(0,i.kt)("h3",{id:"installing-packages"},"Installing Packages"),(0,i.kt)("p",null,"We use the NuGet package manager to install the packages listed in our ",(0,i.kt)("inlineCode",{parentName:"p"},".csproj")," files. For now, only the test project's ",(0,i.kt)("inlineCode",{parentName:"p"},".csproj")," contains outside packages."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to the ",(0,i.kt)("inlineCode",{parentName:"li"},"ProjectName.Tests")," directory."),(0,i.kt)("li",{parentName:"ul"},"Run the command ",(0,i.kt)("inlineCode",{parentName:"li"},"$ dotnet restore"),".")),(0,i.kt)("p",null,"This will create ",(0,i.kt)("inlineCode",{parentName:"p"},"obj")," directories in both production and test projects. ",(0,i.kt)("strong",{parentName:"p"},"Do not touch this code"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ProjectName.Solution/\n  \u251c\u2500\u2500 ProjectName/\n  \u2502     \u251c\u2500\u2500 ProjectName.csproj\n  \u2502     \u2514\u2500\u2500 obj/\n  \u2502           \u251c\u2500\u2500 ProjectName.csproj.nuget.cache\n  \u2502           \u251c\u2500\u2500 ProjectName.csproj.nuget.g.props\n  \u2502           \u251c\u2500\u2500 ProjectName.csproj.nuget.g.targets\n  \u2502           \u2514\u2500\u2500 project.assets.json\n  \u251c\u2500\u2500 ProjectName.Tests/\n  \u2502     \u251c\u2500\u2500 ProjectName.Tests.csproj\n  \u2502     \u2514\u2500\u2500 obj/\n  \u2502           \u251c\u2500\u2500 ProjectName.Tests.csproj.nuget.cache\n  \u2502           \u251c\u2500\u2500 ProjectName.Tests.csproj.nuget.g.props\n  \u2502           \u251c\u2500\u2500 ProjectName.Tests.csproj.nuget.g.targets\n  \u2502           \u2514\u2500\u2500 project.assets.json\n  \u251c\u2500\u2500 .gitignore\n  \u2514\u2500\u2500 README.md\n")),(0,i.kt)("h3",{id:"application-logic"},"Application Logic"),(0,i.kt)("p",null,"Next we create the model files (business logic) where our application source code will reside."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In the production project (",(0,i.kt)("inlineCode",{parentName:"li"},"ProjectName.Solution/ProjectName"),"), create a ",(0,i.kt)("inlineCode",{parentName:"li"},"Models")," subdirectory."),(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"Models")," subdirectory, create a file to contain the class relevant to your project.")),(0,i.kt)("p",null,"The resulting file structure should look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ProjectName.Solution/\n  \u251c\u2500\u2500 ProjectName/\n  \u2502     \u251c\u2500\u2500 ProjectName.csproj\n  \u2502     \u251c\u2500\u2500 Models/\n  \u2502     \u2502     \u2514\u2500\u2500 ClassName.cs\n  \u2502     \u2514\u2500\u2500 obj/\n  \u2502           \u2514\u2500\u2500 (omitted for brevity)\n  \u251c\u2500\u2500 ProjectName.Tests/\n  \u2502     \u251c\u2500\u2500 ProjectName.Tests.csproj\n  \u2502     \u2514\u2500\u2500 obj/\n  \u2502           \u2514\u2500\u2500 (omitted for brevity)\n  \u251c\u2500\u2500 .gitignore\n  \u2514\u2500\u2500 README.md\n")),(0,i.kt)("p",null,"In this class file, make sure of two things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The namespace follows the naming convention ",(0,i.kt)("inlineCode",{parentName:"li"},"ProjectName.Models"),". "),(0,i.kt)("li",{parentName:"ul"},"The business logic class is ",(0,i.kt)("inlineCode",{parentName:"li"},"public"),", so that our testing directory can access the code inside. "),(0,i.kt)("li",{parentName:"ul"},"Often the name of the class matches the name of the file, but this does not have to be the case.")),(0,i.kt)("p",null,"For instance:"),(0,i.kt)("div",{class:"filename"},"ProjectName.Solution/ProjectName/Models/ClassName.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ProjectName.Models\n{\n  public class ClassName\n  {\n    // properties, constructors, methods, etc. go here\n  }\n}\n")),(0,i.kt)("h3",{id:"testing-files"},"Testing Files"),(0,i.kt)("p",null,"We'll save all our test files in a specific directory. Follow these steps to set up a testing file:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"ProjectName.Solution/ProjectName.Tests"),", create a ",(0,i.kt)("inlineCode",{parentName:"li"},"ModelTests")," directory."),(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"ModelTests")," directory, create a test file whose name matches the class name of the business logic you will be testing (what you created in the last step). ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For example, if we have a business logic file called  ",(0,i.kt)("inlineCode",{parentName:"li"},"Puppy.cs")," in our ",(0,i.kt)("inlineCode",{parentName:"li"},"ProjectName/Models")," directory that contains a ",(0,i.kt)("inlineCode",{parentName:"li"},"Puppy")," class, the corresponding test file should be called ",(0,i.kt)("inlineCode",{parentName:"li"},"PuppyTests.cs"),". "),(0,i.kt)("li",{parentName:"ul"},"Note that the file naming convention is to pluralize ",(0,i.kt)("inlineCode",{parentName:"li"},"Tests"),".")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ProjectName.Solution/\n  \u251c\u2500\u2500 ProjectName/\n  \u2502     \u251c\u2500\u2500 ProjectName.csproj\n  \u2502     \u251c\u2500\u2500 Models/\n  \u2502     \u2502     \u2514\u2500\u2500 ClassName.cs\n  \u2502     \u2514\u2500\u2500 obj/\n  \u2502           \u2514\u2500\u2500 (omitted for brevity)\n  \u251c\u2500\u2500 ProjectName.Tests/\n  \u2502     \u251c\u2500\u2500 ProjectName.Tests.csproj\n  |     \u251c\u2500\u2500 ModeTests/\n  |     \u2502     \u2514\u2500\u2500 ClassNameTests.cs\n  \u2502     \u2514\u2500\u2500 obj/\n  \u2502           \u2514\u2500\u2500 (omitted for brevity)\n  \u251c\u2500\u2500 .gitignore\n  \u2514\u2500\u2500 README.md\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ClassNameTests.cs")," test file will have the following basic structure:"),(0,i.kt)("div",{class:"filename"},"ProjectName.Solution/ProjectName.Tests/ModelTests/ClassNameTests.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.VisualStudio.TestTools.UnitTesting;\nusing ProjectName.Models;\n\nnamespace ProjectName.Tests\n{\n  [TestClass]\n  public class ClassNameTests\n  {\n    // Test methods go here\n  }\n}\n")),(0,i.kt)("p",null,"Notice the instances of ",(0,i.kt)("inlineCode",{parentName:"p"},"ProjectName")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ClassName")," in the boilerplate code above. Like all other instances of ",(0,i.kt)("inlineCode",{parentName:"p"},"ProjectName")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ClassName")," in this lesson, ",(0,i.kt)("strong",{parentName:"p"},"these must be changed to match the name of your specific project"),"."),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"writing-tests"},"Writing Tests"),(0,i.kt)("p",null,"Test methods follow this general structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"[TestMethod]\npublic void NameOfMethodWeAreTesting_DescriptionOfBehavior_ExpectedReturnValue()\n{\n  // any necessary logic to prep for test; instantiating new classes, etc.\n  // we can also use the arrange, act, assert organization in any test. \n  Assert.AreEqual(ExpectedResult, CodeToTest);\n}\n")),(0,i.kt)("p",null,"We can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"CollectionAssert.AreEqual()")," method to test and compare two collections (like arrays, lists, or dictionaries). Anytime we use a list or dictionary, we need to remember to include the using directive ",(0,i.kt)("inlineCode",{parentName:"p"},"using System.Collections.Generic;"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"[TestMethod]\npublic void NameOfMethodWeAreTesting_DescriptionOfBehavior_ExpectedReturnValue()\n{\n  // any necessary logic to prep for test; instantiating new classes, etc.\n  // we can also use the arrange, act, assert organization in any test. \n  CollectionAssert.AreEqual(ExpectedResult, CodeToTest);\n}\n")),(0,i.kt)("h3",{id:"optionally-creating-a-teardown-method"},"Optionally Creating a Teardown Method"),(0,i.kt)("p",null,"To create a teardown method that runs between each test we need to do a few things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add a new using directive for ",(0,i.kt)("inlineCode",{parentName:"li"},"using System;"),"."),(0,i.kt)("li",{parentName:"ul"},"Extend the ",(0,i.kt)("inlineCode",{parentName:"li"},"ClassNameTests")," class with the ",(0,i.kt)("inlineCode",{parentName:"li"},"IDisposable")," interface."),(0,i.kt)("li",{parentName:"ul"},"Create a ",(0,i.kt)("inlineCode",{parentName:"li"},"public void Dispose()")," method. Within the method body, we can put whatever code we want to run in between each test. Typically, we use the ",(0,i.kt)("inlineCode",{parentName:"li"},"Dispose()")," method to clear static fields or properties between each test. ")),(0,i.kt)("div",{class:"filename"},"ProjectName.Solution/ProjectName.Tests/ModelTests/ClassNameTests.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.VisualStudio.TestTools.UnitTesting;\nusing ProjectName.Models;\nusing System;\n\nnamespace ProjectName.Tests\n{\n  [TestClass]\n  public class ClassNameTests : IDisposable\n  {\n    public void Dispose()\n    {\n      // Code inside this method is run between each test.\n    }\n\n    // Test methods go here\n  }\n}\n")),(0,i.kt)("h3",{id:"running-tests"},"Running Tests"),(0,i.kt)("p",null,"We can run our tests by navigating to our test project in the terminal (",(0,i.kt)("inlineCode",{parentName:"p"},"ProjectName.Solution/ProjectName.Tests"),") and running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet test\n")),(0,i.kt)("p",null,"This will print a report in the terminal of our tests and whether they pass or fail. Any failing tests will include details about their failure."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet test")," command will also create a ",(0,i.kt)("inlineCode",{parentName:"p"},"bin")," folder with executable files that MSTest needs to run in order to run our tests and print a report to the terminal. "),(0,i.kt)("h3",{id:"continued-development"},"Continued Development"),(0,i.kt)("p",null,"Once the project is configured using the steps above, use TDD and the RGR workflow to build out your business logic."),(0,i.kt)("p",null,"Happy coding!"))}u.isMDXComponent=!0}}]);