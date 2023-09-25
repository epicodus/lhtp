"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[84455],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,b=c["".concat(l,".").concat(u)]||c[u]||m[u]||s;return a?n.createElement(b,i(i({ref:t},d),{},{components:a})):n.createElement(b,i({ref:t},d))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},90504:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const s={title:"Introduction to Databases",id:"introduction_to_databases",slug:"introduction_to_databases",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/10_database-basics/0b_introduction_to_databases.md"},i=void 0,o={unversionedId:"c_and_net_part_time/database-basics/introduction_to_databases",id:"c_and_net_part_time/database-basics/introduction_to_databases",title:"Introduction to Databases",description:"Before we begin connecting databases to our MVC apps, let's explore how databases work. This lesson will walk through basic database vocabulary and discuss how most standard databases organize information.",source:"@site/docs/c_and_net_part_time/10_database-basics/0b_introduction_to_databases.md",sourceDirName:"c_and_net_part_time/10_database-basics",slug:"/c_and_net_part_time/database-basics/introduction_to_databases",permalink:"/lhtp/c_and_net_part_time/database-basics/introduction_to_databases",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Introduction to Databases",id:"introduction_to_databases",slug:"introduction_to_databases",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/10_database-basics/0b_introduction_to_databases.md"},sidebar:"c_and_net_part_time",previous:{title:"Database Basics Objectives",permalink:"/lhtp/c_and_net_part_time/database-basics/database_basics_objectives"},next:{title:"SQL Basics: Managing MySQL Databases from the Command Line",permalink:"/lhtp/c_and_net_part_time/database-basics/sql_basics_managing_mysql_databases_from_the_command_line"}},l={},p=[{value:"Database Structure",id:"database-structure",level:2},{value:"Example Databases",id:"example-databases",level:3},{value:"C# Classes and Database Tables",id:"c-classes-and-database-tables",level:2},{value:"Rows and Columns",id:"rows-and-columns",level:3},{value:"<code>stages</code> Table",id:"stages-table",level:4},{value:"<code>artists</code> Table",id:"artists-table",level:4},{value:"Primary Keys",id:"primary-keys",level:3}],d={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Before we begin connecting databases to our MVC apps, let's explore how databases work. This lesson will walk through basic database vocabulary and discuss how most standard databases organize information."),(0,r.kt)("h2",{id:"database-structure"},"Database Structure"),(0,r.kt)("hr",null),(0,r.kt)("p",null,'If you\'ve ever used Microsoft Excel or other similar software to create spreadsheets, you already know something about how databases are structured. Databases are like a bunch of linked spreadsheets. Each "spreadsheet" of information is called a ',(0,r.kt)("strong",{parentName:"p"},"table"),"."),(0,r.kt)("h3",{id:"example-databases"},"Example Databases"),(0,r.kt)("p",null,"Let's make a mock database table that includes names and phone numbers:"),(0,r.kt)("pre",null,"contacts ------- id | name    | phone ---+---------+----------- 1  | Ahmed   | 9165551212 2  | Jessica | 3235551212 3  | Sofia   | 4155551212"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Just like a spreadsheet, this database ",(0,r.kt)("strong",{parentName:"p"},"table")," has a name. This one is called ",(0,r.kt)("inlineCode",{parentName:"p"},"contacts"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It has three ",(0,r.kt)("strong",{parentName:"p"},"columns"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"phone"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It also contains three entries, or ",(0,r.kt)("strong",{parentName:"p"},"rows"),": one for ",(0,r.kt)("inlineCode",{parentName:"p"},"Ahmed"),", one for ",(0,r.kt)("inlineCode",{parentName:"p"},"Jessica"),", and a third for ",(0,r.kt)("inlineCode",{parentName:"p"},"Sofia"),". Each row contains an ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"phone")," number corresponding to this person.  "))),(0,r.kt)("p",null,"Here's another example. This one contains booleans:"),(0,r.kt)("pre",null,"things_in_portland ------------------ id | category     | in_portland ---+--------------+------------ 1  | sunshine     | false 2  | moonshine    | true 3  | shiny things | true"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This ",(0,r.kt)("strong",{parentName:"p"},"table")," is titled ",(0,r.kt)("inlineCode",{parentName:"p"},"things_in_portland"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Its ",(0,r.kt)("strong",{parentName:"p"},"columns")," are ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"category"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"in_portland"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It contains three ",(0,r.kt)("strong",{parentName:"p"},"rows"),"."))),(0,r.kt)("h2",{id:"c-classes-and-database-tables"},"C# Classes and Database Tables"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Let's consider another basic example. This time, we'll explore how components of a database will work with logic from our C# applications."),(0,r.kt)("p",null,"Let's pretend we're organizing a music festival. The festival has multiple music stages and many different artists. We've been asked to create an app that will create a program for the festival by tracking the following information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Which ",(0,r.kt)("strong",{parentName:"li"},"artists")," are playing at the festival, including;",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Their name."),(0,r.kt)("li",{parentName:"ul"},"How many members their band has."),(0,r.kt)("li",{parentName:"ul"},"The genre of music they play."))),(0,r.kt)("li",{parentName:"ul"},"Which ",(0,r.kt)("strong",{parentName:"li"},"stages")," the festival has, including;",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The name of the stage."),(0,r.kt)("li",{parentName:"ul"},"The location of the stage in the festival."),(0,r.kt)("li",{parentName:"ul"},"The audience capacity at that stage.")))),(0,r.kt)("p",null,"Before we consider our database, let's first determine how we'd represent this information in C# code. We should immediately think of two classes for this application:  ",(0,r.kt)("inlineCode",{parentName:"p"},"Stage")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Artist"),".  To keep it simple, our ",(0,r.kt)("inlineCode",{parentName:"p"},"Stage")," class has three properties: ",(0,r.kt)("inlineCode",{parentName:"p"},"Name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Location"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Capacity"),". Our ",(0,r.kt)("inlineCode",{parentName:"p"},"Artist")," class also has three properties: ",(0,r.kt)("inlineCode",{parentName:"p"},"Name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Members"),", and",(0,r.kt)("inlineCode",{parentName:"p"},"Genre"),".  "),(0,r.kt)("p",null,"Here are the classes for ",(0,r.kt)("inlineCode",{parentName:"p"},"Artist")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Stage"),":"),(0,r.kt)("div",{class:"filename"},"Stage.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"class Stage\n{\n  public string Name { get; set; }\n  public string Location { get; set; }\n  public int Capacity { get; set; }\n}\n")),(0,r.kt)("div",{class:"filename"},"Artist.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"class Artist\n{\n  public string Name { get; set; }\n  public string Members { get; set; }\n  public string Genre { get; set; }\n}\n")),(0,r.kt)("p",null,"In order to store these objects in a database, our database tables would be structured like this:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"stages")," table"),(0,r.kt)("br",null),"\n",(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/relational-database-concepts/stages-empty.png",alt:"stages table"}),(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"artists")," table"),(0,r.kt)("br",null),"\n",(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/relational-database-concepts/artists-empty.png",alt:"artists table"}),(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The C# class name matches the name of the corresponding database table.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each class property is represented with a column on the table.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Classes in C# are singular and capitalized. However, corresponding database tables are plural and lower case. This is standard naming convention."))),(0,r.kt)("h3",{id:"rows-and-columns"},"Rows and Columns"),(0,r.kt)("p",null,"When we create new C# objects, we assign each object property a value in the constructor. We do the same when we store data in a database: assign values to each property. In effect, the equivalent of an object in the database is the ",(0,r.kt)("strong",{parentName:"p"},"row")," with each property value being stored in a property ",(0,r.kt)("strong",{parentName:"p"},"column"),".  "),(0,r.kt)("h4",{id:"stages-table"},(0,r.kt)("inlineCode",{parentName:"h4"},"stages")," Table"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/relational-database-concepts/stages-populated.png",alt:"stages table populated"}),(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("h4",{id:"artists-table"},(0,r.kt)("inlineCode",{parentName:"h4"},"artists")," Table"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/relational-database-concepts/artists-populated.png",alt:"artists table populated"}),(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("p",null,"Here, each ",(0,r.kt)("strong",{parentName:"p"},"row")," in the database represents a C# ",(0,r.kt)("inlineCode",{parentName:"p"},"Artist")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Stage")," object. Each of the object's properties is stored under the database column of the same name."),(0,r.kt)("h3",{id:"primary-keys"},"Primary Keys"),(0,r.kt)("p",null,"When database rows are added, the first column (usually called ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),") is the ",(0,r.kt)("strong",{parentName:"p"},"primary key"),". This is a unique ID for ",(0,r.kt)("em",{parentName:"p"},"that specific row")," on ",(0,r.kt)("em",{parentName:"p"},"that specific table"),". It will never be repeated or reused in the table. Our database will make it for us automatically."),(0,r.kt)("p",null,"In our example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Blue stage")," has a primary key of ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"stages")," table and ",(0,r.kt)("inlineCode",{parentName:"p"},"Pink Martini")," has a primary key of ",(0,r.kt)("inlineCode",{parentName:"p"},"3")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"artists")," table. Similar to the manner we used ",(0,r.kt)("inlineCode",{parentName:"p"},"Id")," properties to locate specific objects last section, these primary database keys are used to locate specific database entries."))}m.isMDXComponent=!0}}]);