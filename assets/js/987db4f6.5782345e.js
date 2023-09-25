"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[80307],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?i.createElement(h,r(r({ref:t},d),{},{components:n})):i.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const o={title:"4. Identity Setup and Configuration",id:"identity_setup_and_configuration",slug:"identity_setup_and_configuration",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/10_authentication-with-identity/2d_identity_setup_and_configuration.md"},r=void 0,s={unversionedId:"c_and_net_classic/authentication-with-identity/identity_setup_and_configuration",id:"c_and_net_classic/authentication-with-identity/identity_setup_and_configuration",title:"4. Identity Setup and Configuration",description:"In this lesson, we'll add Identity to our To Do List application. This will involve creating a new class to manage user accounts with Identity, updating our Program.cs to include Identity in our project, and configuring Identity to work with Entity Framework Core. You can follow this same process to add Identity to any of your projects.",source:"@site/docs/c_and_net_classic/10_authentication-with-identity/2d_identity_setup_and_configuration.md",sourceDirName:"c_and_net_classic/10_authentication-with-identity",slug:"/c_and_net_classic/authentication-with-identity/identity_setup_and_configuration",permalink:"/lhtp/c_and_net_classic/authentication-with-identity/identity_setup_and_configuration",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"4. Identity Setup and Configuration",id:"identity_setup_and_configuration",slug:"identity_setup_and_configuration",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/10_authentication-with-identity/2d_identity_setup_and_configuration.md"},sidebar:"c_and_net_classic",previous:{title:"3. Introduction to Authentication, Authorization, and Identity",permalink:"/lhtp/c_and_net_classic/authentication-with-identity/introduction_to_authentication_authorization_and_identity"},next:{title:"5. The Identity Model",permalink:"/lhtp/c_and_net_classic/authentication-with-identity/the_identity_model"}},l={},p=[{value:"Identity Setup and Configuration",id:"identity-setup-and-configuration",level:2},{value:"Creating a User class by Extending an Identity Class",id:"creating-a-user-class-by-extending-an-identity-class",level:3},{value:"Configuring Identity to Work with Entity Framework Core",id:"configuring-identity-to-work-with-entity-framework-core",level:3},{value:"Configuring <code>Program.cs</code>",id:"configuring-programcs",level:3},{value:"Create a Migration and Update the Database",id:"create-a-migration-and-update-the-database",level:3},{value:"Repository Reference",id:"repository-reference",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this lesson, we'll add Identity to our To Do List application. This will involve creating a new class to manage user accounts with Identity, updating our ",(0,a.kt)("inlineCode",{parentName:"p"},"Program.cs")," to include Identity in our project, and configuring Identity to work with Entity Framework Core. You can follow this same process to add Identity to any of your projects."),(0,a.kt)("h2",{id:"identity-setup-and-configuration"},"Identity Setup and Configuration"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Start by opening up your To Do List app. We'll continue where we left off from section 4. That corresponds to the code in the branch ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/epicodus-lessons/section-4-to-do-list-with-many-to-many-csharp-net6/tree/6_data_from_multiple_db_tables"},(0,a.kt)("inlineCode",{parentName:"a"},"6_data_from_multiple_db_tables"))," in the section 4 example repo for the To Do List app."),(0,a.kt)("p",null,"Since we're embarking on a new version of our project, we recommend creating and using a new branch as well as updating ",(0,a.kt)("inlineCode",{parentName:"p"},"appsettings.json")," to use a new database name. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"to_do_list_with_auth")," \u2014 that's what we'll use in our example projects. When you update to a new database name, don't forget to create the database with the command ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet ef database update"),"."),(0,a.kt)("div",{class:"filename"},"ToDoList/appsettings.json"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ConnectionStrings": {\n    "DefaultConnection": "Server=localhost;Port=3306;database=to_do_list_with_auth;uid=root;pwd=epicodus;"\n  }\n}\n')),(0,a.kt)("h3",{id:"creating-a-user-class-by-extending-an-identity-class"},"Creating a User class by Extending an Identity Class"),(0,a.kt)("p",null,"Let's start by creating a class to represent user accounts. Fortunately, Identity comes with a class to represent users called ",(0,a.kt)("inlineCode",{parentName:"p"},"IdentityUser"),". As we can see in ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.identity.identityuser?view=aspnetcore-6.0"},"the documentation on the ",(0,a.kt)("inlineCode",{parentName:"a"},"IdentityUser")," class"),", this class contains a number of properties such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Email"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"UserName"),", and many others, like the number of recorded failed login attempts."),(0,a.kt)("p",null,"We'll implement the functionality in the ",(0,a.kt)("inlineCode",{parentName:"p"},"IdentityUser")," class by creating our own custom class that extends from ",(0,a.kt)("inlineCode",{parentName:"p"},"IdentityUser"),"."),(0,a.kt)("p",null,"Add a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"ApplicationUser.cs")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"Models"),". It should contain the following code:"),(0,a.kt)("div",{class:"filename"},"Models/ApplicationUser.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.AspNetCore.Identity;\n\nnamespace ToDoList.Models\n{\n    public class ApplicationUser : IdentityUser\n    {\n\n    }\n}\n")),(0,a.kt)("p",null,"We extend Identity's ",(0,a.kt)("inlineCode",{parentName:"p"},"IdentityUser")," class into our own custom ",(0,a.kt)("inlineCode",{parentName:"p"},"ApplicationUser")," class using the ",(0,a.kt)("inlineCode",{parentName:"p"},":")," operator in the class declaration. This ensures our ",(0,a.kt)("inlineCode",{parentName:"p"},"ApplicationUser")," class inherits all necessary functionality from Identity's ",(0,a.kt)("inlineCode",{parentName:"p"},"IdentityUser")," class."),(0,a.kt)("p",null,"Note \u2014 we don't have to create our own custom ",(0,a.kt)("inlineCode",{parentName:"p"},"ApplicationUser")," class! We could have simply used Identity's ",(0,a.kt)("inlineCode",{parentName:"p"},"IdentityUser")," class and not gone through the trouble of creating a new model. However, when we create our own custom class (that inherits from ",(0,a.kt)("inlineCode",{parentName:"p"},"IdentityUser"),"), we can add new properties to it. For example, what if we want to allow users to have a profile picture? Or list their personal website? Or save their birthday? We could add properties for each of those. Here's an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.AspNetCore.Identity;\nusing System;\n\nnamespace ToDoList.Models\n{\n    public class ApplicationUser : IdentityUser\n    {\n      public string Website { get; set; }\n      public string Image { get; set; }\n      public DateOnly Birthday { get; set; }\n    }\n}\n")),(0,a.kt)("p",null,"And with the above example configuration, our ",(0,a.kt)("inlineCode",{parentName:"p"},"ApplicationUser")," class will have ",(0,a.kt)("inlineCode",{parentName:"p"},"Website"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Image"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Birthday")," properties along with all of the properties listed in ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.identity.identityuser?view=aspnetcore-6.0"},"the ",(0,a.kt)("inlineCode",{parentName:"a"},"IdentityUser")," class"),"."),(0,a.kt)("p",null,"We won't be adding properties to our custom ",(0,a.kt)("inlineCode",{parentName:"p"},"ApplicationUser")," class in our To Do List application, but you definitely should explore doing so in your own projects."),(0,a.kt)("h3",{id:"configuring-identity-to-work-with-entity-framework-core"},"Configuring Identity to Work with Entity Framework Core"),(0,a.kt)("p",null,"Identity is built to use Entity Framework Core and store user information in a database. It comes with the class ",(0,a.kt)("inlineCode",{parentName:"p"},"IdentityDbContext"),", which extends EF Core's ",(0,a.kt)("inlineCode",{parentName:"p"},"DbContext")," class to work with user authentication."),(0,a.kt)("p",null,"First, we'll need to include the package that connects the two:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet add package Microsoft.AspNetCore.Identity.EntityFrameworkCore -v 6.0.0\n")),(0,a.kt)("p",null,"We'll now see ",(0,a.kt)("inlineCode",{parentName:"p"},"Microsoft.AspNetCore.Identity.EntityFrameworkCore")," added to our package list in ",(0,a.kt)("inlineCode",{parentName:"p"},"ToDoList.csproj"),"."),(0,a.kt)("p",null,"We'll update ",(0,a.kt)("inlineCode",{parentName:"p"},"ToDoListContext.cs")," so that it extends from ",(0,a.kt)("inlineCode",{parentName:"p"},"IdentityDbContext")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"DbContext"),"."),(0,a.kt)("div",{class:"filename"},"Models/ToDoListContext.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.AspNetCore.Identity.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace ToDoList.Models\n{\n    public class ToDoListContext : IdentityDbContext<ApplicationUser>\n    {\n      // Don't change code in here.\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We'll have to add a new using directive: ",(0,a.kt)("inlineCode",{parentName:"p"},"using Microsoft.AspNetCore.Identity.EntityFrameworkCore;"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Once again, we extend a class with the ",(0,a.kt)("inlineCode",{parentName:"p"},":")," operator. We're instructing our ",(0,a.kt)("inlineCode",{parentName:"p"},"ToDoListContext")," class to inherit all functionality from Identity's built-in ",(0,a.kt)("inlineCode",{parentName:"p"},"IdentityDbContext")," class. This replaces the ",(0,a.kt)("inlineCode",{parentName:"p"},"DbContext")," class that ToDoListContext was previously extending from.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Notice that we're declaring ",(0,a.kt)("inlineCode",{parentName:"p"},"ApplicationUser")," as the ",(0,a.kt)("em",{parentName:"p"},"type")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"IdentityDbContext")," we're inheriting in the class declaration. This tells Identity which class in the application will contain the user account information it will be responsible for authenticating."))),(0,a.kt)("h3",{id:"configuring-programcs"},"Configuring ",(0,a.kt)("inlineCode",{parentName:"h3"},"Program.cs")),(0,a.kt)("p",null,"Finally, let's update our ",(0,a.kt)("inlineCode",{parentName:"p"},"Program.cs")," file and configure the application to use Identity with Entity Framework and MVC."),(0,a.kt)("div",{class:"filename"},"Program.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.Builder;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.Extensions.DependencyInjection;\nusing ToDoList.Models;\nusing Microsoft.AspNetCore.Identity;\n\nnamespace ToDoList\n{\n  class Program\n  {\n    static void Main(string[] args)\n    {\n\n      WebApplicationBuilder builder = WebApplication.CreateBuilder(args);\n\n      builder.Services.AddControllersWithViews();\n\n      builder.Services.AddDbContext<ToDoListContext>(\n                        dbContextOptions => dbContextOptions\n                          .UseMySql(\n                            builder.Configuration["ConnectionStrings:DefaultConnection"], ServerVersion.AutoDetect(builder.Configuration["ConnectionStrings:DefaultConnection"]\n                          )\n                        )\n                      );\n      \n      // New code below!!\n      builder.Services.AddIdentity<ApplicationUser, IdentityRole>()\n                .AddEntityFrameworkStores<ToDoListContext>()\n                .AddDefaultTokenProviders();\n\n      WebApplication app = builder.Build();\n\n      // app.UseDeveloperExceptionPage();\n      app.UseHttpsRedirection();\n      app.UseStaticFiles();\n\n      app.UseRouting();\n\n      // New code below!\n      app.UseAuthentication(); \n      app.UseAuthorization();\n\n      app.MapControllerRoute(\n          name: "default",\n          pattern: "{controller=Home}/{action=Index}/{id?}"\n        );\n\n      app.Run();\n    }\n  }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We add the ",(0,a.kt)("inlineCode",{parentName:"p"},"using")," directive ",(0,a.kt)("inlineCode",{parentName:"p"},"using Microsoft.AspNetCore.Identity;")," so our ",(0,a.kt)("inlineCode",{parentName:"p"},"Program")," class has access to Identity.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We set up Identity as a service with the line ",(0,a.kt)("inlineCode",{parentName:"p"},"builder.Services.AddIdentity<ApplicationUser, IdentityRole>()"),". Notice that we specify ",(0,a.kt)("inlineCode",{parentName:"p"},"<ApplicationUser, IdentityRole>")," \u2014 these are the two models that we're using to designate the user and the role. Just like ",(0,a.kt)("inlineCode",{parentName:"p"},"IdentityUser"),", ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.identity.identityrole?view=aspnetcore-6.0"},(0,a.kt)("inlineCode",{parentName:"a"},"IdentityRole")," is a built-in class to Identity"),", and it allows us to use the default configurations for roles. We won't be configuring roles beyond the defaults, so we use the built-in ",(0,a.kt)("inlineCode",{parentName:"p"},"IdentityRole")," class here.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We chain two more method calls to the Identity service that we set up: ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.dependencyinjection.identityentityframeworkbuilderextensions.addentityframeworkstores?view=aspnetcore-6.0"},(0,a.kt)("inlineCode",{parentName:"a"},".AddEntityFrameworkStores<ToDoListContext>()"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.identity.identitybuilderextensions.adddefaulttokenproviders?view=aspnetcore-6.0"},(0,a.kt)("inlineCode",{parentName:"a"},".AddDefaultTokenProviders();")),". The first method ensures that the Identity user data is saved via EF Core to our database (as represented by the ",(0,a.kt)("inlineCode",{parentName:"p"},"ToDoListContext")," class). The second method sets up Identity's providers for tokens, which are created during password reset or two factor authentication, for example. Note that we won't go over how to implement either of those two things in the coursework, and you are encouraged to look into them on your own.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Finally, we configure our web application ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," to ",(0,a.kt)("inlineCode",{parentName:"p"},".UseAuthentication()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".UseAuthorization()"),". Remember two things here: "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Whenever we call a method on our ",(0,a.kt)("inlineCode",{parentName:"li"},"WebApplication app"),', we are configuring how our application handles HTTP requests (the "pipeline"). We configure the request pipeline by setting up middleware. ',(0,a.kt)("strong",{parentName:"li"},"Middleware")," is software that we add to our request pipeline that determines how the request should be processed. Each middleware decides whether to do some work, or to pass the request onto the next middleware. To optionally review more about this topic, visit the ",(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-6.0"},"MS Docs"),"."),(0,a.kt)("li",{parentName:"ul"},"The order in which we set up the middleware matters! If these methods are called in the wrong order, you may run into unhandled exceptions or issues logging in with Identity. Fortunately, ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-6.0&source=docs#middleware-order"},"the Microsoft Docs has a list")," of how middleware should be ordered.")))),(0,a.kt)("h3",{id:"create-a-migration-and-update-the-database"},"Create a Migration and Update the Database"),(0,a.kt)("p",null,"Now that the project is configured to use Identity, it's time to create a new migration and update our database. Run these two commands within the ",(0,a.kt)("inlineCode",{parentName:"p"},"ToDoList/")," project folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet ef migrations add AddIdentity\n$ dotnet ef database update\n")),(0,a.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,a.kt)("p",null,"Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-5-to-do-list-with-auth-csharp-net6/tree/1_identity_setup"},(0,a.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for To Do List with Authentication and Authorization: ",(0,a.kt)("inlineCode",{parentName:"a"},"1_identity_setup")))))}u.isMDXComponent=!0}}]);