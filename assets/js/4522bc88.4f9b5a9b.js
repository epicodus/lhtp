"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[45951],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},38664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"3. MSTest Configuration and Setup",id:"mstest_configuration_and_setup",slug:"mstest_configuration_and_setup",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/5_tdd-and-debugging/0c_mstest_configuration_and_setup.md"},i=void 0,s={unversionedId:"c_and_net_part_time_evening/tdd-and-debugging/mstest_configuration_and_setup",id:"c_and_net_part_time_evening/tdd-and-debugging/mstest_configuration_and_setup",title:"3. MSTest Configuration and Setup",description:"Now that we have a refresher on Test-Driven Development (TDD), the Red, Green, Refactor (RGR) workflow, and testing best practices, we're ready to start using MSTest to write automated unit tests. For practice, we're going to revisit the Shape Tracker app and rebuild our Triangle class from nothing using TDD. In this lesson, we'll start by setting up the files, folders, and configurations for MSTest.",source:"@site/docs/c_and_net_part_time_evening/5_tdd-and-debugging/0c_mstest_configuration_and_setup.md",sourceDirName:"c_and_net_part_time_evening/5_tdd-and-debugging",slug:"/c_and_net_part_time_evening/tdd-and-debugging/mstest_configuration_and_setup",permalink:"/lhtp/c_and_net_part_time_evening/tdd-and-debugging/mstest_configuration_and_setup",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"3. MSTest Configuration and Setup",id:"mstest_configuration_and_setup",slug:"mstest_configuration_and_setup",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/5_tdd-and-debugging/0c_mstest_configuration_and_setup.md"},sidebar:"c_and_net_part_time_evening",previous:{title:"2. Review: the Red, Green, Refactor Workflow and Testing Best Practices",permalink:"/lhtp/c_and_net_part_time_evening/tdd-and-debugging/review_the_red_green_refactor_workflow_and_testing_best_practices"},next:{title:"4. Using the RGR Workflow to Write our First Test for the Constructor",permalink:"/lhtp/c_and_net_part_time_evening/tdd-and-debugging/using_the_rgr_workflow_to_write_our_first_test_for_the_constructor"}},l={},p=[{value:"Setting Up a Project to Use MSTest",id:"setting-up-a-project-to-use-mstest",level:2},{value:"Directory Structure Setup",id:"directory-structure-setup",level:3},{value:"The Project File (<code>.csproj</code>) for Tests",id:"the-project-file-csproj-for-tests",level:3},{value:"Two Separate Projects = Two Assemblies",id:"two-separate-projects--two-assemblies",level:3},{value:"Acquiring and Installing Packages",id:"acquiring-and-installing-packages",level:3},{value:"Note on <code>restore</code> Commands",id:"note-on-restore-commands",level:3},{value:"Test Folder and File(s)",id:"test-folder-and-files",level:3},{value:"Boilerplate for our Test File",id:"boilerplate-for-our-test-file",level:3},{value:"Running Our Tests",id:"running-our-tests",level:3},{value:"Repository Reference",id:"repository-reference",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now that we have a refresher on Test-Driven Development (TDD), the Red, Green, Refactor (RGR) workflow, and testing best practices, we're ready to start using MSTest to write automated unit tests. For practice, we're going to revisit the Shape Tracker app and rebuild our ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," class from nothing using TDD. In this lesson, we'll start by setting up the files, folders, and configurations for MSTest."),(0,a.kt)("p",null,"You are welcome to code along with this pre-work, or just read through it. If you decide to code along with this pre-work walkthrough, you can use the Shape Tracker project you completed in the previous pre-work section, or clone down ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/epicodus-lessons/prework-shape-tracker-csharp-net6"},"the completed Shape Tracker console app from branch ",(0,a.kt)("inlineCode",{parentName:"a"},"6_class_properties")),". "),(0,a.kt)("p",null,"GitHub repository references for building the Shape Tracker ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," business logic with TDD will be provided periodically."),(0,a.kt)("h2",{id:"setting-up-a-project-to-use-mstest"},"Setting Up a Project to Use MSTest"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Let's walk through how to set up MSTest in our own C# projects."),(0,a.kt)("h3",{id:"directory-structure-setup"},"Directory Structure Setup"),(0,a.kt)("p",null,"Within the parent directory ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Solution"),", create a new subdirectory called ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests"),"."),(0,a.kt)("p",null,"The directory structure will look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ShapeTracker.Solution/\n  \u251c\u2500\u2500 ShapeTracker/\n  \u251c\u2500\u2500 ShapeTracker.Tests/\n  \u251c\u2500\u2500 README.md\n  \u2514\u2500\u2500 .gitignore\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ShapeTracker.Solution")," is the parent directory where all our code lives:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ShapeTracker")," will hold our application logic. This is sometimes referred to as the ",(0,a.kt)("strong",{parentName:"li"},"production")," project because it contains the code that will actually run when we launch the program."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ShapeTracker.Tests")," will hold all of our automated tests. We should always append a ",(0,a.kt)("inlineCode",{parentName:"li"},".Tests")," suffix to this directory.")))),(0,a.kt)("h3",{id:"the-project-file-csproj-for-tests"},"The Project File (",(0,a.kt)("inlineCode",{parentName:"h3"},".csproj"),") for Tests"),(0,a.kt)("p",null,"Next, we'll create the project file for ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests"),". The project file will contain package references for MSTest, standard configurations, as well as a reference to our production project. "),(0,a.kt)("p",null,"Create a new file called ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests.csproj")," within the ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests")," directory, so that the file and folder structure looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ShapeTracker.Solution/\n  \u251c\u2500\u2500 ShapeTracker/\n  \u251c\u2500\u2500 ShapeTracker.Tests/\n  \u2502     \u2514\u2500\u2500 ShapeTracker.Tests.csproj\n  \u251c\u2500\u2500 README.md\n  \u2514\u2500\u2500 .gitignore\n")),(0,a.kt)("p",null,"Next, and add the following code to the new ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests.csproj")," file:"),(0,a.kt)("div",{class:"filename"},"ShapeTracker.Solution/ShapeTracker.Tests/ShapeTracker.Tests.csproj"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'<Project Sdk="Microsoft.NET.Sdk">\n\n  <PropertyGroup>\n    <TargetFramework>net6.0</TargetFramework>\n  </PropertyGroup>\n  <ItemGroup>\n    <PackageReference Include="Microsoft.NET.Test.Sdk" Version="17.3.2" />\n    <PackageReference Include="MSTest.TestAdapter" Version="2.2.10" />\n    <PackageReference Include="MSTest.TestFramework" Version="2.2.10" />\n  </ItemGroup>\n\n  <ItemGroup>\n    <ProjectReference Include="..\\ShapeTracker\\ShapeTracker.csproj" />  \n  </ItemGroup>\n\n</Project>\n')),(0,a.kt)("p",null,"Take note of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We use the same ",(0,a.kt)("inlineCode",{parentName:"li"},"Sdk")," as in our production project: ",(0,a.kt)("inlineCode",{parentName:"li"},'"Microsoft.NET.Sdk"'),"."),(0,a.kt)("li",{parentName:"ul"},"We list the target framework configuration (",(0,a.kt)("inlineCode",{parentName:"li"},"net6.0"),"), but not the output type (",(0,a.kt)("inlineCode",{parentName:"li"},"<OutputType>Exe</OutputType>"),"). That's because our test directory doesn't have a user interface (UI) and we won't be running this project with ",(0,a.kt)("inlineCode",{parentName:"li"},"dotnet run"),". We only include an output type when we have a UI to run. "),(0,a.kt)("li",{parentName:"ul"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},"<ItemGroup>")," area, we import three packages, each in special ",(0,a.kt)("inlineCode",{parentName:"li"},"<PackageReference>")," tags:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Microsoft.NET.Test.Sdk")," imports functionality to set up and build our testing environment;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MSTest.TestAdapter")," will run our tests for us;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MSTest.TestFramework")," allows us to create test classes and methods and to use other built-in code to construct tests."))),(0,a.kt)("li",{parentName:"ul"},"In the second ",(0,a.kt)("inlineCode",{parentName:"li"},"<ItemGroup>")," element, our test project references our main production project. This allows our tests to locate and use the namespaces of our production project without interfering with it.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You can use all of the above code as boilerplate in the testing directory's project file for all future projects, except for the project reference value, which you will need to update.")),(0,a.kt)("h3",{id:"two-separate-projects--two-assemblies"},"Two Separate Projects = Two Assemblies"),(0,a.kt)("p",null,"It's important to understand that our production project ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker")," and test project ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests")," are actually two separate projects that live within the same parent directory. We know that these two projects are separate because they each have their own project ",(0,a.kt)("inlineCode",{parentName:"p"},".csproj")," file. "),(0,a.kt)("p",null,"In more technical terms, we would describe these projects as two separate assemblies. An ",(0,a.kt)("strong",{parentName:"p"},"assembly")," is a collection of types and resources that form a program, which is saved to a ",(0,a.kt)("inlineCode",{parentName:"p"},".exe")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".dll")," file within our ",(0,a.kt)("inlineCode",{parentName:"p"},"bin")," folder. We know ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests")," are two assemblies because they have separate project files, and they also have their own ",(0,a.kt)("inlineCode",{parentName:"p"},"obj")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"bin")," folders (which we'll see soon). "),(0,a.kt)("p",null,"Because we're working with code between two assemblies, we need to pay a bit more attention to the ",(0,a.kt)("strong",{parentName:"p"},"access modifiers")," (like ",(0,a.kt)("inlineCode",{parentName:"p"},"public")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"private"),") we use in our production ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker")," project. If we want to access code in our production assembly ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker")," from our test assembly ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests"),", we need to make sure that code has a ",(0,a.kt)("inlineCode",{parentName:"p"},"public")," access modifier. This is why our ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," business logic class is ",(0,a.kt)("inlineCode",{parentName:"p"},"public")," \u2014 so that we can access that code from our test assembly in ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests"),".  "),(0,a.kt)("h3",{id:"acquiring-and-installing-packages"},"Acquiring and Installing Packages"),(0,a.kt)("p",null,"Now that our ",(0,a.kt)("inlineCode",{parentName:"p"},".csproj")," file is complete, we need to add these tools to our project. Navigate into the ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests")," folder in the command line and run the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet restore\n")),(0,a.kt)("p",null,"This command tells ",(0,a.kt)("strong",{parentName:"p"},"NuGet"),", a free open source package manager that comes with .NET, to retrieve and install the packages we listed in ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests.csproj")," in our application. This command automatically creates new ",(0,a.kt)("inlineCode",{parentName:"p"},"obj")," directories in both our ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests")," project, each containing multiple files."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"obj")," directory in ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests")," might look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ShapeTracker.Solution\n  \u251c\u2500\u2500 ShapeTracker/\n  \u251c\u2500\u2500 ShapeTracker.Tests/\n  \u2502     \u251c\u2500\u2500 ShapeTracker.Tests.csproj\n  \u2502     \u2514\u2500\u2500 obj/\n  \u2502           \u251c\u2500\u2500 ShapeTracker.Tests.csproj.nuget.cache\n  \u2502           \u251c\u2500\u2500 ShapeTracker.Tests.csproj.nuget.g.props\n  \u2502           \u251c\u2500\u2500 ShapeTracker.Tests.csproj.nuget.g.targets\n  \u2502           \u2514\u2500\u2500 project.assets.json\n  \u251c\u2500\u2500 README.md\n  \u2514\u2500\u2500 .gitignore\n")),(0,a.kt)("p",null,"These files contain detailed references and configuration instructions that our program will reference later on. Depending on your machine, you may have differently named files in this folder. They contain special internal code and we won't need to interact with these files for the most part. For now, simply leave them alone. If these files are accidentally deleted or modified, they can be restored with ",(0,a.kt)("inlineCode",{parentName:"p"},"$ dotnet restore")," command."),(0,a.kt)("h3",{id:"note-on-restore-commands"},"Note on ",(0,a.kt)("inlineCode",{parentName:"h3"},"restore")," Commands"),(0,a.kt)("p",null,"Keep in mind that ",(0,a.kt)("strong",{parentName:"p"},"anytime we update a ",(0,a.kt)("inlineCode",{parentName:"strong"},".csproj")," file, we need to run ",(0,a.kt)("inlineCode",{parentName:"strong"},"dotnet restore")," to download and install updated packages"),"."),(0,a.kt)("p",null,"It's also ",(0,a.kt)("strong",{parentName:"p"},"essential to ensure that we run console commands within the correct project.")," In this case, we need to be running the command in our ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests")," folder. If our terminal is located in the root directory of the project, we can run commands that specify an individual project like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet restore ShapeTracker.Tests\n")),(0,a.kt)("h3",{id:"test-folder-and-files"},"Test Folder and File(s)"),(0,a.kt)("p",null,"Next, we'll create the folder and file that will hold the tests for our ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," class. Within the ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests")," directory, create a subdirectory called ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelTests"),". Within ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelTests")," add a new file called ",(0,a.kt)("inlineCode",{parentName:"p"},"TriangleTests.cs"),". The new file/folder structure should look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ShapeTracker.Solution\n  \u251c\u2500\u2500 ShapeTracker/\n  \u251c\u2500\u2500 ShapeTracker.Tests/\n  |     \u251c\u2500\u2500 ModelTests/\n  |     |     \u2514\u2500\u2500 TriangleTests.cs\n  \u2502     \u2514\u2500\u2500 ShapeTracker.Tests.csproj\n  \u251c\u2500\u2500 README.md\n  \u2514\u2500\u2500 .gitignore\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelTests")," subdirectory will hold one or more files for tests related to our Shape Tracker models. We only have one model, ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle"),", so we only have one test file: ",(0,a.kt)("inlineCode",{parentName:"p"},"TriangleTests.cs"),". "),(0,a.kt)("p",null,"If we later decided to expand our Shape Tracker app and add more models, they would each have a test file within the ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelTests")," subdirectory. For example, if we created ",(0,a.kt)("inlineCode",{parentName:"p"},"Ellipse")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Rectangle")," models, we'd create two more test files, ",(0,a.kt)("inlineCode",{parentName:"p"},"EllipseTests.cs")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"RectangleTests.cs"),". We won't add those files now, but for reference, here's what that would look like: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ShapeTracker.Solution\n  \u251c\u2500\u2500 ShapeTracker/\n  \u251c\u2500\u2500 ShapeTracker.Tests/\n  |     \u251c\u2500\u2500 ModelTests/\n  |     |     \u251c\u2500\u2500 EllipseTests.cs\n  |     |     \u251c\u2500\u2500 RectangleTests.cs\n  |     |     \u2514\u2500\u2500 TriangleTests.cs\n  \u2502     \u2514\u2500\u2500 ShapeTracker.Tests.csproj\n  \u251c\u2500\u2500 README.md\n  \u2514\u2500\u2500 .gitignore\n")),(0,a.kt)("h3",{id:"boilerplate-for-our-test-file"},"Boilerplate for our Test File"),(0,a.kt)("p",null,"Let's set up just the basics for our ",(0,a.kt)("inlineCode",{parentName:"p"},"TriangleTests.cs")," test file. The code we'll add now is boilerplate that can be added to all test files, save for a change in class and namespace names. "),(0,a.kt)("div",{class:"filename"},"ShapeTracker.Solution/ShapeTracker.Tests/ModelTests/TriangleTests.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.VisualStudio.TestTools.UnitTesting;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker.Tests\n{\n  [TestClass]\n  public class TriangleTests\n  {\n    // Tests will go here!\n  }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"using Microsoft.VisualStudio.TestTools.UnitTesting")," imports the MSTest framework that we installed with the ",(0,a.kt)("inlineCode",{parentName:"p"},"$ dotnet restore")," command.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"using ShapeTracker.Models;")," imports the ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Models")," namespace from the ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker")," project for use in our tests.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"[TestClass]")," tells MSTest that the following class contains tests to be run."))),(0,a.kt)("h3",{id:"running-our-tests"},"Running Our Tests"),(0,a.kt)("p",null,"At this point, we can now try running tests. And yes, even though we don't have any tests yet, we can still learn something from the process: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The command to run tests."),(0,a.kt)("li",{parentName:"ul"},"How MSTest generates a ",(0,a.kt)("inlineCode",{parentName:"li"},"bin")," folder with its own executable files in order to run the tests. "),(0,a.kt)("li",{parentName:"ul"},"The MSTest terminal output when there are no tests.")),(0,a.kt)("p",null,"Let's try it out. In the command line, navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests")," directory and enter the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ dotnet test\n")),(0,a.kt)("p",null,"If we carefully read the terminal output, we'll see that this command runs ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet restore"),". That means we don't have to run ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet restore")," separately from ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet test")," if we don't need to. "),(0,a.kt)("p",null,"We'll also see that a ",(0,a.kt)("inlineCode",{parentName:"p"},"bin")," folder is generated when we run ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet test"),". This new ",(0,a.kt)("inlineCode",{parentName:"p"},"bin")," folder contains executable files that MSTest uses to run tests and create output in our terminal. This is in contrast to the ",(0,a.kt)("inlineCode",{parentName:"p"},"bin")," folder within our ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker")," directory which contains executable files that will run our Shape Tracker user interface. Remember, ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests")," are two separate projects/assemblies."),(0,a.kt)("p",null,"Finally, we'll see this message from MSTest letting us know there are no tests to run!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Test run for C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\bin\\Debug\\net6.0\\ShapeTracker.Tests.dll (.NETCoreApp,Version=v6.0)\nMicrosoft (R) Test Execution Command Line Tool Version 17.3.1 (x64)\nCopyright (c) Microsoft Corporation.  All rights reserved.\n\nStarting test execution, please wait...\nA total of 1 test files matched the specified pattern.\nNo test is available in C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\bin\\Debug\\net6.0\\ShapeTracker.Tests.dll. Make sure that test discoverer & executors are registered and platform & framework version settings are appropriate and try again.\n")),(0,a.kt)("p",null,"Well that makes sense... We have a test file and class, but no tests within. Let's change that! In the next lesson, we'll write and run our first test."),(0,a.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,a.kt)("p",null,"Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to the default branch in the repository. Also note the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"UI Logic in ",(0,a.kt)("inlineCode",{parentName:"li"},"Program.cs")," has been commented out. "),(0,a.kt)("li",{parentName:"ul"},"The logic within the ",(0,a.kt)("inlineCode",{parentName:"li"},"Triangle")," class has been removed. (Remember \u2014 we're starting from scratch!)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/prework-TDD-with-shape-tracker-csharp-net6"},(0,a.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for TDD with Shape Tracker: ",(0,a.kt)("inlineCode",{parentName:"a"},"1_mstest_setup")))))}u.isMDXComponent=!0}}]);