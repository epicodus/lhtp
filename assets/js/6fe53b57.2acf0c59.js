"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[38953],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>h});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var p=n.createContext({}),l=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=l(t.components);return n.createElement(p.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},_=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,p=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),c=l(a),_=o,h=c["".concat(p,".").concat(_)]||c[_]||d[_]||r;return a?n.createElement(h,i(i({ref:e},m),{},{components:a})):n.createElement(h,i({ref:e},m))}));function h(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=_;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[c]="string"==typeof t?t:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}_.displayName="MDXCreateElement"},73310:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));const r={title:"Creating a Test Database: Exporting and Importing Databases with MySQL Workbench",id:"creating_a_test_database_exporting_and_importing_databases_with_mysql_workbench",slug:"creating_a_test_database_exporting_and_importing_databases_with_mysql_workbench",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/10_database-basics/0ha_exporting_and_importing_databases.md"},i=void 0,s={unversionedId:"c_and_net_part_time/database-basics/creating_a_test_database_exporting_and_importing_databases_with_mysql_workbench",id:"c_and_net_part_time/database-basics/creating_a_test_database_exporting_and_importing_databases_with_mysql_workbench",title:"Creating a Test Database: Exporting and Importing Databases with MySQL Workbench",description:"In this lesson, we'll learn how to export and import a database using MySQL Workbench. In the process, we'll create a test database for the To Do List. You will also use these instructions to export your database to include in your independent project for this course section.",source:"@site/docs/c_and_net_part_time/10_database-basics/0ha_exporting_and_importing_databases.md",sourceDirName:"c_and_net_part_time/10_database-basics",slug:"/c_and_net_part_time/database-basics/creating_a_test_database_exporting_and_importing_databases_with_mysql_workbench",permalink:"/lhtp/c_and_net_part_time/database-basics/creating_a_test_database_exporting_and_importing_databases_with_mysql_workbench",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Creating a Test Database: Exporting and Importing Databases with MySQL Workbench",id:"creating_a_test_database_exporting_and_importing_databases_with_mysql_workbench",slug:"creating_a_test_database_exporting_and_importing_databases_with_mysql_workbench",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/10_database-basics/0ha_exporting_and_importing_databases.md"},sidebar:"c_and_net_part_time",previous:{title:"Testing Database Backed Applications",permalink:"/lhtp/c_and_net_part_time/database-basics/testing_database_backed_applications"},next:{title:"Using the Test Database",permalink:"/lhtp/c_and_net_part_time/database-basics/using_the_test_database"}},p={},l=[{value:"Creating a Test Database",id:"creating-a-test-database",level:2},{value:"Exporting <code>to_do_list_with_mysqlconnector</code>",id:"exporting-to_do_list_with_mysqlconnector",level:3},{value:"Importing <code>to_do_list_with_mysqlconnector</code>",id:"importing-to_do_list_with_mysqlconnector",level:3},{value:"Important Note",id:"important-note",level:3}],m={toc:l},c="wrapper";function d(t){let{components:e,...a}=t;return(0,o.kt)(c,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson, we'll learn how to export and import a database using MySQL Workbench. In the process, we'll create a test database for the To Do List. You will also use these instructions to export your database to include in your independent project for this course section."),(0,o.kt)("p",null,"As you are working through the following steps, ",(0,o.kt)("strong",{parentName:"p"},"make sure that the MySQL Workbench application window is expanded to fit your entire screen.")," MySQL's user interface doesn't resize well to smaller windows causing some buttons to be hidden out of view."),(0,o.kt)("h2",{id:"creating-a-test-database"},"Creating a Test Database"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"exporting-to_do_list_with_mysqlconnector"},"Exporting ",(0,o.kt)("inlineCode",{parentName:"h3"},"to_do_list_with_mysqlconnector")),(0,o.kt)("p",null,"Let's create a test database for our To Do List."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Launch MySQL Workbench and open your local instance so that the ",(0,o.kt)("em",{parentName:"p"},"Navigator")," window is visible.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select the ",(0,o.kt)("em",{parentName:"p"},"Administration")," tab from the bottom of the ",(0,o.kt)("em",{parentName:"p"},"Navigator")," window.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("em",{parentName:"p"},"Data Export")," from the list of available options."))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/mysql-workbench-how-to/mysql_data_export.gif",alt:'In the "Navigator" window, select the "Administration" tab and then select "Data Export".'})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select the ",(0,o.kt)("inlineCode",{parentName:"p"},"to_do_list")," in the left hand ",(0,o.kt)("em",{parentName:"p"},"Tables to Export")," window. Choose ",(0,o.kt)("em",{parentName:"p"},"Dump Structure Only")," in the drop down on the right.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("em",{parentName:"p"},"Export to Self-Contained File")," in the Export Options.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Choose a file name and a place to export your database to. For now, the name doesn't matter \u2014 we just need to be able to find it so we can import it again. ",(0,o.kt)("strong",{parentName:"p"},"For the independent project, you'll want to name your database dump file ",(0,o.kt)("inlineCode",{parentName:"strong"},"firstname_lastname.sql")),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"firstname")," is your first name and ",(0,o.kt)("inlineCode",{parentName:"p"},"lastname")," is your last name. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Optionally, you can check the box to ",(0,o.kt)("em",{parentName:"p"},"Include Create Schema"),". Doing so, will include the SQL command to create a database with the same name as the one you are exporting. ",(0,o.kt)("strong",{parentName:"p"},"Do not do this now as you follow along with these instructions to create a test database, and do not do this for the independent project.")," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("em",{parentName:"p"},"Start Export")," button at the bottom right corner. If it's not visible, try expanding the MySQL Workbench window."))),(0,o.kt)("p",null,"We now have a ",(0,o.kt)("inlineCode",{parentName:"p"},".sql")," file that we can use to recreate our ",(0,o.kt)("inlineCode",{parentName:"p"},"to_do_list_with_mysqlconnector")," database."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/mysql-workbench-how-to/mysql_data_export_process.gif",alt:'To export a database, select the database from those listed, select the option to export to self contained file (including the desired target location), and then select "Start Export".'})),(0,o.kt)("h3",{id:"importing-to_do_list_with_mysqlconnector"},"Importing ",(0,o.kt)("inlineCode",{parentName:"h3"},"to_do_list_with_mysqlconnector")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("em",{parentName:"p"},"Navigator")," > ",(0,o.kt)("em",{parentName:"p"},"Administration")," window, select ",(0,o.kt)("em",{parentName:"p"},"Data Import/Restore"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("em",{parentName:"p"},"Import Options")," select ",(0,o.kt)("em",{parentName:"p"},"Import from Self-Contained File"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Navigate to the file we just created.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Under ",(0,o.kt)("em",{parentName:"p"},"Default Schema to be Imported To"),", select the ",(0,o.kt)("em",{parentName:"p"},"New")," button."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Enter the name of your database with ",(0,o.kt)("inlineCode",{parentName:"li"},"_test")," appended to the end."),(0,o.kt)("li",{parentName:"ul"},"In this case ",(0,o.kt)("inlineCode",{parentName:"li"},"to_do_list_with_mysqlconnector_test"),"."),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("em",{parentName:"li"},"Ok"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Navigate to the tab called ",(0,o.kt)("em",{parentName:"p"},"Import Progress")," and click ",(0,o.kt)("em",{parentName:"p"},"Start Import")," at the bottom right corner of the window."))),(0,o.kt)("p",null,"After you are finished with the above steps, reopen the ",(0,o.kt)("em",{parentName:"p"},"Navigator")," > ",(0,o.kt)("em",{parentName:"p"},"Schemas")," tab. Right click and select ",(0,o.kt)("em",{parentName:"p"},"Refresh All"),". Our new test database will appear."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/mysql-workbench-how-to/mysql_data_import_process.gif",alt:'To import a database, select "Import from Self-Contained File", then select "new" under the section called "Default Schema to be Imported To" and in the input that appears put in the name of your database with "_test" appended to the end. Finally, select "Start Import" on in the window tab called "Import Progress".'})),(0,o.kt)("h3",{id:"important-note"},"Important Note"),(0,o.kt)("p",null,"Test databases should ",(0,o.kt)("em",{parentName:"p"},"always")," have the same name as the production database with ",(0,o.kt)("inlineCode",{parentName:"p"},"_test")," appended to the end. They must also contain the exact same structure as the development database, including the same tables, rows and so on. To ensure they're the same, we ",(0,o.kt)("strong",{parentName:"p"},"always")," create our test databases by using our development database as a template."),(0,o.kt)("p",null,"With our test database ready to go, now we can connect our test project to the test database and update our teardown method to empty it."))}d.isMDXComponent=!0}}]);