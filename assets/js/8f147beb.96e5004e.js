"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[35950],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},_=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),_=r,m=c["".concat(l,".").concat(_)]||c[_]||d[_]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=_;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}_.displayName="MDXCreateElement"},61840:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"1. Best Restaurants in Town - Part 3 (day 3)",id:"best_restaurants_in_town___part_3_day_3",slug:"best_restaurants_in_town___part_3_day_3",hide_table_of_contents:!0,sidebar_position:4,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/11_database-basics-part-2/3a_classwork_best_restaurants_in_town_two_day_project_day_3.md"},o=void 0,s={unversionedId:"c_and_net_part_time_evening/database-basics-part-2/best_restaurants_in_town___part_3_day_3",id:"c_and_net_part_time_evening/database-basics-part-2/best_restaurants_in_town___part_3_day_3",title:"1. Best Restaurants in Town - Part 3 (day 3)",description:"Goal: Build out an application using a one-to-many relationship with Entity. The application should include two models, both with full CRUD functionality.",source:"@site/docs/c_and_net_part_time_evening/11_database-basics-part-2/3a_classwork_best_restaurants_in_town_two_day_project_day_3.md",sourceDirName:"c_and_net_part_time_evening/11_database-basics-part-2",slug:"/c_and_net_part_time_evening/database-basics-part-2/best_restaurants_in_town___part_3_day_3",permalink:"/lhtp/c_and_net_part_time_evening/database-basics-part-2/best_restaurants_in_town___part_3_day_3",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"1. Best Restaurants in Town - Part 3 (day 3)",id:"best_restaurants_in_town___part_3_day_3",slug:"best_restaurants_in_town___part_3_day_3",hide_table_of_contents:!0,sidebar_position:4,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/11_database-basics-part-2/3a_classwork_best_restaurants_in_town_two_day_project_day_3.md"},sidebar:"c_and_net_part_time_evening",previous:{title:"1. Best Restaurants in Town - Part 2 (day 2)",permalink:"/lhtp/c_and_net_part_time_evening/database-basics-part-2/best_restaurants_in_town___part_2_day_2"},next:{title:"2. Technical Interview Practice",permalink:"/lhtp/c_and_net_part_time_evening/database-basics-part-2/technical_interview_practice"}},l={},p=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"To Do List",id:"to-do-list",level:3},{value:"Relations Practice",id:"relations-practice",level:3},{value:"Best Restaurants",id:"best-restaurants",level:3},{value:"Further Exploration",id:"further-exploration",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goal"),": Build out an application using a one-to-many relationship with Entity. The application should include two models, both with full CRUD functionality."),(0,r.kt)("h2",{id:"warm-up"},"Warm Up"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Give an example of a one-to-many relationship. How can you determine this is the correct relationship?"),(0,r.kt)("li",{parentName:"ul"},"How do we associate database entries?"),(0,r.kt)("li",{parentName:"ul"},"What is a navigation property?"),(0,r.kt)("li",{parentName:"ul"},"What is ViewBag and how is it useful?")),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"to-do-list"},"To Do List"),(0,r.kt)("p",null,"Follow along with the homework lessons to build out a fully-functional To Do List with a one-to-many relationship between ",(0,r.kt)("inlineCode",{parentName:"p"},"Category"),"s and ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),"s."),(0,r.kt)("h3",{id:"relations-practice"},"Relations Practice"),(0,r.kt)("p",null,"Next let's go through some exercises to help you get comfortable with database design and schemas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create tables with sample data for a system that tracks non-profits and their board members. A non-profit has many board members, so this is a one-to-many relationship. Sketch it out on a whiteboard or using a spreadsheet.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Suppose you wanted to make a list of restaurants in your neighborhood and group them together by the kind of food they serve. Create sample ",(0,r.kt)("inlineCode",{parentName:"p"},"restaurants")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"types_of_food")," tables. Start with a one-to-many relationship (assume a restaurant only serves one type of food). You can feel free to think about how you could make this a many-to-many relationship, but don't worry if you don't know how! We'll learn all about those in the next course section.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make a schema for your database tables of restaurants and the type of food they serve."))),(0,r.kt)("h3",{id:"best-restaurants"},"Best Restaurants"),(0,r.kt)("p",null,"Create a website where users can add their favorite restaurants based on the type of cuisine they offer."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"Cuisine"),' class. Build out all CRUD functionality (Create, Read, Update, Delete) for this class. Remember that "Read" means to view a particular cuisine and to list out all of the cuisines.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"Restaurant")," class. Build out all CRUD functionality for this class.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add properties other than ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," to your ",(0,r.kt)("inlineCode",{parentName:"p"},"Restaurant")," class so that you can display descriptive information about the restaurants.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make the connection between a cuisine and a restaurant in the database. A cuisine can have many restaurants, but a restaurant can only be attached to one cuisine.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Allow a user to search for all of a cuisine's restaurants."))),(0,r.kt)("h3",{id:"further-exploration"},"Further Exploration"),(0,r.kt)("p",null,"If you have time, go ahead and tackle the next few features."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Now your application allows for users to review restaurants. Build out a ",(0,r.kt)("inlineCode",{parentName:"p"},"Review")," class and make the relationship in the database so that a restaurant has many reviews. Pretend that the users who are reviewing the website are different from the user who added the restaurant.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Display all of the reviews at the bottom of the restaurant's page."))),(0,r.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do the database table and column names follow proper naming conventions?"),(0,r.kt)("li",{parentName:"ul"},"Is there a one-to-many relationship set up correctly in Entity?"),(0,r.kt)("li",{parentName:"ul"},"Is ViewBag used correctly?"),(0,r.kt)("li",{parentName:"ul"},"Does the application work as expected?")))}d.isMDXComponent=!0}}]);