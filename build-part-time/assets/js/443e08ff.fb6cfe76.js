"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[28116],{30876:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(2784);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||n;return a?r.createElement(h,i(i({ref:t},d),{},{components:a})):r.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},30835:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(7896),o=(a(2784),a(30876));const n={title:"University Registrar, Doctor's Office (Week-Long Project) - Part 3 (day 3)",id:"university-registrar-doctor's-office-week-long-project---part-3-day-3",slug:"university-registrar-doctor's-office-week-long-project---part-3-day-3",hide_table_of_contents:!0,sidebar_position:16,day:"wednesday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/1a_classwork_university_registrar_and_doctors_office.md"},i=void 0,s={unversionedId:"c-and-net/many-to-many-relationships/university-registrar-doctor's-office-week-long-project---part-3-day-3",id:"c-and-net/many-to-many-relationships/university-registrar-doctor's-office-week-long-project---part-3-day-3",title:"University Registrar, Doctor's Office (Week-Long Project) - Part 3 (day 3)",description:"Goal: Practice using join statements to connect tables in your database. You should also be getting more practice creating and using many to many relationships with your tables.",source:"@site/docs/c-and-net/12_many-to-many-relationships/1a-classwork-university-registrar-and-doctors-office-day-3.md",sourceDirName:"c-and-net/12_many-to-many-relationships",slug:"/c-and-net/many-to-many-relationships/university-registrar-doctor's-office-week-long-project---part-3-day-3",permalink:"/c-and-net/many-to-many-relationships/university-registrar-doctor's-office-week-long-project---part-3-day-3",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"University Registrar, Doctor's Office (Week-Long Project) - Part 3 (day 3)",id:"university-registrar-doctor's-office-week-long-project---part-3-day-3",slug:"university-registrar-doctor's-office-week-long-project---part-3-day-3",hide_table_of_contents:!0,sidebar_position:16,day:"wednesday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/1a_classwork_university_registrar_and_doctors_office.md"},sidebar:"c-and-net",previous:{title:"University Registrar, Doctor's Office (Week-Long Project) - Part 2 (day 2)",permalink:"/c-and-net/many-to-many-relationships/university-registrar-doctor's-office-week-long-project---part-2-day-2"},next:{title:"University Registrar, Doctor's Office (Week-Long Project) - Part 4 (day 4)",permalink:"/c-and-net/many-to-many-relationships/university-registrar-doctor's-office-week-long-project---part-4-day-4"}},l={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Finishing the To Do List",id:"finishing-the-to-do-list",level:3},{value:"University Registrar or Doctor&#39;s Office",id:"university-registrar-or-doctors-office",level:3},{value:"University Registrar",id:"university-registrar",level:3},{value:"Doctor&#39;s Office",id:"doctors-office",level:3},{value:"Design Your Own",id:"design-your-own",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Goal"),": Practice using join statements to connect tables in your database. You should also be getting more practice creating and using many to many relationships with your tables."),(0,o.kt)("h2",{id:"warm-up"},"Warm Up"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What is the difference between a join ENTITY and a join TABLE?"),(0,o.kt)("li",{parentName:"ul"},"What information do you need to know to make a join entity?"),(0,o.kt)("li",{parentName:"ul"},"What is a EF Core migration? How do migrations make it easier for developers to work together on a large codebase?")),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"finishing-the-to-do-list"},"Finishing the To Do List"),(0,o.kt)("p",null,"Begin by following along with this weekend's homework to add a many-to-many relationship to your ongoing To Do List application."),(0,o.kt)("p",null,"Then, integrate the following additional features."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add functionality to mark an ",(0,o.kt)("inlineCode",{parentName:"li"},"Item")," as completed without deleting it ",(0,o.kt)("em",{parentName:"li"},"(",(0,o.kt)("strong",{parentName:"em"},"Hint"),": Create a new boolean ",(0,o.kt)("inlineCode",{parentName:"em"},"Item")," property and set a default value of true/false.)")),(0,o.kt)("li",{parentName:"ul"},"Allow users to assign due dates for ",(0,o.kt)("inlineCode",{parentName:"li"},"Item"),"s."),(0,o.kt)("li",{parentName:"ul"},"Sort items by their due date. Check out the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.linq.enumerable.orderby?view=netframework-4.8"},"LINQ documentation")," on ",(0,o.kt)("inlineCode",{parentName:"li"},"OrderBy")," \u2014 let LINQ do the sorting, not C#.")),(0,o.kt)("h3",{id:"university-registrar-or-doctors-office"},"University Registrar or Doctor's Office"),(0,o.kt)("p",null,"Then select one of the following projects to complete as a multi-day project. To describe the features we want you to build, we will write ",(0,o.kt)("strong",{parentName:"p"},"user stories"),". User stories are a way of describing a feature that breaks functionality down into the smallest possible pieces and clearly communicates the use case, functionality, and benefit."),(0,o.kt)("h3",{id:"university-registrar"},"University Registrar"),(0,o.kt)("p",null,"Create an app for a University Registrar to keep track of students and courses.  Here are some user stories for you \u2014 build one at a time before moving on to the next one."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As a registrar, I want to enter a student, so I can keep track of all students enrolled at this University.  I should be able to provide a name and date of enrollment."),(0,o.kt)("li",{parentName:"ul"},"As a registrar, I want to enter a course, so I can keep track of all of the courses the University offers.  I should be able to provide a course name and a course number (ex. HIST100)."),(0,o.kt)("li",{parentName:"ul"},"As a registrar, I want to be able to assign students to a course, so that teachers know which students are in their course.  A course can have many students and a student can take many courses at the same time.")),(0,o.kt)("p",null,"Next, and after you complete the corresponding homework, add model validation with validation attributes to your project to ensure that form fields are not left empty and database errors are prevented."),(0,o.kt)("p",null,"If you make it this far, great job! If you have time, work on these other user stories."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As a registrar, I want to be able to create departments.  A student can be assigned to a department when they declare their major and a course can be assigned to a department when it is created."),(0,o.kt)("li",{parentName:"ul"},"As a registrar, I want to be able to list out all of the courses or all of the students in a particular department, so that I can inform the counselors which departments need more students and which need more courses."),(0,o.kt)("li",{parentName:"ul"},"As a registrar, I want to change a student's file to show that they have completed a course, so that I can see if they need to take the course again."),(0,o.kt)("li",{parentName:"ul"},"As a registrar, I want to list out all of the courses a student has taken, so that I can see if they have met their degree requirements."),(0,o.kt)("li",{parentName:"ul"},"As a registrar, I want to see how many students have not completed courses in any particular departments, so that I can tell the administration which departments need help."),(0,o.kt)("li",{parentName:"ul"},"As a registrar, I want to \u2026")),(0,o.kt)("p",null,"If you make it this far in the project, think up and write some other user stories that a University registrar might have."),(0,o.kt)("h3",{id:"doctors-office"},"Doctor's Office"),(0,o.kt)("p",null,"Our next program is for office administrators to track patients in a doctor's office. Ultimately you will have a doctor's office database with tables for doctor, patient, etc. "),(0,o.kt)("p",null,"Build out the following features that let an administrator:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add a doctor to the system, including their name and specialty as columns."),(0,o.kt)("li",{parentName:"ul"},"Add a patient to a doctor, including their name and birthdate. ",(0,o.kt)("inlineCode",{parentName:"li"},"Patient")," will be its own class, so make sure to build the relationship between a ",(0,o.kt)("inlineCode",{parentName:"li"},"Doctor")," object and a ",(0,o.kt)("inlineCode",{parentName:"li"},"Patient")," object."),(0,o.kt)("li",{parentName:"ul"},"Add more than one doctor to a patient.")),(0,o.kt)("p",null,"Next, and after you complete the corresponding homework, add model validation with validation attributes to your project to ensure that form fields are not left empty and database errors are prevented."),(0,o.kt)("p",null,"Up next, refactor the doctor's office app to accommodate their new growth: now the doctor's office includes many doctors with the same specialty. The doctors have organized themselves into specialty groups. So when a user wants to enter a doctor, they must first select a specialty and then add a doctor from there."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"List all of the doctors in a particular specialty. A doctor can have ",(0,o.kt)("em",{parentName:"li"},"many")," specialties. (Hint: change the database from storing ",(0,o.kt)("inlineCode",{parentName:"li"},"specialty")," as a column to giving it its own table with a relationship to a ",(0,o.kt)("inlineCode",{parentName:"li"},"Doctor")," object.)"),(0,o.kt)("li",{parentName:"ul"},"View a chart of doctors including the number of patients they see. Use the SQL ",(0,o.kt)("inlineCode",{parentName:"li"},"COUNT")," function; practice your online search skills to figure out how it works.")),(0,o.kt)("h3",{id:"design-your-own"},"Design Your Own"),(0,o.kt)("p",null,"If you'd prefer, choose another project that includes a ",(0,o.kt)("strong",{parentName:"p"},"many-to-many relationship with full CRUD"),". You might choose something brand new, or revisit an earlier in-class project such as CD Organizer. After you complete the corresponding homework, make sure to include model validation with validation attributes to ensure that form fields are not left empty and database errors are prevented."),(0,o.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Do database tables and columns follow proper naming conventions?"),(0,o.kt)("li",{parentName:"ul"},"Does one of your classes have all CRUD methods implemented in your app? That includes: Create, Read (all and singular) Update and Delete (all and singular)."),(0,o.kt)("li",{parentName:"ul"},"Are you able to view both sides of the many-many relationship? For a particular instance of a class, are you able to view all of the instances of the ",(0,o.kt)("strong",{parentName:"li"},"other")," class that are related to it? And vice versa?"),(0,o.kt)("li",{parentName:"ul"},"Is the many-to-many relationship set up correctly in the database?"),(0,o.kt)("li",{parentName:"ul"},"Are validation attributes used to validate models before they are saved to the database?")))}p.isMDXComponent=!0}}]);