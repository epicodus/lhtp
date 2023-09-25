"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[16093],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=o,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={title:"NaN. Configuration for Entity Framework Core",id:"configuration_for_entity_framework_core",slug:"configuration_for_entity_framework_core",hide_table_of_contents:!0,sidebar_position:23,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/10_database-basics/1c_configuration_for_ef_core.md"},r=void 0,s={unversionedId:"c_and_net_part_time/database-basics/configuration_for_entity_framework_core",id:"c_and_net_part_time/database-basics/configuration_for_entity_framework_core",title:"NaN. Configuration for Entity Framework Core",description:"In this lesson, we'll explain how to configure a project to use Entity Framework Core with a MySQL database. The instructions in this lesson can be used for any app you build to use EF Core with a MySQL database.",source:"@site/docs/c_and_net_part_time/10_database-basics/1c_configuration_for_ef_core.md",sourceDirName:"c_and_net_part_time/10_database-basics",slug:"/c_and_net_part_time/database-basics/configuration_for_entity_framework_core",permalink:"/lhtp/c_and_net_part_time/database-basics/configuration_for_entity_framework_core",draft:!1,tags:[],version:"current",sidebarPosition:23,frontMatter:{title:"NaN. Configuration for Entity Framework Core",id:"configuration_for_entity_framework_core",slug:"configuration_for_entity_framework_core",hide_table_of_contents:!0,sidebar_position:23,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/10_database-basics/1c_configuration_for_ef_core.md"},sidebar:"c_and_net_part_time",previous:{title:"NaN. Introducing Entity Framework Core",permalink:"/lhtp/c_and_net_part_time/database-basics/introducing_entity_framework_core"},next:{title:"NaN. Read with EF Core",permalink:"/lhtp/c_and_net_part_time/database-basics/read_with_ef_core"}},l={},p=[{value:"Project Setup",id:"project-setup",level:2},{value:"Adding and Removing Dependencies",id:"adding-and-removing-dependencies",level:3},{value:"Database Connection String",id:"database-connection-string",level:3},{value:"Update the Database Name and Create a New Database",id:"update-the-database-name-and-create-a-new-database",level:3},{value:"Remove <code>DatabaseConfig.cs</code>",id:"remove-databaseconfigcs",level:3},{value:"Creating the Database Context and Entities",id:"creating-the-database-context-and-entities",level:3},{value:"Configuring <code>Program.cs</code> to Run our Database as a Service",id:"configuring-programcs-to-run-our-database-as-a-service",level:3},{value:"Updating to EF Core Naming Conventions",id:"updating-to-ef-core-naming-conventions",level:2},{value:"Repository Reference",id:"repository-reference",level:3}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson, we'll explain how to configure a project to use Entity Framework Core with a MySQL database. The instructions in this lesson can be used for any app you build to use EF Core with a MySQL database. "),(0,o.kt)("p",null,"For this walkthrough, we'll use our To Do List app as an example, and we'll start where we left off with our To Do List app: using ",(0,o.kt)("inlineCode",{parentName:"p"},"MySqlConnector")," to communicate with a MySQL database. That means this walkthrough will include instructions on how to remove ",(0,o.kt)("inlineCode",{parentName:"p"},"MySqlConnector")," and how to update the custom methods we created over the weekend homework to communicate with our MySQL database. As always, you are welcome to code a long with these lessons, or just read through them. We'll provide links to an example repo as needed and at the very end of the walkthrough."),(0,o.kt)("h2",{id:"project-setup"},"Project Setup"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"adding-and-removing-dependencies"},"Adding and Removing Dependencies"),(0,o.kt)("p",null,"Out with the old and in with the new! We'll start by adding the additional dependencies that we will need for this EF Core project. Go to the root directory of the production project (",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoList"),") via the terminal and add the following dependencies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet add package Microsoft.EntityFrameworkCore -v 6.0.0\n$ dotnet add package Pomelo.EntityFrameworkCore.MySql -v 6.0.0\n")),(0,o.kt)("p",null,"Notice one of these does not start with ",(0,o.kt)("em",{parentName:"p"},"Microsoft"),". That's because ",(0,o.kt)("inlineCode",{parentName:"p"},"Pomelo.EntityFrameworkCore.MySql")," is actually a third-party package that can be downloaded from the same source as official Microsoft packages. Check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PomeloFoundation/Pomelo.EntityFrameworkCore.MySql"},"Entity Framework Core Official GitHub Repo")," to learn more."),(0,o.kt)("p",null,"Let's also remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"MySqlConnector")," package that we added over the weekend."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet remove package MySqlConnector\n")),(0,o.kt)("p",null,"Notice how MySqlConnector is now gone from our .csproj file. The ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet remove package [PACKAGE NAME]")," command allows us to conveniently and cleanly remove packages that we do not need from our project."),(0,o.kt)("h3",{id:"database-connection-string"},"Database Connection String"),(0,o.kt)("p",null,"Next, we need to add a database connection string to our app. "),(0,o.kt)("p",null,"When we used the MySqlConnector package to communicate with the database, we put our database connection string in ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," and loaded it during the creation of our web app host in ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs"),". We used ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," to protect the sensitive data within our database connection string by adding it to our ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," so that it is never tracked in our Git history. We also included instructions on how to recreate an ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," in our project READMEs."),(0,o.kt)("p",null,"Well, we'll use ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," in just the same way to load and protect our database connection string with EF Core. So if you are following along and updating your To Do List app, there are no major changes that we need to make with our processes around using ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json"),". "),(0,o.kt)("p",null,"All other projects you create will need the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"appsettings.json")," listed in the ",(0,o.kt)("inlineCode",{parentName:"li"},".gitignore")," and committed to Git history.")),(0,o.kt)("div",{class:"filename"},".gitignore"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"obj\nbin\nappsettings.json\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Setup instructions in the project's ",(0,o.kt)("inlineCode",{parentName:"p"},"README.md")," that explain how to recreate the ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json"),", including the location of file (within the project's production directory) and the contents of the file.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"And an ",(0,o.kt)("inlineCode",{parentName:"p"},"appsetting.json")," with the following contents, replacing the following values with your own:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[YOUR-USER-HERE]")," with your username "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[YOUR-PASSWORD-HERE]")," with your password"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[YOUR-DB-NAME]")," with the name of your database")))),(0,o.kt)("div",{class:"filename"},"ProjectName.Solution/ProjectName/appsettings.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ConnectionStrings": {\n    "DefaultConnection": "Server=localhost;Port=3306;database=[YOUR-DB-NAME];uid=[YOUR-USER-HERE];pwd=[YOUR-PASSWORD-HERE];"\n  }\n}\n')),(0,o.kt)("h3",{id:"update-the-database-name-and-create-a-new-database"},"Update the Database Name and Create a New Database"),(0,o.kt)("p",null,"We recommend creating a new database for this walkthrough of using EF Core to communicate with a MySQL database. Doing so will preserve the database we set up with version of the To Do List that uses MySqlConnector. To Do this, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Update the ",(0,o.kt)("inlineCode",{parentName:"li"},"database")," key in the database connection string in ",(0,o.kt)("inlineCode",{parentName:"li"},"appsettings.json")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"to_do_list_with_ef_core"),"."),(0,o.kt)("li",{parentName:"ol"},"Copying the ",(0,o.kt)("inlineCode",{parentName:"li"},"to_do_list_with_mysqlconnector")," database by exporting it, and then importing it with the new name of ",(0,o.kt)("inlineCode",{parentName:"li"},"to_do_list_with_ef_core"),". For exact instructions on importing and exporting databases, visit ",(0,o.kt)("a",{parentName:"li",href:"https://www.learnhowtoprogram.com/lessons/creating-a-test-database-exporting-and-importing-databases-with-mysql-workbench"},"this lesson from the weekend homework"),".")),(0,o.kt)("h3",{id:"remove-databaseconfigcs"},"Remove ",(0,o.kt)("inlineCode",{parentName:"h3"},"DatabaseConfig.cs")),(0,o.kt)("p",null,"We'll configure our project to use EF Core in ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs"),". In the process, we'll set up our MySQL database to run as a service in ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs"),". Because of this, we no longer need the ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoList/Models/DatabaseConfig.cs")," file that contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"DBConfiguration")," class. Start by removing this file from your To Do List project. "),(0,o.kt)("p",null,"Remove the following:"),(0,o.kt)("div",{class:"filename"},"ToDoList/Models/DatabaseConfig.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ToDoList.Models\n{\n  public static class DBConfiguration\n  {\n    public static string ConnectionString { get; set; }\n  }\n}\n")),(0,o.kt)("h3",{id:"creating-the-database-context-and-entities"},"Creating the Database Context and Entities"),(0,o.kt)("p",null,"Next, we need to create a model of our database and tables within our project for Entity Framework Core to use to map our C# classes and objects to MySQL database tables and entries, and vice versa. EF Core uses specific terminology for these models:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("strong",{parentName:"li"},"entity")," represents a single database table (with columns and types) as a C# model in our app. The entities in our To Do List app are described in ",(0,o.kt)("inlineCode",{parentName:"li"},"Item.cs")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Category.cs"),". "),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"database context")," represents the entire database (with all the tables) as a model in our app. The model is always called ",(0,o.kt)("inlineCode",{parentName:"li"},"ProjectNameContext")," and it extends the functionality of EF Core's ",(0,o.kt)("inlineCode",{parentName:"li"},"DbContext")," class. The ",(0,o.kt)("inlineCode",{parentName:"li"},"DbContext")," class represents a session with our MySQL database that can be used to query and save instances of our entities (",(0,o.kt)("inlineCode",{parentName:"li"},"Item"),"s and ",(0,o.kt)("inlineCode",{parentName:"li"},"Category"),"s). ",(0,o.kt)("strong",{parentName:"li"},"Every time we want to reference a database in an app, we will do so using an instance of the ",(0,o.kt)("inlineCode",{parentName:"strong"},"DbContext")," class."))),(0,o.kt)("p",null,"We don't have to change anything with ",(0,o.kt)("inlineCode",{parentName:"p"},"Item.cs")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Category.cs")," to turn those models into EF Core entities. We list the entities in our application by defining them in the database context. So, let's create that next."),(0,o.kt)("p",null,"Within ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoList/Models")," create a new file called ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoListContext.cs")," and add the following code to it:"),(0,o.kt)("div",{class:"filename"},"ToDoList/Models/ToDoListContext.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.EntityFrameworkCore;\n\nnamespace ToDoList.Models\n{\n  public class ToDoListContext : DbContext\n  {\n    public DbSet<Item> Items { get; set; }\n\n    public ToDoListContext(DbContextOptions options) : base(options) { }\n  }\n}\n")),(0,o.kt)("p",null,"Let's walk through what's happening here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Our ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoListContext"),' class inherits (or "extends") from EF Core\'s ',(0,o.kt)("inlineCode",{parentName:"p"},"DbContext")," class. This ensures it includes all default built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"DbContext")," functionality.  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoListContext")," class contains a property of type ",(0,o.kt)("inlineCode",{parentName:"p"},"DbSet<Item>")," named ",(0,o.kt)("inlineCode",{parentName:"p"},"Items")," that represents the ",(0,o.kt)("inlineCode",{parentName:"p"},"items")," table in our database. With this ",(0,o.kt)("inlineCode",{parentName:"p"},"Items")," property, we've declared an ",(0,o.kt)("strong",{parentName:"p"},"entity")," called ",(0,o.kt)("inlineCode",{parentName:"p"},"Items")," in our To Do List database context. "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Note that in order for ",(0,o.kt)("inlineCode",{parentName:"li"},"DbSet<T>")," to create an entity for a specific C# object in our app, we always need to be sure to include the class name (",(0,o.kt)("inlineCode",{parentName:"li"},"Item"),") within the angle brackets (",(0,o.kt)("inlineCode",{parentName:"li"},"<>"),") after ",(0,o.kt)("inlineCode",{parentName:"li"},"DbSet"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We also include a constructor that inherits the behavior of its parent class constructor. As ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoListContext")," is an extension of the ",(0,o.kt)("inlineCode",{parentName:"p"},"DbContext")," class, we're invoking the constructor behavior from that class; ",(0,o.kt)("inlineCode",{parentName:"p"},"base")," represents the parent ",(0,o.kt)("inlineCode",{parentName:"p"},"DbContext")," class. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoListContext")," constructor, we list a parameter of the type ",(0,o.kt)("inlineCode",{parentName:"p"},"DbContextOptions")," called ",(0,o.kt)("inlineCode",{parentName:"p"},"options"),". The argument for this parameter will be passed through ",(0,o.kt)("strong",{parentName:"p"},"dependency injection")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," when our app is built and run. Note that we haven't yet set up anything in ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," \u2014 neither our database as a service or our database context options. We'll do that next!"))),(0,o.kt)("h3",{id:"configuring-programcs-to-run-our-database-as-a-service"},"Configuring ",(0,o.kt)("inlineCode",{parentName:"h3"},"Program.cs")," to Run our Database as a Service"),(0,o.kt)("p",null,"Next, we'll update ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," to do two things:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Configure our ",(0,o.kt)("inlineCode",{parentName:"li"},"WebApplicationBuilder")," to set up a service for our database."),(0,o.kt)("li",{parentName:"ol"},"Configure our MySQL database to use the database connection string in ",(0,o.kt)("inlineCode",{parentName:"li"},"appsettings.json"),".")),(0,o.kt)("p",null,"Let's look at the new code in ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs"),". We'll show the entire file. "),(0,o.kt)("div",{class:"filename"},"ToDoList/Program.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.Builder;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.Extensions.DependencyInjection;\nusing ToDoList.Models;\n\nnamespace ToDoList\n{\n  class Program\n  {\n    static void Main(string[] args)\n    {\n      WebApplicationBuilder builder = WebApplication.CreateBuilder(args);\n\n      builder.Services.AddControllersWithViews();\n\n      builder.Services.AddDbContext<ToDoListContext>(\n                        dbContextOptions => dbContextOptions\n                          .UseMySql(\n                            builder.Configuration["ConnectionStrings:DefaultConnection"], ServerVersion.AutoDetect(builder.Configuration["ConnectionStrings:DefaultConnection"]\n                          )\n                        )\n                      );\n\n      WebApplication app = builder.Build();\n\n      // app.UseDeveloperExceptionPage();\n      app.UseHttpsRedirection();\n      app.UseStaticFiles();\n\n      app.UseRouting();\n\n      app.MapControllerRoute(\n          name: "default",\n          pattern: "{controller=Home}/{action=Index}/{id?}");\n\n      app.Run();\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Let's explain the updates:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"First note that we have a new ",(0,o.kt)("inlineCode",{parentName:"p"},"using")," directive: ",(0,o.kt)("inlineCode",{parentName:"p"},"using Microsoft.EntityFrameworkCore;")," This ",(0,o.kt)("inlineCode",{parentName:"p"},"using")," directive imports the ",(0,o.kt)("inlineCode",{parentName:"p"},"UseMySql()")," method from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Microsoft.EntityFrameworkCore")," namespace. We also maintain the ",(0,o.kt)("inlineCode",{parentName:"p"},"using ToDoList.Models"),", because we use the model ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoListContext")," within ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"With ",(0,o.kt)("inlineCode",{parentName:"p"},"builder.Services.AddDbContext<ToDoListContext>(...)")," we add EF Core as a service to our To Do List app. We specify ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoListContext")," as the type of EF Core database context that we want to set up. Remember that ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoListContext")," is a representation of our MySQL database.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"As the argument to the ",(0,o.kt)("inlineCode",{parentName:"p"},"AddDbContext<T>()")," method, we configure our To Do List database context options: "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"We state that we want to use a MySQL database with the ",(0,o.kt)("inlineCode",{parentName:"li"},"UseMySql()")," method."),(0,o.kt)("li",{parentName:"ul"},"We pass in two arguments to the ",(0,o.kt)("inlineCode",{parentName:"li"},"UseMySql()")," method: ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The database connection string in ",(0,o.kt)("inlineCode",{parentName:"li"},"appsettings.json"),", which we get from accessing ",(0,o.kt)("inlineCode",{parentName:"li"},"builder.Configuration"),". Remember that ",(0,o.kt)("inlineCode",{parentName:"li"},"appsettings.json")," is implicitly loaded when we begin the process of building our web app host by running ",(0,o.kt)("inlineCode",{parentName:"li"},"WebApplication.CreateBuilder(args);"),"."),(0,o.kt)("li",{parentName:"ul"},"The version of the MySQL server, which we set to autodetect."))),(0,o.kt)("li",{parentName:"ul"},"Note that the syntax ",(0,o.kt)("inlineCode",{parentName:"li"},"=>")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"dbContextOptions => dbContextOptions")," creates a  ",(0,o.kt)("strong",{parentName:"li"},"lambda expression"),". In short, a lambda expression is just a way to write an anonymous function in a condensed fashion. Lambda expressions are used in a variety of languages and are similar to arrow functions in JavaScript. For more information about lambdas, check out the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/lambda-expressions"},"Microsoft documentation"),".")))),(0,o.kt)("p",null,"With EF Core now configured to run as a service, EF Core will automatically handle opening and closing a database connection each time we query our database. Pretty neat! "),(0,o.kt)("p",null,"Note that while we name our EF Core database context ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDolistContext"),", the name of the actual database is still set in ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json"),"."),(0,o.kt)("p",null,"And finally, if you'd like to read more about how to configure EF Core as a service, visit the documentation ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/ef/core/miscellaneous/configuring-dbcontext#configuring-dbcontextoptions"},"Configuring DbContext with Dependency Injection"),' and scroll down to the "Using DbContext with dependency injection" section. '),(0,o.kt)("h2",{id:"updating-to-ef-core-naming-conventions"},"Updating to EF Core Naming Conventions"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"For EF Core to map our C# models to a MySQL database, we need to follow specific naming conventions, two to be precise:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"By default EF Core maps entity properties (the properties of our C# models) to database columns that have the same name. This mapping is case sensitive. Because of this, the column names in our database tables must match the property names and case of the properties of our models.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"It's also important to note that Entity Framework Core recognizes an entity's primary key through naming convention as well: for a property to be recognized as a primary key, we need to name the property ",(0,o.kt)("inlineCode",{parentName:"p"},"Id")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"[ClassName]Id"),". We're going to go with the second way, naming our primary keys as ",(0,o.kt)("inlineCode",{parentName:"p"},"[ClassName]Id"),"."))),(0,o.kt)("p",null,"To meet these naming convention, we need to go into our ",(0,o.kt)("inlineCode",{parentName:"p"},"to_do_list_with_ef_core")," database and update the column names in the following way:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using MySQL Workbench, find the ",(0,o.kt)("inlineCode",{parentName:"li"},"items")," table in the ",(0,o.kt)("em",{parentName:"li"},"Navigator"),", right click and select ",(0,o.kt)("em",{parentName:"li"},"Alter Table..."),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Change the name of the ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," column to ",(0,o.kt)("inlineCode",{parentName:"li"},"ItemId"),"."),(0,o.kt)("li",{parentName:"ul"},"Change the name of the ",(0,o.kt)("inlineCode",{parentName:"li"},"description")," column to ",(0,o.kt)("inlineCode",{parentName:"li"},"Description"),"."),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("em",{parentName:"li"},"Apply"),".")))),(0,o.kt)("p",null,"Next, go open ",(0,o.kt)("inlineCode",{parentName:"p"},"Item.cs")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoList")," project, and update your ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," model's ",(0,o.kt)("inlineCode",{parentName:"p"},"Id")," property to be ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemId"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," model should now look like this:"),(0,o.kt)("div",{class:"filename"},"Models/Item.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ToDoList.Models\n{\n  public class Item\n  {\n    public int ItemId { get; set; }\n    public string Description { get; set; }\n\n    ... // Item constructor and methods omitted\n  }\n}\n")),(0,o.kt)("p",null,"Note that we will follow these naming conventions when setting up databases and entities from now on."),(0,o.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,o.kt)("p",null,"Follow the link below to view how a sample version of the To Do List app should look like at this point. Note that this is a link to a specific branch in the repository."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-3-to-do-list-with-ef-core-csharp-net6/tree/1_ef_core_setup"},(0,o.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for To Do List with EF Core: 1","_","ef","_","core","_","setup"))))}m.isMDXComponent=!0}}]);