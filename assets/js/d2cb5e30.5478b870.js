"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[46640],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},65486:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={title:"JavaScript Objects",id:"javascript_objects",slug:"javascript_objects",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3_object-oriented-javascript/0c_javascript_objects.md"},i=void 0,s={unversionedId:"intermediate_javascript_part_time/object-oriented-javascript/javascript_objects",id:"intermediate_javascript_part_time/object-oriented-javascript/javascript_objects",title:"JavaScript Objects",description:"JavaScript is an object-oriented programming language. We previously learned that JavaScript implicitly turns (some) primitives like strings, numbers, and booleans into objects. Well, arrays and even the functions we write are also objects in JavaScript. In this lesson, we will explore what it means to be an object in JavaScript.",source:"@site/docs/intermediate_javascript_part_time/3_object-oriented-javascript/0c_javascript_objects.md",sourceDirName:"intermediate_javascript_part_time/3_object-oriented-javascript",slug:"/intermediate_javascript_part_time/object-oriented-javascript/javascript_objects",permalink:"/lhtp/intermediate_javascript_part_time/object-oriented-javascript/javascript_objects",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"JavaScript Objects",id:"javascript_objects",slug:"javascript_objects",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3_object-oriented-javascript/0c_javascript_objects.md"},sidebar:"intermediate_javascript_part_time",previous:{title:"Homework and Class Structure",permalink:"/lhtp/intermediate_javascript_part_time/object-oriented-javascript/homework_and_class_structure"},next:{title:"Literal Notation Versus Constructors",permalink:"/lhtp/intermediate_javascript_part_time/object-oriented-javascript/literal_notation_versus_constructors"}},l={},p=[{value:"JavaScript Objects",id:"javascript-objects",level:2},{value:"Using <code>const</code> to Declare Objects",id:"using-const-to-declare-objects",level:3},{value:"Additional Practice",id:"additional-practice",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"JavaScript is an object-oriented programming language. We previously learned that JavaScript implicitly turns (some) primitives like strings, numbers, and booleans into objects. Well, arrays and even the functions we write are also objects in JavaScript. In this lesson, we will explore what it means to be an object in JavaScript."),(0,o.kt)("p",null,"We've worked a lot with built-in objects already, especially when working with Web APIs, which are the structures and tools that web browsers provide to developers so they can create interactive programs. At this point, we are well-versed on how to access object properties and methods. But we haven't yet created our own custom objects, and that's just what we'll learn how to do in this lesson! Given that we know a fair amount about objects, some of the information in this lesson will be a review and some of it will be new."),(0,o.kt)("p",null,"Code along with this lesson by adding the example objects to the DevTools console."),(0,o.kt)("h2",{id:"javascript-objects"},"JavaScript Objects"),(0,o.kt)("hr",null),(0,o.kt)("p",null,'We use objects when we want a variable to store much more information about the "thing" the variable represents. For example, if ',(0,o.kt)("em",{parentName:"p"},"you")," were a variable and we wanted to store information about you as a student at Epicodus (your name, your courses, your track, your enrollment status) in the single variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"epicodusStudent"),", we'd need more than a single string or a single array \u2014 we'd need an object!"),(0,o.kt)("p",null,"We know an object to be a collection of properties. We also understand that an object is a container for related but separate data. Well, in technical terminology, objects are containers that ",(0,o.kt)("strong",{parentName:"p"},"encapsulate")," data. This means that all of the relevant data and functions for the thing that a variable represents (like ",(0,o.kt)("inlineCode",{parentName:"p"},"epicodusStudent"),') are kept together in a "capsule", better known as an ',(0,o.kt)("strong",{parentName:"p"},"object"),", that can be created and manipulated in our programs ",(0,o.kt)("strong",{parentName:"p"},"as a single unit"),". "),(0,o.kt)("p",null,"Here is an example of an ",(0,o.kt)("inlineCode",{parentName:"p"},"epicodusStudent")," object in JavaScript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let epicodusStudent = {\n  firstName: "Charlie",\n  lastName: "Bucket",\n  year: 2022,\n  track: "Ruby and  React",\n  courses: ["Intro to Programming", "Intermediate JavaScript", "Ruby and Rails", "React"],\n  enrollmentStatus: true   \n};\n')),(0,o.kt)("p",null,"Let's take a look at how this object is defined. We have our variable ",(0,o.kt)("inlineCode",{parentName:"p"},"epicodusStudent"),".  We assign it the value of an object by using the curly braces, ",(0,o.kt)("inlineCode",{parentName:"p"},"{ }"),".  This is called ",(0,o.kt)("strong",{parentName:"p"},"object literal notation"),". Even though we didn't know it, we use ",(0,o.kt)("strong",{parentName:"p"},"literal notation")," when we create strings by using quotes, ",(0,o.kt)("inlineCode",{parentName:"p"},'"this is a string"'),", and arrays by using brackets, ",(0,o.kt)("inlineCode",{parentName:"p"},"[1, 2, 3]"),". To learn more, check out ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Literal"},"this reference page on literals MDN"),"."),(0,o.kt)("p",null,"Inside the curly braces are six properties for our ",(0,o.kt)("inlineCode",{parentName:"p"},"epicodusStudent")," object: ",(0,o.kt)("inlineCode",{parentName:"p"},"firstName"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"lastName"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"year"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"track"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"courses"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"enrollmentStatus"),".  Every property of a JavaScript object consists of a ",(0,o.kt)("strong",{parentName:"p"},"key-value")," pair:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"key")," is the variable that describes the kind of information to be stored."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"value")," is the specific value of the key.  ")),(0,o.kt)("p",null,"So, in our example, the property for the first name has a key called ",(0,o.kt)("inlineCode",{parentName:"p"},"firstName")," and a value of ",(0,o.kt)("inlineCode",{parentName:"p"},'"Charlie"'),", and the property for the last name has a key ",(0,o.kt)("inlineCode",{parentName:"p"},"lastName"),", with a value of ",(0,o.kt)("inlineCode",{parentName:"p"},'"Bucket"'),", and so on with the remaining keys ",(0,o.kt)("inlineCode",{parentName:"p"},"year"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"track"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"courses"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"enrollmentStatus"),".  "),(0,o.kt)("p",null,"Each key and value is separated by a colon ",(0,o.kt)("inlineCode",{parentName:"p"},":"),", and key-value pairs are separated from each other with a comma ",(0,o.kt)("inlineCode",{parentName:"p"},","),"."),(0,o.kt)("p",null,"We could write our object like this and it would also work:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let epicodusStudent = { firstName: "Charlie", lastName: "Bucket", year: 2022, track: "Ruby and  React", courses: ["Intro to Programming", "Intermediate JavaScript", "Ruby and Rails", "React"], enrollmentStatus: true };\n')),(0,o.kt)("p",null,"However, the formatting of the object with each property (or, key-value pair) indented two spaces on a separate line is a convention used when writing JavaScript objects to make it easy to see each property. Imagine an object with hundreds of properties written on the same line. It would be a bit of a challenge to sort out the details."),(0,o.kt)("p",null,"Though quotes are not needed in this context, property keys are always a JavaScript string that starts with a letter. Note that sometimes you'll see built-in objects that have keys that are set to what seems like a number:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> const myObj = {\n  0: "value", \n  1: "value 2"\n}\n')),(0,o.kt)("p",null,'But, in reality these "numbers" are actually strings. This can be confusing, so be aware!'),(0,o.kt)("p",null,"Property values can be any data type: string, number, boolean, array, object, or function. When the value of a property is a function, we call it a ",(0,o.kt)("strong",{parentName:"p"},"method"),"."),(0,o.kt)("p",null,'Here is an object with one property and one method. Put it into the DevTools console. The method when called will make my cat "speak" by writing "Meow" to the console. (Previously, we have used ',(0,o.kt)("inlineCode",{parentName:"p"},"console.log")," just for debugging, but we can use it for any message we'd like to see in the console.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'> let myCat = {\n  name: "Kitty Poppins",\n  speak: function() {\n    console.log("Meow!");\n  }\n};\n')),(0,o.kt)("p",null,"To keep it simple, you can think of properties as nouns and methods as verbs or actions."),(0,o.kt)("p",null,"So, once we have an object, how do we use it?  What do we do with the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"speak")," method?"),(0,o.kt)("p",null,"To access properties and methods on objects, we can use either ",(0,o.kt)("strong",{parentName:"p"},"dot notation")," or ",(0,o.kt)("strong",{parentName:"p"},"bracket notation"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"> myCat.name;\n\"Kitty Poppins\"\n> myCat['name'];\n\"Kitty Poppins\"\n> myCat.speak();\nMeow!\n> myCat['speak']();\nMeow!\n")),(0,o.kt)("p",null,"Dot notation is easier to write and read, but ",(0,o.kt)("strong",{parentName:"p"},"bracket notation allows us to use properties with special characters, or select properties using variables"),". For example, if we use a number for a property name, we'll have to access it with bracket notation or else we'll get an error returned:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> let favColors = {\n  1: "green",\n  2: "fuscia"\n};\n> favColors.1\nUncaught SyntaxError: Unexpected number\n> favColors["1"];\n"green"\n')),(0,o.kt)("p",null,"Let's create an empty new dog object in the DevTools console. We use the curly braces to signal JavaScript to create a new object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"> let dog = {};\nundefined\n> dog;\n{}\n")),(0,o.kt)("p",null,"The built-in JavaScript function that creates a new dog object returns the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," but if we type ",(0,o.kt)("inlineCode",{parentName:"p"},"dog;")," we can see that an empty object has been created for the ",(0,o.kt)("inlineCode",{parentName:"p"},"dog")," variable."),(0,o.kt)("p",null,"Now, let's give our dog some properties using dot notation. Here our property values are a string and a number:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'> dog.name = "Bark Twain";\n"Bark Twain"\n> dog.age = 5;\n5\n')),(0,o.kt)("p",null,"Now, let's add an array for a property value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'> dog.colors = ["brown","black","white"];\n["brown","black","white"]\n')),(0,o.kt)("p",null,"The value of a property comes with all of the functionality of its type. For example, we are able to use indexing on the ",(0,o.kt)("inlineCode",{parentName:"p"},"colors")," array as we've done with other arrays."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'> dog.colors[0];\n"brown"\n> dog.colors[1];\n"black"\n')),(0,o.kt)("p",null,"Or, we could call ",(0,o.kt)("inlineCode",{parentName:"p"},"String.prototype.toUpperCase()")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"dog.name"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> dog.name.toUpperCase();\n"BARK TWAIN"\n')),(0,o.kt)("p",null,"We can use array methods on the ",(0,o.kt)("inlineCode",{parentName:"p"},"colors")," property, like with ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.push()")," in the following example. Note, this method returns the new length of the array."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'> dog.colors.push("gray");\n4\n> dog.colors;\n["brown","black","white","gray"]\n')),(0,o.kt)("p",null,"Number methods on the ",(0,o.kt)("inlineCode",{parentName:"p"},"age")," property:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"> dog.age;\n5\n> dog.age + 10;\n15\n")),(0,o.kt)("p",null,"We can also update any property by reassigning its value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> dog.name = "Rex";\n"Rex"\n')),(0,o.kt)("p",null,"Let's add a method to our dog. This will be a property with a function as a value. In this case, we'll give our dog some ",(0,o.kt)("inlineCode",{parentName:"p"},"howl")," functionality."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> dog.howl = function() { \n  console.log("Aaaaaaaaaaaoooooooooooo!") \n}\n\u0192 () { \n  console.log("Aaaaaaaaaaaoooooooooooo!") \n}\n> dog.howl();\nAaaaaaaaaaaoooooooooooo!\n')),(0,o.kt)("p",null,"With objects, we can use properties within other properties. What if we decided we wanted to calculate our dog's age in human years? Let's add another method to our ",(0,o.kt)("inlineCode",{parentName:"p"},"dog")," object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"> dog.humanYears = function() {\n  return this.age * 7\n}\n\u0192 () {\n  return this.age * 7\n}\n")),(0,o.kt)("p",null,"Notice that the ",(0,o.kt)("inlineCode",{parentName:"p"},"humanYears")," function has a keyword of ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),". When ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," is used in an object's method, it always refers to the object on which the method is called.  So, when we run ",(0,o.kt)("inlineCode",{parentName:"p"},"dog.humanYears()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," will always refer to the object, ",(0,o.kt)("inlineCode",{parentName:"p"},"dog"),". (",(0,o.kt)("inlineCode",{parentName:"p"},"this")," can also be used in other places, but it gets tricky depending on its context and we won't cover it in detail here.) We'll see more examples of this in coming lessons!"),(0,o.kt)("p",null,"Now when we run ",(0,o.kt)("inlineCode",{parentName:"p"},"dog.humanYears()"),", we get 35.  "),(0,o.kt)("h3",{id:"using-const-to-declare-objects"},"Using ",(0,o.kt)("inlineCode",{parentName:"h3"},"const")," to Declare Objects"),(0,o.kt)("p",null,"You've probably noticed that we are using ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," to declare the objects above even when we aren't changing the object. This is intentional."),(0,o.kt)("p",null,"We can use ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," with objects \u2014 and it can still be very helpful for communicating our intentions to other developers. However, JavaScript doesn't do a good job making sure objects that are initialized with ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," are constant and don't change."),(0,o.kt)("p",null,"Let's take a look at an example in the DevTools console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> const greetings = {};\n> greetings.english = "hello";\n> greetings.english;\n"hello"\n> greetings.english = "hey";\n> greetings.english;\n"hey"\n')),(0,o.kt)("p",null,"We start by creating an object that is a constant. Then we add a property ",(0,o.kt)("inlineCode",{parentName:"p"},"english")," to it. As you can see, there is no warning or error. Instead, the object is modified just as if we've used ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," instead."),(0,o.kt)("p",null,"It's very important to know about this gotcha. However, even though we can't use ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," to freeze the properties of an object, we can still use it to communicate about our code. Even though another developer (or us) can still modify an object that's declared with ",(0,o.kt)("inlineCode",{parentName:"p"},"const"),", if we use ",(0,o.kt)("inlineCode",{parentName:"p"},"const"),", we are letting everyone know that the object ",(0,o.kt)("em",{parentName:"p"},"shouldn't")," be changed."),(0,o.kt)("p",null,"In this course, we'll generally create objects that will be modified, which is why we usually use ",(0,o.kt)("inlineCode",{parentName:"p"},"let"),", not ",(0,o.kt)("inlineCode",{parentName:"p"},"const"),". However, if you do create an object that should never be modified, make sure to use ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," instead."),(0,o.kt)("h3",{id:"additional-practice"},"Additional Practice"),(0,o.kt)("p",null,"In the DevTools JavaScript console, practice creating objects of your own. Here is some guided practice to try."),(0,o.kt)("p",null,"Create an object that stores information about a flower including name, color, and height."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Change the color of your flower using dot notation."),(0,o.kt)("li",{parentName:"ul"},"Change the height of your flower using bracket notation."),(0,o.kt)("li",{parentName:"ul"},"Add a property that indicates what kind of creatures help the flower with pollination.   This includes bees, butterflies, and birds."),(0,o.kt)("li",{parentName:"ul"},"Add one more creature to your list: humans."),(0,o.kt)("li",{parentName:"ul"},"Write a method that allows the flower to grow. After the method is run, the height value should be increased."),(0,o.kt)("li",{parentName:"ul"},"View all of the properties and methods for your flower object."),(0,o.kt)("li",{parentName:"ul"},"Explore viewing, adding and updating more properties and methods on your flower object.  "),(0,o.kt)("li",{parentName:"ul"},"Try using some of the string, number, and array methods you have used before on the properties that store these types of data.")))}d.isMDXComponent=!0}}]);