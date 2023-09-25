"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[5904],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,g=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={title:"4. Many-to-Many Relationships: Join Entities",id:"many_to_many_relationships_join_entities",slug:"many_to_many_relationships_join_entities",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/9_many-to-many-relationships/0c_many_to_many_relationships_join_entities.md"},l=void 0,r={unversionedId:"c_and_net/many-to-many-relationships/many_to_many_relationships_join_entities",id:"c_and_net/many-to-many-relationships/many_to_many_relationships_join_entities",title:"4. Many-to-Many Relationships: Join Entities",description:"In this lesson, we'll see how we can establish a many-to-many relationship in our database and how we can use C# objects to model this relationship. Instead of changing our one-to-many relationship between Category and Item, we'll add a new model called Tag and implement a many-to-many relationship between Item and Tag.",source:"@site/docs/c_and_net/9_many-to-many-relationships/0c_many_to_many_relationships_join_entities.md",sourceDirName:"c_and_net/9_many-to-many-relationships",slug:"/c_and_net/many-to-many-relationships/many_to_many_relationships_join_entities",permalink:"/lhtp/c_and_net/many-to-many-relationships/many_to_many_relationships_join_entities",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"4. Many-to-Many Relationships: Join Entities",id:"many_to_many_relationships_join_entities",slug:"many_to_many_relationships_join_entities",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/9_many-to-many-relationships/0c_many_to_many_relationships_join_entities.md"},sidebar:"c_and_net",previous:{title:"3. Code First Development and Migrations",permalink:"/lhtp/c_and_net/many-to-many-relationships/code_first_development_and_migrations"},next:{title:"5. Many-to-Many Read Functionality",permalink:"/lhtp/c_and_net/many-to-many-relationships/many_to_many_read_functionality"}},s={},p=[{value:"Updating To Do List Models for Many-to-Many",id:"updating-to-do-list-models-for-many-to-many",level:2},{value:"Creating the <code>Tag</code> Model",id:"creating-the-tag-model",level:3},{value:"Creating the JOIN Entity",id:"creating-the-join-entity",level:3},{value:"Adding Navigation Properties for the Many-To-Many Relationship",id:"adding-navigation-properties-for-the-many-to-many-relationship",level:3},{value:"Repository Reference",id:"repository-reference",level:3}],m={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this lesson, we'll see how we can establish a many-to-many relationship in our database and how we can use C# objects to model this relationship. Instead of changing our one-to-many relationship between ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),", we'll add a new model called ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," and implement a many-to-many relationship between ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag"),"."),(0,i.kt)("p",null,"With this new many-to-many relationship, we'll be able to add tags to each item in our To Do List. A tag could be anything that we want to use to further describe the items we add to our To Do List: 'urgent', '?' (to indicate that follow up is necessary), 'low priority', 'due tomorrow', etc. As a many-to-many relationship, one item can have many tags, and each tag can be added to many items. "),(0,i.kt)("h2",{id:"updating-to-do-list-models-for-many-to-many"},"Updating To Do List Models for Many-to-Many"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"In the last lesson, we configured our project to use EF Core migrations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We updated the name of our database to ",(0,i.kt)("inlineCode",{parentName:"li"},"to_do_list_with_many_to_many")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"appsettings.json"),"."),(0,i.kt)("li",{parentName:"ul"},"We installed ",(0,i.kt)("inlineCode",{parentName:"li"},"dotnet-ef")," globally."),(0,i.kt)("li",{parentName:"ul"},"We installed ",(0,i.kt)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.Design")," within our To Do List app. "),(0,i.kt)("li",{parentName:"ul"},"We created our first migration with ",(0,i.kt)("inlineCode",{parentName:"li"},"dotnet ef database add Initial"),"."),(0,i.kt)("li",{parentName:"ul"},"We created our ",(0,i.kt)("inlineCode",{parentName:"li"},"to_do_list_with_many_to_many")," database by running ",(0,i.kt)("inlineCode",{parentName:"li"},"dotnet ef database update"),".")),(0,i.kt)("p",null,"Next, we'll focus on creating and updating the models in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ToDoList/Models")," directory. "),(0,i.kt)("h3",{id:"creating-the-tag-model"},"Creating the ",(0,i.kt)("inlineCode",{parentName:"h3"},"Tag")," Model"),(0,i.kt)("p",null,"The first thing we'll do is create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," class within a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag.cs")," file:"),(0,i.kt)("div",{class:"filename"},"Models/Tag.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ToDoList.Models\n{\n  public class Tag\n    {\n        public int TagId { get; set; }\n        public string Title { get; set; }\n    }\n}\n")),(0,i.kt)("p",null,"Then, we'll update our ",(0,i.kt)("inlineCode",{parentName:"p"},"ToDoListContext.cs")," to include a new ",(0,i.kt)("inlineCode",{parentName:"p"},"DbSet")," to represent the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," table in our database:"),(0,i.kt)("div",{class:"filename"},"Models/ToDoListContext.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.EntityFrameworkCore;\n\nnamespace ToDoList.Models\n{\n  public class ToDoListContext : DbContext\n  {\n    public DbSet<Category> Categories { get; set; }\n    public DbSet<Item> Items { get; set; }\n    public DbSet<Tag> Tags { get; set; }\n\n    public ToDoListContext(DbContextOptions options) : base(options) { }\n  }\n}\n")),(0,i.kt)("p",null,"Now EF Core will recognize the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," class as the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," entity. At this point we can create a new migration and update our database:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ dotnet ef migrations add AddTagEntity\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ donent ef database update\n")),(0,i.kt)("h3",{id:"creating-the-join-entity"},"Creating the JOIN Entity"),(0,i.kt)("p",null,"Next, we'll create a many-to-many relationship between ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),". To do this, we need to create a model that will hold information about the relationship between a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," and an ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),". We'll call the class ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTag"),", which is an alphabetical combination of the two classes. "),(0,i.kt)("div",{class:"filename"},"Models/ItemTag.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ToDoList.Models\n{\n  public class ItemTag\n    {       \n        public int ItemTagId { get; set; }\n        public int ItemId { get; set; }\n        public Item Item { get; set; }\n        public int TagId { get; set; }\n        public Tag Tag { get; set; }\n    }\n}\n")),(0,i.kt)("p",null,"We have three different ",(0,i.kt)("inlineCode",{parentName:"p"},"Id")," properties: one for ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTag"),", one for ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),", and one for ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag"),". In addition to that, we also have both ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," included as navigation properties. Remember that a ",(0,i.kt)("strong",{parentName:"p"},"navigation property")," is simply a property on one entity that includes a reference to a related entity, and it is what EF Core uses to define relationships between classes. In this case, there will be one ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," and one ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," in each many-to-many relationship we create. "),(0,i.kt)("p",null,"Because ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," each contain a reference to just one entity, we can give it a more specific name: ",(0,i.kt)("strong",{parentName:"p"},"reference navigation property"),". We'll add more navigation properties to ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag.cs")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Item.cs")," later to complete the many-to-many relationship."),(0,i.kt)("p",null,"Finally, keep in mind that navigation properties are not saved to the database; instead, they are used in our project by EF Core to fetch the data of related objects (like a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag"),") when we fetch an object (like an ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"). "),(0,i.kt)("p",null,"Next, let's update ",(0,i.kt)("inlineCode",{parentName:"p"},"ToDoListContext.cs")," again to list a new ",(0,i.kt)("inlineCode",{parentName:"p"},"DbSet")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTag"),". "),(0,i.kt)("div",{class:"filename"},"Models/ToDoListContext.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.EntityFrameworkCore;\n\nnamespace ToDoList.Models\n{\n  public class ToDoListContext : DbContext\n  {\n    public DbSet<Category> Categories { get; set; }\n    public DbSet<Item> Items { get; set; }\n    public DbSet<Tag> Tags { get; set; }\n    public DbSet<ItemTag> ItemTags { get; set; }\n\n    public ToDoListContext(DbContextOptions options) : base(options) { }\n  }\n}\n")),(0,i.kt)("p",null,"Once we make the above change, EF Core will recognize ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTag")," as an entity and create a table for it in our database (after we make a new migration, of course). Because ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTag")," is joining two separate models into one, we call this a ",(0,i.kt)("strong",{parentName:"p"},"join entity"),". Similarly, once we update our database to include an ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTag")," table, we call this table a ",(0,i.kt)("strong",{parentName:"p"},"join table"),". This is because its only function is to join together two separate models to track a many-to-many relationship between the two. We must include a join entity for every many-to-many relationship that we want to create between two models."),(0,i.kt)("h3",{id:"adding-navigation-properties-for-the-many-to-many-relationship"},"Adding Navigation Properties for the Many-To-Many Relationship"),(0,i.kt)("p",null,"Next, it's time to create navigation properties for each side of our many-to-many relationship: ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag"),". Since we're dealing with a many-to-many relationship, we're going to add a new collection navigation property to each model. "),(0,i.kt)("p",null,"Let's look at the update ",(0,i.kt)("inlineCode",{parentName:"p"},"Item.cs")," first:"),(0,i.kt)("div",{class:"filename"},"Models/Item.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using System.Collections.Generic;\n\nnamespace ToDoList.Models\n{\n  public class Item\n  {\n    public int ItemId { get; set; }\n    public string Description { get; set; }\n    public int CategoryId { get; set; }\n    public Category Category { get; set; }\n    public List<ItemTag> JoinEntities { get;}\n  }\n}\n")),(0,i.kt)("p",null,"We've added a single new property: ",(0,i.kt)("inlineCode",{parentName:"p"},"public List<ItemTag> JoinEntities { get;}"),". This property is a navigation property. We've called our navigation property ",(0,i.kt)("inlineCode",{parentName:"p"},"JoinEntities"),", because it contains a collection of ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTag")," objects, which is our join entity (which itself represents the join table in our database for ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag"),"). Because ",(0,i.kt)("inlineCode",{parentName:"p"},"JoinEntities")," is a collection of many related entities, we can give it a more specific name: ",(0,i.kt)("strong",{parentName:"p"},"collection navigation property"),". "),(0,i.kt)("p",null,"We'll add the exact same property to ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag.cs"),":"),(0,i.kt)("div",{class:"filename"},"Models/Tag.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using System.Collections.Generic;\n\nnamespace ToDoList.Models\n{\n  public class Tag\n  {\n    public int TagId { get; set; }\n    public string Title { get; set; }\n    public List<ItemTag> JoinEntities { get;}\n  }\n}\n")),(0,i.kt)("p",null,"At this point we should track our recent changes by creating a new migration and updating our database:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ dotnet ef migrations add AddItemTagJoinEntity\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ dotnet ef database update\n")),(0,i.kt)("p",null,"If we take a look in MySQL Workbench, our ",(0,i.kt)("inlineCode",{parentName:"p"},"to_do_list_with_many_to_many")," database now has four tables: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"categories")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"items")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tags")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"itemtags"))),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"itemtags")," table, there are three columns: ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTagId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemId")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"TagId"),". This is exactly what we want."),(0,i.kt)("p",null,"And with that, we've completed the first step of establishing a many-to-many relationship between ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),". Up next, we'll begin updating our controllers and views."),(0,i.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,i.kt)("p",null,"Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-4-to-do-list-with-many-to-many-csharp-net6/tree/2_many_to_many_setup"},(0,i.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  GitHub Repo for To Do List with EF Core Migrations and a Many-to-Many Relationship: 2","_","many","_","to","_","many","_","setup"))))}c.isMDXComponent=!0}}]);