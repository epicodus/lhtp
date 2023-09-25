"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[69486],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},17341:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const o={title:"JavaScript Data Types",id:"javascript_data_types",slug:"javascript_data_types",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_javascript-and-web-browsers/0f_javascript_data_types.md"},r=void 0,s={unversionedId:"introduction_to_programming/javascript-and-web-browsers/javascript_data_types",id:"introduction_to_programming/javascript-and-web-browsers/javascript_data_types",title:"JavaScript Data Types",description:"Now that you have the basics of HTML and CSS under your belt, we're going to start learning our first programming language: JavaScript.",source:"@site/docs/introduction_to_programming/2_javascript-and-web-browsers/0f_javascript_data_types.md",sourceDirName:"introduction_to_programming/2_javascript-and-web-browsers",slug:"/introduction_to_programming/javascript-and-web-browsers/javascript_data_types",permalink:"/lhtp/introduction_to_programming/javascript-and-web-browsers/javascript_data_types",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"JavaScript Data Types",id:"javascript_data_types",slug:"javascript_data_types",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_javascript-and-web-browsers/0f_javascript_data_types.md"},sidebar:"introduction_to_programming",previous:{title:"Using the DevTools Console for Practice and Pair Programming",permalink:"/lhtp/introduction_to_programming/javascript-and-web-browsers/using_the_devtools_console_for_practice_and_pair_programming"},next:{title:"Arithmetic",permalink:"/lhtp/introduction_to_programming/javascript-and-web-browsers/arithmetic"}},l={},c=[{value:"Primitives",id:"primitives",level:2},{value:"Objects",id:"objects",level:2},{value:"More Object Analogies",id:"more-object-analogies",level:3},{value:"Custom Versus Built-In Objects",id:"custom-versus-built-in-objects",level:3},{value:"Takeaways",id:"takeaways",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Now that you have the basics of HTML and CSS under your belt, we're going to start learning our first programming language: JavaScript."),(0,i.kt)("p",null,"In JavaScript, information is separated into different data types. ",(0,i.kt)("strong",{parentName:"p"},"Data")," is simply a piece of information, and its ",(0,i.kt)("strong",{parentName:"p"},"type")," is what the piece of information is categorized as. So, ",(0,i.kt)("strong",{parentName:"p"},"data types"),' (also just known as "types") are the different names we give to distinguish and categorize data. Each data type has different ',(0,i.kt)("strong",{parentName:"p"},"functionality"),", meaning it does different things. "),(0,i.kt)("p",null,'For example, some data represents numbers, like your age. While other data represents text, like the title of your favorite book or movie. In JavaScript, number data and text data are given the name "number" and "string" respectively. We\'ll learn more about numbers and strings in just a few paragraphs!'),(0,i.kt)("p",null,"It's important to note that all programming languages have data types built-in to them. They are building blocks of the functionality in our code. "),(0,i.kt)("p",null,"In JavaScript, data types are separated into two categories: ",(0,i.kt)("strong",{parentName:"p"},"objects")," and ",(0,i.kt)("strong",{parentName:"p"},"primitives"),". "),(0,i.kt)("h2",{id:"primitives"},"Primitives"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Primitives are the simplest elements of JavaScript. There are seven different types of primitives in JavaScript, but during this course, we'll see and use only five of the primitives regularly:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Number:")," A number is just what it sounds like. It could be ",(0,i.kt)("inlineCode",{parentName:"p"},"221"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-4"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"1.97"),". As you might guess, we'll use these a lot.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"String:")," A string is a set of characters enclosed in quotations. ",(0,i.kt)("inlineCode",{parentName:"p"},'"hello"')," is a string. So is ",(0,i.kt)("inlineCode",{parentName:"p"},'"Good morning, everyone!!!"')," And, just to make things a little tricky, ",(0,i.kt)("inlineCode",{parentName:"p"},'"21"')," is a string, not a number. That's because it's enclosed in quotations. Any set of characters that's enclosed in quotations \u2014 whether that's letters, numbers, nineteen exclamation points in a row, or some combination thereof \u2014 is a string. We will be using strings all of the time.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Boolean:")," A boolean can be one of two values: ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". That's it. We will use these a lot, too.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Null:")," Null just means nothing. We will sometimes want to assign a ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," value to a thing because we don't know what value it should have yet.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Undefined:")," This is a fun one... or rather, most of the time it's not so fun when it shows up in our code. It just means something hasn't been defined yet. The reason it's often not so fun is because we'll see that something is ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," in our code when we don't want it to be. This means there's a bug we need to fix. Don't worry, we will get a lot of practice with ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),", whether we want to or not!")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Symbol:")," A newer primitive that was introduced in 2015. We won't be using this one during the program \u2014 and because we don't want to overwhelm you with too much information, we won't go into detail about it here. If you really must know more right this moment, see the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Symbol"},"Mozilla documentation on Symbols"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"BigInt:"),' An even newer primitive that was introduced in 2020. We also won\'t be using this during the program. In brief, a BigInt is a numeric data type like "number". BigInt represents whole numbers (meaning without decimals) that are larger than 2 to the power of 53, or 2^53. You can learn more about BigInt on the ',(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#bigint_type"},"Mozilla documentation on BigInt"),"."))),(0,i.kt)("h2",{id:"objects"},"Objects"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"In the Intermediate JavaScript course, we dedicate an entire section to learning about JavaScript objects. However, JavaScript objects are so important that we'll begin to learn about them now in a conceptual way. Later in this course section, we'll learn about specific tools that are powered by objects. So, what is an object?"),(0,i.kt)("p",null,"Let's first consider what an object is in English: an object is something that can be seen or touched. We could describe an object as a thing, often inanimate. We could also describe an object similar to how we describe a noun: a person, place, or thing. By these definitions, a computer is an object, so let's use a computer as an example. "),(0,i.kt)("p",null,"How do we describe what a computer is? Well, we describe a computer by its features: its screen size, color, hardware, make and model, and its operating system. We also describe a computer by what it does: it turns on and off, it runs an operating system that in turn runs programs, and it connects to the internet. What an object is in English, and how we describe it, is much the same as what an object is in JavaScript."),(0,i.kt)("p",null,"In JavaScript, we use objects to represent things and concepts \u2014 like animals, political parties, and computers. A JavaScript ",(0,i.kt)("strong",{parentName:"p"},"object")," is simply a container for related data. We can describe an object by listing its data and functionality, the same as describing a computer by listing its features and what it can do. "),(0,i.kt)("p",null,"More generally speaking, this definition of an object is true across computer programming languages. As we'll learn later in this section, our web browsers use objects to represent things like the browser window and the webpages that we create with HTML and CSS. "),(0,i.kt)("p",null,"JavaScript objects can hold multiple types of data and they can be assigned many different types of functionality. The data describes what an object is, and the functionality describes what an object can do. This is in contrast to JavaScript primitives which only represent one piece and type of data. Also, primitives don't ",(0,i.kt)("em",{parentName:"p"},"do")," anything, meaning we can't give them actions to perform. "),(0,i.kt)("p",null,"For example, an object can be made up of number and string primitives, while a string primitive can only be one thing, a string. Because objects can contain lots of data of any data type, objects are really powerful tools! And this is the main takeaway: objects enable us to structure complex data in an organized way, as well as to house related data in one container."),(0,i.kt)("h3",{id:"more-object-analogies"},"More Object Analogies"),(0,i.kt)("p",null,"Think of a bag of groceries as an object. It does something (functionality): it holds food and other items so that people can easily transport the goods from the store to home. It also has something (data): perhaps 3 oranges, 2 packages of tofu, 1 pound of green beans, and a block of cheese. All of the separate pieces of data define the bag of groceries (our object), and are also now connected to each other by being held together in that bag of groceries. This is an example of how an object is a container that holds data, data about what the object is and can do."),(0,i.kt)("p",null,"Now, what if we had a website that provided online grocery shopping. How would we represent the bag of groceries that the customer leaves the store with in this new online context? In this case, we would create an object to represent a shopping cart that contains all of the different grocery items in it. This shopping cart object might have data about the customer (name, home address, etc.) so that we can connect the customer to the shopping cart. This shopping cart object might also have checkout functionality, so that the customer can buy the groceries. This is another example of how we can use a JavaScript object to represent a concept (a shopping cart) and to package information and functionality related to that concept in one container."),(0,i.kt)("p",null,"Let's consider another example object: a cat. We can describe what a cat is by itemizing different aspects about it. A cat has:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"eyes and other organs"),(0,i.kt)("li",{parentName:"ul"},"colors in its coat"),(0,i.kt)("li",{parentName:"ul"},"a name"),(0,i.kt)("li",{parentName:"ul"},"a personality"),(0,i.kt)("li",{parentName:"ul"},"age"),(0,i.kt)("li",{parentName:"ul"},"favorite activities"),(0,i.kt)("li",{parentName:"ul"},"perhaps a family and friends?"),(0,i.kt)("li",{parentName:"ul"},"how about enemies or prey?")),(0,i.kt)("p",null,"And what can a cat do? A cat can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"purr"),(0,i.kt)("li",{parentName:"ul"},"scratch up the furniture"),(0,i.kt)("li",{parentName:"ul"},"eat"),(0,i.kt)("li",{parentName:"ul"},"meow"),(0,i.kt)("li",{parentName:"ul"},"hunt"),(0,i.kt)("li",{parentName:"ul"},"jump, and certainly more!")),(0,i.kt)("p",null,"If we had a video game in which we lived and explored the world as a cat, we'd want to be able to define what the cat is (its data) and what the cat can do (its functionality), so that whoever is playing the video game can have the immersive cat experience! Objects let us do just that. With an object, we can define the complex data structure of a cat in a single container."),(0,i.kt)("h3",{id:"custom-versus-built-in-objects"},"Custom Versus Built-In Objects"),(0,i.kt)("p",null,"JavaScript (like most programming languages) provides built-in objects as well as the ability to make custom objects. What's the difference? Functionality that is ",(0,i.kt)("strong",{parentName:"p"},"built-in")," means that an object's category (name or type) and functionality (what it can do) is predefined in the JavaScript language. To use built-in objects, we simply need to learn about their syntax and then we can apply them in our code. Soon, we will learn more about built-in JavaScript objects. "),(0,i.kt)("p",null,"Creating our own ",(0,i.kt)("strong",{parentName:"p"},"custom")," object means we are using JavaScript-provided tools to define our own objects, what it is (name or type) and functionality (what it can do), like the cat or the shopping cart objects we talked about. We will learn more about creating custom objects in Intermediate JavaScript."),(0,i.kt)("h2",{id:"takeaways"},"Takeaways"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"If primitives and objects are still fuzzy, that's entirely expected \u2014 we'll be working through examples of these data types in upcoming lessons. Our next steps are to learn what JavaScript looks like and what we can do with JavaScript. That means writing our first JavaScript!"))}d.isMDXComponent=!0}}]);