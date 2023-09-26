"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[14411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,g=d["".concat(l,".").concat(u)]||d[u]||h[u]||i;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={title:"Improving Test Reports: Adding Test Coverage Information",id:"improving-test-reports-adding-test-coverage-information",slug:"improving-test-reports-adding-test-coverage-information",hide_table_of_contents:!0,sidebar_position:34,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1j_adding_test_coverage_information.md"},r=void 0,s={unversionedId:"intermediate-javascript-part-time-evening/test-driven-development/improving-test-reports-adding-test-coverage-information",id:"intermediate-javascript-part-time-evening/test-driven-development/improving-test-reports-adding-test-coverage-information",title:"Improving Test Reports: Adding Test Coverage Information",description:"With our test-driven development approach, we should have 100% testing coverage of our business logic. What do we mean by testing coverage? Well, if we have ten lines of code and our tests only \"hit\" five lines of code, then we'd have 50% coverage. If there is a function or another piece of code that's untouched by our tests, it won't be included in the test coverage.",source:"@site/docs/intermediate-javascript-part-time-evening/5_test-driven-development/1j-adding-test-coverage-information.md",sourceDirName:"intermediate-javascript-part-time-evening/5_test-driven-development",slug:"/intermediate-javascript-part-time-evening/test-driven-development/improving-test-reports-adding-test-coverage-information",permalink:"/intermediate-javascript-part-time-evening/test-driven-development/improving-test-reports-adding-test-coverage-information",draft:!1,tags:[],version:"current",sidebarPosition:34,frontMatter:{title:"Improving Test Reports: Adding Test Coverage Information",id:"improving-test-reports-adding-test-coverage-information",slug:"improving-test-reports-adding-test-coverage-information",hide_table_of_contents:!0,sidebar_position:34,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1j_adding_test_coverage_information.md"},sidebar:"intermediate-javascript-part-time-evening",previous:{title:"Expanding our Testing Tools: Adding Setup and Teardown",permalink:"/intermediate-javascript-part-time-evening/test-driven-development/expanding-our-testing-tools-adding-setup-and-teardown"},next:{title:"Test It Out, Sudoku Checker, Project Euler (day 2)",permalink:"/intermediate-javascript-part-time-evening/test-driven-development/test-it-out-sudoku-checker-project-euler-day-2"}},l={},p=[{value:"Updating <code>.gitignore</code>",id:"updating-gitignore",level:2},{value:"Adding Test Coverage Information",id:"adding-test-coverage-information",level:2},{value:"The Coverage Report Can Provide False Positives and Negatives",id:"the-coverage-report-can-provide-false-positives-and-negatives",level:2},{value:"The <code>coverage/</code> Directory",id:"the-coverage-directory",level:2}],c={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With our test-driven development approach, we should have 100% testing coverage of our business logic. What do we mean by testing coverage? Well, if we have ten lines of code and our tests only \"hit\" five lines of code, then we'd have 50% coverage. If there is a function or another piece of code that's untouched by our tests, it won't be included in the test coverage."),(0,o.kt)("p",null,"In this lesson, we'll configure Jest to add coverage information."),(0,o.kt)("h2",{id:"updating-gitignore"},"Updating ",(0,o.kt)("inlineCode",{parentName:"h2"},".gitignore")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"When we configure Jest to generate a coverage report for our tests, Jest will create new output in the terminal and create a folder called ",(0,o.kt)("inlineCode",{parentName:"p"},"coverage/"),". We do not want to save this folder in our remote repo, so the first thing we need to do is update our ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," to ignore the ",(0,o.kt)("inlineCode",{parentName:"p"},"coverage/")," directory and commit this change to our Git history."),(0,o.kt)("p",null,"This directory should be added to our ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," file:"),(0,o.kt)("div",{class:"filename"},".gitignore"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"...\ncoverage/\n")),(0,o.kt)("h2",{id:"adding-test-coverage-information"},"Adding Test Coverage Information"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Jest can give us information about test coverage if we add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--coverage")," flag to the ",(0,o.kt)("inlineCode",{parentName:"p"},'"test"')," script in our ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,o.kt)("div",{class:"filename"},"package.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'...\n"scripts": {\n    ...\n    "test": "jest --coverage"\n  },\n...\n')),(0,o.kt)("p",null,"Go ahead and do this now!"),(0,o.kt)("p",null,"With the ",(0,o.kt)("inlineCode",{parentName:"p"},"--coverage")," flag added, let's see what happens when we run our tests:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/TDD-2020/100-percent-coverage.png",alt:"Our tests now include test coverage."})),(0,o.kt)("p",null,"Our tests now include a chart that shows our total test coverage. It specifies the file ",(0,o.kt)("inlineCode",{parentName:"p"},"triangle.js")," as well as the percentage of statements, branches, functions and lines that are covered. We have 100% test coverage, which is what we should be aiming for. The final column for ",(0,o.kt)("inlineCode",{parentName:"p"},"Uncovered Line #s")," is blank. This column will show all lines that aren't covered in our tests."),(0,o.kt)("p",null,"Here's how the test coverage looks if we comment out our test for an equilateral triangle."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/TDD-2020/90-percent-coverage.png",alt:"Our test coverage shows slightly less coverage."})),(0,o.kt)("p",null,"Now we can see that a line has been added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Uncovered Lines #")," section. Our test coverage will show us exactly which lines aren't covered in our code so we can check them and then add tests if needed. Since we are using TDD, we should always have 100% coverage, and this is a great way to confirm that our coverage is complete."),(0,o.kt)("p",null,"Note that the coverage chart is mostly showing green \u2014 that's because our coverage is still considered good. Many enterprise companies won't have that level of coverage for their tests. Once again, though, because we are using TDD and our projects are small, we expect to hit 100% coverage for all business logic."),(0,o.kt)("p",null,"Ultimately, the most important columns to pay attention to are the last two. We want ",(0,o.kt)("inlineCode",{parentName:"p"},"% Lines")," to be 100. If it's not, we should check the line numbers in ",(0,o.kt)("inlineCode",{parentName:"p"},"Uncovered Line #s"),"."),(0,o.kt)("p",null,"The other columns can be a bit confusing. For instance, we have 100 for ",(0,o.kt)("inlineCode",{parentName:"p"},"% Funcs")," because our tests have hit both of our functions, but not because they are fully tested. This column can be misleading so it's not as helpful."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"% Stmts")," refers to the percentage of statements that are covered. We have 11 total statements in our code. Generally, it will be the same as the line number, though if there are multiple statements on a line, then it could be different. In this case, we'd need to make sure we have 100% coverage on this line as well."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"% Branch")," can also be confusing. We only have four branches so how are we getting 92.86% coverage? This coverage is based on the percentage of ",(0,o.kt)("em",{parentName:"p"},"paths")," our tests are not hitting as they go through our code. There are 14 paths through our code, 13 which are covered. Generally, this percentage number is not as useful for us."),(0,o.kt)("p",null,"That's why it's best to keep things simple. It should be 100% across the board \u2014 if it's not, check the ",(0,o.kt)("inlineCode",{parentName:"p"},"Uncovered Line #s")," to see which lines aren't covered."),(0,o.kt)("h2",{id:"the-coverage-report-can-provide-false-positives-and-negatives"},"The Coverage Report Can Provide False Positives and Negatives"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Keep in mind that the coverage isn't foolproof. For instance, if we comment out our test for constructor properties, we'll still get 100% coverage across the board. That is because all of our other tests rely on the constructor, so our tests are hitting every line of code. We should consider this a false positive. We should always test our constructors separately, and we should always endeavor to test every ",(0,o.kt)("em",{parentName:"p"},"behavior")," in our code."),(0,o.kt)("p",null,"A false negative for Jest coverage is when Jest reports partial coverage for a function that has an ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," statement (and a test for it), but intentionally no ",(0,o.kt)("inlineCode",{parentName:"p"},"else")," statement. Well, this feels like a false negative. Let's look at an example to understand how this works, as well as three solutions. As we'll learn this \"false negative\" is actually by design."),(0,o.kt)("p",null,"Say we want to write another ",(0,o.kt)("inlineCode",{parentName:"p"},"Triangle")," method called ",(0,o.kt)("inlineCode",{parentName:"p"},"Triangle.prototype.isBigTriangle()")," that lets us know if we have a big triangle. Determining how big a triangle is is an arbitrary process, but we've decided that we'll know we have a big triangle if the sum of all of its sides is greater than 10. This is what our test looks like:"),(0,o.kt)("div",{class:"filename"},"__tests__/triangle.test.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"describe('Triangle', () => {\n  ...\n  test('should say if a triangle is big', () => {\n    const triangle = new Triangle(3,4,5);\n    expect(triangle.isBigTriangle()).toEqual('big');\n  });\n});\n")),(0,o.kt)("p",null,"Then, we declare just the name of the method in ",(0,o.kt)("inlineCode",{parentName:"p"},"triangle.js"),", without any body, and run ",(0,o.kt)("inlineCode",{parentName:"p"},"$ npm run test")," to get a good fail."),(0,o.kt)("p",null,"Now we're ready to write the code for ",(0,o.kt)("inlineCode",{parentName:"p"},"Triangle.prototype.isBigTriangle()")," to get our test to pass. Note that in the following code snippet we've added line numbers in order to better understand the Jest coverage report that we'll look at below."),(0,o.kt)("div",{class:"filename"},"src/triangle.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"17 // other Triangle code\n18\n19 Triangle.prototype.isBigTriangle = function(){\n20  const sum = this.side1 + this.side2 + this.side3;\n21  if(sum > 10){\n22    return 'big';\n23  }\n24 };\n")),(0,o.kt)("p",null,"With this code, I would expect my test to pass and to be done with my function. Let's run ",(0,o.kt)("inlineCode",{parentName:"p"},"$ npm run test")," and see what we get!"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/TDD-2020/partial-coverage.png",alt:"The results of `$ npm run test` show "})),(0,o.kt)("p",null,"The last thing I would expect is for Jest to tell me that I have an ",(0,o.kt)("inlineCode",{parentName:"p"},"Uncovered Line #"),". But this is also confusing. Jest is telling me that line 21 is not covered, but that's the if statement that my test is testing for. What's going on? This seems like a false negative."),(0,o.kt)("p",null,"This happens because Jest is letting us know that we have not tested for the ",(0,o.kt)("inlineCode",{parentName:"p"},"else")," path, or, what happens when the triangle is not big. The problem isn't that we're not including an ",(0,o.kt)("inlineCode",{parentName:"p"},"else")," statement specifically, but rather what happens if the ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," statement evaluates to false. In the case of ",(0,o.kt)("inlineCode",{parentName:"p"},"Triangle.prototype.isBigTriangle()"),", nothing happens! Well, for Jest nothing is still something, and we need to test for it. In fact, this functionality is by design, and in fact is not a false negative even though it seems like one."),(0,o.kt)("p",null,"One distinction to note is that the ",(0,o.kt)("inlineCode",{parentName:"p"},"Uncovered Line #")," in the last image of the Jest coverage report was red, and this time it's yellow, which gives us a warning. It doesn't mean that we have code that is untested. It means that we have a path that's not tested for which, again, is what happens when the triangle is not big."),(0,o.kt)("p",null,"There's a few ways to solve this issue. If this happens to you, the first thing you should do is ask yourself, do I need an ",(0,o.kt)("inlineCode",{parentName:"p"},"else")," statement? Perhaps you could use an ",(0,o.kt)("inlineCode",{parentName:"p"},"else")," statement to return an error message to improve your code?"),(0,o.kt)("p",null,"In this case, if the triangle isn't big, it could actually be helpful to include an ",(0,o.kt)("inlineCode",{parentName:"p"},"else")," statement that returns ",(0,o.kt)("inlineCode",{parentName:"p"},"'little'"),". Generally, it's harder to manage a function that returns either something or nothing wherever we call it. In fact, we might have to include a conditional where we call this function to determine whether there's a result, and if so, do something with it. So, for ",(0,o.kt)("inlineCode",{parentName:"p"},"Triangle.prototype.isBigTriangle()"),", I think the best solution is adding an else statement and a test for that other path. "),(0,o.kt)("div",{class:"filename"},"__tests__/triangle.test.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"describe('Triangle', () => {\n  ...\n  test('should say if a triangle is big', () => {\n    const triangle = new Triangle(3,4,5);\n    expect(triangle.isBigTriangle()).toEqual('big');\n  });\n});\n")),(0,o.kt)("div",{class:"filename"},"src/triangle.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Triangle.prototype.isBigTriangle = function(){\n  const sum = this.side1 + this.side2 + this.side3;\n  if(sum > 10){\n    return 'big';\n  } else {\n    return 'little';\n  }\n};\n")),(0,o.kt)("p",null,"After this change, we may even prefer to update the method name itself to account for this update functionality, something like: ",(0,o.kt)("inlineCode",{parentName:"p"},"Triangle.prototype.isBigOrLittle()"),"."),(0,o.kt)("p",null,"However, we just don't always need an ",(0,o.kt)("inlineCode",{parentName:"p"},"else")," statement, and we certainly shouldn't add one just to get 100% test coverage. If this is the case, you have other options. The first is to write a test for the other path. For our original ",(0,o.kt)("inlineCode",{parentName:"p"},"Triangle.prototypd.isBigTriangle()")," method, nothing happens, and we can in fact write a test for nothing with the Jest matcher ",(0,o.kt)("inlineCode",{parentName:"p"},"toBeUndefined()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"test('should say if a triangle is little', () => {\n  const triangle = new Triangle(2,4,1);\n  expect(triangle.bigOrLittle()).toBeUndefined();\n});\n")),(0,o.kt)("p",null,"The other solution is to disable Jest to ignore the intentionally not included ",(0,o.kt)("inlineCode",{parentName:"p"},"else")," statement. We'd do so like this:"),(0,o.kt)("div",{class:"filename"},"src/triangle.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Triangle.prototype.isBigTriangle = function(){\n  const sum = this.side1 + this.side2 + this.side3;\n  /* istanbul ignore else */ \n  if(sum > 10){\n    return 'big';\n  }\n};\n")),(0,o.kt)("p",null,"We add the disable message ",(0,o.kt)("inlineCode",{parentName:"p"},"/* istanbul ignore else */")," right before the uncovered line number that the coverage report lists (in this example, it was line 21). "),(0,o.kt)("p",null,"Note that Jest uses another software called ",(0,o.kt)("a",{parentName:"p",href:"https://istanbul.js.org/"},"Istanbul")," to generate coverage reports, and this is why we reference ",(0,o.kt)("inlineCode",{parentName:"p"},"istanbul")," in the disable message ",(0,o.kt)("inlineCode",{parentName:"p"},"/* istanbul ignore else */"),"."),(0,o.kt)("p",null,"We've covered an example of a false positive and a confusing situation of unexpected partial coverage, all to remind you that we can't assume that everything is perfect just because our coverage shows 100%. We still need to have good TDD practices in place. "),(0,o.kt)("p",null,"However, we can and should assume that we have more testing to do if we ",(0,o.kt)("em",{parentName:"p"},"don't")," have 100% \u2014 so the coverage report is an excellent tool for ensuring that we have at least some coverage for every line of code. If you do run into unexpected results that you can't seem to resolve or understand, reach out to your instructor for help! "),(0,o.kt)("h2",{id:"the-coverage-directory"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"coverage/")," Directory"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Finally, when we run our tests with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--coverage")," flag, Jest will generate an HTML report in a directory called ",(0,o.kt)("inlineCode",{parentName:"p"},"coverage"),". We can go to ",(0,o.kt)("inlineCode",{parentName:"p"},"coverage/lcov-report/")," and then open its ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," file in the browser if we want a nicer looking version of our tests."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/TDD-2020/html-coverage.png",alt:"Our coverage information looks nicer in the browser."})),(0,o.kt)("p",null,"As we can see here, we get a little more information as well, such as the exact number of statements and paths we have in our code."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," If you're using a version of Jest where the ",(0,o.kt)("inlineCode",{parentName:"p"},"coverage")," directory isn't automatically generated, you'll need to update your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,o.kt)("div",{class:"filename"},"package.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'...\n"scripts": {\n    ...\n    "test": "jest --coverage"\n  },\n"jest": {\n    "collectCoverage": true,\n    "coverageReporters": ["html"]\n  },\n...\n')),(0,o.kt)("p",null,"We just have to pass in a configuration for Jest with ",(0,o.kt)("inlineCode",{parentName:"p"},'"collectCoverage"')," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". Then we have to specify that the ",(0,o.kt)("inlineCode",{parentName:"p"},'"coverageReporters"')," should be ",(0,o.kt)("inlineCode",{parentName:"p"},'["html"]'),". (We could also specify other coverage reporters as well.) "),(0,o.kt)("p",null,"This shows us yet another way we can update our ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file to configure our environment further. Pretty neat!"),(0,o.kt)("p",null,"In this lesson, we've looked at how Jest's coverage tools can give us more information about how thoroughly we are testing our code. While this tool can be very helpful for ensuring our tests cover every line in our business logic, they aren't a replacement for good TDD practices."))}h.isMDXComponent=!0}}]);