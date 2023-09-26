"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[33914],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=c(a),u=o,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||s;return a?n.createElement(m,r(r({ref:t},h),{},{components:a})):n.createElement(m,r({ref:t},h))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,r[1]=i;for(var c=2;c<s;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},69712:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const s={title:"Using SQL Designer",id:"using-sql-designer",slug:"using-sql-designer",hide_table_of_contents:!0,sidebar_position:21,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/shared-full-stack/blob/main/sql_designer_walkthrough.md"},r=void 0,i={unversionedId:"c-and-net-classic/database-basics/using-sql-designer",id:"c-and-net-classic/database-basics/using-sql-designer",title:"Using SQL Designer",description:"In this lesson, we'll walk through the process of using SQL Designer, a simple tool for creating and visualizing SQL database relationships.",source:"@site/docs/c-and-net-classic/8_database-basics/sql-designer-walkthrough.md",sourceDirName:"c-and-net-classic/8_database-basics",slug:"/c-and-net-classic/database-basics/using-sql-designer",permalink:"/c-and-net-classic/database-basics/using-sql-designer",draft:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"Using SQL Designer",id:"using-sql-designer",slug:"using-sql-designer",hide_table_of_contents:!0,sidebar_position:21,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/shared-full-stack/blob/main/sql_designer_walkthrough.md"},sidebar:"c-and-net-classic",previous:{title:"Database Schema and Relationship Types",permalink:"/c-and-net-classic/database-basics/database-schema-and-relationship-types"},next:{title:"Inclusive Terminology: Using a Main Branch",permalink:"/c-and-net-classic/database-basics/inclusive-terminology-using-a-main-branch"}},l={},c=[{value:"Using SQL Designer",id:"using-sql-designer",level:2},{value:"Adding Tables",id:"adding-tables",level:3},{value:"Add Attributes",id:"add-attributes",level:3},{value:"Edit Attributes",id:"edit-attributes",level:3},{value:"Create Relationships",id:"create-relationships",level:2},{value:"One-to-One Relationships",id:"one-to-one-relationships",level:3},{value:"One-to-Many Relationships",id:"one-to-many-relationships",level:3},{value:"Many-to-Many Relationships",id:"many-to-many-relationships",level:3},{value:"Example of a Complete Schema",id:"example-of-a-complete-schema",level:3}],h={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson, we'll walk through the process of using ",(0,o.kt)("a",{parentName:"p",href:"https://ondras.zarovi.cz/sql/demo/"},"SQL Designer"),", a simple tool for creating and visualizing SQL database relationships."),(0,o.kt)("h2",{id:"using-sql-designer"},"Using SQL Designer"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"First, we'll cover the basic layout of SQL Designer."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/SHARED/DB-designer-visualizer/Screen1.png",alt:"This is the main screen of SQL designer. Colored lines are drawn around different sections."})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can find the actions for your design space in the area outlined in the green box above."),(0,o.kt)("li",{parentName:"ul"},"The blue box is your current design space. You can add and edit items anywhere on the page."),(0,o.kt)("li",{parentName:"ul"},"The orange box is your whole page display. Inside this display, there's another rectangle which shows your view and where you are in your current design space relative to the whole page.")),(0,o.kt)("h3",{id:"adding-tables"},"Adding Tables"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/SHARED/DB-designer-visualizer/screen2.png",alt:"This screen shows the SQL designer tools. Add Table is selected."}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/SHARED/DB-designer-visualizer/screen3.png",alt:"This screen shows a user selecting where on the page to add their table."})),(0,o.kt)("p",null,"To add a table, click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Table")," action and then use the pointer (which looks like a ",(0,o.kt)("inlineCode",{parentName:"p"},"+"),") to click where you would like to add a table on the page. ",(0,o.kt)("strong",{parentName:"p"},"Do not click and drag the new pointer on the grid."),". Doing so will create a visible rectangle but won't correctly size the table."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/SHARED/DB-designer-visualizer/screen4.png",alt:"This screen shows the dialog box for creating a table."})),(0,o.kt)("p",null,"A dialog box will appear once you've clicked the grid. You can add your table name here. ",(0,o.kt)("strong",{parentName:"p"},"Follow the SQL syntax for your table names based on the specifications you've learned in class.")),(0,o.kt)("h3",{id:"add-attributes"},"Add Attributes"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/SHARED/DB-designer-visualizer/screen5.png",alt:"This screen shows the dialog box for adding attributes to a table."})),(0,o.kt)("p",null,"To add a field, click on a table and then click the ",(0,o.kt)("em",{parentName:"p"},"Add field")," action. A dialog box will appear. Enter the attribute name and type here."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/SHARED/DB-designer-visualizer/screen6.png",alt:"This screen shows an enlarged version of the add attributes dialog box."})),(0,o.kt)("p",null,"To save the field, you can do one of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Press ",(0,o.kt)("em",{parentName:"li"},"Enter")," on your keyboard"),(0,o.kt)("li",{parentName:"ul"},"Click the header for the table you are updating (shown in the image above)"),(0,o.kt)("li",{parentName:"ul"},"Click anywhere else on the grid")),(0,o.kt)("p",null,"Do not click ",(0,o.kt)("em",{parentName:"p"},"EDIT COMMENT")," unless you'd like to add notes about this table."),(0,o.kt)("h3",{id:"edit-attributes"},"Edit Attributes"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/SHARED/DB-designer-visualizer/screen7.png",alt:"This screen shows how to select a specific attribute from a table so it can be edited."})),(0,o.kt)("p",null,"If you made a mistake or would like to change an attribute name, just click the specific attribute. Once it's selected, you can choose the ",(0,o.kt)("em",{parentName:"p"},"Edit field")," action."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/SHARED/DB-designer-visualizer/screen8.png",alt:"This screen shows the dialog box for editing an attirbute."})),(0,o.kt)("p",null,"Then you can simply follow the same instructions for adding attributes to update and save the table."),(0,o.kt)("h2",{id:"create-relationships"},"Create Relationships"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"To add relationships between tables, we need foreign keys. The foreign key of one table corresponds to the ID of another table. There are two methods to add foreign keys in SQL Designer. As we walk through the two methods, take note that in the example images below, we are adding a ",(0,o.kt)("inlineCode",{parentName:"p"},"trick_or_treaters")," foreign key to a ",(0,o.kt)("inlineCode",{parentName:"p"},"trick_or_treaters_candies")," join table, which is part of the process of creating a many-to-many relationship."),(0,o.kt)("p",null,"The first method is to manually enter the foreign key and then connect it to another table. To do so, click on the table (",(0,o.kt)("inlineCode",{parentName:"p"},"trick_or_treaters_candies"),") that will be taking the foreign key and add an attribute. Set the attribute name to the SQL singular syntax of a foreign key (",(0,o.kt)("inlineCode",{parentName:"p"},"trick_or_treater_id"),")."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/SHARED/DB-designer-visualizer/screen9.png",alt:"This screen shows three tables. One table has an id attribute selected while SQL designer tools has Connect Foreign Key tool highlighted."}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/SHARED/DB-designer-visualizer/screen10.png",alt:"This screen shows three tables. One table has an id attribute selected, another table has an attribute highlighted, and SQL designer tools has Connect Foreign Key tool selected."}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/SHARED/DB-designer-visualizer/Screen11.png",alt:"This screen shows the result of using the Connect Foreign Key tool. There is a blue line drawn from one tables attribute to the other."})),(0,o.kt)("p",null,"Next, select the ",(0,o.kt)("em",{parentName:"p"},"id")," attribute from the table (",(0,o.kt)("inlineCode",{parentName:"p"},"trick_or_treaters"),") you're grabbing the foreign id from, select ",(0,o.kt)("em",{parentName:"p"},"Connect foreign key"),", and then select the foreign key attribute (",(0,o.kt)("inlineCode",{parentName:"p"},"trick_or_treater_id"),") you just made. A connection line should now show between these two points."),(0,o.kt)("p",null,"The second method is to select the ",(0,o.kt)("em",{parentName:"p"},"id")," attribute from the table (",(0,o.kt)("inlineCode",{parentName:"p"},"trick_or_treaters"),") you want to grab the foreign id from. Then use the ",(0,o.kt)("em",{parentName:"p"},"Create foreign key")," action. This will prompt you to select the table (",(0,o.kt)("inlineCode",{parentName:"p"},"trick_or_treaters_candies"),") that will hold the foreign key. This will connect the id to the foreign key."),(0,o.kt)("h3",{id:"one-to-one-relationships"},"One-to-One Relationships"),(0,o.kt)("p",null,"For one-to-one relationships, you will need to connect a foreign key in each table to each other. For example, a person only has one brain and a brain is only used by one human."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/SHARED/DB-designer-visualizer/screen18.png",alt:"This screen shows two lines connecting two tables to each other, each with their own id and foreign key connected."})),(0,o.kt)("h3",{id:"one-to-many-relationships"},"One-to-Many Relationships"),(0,o.kt)("p",null,"For one-to-many relationships, you only need to connect the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," of the one to the table which has items that can belong to the one. For example, each child can have multiple imaginary friends but each imaginary friend belongs to one child."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/SHARED/DB-designer-visualizer/screen17.png",alt:"This screen shows a blue line between one table's id and another table's foreign key for that table."})),(0,o.kt)("h3",{id:"many-to-many-relationships"},"Many-to-Many Relationships"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/SHARED/DB-designer-visualizer/screen15.png",alt:"This screen shows three tables."}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/SHARED/DB-designer-visualizer/screen16.png",alt:"This screen shows two of the tables connected to the third table, linking them together."})),(0,o.kt)("p",null,"For many-to-many relationships, you will need to create a join table first. Then use one of the two methods we mentioned above to add foreign keys for both of the tables being joined. For example, a trick or treater can have many types of candies and those same types of candies can also belong to other trick or treaters."),(0,o.kt)("h3",{id:"example-of-a-complete-schema"},"Example of a Complete Schema"),(0,o.kt)("p",null,"A full connected schema would look something like this if all of these examples were in the same program:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/SHARED/DB-designer-visualizer/screen19.png",alt:"This screen shows five tables connected using all the methods this lesson went over."})),(0,o.kt)("p",null,"To remove a connection, click the foreign key you want to remove and click ",(0,o.kt)("em",{parentName:"p"},"Remove foreign key"),". The attribute will still exist for you to connect to another ",(0,o.kt)("em",{parentName:"p"},"id"),", you can click ",(0,o.kt)("em",{parentName:"p"},"Remove field")," to delete it completely."),(0,o.kt)("p",null,"When you are done, take a screenshot of the schema and add it to your README!"))}d.isMDXComponent=!0}}]);