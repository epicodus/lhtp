"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[22133],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},37613:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"Introduction to MySQL Workbench: Creating a Database",id:"introduction_to_mysql_workbench_creating_a_database",slug:"introduction_to_mysql_workbench_creating_a_database",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0e_introducing_mysql_workbench.md"},l=void 0,o={unversionedId:"c_and_net_classic/database-basics/introduction_to_mysql_workbench_creating_a_database",id:"c_and_net_classic/database-basics/introduction_to_mysql_workbench_creating_a_database",title:"Introduction to MySQL Workbench: Creating a Database",description:"We'll use a tool called MySQL Workbench to manage our databases. It was created to manage MySQL using a graphical interface. In this lesson, we'll walk through how to use the interface to view, configure, and interact with our databases.",source:"@site/docs/c_and_net_classic/8_database-basics/0e_introducing_mysql_workbench.md",sourceDirName:"c_and_net_classic/8_database-basics",slug:"/c_and_net_classic/database-basics/introduction_to_mysql_workbench_creating_a_database",permalink:"/c_and_net_classic/database-basics/introduction_to_mysql_workbench_creating_a_database",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Introduction to MySQL Workbench: Creating a Database",id:"introduction_to_mysql_workbench_creating_a_database",slug:"introduction_to_mysql_workbench_creating_a_database",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0e_introducing_mysql_workbench.md"},sidebar:"c_and_net_classic",previous:{title:"SQL Basics: Managing MySQL Databases from the Command Line",permalink:"/c_and_net_classic/database-basics/sql_basics_managing_mysql_databases_from_the_command_line"},next:{title:"Connecting a Database to an ASP.NET Core App with MySqlConnector",permalink:"/c_and_net_classic/database-basics/connecting_a_database_to_an_aspnet_core_app_with_mysqlconnector"}},s={},c=[{value:"Accessing MySQL Workbench",id:"accessing-mysql-workbench",level:2},{value:"Viewing existing databases with MySQL Workbench",id:"viewing-existing-databases-with-mysql-workbench",level:3},{value:"Creating a Database with MySQL Workbench",id:"creating-a-database-with-mysql-workbench",level:3},{value:"Creating Tables with MySQL Workbench",id:"creating-tables-with-mysql-workbench",level:3},{value:"Previewing &amp; Saving",id:"previewing--saving",level:4}],p={toc:c},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We'll use a tool called ",(0,r.kt)("strong",{parentName:"p"},"MySQL Workbench")," to manage our databases. It was created to manage MySQL using a graphical interface. In this lesson, we'll walk through how to use the interface to view, configure, and interact with our databases."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," See the ",(0,r.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/c-and-net/getting-started-with-c/installing-and-configuring-mysql"},"Installing and Configuring MySQL")," lesson for instructions on installing MySQL Workbench."),(0,r.kt)("h2",{id:"accessing-mysql-workbench"},"Accessing MySQL Workbench"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MySQL Workbench")," is a GUI (graphical user interface) to interact with databases. Here's how we access the interface."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"First ensure the MySQL server is running by opening Terminal or GitBash (or Windows PowerShell if GitBash does not work as expected) and entering the command ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql -uroot -pepicodus"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"After the servers start running, open MySQL Workbench.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Double click the MySQL instance in the ",(0,r.kt)("em",{parentName:"p"},"MySQL Connections")," section. You may be prompted to enter a password. If so, type ",(0,r.kt)("inlineCode",{parentName:"p"},"epicodus")," if you are using an Epicodus machine or your password if you are using your personal machine.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This will open our MySQL instance."))),(0,r.kt)("p",null,"Follow these same steps to access MySQL Workbench for all future projects."),(0,r.kt)("h3",{id:"viewing-existing-databases-with-mysql-workbench"},"Viewing existing databases with MySQL Workbench"),(0,r.kt)("p",null,"Once we've opened our MySQL interface, we can look at the current databases by clicking on the ",(0,r.kt)("em",{parentName:"p"},"Schemas")," tab:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/schema-mysql-workbench.png",alt:"Schemas tab"})),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"schema")," is simply the structure of a database. In the screenshot above, we have two:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sys\ntest_database\n")),(0,r.kt)("p",null,"Don't worry if ",(0,r.kt)("inlineCode",{parentName:"p"},"test_database")," isn't showing in your instance. The ",(0,r.kt)("em",{parentName:"p"},"sys")," database contains system information for our MySQL server."),(0,r.kt)("p",null,"The window where the schemas are currently being displayed in MySQL Workbench is called the ",(0,r.kt)("em",{parentName:"p"},"navigator window"),". Note that the navigator window can display information other than schemas as well."),(0,r.kt)("p",null,"Other databases may be included such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"information_schema\nmysql\nperformance_schema\n")),(0,r.kt)("p",null,"A quick reminder: don't ever alter default databases. If these files are removed or altered, MySQL will need to be reinstalled. ",(0,r.kt)("strong",{parentName:"p"},"Never alter the ",(0,r.kt)("em",{parentName:"strong"},"information","_","schema"),", ",(0,r.kt)("em",{parentName:"strong"},"mysql"),", ",(0,r.kt)("em",{parentName:"strong"},"sys"),", or ",(0,r.kt)("em",{parentName:"strong"},"performance","_","schema"),", databases in MySQL Workbench.")),(0,r.kt)("h3",{id:"creating-a-database-with-mysql-workbench"},"Creating a Database with MySQL Workbench"),(0,r.kt)("p",null,"After accessing MySQL Workbench and viewing existing databases, we can create a new database with the following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In MySQL Workbench, click the ",(0,r.kt)("em",{parentName:"li"},"Create a new schema in the connected server")," option in the top navbar. It's the fourth icon from the left:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/create-a-new-schema.png",alt:"Create a new schema"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Alternatively, we can right-click in the ",(0,r.kt)("em",{parentName:"p"},"Navigator")," window and select ",(0,r.kt)("em",{parentName:"p"},"Create schema..."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the Main window, we now see a ",(0,r.kt)("em",{parentName:"p"},"new","_","schema")," page.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Enter a name in the ",(0,r.kt)("em",{parentName:"p"},"Database name")," field. For this first project, let's call our database ",(0,r.kt)("inlineCode",{parentName:"p"},"to_do_list_with_mysqlconnector"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We can leave the defaults in place in the drop down options.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("em",{parentName:"p"},"Apply"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A window will appear showing the SQL command to be executed. Select ",(0,r.kt)("em",{parentName:"p"},"Apply")," and ",(0,r.kt)("em",{parentName:"p"},"Finish")," (or ",(0,r.kt)("em",{parentName:"p"},"Close"),") to confirm our new database."))),(0,r.kt)("p",null,"If we click on the ",(0,r.kt)("em",{parentName:"p"},"Schemas")," tab, ",(0,r.kt)("inlineCode",{parentName:"p"},"to_do_list_with_mysqlconnector")," will now be among the listed databases in the navigator window."),(0,r.kt)("h3",{id:"creating-tables-with-mysql-workbench"},"Creating Tables with MySQL Workbench"),(0,r.kt)("p",null,"We'll add a table with two columns to our new schema. We'll call the table ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," and include the following columns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," column will only accept integers.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," field will only accept string values."))),(0,r.kt)("p",null,"Let's create this table now."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Toggle the ",(0,r.kt)("inlineCode",{parentName:"li"},"to_do_list_with_mysqlconnector")," database to view its contents.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Tables\nViews\nStored Procedures\nFunctions\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Right-click ",(0,r.kt)("em",{parentName:"p"},"Tables")," and select ",(0,r.kt)("em",{parentName:"p"},"Create Table..."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Enter ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," in the ",(0,r.kt)("em",{parentName:"p"},"name")," field.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add an ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," column by clicking ",(0,r.kt)("em",{parentName:"p"},"<","click to edit",">")," in the window right below the name of our new table."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Name the column ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," by double-clicking on the ",(0,r.kt)("inlineCode",{parentName:"li"},"Column")," field and typing in the new name."),(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("em",{parentName:"li"},"INT")," from the ",(0,r.kt)("em",{parentName:"li"},"Datatype")," dropdown."),(0,r.kt)("li",{parentName:"ul"},"Check the ",(0,r.kt)("em",{parentName:"li"},"PK")," (primary key), ",(0,r.kt)("em",{parentName:"li"},"NN")," (not null) and ",(0,r.kt)("em",{parentName:"li"},"AI")," (auto increment) checkboxes. Our ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," column will be our primary key, which means we don't ever want it to have a ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," value and we always want it to auto-increment."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add another row in this window and do the following:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Name the column ",(0,r.kt)("inlineCode",{parentName:"li"},"description"),"."),(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("em",{parentName:"li"},"VARCHAR")," under ",(0,r.kt)("em",{parentName:"li"},"Type")," and add ",(0,r.kt)("em",{parentName:"li"},"255")," to the ",(0,r.kt)("em",{parentName:"li"},"Length/Values")," argument, instead of the default 45.")))),(0,r.kt)("p",null,"The following screenshot demonstrates what the window should look like after the two columns have been added:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/add-to-do-list-table.png",alt:"Adding two columns to table"})),(0,r.kt)("p",null,"If you make a mistake with one of the columns and want to start over, right-click on the column and click ",(0,r.kt)("em",{parentName:"p"},"Delete Selected"),"."),(0,r.kt)("h4",{id:"previewing--saving"},"Previewing & Saving"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Next, click the ",(0,r.kt)("em",{parentName:"li"},"Apply")," button on the bottom right of the page. A dialog box will pop up. The SQL statements that appear are very similar to what we'd type in the command line if we were creating this table manually:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `to_do_list_with_mysqlconnector`.`items` (\n  `id` INT NOT NULL AUTO_INCREMENT,\n  `description` VARCHAR(255) NULL,\n  PRIMARY KEY (`id`));\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After confirming our SQL, we can click ",(0,r.kt)("em",{parentName:"li"},"Apply")," and ",(0,r.kt)("em",{parentName:"li"},"Close")," to generate this table.")),(0,r.kt)("p",null,"MySQL Workbench makes it much easier to add and update databases. With just a few clicks, we were able to add a new database and table for our To Do List. In the next lesson, we'll learn how to connect this database to our application."))}d.isMDXComponent=!0}}]);