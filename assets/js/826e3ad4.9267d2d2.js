"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[90334],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},16145:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Library Catalog, Recipe Box - Part 4 (day 4)",id:"library_catalog_recipe_box___part_4_day_4",slug:"library_catalog_recipe_box___part_4_day_4",hide_table_of_contents:!0,sidebar_position:17,day:"wednesday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/14_authentication-with-identity/3a_classwork_library_catalog_or_recipe_box_two_day_project_day_4.md"},i=void 0,l={unversionedId:"c_and_net_part_time_evening/authentication-with-identity/library_catalog_recipe_box___part_4_day_4",id:"c_and_net_part_time_evening/authentication-with-identity/library_catalog_recipe_box___part_4_day_4",title:"Library Catalog, Recipe Box - Part 4 (day 4)",description:"Goal: Practice creating many-to-many relationships with your applications. Use Identity to allow users to register, log in and log out. Explore using authorization to limit what users can and can't do in an application.",source:"@site/docs/c_and_net_part_time_evening/14_authentication-with-identity/3a_classwork_library_catalog_or_recipe_box_two_day_project_day_4.md",sourceDirName:"c_and_net_part_time_evening/14_authentication-with-identity",slug:"/c_and_net_part_time_evening/authentication-with-identity/library_catalog_recipe_box___part_4_day_4",permalink:"/lhtp/c_and_net_part_time_evening/authentication-with-identity/library_catalog_recipe_box___part_4_day_4",draft:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"Library Catalog, Recipe Box - Part 4 (day 4)",id:"library_catalog_recipe_box___part_4_day_4",slug:"library_catalog_recipe_box___part_4_day_4",hide_table_of_contents:!0,sidebar_position:17,day:"wednesday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/14_authentication-with-identity/3a_classwork_library_catalog_or_recipe_box_two_day_project_day_4.md"},sidebar:"c_and_net_part_time_evening",previous:{title:"Library Catalog, Recipe Box - Part 3 (day 3)",permalink:"/lhtp/c_and_net_part_time_evening/authentication-with-identity/library_catalog_recipe_box___part_3_day_3"},next:{title:"Open Source Projects",permalink:"/lhtp/c_and_net_part_time_evening/authentication-with-identity/open_source_projects"}},s={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Recipe Box",id:"recipe-box",level:3},{value:"Library",id:"library",level:3},{value:"Design Your Own",id:"design-your-own",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goal"),": Practice creating many-to-many relationships with your applications. Use Identity to allow users to register, log in and log out. Explore using authorization to limit what users can and can't do in an application."),(0,r.kt)("h2",{id:"warm-up"},"Warm Up"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What is the difference between EF Core and Identity?"),(0,r.kt)("li",{parentName:"ul"},"What is the difference between authentication and authorization?"),(0,r.kt)("li",{parentName:"ul"},"How do async and await work in C#?")),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Choose one of the following three projects to work on as a multi-day project. Before coding, think through your design using SQL Designer to visualize the relationships between tables and models. Determine what kind of many-to-many relationships you will implement."),(0,r.kt)("h3",{id:"recipe-box"},"Recipe Box"),(0,r.kt)("p",null,"Build an app that allows users to keep track of recipes. Here are some user stories:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As a user, I want to ",(0,r.kt)("strong",{parentName:"li"},"add")," a recipe with ingredients and instructions, so I remember how to prepare my favorite dishes."),(0,r.kt)("li",{parentName:"ul"},"As a user, I want to ",(0,r.kt)("strong",{parentName:"li"},"tag")," my recipes with different categories, so recipes are easier to find. A recipe can have many tags and a tag can have many recipes."),(0,r.kt)("li",{parentName:"ul"},"As a user, I want to be able to ",(0,r.kt)("strong",{parentName:"li"},"update")," and ",(0,r.kt)("strong",{parentName:"li"},"delete")," tags, so I can have flexibility with how I categorize recipes."),(0,r.kt)("li",{parentName:"ul"},"As a user, I want to ",(0,r.kt)("strong",{parentName:"li"},"edit")," my recipes, so I can make improvements or corrections to my recipes."),(0,r.kt)("li",{parentName:"ul"},"As a user, I want to be able to ",(0,r.kt)("strong",{parentName:"li"},"delete")," recipes I don't like or use, so I don't have to see them as choices."),(0,r.kt)("li",{parentName:"ul"},"As a user, I want to ",(0,r.kt)("strong",{parentName:"li"},"rate")," my recipes, so I know which ones are the best."),(0,r.kt)("li",{parentName:"ul"},"As a user, I want to ",(0,r.kt)("strong",{parentName:"li"},"list my recipes by highest rated")," so I can see which ones I like the best."),(0,r.kt)("li",{parentName:"ul"},"As a user, I want to ",(0,r.kt)("strong",{parentName:"li"},"see all recipes that use a certain ingredient"),", so I can more easily find recipes for the ingredients I have.")),(0,r.kt)("p",null,"Add authentication:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As a user, I want to create an account."),(0,r.kt)("li",{parentName:"ul"},"As a user, I want to be able to log in and log off."),(0,r.kt)("li",{parentName:"ul"},"As a user, I want to be able to see my account details.")),(0,r.kt)("p",null,"Add authorization:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As a user, I should only be able to create, read, update and delete if I am logged in. ")),(0,r.kt)("p",null,"OR"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As a user, I should only be able to create, update and delete if I am logged in. All users should be able to have read functionality.")),(0,r.kt)("h3",{id:"library"},"Library"),(0,r.kt)("p",null,"Create an app to catalog a library's books and let patrons check them out. Below are some user stories to get you started. To differentiate between the two users (librarians and patrons) and their unique needs, create separate locations in the app for each user to go to access their functionality. There's no one way to do this, so discuss with your pair what the best structure is before you start coding. Make sure to add basic authentication."),(0,r.kt)("p",null,"As time allows, explore the optional further exploration topic of authorization with user roles to distinguish between librarians and patrons. Authorization with user roles is introduced in an upcoming lesson, and is not required for the independent project."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As a librarian, I want to ",(0,r.kt)("strong",{parentName:"li"},"create"),", read, update, delete, and ",(0,r.kt)("strong",{parentName:"li"},"list")," books in the catalog, so that we can keep track of our inventory."),(0,r.kt)("li",{parentName:"ul"},"As a librarian, I should only be able to create, update and delete if I am logged in. All users should be able to have read functionality. (Hint: authorize CUD routes for books.)"),(0,r.kt)("li",{parentName:"ul"},"As a librarian, I want to ",(0,r.kt)("strong",{parentName:"li"},"search")," for a book by author or title, so that I can find a book when there are a lot of books in the library."),(0,r.kt)("li",{parentName:"ul"},"As a librarian, I want to ",(0,r.kt)("strong",{parentName:"li"},"enter")," multiple authors for a book, so that I can include accurate information in my catalog. (Hint: make an ",(0,r.kt)("inlineCode",{parentName:"li"},"authors")," table and a ",(0,r.kt)("inlineCode",{parentName:"li"},"books")," table with a many-to-many relationship.)"),(0,r.kt)("li",{parentName:"ul"},"As a patron, I want to ",(0,r.kt)("strong",{parentName:"li"},"check a book out"),", so that I can take it home with me. I should only be able to do this if I am logged in."),(0,r.kt)("li",{parentName:"ul"},"As a patron, I want to know ",(0,r.kt)("strong",{parentName:"li"},"how many copies")," of a book are on the shelf, so that I can see if any are available. (Hint: make a ",(0,r.kt)("inlineCode",{parentName:"li"},"copies")," table; a book should have many copies.)"),(0,r.kt)("li",{parentName:"ul"},"As a patron, I want to see a history of all the books I checked out, so that I can look up the name of that awesome sci-fi novel I read three years ago. (Hint: make a ",(0,r.kt)("inlineCode",{parentName:"li"},"checkouts")," table that is a join table between ",(0,r.kt)("inlineCode",{parentName:"li"},"patrons")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"copies"),".)"),(0,r.kt)("li",{parentName:"ul"},"As a patron, I want to know when a book I checked out is ",(0,r.kt)("strong",{parentName:"li"},"due"),", so that I know when to return it."),(0,r.kt)("li",{parentName:"ul"},"As a librarian, I want to see a ",(0,r.kt)("strong",{parentName:"li"},"list of overdue books"),", so that I can call up the patron who checked them out and tell them to bring them back \u2014 OR ELSE!")),(0,r.kt)("h3",{id:"design-your-own"},"Design Your Own"),(0,r.kt)("p",null,"If you'd prefer, choose another project that includes authentication and authorization. Get approval from an instructor before beginning. You might choose something brand new, or revisit an earlier in-class project. Make sure to include user stories to guide your development before beginning."),(0,r.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Does one of your classes have all CRUD methods implemented?"),(0,r.kt)("li",{parentName:"ul"},"Are you able to view both sides of the many-many relationship? For a particular instance of a class, are you able to view all of the instances of the ",(0,r.kt)("strong",{parentName:"li"},"other")," class that are related to it? And vice versa?"),(0,r.kt)("li",{parentName:"ul"},"Is the many-to-many relationship set up correctly in the database?"),(0,r.kt)("li",{parentName:"ul"},"Is Identity set up so that users can register, log in and log out?"),(0,r.kt)("li",{parentName:"ul"},"Is authorization correctly set up? For instance, can only librarians do CRUD functionality for books? For the recipe application, can users only see their own recipes?")))}d.isMDXComponent=!0}}]);