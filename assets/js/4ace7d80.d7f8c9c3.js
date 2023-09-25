"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[21900],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,c=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(c,i(i({ref:t},h),{},{components:a})):n.createElement(c,i({ref:t},h))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},38105:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"7. Array Methods",id:"array_methods",slug:"array_methods",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/5_arrays-and-looping/0g_array_methods.md"},i=void 0,s={unversionedId:"introduction_to_programming_part_time_evening/arrays-and-looping/array_methods",id:"introduction_to_programming_part_time_evening/arrays-and-looping/array_methods",title:"7. Array Methods",description:"Over the last two lessons, we've learned the basics of how arrays work, the length property that every array has, and how we can look inside of arrays. We also learned about off-by-one errors \u2014 and there will be plenty more reminders about OBOEs throughout this section (mostly when we make the OBOE in our code) because they are so common.",source:"@site/docs/introduction_to_programming_part_time_evening/5_arrays-and-looping/0g_array_methods.md",sourceDirName:"introduction_to_programming_part_time_evening/5_arrays-and-looping",slug:"/introduction_to_programming_part_time_evening/arrays-and-looping/array_methods",permalink:"/lhtp/introduction_to_programming_part_time_evening/arrays-and-looping/array_methods",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"7. Array Methods",id:"array_methods",slug:"array_methods",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/5_arrays-and-looping/0g_array_methods.md"},sidebar:"introduction_to_programming_part_time_evening",previous:{title:"6. Bracket Notation",permalink:"/lhtp/introduction_to_programming_part_time_evening/arrays-and-looping/bracket_notation"},next:{title:"8. Comparing and Cloning Arrays",permalink:"/lhtp/introduction_to_programming_part_time_evening/arrays-and-looping/comparing_and_cloning_arrays"}},l={},p=[{value:"Array Methods",id:"array-methods",level:2},{value:"<code>Array.prototype.push()</code> Versus <code>Array.prototype.concat()</code>",id:"arrayprototypepush-versus-arrayprototypeconcat",level:3},{value:"Using Bracket Notation to Modify Elements in an Array",id:"using-bracket-notation-to-modify-elements-in-an-array",level:3},{value:"<code>Array.prototype.unshift()</code> Versus <code>Array.prototype.shift()</code>",id:"arrayprototypeunshift-versus-arrayprototypeshift",level:3},{value:"<code>Array.prototype.pop()</code>",id:"arrayprototypepop",level:3},{value:"<code>Array.prototype.join()</code>",id:"arrayprototypejoin",level:3},{value:"<code>Array.prototype.slice()</code>",id:"arrayprototypeslice",level:3},{value:"Other Array Methods",id:"other-array-methods",level:3}],h={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Over the last two lessons, we've learned the basics of how arrays work, the ",(0,r.kt)("inlineCode",{parentName:"p"},"length")," property that every array has, and how we can look inside of arrays. We also learned about off-by-one errors \u2014 and there will be plenty more reminders about OBOEs throughout this section (mostly when we make the OBOE in our code) because they are so common."),(0,r.kt)("p",null,"In this lesson, we'll learn about some of the most common array methods. In the process, we'll make an important distinction because some methods ",(0,r.kt)("strong",{parentName:"p"},"mutate")," the arrays they are called on while some don't. When a method mutates an array, it is permanently changed, while methods that don't mutate arrays actually create (and return) brand new arrays."),(0,r.kt)("p",null,"As you read through this lesson, optionally use the DevTools console to try out the new code."),(0,r.kt)("h2",{id:"array-methods"},"Array Methods"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"arrayprototypepush-versus-arrayprototypeconcat"},(0,r.kt)("inlineCode",{parentName:"h3"},"Array.prototype.push()")," Versus ",(0,r.kt)("inlineCode",{parentName:"h3"},"Array.prototype.concat()")),(0,r.kt)("p",null,"Let's look at an example of a method that mutates an array versus one that doesn't. We'll start by returning to ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.push()"),". Yes, we've already learned this method \u2014 however, it's so important that it's worth reviewing it. It's also a key example of a method that mutates the array it's called on. These kinds of methods are also known as ",(0,r.kt)("strong",{parentName:"p"},"destructive methods")," because they change the receiver (the thing the method is called on)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> let numArr = [1,2,3];\n> numArr.push(4);\n4\n> numArr;\n[1,2,3,4]\n")),(0,r.kt)("p",null,"As we can see in this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"numArr")," has been mutated. ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.push()")," only returns the length of the array (",(0,r.kt)("inlineCode",{parentName:"p"},"4"),"), and not a new array like non-destructive methods do. "),(0,r.kt)("p",null,"Let's compare this to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.concat()")," method, which is a non-destructive method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> const originalArray = [1,2,3];\n> const modifiedArray = originalArray.concat(4);\n> originalArray;\n[1,2,3]\n> modifiedArray;\n[1,2,3,4]\n")),(0,r.kt)("p",null,"First, note that we used ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," here instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"let"),". This is because ",(0,r.kt)("inlineCode",{parentName:"p"},"originalArray")," isn't being modified when we call ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.concat()")," on it. This method returns a new array, which is what all ",(0,r.kt)("strong",{parentName:"p"},"non-destructive")," methods do. The value of this new array is the original array plus the arguments passed into ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.concat()"),". In this case, it's doing the same thing as if we just used ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.push()"),", right? So what's the difference?"),(0,r.kt)("p",null,"Well, it's a pretty big deal that our original array isn't modified. What if we want to use the original array for another operation later? It would be better to use ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.concat()"),". Also, we really need to make sure we store the return of ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.concat()")," in a variable (because it won't be saved otherwise) while we don't need to do so with ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.push()"),"."),(0,r.kt)("p",null,"There's also a whole school of thought that we should ",(0,r.kt)("em",{parentName:"p"},"never")," modify arrays or other objects \u2014 only create new ones. This is a central concept of a programming style called ",(0,r.kt)("strong",{parentName:"p"},"functional programming")," which we will learn about once we reach the React course."),(0,r.kt)("p",null,"For now, we aren't making distinctions about one being better or worse. It's just important to know both of these methods \u2014 and to know which methods mutate the array they are called on and which don't."),(0,r.kt)("h3",{id:"using-bracket-notation-to-modify-elements-in-an-array"},"Using Bracket Notation to Modify Elements in an Array"),(0,r.kt)("p",null,"In the last lesson, we learned how to use bracket notation to see the value of an array. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> let array = [1,2,3];\n> array[0];\n1\n")),(0,r.kt)("p",null,"We can also use bracket notation to modify elements in an array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> let array = [1,2,3]\n> array[0] = "We just modified the array at position zero.";\n> array;\n["We just modified the array at position zero.",2,3];\n')),(0,r.kt)("p",null,"In this example, we assigned a new value to ",(0,r.kt)("inlineCode",{parentName:"p"},"array[0]"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"We just modified the array at position zero."'),"."),(0,r.kt)("p",null,"Modifying elements in arrays like this is super useful. Make a mental note of this now so you can add this to your JS toolbox right away."),(0,r.kt)("p",null,"As you can probably guess, you can reassign elements in an array even if it's a ",(0,r.kt)("inlineCode",{parentName:"p"},"const"),". If an array is a ",(0,r.kt)("inlineCode",{parentName:"p"},"const"),", it's only the array ",(0,r.kt)("em",{parentName:"p"},"itself")," that can't be reassigned."),(0,r.kt)("p",null,"We can also use bracket notation to add an element to an array. Be careful, though \u2014 it's not as effective as using ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.push()")," or other methods. Here's why:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> let array = [1,2,3];\n> array[5] = 4;\n4\n> array;\n[1, 2, 3, , , 4]\n")),(0,r.kt)("p",null,"In the example above, we assign the number ",(0,r.kt)("inlineCode",{parentName:"p"},"4")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"array")," at an index of ",(0,r.kt)("inlineCode",{parentName:"p"},"5"),". There is no index at ",(0,r.kt)("inlineCode",{parentName:"p"},"5"),", though. JavaScript is happy to expand our array so it can insert this value  at the 5th index \u2014 but that means it has to add some empty elements (the DevTools console will display this as ",(0,r.kt)("inlineCode",{parentName:"p"},"[1, 2, 3, empty \xd7 2, 4]"),"). Yuck! In general, we don't want to have empty spots in an array, though there is a use case for just about everything in JavaScript. It would certainly work to do the following (and have the exact same effect as ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.push()"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> array[array.length] = 4;\n")),(0,r.kt)("p",null,"Since the length of an array would be one element ",(0,r.kt)("em",{parentName:"p"},"past")," the final element in the current array, this works correctly. It's a convoluted approach to adding an element in an array, though, and you'll probably never see it in the real world. As always, though, it's good to see the flexibility and power of each tool we have in our toolbox."),(0,r.kt)("h3",{id:"arrayprototypeunshift-versus-arrayprototypeshift"},(0,r.kt)("inlineCode",{parentName:"h3"},"Array.prototype.unshift()")," Versus ",(0,r.kt)("inlineCode",{parentName:"h3"},"Array.prototype.shift()")),(0,r.kt)("p",null,"Okay, the difference between these two methods is confusing \u2014 and don't worry... lots of developers feel this way."),(0,r.kt)("p",null,"We use ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.unshift()")," to add an element to the beginning of an array. It's like ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.push()"),", except for the beginning of the array instead of the end."),(0,r.kt)("p",null,"Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> let numberArray = [2,3,4];\n> numberArray.unshift(1);\n> numberArray;\n[1,2,3,4]\n")),(0,r.kt)("p",null,"On the other hand, ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.shift()")," ",(0,r.kt)("em",{parentName:"p"},"removes")," the first element of the array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> let numberArray = [2,3,4];\n> numberArray.shift();\n> numberArray;\n[3,4]\n")),(0,r.kt)("p",null,"Yes, the common sentiment out there is that this is backwards and confusing. When you ",(0,r.kt)("em",{parentName:"p"},"shift")," something over, shouldn't that mean adding something to the beginning because we are shifting over what's already there? And when you ",(0,r.kt)("em",{parentName:"p"},"unshift")," it, shouldn't that mean taking something away from the beginning?"),(0,r.kt)("p",null,"Nope, it's the opposite. The best way to remember how ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.shift()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.unshift()")," work is that their effect seems counter-intuitive to how they are named. There is actually a good reason they are named this way \u2014 it's based on binary shifting. That's not something you need to look up, though, unless you are curious to learn about something completely tangential."),(0,r.kt)("p",null,"Also, it's worth noting \u2014 both of these methods are destructive. They change the receiver."),(0,r.kt)("h3",{id:"arrayprototypepop"},(0,r.kt)("inlineCode",{parentName:"h3"},"Array.prototype.pop()")),(0,r.kt)("p",null,"Here's an easy one to remember! Don't want to ",(0,r.kt)("em",{parentName:"p"},"push")," something onto the end of an array? ",(0,r.kt)("em",{parentName:"p"},"Pop")," it off. ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.pop()")," removes the last element of an array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> let arrayToPop = ["a", "b", "c", "d"];\n> arrayToPop.pop();\n"d"\n> arrayToPop;\n["a", "b", "c"]\n')),(0,r.kt)("p",null,"A couple of things to note here. One, this method is destructive. Secondly, when we call this method, the return is the value of the element that was popped. Pay close attention here! Sometimes we'll want to do something with this value."),(0,r.kt)("h3",{id:"arrayprototypejoin"},(0,r.kt)("inlineCode",{parentName:"h3"},"Array.prototype.join()")),(0,r.kt)("p",null,"In this section, we'll work on some projects where we want to do things to different characters in a string. This means turning a string into an array. Once we are done doing all the things, we may want the final thing to once again be a string. That's where ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.join()")," comes in. It will take an array and turn it into a string. We can also pass in a separator as an argument. The examples below should make this clear:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const epicodus = ["e","p","i","c"];\n> const epic = epicodus.join();\n> epic;\n"e,p,i,c"\n> const epicWithoutCommas = epicodus.join("");\n> epicWithoutCommas;\n"epic"\n> const reallyEpic = epicodus.join("...");\n> reallyEpic;\n"e...p...i...c"\n')),(0,r.kt)("p",null,"If we call ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.join()")," without arguments, the array will be turned into a string with commas as separators between each element from the array. That's usually not what we'll want. More commonly, we'll want to do away with the commas, which means passing in ",(0,r.kt)("inlineCode",{parentName:"p"},'""')," as an argument. This just means the separator should be no spaces. If we passed in ",(0,r.kt)("inlineCode",{parentName:"p"},'" "'),", the separator between each element would be a space. We can pass anything we want as a separator \u2014 especially if we want to be really epic and add ",(0,r.kt)("inlineCode",{parentName:"p"},"...")," between each character."),(0,r.kt)("p",null,"Note that this is a non-destructive method \u2014 so we need to save the return value to a variable."),(0,r.kt)("h3",{id:"arrayprototypeslice"},(0,r.kt)("inlineCode",{parentName:"h3"},"Array.prototype.slice()")),(0,r.kt)("p",null,"We'll cover one more common array method. We can use ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice()")," to literally slice off parts of an array. It's kind of like ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.shift()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.pop()")," mixed together in one, but more flexible and powerful."),(0,r.kt)("p",null,"We can pass in one or two arguments. We have to slice from the beginning of the array \u2014 and we can optionally slice from the end."),(0,r.kt)("p",null,"The first argument denotes the index we should slice up to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const fruits = ["rambutan", "durian", "kiwi", "guava", "mangosteen"];\n> const slicedFruits = fruits.slice(2);\n> slicedFruits;\n["kiwi", "guava", "mangosteen"]\n')),(0,r.kt)("p",null,"Here, we are slicing ",(0,r.kt)("em",{parentName:"p"},"everything up to but not including")," an index of 2 \u2014 so everything before ",(0,r.kt)("inlineCode",{parentName:"p"},'"kiwi"'),". Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice()")," isn't destructive and we have to save its return (a sliced copy of the array) in a variable. That's probably for the best \u2014 too much slicing and dicing going on!"),(0,r.kt)("p",null,"Now let's slice our fruits a different way \u2014 and also remove some fruits from the end of our array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const dicedFruits = fruits.slice(1,3);\n["durian", "kiwi"]\n')),(0,r.kt)("p",null,"We are slicing ",(0,r.kt)("em",{parentName:"p"},"up to")," an index of 1 \u2014 so ",(0,r.kt)("inlineCode",{parentName:"p"},'"rambutan"')," gets sliced off. Then we are slicing ",(0,r.kt)("em",{parentName:"p"},"everything past and including")," an index of 3. So the second argument handles things a little differently than the first because the slicing starts ",(0,r.kt)("em",{parentName:"p"},"when")," the index is reached, not ",(0,r.kt)("em",{parentName:"p"},"after"),". Be careful or you might slice more fruits than your codebase can handle."),(0,r.kt)("h3",{id:"other-array-methods"},"Other Array Methods"),(0,r.kt)("p",null,"This is just the tip of the iceberg in terms of what we can do with arrays. There are a lot of other array methods \u2014 and later in this section we'll learn how to use looping to really enhance what we can do with arrays. We'll also learn some other powerful array methods throughout the remainder of the program."),(0,r.kt)("p",null,"To see a list of array methods, check the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"},"Mozilla array documentation"),". Scroll down the page a bit and you'll see a list of methods in the left-hand pane. You don't need to memorize them \u2014 after all, that's what documentation is for. However, take some time to acquaint yourself with the methods available. All the methods we've covered in this lesson are on that list."))}m.isMDXComponent=!0}}]);