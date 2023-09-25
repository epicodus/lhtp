"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[74548],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(a),p=o,f=u["".concat(l,".").concat(p)]||u[p]||h[p]||s;return a?n.createElement(f,r(r({ref:t},c),{},{components:a})):n.createElement(f,r({ref:t},c))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,r[1]=i;for(var d=2;d<s;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},87841:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const s={title:"Introduction to NoSQL",id:"introduction_to_nosql",slug:"introduction_to_nosql",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/8_react-with-nosql/0g_introduction_to_nosql.md"},r=void 0,i={unversionedId:"react_part_time_evening/react-with-nosql/introduction_to_nosql",id:"react_part_time_evening/react-with-nosql/introduction_to_nosql",title:"Introduction to NoSQL",description:"Because our applications are small and we are mainly concerned about writing code that works, we won't be able to see many of the benefits of NoSQL firsthand. However, NoSQL is designed to handle massive stores of data better than SQL can so it's often preferred in larger companies. In addition, if companies plan to scale up (and most companies do), NoSQL allows more flexibility.",source:"@site/docs/react_part_time_evening/8_react-with-nosql/0g_introduction_to_nosql.md",sourceDirName:"react_part_time_evening/8_react-with-nosql",slug:"/react_part_time_evening/react-with-nosql/introduction_to_nosql",permalink:"/lhtp/react_part_time_evening/react-with-nosql/introduction_to_nosql",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Introduction to NoSQL",id:"introduction_to_nosql",slug:"introduction_to_nosql",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/8_react-with-nosql/0g_introduction_to_nosql.md"},sidebar:"react_part_time_evening",previous:{title:"Introduction to BaaS, Firebase, and Firestore",permalink:"/lhtp/react_part_time_evening/react-with-nosql/introduction_to_baas_firebase_and_firestore"},next:{title:"The CAP Theorem and BASE",permalink:"/lhtp/react_part_time_evening/react-with-nosql/the_cap_theorem_and_base"}},l={},d=[{value:"Differences Between SQL and NoSQL Databases",id:"differences-between-sql-and-nosql-databases",level:2},{value:"How NoSQL is Stored",id:"how-nosql-is-stored",level:2}],c={toc:d},u="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Because our applications are small and we are mainly concerned about writing code that works, we won't be able to see many of the benefits of NoSQL firsthand. However, NoSQL is designed to handle massive stores of data better than SQL can so it's often preferred in larger companies. In addition, if companies plan to scale up (and most companies do), NoSQL allows more flexibility."),(0,o.kt)("p",null,"In this lesson, we'll cover some of the ways NoSQL is different from SQL \u2014 as well as some of the advantages NoSQL offers over SQL. As is the case with most things in programming, there is no one perfect tool for every job."),(0,o.kt)("h2",{id:"differences-between-sql-and-nosql-databases"},"Differences Between SQL and NoSQL Databases"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We won't cover all of the differences between SQL and NoSQL databases. Instead, we'll focus on a few of the most significant differences:"),(0,o.kt)("table",{style:{textAlign:"center",margin:"5% auto"}},(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"center"}},"SQL"),(0,o.kt)("th",{style:{textAlign:"center"}},"NoSQL")),(0,o.kt)("tr",null,(0,o.kt)("td",{style:{padding:"0% 5% 0% 5%"}},"Relational"),(0,o.kt)("td",{style:{padding:"0% 5% 0% 5%"}},"Non-relational")),(0,o.kt)("tr",null,(0,o.kt)("td",{style:{padding:"0% 5% 0% 5%"}},"Uses a Schema"),(0,o.kt)("td",{style:{padding:"0% 5% 0% 5%"}},"No Schema")),(0,o.kt)("tr",null,(0,o.kt)("td",{style:{padding:"0% 5% 0% 5%"}},"Uses SQL (structured query language)"),(0,o.kt)("td",{style:{padding:"0% 5% 0% 5%"}},"Doesn't use a declarative query language")),(0,o.kt)("tr",null,(0,o.kt)("td",{style:{padding:"0% 5% 0% 5%"}},"Great for complex queries"),(0,o.kt)("td",{style:{padding:"0% 5% 0% 5%"}},"Not built for complex queries")),(0,o.kt)("tr",null,(0,o.kt)("td",{style:{padding:"0% 5% 0% 5%"}},"ACID approach"),(0,o.kt)("td",{style:{padding:"0% 5% 0% 5%"}},"BASE approach")),(0,o.kt)("tr",null,(0,o.kt)("td",{style:{padding:"0% 5% 0% 5%"}},"Not easily distributed"),(0,o.kt)("td",{style:{padding:"0% 5% 0% 5%"}},"Very easy to distribute"))),(0,o.kt)("p",null,"As students of C#/.NET and Ruby/Rails learned, SQL is a ",(0,o.kt)("strong",{parentName:"p"},"structured query language")," for relational databases. We use a ",(0,o.kt)("strong",{parentName:"p"},"schema")," to map exactly how our database tables should look \u2014 which means that each record in the database has a fixed number of columns. Because the database is relational, we can create complex queries based on the relationships between different records in the database. For example, if we wanted to find all of an author's books, we'd do a query where we find all of the books in the ",(0,o.kt)("inlineCode",{parentName:"p"},"books")," table with an ",(0,o.kt)("inlineCode",{parentName:"p"},"author_id")," property that matches the author's ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),". SQL databases tend to have a single node and follow the principles of ACID closely."),(0,o.kt)("p",null,'On the other hand, NoSQL databases are non-relational. They have no schema and don\'t use a declarative query language. This is why they are essentially called "no SQL" \u2014 they really are the opposite in many ways. Not having a schema frees up a NoSQL database to have flexibility in storing data. '),(0,o.kt)("p",null,"Here's an example: Let's say that we've created a point of sales system for a movie theater. For each theater, there's a certain number of seats available in it. With a NoSQL database we could track the number of available seats like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"seats: 100\n")),(0,o.kt)("p",null,"The number of seats, ",(0,o.kt)("inlineCode",{parentName:"p"},"100"),", in our NoSQL database is tracked as a number. But let's say that when there are no more seats left we want to update seats to the string ",(0,o.kt)("inlineCode",{parentName:"p"},'"out of stock"'),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'seats: "out of stock"\n')),(0,o.kt)("p",null,"Well, with a NoSQL database, we have the flexibility to have the same database field track  different data types. Does that mean it's wise to do that? No, usually not. But the point is, NoSQL databases are that flexible. "),(0,o.kt)("p",null,"Let's look at one more example: let's say you have an address book application that tracks the contact details for your friends. However, other than phone number and address, we also want to record other important details to remember. Well, in a NoSQL database, we can structure the data differently for each friend in our address book. Here's what our sample data could look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'friends {\n  AJ {\n    phone: "808-334-1029",\n    address: "443 Seacrest Dr., Honolulu, HI",\n    dogs: ["Ardie", "Koa"]\n  },\n  Maxx {\n    phone: "223-443-2123",\n    address: "45557 Winapoo St., New York, NY",\n    partner: "Dorian",\n    kids: ["Teanna", "Grace", "Ava"]\n  },\n  Mom {\n    phone: "503-554-3232",\n    address: "12449 Sycamore Ct., Portland, OR"\n  }\n}\n')),(0,o.kt)("p",null,"As we can see, your friend AJ has a ",(0,o.kt)("inlineCode",{parentName:"p"},"dogs")," field, while your friend Maxx has fields for their ",(0,o.kt)("inlineCode",{parentName:"p"},"partner")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"kids")," instead. Also, your mom only has a phone and address listed. Well, in a NoSQL database, we have the flexibility to set up data like this, without having to normalize it. If we were to do this with a SQL database, every friend would have every field possible, and we'd need to specify that certain fields (",(0,o.kt)("inlineCode",{parentName:"p"},"dogs"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"partner"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"kids"),") allow null values. "),(0,o.kt)("p",null,"As we can see, there are some great benefits to the flexibility that NoSQL offers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We don't need to model our data ahead of time or know exactly what it looks like (such as with a schema). "),(0,o.kt)("li",{parentName:"ul"},"We can store many different types of data with many different types of fields.")),(0,o.kt)("p",null,"One big downside of NoSQL databases is that they aren't great for complex queries. Looking back at the example of an author and their books, let's say we often wanted to find target demographics for books. For instance, we might want to find all the readers that are women between the ages of 40 and 49 for all of a specific author's books. That's a pretty complex query \u2014 and not one that NoSQL is built to deal with. SQL, on the other hand, is built to deal with these relationships. "),(0,o.kt)("p",null,"This is the biggest challenge for students coming from using SQL. They often want to know how to establish relationships between different records in a database. We will cover some basic ways to do this in the lesson ",(0,o.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/lessons/structuring-data-in-firestore"},"Structuring Data in Firestore"),", but this simply isn't a strength of NoSQL."),(0,o.kt)("p",null,"Also, because NoSQL doesn't have its own structured query language, we'll find ourselves using the syntax of the NoSQL provider that we're using. In our case, since we're using Firestore, we'll be using Firestore functions to make queries. "),(0,o.kt)("p",null,"Using Firestore syntax has upsides and downsides. On the one hand, Firestore exposes a lot of methods that give us additional functionality \u2014 making our lives easier as developers. On the other, learning this functionality \u2014 and incorporating it into our applications \u2014 is very specific to Firebase. We can't apply it to other cloud-based database services, like AWS. That is why we won't delve too deeply into the particulars of Firestore. While it is helpful to learn the basics, the knowledge we'll gain is fairly narrow in scope. Fortunately, the documentation for Firestore is extensive if you want to do a deeper exploration on your own."),(0,o.kt)("p",null,"The last thing to note is that NoSQL databases are designed to be distributed across many locations. This means that there are multiple copies of the same database across a region, or the world. While this can cause issues around consistency, it affords the ability to scale (handle more traffic) and it improves availability (if one database goes down, the other database copies can step in)."),(0,o.kt)("p",null,"On the other hand, SQL databases are usually not distributed, but instead set up in one location. This ensures high consistency of data. However, if the database goes down, users will have to wait until it gets back online again. Also, SQL databases don't easily handle variable network requests: if all of a sudden the application is popular and there's a high amount of traffic, upgrading to handle this traffic involves expanding the hardware that makes the database run and handle network requests."),(0,o.kt)("p",null,"We'll revisit the topic of distribution in the next lesson on the CAP theorem. Before continuing, let's take a look at how NoSQL databases store data."),(0,o.kt)("h2",{id:"how-nosql-is-stored"},"How NoSQL is Stored"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"SQL databases store their data in tables. Each table has a primary key and one or more fields for which we specify a data type. At this point, we should be very familiar with that information. But how is NoSQL data stored?"),(0,o.kt)("p",null,"NoSQL data is commonly stored in these formats:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"key-value pairs"),(0,o.kt)("li",{parentName:"ul"},"graphs"),(0,o.kt)("li",{parentName:"ul"},"wide columns"),(0,o.kt)("li",{parentName:"ul"},"documents")),(0,o.kt)("p",null,"We won't get into all of the examples listed above now. There's a lot of resources online if you want to learn more about any of the above database formats. To see more examples and NoSQL database providers, visit ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/NoSQL#Types_and_examples"},"the Wikipedia page on NoSQL"),"."),(0,o.kt)("p",null,"We will however look closer at how both of Firebase's NoSQL databases are stored. This will help us get a sense of what NoSQL databases look like! "),(0,o.kt)("p",null,"Starting with ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/database/web/structure-data"},"the Firebase Realtime Database"),', this database is structured as a JSON tree, which is a type of a "key-value pair" database structure. To visualize this, we can make a few small tweaks to our ',(0,o.kt)("inlineCode",{parentName:"p"},"friends")," data from earlier in this lesson. "),(0,o.kt)("p",null,"Here's how the data inside of a Firebase Realtime Database is structured:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "friends": {\n    "AJ": {\n      phone: "808-334-1029",\n      address: "443 Seacrest Dr., Honolulu, HI",\n      dogs: {\n        0: "Ardie", \n        1: "Koa"\n      }\n    },\n    "Maxx": {\n      phone: "223-443-2123",\n      address: "45557 Winapoo St., New York, NY",\n      partner: "Dorian",\n      kids: {\n        0: "Teanna", \n        1: "Grace", \n        2: "Ava"\n      }\n    },\n    "Mom": {\n      phone: "503-554-3232",\n      address: "12449 Sycamore Ct., Portland, OR"\n    }\n  }\n}\n')),(0,o.kt)("p",null,"The entire database is represented by the outermost curly brackets. Within our example database, we have a ",(0,o.kt)("inlineCode",{parentName:"p"},'"friends"')," key that is set to an object, and each individual friend is stored inside as a key-value pair. Notably, the Firebase Realtime Database does not use arrays. "),(0,o.kt)("p",null,"You may already be wondering how to query the data inside of this database. Well, if you want to learn more about the Firebase Realtime Database, ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/database/web/structure-data"},"visit the Firebase docs"),". Again, we're focused on just getting a sense of how NoSQL databases are structured, and visualizing what this looks like."),(0,o.kt)("p",null,"Next, let's look at how a Firestore Database is structured. Firestore Databases structure its data into documents, which are organized into collections. Each document has fields that map to values, similar to a key-value pair. Documents support many different data types. Also, documents can optionally have one or more subcollections, each with their own documents inside. "),(0,o.kt)("p",null,"Let's restructure our friend data into Firestore documents and collections. In this case ",(0,o.kt)("inlineCode",{parentName:"p"},"friends")," would be our collection, and each friend would correspond to a ",(0,o.kt)("inlineCode",{parentName:"p"},"document"),". Here's what our data would look like:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-4-React-2020/firestore-datastructure-collection-document.png",alt:'This image shows example "friends" data structured like it would be in the Firestore database: a friends collection and three friend documents.'})),(0,o.kt)("p",null,"In the example above, the folder icon is meant to represent a Firestore collection, and the document icon, a Firestore document. Also, take note that there are no subcollections in this example. With the document-driven Firestore database, we can group data together (related documents are in the same collection), but also keep data distinctly separated (each document is separate and unique, and so is each collection)."),(0,o.kt)("p",null,"Turning Firestore data into JavaScript is an easy process: the key-value pairs in documents easily map over JavaScript objects, and Firestore collections can be looped through, transforming them into an array or object. We'll see all of this in action in upcoming lessons."),(0,o.kt)("p",null,"At this point we should have a sense of the basic differences between NoSQL and SQL databases. In the next lesson, we're going to review the CAP theorem, which seeks to describe the tradeoff using distributed NoSQL databases."))}h.isMDXComponent=!0}}]);