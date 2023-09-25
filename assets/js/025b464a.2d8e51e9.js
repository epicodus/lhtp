"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[5990],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>_});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(a),u=s,_=p["".concat(l,".").concat(u)]||p[u]||b[u]||i;return a?n.createElement(_,r(r({ref:t},d),{},{components:a})):n.createElement(_,r({ref:t},d))}));function _(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,r=new Array(i);r[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:s,r[1]=o;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},83662:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(87462),s=(a(67294),a(3905));const i={title:"Testing Database Backed Applications",id:"testing_database_backed_applications",slug:"testing_database_backed_applications",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0h_testing_database_backed_applications.md"},r=void 0,o={unversionedId:"c_and_net_classic/database-basics/testing_database_backed_applications",id:"c_and_net_classic/database-basics/testing_database_backed_applications",title:"Testing Database Backed Applications",description:"In the last lesson, we created a GetAll() method that queries our database. However, we haven't tested that method yet. Over the next few lessons, we'll learn how to test a database-backed application, covering important considerations and how to export and import databases with MySQL Workbench to create a test database. Then, we'll create our tests for the Item class.",source:"@site/docs/c_and_net_classic/8_database-basics/0h_testing_database_backed_applications.md",sourceDirName:"c_and_net_classic/8_database-basics",slug:"/c_and_net_classic/database-basics/testing_database_backed_applications",permalink:"/c_and_net_classic/database-basics/testing_database_backed_applications",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Testing Database Backed Applications",id:"testing_database_backed_applications",slug:"testing_database_backed_applications",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0h_testing_database_backed_applications.md"},sidebar:"c_and_net_classic",previous:{title:"Retrieving Objects From the Database",permalink:"/c_and_net_classic/database-basics/retrieving_objects_from_the_database"},next:{title:"Creating a Test Database: Exporting and Importing Databases with MySQL Workbench",permalink:"/c_and_net_classic/database-basics/creating_a_test_database_exporting_and_importing_databases_with_mysql_workbench"}},l={},c=[{value:"Testing Considerations for Database-Backed Applications",id:"testing-considerations-for-database-backed-applications",level:2}],d={toc:c},p="wrapper";function b(e){let{components:t,...a}=e;return(0,s.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In the last lesson, we created a ",(0,s.kt)("inlineCode",{parentName:"p"},"GetAll()")," method that queries our database. However, we haven't tested that method yet. Over the next few lessons, we'll learn how to test a database-backed application, covering important considerations and how to export and import databases with MySQL Workbench to create a test database. Then, we'll create our tests for the ",(0,s.kt)("inlineCode",{parentName:"p"},"Item")," class."),(0,s.kt)("h2",{id:"testing-considerations-for-database-backed-applications"},"Testing Considerations for Database-Backed Applications"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"We'll need to use teardown methods to reset data between each test so sample objects created in one test don't stick around and inadvertently affect the results of other tests. We've used teardown methods in past sections, including using ",(0,s.kt)("inlineCode",{parentName:"p"},"IDisposable"),"'s build-in ",(0,s.kt)("inlineCode",{parentName:"p"},"Dispose()")," method."),(0,s.kt)("p",null,"When using a database, our teardown methods will work differently. We don't want to delete our entire database every time we run tests. At the same time, we don't want leftover data causing testing issues, either. This can cause tests to fail in unexpected ways."),(0,s.kt)("p",null,"In order to solve this issue, we'll have two databases, one for testing and one for development:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Our ",(0,s.kt)("strong",{parentName:"p"},"test database")," will hold sample objects for use in tests. That way we can safely delete its contents between tests without losing important data.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Our ",(0,s.kt)("strong",{parentName:"p"},"development database")," will store our application's data. This will not be used for testing, so it won't be emptied when tests run."))),(0,s.kt)("p",null,"In a real-world application, we'd likely also have a ",(0,s.kt)("strong",{parentName:"p"},"production database")," as well."),(0,s.kt)("p",null,"With these considerations in mind, in the next lesson we'll learn how to import and export databases, as well as how to create a test database."))}b.isMDXComponent=!0}}]);