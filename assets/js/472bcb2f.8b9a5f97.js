"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[35141],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=i,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return a?n.createElement(b,r(r({ref:t},p),{},{components:a})):n.createElement(b,r({ref:t},p))}));function b(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,r=new Array(s);r[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var c=2;c<s;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},13382:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const s={title:"Testing for an Empty Database",id:"testing_for_an_empty_database",slug:"testing_for_an_empty_database",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0j_testing_for_an_empty_database.md"},r=void 0,o={unversionedId:"c_and_net_part_time_evening/database-basics/testing_for_an_empty_database",id:"c_and_net_part_time_evening/database-basics/testing_for_an_empty_database",title:"Testing for an Empty Database",description:"Now that we have both ClearAll() and GetAll() methods that interact with our database, let's begin writing tests for our methods. As always, we begin by testing the simplest possible behavior. In this case, we'll start with a test to make sure the database is empty.",source:"@site/docs/c_and_net_part_time_evening/10_database-basics/0j_testing_for_an_empty_database.md",sourceDirName:"c_and_net_part_time_evening/10_database-basics",slug:"/c_and_net_part_time_evening/database-basics/testing_for_an_empty_database",permalink:"/c_and_net_part_time_evening/database-basics/testing_for_an_empty_database",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Testing for an Empty Database",id:"testing_for_an_empty_database",slug:"testing_for_an_empty_database",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0j_testing_for_an_empty_database.md"},sidebar:"c_and_net_part_time_evening",previous:{title:"Deleting Objects in the Database",permalink:"/c_and_net_part_time_evening/database-basics/deleting_objects_in_the_database"},next:{title:"Overriding Equals and GetHashCode",permalink:"/c_and_net_part_time_evening/database-basics/overriding_equals_and_gethashcode"}},l={},c=[{value:"Refactoring to Begin Testing Database Functionality",id:"refactoring-to-begin-testing-database-functionality",level:2},{value:"Testing Database-Backed Functionality",id:"testing-database-backed-functionality",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Now that we have both ",(0,i.kt)("inlineCode",{parentName:"p"},"ClearAll()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAll()")," methods that interact with our database, let's begin writing tests for our methods. As always, we begin by testing the simplest possible behavior. In this case, we'll start with a test to make sure the database is empty."),(0,i.kt)("h2",{id:"refactoring-to-begin-testing-database-functionality"},"Refactoring to Begin Testing Database Functionality"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Before we get started, we'll need to comment out all of our tests. Because we are in the process of changing our application's functionality, we will have to go through tests one by one to get them passing again. We won't go through the \"Red, Green, Refactor\" process because we've already written our method. Make sure that you don't comment out the code for ",(0,i.kt)("inlineCode",{parentName:"p"},"Dispose()"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"Configuration")," property, or ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTests()")," in the process."),(0,i.kt)("h2",{id:"testing-database-backed-functionality"},"Testing Database-Backed Functionality"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Let's begin testing our new database-backed functionality. We'll write a test confirming that we begin with an empty database. As discussed at the beginning of this lesson, this is the simplest possible behavior our database will exhibit."),(0,i.kt)("p",null,"We already have a commented out test that confirms ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAll()")," returns an empty list. We can simply update its name and reuse the test:"),(0,i.kt)("div",{class:"filename"},"ToDoList.Tests/ModelTests/ItemsTest.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"...\n\n[TestMethod]\npublic void GetAll_ReturnsEmptyListFromDatabase_ItemList()\n{\n  //Arrange\n  List<Item> newList = new List<Item> { };\n\n  //Act\n  List<Item> result = Item.GetAll();\n\n  //Assert\n  CollectionAssert.AreEqual(newList, result);\n}\n\n...\n")),(0,i.kt)("p",null,"If we run our test, it will pass. This is because all of our code to make a database connection isn't actually adding anything to ",(0,i.kt)("inlineCode",{parentName:"p"},"allItems"),". We could comment out every line other than the first line ",(0,i.kt)("inlineCode",{parentName:"p"},"List<Item> allItems = new List<Item> { };")," and the last line of ",(0,i.kt)("inlineCode",{parentName:"p"},"return allItems;")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAll()")," method and it would still pass. Either way, our method is returning an empty list. However, it's still important that we have this test in place because it's possible that other tests and methods we add will break this test. In fact, this test ",(0,i.kt)("em",{parentName:"p"},"will")," break if we don't make sure that we clear our database between each run, so it will provide assurance that our database is correctly clearing between tests."))}u.isMDXComponent=!0}}]);