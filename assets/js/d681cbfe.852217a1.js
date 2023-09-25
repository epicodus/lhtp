"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[12034],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},29691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(87462),r=(n(67294),n(3905));const a={title:"Authentication with Identity: User Registration Controller",id:"authentication_with_identity_user_registration_controller",slug:"authentication_with_identity_user_registration_controller",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/2e_identity_user_registration_controller.md"},o=void 0,s={unversionedId:"c_and_net/authentication-with-identity/authentication_with_identity_user_registration_controller",id:"c_and_net/authentication-with-identity/authentication_with_identity_user_registration_controller",title:"Authentication with Identity: User Registration Controller",description:"Now that we've added Identity to our application, let's add functionality that allows users to register for accounts. Later, we'll add functionality that allows users to sign in and out.",source:"@site/docs/c_and_net/10_authentication-with-identity/2e_identity_user_registration_controller.md",sourceDirName:"c_and_net/10_authentication-with-identity",slug:"/c_and_net/authentication-with-identity/authentication_with_identity_user_registration_controller",permalink:"/c_and_net/authentication-with-identity/authentication_with_identity_user_registration_controller",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Authentication with Identity: User Registration Controller",id:"authentication_with_identity_user_registration_controller",slug:"authentication_with_identity_user_registration_controller",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/2e_identity_user_registration_controller.md"},sidebar:"c_and_net",previous:{title:"The Identity Model",permalink:"/c_and_net/authentication-with-identity/the_identity_model"},next:{title:"Authentication with Identity: User Registration ViewModel, Validation, and Views",permalink:"/c_and_net/authentication-with-identity/authentication_with_identity_user_registration_viewmodel_validation_and_views"}},l={},d=[{value:"Accounts Controller",id:"accounts-controller",level:2},{value:"Dependency Injection",id:"dependency-injection",level:3},{value:"Routing",id:"routing",level:3},{value:"Method Signature",id:"method-signature",level:4},{value:"Method Body",id:"method-body",level:4},{value:"Summary",id:"summary",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Now that we've added Identity to our application, let's add functionality that allows users to ",(0,r.kt)("strong",{parentName:"p"},"register")," for accounts. Later, we'll add functionality that allows users to sign in and out."),(0,r.kt)("h2",{id:"accounts-controller"},"Accounts Controller"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We'll start by adding an ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountController"),". There will be a lot of new code here and we'll go over each addition carefully."),(0,r.kt)("div",{class:"filename"},"Controllers/AccountController.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.Mvc;\nusing Microsoft.AspNetCore.Identity;\nusing ToDoList.Models;\nusing System.Threading.Tasks;\nusing ToDoList.ViewModels;\n\nnamespace ToDoList.Controllers\n{\n  public class AccountController : Controller\n  {\n    private readonly ToDoListContext _db;\n    private readonly UserManager<ApplicationUser> _userManager;\n    private readonly SignInManager<ApplicationUser> _signInManager;\n\n    public AccountController (UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, ToDoListContext db)\n    {\n      _userManager = userManager;\n      _signInManager = signInManager;\n      _db = db;\n    }\n\n    public ActionResult Index()\n    {\n      return View();\n    }\n\n    public IActionResult Register()\n    {\n      return View();\n    }\n\n    [HttpPost]\n    public async Task<ActionResult> Register (RegisterViewModel model)\n    {\n      if (!ModelState.IsValid)\n      {\n        return View(model);\n      }\n      else\n      {\n        ApplicationUser user = new ApplicationUser { UserName = model.Email };\n        IdentityResult result = await _userManager.CreateAsync(user, model.Password);\n        if (result.Succeeded)\n        {\n          return RedirectToAction("Index");\n        }\n        else\n        {\n          foreach (IdentityError error in result.Errors)\n          {\n            ModelState.AddModelError("", error.Description);\n          }\n          return View(model);\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In addition to adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"using")," directive for ",(0,r.kt)("inlineCode",{parentName:"p"},"Microsoft.AspNetCore.Identity"),", we also add one for ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Threading.Tasks"),". This will allow us to use asynchronous Tasks so we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," to register new users.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We also include a ",(0,r.kt)("inlineCode",{parentName:"p"},"using")," directive for ",(0,r.kt)("inlineCode",{parentName:"p"},"ToDoList.ViewModels"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"ViewModels")," namespace will include view models that we haven't created yet, like the ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisterViewModel"),". Note that we haven't covered this yet, and we will in the very next lesson.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We have private, readonly fields for ",(0,r.kt)("inlineCode",{parentName:"p"},"_userManager")," and  ",(0,r.kt)("inlineCode",{parentName:"p"},"_signInManager"),". The value for each of these will be set to Identity's ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.identity.usermanager-1?view=aspnetcore-6.0"},(0,r.kt)("inlineCode",{parentName:"a"},"UserManager<TUser>"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.identity.signinmanager-1?view=aspnetcore-6.0"},(0,r.kt)("inlineCode",{parentName:"a"},"SignInManager<TUser>"))," classes respectively. Both of these classes contains methods that we'll use to create users and sign them in. For registration, we'll use methods from the ",(0,r.kt)("inlineCode",{parentName:"p"},"UserManager<TUser>")," class. For signing in and out, we'll use methods from the ",(0,r.kt)("inlineCode",{parentName:"p"},"SignInManager<TUser>")," class.\n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Note that the values for the ",(0,r.kt)("inlineCode",{parentName:"p"},"_userManager")," and  ",(0,r.kt)("inlineCode",{parentName:"p"},"_signInManager")," fields are set in the ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountController")," class constructor using ",(0,r.kt)("strong",{parentName:"p"},"dependency injection")," to access the services we set up in ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs"),". Let's review dependency injection now. "))),(0,r.kt)("h3",{id:"dependency-injection"},"Dependency Injection"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dependency injection")," is the act of providing a helpful tool (known as a ",(0,r.kt)("strong",{parentName:"p"},"service"),") to part of an application that needs it ",(0,r.kt)("em",{parentName:"p"},"before")," it actually needs it. This ensures that the application doesn't need to worry about locating, loading, finding, or creating that service on its own. "),(0,r.kt)("p",null,"ASP.NET Core uses dependency injection to make available all services set up in ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs")," to controllers and views. We've already used ASP.NET Core's system of dependency injection to set up our access to our database via the ",(0,r.kt)("inlineCode",{parentName:"p"},"_db")," field. "),(0,r.kt)("p",null,"Right now, we're accessing Identity's ",(0,r.kt)("inlineCode",{parentName:"p"},"UserManager")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SignInManager")," services, which have been injected into the ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountController")," constructor so that our controller will have access to these services as needed."),(0,r.kt)("p",null,"This follows what is known as the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles#explicit-dependencies"},'"explicit dependencies principle,"')," which states that methods and classes should explicitly require any dependencies. This makes the code much easier to read and understand and also ensures that our code will function correctly."),(0,r.kt)("p",null,"Dependency injection can be a tricky concept to grasp simply because it happens implicitly. It's functionality that's built into the ASP.NET Core framework, which makes it become a bit like ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Black_box"},"black box")," magic. Well, know that when you are just starting out as a developer it's not important to have a deep understanding of dependency injection. If you'd like to learn more about how ASP.NET Core uses dependency injection, we recommend beginning with the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-6.0"},"ASP.NET Core documentation on Dependency Injection"),"."),(0,r.kt)("h3",{id:"routing"},"Routing"),(0,r.kt)("p",null,"Now let's take a look at the routes we've added to ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountController"),". "),(0,r.kt)("p",null,"Our ",(0,r.kt)("inlineCode",{parentName:"p"},"Index()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Register()")," GET routes are straightforward \u2014 we just route to the view. In the next lesson, we'll get to creating those views, but as a preview the ",(0,r.kt)("inlineCode",{parentName:"p"},"Index")," view will show a main page of options for accounts (like registration, signing in and out), and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Register")," view will show a form that allows a user to input their personal details to create a new user account."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Register()")," POST route has a lot of new code, so let's take another look at it before working through the details of what's going on:"),(0,r.kt)("div",{class:"filename"},"Controllers/AccountController.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'  [HttpPost]\n  public async Task<ActionResult> Register (RegisterViewModel model)\n  {\n    if (!ModelState.IsValid)\n    {\n      return View(model);\n    }\n    else\n    {\n      ApplicationUser user = new ApplicationUser { UserName = model.Email };\n      IdentityResult result = await _userManager.CreateAsync(user, model.Password);\n      if (result.Succeeded)\n      {\n        return RedirectToAction("Index");\n      }\n      else\n      {\n        foreach (IdentityError error in result.Errors)\n        {\n          ModelState.AddModelError("", error.Description);\n        }\n        return View(model);\n      }\n    }\n  }\n')),(0,r.kt)("h4",{id:"method-signature"},"Method Signature"),(0,r.kt)("p",null,"This method is an ",(0,r.kt)("inlineCode",{parentName:"p"},"async Task")," because creating user accounts will be an asynchronous action. Our ",(0,r.kt)("inlineCode",{parentName:"p"},"Register()")," action doesn't return an ",(0,r.kt)("inlineCode",{parentName:"p"},"ActionResult"),". Instead, it returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," containing an ",(0,r.kt)("inlineCode",{parentName:"p"},"ActionResult"),". Remember, the built-in ",(0,r.kt)("inlineCode",{parentName:"p"},"Task<TResult>")," class represents asynchronous actions that haven't been completed yet."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Register()")," action also takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"model")," of type ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisterViewModel")," as an argument. We will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisterViewModel")," in the next lesson that will represent the user's data when registering for a new account. The data we'll collect will be a user's email and password. We haven't covered the concept of \"view models\" before and we will in the next lesson. For now, do not worry about it."),(0,r.kt)("h4",{id:"method-body"},"Method Body"),(0,r.kt)("p",null,"Within the body of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Register()")," POST action method, we first check if our model is valid: if it is (meaning that the registration form has been filled out correctly), then we continue with the registration process, and if not, we return to the registration view. Whenever we see ",(0,r.kt)("inlineCode",{parentName:"p"},"ModelState.IsValid"),", it means that we're using validation attributes in our register's model. We haven't created our register's model yet, but we will in the next lesson.  "),(0,r.kt)("p",null,"The code for registration contains the bulk of the new code. The first thing we do if our model state is valid is create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"ApplicationUser")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Email")," from the form submission as its ",(0,r.kt)("inlineCode",{parentName:"p"},"UserName"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"ApplicationUser user = new ApplicationUser { UserName = model.Email };\n")),(0,r.kt)("p",null,"Then, we invoke an async method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"IdentityResult result = await _userManager.CreateAsync(user, model.Password);\n")),(0,r.kt)("p",null,"Remember that ",(0,r.kt)("inlineCode",{parentName:"p"},"_userManager")," represents Identity's ",(0,r.kt)("inlineCode",{parentName:"p"},"UserManager<TUser>")," class, which was injected as a service into the ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountController"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"UserManager<TUser>")," class has a method called ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateAsync()"),". As explained in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.identity.usermanager-1.createasync?view=aspnetcore-6.0"},"the documentation"),", this method will create a user with the provided password."),(0,r.kt)("p",null,"Our async method will return a new ",(0,r.kt)("inlineCode",{parentName:"p"},"IdentityResult")," object which we call ",(0,r.kt)("inlineCode",{parentName:"p"},"result"),". ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.identity.identityresult?view=aspnetcore-6.0"},"The ",(0,r.kt)("inlineCode",{parentName:"a"},"IdentityResult")," class")," simply represents the result of an Identity-driven action, like whether it's successful or not."),(0,r.kt)("p",null,"We use ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," because ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateAsync()")," is an asynchronous action, which means our application needs to wait until ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateAsync()")," successfully returns an ",(0,r.kt)("inlineCode",{parentName:"p"},"IdentityResult")," before we actually define ",(0,r.kt)("inlineCode",{parentName:"p"},"result"),", and before we can move on to process other code."),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateAsync()")," takes two arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("inlineCode",{parentName:"li"},"ApplicationUser")," with user information;"),(0,r.kt)("li",{parentName:"ul"},"A password that will be encrypted when the user is added to the database.")),(0,r.kt)("p",null,"The next thing we do is check whether or not our user creation succeeded. Here's the code for that one more time:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'IdentityResult result = await _userManager.CreateAsync(user, model.Password);\nif (result.Succeeded)\n{\n  return RedirectToAction("Index");\n}\nelse\n{\n  foreach (IdentityError error in result.Errors)\n  {\n    ModelState.AddModelError("", error.Description);\n  }\n  return View(model);\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"IdentityResult")," object contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"Succeeded")," property that contains a bool. After creating the new user, we check the ",(0,r.kt)("inlineCode",{parentName:"p"},"result.Succeeded")," property in an if statement to determine what to do next: if ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateAsync()")," is successful, the controller redirects to ",(0,r.kt)("inlineCode",{parentName:"p"},"Index"),"; if the user creation fails, then the ",(0,r.kt)("inlineCode",{parentName:"p"},"Register")," view is returned with an error message about why the user could not be created."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"IdentityResult")," object contains an ",(0,r.kt)("inlineCode",{parentName:"p"},"Errors")," property that is of the type ",(0,r.kt)("inlineCode",{parentName:"p"},"IEnnumerable<IdentityError>"),". That means it's an iterable collection of ",(0,r.kt)("inlineCode",{parentName:"p"},"IdentityError")," objects. Each error ",(0,r.kt)("inlineCode",{parentName:"p"},"IdentityError")," object itself has a ",(0,r.kt)("inlineCode",{parentName:"p"},"Description")," property that contains a string description of the Identity error that occurred. We use this description to create a new model error to add to our model's state with the following line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'ModelState.AddModelError("", error.Description);\n')),(0,r.kt)("p",null,"It may seem surprising to create model errors in the controller, but this is a great way to use ASP.NET Core's built-in tools around model validation to deliver Identity-related errors. "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"AddModelError()")," method takes two arguments: the first is a key for the error so that we can access it in our view, and the second argument is the description of the error that will be displayed. We've listed an empty string ",(0,r.kt)("inlineCode",{parentName:"p"},'""')," for our error keys. Why so? We don't need unique keys for these errors because we'll be displaying all of them at once in a list using the ",(0,r.kt)("inlineCode",{parentName:"p"},"HTML.ValidationSummary()")," method. We'll get into exactly what that looks like in the next lesson. "),(0,r.kt)("p",null,"After we create a model error for each Identity error and attach it to our ",(0,r.kt)("inlineCode",{parentName:"p"},"model"),"'s state, our job is simply to return our model to the view:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"return View(model);\n")),(0,r.kt)("p",null,"This code will re-display the ",(0,r.kt)("inlineCode",{parentName:"p"},"Register()")," GET action with our same ",(0,r.kt)("inlineCode",{parentName:"p"},"model")," that has the error messages associated with it. If we did not pass in our ",(0,r.kt)("inlineCode",{parentName:"p"},"model")," variable to the view, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Register()")," GET action would display again, but it would have no conception of any errors \u2014 it would be a brand new model, just like hitting the refresh button."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In this lesson, we've added an ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountController")," that includes Identity via dependency injection. We use ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," to use Identity's built-in ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateAsync()")," method, and model validation to ensure that a new user is registered correctly."),(0,r.kt)("p",null,'In the next lesson, we\'ll create the necessary views for users to register an account along with a "ViewModel" that will allow our form to play nicely with Identity.'))}u.isMDXComponent=!0}}]);