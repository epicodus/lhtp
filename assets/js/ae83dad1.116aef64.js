"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[28064],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(n),m=s,u=c["".concat(l,".").concat(m)]||c[m]||h[m]||i;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:s,o[1]=r;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=n(87462),s=(n(67294),n(3905));const i={title:"Part 2: Adding a Teardown Method and Completing the Tests for Static Class Members",id:"part-2-adding-a-teardown-method-and-completing-the-tests-for-static-class-members",slug:"part-2-adding-a-teardown-method-and-completing-the-tests-for-static-class-members",hide_table_of_contents:!0,sidebar_position:10,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0j_adding_a_teardown_method.md"},o=void 0,r={unversionedId:"c-and-net/tdd-and-debugging/part-2-adding-a-teardown-method-and-completing-the-tests-for-static-class-members",id:"c-and-net/tdd-and-debugging/part-2-adding-a-teardown-method-and-completing-the-tests-for-static-class-members",title:"Part 2: Adding a Teardown Method and Completing the Tests for Static Class Members",description:"In this lesson we'll move past the roadblock we hit when testing the GetAll() getter method for the private static _instances field. As we'll see, the solution is quite simple!",source:"@site/docs/c-and-net/5_tdd-and-debugging/0j-adding-a-teardown-method.md",sourceDirName:"c-and-net/5_tdd-and-debugging",slug:"/c-and-net/tdd-and-debugging/part-2-adding-a-teardown-method-and-completing-the-tests-for-static-class-members",permalink:"/c-and-net/tdd-and-debugging/part-2-adding-a-teardown-method-and-completing-the-tests-for-static-class-members",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Part 2: Adding a Teardown Method and Completing the Tests for Static Class Members",id:"part-2-adding-a-teardown-method-and-completing-the-tests-for-static-class-members",slug:"part-2-adding-a-teardown-method-and-completing-the-tests-for-static-class-members",hide_table_of_contents:!0,sidebar_position:10,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0j_adding_a_teardown_method.md"},sidebar:"c-and-net",previous:{title:"Part 1: Testing Static Class Members and Collections",permalink:"/c-and-net/tdd-and-debugging/part-1-testing-static-class-members-and-collections"},next:{title:"MSTest Configuration Quick Reference",permalink:"/c-and-net/tdd-and-debugging/mstest-configuration-quick-reference"}},l={},d=[{value:"Adding a Teardown Method",id:"adding-a-teardown-method",level:2},{value:"5.  Run the automated test to confirm it passes. If it doesn&#39;t, revisit step 4.",id:"5--run-the-automated-test-to-confirm-it-passes-if-it-doesnt-revisit-step-4",level:3},{value:"Steps 6 and 7",id:"steps-6-and-7",level:3},{value:"Steps 8 and 9",id:"steps-8-and-9",level:3},{value:"Testing the Private Static Field <code>_instances</code> through its Setter Method <code>ClearAll()</code>",id:"testing-the-private-static-field-_instances-through-its-setter-method-clearall",level:2},{value:"1.  Identify the simplest possible behavior the program must exhibit.",id:"1--identify-the-simplest-possible-behavior-the-program-must-exhibit",level:3},{value:"2.  Write a coded test for this behavior.",id:"2--write-a-coded-test-for-this-behavior",level:3},{value:"Steps 3 and 4.  Before coding, confirm the test fails.",id:"steps-3-and-4--before-coding-confirm-the-test-fails",level:3},{value:"5.  Run the automated test to confirm it passes. If it doesn&#39;t, revisit step 4.",id:"5--run-the-automated-test-to-confirm-it-passes-if-it-doesnt-revisit-step-4-1",level:3},{value:"Steps 6 and 7",id:"steps-6-and-7-1",level:3},{value:"Steps 8 and 9",id:"steps-8-and-9-1",level:3},{value:"Final Thoughts",id:"final-thoughts",level:2},{value:"Repository Reference",id:"repository-reference",level:3}],p={toc:d},c="wrapper";function h(e){let{components:t,...n}=e;return(0,s.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In this lesson we'll move past the roadblock we hit when testing the ",(0,s.kt)("inlineCode",{parentName:"p"},"GetAll()")," getter method for the private static ",(0,s.kt)("inlineCode",{parentName:"p"},"_instances")," field. As we'll see, the solution is quite simple! "),(0,s.kt)("h2",{id:"adding-a-teardown-method"},"Adding a Teardown Method"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"When we add a ",(0,s.kt)("strong",{parentName:"p"},"teardown")," method, we're adding a special method that will run between tests to perform cleanup. In this case, we'll use a teardown method to reset the ",(0,s.kt)("inlineCode",{parentName:"p"},"_instances")," data between each test, ensuring any individual test's results aren't affected by earlier tests."),(0,s.kt)("p",null,"To set up a teardown method, we'll need to add the ",(0,s.kt)("inlineCode",{parentName:"p"},"IDisposable")," keyword to our ",(0,s.kt)("inlineCode",{parentName:"p"},"TriangleTests")," class declaration and include a new using directive for the ",(0,s.kt)("inlineCode",{parentName:"p"},"System")," namespace, the namespace that ",(0,s.kt)("inlineCode",{parentName:"p"},"IDisposable")," lives in. "),(0,s.kt)("p",null,"Here's the first update to ",(0,s.kt)("inlineCode",{parentName:"p"},"TriangleTests.cs"),":"),(0,s.kt)("div",{class:"filename"},"ShapeTracker.Tests/ModelTests/TriangleTests.cs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.VisualStudio.TestTools.UnitTesting;\nusing ShapeTracker.Models;\nusing System.Collections.Generic; \nusing System; // new using directive!\n\nnamespace ShapeTracker.Tests\n{\n  [TestClass]\n  public class TriangleTests : IDisposable\n  {\n\n    ... // tests omitted for brevity\n\n  }\n}\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"IDisposable")," is what is referred to as an interface. We'll cover interfaces later in this section, but for now, just be aware that the ",(0,s.kt)("inlineCode",{parentName:"p"},":")," syntax above ",(0,s.kt)("strong",{parentName:"p"},"extends")," functionality from ",(0,s.kt)("inlineCode",{parentName:"p"},"IDisposable")," to our ",(0,s.kt)("inlineCode",{parentName:"p"},"TriangleTests")," class."),(0,s.kt)("p",null,"Now that we've extended the ",(0,s.kt)("inlineCode",{parentName:"p"},"IDisposable")," interface, we'll be able to create a special method called ",(0,s.kt)("inlineCode",{parentName:"p"},"Dispose()")," that resets data between tests. Let's add this method now:"),(0,s.kt)("div",{class:"filename"},"ShapeTracker.Tests/ModelTests/TriangleTests.cs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.VisualStudio.TestTools.UnitTesting;\nusing ShapeTracker.Models;\nusing System.Collections.Generic; \nusing System; \n\nnamespace ShapeTracker.Tests\n{\n  [TestClass]\n  public class TriangleTests : IDisposable\n  {\n    public void Dispose()\n    {\n      Triangle.ClearAll();\n    }\n\n    ... // tests omitted for brevity\n\n  }\n}\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Dispose()")," is a special method. Any code we add to ",(0,s.kt)("inlineCode",{parentName:"p"},"Dispose")," automatically runs after every test. In our case, we'll call the ",(0,s.kt)("inlineCode",{parentName:"p"},"ClearAll()")," method on the ",(0,s.kt)("inlineCode",{parentName:"p"},"Triangle")," class. However, ",(0,s.kt)("inlineCode",{parentName:"p"},"ClearAll()")," ",(0,s.kt)("em",{parentName:"p"},"isn't")," a built-in method. We'll have to define this one ourselves. We were going to do this as part of our Test-Driven Development, but we'll have to skip ahead and do it now."),(0,s.kt)("p",null,"We'll add the new ",(0,s.kt)("inlineCode",{parentName:"p"},"ClearAll()")," method at the end of the ",(0,s.kt)("inlineCode",{parentName:"p"},"Triangle")," class:"),(0,s.kt)("div",{class:"filename"},"ShapeTracker.Solution/ShapeTracker/Models/Item.cs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"using System.Collections.Generic;\n\nnamespace ShapeTracker.Models\n{\n  public class Triangle\n  {\n    ... // other code omitted for brevity\n\n    public static void ClearAll()\n    {\n      _instances.Clear();\n    }\n\n  }\n}\n")),(0,s.kt)("p",null,"Our ",(0,s.kt)("inlineCode",{parentName:"p"},"ClearAll()")," method is static because it affects all ",(0,s.kt)("inlineCode",{parentName:"p"},"Triangle"),"s in the class, not just one. We use the built-in ",(0,s.kt)("inlineCode",{parentName:"p"},"List<T>.Clear()")," method to empty ",(0,s.kt)("inlineCode",{parentName:"p"},"_instances"),"."),(0,s.kt)("h3",{id:"5--run-the-automated-test-to-confirm-it-passes-if-it-doesnt-revisit-step-4"},"5.  Run the automated test to confirm it passes. If it doesn't, revisit step 4."),(0,s.kt)("p",null,"We can now check our tests to see if the code we implemented in the last lesson for the ",(0,s.kt)("inlineCode",{parentName:"p"},"GetAll")," test works as expected. "),(0,s.kt)("p",null,"Within the ",(0,s.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests")," directory, run ",(0,s.kt)("inlineCode",{parentName:"p"},"dotnet test"),". "),(0,s.kt)("pre",null,(0,s.kt)("code",{style:{color:"green"}},"Passed!  - Failed:     0, Passed:    12, Skipped:     0, Total:    12, Duration: 138 ms - ShapeTracker.Tests.dll (net6.0)")),(0,s.kt)("p",null,"Woo-hoo! All our tests are passing now, which means both the ",(0,s.kt)("inlineCode",{parentName:"p"},"Dispose()")," test method and ",(0,s.kt)("inlineCode",{parentName:"p"},"Triangle.GetAll()")," method are both working correctly. Great! "),(0,s.kt)("p",null,"To wrap up the RGR workflow for the ",(0,s.kt)("inlineCode",{parentName:"p"},"GetAll()")," method, let's complete the last four steps."),(0,s.kt)("h3",{id:"steps-6-and-7"},"Steps 6 and 7"),(0,s.kt)("p",null,"We can also confirm that all previous tests still pass and there are no opportunities for refactoring yet."),(0,s.kt)("h3",{id:"steps-8-and-9"},"Steps 8 and 9"),(0,s.kt)("p",null,"We'll commit our passing code and move onto the next simplest behavior. "),(0,s.kt)("p",null,"So what's next? Even though we've already written the code for the ",(0,s.kt)("inlineCode",{parentName:"p"},"Triangle.ClearAll()")," method, and successfully put it to use in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Dispose()")," method, we need to write a test for it."),(0,s.kt)("h2",{id:"testing-the-private-static-field-_instances-through-its-setter-method-clearall"},"Testing the Private Static Field ",(0,s.kt)("inlineCode",{parentName:"h2"},"_instances")," through its Setter Method ",(0,s.kt)("inlineCode",{parentName:"h2"},"ClearAll()")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"1--identify-the-simplest-possible-behavior-the-program-must-exhibit"},"1.  Identify the simplest possible behavior the program must exhibit."),(0,s.kt)("p",null,"To test the ability to change the value of ",(0,s.kt)("inlineCode",{parentName:"p"},"_instances"),", we'll need to write a setter method. In this case, we already know the name of our setter method: ",(0,s.kt)("inlineCode",{parentName:"p"},"ClearAll()"),"."),(0,s.kt)("h3",{id:"2--write-a-coded-test-for-this-behavior"},"2.  Write a coded test for this behavior."),(0,s.kt)("p",null,"Here's our new test:"),(0,s.kt)("div",{class:"filename"},"ShapeTracker.Solution/ShapeTracker.Tests/ModelTests/TriangleTests.cs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.VisualStudio.TestTools.UnitTesting;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker.Tests\n{\n  [TestClass]\n  public class TriangleTests\n  {\n\n    ... // other tests omitted for brevity\n\n    [TestMethod]\n    public void ClearAll_DeletesAllTriangleInList_Void()\n    {\n      // Arrange\n      Triangle tri1 = new Triangle(2, 2, 9);\n      Triangle tri2 = new Triangle(21, 3, 9);\n      Triangle tri3 = new Triangle(1, 3, 9);\n      List<Triangle> expected = new List<Triangle> { };\n      // Act\n      Triangle.ClearAll();\n      // Assert\n      CollectionAssert.AreEqual(expected, Triangle.GetAll());\n    }\n  }\n}\n")),(0,s.kt)("h3",{id:"steps-3-and-4--before-coding-confirm-the-test-fails"},"Steps 3 and 4.  Before coding, confirm the test fails."),(0,s.kt)("p",null,"We can't complete steps 3 and 4 of the RGR workflow:"),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Before coding, confirm the test fails."),(0,s.kt)("li",{parentName:"ol"},"Implement the behavior with the least amount of code possible.")),(0,s.kt)("p",null,"That's because we already have the code for ",(0,s.kt)("inlineCode",{parentName:"p"},"ClearAll()")," in place within the ",(0,s.kt)("inlineCode",{parentName:"p"},"Triangle")," class. This situation is unique, so it's okay that we can't complete these steps following the RGR workflow."),(0,s.kt)("h3",{id:"5--run-the-automated-test-to-confirm-it-passes-if-it-doesnt-revisit-step-4-1"},"5.  Run the automated test to confirm it passes. If it doesn't, revisit step 4."),(0,s.kt)("p",null,"Let's run ",(0,s.kt)("inlineCode",{parentName:"p"},"dotnet test")," within the ",(0,s.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests")," directory, and see if our tests are passing:"),(0,s.kt)("pre",null,(0,s.kt)("code",{style:{color:"green"}},"Passed!  - Failed:     0, Passed:     13, Skipped:     0, Total:     8, Duration: 91 ms - ShapeTracker.Tests.dll (net6.0)")),(0,s.kt)("p",null,"Sweet!"),(0,s.kt)("h3",{id:"steps-6-and-7-1"},"Steps 6 and 7"),(0,s.kt)("p",null,"We can also confirm that all previous tests still pass and there are no opportunities for refactoring yet."),(0,s.kt)("h3",{id:"steps-8-and-9-1"},"Steps 8 and 9"),(0,s.kt)("p",null,"We'll commit our passing code and move onto the next simplest behavior \u2014 only, that's it! There's nothing more for us to do because we've covered all of the ",(0,s.kt)("inlineCode",{parentName:"p"},"Triangle")," class logic that we need at this time."),(0,s.kt)("h2",{id:"final-thoughts"},"Final Thoughts"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Going forward, remember that whenever we use static data, we need to create a ",(0,s.kt)("inlineCode",{parentName:"p"},"Dispose()")," method to clean up between each test, and that we'll need to have our test classes extend from the ",(0,s.kt)("inlineCode",{parentName:"p"},"IDisposable")," interface."),(0,s.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,s.kt)("p",null,"Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository. Also note the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"This branch contains completed business logic and tests for the ",(0,s.kt)("inlineCode",{parentName:"li"},"Triangle")," class."),(0,s.kt)("li",{parentName:"ul"},"UI Logic in ",(0,s.kt)("inlineCode",{parentName:"li"},"Program.cs")," has been commented back in. ")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/prework-TDD-with-shape-tracker-csharp-net6/tree/2_complete_testing"},(0,s.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for TDD with Shape Tracker: ",(0,s.kt)("inlineCode",{parentName:"a"},"2_complete_testing")))))}h.isMDXComponent=!0}}]);