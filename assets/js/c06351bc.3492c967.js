"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[25247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=o,h=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},10243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={title:"Connecting a Database to an ASP.NET Core App with MySqlConnector",id:"connecting_a_database_to_an_aspnet_core_app_with_mysqlconnector",slug:"connecting_a_database_to_an_aspnet_core_app_with_mysqlconnector",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/10_database-basics/0f_creating_the_database_object.md"},r=void 0,s={unversionedId:"c_and_net_part_time_evening/database-basics/connecting_a_database_to_an_aspnet_core_app_with_mysqlconnector",id:"c_and_net_part_time_evening/database-basics/connecting_a_database_to_an_aspnet_core_app_with_mysqlconnector",title:"Connecting a Database to an ASP.NET Core App with MySqlConnector",description:"In the last lesson, we created a database for our To Do List using MySQL Workbench. In this lesson, we'll connect the database to our application using a tool called MySqlConnector. Once connected, we'll be able to interact with our database and its tables as C# objects in our application.",source:"@site/docs/c_and_net_part_time_evening/10_database-basics/0f_creating_the_database_object.md",sourceDirName:"c_and_net_part_time_evening/10_database-basics",slug:"/c_and_net_part_time_evening/database-basics/connecting_a_database_to_an_aspnet_core_app_with_mysqlconnector",permalink:"/lhtp/c_and_net_part_time_evening/database-basics/connecting_a_database_to_an_aspnet_core_app_with_mysqlconnector",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Connecting a Database to an ASP.NET Core App with MySqlConnector",id:"connecting_a_database_to_an_aspnet_core_app_with_mysqlconnector",slug:"connecting_a_database_to_an_aspnet_core_app_with_mysqlconnector",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/10_database-basics/0f_creating_the_database_object.md"},sidebar:"c_and_net_part_time_evening",previous:{title:"Introduction to MySQL Workbench: Creating a Database",permalink:"/lhtp/c_and_net_part_time_evening/database-basics/introduction_to_mysql_workbench_creating_a_database"},next:{title:"Retrieving Objects From the Database",permalink:"/lhtp/c_and_net_part_time_evening/database-basics/retrieving_objects_from_the_database"}},l={},c=[{value:"To Do List Database Refactor Plan",id:"to-do-list-database-refactor-plan",level:2},{value:"Project Structure &amp; Configuration",id:"project-structure--configuration",level:2},{value:"MySqlConnector Installation &amp; Configuration",id:"mysqlconnector-installation--configuration",level:2},{value:"Installing the MySqlConnector Package",id:"installing-the-mysqlconnector-package",level:3},{value:"Creating a Database Connection String",id:"creating-a-database-connection-string",level:3},{value:"Protecting the Database Connection String with <code>appsettings.json</code>",id:"protecting-the-database-connection-string-with-appsettingsjson",level:3},{value:"Accessing <code>appsettings.json</code> through <code>builder.Configuration</code> in <code>Program.cs</code>",id:"accessing-appsettingsjson-through-builderconfiguration-in-programcs",level:3},{value:"Making the Connection String Available throughout the App",id:"making-the-connection-string-available-throughout-the-app",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the last lesson, we created a database for our To Do List using MySQL Workbench. In this lesson, we'll connect the database to our application using a tool called ",(0,o.kt)("strong",{parentName:"p"},"MySqlConnector"),". Once connected, we'll be able to interact with our database and its tables as C# objects in our application."),(0,o.kt)("p",null,"First, let's think about how we'll refactor our To Do List app to use a database."),(0,o.kt)("h2",{id:"to-do-list-database-refactor-plan"},"To Do List Database Refactor Plan"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The rest of the weekend homework will focus on building methods to access and update our database from scratch. This process is labor-intensive and involves a lot of tedious boilerplate code. Later in this section, we'll learn to use a framework called Entity Framework Core that manages our database connection and provides easy-to-use methods to access and update our database. The goal of building database methods from scratch now is to to get an understanding of what is really going on under the hood before we start using Entity Framework Core."),(0,o.kt)("p",null,"You are welcome to code along with these lessons, or simply to read through them. At the end of this walkthrough, we'll provide an example repo with the finished project. If you'd like to get a sense of ",(0,o.kt)("strong",{parentName:"p"},"the finished project")," in advance, go ahead and take a look at the following repo:"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-3-to-do-list-with-mysqlconnector-csharp-net6"},(0,o.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Example GitHub Repo for To Do List with MySqlConnector"))),(0,o.kt)("h2",{id:"project-structure--configuration"},"Project Structure & Configuration"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Let's start refactoring our To Do List app to use a MySQL database. After following along with last section's lessons, our To Do List's file and folder structure should look like this:"),(0,o.kt)("pre",null,"ToDoList.Solution \u251c\u2500\u2500 ToDoList \u2502\xa0\xa0 \u251c\u2500\u2500 Controllers \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 CategoriesController.cs \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 HomeController.cs \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 ItemsController.cs \u2502\xa0\xa0 \u251c\u2500\u2500 Models \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Category.cs \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Item.cs \u2502\xa0\xa0 \u251c\u2500\u2500 Program.cs \u2502   \u251c\u2500\u2500 Properties \u2502   \u2502   \u2514\u2500\u2500 launchSettings.json \u2502\xa0\xa0 \u251c\u2500\u2500 ToDoList.csproj \u2502\xa0\xa0 \u2514\u2500\u2500 Views \u2502\xa0\xa0     \u251c\u2500\u2500 Categories \u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 Index.cshtml \u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 New.cshtml \u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 Show.cshtml \u2502\xa0\xa0     \u251c\u2500\u2500 Home \u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 Index.cshtml \u2502\xa0\xa0     \u2514\u2500\u2500 Items \u2502\xa0\xa0         \u251c\u2500\u2500 New.cshtml \u2502\xa0\xa0         \u2514\u2500\u2500 Show.cshtml \u2514\u2500\u2500 ToDoList.Tests \u251c\u2500\u2500 ModelTests \u2502\xa0\xa0 \u251c\u2500\u2500 CategoryTests.cs \u2502\xa0\xa0 \u2514\u2500\u2500 ItemTests.cs \u2514\u2500\u2500 ToDoList.Tests.csproj"),(0,o.kt)("p",null,"Your project directory may be slightly different if you added a ",(0,o.kt)("inlineCode",{parentName:"p"},"Shared")," directory with a ",(0,o.kt)("inlineCode",{parentName:"p"},"_Layout.cshtml")," file or if you included static assets in a ",(0,o.kt)("inlineCode",{parentName:"p"},"wwwroot")," directory (with related subdirectories)."),(0,o.kt)("h2",{id:"mysqlconnector-installation--configuration"},"MySqlConnector Installation & Configuration"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We'll begin by walking through how to set up a MySQL database connection in a project using MySqlConnector. Let's update our ",(0,o.kt)("inlineCode",{parentName:"p"},".csproj")," file to include MySqlConnector."),(0,o.kt)("h3",{id:"installing-the-mysqlconnector-package"},"Installing the MySqlConnector Package"),(0,o.kt)("p",null,"We can use the following command in the production directory of our project (",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoList.Solution/ToDoList"),") to add this package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet add package MySqlConnector -v 2.2.0\n")),(0,o.kt)("p",null,"This command should also automatically restore the packages in our application, but if you encounter any errors, run the following command to manually restore packages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet restore\n")),(0,o.kt)("h3",{id:"creating-a-database-connection-string"},"Creating a Database Connection String"),(0,o.kt)("p",null,"When we connect to our database, we must manually open a connection by creating a new instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"MySqlConnection")," class from the MySqlConnector package. We'll learn exactly how to do this in upcoming lessons. What's important to know right now is that the ",(0,o.kt)("inlineCode",{parentName:"p"},"MySqlConnection")," constructor expects a database ",(0,o.kt)("strong",{parentName:"p"},"connection string")," that contains the access details of our database: its name, the database user and password, and the database server and port. For our To Do List app, this is what our connection string will look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"server=localhost;port=3306;uid=root;pwd=epicodus;database=to_do_list_with_mysqlconnector;"\n')),(0,o.kt)("p",null,"The connection string includes five distinct parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"server"))," identifies our database's server. We list ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost")," because our application is running on a server local to our machine, not online.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"uid"))," identifies our database's user. In the LearnHowToProgram.com example lessons, we'll always assume the user is 'root'. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"pwd"))," provides the password for the given user. You should input your own password that you set up as the value to this field. In the LearnHowToProgram.com example lessons, we'll always assume the password is 'epicodus'. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"port"))," identifies the port MySQL is running on. The default port number for a MySQL server is 3306.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"database"))," is the database name. In our case, this is the ",(0,o.kt)("inlineCode",{parentName:"p"},"to_do_list_with_mysqlconnector")," database we created a few lessons ago."))),(0,o.kt)("h3",{id:"protecting-the-database-connection-string-with-appsettingsjson"},"Protecting the Database Connection String with ",(0,o.kt)("inlineCode",{parentName:"h3"},"appsettings.json")),(0,o.kt)("p",null,"Notably, the connection string contains sensitive data (password and username) that we don't want exposed on the internet. So what can we do to hide this information, but still use it in our project? ASP.NET Core provides built-in support for managing application configurations through a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json"),". As the name suggests this file is written in JSON and it contains application settings, like database connection strings. "),(0,o.kt)("p",null,"In order to protect the data in ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json"),", we must add it to our ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," so that it never gets saved to our remote repository. Let's do that first, before we create ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json"),"."),(0,o.kt)("div",{class:"filename"},".gitignore"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"obj\nbin\nappsettings.json\n")),(0,o.kt)("p",null,"Make sure to commit the changes you made to your ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," before moving on. "),(0,o.kt)("p",null,"Next, let's create ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json"),". Within the production directory of our project (",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoList.Solution/ToDoList"),"), create ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," and add the following code to it:"),(0,o.kt)("div",{class:"filename"},"ToDoList.Solution/ToDoList/appsettings.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ConnectionStrings": {\n        "DefaultConnection": "Server=localhost;Port=3306;database=to_do_list_with_mysqlconnector;uid=[YOUR-USERNAME-HERE];pwd=[YOUR-PASSWORD-HERE];"\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Make sure to update the connection string with the values that you set for your username and password.")," As noted earlier, we'll always assume the user is 'root' and the password is ",(0,o.kt)("inlineCode",{parentName:"p"},"epicodus"),". "),(0,o.kt)("p",null,"Also note that since our ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," has been put in our ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore"),", users will not have access to it when cloning our project. ",(0,o.kt)("strong",{parentName:"p"},"This means that you will need to add specific instructions in your README that tells the user where to create the file, and what code to include in it."),"  We recommend using the above formatting and directing users to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"[YOUR-USERNAME-HERE]")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"[YOUR-PASSWORD-HERE]")," with the user's own user and password values. "),(0,o.kt)("h3",{id:"accessing-appsettingsjson-through-builderconfiguration-in-programcs"},"Accessing ",(0,o.kt)("inlineCode",{parentName:"h3"},"appsettings.json")," through ",(0,o.kt)("inlineCode",{parentName:"h3"},"builder.Configuration")," in ",(0,o.kt)("inlineCode",{parentName:"h3"},"Program.cs")),(0,o.kt)("p",null,"ASP.NET Core automatically loads ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," as our application host's official configuration file. This happens implicitly when we create our ",(0,o.kt)("inlineCode",{parentName:"p"},"WebApplicationBuilder")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs"),". Remember the following line of code?"),(0,o.kt)("div",{class:"filename"},"ToDoList.Solution/ToDoList/Program.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.AspNetCore.Builder;\nusing Microsoft.Extensions.DependencyInjection;\nusing ToDoList.Models;\n\nnamespace ToDoList\n{\n  class Program\n  {\n    static void Main(string[] args)\n    {\n      WebApplicationBuilder builder = WebApplication.CreateBuilder(args);\n\n      ...\n    }\n  }\n}\n")),(0,o.kt)("p",null,"Well, when we create the ",(0,o.kt)("inlineCode",{parentName:"p"},"builder")," instance, our configurations in ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," automatically get loaded and added to our web app host as a property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"builder")," instance: ",(0,o.kt)("inlineCode",{parentName:"p"},"builder.Configuration"),". Here's how we'll access our database connection string in ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'builder.Configuration["ConnectionStrings:DefaultConnection"];\n')),(0,o.kt)("p",null,"The big implication here is that we can't access the ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," data from just anywhere in our app. If we want to access data in ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json"),", we need to do it through ",(0,o.kt)("inlineCode",{parentName:"p"},"builder.Configuration")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," when we create our web app host. So, our next two steps are to create a class with a property that holds the database connection string that we can use throughout our application, and then update ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," to set the value of that property. "),(0,o.kt)("h3",{id:"making-the-connection-string-available-throughout-the-app"},"Making the Connection String Available throughout the App"),(0,o.kt)("p",null,"Let's first create a class to store the database connection string. Create a new file called ",(0,o.kt)("inlineCode",{parentName:"p"},"DatabaseConfig.cs")," and add it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoList/Models")," directory:"),(0,o.kt)("div",{class:"filename"},"ToDoList.Solution/ToDoList/Models/DatabaseConfig.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ToDoList.Models\n{\n  public static class DBConfiguration\n  {\n    public static string ConnectionString { get; set; }\n  }\n}\n")),(0,o.kt)("p",null,"Note that we can name the file name, class name, and property whatever we like so long as we follow the general convention of descriptive naming."),(0,o.kt)("p",null,"Also notice that the class and property are both ",(0,o.kt)("inlineCode",{parentName:"p"},"static"),", meaning that the class can't have an instance, and the property also cannot be called on an instance. When we want to get or set ",(0,o.kt)("inlineCode",{parentName:"p"},"ConnectionString"),", we'll do so by accessing ",(0,o.kt)("inlineCode",{parentName:"p"},"DBConfiguration.ConnectionString"),"."),(0,o.kt)("p",null,"Next let's update ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," to set the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ConnectionString")," property to the database connection string within ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json"),". We'll do this by adding one new line of code to ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs"),":"),(0,o.kt)("div",{class:"filename"},"ToDoList.Solution/ToDoList/Program.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.Builder;\nusing Microsoft.Extensions.DependencyInjection;\nusing ToDoList.Models;\n\nnamespace ToDoList\n{\n  class Program\n  {\n    static void Main(string[] args)\n    {\n      WebApplicationBuilder builder = WebApplication.CreateBuilder(args);\n\n      builder.Services.AddControllersWithViews();\n\n      // new line!\n      DBConfiguration.ConnectionString = builder.Configuration["ConnectionStrings:DefaultConnection"];\n\n      WebApplication app = builder.Build();\n\n      ...\n\n      app.Run();\n    }\n  }\n}\n')),(0,o.kt)("p",null,"We can now use our database connection string via ",(0,o.kt)("inlineCode",{parentName:"p"},"DBConfiguration.ConnectionString")," anywhere in our application. What's more, we've protected our database connection string by adding it to ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," which we've told Git to ignore. We haven't yet learned how to open a database connection with the connection string, but that's exactly what we'll do in the next lesson. "),(0,o.kt)("p",null,"Going forward, don't forget to include setup instructions in your README for an ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," with a database connection string."))}u.isMDXComponent=!0}}]);