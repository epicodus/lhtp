"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[818],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=h(n),u=i,g=d["".concat(l,".").concat(u)]||d[u]||p[u]||s;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var h=2;h<s;h++)r[h]=n[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var a=n(87462),i=(n(67294),n(3905));const s={title:"TDD with Jest: Testing the Triangle.prototype.checkType() Method",id:"tdd-with-jest-testing-the-triangleprototypechecktype-method",slug:"tdd-with-jest-testing-the-triangleprototypechecktype-method",hide_table_of_contents:!0,sidebar_position:31,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1g_tdd_with_jest_checkType_method.md"},r=void 0,o={unversionedId:"intermediate-javascript-part-time/test-driven-development/tdd-with-jest-testing-the-triangleprototypechecktype-method",id:"intermediate-javascript-part-time/test-driven-development/tdd-with-jest-testing-the-triangleprototypechecktype-method",title:"TDD with Jest: Testing the Triangle.prototype.checkType() Method",description:"In this lesson, we'll continue practicing the RGR workflow by creating four more tests to develop the complete functionality of the Triangle.prototype.checkType() method. Before we dive into our second test, we're going to explain some choices that you have when organizing your tests.",source:"@site/docs/intermediate-javascript-part-time/5_test-driven-development/1g-tdd-with-jest-checkType-method.md",sourceDirName:"intermediate-javascript-part-time/5_test-driven-development",slug:"/intermediate-javascript-part-time/test-driven-development/tdd-with-jest-testing-the-triangleprototypechecktype-method",permalink:"/intermediate-javascript-part-time/test-driven-development/tdd-with-jest-testing-the-triangleprototypechecktype-method",draft:!1,tags:[],version:"current",sidebarPosition:31,frontMatter:{title:"TDD with Jest: Testing the Triangle.prototype.checkType() Method",id:"tdd-with-jest-testing-the-triangleprototypechecktype-method",slug:"tdd-with-jest-testing-the-triangleprototypechecktype-method",hide_table_of_contents:!0,sidebar_position:31,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1g_tdd_with_jest_checkType_method.md"},sidebar:"intermediate-javascript-part-time",previous:{title:"TDD with Jest: Testing the Triangle() Constructor",permalink:"/intermediate-javascript-part-time/test-driven-development/tdd-with-jest-testing-the-triangle-constructor"},next:{title:"Testing Best Practices",permalink:"/intermediate-javascript-part-time/test-driven-development/testing-best-practices"}},l={},h=[{value:"Both Are Acceptable: Using one <code>describe()</code> Per Function or Per Object Type",id:"both-are-acceptable-using-one-describe-per-function-or-per-object-type",level:2},{value:"Test 2: Should Correctly Determine Whether Three Lengths Are Not a Triangle",id:"test-2-should-correctly-determine-whether-three-lengths-are-not-a-triangle",level:2},{value:"Red Phase",id:"red-phase",level:3},{value:"Green Phase",id:"green-phase",level:3},{value:"Test 3: Determine Whether Three Lengths Make a Scalene Triangle",id:"test-3-determine-whether-three-lengths-make-a-scalene-triangle",level:3},{value:"Red Phase",id:"red-phase-1",level:3},{value:"Green Phase",id:"green-phase-1",level:3},{value:"Test 4: Determine Whether Three Lengths Make an Isosceles Triangle",id:"test-4-determine-whether-three-lengths-make-an-isosceles-triangle",level:3},{value:"Red Phase",id:"red-phase-2",level:3},{value:"Green Phase",id:"green-phase-2",level:3},{value:"Test 5: Determine Whether Three Lengths Make an Equilateral Triangle",id:"test-5-determine-whether-three-lengths-make-an-equilateral-triangle",level:3},{value:"Red Phase",id:"red-phase-3",level:3},{value:"Green Phase",id:"green-phase-3",level:3},{value:"Considering Edge Cases",id:"considering-edge-cases",level:2},{value:"Next Steps",id:"next-steps",level:2}],c={toc:h},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this lesson, we'll continue practicing the RGR workflow by creating four more tests to develop the complete functionality of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle.prototype.checkType()")," method. Before we dive into our second test, we're going to explain some choices that you have when organizing your tests."),(0,i.kt)("h2",{id:"both-are-acceptable-using-one-describe-per-function-or-per-object-type"},"Both Are Acceptable: Using one ",(0,i.kt)("inlineCode",{parentName:"h2"},"describe()")," Per Function or Per Object Type"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We're embarking on writing tests for the next piece of functionality for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," object: the ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle.protoype.checkType()")," method. This brings up a question: should we create a new describe statement for this method? Or should we add the tests for this method to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," describe block? "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"describe('Triangle', () => {\n  // Tests for the Triangle object go in here!\n});\n")),(0,i.kt)("p",null,"Well, the truth is, we can pick either option."),(0,i.kt)("p",null,"When we initially started writing pseudocode tests in the Arrays and Looping course section, we wrote a new describe statement for every function, and often multiple tests for each function. This is a great choice for organization that you are welcome to continue with. "),(0,i.kt)("p",null,"However, the organizational option to write one describe statement per object type is also acceptable, and this is exactly what we'll do in this lesson."),(0,i.kt)("p",null,"When making this decision it really comes down to determining which organization style is best for communication. This means that anyone who reads through your test files (including your future self) should be able to quickly determine what's being tested by reading the describe and test statements."),(0,i.kt)("h2",{id:"test-2-should-correctly-determine-whether-three-lengths-are-not-a-triangle"},"Test 2: Should Correctly Determine Whether Three Lengths Are Not a Triangle"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"What is the next simplest behavior we can test? Well, let's consider all of the things our application should be able to do:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check if three sides make a triangle or not"),(0,i.kt)("li",{parentName:"ul"},"Check if a triangle is scalene"),(0,i.kt)("li",{parentName:"ul"},"Check if a triangle is isosceles"),(0,i.kt)("li",{parentName:"ul"},"Check if a triangle is equilateral")),(0,i.kt)("p",null,"In our case, the simplest behavior is the first one. Our method should return ",(0,i.kt)("inlineCode",{parentName:"p"},'"not a triangle"')," if the three lengths provided can't make a triangle."),(0,i.kt)("p",null,"Once again, we need to start by writing a test. We shouldn't be modifying our source code yet. Instead our first step is to define the name of the method, what it returns, and any other details. Then we can take these details as the basic direction with which to write the actual method."),(0,i.kt)("p",null,"Here's our next test, which we'll add below our first test for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle()")," constructor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"describe('Triangle', () => {\n  ...\n\n  test('should correctly determine whether three lengths are not a triangle', () => {\n    const notTriangle = new Triangle(3,9,22);\n    expect(notTriangle.checkType()).toEqual(\"not a triangle\");\n  });\n});\n")),(0,i.kt)("p",null,"We describe the test as concisely as possible: ",(0,i.kt)("inlineCode",{parentName:"p"},"'should correctly determine whether three lengths are not a triangle'"),". Then we instantiate a ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," object with lengths that won't make a triangle because 22 > (3 + 9), and the length of one side cannot be greater than the sum of the length of the other two sides."),(0,i.kt)("p",null,"Note that we make our variable name descriptive in order to continue to communicate that we're testing for when a triangle is not a triangle. Then, call a new method called ",(0,i.kt)("inlineCode",{parentName:"p"},"checkType()"),". "),(0,i.kt)("p",null,"When testing, we always write our test as if the method (or whatever we are testing) already exists \u2014 even if it doesn't. This helps us define how the method should be used. As always, methods should be clearly named, too."),(0,i.kt)("h3",{id:"red-phase"},"Red Phase"),(0,i.kt)("p",null,"Let's run ",(0,i.kt)("inlineCode",{parentName:"p"},"$ npm test"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/TDD+with+JS+images/jest-4.png",alt:"The outcome of our test."})),(0,i.kt)("p",null,"There's a fail as expected. Here's the error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"TypeError: notTriangle.checkType is not a function\n")),(0,i.kt)("p",null,"Is this a good or a bad fail?"),(0,i.kt)("p",null,"If you guessed it's a bad fail, you are correct. Once again, we aren't actually testing our new method. At the very least, we need to create the method itself. Let's do that now: "),(0,i.kt)("div",{class:"filename"},"src/triangle.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Triangle.prototype.checkType = function() {\n  // Code will go here.\n};\n")),(0,i.kt)("p",null,"If we run the test, we'll get a meaningful fail:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/TDD+with+JS+images/jest-5.png",alt:"Now we have a meaningful fail again because we've added a `Triangle.prototype.checkType()` method."})),(0,i.kt)("p",null,"This is a meaningful fail because the method is actually called. It returns exactly what we'd expect: ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),". Now that we know our test is correctly calling our method, we can be sure that any changes we make to the method will also change the result of the test. "),(0,i.kt)("p",null,"If our test wasn't correctly calling this method, no amount of changes to ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle.prototype.checkType()")," would ever make our test pass. This is another big benefit of getting a good fail first. Sometimes we'll see students write code that ",(0,i.kt)("em",{parentName:"p"},"should")," get a test passing, but because it's never wired up correctly, the test continues to fail, leading to more development time and wrong turns as students unnecessarily go back to the drawing board."),(0,i.kt)("h3",{id:"green-phase"},"Green Phase"),(0,i.kt)("p",null,"Now let's add the code to make our new test pass:"),(0,i.kt)("div",{class:"filename"},"triangle.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'...\n\nTriangle.prototype.checkType = function() {\n  return "not a triangle";\n};\n')),(0,i.kt)("p",null,"We want to add as little code as possible to make our test pass. Right now, we don't care about conditionals or anything else just yet. Our method just needs to return ",(0,i.kt)("inlineCode",{parentName:"p"},'"not a triangle"')," and our test will pass. This may seem like too small of a change, but an incremental approach can be especially useful when trying to solve difficult problems."),(0,i.kt)("p",null,"Since we have another test passing, it's time to make a commit. Once again, ",(0,i.kt)("strong",{parentName:"p"},"always commit after you complete the green phase"),". And make sure you commit both the test and the updated source code."),(0,i.kt)("h3",{id:"test-3-determine-whether-three-lengths-make-a-scalene-triangle"},"Test 3: Determine Whether Three Lengths Make a Scalene Triangle"),(0,i.kt)("p",null,"We're ready for our third test. Let's check whether or not a triangle is scalene. This means that all three sides must be different. Here's the test, which we'll add right below the previous test:"),(0,i.kt)("div",{class:"filename"},"triangle.test.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"describe('Triangle', () => {\n  ...\n\n  test('should correctly determine whether three lengths make a scalene triangle', () => {\n    const scalTriangle = new Triangle(4,5,7)\n    expect(scalTriangle.checkType()).toEqual(\"scalene triangle\");\n  });\n});\n")),(0,i.kt)("p",null,"The pattern should now be clear and this test is very similar to our last test. "),(0,i.kt)("h3",{id:"red-phase-1"},"Red Phase"),(0,i.kt)("p",null,"Next we complete the red phase by checking that our test fails:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ npm run test\n")),(0,i.kt)("p",null,"Since our ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle.prototype.checkType()")," method has already been created, we don't have to do anything additional to get a good fail. In this case, we're confirming that there are no false positives when inputting the values that make a scalene triangle."),(0,i.kt)("h3",{id:"green-phase-1"},"Green Phase"),(0,i.kt)("p",null,"We can make this test pass by adding a conditional that checks if all three sides are different:"),(0,i.kt)("div",{class:"filename"},"triangle.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'Triangle.prototype.checkType = function() {\n  if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {\n    return "scalene triangle";\n  } else {\n    return "not a triangle";\n  }\n};\n')),(0,i.kt)("p",null,"The code above checks to see if all three sides are different. If they are, our method will return ",(0,i.kt)("inlineCode",{parentName:"p"},'"scalene triangle"'),"."),(0,i.kt)("p",null,"However, if we run our tests again, we'll get a failure:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/TDD+with+JS+images/jest-6.png",alt:"Our new test passes but our previous test fails."})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"It's important to read the output carefully.")," If we take a closer look, we'll see that our new test is passing. Our method correctly checks if a triangle is scalene. However, our new code broke our previous test because an object can have three different length properties and ",(0,i.kt)("em",{parentName:"p"},"not")," be a triangle."),(0,i.kt)("p",null,"This is part of the reason it is so important to write thorough tests. Sometimes the new code we write will break previous tests. If our tests are well-written, then it probably means there's something wrong with our code."),(0,i.kt)("p",null,"This is also why it's important to keep all our tests even if we have moved onto new code. As developers, we can make sure that changes don't break our code by running our test suite(s). In fact, this is a central part of a concept called ",(0,i.kt)("strong",{parentName:"p"},"continuous integration"),". Continuous integration is the process of automatically testing our code whenever a change is made. As long as we have a robust test suite, we can be reasonably confident that we aren't introducing bugs in our code. We just need to run our tests and make sure they are all passing."),(0,i.kt)("p",null,"We'll need to refactor our code to get our tests to pass. Specifically, we'll need to add a conditional that actually checks whether the value of one side is greater than the sum of the other two sides."),(0,i.kt)("div",{class:"filename"},"triangle.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'...\nTriangle.prototype.checkType = function() {\n  if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {\n    return "not a triangle";\n  } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {\n    return "scalene triangle";\n  }\n};\n')),(0,i.kt)("p",null,"Now when we run ",(0,i.kt)("inlineCode",{parentName:"p"},"$ npm run test"),", our tests will pass again. Time to commit the tests and code!"),(0,i.kt)("h3",{id:"test-4-determine-whether-three-lengths-make-an-isosceles-triangle"},"Test 4: Determine Whether Three Lengths Make an Isosceles Triangle"),(0,i.kt)("p",null,"We're ready to test whether a triangle is isosceles. That means two lengths (but not all three) must be equal. See if you can figure out the test on your own first. It's very similar to the ones we've written so far."),(0,i.kt)("p",null,"Here's the test, and we'll add it right below the previous test:"),(0,i.kt)("div",{class:"filename"},"triangle.test.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"describe('Triangle', () => {\n  ...\n\n  test('should correctly determine whether three lengths make an isosceles triangle', () => {\n    const isoscTriangle = new Triangle(5,5,7)\n    expect(isoscTriangle.checkType()).toEqual(\"isosceles triangle\");\n  });\n});\n")),(0,i.kt)("h3",{id:"red-phase-2"},"Red Phase"),(0,i.kt)("p",null,"Next, we complete the red phase by checking that our test fails:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ npm run test\n")),(0,i.kt)("p",null,"Since our ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle.prototype.checkType()")," method has already been created, we don't have to do anything additional to get a good fail. In this case, we're confirming that there are no false positives when inputting the values that make an isosceles triangle."),(0,i.kt)("h3",{id:"green-phase-2"},"Green Phase"),(0,i.kt)("p",null,"We just need to add another conditional to our method to make the test pass:"),(0,i.kt)("div",{class:"filename"},"triangle.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'Triangle.prototype.checkType = function() {\n  if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {\n    return "not a triangle";\n  } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {\n    return "scalene triangle";\n  }  else if ((this.side1 === this.side2) || ((this.side1 === this.side3)) || ((this.side2 === this.side3))) {\n      return "isosceles triangle";\n    }\n};\n')),(0,i.kt)("p",null,"Next, run ",(0,i.kt)("inlineCode",{parentName:"p"},"$ npm test")," to confirm that the new test and all other tests are passing."),(0,i.kt)("p",null,"Even if it seems we aren't adding a ton of code, it's time to commit again. We can ensure that we have a great commit history that clearly shows our work."),(0,i.kt)("h3",{id:"test-5-determine-whether-three-lengths-make-an-equilateral-triangle"},"Test 5: Determine Whether Three Lengths Make an Equilateral Triangle"),(0,i.kt)("p",null,"This test is almost exactly the same as our prior tests but we still need to write it. It would be very easy to make a mistake in our conditionals that might result in an equilateral triangle being identified as something else. "),(0,i.kt)("p",null,"We'll start with the test, adding it right below the last test:"),(0,i.kt)("div",{class:"filename"},"triangle.test.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"describe('Triangle', () => {\n  ...\n\n  test('should correctly determine whether three lengths make an equilateral triangle', () => {\n    const equiTriangle = new Triangle(5,5,5)\n    expect(equiTriangle.checkType()).toEqual(\"equilateral triangle\");\n  });\n});\n")),(0,i.kt)("h3",{id:"red-phase-3"},"Red Phase"),(0,i.kt)("p",null,"If we run this test, we'll get a fail as expected. However, the fail gives us an interesting piece of information:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Expected: "equilateral triangle"\nReceived: "isosceles triangle"\n')),(0,i.kt)("p",null,"It's very important to read our fail messages clearly. It's not just about making sure we have a meaningful fail. We may learn other information in the process. "),(0,i.kt)("p",null,"In this case, we can see that the current conditional for an isosceles triangle applies for an equilateral triangle as well. By paying attention to this information, we can avoid gotchas like this one! What we've learned here is that if we add an ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," statement for the equilateral triangle to the end of our conditional, our method will mistakenly say an equilateral triangle is isosceles. "),(0,i.kt)("p",null,"As we can see, our test hasn't just helped us test our code \u2014 it has actually informed the process of writing the code itself."),(0,i.kt)("h3",{id:"green-phase-3"},"Green Phase"),(0,i.kt)("p",null,"There's several ways we can solve this problem. Here's one of them:"),(0,i.kt)("div",{class:"filename"},"triangle.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'Triangle.prototype.checkType = function() {\n  if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {\n    return "not a triangle";\n  } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {\n    return "scalene triangle";\n  } else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {\n      return "equilateral triangle";\n  } else {\n    return "isosceles triangle";\n  }\n};\n')),(0,i.kt)("p",null,"Since we know that our previous conditional for an isosceles triangle is also ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," for an equilateral triangle, we update that condition to apply to equilateral triangles instead. Then our ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," statement will apply for isosceles triangles."),(0,i.kt)("p",null,"If we run our tests again, everything is green and passing. And, as always, we should commit our work."),(0,i.kt)("h2",{id:"considering-edge-cases"},"Considering Edge Cases"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"At this point, it may seem like we are done \u2014 with the testing at least. Indeed, we have completed the functionality we sought to achieve."),(0,i.kt)("p",null,"However, our testing could still be more thorough. We should consider as many possible use cases for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle.prototype.checkType()")," method. Extreme use cases are called ",(0,i.kt)("strong",{parentName:"p"},"edge cases"),". There are a number of other things this method should probably handle \u2014 technically they aren't extreme enough to be edge cases, but they can still be common gotchas if we don't think things through. These should be familiar from the introduction to whiteboarding:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What happens if words or arrays are passed into the constructor?"),(0,i.kt)("li",{parentName:"ul"},"What happens if a number is passed into the constructor but it's in string format?"),(0,i.kt)("li",{parentName:"ul"},"What happens if negative numbers are passed in?"),(0,i.kt)("li",{parentName:"ul"},"Would it be better to pass in triangle lengths as arguments to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Triangle.prototype.checkType()")," method or should they be passed into the constructor as we do here?")),(0,i.kt)("p",null,"Good developers think through these problems, write tests for them, and then update their code to handle a wide range of use cases."),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"You will be expected to write thorough tests for the upcoming independent project.")," The next lesson will cover testing best practices that we want you to implement in your practice projects in preparation for the independent project. Optionally, review the ",(0,i.kt)("a",{parentName:"p",href:"https://new.learnhowtoprogram.com/intermediate-javascript/test-driven-development-and-environments-with-javascript/tdd-and-environments-with-javascript-independent-project"},"TDD and Environments with JavaScript Independent Project")," lesson for a preview of expectations for the independent project. "),(0,i.kt)("p",null,"The following repository link includes all code in the ",(0,i.kt)("inlineCode",{parentName:"p"},"shape-tracker")," project up to this point. It also includes several configuration updates that we'll be making in the next few lessons to add testing coverage and debugging."),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-5-shape-tracker/tree/2_full_testing_with_jest"},(0,i.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Example GitHub Repo for Shape Tracker"))),(0,i.kt)("p",null,"Make sure to use the branch titled ",(0,i.kt)("inlineCode",{parentName:"p"},"2_full_testing_with_jest")," as your point of reference. As needed, review the lesson on ",(0,i.kt)("a",{parentName:"p",href:"https://new.learnhowtoprogram.com/intermediate-javascript/object-oriented-javascript/accessing-code-from-different-branches"},"accessing code from different branches"),"."))}p.isMDXComponent=!0}}]);