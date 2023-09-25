"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[13330],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2823:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={title:"Further Exploration with Testing",id:"further_exploration_with_testing",slug:"further_exploration_with_testing",hide_table_of_contents:!0,sidebar_position:28,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/10_database-basics/1h_further_exploration_with_testing.md"},a=void 0,s={unversionedId:"c_and_net_part_time_evening/database-basics/further_exploration_with_testing",id:"c_and_net_part_time_evening/database-basics/further_exploration_with_testing",title:"Further Exploration with Testing",description:"We've been refactoring our controllers to utilize the Entity Framework Core functionality but we haven't updated any tests. Entity Framework Core and LINQ allow us to drastically reduce the code in our models and controllers because they do so much work behind the scenes. As long as we follow proper naming conventions, we don't need to add custom code for our models to properly interact with our database. These frameworks are already heavily tested, so it would be redundant for us to test our constructors, getters, and setters.",source:"@site/docs/c_and_net_part_time_evening/10_database-basics/1h_further_exploration_with_testing.md",sourceDirName:"c_and_net_part_time_evening/10_database-basics",slug:"/c_and_net_part_time_evening/database-basics/further_exploration_with_testing",permalink:"/lhtp/c_and_net_part_time_evening/database-basics/further_exploration_with_testing",draft:!1,tags:[],version:"current",sidebarPosition:28,frontMatter:{title:"Further Exploration with Testing",id:"further_exploration_with_testing",slug:"further_exploration_with_testing",hide_table_of_contents:!0,sidebar_position:28,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/10_database-basics/1h_further_exploration_with_testing.md"},sidebar:"c_and_net_part_time_evening",previous:{title:"Showing Item Details with EF Core",permalink:"/lhtp/c_and_net_part_time_evening/database-basics/showing_item_details_with_ef_core"},next:{title:"Journal #10 Discussion",permalink:"/lhtp/c_and_net_part_time_evening/database-basics/journal_10_discussion"}},c={},l=[],u={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We've been refactoring our controllers to utilize the Entity Framework Core functionality but we haven't updated any tests. Entity Framework Core and LINQ allow us to drastically reduce the code in our models and controllers because they do so much work behind the scenes. As long as we follow proper naming conventions, we don't need to add custom code for our models to properly interact with our database. These frameworks are already heavily tested, so it would be redundant for us to test our constructors, getters, and setters."),(0,o.kt)("p",null,"Similarly, since we use LINQ's database interaction to replace our CRUD methods, we no longer need to test for those, either. In essence, these additions remove the need to test the default functionality of our models entirely. For that reason, we won't be adding more unit tests for these technologies."),(0,o.kt)("p",null,"If we add custom methods to our models, we should add unit tests for them. However, this is outside the scope of this curriculum. You can find examples of how to unit test with EF Core using the InMemory provider in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/ef/core/miscellaneous/testing/in-memory"},"Microsoft's thorough documentation on the topic"),"."),(0,o.kt)("p",null,"To add full coverage, you might also consider looking into integration tests in ASP.NET Core, but we leave these topics as further exploration for you. You can find a walkthrough of how to add integration tests to an MVC app in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/test/integration-tests?view=aspnetcore-6.0"},"Microsoft's documentation"),". Although Microsoft's documentation is comprehensive and user-friendly, it does not always line up directly with the technologies we use in our projects, so implementing these testing concepts may take time and patience."),(0,o.kt)("p",null,"While you are encouraged to look at these resources, testing will not be expected for your remaining C# code reviews."))}p.isMDXComponent=!0}}]);