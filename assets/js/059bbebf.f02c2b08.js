"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[8364],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),p=o,b=m["".concat(s,".").concat(p)]||m[p]||u[p]||i;return n?a.createElement(b,r(r({ref:t},c),{},{components:n})):a.createElement(b,r({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},31350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const i={title:"Deleting Objects in the Database",id:"deleting-objects-in-the-database",slug:"deleting-objects-in-the-database",hide_table_of_contents:!0,sidebar_position:10,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0i_deleting_objects_in_the_database.md"},r=void 0,l={unversionedId:"c-and-net/database-basics/deleting-objects-in-the-database",id:"c-and-net/database-basics/deleting-objects-in-the-database",title:"Deleting Objects in the Database",description:"In the last lesson, we updated our teardown method for Item tests so that it utilizes our test database. However, our ClearAll() method doesn't have logic to clear Items from the database yet. In this lesson, we'll discuss how to write a method that deletes all table entries in a database. Once this is done, our teardown test method will be functional, allowing us to develop further database-driven functionality with the \"Red, Green, Refactor\" TDD workflow.",source:"@site/docs/c-and-net/8_database-basics/0i-deleting-objects-in-the-database.md",sourceDirName:"c-and-net/8_database-basics",slug:"/c-and-net/database-basics/deleting-objects-in-the-database",permalink:"/c-and-net/database-basics/deleting-objects-in-the-database",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Deleting Objects in the Database",id:"deleting-objects-in-the-database",slug:"deleting-objects-in-the-database",hide_table_of_contents:!0,sidebar_position:10,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0i_deleting_objects_in_the_database.md"},sidebar:"c-and-net",previous:{title:"Using the Test Database",permalink:"/c-and-net/database-basics/using-the-test-database"},next:{title:"Testing for an Empty Database",permalink:"/c-and-net/database-basics/testing-for-an-empty-database"}},s={},d=[{value:"Deleting All Objects from the Database",id:"deleting-all-objects-from-the-database",level:2}],c={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the last lesson, we updated our teardown method for ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," tests so that it utilizes our test database. However, our ",(0,o.kt)("inlineCode",{parentName:"p"},"ClearAll()")," method doesn't have logic to clear ",(0,o.kt)("inlineCode",{parentName:"p"},"Item"),'s from the database yet. In this lesson, we\'ll discuss how to write a method that deletes all table entries in a database. Once this is done, our teardown test method will be functional, allowing us to develop further database-driven functionality with the "Red, Green, Refactor" TDD workflow.'),(0,o.kt)("h2",{id:"deleting-all-objects-from-the-database"},"Deleting All Objects from the Database"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Let's update our existing ",(0,o.kt)("inlineCode",{parentName:"p"},"ClearAll()")," method to interact with our database. If you've followed lessons exactly, ",(0,o.kt)("inlineCode",{parentName:"p"},"ClearAll()")," should currently be empty. Let's add code to create and open a new database connection."),(0,o.kt)("div",{class:"filename"},"ToDoList/Models/Item.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"...\n\n   public static void ClearAll()\n   {\n     MySqlConnection conn = new MySqlConnection(DBConfiguration.ConnectionString);\n     conn.Open();\n   }\n\n...\n")),(0,o.kt)("p",null,"We call ",(0,o.kt)("inlineCode",{parentName:"p"},"new MySqlConnection(DBConfiguration.ConnectionString);")," to create our ",(0,o.kt)("inlineCode",{parentName:"p"},"conn")," object and then call ",(0,o.kt)("inlineCode",{parentName:"p"},"Open()")," on it to open the connection. Remember that ",(0,o.kt)("inlineCode",{parentName:"p"},"DBConfiguration.ConnectionString")," is originally defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"DatabaseConfig.cs"),"."),(0,o.kt)("p",null,"Next, we'll create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"MySqlCommand")," object. It will include a SQL command to delete all rows from our ",(0,o.kt)("inlineCode",{parentName:"p"},"items")," database table:"),(0,o.kt)("div",{class:"filename"},"ToDoList/Models/Item.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n  public static void ClearAll()\n  {\n      MySqlConnection conn = new MySqlConnection(DBConfiguration.ConnectionString);\n      conn.Open();\n\n      MySqlCommand cmd = conn.CreateCommand() as MySqlCommand;\n      cmd.CommandText = "DELETE FROM items;";\n  }\n\n...\n')),(0,o.kt)("p",null,"We define the ",(0,o.kt)("inlineCode",{parentName:"p"},"CommandText")," property of ",(0,o.kt)("inlineCode",{parentName:"p"},"cmd")," as the SQL statement ",(0,o.kt)("inlineCode",{parentName:"p"},'"DELETE FROM items;"'),", which will clear the entire ",(0,o.kt)("inlineCode",{parentName:"p"},"items")," table in our database."),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"GetAll()")," we used a reader object to launch our SQL query and return data. However, we don't need to read anything when we delete something. In fact, we don't need anything returned to us at all. We just want the specified information removed from the database."),(0,o.kt)("p",null,"We'll execute this command using a new method from the MySqlConnector library:"),(0,o.kt)("div",{class:"filename"},"ToDoList/Models/Item.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n   public static void ClearAll()\n   {\n     MySqlConnection conn = new MySqlConnection(DBConfiguration.ConnectionString);\n     conn.Open();\n\n     MySqlCommand cmd = conn.CreateCommand() as MySqlCommand;\n     cmd.CommandText = "DELETE FROM items;";\n     cmd.ExecuteNonQuery();\n  }\n\n...\n')),(0,o.kt)("p",null,"SQL statements that modify data instead of querying and returning data are executed with the ",(0,o.kt)("inlineCode",{parentName:"p"},"ExecuteNonQuery()")," method, as seen here. Ultimately, there are two ways we interact with databases: we can either modify or retrieve data."),(0,o.kt)("p",null,"Modifying data can include adding, deleting, or updating entries. On the other hand, retrieving data includes locating and returning entries. When we save data, we're not searching for specific data. Instead, we're modifying the database by adding a new entry."),(0,o.kt)("p",null,"When we execute commands that modify the database, we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ExecuteNonQuery()")," method.  Commands that retrieve data use different methods like ",(0,o.kt)("inlineCode",{parentName:"p"},"ExecuteReader()"),", which we used in our ",(0,o.kt)("inlineCode",{parentName:"p"},"GetAll()")," method."),(0,o.kt)("p",null,"Now we just need to close our database connection when we're done:"),(0,o.kt)("div",{class:"filename"},"ToDoList/Models/Item.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n   public static void ClearAll()\n   {\n     MySqlConnection conn = new MySqlConnection(DBConfiguration.ConnectionString);\n     conn.Open();\n\n     MySqlCommand cmd = conn.CreateCommand() as MySqlCommand;\n     cmd.CommandText = "DELETE FROM items;";\n     cmd.ExecuteNonQuery();\n\n     conn.Close();\n     if (conn != null)\n     {\n      conn.Dispose();\n     }\n  }\n\n...\n')),(0,o.kt)("p",null,"Here we simply call ",(0,o.kt)("inlineCode",{parentName:"p"},"Close()")," to close the connection. Our conditional confirms it's been successfully closed and destroys it if it's not."),(0,o.kt)("p",null,"Now that we've created a ",(0,o.kt)("inlineCode",{parentName:"p"},"ClearAll()")," method to empty our test database between tests, we're ready to write tests for our database-backed methods."))}u.isMDXComponent=!0}}]);