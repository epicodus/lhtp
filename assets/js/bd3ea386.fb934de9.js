"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[90092],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Using the RGR Workflow to Write our First Test for the Constructor",id:"using_the_rgr_workflow_to_write_our_first_test_for_the_constructor",slug:"using_the_rgr_workflow_to_write_our_first_test_for_the_constructor",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/5_tdd-and-debugging/0d_our_first_tests_with_mstest.md"},i=void 0,s={unversionedId:"c_and_net_part_time_evening/tdd-and-debugging/using_the_rgr_workflow_to_write_our_first_test_for_the_constructor",id:"c_and_net_part_time_evening/tdd-and-debugging/using_the_rgr_workflow_to_write_our_first_test_for_the_constructor",title:"Using the RGR Workflow to Write our First Test for the Constructor",description:'Let\'s create our first test. Remember that the purpose of test-driven development is to write a test for the smallest unit of behavior possible. The test should fail first. Then we should add the smallest amount of code possible to get the test to pass. After that, we can refactor our code as necessary. This follows the "Red, Green, Refactor" TDD workflow.',source:"@site/docs/c_and_net_part_time_evening/5_tdd-and-debugging/0d_our_first_tests_with_mstest.md",sourceDirName:"c_and_net_part_time_evening/5_tdd-and-debugging",slug:"/c_and_net_part_time_evening/tdd-and-debugging/using_the_rgr_workflow_to_write_our_first_test_for_the_constructor",permalink:"/lhtp/c_and_net_part_time_evening/tdd-and-debugging/using_the_rgr_workflow_to_write_our_first_test_for_the_constructor",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Using the RGR Workflow to Write our First Test for the Constructor",id:"using_the_rgr_workflow_to_write_our_first_test_for_the_constructor",slug:"using_the_rgr_workflow_to_write_our_first_test_for_the_constructor",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/5_tdd-and-debugging/0d_our_first_tests_with_mstest.md"},sidebar:"c_and_net_part_time_evening",previous:{title:"MSTest Configuration and Setup",permalink:"/lhtp/c_and_net_part_time_evening/tdd-and-debugging/mstest_configuration_and_setup"},next:{title:"Testing A Private Field through its Public Property and Organizing Tests with Arrange, Act, Assert",permalink:"/lhtp/c_and_net_part_time_evening/tdd-and-debugging/testing_a_private_field_through_its_public_property_and_organizing_tests_with_arrange_act_assert"}},l={},c=[{value:"Clearing <code>Triangle</code> Logic",id:"clearing-triangle-logic",level:2},{value:"Reference for the &quot;Red, Green, Refactor&quot; (RGR) Workflow",id:"reference-for-the-red-green-refactor-rgr-workflow",level:2},{value:"1. Identify the Simplest Behavior",id:"1-identify-the-simplest-behavior",level:2},{value:"2. Write a Coded Test",id:"2-write-a-coded-test",level:2},{value:"Test Method Naming Conventions",id:"test-method-naming-conventions",level:3},{value:"Creating an Assertion",id:"creating-an-assertion",level:3},{value:"3. Before coding, confirm the test fails.",id:"3-before-coding-confirm-the-test-fails",level:2},{value:"4. Implement the behavior with the least amount of code possible.",id:"4-implement-the-behavior-with-the-least-amount-of-code-possible",level:2},{value:"5. Run the automated test to confirm it passes.",id:"5-run-the-automated-test-to-confirm-it-passes",level:2},{value:"6. Confirm Previous Tests Still Pass",id:"6-confirm-previous-tests-still-pass",level:3},{value:"7. Check For Refactoring",id:"7-check-for-refactoring",level:3},{value:"8. Commit Your Passing Code!",id:"8-commit-your-passing-code",level:2}],p={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Let\'s create our first test. Remember that the purpose of test-driven development is to write a test for the smallest unit of behavior possible. The test should fail first. Then we should add the smallest amount of code possible to get the test to pass. After that, we can refactor our code as necessary. This follows the "Red, Green, Refactor" TDD workflow.'),(0,a.kt)("p",null,"Keep in mind, though, that the process of using TDD with C# will feel very different. When there is an error in our C# code, our code will often fail to compile \u2014 an issue we won't run into with JavaScript. While in JavaScript this was not considered a good fail, in C#, compiler errors are acceptable and we can consider them to be a good fail."),(0,a.kt)("h2",{id:"clearing-triangle-logic"},"Clearing ",(0,a.kt)("inlineCode",{parentName:"h2"},"Triangle")," Logic"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The first thing we'll want to do is remove the contents of our ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," class, so that it is just a class and namespace declaration. We'll remove the using directive for ",(0,a.kt)("inlineCode",{parentName:"p"},"System.Collections.Generic")," as well. This is what the contents ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle.cs")," should look like:"),(0,a.kt)("div",{class:"filename"},"ShapeTracker/Models/Triangle.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ShapeTracker.Models\n{\n  public class Triangle\n  {\n    // Code for Triangle business logic will go here.\n  }\n}\n")),(0,a.kt)("p",null,"Now we're ready to start re-creating our ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," class logic using TDD. "),(0,a.kt)("h2",{id:"reference-for-the-red-green-refactor-rgr-workflow"},'Reference for the "Red, Green, Refactor" (RGR) Workflow'),(0,a.kt)("hr",null),(0,a.kt)("p",null,'For reference, here\'s the "Red, Green, Refactor" (RGR) workflow we follow with TDD:'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Identify the simplest possible behavior the program must exhibit."),(0,a.kt)("li",{parentName:"ol"},"Write a coded test for this behavior."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("font",{color:"red"},"Before coding, confirm the test fails.")),(0,a.kt)("li",{parentName:"ol"},"Implement the behavior with the least amount of code possible."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("font",{color:"green"},"Run the automated test to confirm it passes. If it doesn't, revisit step 4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("font",{color:"green"},"Confirm all previous tests still pass. If it doesn't, revisit step 4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("font",{color:"blue"},"Check if code can be refactored. If so, refactor and repeat step 6.")),(0,a.kt)("li",{parentName:"ol"},"Commit your passing code."),(0,a.kt)("li",{parentName:"ol"},"Repeat this process with the next simplest behavior.")),(0,a.kt)("h2",{id:"1-identify-the-simplest-behavior"},"1. Identify the Simplest Behavior"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"What's the simplest possible behavior our program should exhibit? What should a ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," class actually do and how will we create it programmatically?"),(0,a.kt)("p",null,"Our ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," class will eventually need to check the type of a triangle, given three sides. That means, we need to save the values of three sides in our ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," class logic. But before we can begin saving three sides to a ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," object, we need to be able to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," object \u2014 that's the simplest behavior our program can exhibit."),(0,a.kt)("p",null,"Let's start with a test."),(0,a.kt)("h2",{id:"2-write-a-coded-test"},"2. Write a Coded Test"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Our test will confirm ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," objects of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," type can be created successfully."),(0,a.kt)("div",{class:"filename"},"ShapeTracker.Solution/ShapeTracker.Tests/ModelTests/TriangleTests.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.VisualStudio.TestTools.UnitTesting;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker.Tests\n{\n  [TestClass]\n  public class TriangleTests\n  {\n\n    [TestMethod]\n    public void TriangleConstructor_CreatesInstanceOfTriangle_Triangle()\n    {\n      Triangle newTriangle = new Triangle();\n      Assert.AreEqual(typeof(Triangle), newTriangle.GetType());\n    }\n\n  }\n}\n")),(0,a.kt)("p",null,"We declare our test method with the line ",(0,a.kt)("inlineCode",{parentName:"p"},"public void TriangleConstructor_CreatesInstanceOfTriangle_Triangle()"),". MSTest tests are actually methods! Also, they always begin with ",(0,a.kt)("inlineCode",{parentName:"p"},"public void"),": "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"They are ",(0,a.kt)("inlineCode",{parentName:"li"},"public"),", which allows the tools running our tests to access them. "),(0,a.kt)("li",{parentName:"ul"},"We add ",(0,a.kt)("inlineCode",{parentName:"li"},"void")," because we don't ",(0,a.kt)("inlineCode",{parentName:"li"},"return")," anything from the tests we write. ")),(0,a.kt)("p",null,"Finally, we include the attribute ",(0,a.kt)("inlineCode",{parentName:"p"},"[TestMethod]")," to identify this method as a test, similar to how we list ",(0,a.kt)("inlineCode",{parentName:"p"},"[TestClass]")," above our ",(0,a.kt)("inlineCode",{parentName:"p"},"TriangleTests")," class in order to identify it as a class of tests."),(0,a.kt)("h3",{id:"test-method-naming-conventions"},"Test Method Naming Conventions"),(0,a.kt)("p",null,"The naming convention used for test methods is the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public void NameOfMethodWeAreTesting_DescriptionOfBehavior_ExpectedReturnValue()\n")),(0,a.kt)("p",null,"It's a very verbose way of naming tests, however this naming convention is meant to be verbose so that we can clearly understand the goal of the test method just from the name of it. "),(0,a.kt)("p",null,"The name we chose for our first ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," test is ",(0,a.kt)("inlineCode",{parentName:"p"},"TriangleConstructor_CreatesInstanceOfTriangle_Triangle()"),", and that follows the naming convention:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TriangleConstructor")," is the method we're testing."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CreatesInstanceOfTriangle")," describes the behavior we want our method to have."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Triangle")," is the expected return value of the method we're testing.")),(0,a.kt)("h3",{id:"creating-an-assertion"},"Creating an Assertion"),(0,a.kt)("p",null,"Within the body of the test method, we do a few things. First, we create an instance of our ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," class with the line ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle newTriangle = new Triangle();"),". This is the ",(0,a.kt)("strong",{parentName:"p"},"behavior that we are testing"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"Triangle newTriangle = new Triangle();\n")),(0,a.kt)("p",null,"Then we write our first ",(0,a.kt)("strong",{parentName:"p"},"assertion")," using a static MSTest method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Assert")," class, ",(0,a.kt)("inlineCode",{parentName:"p"},"Assert.AreEqual()"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"Assert.AreEqual(typeof(Triangle), newTriangle.GetType());\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Assert.AreEqual()")," method checks whether the two arguments provided are equal:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The first argument is what we ",(0,a.kt)("em",{parentName:"li"},"expect")," the result of the test to be. ",(0,a.kt)("inlineCode",{parentName:"li"},"typeof()")," returns the data type of a class."),(0,a.kt)("li",{parentName:"ul"},"The second is the expression to be evaluated. ",(0,a.kt)("inlineCode",{parentName:"li"},"GetType()")," returns the data type of a specific object."),(0,a.kt)("li",{parentName:"ul"},"In our case, our assertion is checking if the type of the ",(0,a.kt)("inlineCode",{parentName:"li"},"Triangle")," class matches the type of the ",(0,a.kt)("inlineCode",{parentName:"li"},"Triangle")," instance. ")),(0,a.kt)("p",null,"Let's look at another example of using ",(0,a.kt)("inlineCode",{parentName:"p"},"Assert.AreEqual()"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"Assert.AreEqual(true, 1 == 1)\n")),(0,a.kt)("p",null,"The above assertion would be a passing test because the first argument ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," is equal to the second argument ",(0,a.kt)("inlineCode",{parentName:"p"},"1 == 1"),"."),(0,a.kt)("h2",{id:"3-before-coding-confirm-the-test-fails"},"3. Before coding, confirm the test fails."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We're now ready to move onto the red phase, which is confirming that our test fails before we write any code."),(0,a.kt)("p",null,"Within the ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests")," directory, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ dotnet test\n")),(0,a.kt)("p",null,"From the output, we should see a green message highlighting that our new test passed. See the terminal output below, and take note that some of the MSTest terminal output has been omitted for brevity:"),(0,a.kt)("pre",null,(0,a.kt)("code",{style:{color:"green"}},"Passed!  - Failed:     0, Passed:     1, Skipped:     0, Total:     1, Duration: 89 ms - ShapeTracker.Tests.dll (net6.0)")),(0,a.kt)("p",null,"Wait... shouldn't this test fail? Does this mean we have a false positive?"),(0,a.kt)("p",null,"In this case, there are no false positives. Our test passes because we already have an ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," class declared in ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker/Models/Triangle.cs"),", and an empty class always comes with an implicit constructor that we can use until we explicitly define a constructor. In this case, it's okay that our test has passed immediately, so long as we're making sure that we know why this is happening."),(0,a.kt)("p",null,"There are other scenarios where our test could pass immediately without there being a false positive. For example, the next test case we write could already be covered in the code we implemented for the last test case. Our job in these situations is simply to verify there are no false positives before we move on."),(0,a.kt)("p",null,"Let's continue onto the next step. "),(0,a.kt)("h2",{id:"4-implement-the-behavior-with-the-least-amount-of-code-possible"},"4. Implement the behavior with the least amount of code possible."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Next, let's add a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle()")," constructor:"),(0,a.kt)("div",{class:"filename"},"ShapeTracker/Models/Triangle.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ShapeTracker.Models\n{\n  public class Triangle\n  {\n    public Triangle()\n    {\n      \n    }\n  }\n}\n")),(0,a.kt)("p",null,"With the above change, we've added an explicit constructor that doesn't actually do anything different than the implicit constructor we had before. However, we'll be updating our constructor as we go along, so we'll want this basic structure in place. "),(0,a.kt)("p",null,"Let's continue onto the next step. "),(0,a.kt)("h2",{id:"5-run-the-automated-test-to-confirm-it-passes"},"5. Run the automated test to confirm it passes."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"After implementing business logic code, we'll run our tests again to confirm that our test passes (or in this case ",(0,a.kt)("em",{parentName:"p"},"still")," passes). Within the ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests")," directory, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ dotnet test\n")),(0,a.kt)("p",null,"From the output, we should see a green message highlighting that our test is passing. See the terminal output below, and take note that some of the MSTest terminal output has been omitted for brevity:"),(0,a.kt)("pre",null,(0,a.kt)("code",{style:{color:"green"}},"Passed!  - Failed:     0, Passed:     1, Skipped:     0, Total:     1, Duration: 187 ms - ShapeTracker.Tests.dll (net6.0)")),(0,a.kt)("h3",{id:"6-confirm-previous-tests-still-pass"},"6. Confirm Previous Tests Still Pass"),(0,a.kt)("p",null,"We don't have any other tests yet so we can advance to the next step."),(0,a.kt)("h3",{id:"7-check-for-refactoring"},"7. Check For Refactoring"),(0,a.kt)("p",null,"Once our code is working and a test passes, we should look for opportunities to improve our code. If we accidentally break something while refactoring, our tests will let us know."),(0,a.kt)("p",null,"In our case, we only have one test and one very basic constructor, so we can't refactor it further. Even so, it's ",(0,a.kt)("strong",{parentName:"p"},"always important to check")," if refactoring is possible before moving onto the next behavior."),(0,a.kt)("h2",{id:"8-commit-your-passing-code"},"8. Commit Your Passing Code!"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Remember that making a commit when your code is passing does two important things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Gives yourself credit for the work you are doing."),(0,a.kt)("li",{parentName:"ul"},"Acts as a save point that we can revert our code back to if something really goes awry later.")),(0,a.kt)("p",null,'Our commit message will be "pass triangle constructor test".'),(0,a.kt)("p",null,"Finally, we're ready for step number 9: Repeat this process with the next simplest behavior."),(0,a.kt)("p",null,"Commit your code now, and then move on to the next lesson to start the RGR workflow over for the next simplest behavior."))}h.isMDXComponent=!0}}]);