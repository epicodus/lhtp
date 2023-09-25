"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[48737],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),h=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=h(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=h(n),u=a,m=p["".concat(l,".").concat(u)]||p[u]||c[u]||s;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,r[1]=o;for(var h=2;h<s;h++)r[h]=n[h];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var i=n(87462),a=(n(67294),n(3905));const s={title:"Testing A Method with Multiple Behaviors",id:"testing_a_method_with_multiple_behaviors",slug:"testing_a_method_with_multiple_behaviors",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0h_testing_method_with_multiple_paths.md"},r=void 0,o={unversionedId:"c_and_net_part_time_evening/tdd-and-debugging/testing_a_method_with_multiple_behaviors",id:"c_and_net_part_time_evening/tdd-and-debugging/testing_a_method_with_multiple_behaviors",title:"Testing A Method with Multiple Behaviors",description:"At this point we have seven passing tests and a fully tested Triangle constructor, field, property, and auto-implemented property. What's the next behavior we want to implement for our Triangle class? I'd say we're ready to work on the Triangle.CheckType() instance method that will determine what type of triangle we have.",source:"@site/docs/c_and_net_part_time_evening/5_tdd-and-debugging/0h_testing_method_with_multiple_paths.md",sourceDirName:"c_and_net_part_time_evening/5_tdd-and-debugging",slug:"/c_and_net_part_time_evening/tdd-and-debugging/testing_a_method_with_multiple_behaviors",permalink:"/c_and_net_part_time_evening/tdd-and-debugging/testing_a_method_with_multiple_behaviors",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Testing A Method with Multiple Behaviors",id:"testing_a_method_with_multiple_behaviors",slug:"testing_a_method_with_multiple_behaviors",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0h_testing_method_with_multiple_paths.md"},sidebar:"c_and_net_part_time_evening",previous:{title:"Testing A Private Field through its Getter and Setter Methods",permalink:"/c_and_net_part_time_evening/tdd-and-debugging/testing_a_private_field_through_its_getter_and_setter_methods"},next:{title:"Part 1: Testing Static Class Members and Collections",permalink:"/c_and_net_part_time_evening/tdd-and-debugging/part_1_testing_static_class_members_and_collections"}},l={},h=[{value:"Reference for the &quot;Red, Green, Refactor&quot; (RGR) Workflow",id:"reference-for-the-red-green-refactor-rgr-workflow",level:2},{value:"Testing the <code>&quot;not a triangle&quot;</code> Path in the <code>CheckType()</code> Method",id:"testing-the-not-a-triangle-path-in-the-checktype-method",level:2},{value:"1.  Identify the simplest possible behavior the program must exhibit.",id:"1--identify-the-simplest-possible-behavior-the-program-must-exhibit",level:3},{value:"2.  Write a coded test for this behavior.",id:"2--write-a-coded-test-for-this-behavior",level:3},{value:"3.  Before coding, confirm the test fails.",id:"3--before-coding-confirm-the-test-fails",level:3},{value:"4.  Implement the behavior with the least amount of code possible.",id:"4--implement-the-behavior-with-the-least-amount-of-code-possible",level:3},{value:"5.  Run the automated test to confirm it passes. If it doesn&#39;t, revisit step 4.",id:"5--run-the-automated-test-to-confirm-it-passes-if-it-doesnt-revisit-step-4",level:3},{value:"Steps 6 and 7",id:"steps-6-and-7",level:3},{value:"Steps 8 and 9",id:"steps-8-and-9",level:3},{value:"Testing the <code>&quot;scalene triangle&quot;</code> Path in the <code>CheckType()</code> Method",id:"testing-the-scalene-triangle-path-in-the-checktype-method",level:2},{value:"1.  Identify the simplest possible behavior the program must exhibit.",id:"1--identify-the-simplest-possible-behavior-the-program-must-exhibit-1",level:3},{value:"2.  Write a coded test for this behavior.",id:"2--write-a-coded-test-for-this-behavior-1",level:3},{value:"3.  Before coding, confirm the test fails.",id:"3--before-coding-confirm-the-test-fails-1",level:3},{value:"4.  Implement the behavior with the least amount of code possible.",id:"4--implement-the-behavior-with-the-least-amount-of-code-possible-1",level:3},{value:"5.  Run the automated test to confirm it passes. If it doesn&#39;t, revisit step 4.",id:"5--run-the-automated-test-to-confirm-it-passes-if-it-doesnt-revisit-step-4-1",level:3},{value:"(Again) 4.  Implement the behavior with the least amount of code possible.",id:"again-4--implement-the-behavior-with-the-least-amount-of-code-possible",level:3},{value:"5.  Run the automated test to confirm it passes. If it doesn&#39;t, revisit step 4.",id:"5--run-the-automated-test-to-confirm-it-passes-if-it-doesnt-revisit-step-4-2",level:3},{value:"5.  Run the automated test to confirm it passes. If it doesn&#39;t, revisit step 4.",id:"5--run-the-automated-test-to-confirm-it-passes-if-it-doesnt-revisit-step-4-3",level:3},{value:"Steps 6 and 7",id:"steps-6-and-7-1",level:3},{value:"Steps 8 and 9",id:"steps-8-and-9-1",level:3},{value:"Testing the <code>&quot;isosceles triangle&quot;</code> Path in the <code>CheckType()</code> Method",id:"testing-the-isosceles-triangle-path-in-the-checktype-method",level:2},{value:"1.  Identify the simplest possible behavior the program must exhibit.",id:"1--identify-the-simplest-possible-behavior-the-program-must-exhibit-2",level:3},{value:"2.  Write a coded test for this behavior.",id:"2--write-a-coded-test-for-this-behavior-2",level:3},{value:"3.  Before coding, confirm the test fails.",id:"3--before-coding-confirm-the-test-fails-2",level:3},{value:"4.  Implement the behavior with the least amount of code possible.",id:"4--implement-the-behavior-with-the-least-amount-of-code-possible-2",level:3},{value:"5.  Run the automated test to confirm it passes. If it doesn&#39;t, revisit step 4.",id:"5--run-the-automated-test-to-confirm-it-passes-if-it-doesnt-revisit-step-4-4",level:3},{value:"Steps 6 and 7",id:"steps-6-and-7-2",level:3},{value:"Steps 8 and 9",id:"steps-8-and-9-2",level:3},{value:"Testing the <code>&quot;equilateral triangle&quot;</code> Path in the <code>CheckType()</code> Method",id:"testing-the-equilateral-triangle-path-in-the-checktype-method",level:2},{value:"1.  Identify the simplest possible behavior the program must exhibit.",id:"1--identify-the-simplest-possible-behavior-the-program-must-exhibit-3",level:3},{value:"2.  Write a coded test for this behavior.",id:"2--write-a-coded-test-for-this-behavior-3",level:3},{value:"3.  Before coding, confirm the test fails.",id:"3--before-coding-confirm-the-test-fails-3",level:3},{value:"4.  Implement the behavior with the least amount of code possible.",id:"4--implement-the-behavior-with-the-least-amount-of-code-possible-3",level:3},{value:"5.  Run the automated test to confirm it passes. If it doesn&#39;t, revisit step 4.",id:"5--run-the-automated-test-to-confirm-it-passes-if-it-doesnt-revisit-step-4-5",level:3},{value:"Steps 6 and 7",id:"steps-6-and-7-3",level:3},{value:"Steps 8 and 9",id:"steps-8-and-9-3",level:3}],d={toc:h},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"At this point we have seven passing tests and a fully tested ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," constructor, field, property, and auto-implemented property. What's the next behavior we want to implement for our ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," class? I'd say we're ready to work on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle.CheckType()")," instance method that will determine what type of triangle we have. "),(0,a.kt)("p",null,"What do we know about the functionality we want for this method?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It should return one of four values: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"not a triangle"')," when the three sides can't make an actual triangle. For example the sides 1, 4, and 5000 cannot make an actual triangle."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"scalene triangle"')," when no sides are the same length."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"isosceles triangle"')," when two sides have the same length."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"equilateral triangle"')," when all three sides have the same length."))),(0,a.kt)("li",{parentName:"ul"},"The return type is a ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),".")),(0,a.kt)("p",null,"What's the simplest starting point? It's up to you to decide! However, it's important to recognize that each of the possible return values represents a distinct behavior within the ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle.CheckType()")," instance method; that means we need to tackle each behavior separately, with a separate test. "),(0,a.kt)("p",null,"So we'll write four tests, each of which covers a different outcome of the ",(0,a.kt)("inlineCode",{parentName:"p"},"CheckType()")," method. This actually reveals a simple ",(0,a.kt)("strong",{parentName:"p"},"testing guideline")," to follow: for each method, there should be a separate test for each possible outcome. This may be self-explanatory, but we'll explain more: whenever a method has multiple possible return values, it means it implements branching; each branch in that method is a distinct ",(0,a.kt)("strong",{parentName:"p"},"path")," that our program can take; the best way to test these distinct paths is to write separate tests for them. This is considered best practice because each test targets distinct application behavior, instead of a distinct application method. "),(0,a.kt)("p",null,"In this lesson, we'll move down the list, implementing the test and code for ",(0,a.kt)("inlineCode",{parentName:"p"},'"not a triangle"'),", then ",(0,a.kt)("inlineCode",{parentName:"p"},'"scalene triangle"'),", then ",(0,a.kt)("inlineCode",{parentName:"p"},'"isosceles triangle"'),", and finally ",(0,a.kt)("inlineCode",{parentName:"p"},'"equilateral triangle"'),". We'll continue to use the RGR workflow as we go."),(0,a.kt)("h2",{id:"reference-for-the-red-green-refactor-rgr-workflow"},'Reference for the "Red, Green, Refactor" (RGR) Workflow'),(0,a.kt)("hr",null),(0,a.kt)("p",null,'For reference, here\'s the "Red, Green, Refactor" (RGR) workflow we follow with TDD:'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Identify the simplest possible behavior the program must exhibit."),(0,a.kt)("li",{parentName:"ol"},"Write a coded test for this behavior."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("font",{color:"red"},"Before coding, confirm the test fails.")),(0,a.kt)("li",{parentName:"ol"},"Implement the behavior with the least amount of code possible."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("font",{color:"green"},"Run the automated test to confirm it passes. If it doesn't, revisit step 4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("font",{color:"green"},"Confirm all previous tests still pass. If it doesn't, revisit step 4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("font",{color:"blue"},"Check if code can be refactored. If so, refactor and repeat step 6.")),(0,a.kt)("li",{parentName:"ol"},"Commit your passing code."),(0,a.kt)("li",{parentName:"ol"},"Repeat this process with the next simplest behavior.")),(0,a.kt)("h2",{id:"testing-the-not-a-triangle-path-in-the-checktype-method"},"Testing the ",(0,a.kt)("inlineCode",{parentName:"h2"},'"not a triangle"')," Path in the ",(0,a.kt)("inlineCode",{parentName:"h2"},"CheckType()")," Method"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"1--identify-the-simplest-possible-behavior-the-program-must-exhibit"},"1.  Identify the simplest possible behavior the program must exhibit."),(0,a.kt)("p",null,"The first behavior we want to handle is when a triangle is ",(0,a.kt)("inlineCode",{parentName:"p"},'"not a triangle"'),"."),(0,a.kt)("h3",{id:"2--write-a-coded-test-for-this-behavior"},"2.  Write a coded test for this behavior."),(0,a.kt)("p",null,"Here's our new test:"),(0,a.kt)("div",{class:"filename"},"ShapeTracker.Solution/ShapeTracker.Tests/ModelTests/TriangleTests.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.VisualStudio.TestTools.UnitTesting;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker.Tests\n{\n  [TestClass]\n  public class TriangleTests\n  {\n\n    ... // 7 tests omitted for brevity\n\n    [TestMethod]\n    public void CheckType_DeterminesWhenNotATriangle_String()\n    {\n      // Arrange\n      Triangle notATriangle = new Triangle(3, 4, 88);\n      // Act\n      string triType = notATriangle.CheckType();\n      // Assert\n      Assert.AreEqual("not a triangle", triType);\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"3--before-coding-confirm-the-test-fails"},"3.  Before coding, confirm the test fails."),(0,a.kt)("p",null,"When we run ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet test")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests")," directory, we'll get a compiler error letting us know that the ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle.CheckType()")," instance method does not exist: "),(0,a.kt)("pre",null,(0,a.kt)("code",{style:{color:"red"}},"C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ModelTests\\TriangleTests.cs(94,36): error CS1061: 'Triangle' does not contain a definition for 'CheckType' and no accessible extension method 'CheckType' accepting a first argument of type 'Triangle' could be found (are you missing a using directive or an assembly reference?) [C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ShapeTracker.Tests.csproj]")),(0,a.kt)("p",null,"This compiler error confirms that we do not have any false positives."),(0,a.kt)("h3",{id:"4--implement-the-behavior-with-the-least-amount-of-code-possible"},"4.  Implement the behavior with the least amount of code possible."),(0,a.kt)("p",null,"Here's the least amount of code to get our test passing:"),(0,a.kt)("div",{class:"filename"},"ShapeTracker/Models/Triangle.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace ShapeTracker.Models\n{\n  public class Triangle\n  {\n    ... // other code omitted for brevity\n\n    public string CheckType()\n    {\n      return "not a triangle";\n    }\n  }\n}\n')),(0,a.kt)("p",null,"While the above is technically the very least amount of code to get our test to pass, we may feel more comfortable adding the actual branching logic that tests whether a triangle is not a triangle, since, at some point we will need that logic to accurately determine if a triangle is not a triangle: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'if ((_side1 > (Side2 + _side3)) || (Side2 > (_side1 + _side3)) || (_side3 > (_side1 + Side2)))\n{\n  return "not a triangle";\n} \n')),(0,a.kt)("p",null,"Both approaches are acceptable."),(0,a.kt)("h3",{id:"5--run-the-automated-test-to-confirm-it-passes-if-it-doesnt-revisit-step-4"},"5.  Run the automated test to confirm it passes. If it doesn't, revisit step 4."),(0,a.kt)("p",null,"We'll run our tests again, and confirm that our tests are passing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{style:{color:"green"}},"Passed!  - Failed:     0, Passed:     8, Skipped:     0, Total:     8, Duration: 91 ms - ShapeTracker.Tests.dll (net6.0)")),(0,a.kt)("h3",{id:"steps-6-and-7"},"Steps 6 and 7"),(0,a.kt)("p",null,"We can confirm that all previous tests still pass and there are no opportunities for refactoring yet. "),(0,a.kt)("h3",{id:"steps-8-and-9"},"Steps 8 and 9"),(0,a.kt)("p",null,"We'll commit our passing code and move onto the next simplest behavior."),(0,a.kt)("h2",{id:"testing-the-scalene-triangle-path-in-the-checktype-method"},"Testing the ",(0,a.kt)("inlineCode",{parentName:"h2"},'"scalene triangle"')," Path in the ",(0,a.kt)("inlineCode",{parentName:"h2"},"CheckType()")," Method"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"1--identify-the-simplest-possible-behavior-the-program-must-exhibit-1"},"1.  Identify the simplest possible behavior the program must exhibit."),(0,a.kt)("p",null,"The second behavior we want to handle is when a triangle is ",(0,a.kt)("inlineCode",{parentName:"p"},'"scalene triangle"'),", which is when no side is the same length."),(0,a.kt)("h3",{id:"2--write-a-coded-test-for-this-behavior-1"},"2.  Write a coded test for this behavior."),(0,a.kt)("p",null,"Here's our new test:"),(0,a.kt)("div",{class:"filename"},"ShapeTracker.Solution/ShapeTracker.Tests/ModelTests/TriangleTests.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.VisualStudio.TestTools.UnitTesting;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker.Tests\n{\n  [TestClass]\n  public class TriangleTests\n  {\n\n    ... // 8 tests omitted for brevity\n\n    [TestMethod]\n    public void CheckType_DeterminesWhenScalene_String()\n    {\n      // Arrange\n      Triangle scaleneTri = new Triangle(3, 4, 5);\n      // Act\n      string triType = scaleneTri.CheckType();\n      // Assert\n      Assert.AreEqual("scalene triangle", triType);\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"3--before-coding-confirm-the-test-fails-1"},"3.  Before coding, confirm the test fails."),(0,a.kt)("p",null,"When we run ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet test")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests")," directory, we'll finally get our first failed test!"),(0,a.kt)("pre",null,(0,a.kt)("code",{style:{color:"red"}},"Failed CheckType_DeterminesWhenScalene_String [59 ms] Error Message: Assert.AreEqual failed. Expected:<scalene>. Actual:<not a triangle>. Stack Trace: at ShapeTracker.Tests.TriangleTests.CheckType_DeterminesWhenScalene_String() in C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ModelTests\\TriangleTests.cs:line 107 Failed!  - Failed:     1, Passed:     8, Skipped:     0, Total:     9, Duration: 117 ms - ShapeTracker.Tests.dll (net6.0)")),(0,a.kt)("p",null,"MSTest gives us helpful output about what went wrong:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We can read the name of the test method that failed, ",(0,a.kt)("inlineCode",{parentName:"li"},"CheckType_DeterminesWhenScalene_String")),(0,a.kt)("li",{parentName:"ul"},"We can see the values for what we expect, ",(0,a.kt)("inlineCode",{parentName:"li"},"Expected:<scalene>"),", versus what we actually got, ",(0,a.kt)("inlineCode",{parentName:"li"},"Actual:<not a triangle>"),"."),(0,a.kt)("li",{parentName:"ul"},"We can see a stack trace that takes us to the failed ",(0,a.kt)("inlineCode",{parentName:"li"},"Assert.AreEqual()")," method on line 107 of ",(0,a.kt)("inlineCode",{parentName:"li"},"TriangleTests.cs"),".")),(0,a.kt)("p",null,"This failed test is confirming there are no false positives. How? Because we haven't implemented any code for our test to pass, and we wrote our test so that it should pass. "),(0,a.kt)("h3",{id:"4--implement-the-behavior-with-the-least-amount-of-code-possible-1"},"4.  Implement the behavior with the least amount of code possible."),(0,a.kt)("p",null,"To implement the behavior with the least amount of code possible, we'll finally need branching, as well as to decide which outcome should come first in our branching, ",(0,a.kt)("inlineCode",{parentName:"p"},'"not a triangle"')," or ",(0,a.kt)("inlineCode",{parentName:"p"},'"scalene triangle"'),". Here's the updated ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle.CheckType()")," method:"),(0,a.kt)("div",{class:"filename"},"ShapeTracker/Models/Triangle.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace ShapeTracker.Models\n{\n  public class Triangle\n  {\n    ... // other code omitted for brevity\n\n    public string CheckType()\n    {\n      if ((Side1 != Side2) && ((Side1 != _side3)) && ((Side2 != _side3))) \n      {\n        return "scalene triangle";\n      } \n      else \n      {\n        return "not a triangle";\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Within our ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," branch, we've decided to check whether a triangle is scalene first, by verifying that none of the sides have the same value."),(0,a.kt)("p",null,"With our ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," branch, we handle all other cases, which so far is when a triangle is not a triangle. "),(0,a.kt)("h3",{id:"5--run-the-automated-test-to-confirm-it-passes-if-it-doesnt-revisit-step-4-1"},"5.  Run the automated test to confirm it passes. If it doesn't, revisit step 4."),(0,a.kt)("p",null,"Let's confirm that our new code passes our new test!"),(0,a.kt)("pre",null,(0,a.kt)("code",{style:{color:"red"}},"Failed CheckType_DeterminesWhenNotATriangle_String [36 ms] Error Message: Assert.AreEqual failed. Expected:<not a triangle>. Actual:<scalene>. Stack Trace: at ShapeTracker.Tests.TriangleTests.CheckType_DeterminesWhenNotATriangle_String() in C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ModelTests\\TriangleTests.cs:line 96 Failed!  - Failed:     1, Passed:     8, Skipped:     0, Total:     9, Duration: 130 ms - ShapeTracker.Tests.dll (net6.0)")),(0,a.kt)("p",null,"Hmm... we're getting an error, but it is different than last time: it says our test method ",(0,a.kt)("inlineCode",{parentName:"p"},"CheckType_DeterminesWhenNotATriangle_String()")," has failed, with an expected output of ",(0,a.kt)("inlineCode",{parentName:"p"},'"not a triangle"'),", but an actual output of ",(0,a.kt)("inlineCode",{parentName:"p"},'"scalene triangle"'),". This means the new code we implemented worked for the new test, but broke a previous test! "),(0,a.kt)("p",null,"This is a good reminder to carefully review the error messages we get to really figure out what's wrong. "),(0,a.kt)("h3",{id:"again-4--implement-the-behavior-with-the-least-amount-of-code-possible"},"(Again) 4.  Implement the behavior with the least amount of code possible."),(0,a.kt)("p",null,"Let's fix this. The issue in our code is that our ",(0,a.kt)("inlineCode",{parentName:"p"},"notATriangle")," variable in our test method ",(0,a.kt)("inlineCode",{parentName:"p"},"CheckType_DeterminesWhenNotATriangle_String()")," (in ",(0,a.kt)("inlineCode",{parentName:"p"},"TriangleTests.cs"),") that has the values of 3, 4, and 88 match with the requirements we set for scalene triangles, which is for none of the sides to have the same value. "),(0,a.kt)("p",null,"So what's our solution? We need the logic for the ",(0,a.kt)("inlineCode",{parentName:"p"},'"not a triangle"')," path to come first, before the logic for the ",(0,a.kt)("inlineCode",{parentName:"p"},'"scalene triangle"')," path. "),(0,a.kt)("p",null,"Here's our updated ",(0,a.kt)("inlineCode",{parentName:"p"},"CheckType()")," method:"),(0,a.kt)("div",{class:"filename"},"ShapeTracker/Models/Triangle.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace ShapeTracker.Models\n{\n  public class Triangle\n  {\n    ... // other code omitted for brevity\n\n    public string CheckType()\n    {\n      if ((Side1 > (Side2 + _side3)) || (Side2 > (Side1 + _side3)) || (_side3 > (Side1 + Side2))) \n      {\n        return "not a triangle";\n      } \n      else if ((Side1 != Side2) && ((Side1 != _side3)) && ((Side2 != _side3))) \n      {\n        return "scalene triangle";\n      }\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"5--run-the-automated-test-to-confirm-it-passes-if-it-doesnt-revisit-step-4-2"},"5.  Run the automated test to confirm it passes. If it doesn't, revisit step 4."),(0,a.kt)("p",null,"Let's run our tests again. When we do, we'll get a compiler error, one that we haven't seen before:"),(0,a.kt)("pre",null,(0,a.kt)("code",{style:{color:"red"}},"C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker\\Models\\Triangle.cs(31,19): error CS0161: 'Triangle.CheckType()': not all code paths return a value [C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker\\ShapeTracker.csproj]")),(0,a.kt)("p",null,"The current issue is letting us know that our code is not returning a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," in all paths of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle.CheckType()")," method. We do return a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," statement and the ",(0,a.kt)("inlineCode",{parentName:"p"},"else if")," statement, but what happens if our triangle's sides do not match with the ",(0,a.kt)("inlineCode",{parentName:"p"},"if ")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"else if")," statement? Nothing happens, which violates C#'s strict rules, in this case, that our ",(0,a.kt)("inlineCode",{parentName:"p"},"CheckType()")," method needs to return a ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),". "),(0,a.kt)("p",null,"We can resolve this compiler error in a few ways. We could turn our ",(0,a.kt)("inlineCode",{parentName:"p"},"else if")," into an ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," statement that returns ",(0,a.kt)("inlineCode",{parentName:"p"},'"scalene triangle"'),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'    public string CheckType()\n    {\n      if ((Side1 > (Side2 + _side3)) || (Side2 > (Side1 + _side3)) || (_side3 > (Side1 + Side2))) \n      {\n        return "not a triangle";\n      } \n      else \n      {\n        return "scalene triangle";\n      }\n    }\n')),(0,a.kt)("p",null,"Doing this makes the most sense in terms of coding incrementally. The downside, however, is that we would lose the work we've already done. "),(0,a.kt)("p",null,"Another option is to keep the code we wrote as-is, and add an new ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," statement that returns an empty string. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'    public string CheckType()\n    {\n      if ((Side1 > (Side2 + _side3)) || (Side2 > (Side1 + _side3)) || (_side3 > (Side1 + Side2))) \n      {\n        return "not a triangle";\n      } \n      else if ((Side1 != Side2) && ((Side1 != _side3)) && ((Side2 != _side3))) \n      {\n        return "scalene triangle";\n      }\n      else\n      {\n        return "";\n      }\n    }\n')),(0,a.kt)("p",null,"Either approach is fine. This time, we'll opt for this second approach. Update the ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle.CheckType()")," accordingly."),(0,a.kt)("h3",{id:"5--run-the-automated-test-to-confirm-it-passes-if-it-doesnt-revisit-step-4-3"},"5.  Run the automated test to confirm it passes. If it doesn't, revisit step 4."),(0,a.kt)("p",null,"We'll run our tests again, and confirm that our tests are passing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{style:{color:"green"}},"Passed!  - Failed:     0, Passed:     9, Skipped:     0, Total:     8, Duration: 91 ms - ShapeTracker.Tests.dll (net6.0)")),(0,a.kt)("h3",{id:"steps-6-and-7-1"},"Steps 6 and 7"),(0,a.kt)("p",null,"We can also confirm that all previous tests still pass and there are no opportunities for refactoring yet."),(0,a.kt)("h3",{id:"steps-8-and-9-1"},"Steps 8 and 9"),(0,a.kt)("p",null,"We'll commit our passing code and move onto the next simplest behavior."),(0,a.kt)("h2",{id:"testing-the-isosceles-triangle-path-in-the-checktype-method"},"Testing the ",(0,a.kt)("inlineCode",{parentName:"h2"},'"isosceles triangle"')," Path in the ",(0,a.kt)("inlineCode",{parentName:"h2"},"CheckType()")," Method"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"1--identify-the-simplest-possible-behavior-the-program-must-exhibit-2"},"1.  Identify the simplest possible behavior the program must exhibit."),(0,a.kt)("p",null,"The next behavior we want to handle is when a triangle is ",(0,a.kt)("inlineCode",{parentName:"p"},'"isosceles triangle"'),", which is when only two of the sides have the same length, but not the other."),(0,a.kt)("h3",{id:"2--write-a-coded-test-for-this-behavior-2"},"2.  Write a coded test for this behavior."),(0,a.kt)("p",null,"Here's our new test:"),(0,a.kt)("div",{class:"filename"},"ShapeTracker.Solution/ShapeTracker.Tests/ModelTests/TriangleTests.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.VisualStudio.TestTools.UnitTesting;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker.Tests\n{\n  [TestClass]\n  public class TriangleTests\n  {\n\n    ... // 9 tests omitted for brevity\n\n    [TestMethod]\n    public void CheckType_DeterminesWhenIsosceles_String()\n    {\n      // Arrange\n      Triangle isoscelesTri = new Triangle(5, 4, 4);\n      // Act\n      string triType = isoscelesTri.CheckType();\n      // Assert\n      Assert.AreEqual("isosceles triangle", triType);\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"3--before-coding-confirm-the-test-fails-2"},"3.  Before coding, confirm the test fails."),(0,a.kt)("p",null,"When we run ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet test")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests")," directory, we'll see we have a failed test, which confirms that we do not have any false positives."),(0,a.kt)("pre",null,(0,a.kt)("code",{style:{color:"red"}},"Failed CheckType_DeterminesWhenIsosceles_String [55 ms] Error Message: Assert.AreEqual failed. Expected:<isosceles>. Actual:<>. Stack Trace: at ShapeTracker.Tests.TriangleTests.CheckType_DeterminesWhenIsosceles_String() in C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ModelTests\\TriangleTests.cs:line 118 Failed!  - Failed:     1, Passed:     9, Skipped:     0, Total:    10, Duration: 197 ms - ShapeTracker.Tests.dll (net6.0)")),(0,a.kt)("h3",{id:"4--implement-the-behavior-with-the-least-amount-of-code-possible-2"},"4.  Implement the behavior with the least amount of code possible."),(0,a.kt)("p",null,"Implementing the behavior in code to get our test passing will be simple this time:"),(0,a.kt)("div",{class:"filename"},"ShapeTracker/Models/Triangle.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace ShapeTracker.Models\n{\n  public class Triangle\n  {\n    ... // other code omitted for brevity\n\n    public string CheckType()\n    {\n      if ((Side1 > (Side2 + _side3)) || (Side2 > (Side1 + _side3)) || (_side3 > (Side1 + Side2))) \n      {\n        return "not a triangle";\n      } \n      else if ((Side1 != Side2) && ((Side1 != _side3)) && ((Side2 != _side3))) \n      {\n        return "scalene triangle";\n      }\n      else \n      {\n        return "isosceles triangle";\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"We've simply updated our ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," statement to return ",(0,a.kt)("inlineCode",{parentName:"p"},'"isosceles triangle"'),". When we implement the last behavior (",(0,a.kt)("inlineCode",{parentName:"p"},'"equilateral triangle"'),"), we'll have to update this logic again. "),(0,a.kt)("h3",{id:"5--run-the-automated-test-to-confirm-it-passes-if-it-doesnt-revisit-step-4-4"},"5.  Run the automated test to confirm it passes. If it doesn't, revisit step 4."),(0,a.kt)("p",null,"We'll run our tests again, and confirm that our tests are passing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{style:{color:"green"}},"Passed!  - Failed:     0, Passed:     10, Skipped:     0, Total:     8, Duration: 91 ms - ShapeTracker.Tests.dll (net6.0)")),(0,a.kt)("h3",{id:"steps-6-and-7-2"},"Steps 6 and 7"),(0,a.kt)("p",null,"We can also confirm that all previous tests still pass and there are no opportunities for refactoring yet."),(0,a.kt)("h3",{id:"steps-8-and-9-2"},"Steps 8 and 9"),(0,a.kt)("p",null,"We'll commit our passing code and move onto the next simplest behavior."),(0,a.kt)("h2",{id:"testing-the-equilateral-triangle-path-in-the-checktype-method"},"Testing the ",(0,a.kt)("inlineCode",{parentName:"h2"},'"equilateral triangle"')," Path in the ",(0,a.kt)("inlineCode",{parentName:"h2"},"CheckType()")," Method"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"1--identify-the-simplest-possible-behavior-the-program-must-exhibit-3"},"1.  Identify the simplest possible behavior the program must exhibit."),(0,a.kt)("p",null,"The next behavior we want to handle is when a triangle is ",(0,a.kt)("inlineCode",{parentName:"p"},'"equilateral triangle"'),", which is when all three of the sides have the same length, but not the other."),(0,a.kt)("h3",{id:"2--write-a-coded-test-for-this-behavior-3"},"2.  Write a coded test for this behavior."),(0,a.kt)("p",null,"Here's our new test:"),(0,a.kt)("div",{class:"filename"},"ShapeTracker.Solution/ShapeTracker.Tests/ModelTests/TriangleTests.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.VisualStudio.TestTools.UnitTesting;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker.Tests\n{\n  [TestClass]\n  public class TriangleTests\n  {\n\n    ... // 10 tests omitted for brevity\n\n    [TestMethod]\n    public void CheckType_DeterminesWhenEquilateral_String()\n    {\n      // Arrange\n      Triangle equiTri = new Triangle(4, 4, 4);\n      // Act\n      string triType = equiTri.CheckType();\n      // Assert\n      Assert.AreEqual("equilateral triangle", triType);\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"3--before-coding-confirm-the-test-fails-3"},"3.  Before coding, confirm the test fails."),(0,a.kt)("p",null,"When we run ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet test")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests")," directory, we'll see we have a failed test, which confirms that we do not have any false positives."),(0,a.kt)("pre",null,(0,a.kt)("code",{style:{color:"red"}},"Failed CheckType_DeterminesWhenEquilateral_String [41 ms] Error Message: Assert.AreEqual failed. Expected:<equilateral>. Actual:<isosceles>. Stack Trace: at ShapeTracker.Tests.TriangleTests.CheckType_DeterminesWhenEquilateral_String() in C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ModelTests\\TriangleTests.cs:line 129 Failed!  - Failed:     1, Passed:    10, Skipped:     0, Total:    11, Duration: 147 ms - ShapeTracker.Tests.dll (net6.0)")),(0,a.kt)("h3",{id:"4--implement-the-behavior-with-the-least-amount-of-code-possible-3"},"4.  Implement the behavior with the least amount of code possible."),(0,a.kt)("p",null,"We'll need to update our branching to accommodate a new path for ",(0,a.kt)("inlineCode",{parentName:"p"},'"equilateral triangle"'),". Here's how we'll update our code in ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle.cs"),":"),(0,a.kt)("div",{class:"filename"},"ShapeTracker/Models/Triangle.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace ShapeTracker.Models\n{\n  public class Triangle\n  {\n    ... // other code omitted for brevity\n\n    public string CheckType()\n    {\n      if ((Side1 > (Side2 + _side3)) || (Side2 > (Side1 + _side3)) || (_side3 > (Side1 + Side2)))\n      {\n        return "not a triangle";\n      } \n      else if ((Side1 != Side2) && ((Side1 != _side3)) && ((Side2 != _side3))) \n      {\n        return "scalene triangle";\n      }  \n      else if ((Side1 == Side2) && (Side1 == _side3)) \n      {\n        return "equilateral triangle";\n      } \n      else \n      {\n        return "isosceles triangle";\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"It's easier to test for an equilateral triangle than an isosceles triangle, so we've left our ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," statement to return ",(0,a.kt)("inlineCode",{parentName:"p"},'"isosceles triangle"'),", and we've created a new ",(0,a.kt)("inlineCode",{parentName:"p"},"else if")," statement to check for equilateral triangles."),(0,a.kt)("h3",{id:"5--run-the-automated-test-to-confirm-it-passes-if-it-doesnt-revisit-step-4-5"},"5.  Run the automated test to confirm it passes. If it doesn't, revisit step 4."),(0,a.kt)("p",null,"Let's see if the code we added passes our test! "),(0,a.kt)("pre",null,(0,a.kt)("code",{style:{color:"green"}},"Passed!  - Failed:     0, Passed:     11, Skipped:     0, Total:     8, Duration: 91 ms - ShapeTracker.Tests.dll (net6.0)")),(0,a.kt)("p",null,"And it does! Sweet."),(0,a.kt)("h3",{id:"steps-6-and-7-3"},"Steps 6 and 7"),(0,a.kt)("p",null,"We can also confirm that all previous tests still pass and there are no opportunities for refactoring yet."),(0,a.kt)("h3",{id:"steps-8-and-9-3"},"Steps 8 and 9"),(0,a.kt)("p",null,"We'll commit our passing code and move onto the next simplest behavior. Up next, we'll write tests for static members and learn how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"CollectionAssert.AreEqual()")," assertion method from MSTest."))}c.isMDXComponent=!0}}]);