"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[95636],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,m=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return a?n.createElement(m,s(s({ref:t},h),{},{components:a})):n.createElement(m,s({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},82877:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Further Exploration: Introduction to Regular Expressions",id:"further_exploration_introduction_to_regular_expressions",slug:"further_exploration_introduction_to_regular_expressions",hide_table_of_contents:!0,sidebar_position:40,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3h_regular_expressions.md"},s=void 0,i={unversionedId:"introduction_to_programming/arrays-and-looping/further_exploration_introduction_to_regular_expressions",id:"introduction_to_programming/arrays-and-looping/further_exploration_introduction_to_regular_expressions",title:"Further Exploration: Introduction to Regular Expressions",description:"Important Note: You aren't required to use regular expressions on any independent projects \u2014 and you should prioritize looping during the classwork for this section. If you need to focus on understanding looping, skip this lesson for now. It's fine to come back later in this section \u2014 or even in future sections \u2014 once you're ready to start using regular expressions or if you want to use this lesson as a reference. However, many of the problems in this section can also be solved with regex. If you have time, try refactoring a problem you solve with a loop to use a regular expression instead.",source:"@site/docs/introduction_to_programming/3_arrays-and-looping/3h_regular_expressions.md",sourceDirName:"introduction_to_programming/3_arrays-and-looping",slug:"/introduction_to_programming/arrays-and-looping/further_exploration_introduction_to_regular_expressions",permalink:"/introduction_to_programming/arrays-and-looping/further_exploration_introduction_to_regular_expressions",draft:!1,tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Further Exploration: Introduction to Regular Expressions",id:"further_exploration_introduction_to_regular_expressions",slug:"further_exploration_introduction_to_regular_expressions",hide_table_of_contents:!0,sidebar_position:40,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3h_regular_expressions.md"},sidebar:"introduction_to_programming",previous:{title:"Practice: Pig Latin",permalink:"/introduction_to_programming/arrays-and-looping/practice_pig_latin"},next:{title:"Further Exploration: Regular Expressions with Text Analyzer",permalink:"/introduction_to_programming/arrays-and-looping/further_exploration_regular_expressions_with_text_analyzer"}},l={},p=[{value:"Loops Versus Regular Expressions",id:"loops-versus-regular-expressions",level:2},{value:"Basic Regular Expressions",id:"basic-regular-expressions",level:2},{value:"Regex Flags",id:"regex-flags",level:3},{value:"Regex Patterns",id:"regex-patterns",level:3},{value:"Regex Groups and Ranges",id:"regex-groups-and-ranges",level:4},{value:"Regex Characters",id:"regex-characters",level:3},{value:"Quantifiers",id:"quantifiers",level:4},{value:"Other Helpful Regex Symbols",id:"other-helpful-regex-symbols",level:3},{value:"Documentation",id:"documentation",level:2},{value:"JavaScript Methods that Use Regex",id:"javascript-methods-that-use-regex",level:2},{value:"<code>RegExp.prototype.test()</code>",id:"regexpprototypetest",level:3},{value:"<code>String.prototype.match()</code>",id:"stringprototypematch",level:3},{value:"Summary",id:"summary",level:2}],h={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important Note:")," You aren't required to use regular expressions on any independent projects \u2014 and you should prioritize looping during the classwork for this section. ",(0,r.kt)("strong",{parentName:"p"},"If you need to focus on understanding looping, skip this lesson for now.")," It's fine to come back later in this section \u2014 or even in future sections \u2014 once you're ready to start using regular expressions or if you want to use this lesson as a reference. However, many of the problems in this section can also be solved with regex. If you have time, try refactoring a problem you solve with a loop to use a regular expression instead."),(0,r.kt)("p",null,"An essential feature of many programming languages, including JavaScript, is the ability to use ",(0,r.kt)("strong",{parentName:"p"},"regular expressions"),". A regular expression (also known as a regex) is a set of characters we can use to find patterns in a string. All the languages we teach at Epicodus, including Ruby and C#, use regular expressions."),(0,r.kt)("p",null,"While the exact syntax of a regular expression varies somewhat from language to language, the syntax is generally more similar than not. For that reason, once you learn how to use regular expressions in one language, you'll be well on your way to learning how to use them in other languages, too."),(0,r.kt)("h2",{id:"loops-versus-regular-expressions"},"Loops Versus Regular Expressions"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Let's start with an example. We'll solve a basic problem with a loop and then demonstrate how we can solve the same problem with a regular expression. Let's say we want to take all the vowels in a string and X them out. Here's how we could do this with a loop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const vowels = ["a", "i", "e", "o", "u"];\n> const string = "Replace all of the vowels with an X, please!";\n> const stringArray = string.split("");\n> let xArray = [];\n> stringArray.forEach(function(letter) {\n  if (vowels.includes(letter)) {\n    xArray.push("x");\n  } else {\n    xArray.push(letter);\n  }\n});\n> const finalString = xArray.join("");\n> finalString;\n"Rxplxcx xll xf thx vxwxls wxth xn X, plxxsx!"\n')),(0,r.kt)("p",null,"As always, try inputting this code in the DevTools console. In this code, we have to split a string and then iterate through it, checking to see if each letter is a vowel or not. If ",(0,r.kt)("inlineCode",{parentName:"p"},"vowels.includes(letter)"),", then we push ",(0,r.kt)("inlineCode",{parentName:"p"},'\'"x"'),". Otherwise, we just push the letter."),(0,r.kt)("p",null,"By the way, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.includes()")," method is super useful \u2014 and you may find yourself using it to solve a problem in the classwork. Specifically, it checks to see if an array includes a certain value. In this case, it's a great way to see if the letter is a vowel."),(0,r.kt)("p",null,"Now let's solve this same problem with a regular expression instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const string = "Replace all of the vowels with an X, please!";\n> const finalString = string.replace(/[aieou]/gi, "x");\n> finalString;\n"Rxplxcx xll xf thx vxwxls wxth xn X, plxxsx!"\n')),(0,r.kt)("p",null,"Wow, that's a lot less code \u2014 and no loop is needed!"),(0,r.kt)("h2",{id:"basic-regular-expressions"},"Basic Regular Expressions"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In the example above, we use the JavaScript method ",(0,r.kt)("inlineCode",{parentName:"p"},"String.prototype.replace()"),", which takes two arguments. The first argument is the characters (or pattern) that should be replaced while the second is what the characters should be replaced with. Here, we pass in a regular expression (a pattern) as the first argument while the second argument is the letter x. We could also pass in a string into this method as the first argument as well. For instance, we could do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const finalString = string.replace("a", "x");\n> finalString;\n"Replxce all of the vowels with an X, please!"\n')),(0,r.kt)("p",null,'The difference here is that only a single character is being replaced (the letter "a"), which isn\'t quite what we want. This method is much more powerful if we use it with a regular expression than with a string.'),(0,r.kt)("p",null,"Now let's take a closer look at the regex above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/[aieou]/gi\n")),(0,r.kt)("p",null,"The part between the slashes ",(0,r.kt)("inlineCode",{parentName:"p"},"/   /")," is the regular expression itself. The part after the final slash includes any flags we want to use with the regular expression."),(0,r.kt)("h3",{id:"regex-flags"},"Regex Flags"),(0,r.kt)("p",null,"We'll start by looking at the flags because they are the easiest part of a regular expression to understand. The ",(0,r.kt)("inlineCode",{parentName:"p"},"g")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," flags are the most common flags we'll use in regular expressions. In fact, most of the time, they'll be the ",(0,r.kt)("em",{parentName:"p"},"only")," flags we'll ever need."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"g")," means ",(0,r.kt)("strong",{parentName:"li"},"global"),". If we omit this flag, our regular expression will just change the ",(0,r.kt)("em",{parentName:"li"},"first")," instance of the match in the string, not all of them. Here's what ",(0,r.kt)("inlineCode",{parentName:"li"},"finalString")," is ",(0,r.kt)("em",{parentName:"li"},"without")," the global flag:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'"Rxplace all of the vowels with an X, please!"\n')),(0,r.kt)("p",null,"As we can see, just the first vowel was replaced. Since we'll often want to change every instance of a pattern in a string, we'll need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"g")," flag regularly."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"i")," means ",(0,r.kt)("strong",{parentName:"li"},"case-insensitive"),". If we didn't add this flag, our regex would only change lower-cased vowels \u2014 because that's all we've specified in the regular expression itself. Here's an example where we use this regular expression without the ",(0,r.kt)("inlineCode",{parentName:"li"},"i")," flag:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const newString = "Abracadabra!";\n> newString.replace(/[aieou]/g, "x");\n"Abrxcxdxbrx!"\n')),(0,r.kt)("p",null,"Here, we can see every vowel was replaced \u2014 except for the capitalized vowel at the beginning. So the ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," flag is very important to know about, too."),(0,r.kt)("p",null,"These are the two most commonly used flags and the only ones we really need to know about right now. The other ones are a bit more obscure and generally used with more complex regex \u2014 which can get ",(0,r.kt)("em",{parentName:"p"},"very")," complicated."),(0,r.kt)("h3",{id:"regex-patterns"},"Regex Patterns"),(0,r.kt)("p",null,"Now let's look at the pattern in our regular expression:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/[aieou]/\n")),(0,r.kt)("p",null,"As we mentioned before, a regex is enclosed in slashes. (The flags aren't part of the pattern itself \u2014 they come after the slashes.) The simplest regex is just a pattern with no additional characters. Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> "The gray cat".replace(/cat/, "dog");\n"The gray dog"\n')),(0,r.kt)("p",null,"As we can see, this regex takes the whole pattern, which is the string ",(0,r.kt)("inlineCode",{parentName:"p"},'"cat"'),", and replaces it. It's exactly the same as if we just passed a string in instead."),(0,r.kt)("h4",{id:"regex-groups-and-ranges"},"Regex Groups and Ranges"),(0,r.kt)("p",null,"When we add ",(0,r.kt)("inlineCode",{parentName:"p"},"[ ]")," to a regular expression, it denotes a set or group of characters. So instead of matching the exact pattern ",(0,r.kt)("inlineCode",{parentName:"p"},'"aieou"')," (not at all what we want), our regex will match any of the characters in that group. That's why our example above has the pattern ",(0,r.kt)("inlineCode",{parentName:"p"},"/[aieou]/"),"."),(0,r.kt)("p",null,"Let's say we want to replace ",(0,r.kt)("em",{parentName:"p"},"all")," characters that are numbers. We could do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const string = "Jasmine\'s secret code is 13249.";\n> string.replace(/\\d/g, "x");\n"Jasmine\'s secret code is xxxxx."\n')),(0,r.kt)("p",null,"As we can see, our regex is starting to look a little weirder. We start with two ",(0,r.kt)("inlineCode",{parentName:"p"},"/ /"),". Inside of that, we use ",(0,r.kt)("inlineCode",{parentName:"p"},"\\d"),", which means any number. Finally, we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"g")," flag to denote that all numbers in the string should be replaced with an x. If we wanted to replace all characters that are ",(0,r.kt)("em",{parentName:"p"},"not")," numbers, we'd use ",(0,r.kt)("inlineCode",{parentName:"p"},"\\D")," instead. Other common characters include ",(0,r.kt)("inlineCode",{parentName:"p"},"\\w"),", which matches any alphanumeric character (letters and numbers) and ",(0,r.kt)("inlineCode",{parentName:"p"},"\\W"),", which matches any non-alphanumeric character."),(0,r.kt)("p",null,"By the way, there are a lot of ways to do the same thing with regular expressions. We can replace Jasmine's secret code using a group with a range like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const string = "Jasmine\'s secret code is 13249.";\n> string.replace(/[0-9]/g, "x");\n"Jasmine\'s secret code is xxxxx."\n')),(0,r.kt)("p",null,"The dash (",(0,r.kt)("inlineCode",{parentName:"p"},"-"),") indicates the range zero to nine \u2014 and we need to put it inside the square brackets ",(0,r.kt)("inlineCode",{parentName:"p"},"[ ]")," because this is a group of characters. We can also do ",(0,r.kt)("inlineCode",{parentName:"p"},"[A-Z]")," (for uppercase letters) and ",(0,r.kt)("inlineCode",{parentName:"p"},"[a-z]")," (for lowercase letters). Essentially, ",(0,r.kt)("inlineCode",{parentName:"p"},"\\d")," means the same thing as ",(0,r.kt)("inlineCode",{parentName:"p"},"[0-9]"),"."),(0,r.kt)("p",null,"What if we wanted to take our string and replace all the characters that are ",(0,r.kt)("em",{parentName:"p"},"not")," vowels instead? We can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"^")," character, which means ",(0,r.kt)("em",{parentName:"p"},"not")," this pattern."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const string = "Replace everything that\'s not a vowel, please!";\nstring.replace(/[^aeiou]/gi, "x");\n> "xexxaxexexexxxxixxxxxaxxxxxoxxaxxoxexxxxxeaxex"\n')),(0,r.kt)("p",null,"This replaced everything that's not a vowel \u2014 including the spaces and punctuation!"),(0,r.kt)("h3",{id:"regex-characters"},"Regex Characters"),(0,r.kt)("p",null,"A regex character represents certain symbols. We've already covered a few and we'll add a few more:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\\d"),": Numbers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\\D"),": Not numbers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\\w"),": Matches any alphanumeric character (including underscores) \u2014 so numbers and letters"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\\W"),": Matches any character that's not a number, letter, or underscore"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\\s"),": Matches a whitespace character"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\\S"),": Matches any non-whitespace character"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"."),": Any single character (wildcard)")),(0,r.kt)("p",null,"Don't worry about memorizing these \u2014 just be aware that these characters exist and you can always look at documentation when you actually need them."),(0,r.kt)("p",null,"Let's go into greater detail regarding the ",(0,r.kt)("inlineCode",{parentName:"p"},"."),", which represents a character wildcard (unless it's contained inside ",(0,r.kt)("inlineCode",{parentName:"p"},"[ ]")," in which case, it's a period ",(0,r.kt)("inlineCode",{parentName:"p"},".")," character that we'd want to match in the pattern). We can put ",(0,r.kt)("inlineCode",{parentName:"p"},".")," before or after other characters to be more flexible in our search for patterns."),(0,r.kt)("p",null,"Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const string = "cat, hat, tilt, colt";\n> string.replace(/.t/g, "");\n"c, h,i, co"\n')),(0,r.kt)("p",null,"So what happens here? Every time the letter ",(0,r.kt)("inlineCode",{parentName:"p"},"t")," is preceded by another character, it's replaced by empty space. Be careful, though! That includes not just ",(0,r.kt)("inlineCode",{parentName:"p"},"at")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"lt")," but also ",(0,r.kt)("inlineCode",{parentName:"p"}," t")," (with a space) as well. If you wanted it to not include spaces, that would involve a little tinkering."),(0,r.kt)("h4",{id:"quantifiers"},"Quantifiers"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Quantifiers")," allow us to match a specific number of characters. Here are a few that are very useful:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+"),": Match the preceding character one or more times"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"*"),": Match the preceding character zero or more times"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"?"),": Match the preceding character zero or one times"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{ }"),": Match a pattern a specified number of times")),(0,r.kt)("p",null,"As we can see, there are some small distinctions in these quantifiers but they can make a big difference. Let's look at some examples."),(0,r.kt)("p",null,"We can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," to denote a character matching the preceding character 1 or more times. Let's say we have a letter full of exclamation points:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> const letter = \"Hi there!!!!! How's life?!! It's good here!!!!!!!!\";\n")),(0,r.kt)("p",null,"It's too many exclamation points! We just want one exclamation point per sentence. We can't just replace them all since we want to keep the first one. We also can't specify an exact pattern like ",(0,r.kt)("inlineCode",{parentName:"p"},"!!!")," because there are differing numbers of exclamation points."),(0,r.kt)("p",null,"We could do this instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> letter.replace(/!+/g, "!");\n"Hi there! How\'s life?! It\'s good here!"\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," symbol found every pattern in the string with ",(0,r.kt)("em",{parentName:"p"},"at least")," one ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," and then the method replaced them with a single ",(0,r.kt)("inlineCode",{parentName:"p"},"!")),(0,r.kt)("p",null,"While the ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," symbol denotes a character needs to match the preceding character one or more times, the ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," symbol denotes that a character needs to match it ",(0,r.kt)("em",{parentName:"p"},"zero")," or more times. So it's a little more flexible. It will have a strange effect on the ",(0,r.kt)("inlineCode",{parentName:"p"},"letter")," string above, though:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> letter.replace(/!*/g, "!");\n"!H!i! !t!h!e!r!e!! !H!o!w!\'!s! !l!i!f!e!?!! !I!t!\'!s! !g!o!o!d! !h!e!r!e!!"\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Every")," character represents a match. ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," is a match but so is no ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," at all. So it's important to be careful with ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," as it might return unintended matches. This example should illustrate how a tiny little symbol can make all the difference between a successful regex and one that does something completely unintended."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," symbol is much more useful in combination with other characters. Here's an example. Let's say you have a series of old customer service tickets that you want to update. The old tickets begin with X, XY, or XYY. You want to change them to the new system, which begins with AB."),(0,r.kt)("p",null,"We could do this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const oldTickets = "X14325, XY15302, XYY5321";\n> oldTickets.replace(/XY*/g, "AB");\n"AB14325, AB15302, AB5321"\n')),(0,r.kt)("p",null,'Our pattern states "find every X along with every Y that comes directly after it." Then our method replaces this pattern with ',(0,r.kt)("inlineCode",{parentName:"p"},'"AB"'),". For that reason, it replaces ",(0,r.kt)("inlineCode",{parentName:"p"},"X"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"XY"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"XYY"),". It would replace ",(0,r.kt)("inlineCode",{parentName:"p"},"XYYYYYYYY"),", too."),(0,r.kt)("p",null,"Finally, the ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," quantifier states that the preceding pattern must match zero or one time. We'll include an example later in this lesson."),(0,r.kt)("p",null,"There's no need to memorize any of these quantifiers right now (that's what documentation is for), but it's important to be aware that these very subtle distinctions can help us solve a lot of different coding problems."),(0,r.kt)("p",null,"Here's another quantifier that can be very useful. If we use ",(0,r.kt)("inlineCode",{parentName:"p"},"{ }"),", it denotes the number of characters that can be in a pattern. For instance, let's say we have a string full of numbers that represent scientific data. We know that any numbers that have seven digits are outliers and should be thrown out. (We'll just replace them with zeros here.)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const dataString = "342356, 2345, 4235235, 123, 43534";\n> dataString.replace(/\\d{7}/g, "0");\n\'342356, 2345, 0, 123, 43534\'\n')),(0,r.kt)("p",null,"This states that patterns with numbers (",(0,r.kt)("inlineCode",{parentName:"p"},"\\d"),") of length ",(0,r.kt)("inlineCode",{parentName:"p"},"{7}")," should be matched."),(0,r.kt)("p",null,"We could also do matches of different lengths as well:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{x}"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," is the exact length of characters that should be matched"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{x,y}"),": The match should be ",(0,r.kt)("em",{parentName:"li"},"at least")," ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," matching characters and ",(0,r.kt)("em",{parentName:"li"},"at most")," ",(0,r.kt)("inlineCode",{parentName:"li"},"y")," matching characters"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{x,}"),": The match should be at least ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," matching characters with no upper limit")),(0,r.kt)("p",null,"So let's say we want to throw out all numbers that are at least five characters and replace them with ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const dataString = "342356, 2345, 4235235, 123, 43534";\n> dataString.replace(/\\d{5,}/g, "0");\n"0, 2345, 0, 123, 0"\n')),(0,r.kt)("p",null,"As we can see, we use ",(0,r.kt)("inlineCode",{parentName:"p"},"{5,}")," to denote that numbers with ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," or more characters are replaced."),(0,r.kt)("p",null,"Be careful, though. Look what happens when we forget the comma:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const dataString = "342356, 2345, 4235235, 123, 43534";\n> dataString.replace(/\\d{5}/g, "0");\n"06, 2345, 035, 123, 0"\n')),(0,r.kt)("p",null,"The first number was originally six digits \u2014 so this regex pattern matches ",(0,r.kt)("em",{parentName:"p"},"exactly")," five of these digits and then ",(0,r.kt)("inlineCode",{parentName:"p"},"String.prototype.replace()")," replaces them with a zero. So instead of just taking numbers that are five digits and replacing them with ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", it will take any cluster of five digits and turn them to zero. For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> "23423423423423423423".replace(/\\d{5}/g, "0");\n"0000"\n')),(0,r.kt)("p",null,"Here, the number being transformed is twenty digits \u2014 it matches the pattern four times so it's turned into four zeros. As we can see, this is very different from what happens with the comma."),(0,r.kt)("h3",{id:"other-helpful-regex-symbols"},"Other Helpful Regex Symbols"),(0,r.kt)("p",null,"Let's look at a few other helpful regex symbols."),(0,r.kt)("p",null,"We can use the pipe ",(0,r.kt)("inlineCode",{parentName:"p"},"|")," to represent either/or:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const string = "I see a gray cat and a black dog.";\n> string.replace(/cat|dog/g, "bird");\n"I see a gray bird and a black bird."\n')),(0,r.kt)("p",null,"We specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"cat")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"dog")," with the pipe ",(0,r.kt)("inlineCode",{parentName:"p"},"|"),". Note that we need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"g")," flag to change both patterns in the string to ",(0,r.kt)("inlineCode",{parentName:"p"},'"bird"'),"."),(0,r.kt)("p",null,"Finally, it can be very useful to add a pattern boundary. For example, what if we want to find a specific pattern such as ",(0,r.kt)("inlineCode",{parentName:"p"},"cat")," but not when it occurs in words like ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"cathedral"),"? We need to denote a pattern boundary, which we can do with ",(0,r.kt)("inlineCode",{parentName:"p"},"\\b"),". Let's do a string replacement with and without pattern boundaries."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const string = "I have a cat but I have no cattle. I\'d never take my cat to the cathedral. When my cat hangs out with other cats, they all scatter.";\n> string.replace(/cat/g, "dog");\n"I have a dog but I have no dogtle. I\'d never take my dog to the doghedral. When my dog hangs out with other dogs, they all sdogter."\n')),(0,r.kt)("p",null,"That's clearly not what we want. Now let's add a pattern boundary both before ",(0,r.kt)("em",{parentName:"p"},"and")," after so we get exact matches only:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> string.replace(/\\bcat\\b/g, "dog");\n"I have a dog but I have no cattle. I\'d never take my dog to the cathedral. When my dog hangs out with other cats, they all scatter."\n')),(0,r.kt)("p",null,"Much better, but there's a gotcha here. Only the patterns that are an exact match are changed. But what about ",(0,r.kt)("inlineCode",{parentName:"p"},'"cats"'),", which isn't an exact match with ",(0,r.kt)("inlineCode",{parentName:"p"},'"cat"'),"? We need to change that, too."),(0,r.kt)("p",null,"This gives us an opportunity to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," we discussed earlier:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> string.replace(/\\bcats?\\b/g, "dog");\n"I have a dog but I have no cattle. I\'d never take my dog to the cathedral. When my dog hangs out with other dog, they all scatter."\n')),(0,r.kt)("p",null,"As we can see, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," after the ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," in our regular expression to denote that the pattern should match ",(0,r.kt)("inlineCode",{parentName:"p"},'"cat"')," (which has no ",(0,r.kt)("inlineCode",{parentName:"p"},'"s"'),") or ",(0,r.kt)("inlineCode",{parentName:"p"},'"cats"')," (which has one ",(0,r.kt)("inlineCode",{parentName:"p"},'"s"'),"). Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," is only for zero or one characters, it's exactly what we need."),(0,r.kt)("p",null,"The string still isn't perfect \u2014 the last ",(0,r.kt)("inlineCode",{parentName:"p"},'"dog"')," isn't plural. We can use a regular expression to just change part of the string but that level of complexity is beyond the scope of this lesson. For your current projects, it's perfectly fine to use multiple regex statements (such as one for ",(0,r.kt)("inlineCode",{parentName:"p"},"cat")," and one for ",(0,r.kt)("inlineCode",{parentName:"p"},"cats"),") instead of trying to hunt down the perfect regex that does everything."),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Check out Mozilla's ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"},"Regular expression syntax cheatsheet")," for more information on characters, quantifiers, groups and other regex symbols. Be warned \u2014 there's a ",(0,r.kt)("em",{parentName:"p"},"lot")," of stuff there. In general, it's good to know some of the basic symbols and then look at documentation when you need something more complex. Also, when you need a ",(0,r.kt)("em",{parentName:"p"},"really")," complex regex, a well-written Google search will usually lead to an answer in Stack Overflow or elsewhere."),(0,r.kt)("p",null,"Also, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"},"MDN guide to regular expressions")," documentation for more information."),(0,r.kt)("p",null,"If you're interested in practicing regular expressions, check out ",(0,r.kt)("a",{parentName:"p",href:"https://regexcrossword.com/"},"Regex Crossword"),", a fun site for learning about regular expressions."),(0,r.kt)("p",null,"Finally, it's very common to use regex generators that make it easier to get the regex we need to get the job done. A quick Google search will reveal many out there! Here's just a few to optionally check out:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://regexr.com/"},"https://regexr.com/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://regex-generator.olafneumann.org/"},"https://regex-generator.olafneumann.org/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://regex101.com/"},"https://regex101.com/"))),(0,r.kt)("h2",{id:"javascript-methods-that-use-regex"},"JavaScript Methods that Use Regex"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"So far, we've only discussed the ",(0,r.kt)("inlineCode",{parentName:"p"},"String.prototype.replace()")," method. There are several other useful ways to use regular expressions, too, including some very important methods."),(0,r.kt)("p",null,"First, we can save regular expressions in a variable just like anything else. For instance, we can do this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const justVowels = /[aieou]/;\n")),(0,r.kt)("p",null,"There are also ",(0,r.kt)("inlineCode",{parentName:"p"},"RegExp")," objects as well, but we we won't spend time on it. If you want to explore it on your own, ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp"},"check out MDN's reference page on ",(0,r.kt)("inlineCode",{parentName:"a"},"RegExp")),"."),(0,r.kt)("h3",{id:"regexpprototypetest"},(0,r.kt)("inlineCode",{parentName:"h3"},"RegExp.prototype.test()")),(0,r.kt)("p",null,"This method checks whether a string has a specified pattern and returns a boolean. Note that it's not a ",(0,r.kt)("inlineCode",{parentName:"p"},"String.prototype")," method \u2014 the receiver (the thing the method is called on) needs to be a regular expression. Here's how we'd use it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const string = "Jasmine has a cat.";\n> /cat/.test(string);\ntrue\n> /dog/.test(string);\nfalse\n')),(0,r.kt)("p",null,"This is extremely useful when we just need to know whether a string contains a value. For instance, it's super useful for validating email addresses. We can check that an email address has an ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," as well as a ",(0,r.kt)("inlineCode",{parentName:"p"},".com")," at the end. If it doesn't, it's not a valid email address."),(0,r.kt)("h3",{id:"stringprototypematch"},(0,r.kt)("inlineCode",{parentName:"h3"},"String.prototype.match()")),(0,r.kt)("p",null,"If we want to return an array with all the matches in a pattern, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"String.prototype.match()"),". Here's an example. Let's say we have a string that includes people's ages. Let's just extract the ages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const string = "Sten is 29. Jayne is 25. Jasmine is 33. Trey is 15. Martha is 58. Helen is 83.";\nstring.match(/\\d{1,3}/g);\n> ["29", "25", "33", "15", "58", "83"]\n')),(0,r.kt)("p",null,"We use the ",(0,r.kt)("inlineCode",{parentName:"p"},"String.prototype.match()")," method, which takes a regular expression as an argument. Here, our regular expression matches all numbers between one and three digits: ",(0,r.kt)("inlineCode",{parentName:"p"},"d{1,3}"),". Of course, that's an array of strings, so if you want to do some computation with the values, you'd need to change them to numbers."),(0,r.kt)("p",null,"The three methods we've discussed in this lesson are probably the most useful JavaScript methods that utilize regular expressions but there are others as well. "),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We've covered a lot of ground in this lesson \u2014 and yes, regular expressions can be overwhelming and confusing, especially at first. Remember, even simple regular expressions can do a lot of heavy lifting in our code \u2014 and there's nothing wrong with doing a targeted Google search to get examples of more complex regular expressions if we need to."),(0,r.kt)("p",null,"Once again, you won't be expected to use regular expressions for this section's independent project (or on any other independent project, either). ",(0,r.kt)("strong",{parentName:"p"},"You ",(0,r.kt)("em",{parentName:"strong"},"will")," be expected to use a loop for this section's independent project, so make sure you have the hang of those before doing a deep dive into regular expressions.")," However, even though it's not essential to have a deep understanding of regular expressions now, they are a very important tool for developers. You will need to have a good handle on them eventually \u2014 and you might even find that you can solve a problem in a technical interview with a regular expression as well!"))}u.isMDXComponent=!0}}]);