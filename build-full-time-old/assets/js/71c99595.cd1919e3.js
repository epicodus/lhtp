"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[95699],{30876:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(2784);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),p=o,m=d["".concat(s,".").concat(p)]||d[p]||h[p]||i;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},32734:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7896),o=(a(2784),a(30876));const i={title:"Structuring Data in Firestore",id:"structuring-data-in-firestore",slug:"structuring-data-in-firestore",hide_table_of_contents:!0,sidebar_position:15,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0o_structuring_data_in_firestore_old.md"},r=void 0,l={unversionedId:"react/react-with-nosql/structuring-data-in-firestore",id:"react/react-with-nosql/structuring-data-in-firestore",title:"Structuring Data in Firestore",description:"Just because NoSQL is flexible about structuring data doesn't mean we should just throw documents in a NoSQL database as if it were a junk drawer. We can actually use Firestore to structure data in many different ways. Even though we don't need a schema or database tables, we can still carefully plan how our data will be structured. In a real-world application, this is absolutely essential. SQL's more rigid rules force us to plan ahead of time while NoSQL removes the guardrails \u2014 which will leave us open to headaches down the road if we don't have a good plan.",source:"@site/docs/react/5_react-with-nosql/0o-structuring-data-in-firestore-old.md",sourceDirName:"react/5_react-with-nosql",slug:"/react/react-with-nosql/structuring-data-in-firestore",permalink:"/react/react-with-nosql/structuring-data-in-firestore",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"Structuring Data in Firestore",id:"structuring-data-in-firestore",slug:"structuring-data-in-firestore",hide_table_of_contents:!0,sidebar_position:15,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0o_structuring_data_in_firestore_old.md"},sidebar:"react",previous:{title:"Updating and Deleting Tickets in Firestore",permalink:"/react/react-with-nosql/updating-and-deleting-tickets-in-firestore"},next:{title:"Journal #16",permalink:"/react/react-with-nosql/journal-16"}},s={},c=[{value:"Nesting Data in a Single Document",id:"nesting-data-in-a-single-document",level:2},{value:"Adding Subcollections to Documents",id:"adding-subcollections-to-documents",level:2},{value:"Using Multiple Collections for Data",id:"using-multiple-collections-for-data",level:2},{value:"Summary",id:"summary",level:2}],u={toc:c},d="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Just because NoSQL is flexible about structuring data doesn't mean we should just throw documents in a NoSQL database as if it were a junk drawer. We can actually use Firestore to structure data in many different ways. Even though we don't need a schema or database tables, we can still carefully plan how our data will be structured. In a real-world application, this is absolutely essential. SQL's more rigid rules force us to plan ahead of time while NoSQL removes the guardrails \u2014 which will leave us open to headaches down the road if we don't have a good plan."),(0,o.kt)("p",null,"For your multi-day projects in this course section, you may need to create more complex data structures for your application to function correctly. In this lesson, we will discuss three different ways to structure Firestore data. These ways are outlined in the ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/firestore/manage-data/structure-data"},"Firebase documentation")," as well."),(0,o.kt)("p",null,"Let's imagine we are building an application with information on hiking trails in the Pacific Northwest. We want to have the following data on each trail:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"description")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"region")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"reviews"))),(0,o.kt)("p",null,"In a SQL database, we'd probably have a table called ",(0,o.kt)("inlineCode",{parentName:"p"},"Trails")," and another table called ",(0,o.kt)("inlineCode",{parentName:"p"},"Reviews"),". A trail could have many reviews while a review would belong to a single trail. Since our application would likely have users as well, a review would probably also belong to a user \u2014 but for our use case, we won't worry about that. Potentially, we could have another table called ",(0,o.kt)("inlineCode",{parentName:"p"},"Regions")," \u2014 a region could have many trails and a trail could belong to a single region."),(0,o.kt)("p",null,"However, we need to think about our data differently with NoSQL in general, and Firestore in particular. The considerations we'll discuss here are specific to Firestore, but knowing the advantages and limitations of each approach with Firestore can also be helpful for planning other NoSQL database structures in the future."),(0,o.kt)("h2",{id:"nesting-data-in-a-single-document"},"Nesting Data in a Single Document"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Documents in Firestore are sets of key-value pairs. They look like JSON objects \u2014 though it would be more accurate to use the more general term ",(0,o.kt)("strong",{parentName:"p"},"map")," to describe them. A map is a set of key-value pairs. For that reason, we can theoretically store all of the data for a trail in a single document. Here's an example of how that data structure might look:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'1: {\n      name: "Enchantments Trail",\n      region: "Enchantments",\n      description: "23.6 mile trail through Enchantments near Leavenworth, WA.",\n      reviews: {\n        1: {\n          content: "Amazing!"\n        },\n        2: {\n          content: "Very challenging hike."\n        },\n      }\n}\n')),(0,o.kt)("p",null,"In the example above, ",(0,o.kt)("inlineCode",{parentName:"p"},"reviews")," is nested inside this document. We could, if we wanted, nest even more deeply."),(0,o.kt)("p",null,"The problem here, at least for the application we are talking about building, is obvious: these documents are going to get huge if there are a lot of reviews. This leads to several issues. There is an upper limit on the size of a Firestore document (1 megabyte or 20,000 fields). That's actually a fair amount of data \u2014 but our documents would run out of space pretty quickly in a large application."),(0,o.kt)("p",null,"There's another big disadvantage. We can't just query part of a document. If we query a document, we return the whole thing \u2014 warts and all. We might just want to return the ten most popular reviews but we won't be able to do that."),(0,o.kt)("p",null,"On the other hand, there are some use cases where the data structure above could work. If we know the data won't expand too much (as it will with ",(0,o.kt)("inlineCode",{parentName:"p"},"reviews"),") and we also know that we always want to return ",(0,o.kt)("em",{parentName:"p"},"all")," the data stored in a document \u2014 the structure above could be beneficial because we wouldn't have to make multiple queries to get all the data associated with a trail."),(0,o.kt)("p",null,"Enterprise applications will rarely go this route, but you may have a smaller application or a portfolio idea that could benefit from nesting data in a single document. Think carefully before you take this approach, though!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Advantages:")," Easy to get data related to a document because it's all stored in the same place."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Disadvantages:")," Doesn't scale well \u2014 and not recommended when data associated with a document will expand over time. This also isn't performant because there is a limit to the number of read and writes that can be made to a single document at a time."),(0,o.kt)("h2",{id:"adding-subcollections-to-documents"},"Adding Subcollections to Documents"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Students familiar with SQL databases might be tempted to try to recreate one-to-many relationships in Firestore. In some ways, adding a subcollection most closely mirrors creating a one-to-many relationship. However, it's not really the same."),(0,o.kt)("p",null,"A document can have its own subcollections. In fact, we can easily add a subcollection to our Help Queue project via the Firestore database UI:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-4-React-2020/Adding-firestore-subcollection.png",alt:"Example shows how we can add a subcollection to a record in Firestore's UI."})),(0,o.kt)("p",null,'In the example above, we could click on a ticket from our Help Queue database, then click on "Start collection" (circled in red in the image above) in the rightmost panel to add a collection to that document. This wouldn\'t just be a collection, it would be a subcollection within the ',(0,o.kt)("inlineCode",{parentName:"p"},"tickets")," collection."),(0,o.kt)("p",null,"If we used a subcollection in our Firestore database for our application about hiking trails in the Pacific NorthWest, it would make the most sense to make trails reviews a subcollection of a trail document. This structure would look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'1: {\n      name: "Enchantments Trail",\n      region: "Enchantments",\n      description: "23.6 mile trail through Enchantments near Leavenworth, WA.",\n    }\n\nReviews Subcollection (belongs to "Enchantments Trail")\n\n1: {\n  content: "Amazing!"\n  },\n2: {\n  content: "Very challenging hike."\n  }\n')),(0,o.kt)("p",null,"Firestore lists this as a feasible approach but we don't recommend it. Firestore can only query a single collection at a time, so to get a subcollection, we'd need to make two queries: one for the trail, and then another one for the reviews. So, if we wanted to find all the trail reviews by a specific user, for example, we definitely wouldn't be able to do that with a single query."),(0,o.kt)("p",null,"This is because Firestore queries are always shallow. They only return the top level of data, not subcollections. We can take advantage of this, however, if we design our application to only display the trails data without the reviews. In another page we could show the reviews, but only if the user navigates there. Separating this out could indeed make our application more performant since each database query would take less time. "),(0,o.kt)("p",null,"In our case, this probably wouldn't be much of an advantage, though \u2014 and the pain of trying to query across multiple collections would be a huge disadvantage."),(0,o.kt)("p",null,"Another issue with this approach is writing the code for creating subcollections. The documentation on this is not extensive. However, let's say we wanted to have a subcollection of reviews for a specific trail. To add a review to the Enchantments Trail, we'd have to do something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'await addDoc(collection(db, "trails", "q2WkYeRXEZWoG0EnTzkh", "reviews"), newReviewData); \n')),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},'"q2WkYeRXEZWoG0EnTzkh"')," is the id of the trail document, and ",(0,o.kt)("inlineCode",{parentName:"p"},'"reviews"')," is the subcollection within ",(0,o.kt)("inlineCode",{parentName:"p"},'"trails"'),". Also, with the above code, we're not specifying an ID for the new review document, but letting Firestore auto-generate one. "),(0,o.kt)("p",null,"We could do this instead, if we wanted to provide an ID for the new review document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'await setDoc(doc(db, "trails", "q2WkYeRXEZWoG0EnTzkh", "reviews", "0"), newReviewData);\n')),(0,o.kt)("p",null,"In the both of the examples above, we have to specify a collection, then the doc within the collection (which may or may not exist yet), then specify another collection within that doc."),(0,o.kt)("p",null,"Things can get messy quickly, the subcollections can get difficult to query, and if the parent doc gets deleted, that can leave the subcollection orphaned, making it very difficult to access. That's because deleting a document does not also automatically delete any subcollections that are associated with it."),(0,o.kt)("p",null,"While this approach most closely maps to creating a one-to-many relationship, we don't really recommend it even though it's listed as a valid option in the Firestore documentation. It certainly is valid \u2014 and there are use cases \u2014 but be prepared for headaches with this approach."),(0,o.kt)("h2",{id:"using-multiple-collections-for-data"},"Using Multiple Collections for Data"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The final recommendation, and the one that's probably effective for the most use cases, is to just use multiple collections. In this situation, we'd have separate collections for trails and reviews. In order to create something similar to a one-to-many association, we'd need to manually create the association between a trail and a review in our code. Rails and .NET coders can apply their SQL knowledge here. We just need to add a field like ",(0,o.kt)("inlineCode",{parentName:"p"},"trailId")," to a review. The code for creating an association might look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'await addDoc(collection(db, "reviews"), {trailId: tid, content: "Amazing trail!" })\n')),(0,o.kt)("p",null,"Here, we add a review that has a trail's id associated with it. At that point, if we wanted to find all reviews associated with a trail, we could make a query to find reviews that have a ",(0,o.kt)("inlineCode",{parentName:"p"},"trailId")," equal to the trail's id."),(0,o.kt)("p",null,"In this way, we can still make associations that are somewhat similar to what we might do with a SQL database. Firestore's queries are extremely fast because all records and fields are indexed. A database index is like an index in the back of a book that allows you to quickly find a record without having to search every row in the database. This means it will take about the same amount of time to run a query to grab reviews associated with a specific trail id as it would to just grab the whole collection of reviews. "),(0,o.kt)("p",null,"Remember that NoSQL databases scale well horizontally, so it's fine to have multiple large, shallow collections instead of deeply nested data."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In this lesson, we've covered three approaches for creating a data structure in a Firestore application. All three have their use cases, but the third generally works best with Firestore's current capacities. As we can see, we can still make associations between different pieces of data in our code. It's just that NoSQL doesn't have a structure to enforce or check these relationships. We are entirely on the hook for creating them on our own."),(0,o.kt)("p",null,"As always, your use case will determine which kind of data structure works best for your application. In the example above, creating several collections and manually creating associations in the code between documents is probably the best approach."),(0,o.kt)("p",null,"However, if we were making a game where a user could hold a limited number of items, the first or second approach would probably be better. Having an ",(0,o.kt)("inlineCode",{parentName:"p"},"items")," property on a ",(0,o.kt)("inlineCode",{parentName:"p"},"character")," that has a maximum of nine slots would be reasonable \u2014 and we'd probably want to return all nine items each time we were pulling up the character anyway."),(0,o.kt)("p",null,"Creating subcollections for a document might be a solid option if you'll have a relatively limited number of items in that subcollection \u2014 but you don't want those results to be returned every single time. If we had an application about books, for example, each book document might have general information such as ",(0,o.kt)("inlineCode",{parentName:"p"},"description")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," \u2014 but we wouldn't want to include the whole text in the record because it would take a long time to query each book. Instead, we might create a subcollection called ",(0,o.kt)("inlineCode",{parentName:"p"},"chapters")," that has the text for each chapter. The query for the general description of the book would still be very fast \u2014 but if needed, we could do an additional, slower query to get all the text in the subcollection. As long as we didn't want to do a query across all the chapters of all the different books in our application, this would work fine."),(0,o.kt)("p",null,"If you'd like more information, see Firestore's ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/firestore/manage-data/structure-data"},"documentation on data structures"),". The videos included in the documentation are also recommended."))}h.isMDXComponent=!0}}]);