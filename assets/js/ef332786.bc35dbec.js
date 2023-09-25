"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[36015],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},h=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,g=p["".concat(l,".").concat(u)]||p[u]||c[u]||s;return n?i.createElement(g,a(a({ref:t},h),{},{components:n})):i.createElement(g,a({ref:t},h))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,a[1]=o;for(var d=2;d<s;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=n(87462),r=(n(67294),n(3905));const s={title:"7. Testing A Private Field through its Getter and Setter Methods",id:"testing_a_private_field_through_its_getter_and_setter_methods",slug:"testing_a_private_field_through_its_getter_and_setter_methods",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/5_tdd-and-debugging/0g_testing_private_field_through_getter_and_setter.md"},a=void 0,o={unversionedId:"c_and_net_classic/tdd-and-debugging/testing_a_private_field_through_its_getter_and_setter_methods",id:"c_and_net_classic/tdd-and-debugging/testing_a_private_field_through_its_getter_and_setter_methods",title:"7. Testing A Private Field through its Getter and Setter Methods",description:"In this lesson, we'll work on implementing the next simplest behavior for our Triangle logic, which is giving triangles a third side:",source:"@site/docs/c_and_net_classic/5_tdd-and-debugging/0g_testing_private_field_through_getter_and_setter.md",sourceDirName:"c_and_net_classic/5_tdd-and-debugging",slug:"/c_and_net_classic/tdd-and-debugging/testing_a_private_field_through_its_getter_and_setter_methods",permalink:"/lhtp/c_and_net_classic/tdd-and-debugging/testing_a_private_field_through_its_getter_and_setter_methods",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"7. Testing A Private Field through its Getter and Setter Methods",id:"testing_a_private_field_through_its_getter_and_setter_methods",slug:"testing_a_private_field_through_its_getter_and_setter_methods",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/5_tdd-and-debugging/0g_testing_private_field_through_getter_and_setter.md"},sidebar:"c_and_net_classic",previous:{title:"6. Testing An Auto-Implemented Property",permalink:"/lhtp/c_and_net_classic/tdd-and-debugging/testing_an_auto_implemented_property"},next:{title:"8. Testing A Method with Multiple Behaviors",permalink:"/lhtp/c_and_net_classic/tdd-and-debugging/testing_a_method_with_multiple_behaviors"}},l={},d=[{value:"Reference for the &quot;Red, Green, Refactor&quot; (RGR) Workflow",id:"reference-for-the-red-green-refactor-rgr-workflow",level:2},{value:"Testing the Private Field <code>_side3</code> through its Getter Method <code>GetSide3()</code>",id:"testing-the-private-field-_side3-through-its-getter-method-getside3",level:2},{value:"1.  Identify the simplest possible behavior the program must exhibit.",id:"1--identify-the-simplest-possible-behavior-the-program-must-exhibit",level:3},{value:"2.  Write a coded test for this behavior.",id:"2--write-a-coded-test-for-this-behavior",level:3},{value:"3. Before coding, confirm the test fails.",id:"3-before-coding-confirm-the-test-fails",level:3},{value:"4. Implement the behavior with the least amount of code possible.",id:"4-implement-the-behavior-with-the-least-amount-of-code-possible",level:3},{value:"5. Run the automated test to confirm it passes. If it doesn&#39;t, revisit step 4.",id:"5-run-the-automated-test-to-confirm-it-passes-if-it-doesnt-revisit-step-4",level:3},{value:"(Again) 4. Implement the behavior with the least amount of code possible.",id:"again-4-implement-the-behavior-with-the-least-amount-of-code-possible",level:3},{value:"5. Confirm the Test Passes, and 6. Confirm all previous tests still pass. If they don&#39;t, revisit step 4.",id:"5-confirm-the-test-passes-and-6-confirm-all-previous-tests-still-pass-if-they-dont-revisit-step-4",level:3},{value:"7.  Check if code can be refactored. If so, refactor and repeat step 6.",id:"7--check-if-code-can-be-refactored-if-so-refactor-and-repeat-step-6",level:3},{value:"8.  Commit your passing code.",id:"8--commit-your-passing-code",level:3},{value:"Testing the Private Field <code>_side3</code> through its Setter Method <code>SetSide3()</code>",id:"testing-the-private-field-_side3-through-its-setter-method-setside3",level:2},{value:"1.  Identify the simplest possible behavior the program must exhibit.",id:"1--identify-the-simplest-possible-behavior-the-program-must-exhibit-1",level:3},{value:"2.  Write a coded test for this behavior.",id:"2--write-a-coded-test-for-this-behavior-1",level:3},{value:"3.  Before coding, confirm the test fails.",id:"3--before-coding-confirm-the-test-fails",level:3},{value:"4.  Implement the behavior with the least amount of code possible.",id:"4--implement-the-behavior-with-the-least-amount-of-code-possible",level:3},{value:"Steps 5. and 6. Confirm the new test and all previous tests are still passing.",id:"steps-5-and-6-confirm-the-new-test-and-all-previous-tests-are-still-passing",level:3},{value:"7.  Check if code can be refactored. If so, refactor and repeat step 6.",id:"7--check-if-code-can-be-refactored-if-so-refactor-and-repeat-step-6-1",level:3},{value:"8.  Commit your passing code.",id:"8--commit-your-passing-code-1",level:3},{value:"9.  Repeat this process with the next simplest behavior.",id:"9--repeat-this-process-with-the-next-simplest-behavior",level:3}],h={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this lesson, we'll work on implementing the next simplest behavior for our ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," logic, which is giving triangles a third side:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We'll use the RGR workflow to test and create a private field called ",(0,r.kt)("inlineCode",{parentName:"li"},"_side3"),", which we'll access through the getter method ",(0,r.kt)("inlineCode",{parentName:"li"},"GetSide3()")," and the setter method ",(0,r.kt)("inlineCode",{parentName:"li"},"SetSide3()"),"."),(0,r.kt)("li",{parentName:"ul"},"We'll treat the get and set actions of the private field as two distinct behaviors, so we'll run through the steps of the RGR workflow twice: first we'll implement the getter method, then afterwards we'll implement the setter method."),(0,r.kt)("li",{parentName:"ul"},'When we write our tests, we\'ll use the organizational trick called "Arrange, Act, Assert" that we learned about in a previous lesson.')),(0,r.kt)("h2",{id:"reference-for-the-red-green-refactor-rgr-workflow"},'Reference for the "Red, Green, Refactor" (RGR) Workflow'),(0,r.kt)("hr",null),(0,r.kt)("p",null,'For reference, here\'s the "Red, Green, Refactor" (RGR) workflow we follow with TDD:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Identify the simplest possible behavior the program must exhibit."),(0,r.kt)("li",{parentName:"ol"},"Write a coded test for this behavior."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("font",{color:"red"},"Before coding, confirm the test fails.")),(0,r.kt)("li",{parentName:"ol"},"Implement the behavior with the least amount of code possible."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("font",{color:"green"},"Run the automated test to confirm it passes. If it doesn't, revisit step 4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("font",{color:"green"},"Confirm all previous tests still pass. If it doesn't, revisit step 4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("font",{color:"blue"},"Check if code can be refactored. If so, refactor and repeat step 6.")),(0,r.kt)("li",{parentName:"ol"},"Commit your passing code."),(0,r.kt)("li",{parentName:"ol"},"Repeat this process with the next simplest behavior.")),(0,r.kt)("h2",{id:"testing-the-private-field-_side3-through-its-getter-method-getside3"},"Testing the Private Field ",(0,r.kt)("inlineCode",{parentName:"h2"},"_side3")," through its Getter Method ",(0,r.kt)("inlineCode",{parentName:"h2"},"GetSide3()")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"1--identify-the-simplest-possible-behavior-the-program-must-exhibit"},"1.  Identify the simplest possible behavior the program must exhibit."),(0,r.kt)("p",null,"The next simplest behavior we'll tackle is creating a get action for the third side of a triangle. In terms of code, for our third side we'll create a private field called ",(0,r.kt)("inlineCode",{parentName:"p"},"_side3"),", and we'll need to create a getter method called ",(0,r.kt)("inlineCode",{parentName:"p"},"GetSide3()")," in order to access it."),(0,r.kt)("h3",{id:"2--write-a-coded-test-for-this-behavior"},"2.  Write a coded test for this behavior."),(0,r.kt)("p",null,"Here's what the test will look like for our ",(0,r.kt)("inlineCode",{parentName:"p"},"_side3")," get action. Notice that we are invoking the ",(0,r.kt)("inlineCode",{parentName:"p"},"GetSide3()")," getter method:"),(0,r.kt)("div",{class:"filename"},"ShapeTracker.Solution/ShapeTracker.Tests/ModelTests/TriangleTests.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.VisualStudio.TestTools.UnitTesting;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker.Tests\n{\n  [TestClass]\n  public class TriangleTests\n  {\n\n    ... // 5 tests omitted for brevity\n\n    [TestMethod]\n    public void GetSide3_ReturnsSide3_Int()\n    {\n      // Arrange\n      int length3 = 55;\n      Triangle newTriangle = new Triangle(2, 3, length3);\n      // Act\n      int result = newTriangle.GetSide3();\n      // Assert\n      Assert.AreEqual(length3, result);\n    }\n\n  }\n}\n")),(0,r.kt)("h3",{id:"3-before-coding-confirm-the-test-fails"},"3. Before coding, confirm the test fails."),(0,r.kt)("p",null,"If we run ",(0,r.kt)("inlineCode",{parentName:"p"},"$ dotnet test")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests")," directory, we'll get two compiler errors which confirm that our test fails and there are no false positives in our code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{style:{color:"red"}},"C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ModelTests\\TriangleTests.cs(69,34): error CS1729: 'Triangle' does not contain a constructor that takes 3 arguments [C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ShapeTracker.Tests.csproj] C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ModelTests\\TriangleTests.cs(71,32): error CS1061: 'Triangle' does not contain a definition for 'GetSide3' and no accessible extension method 'GetSide3' accepting a first argument of type 'Triangle' could be found (are you missing a using directive or an assembly reference?) [C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ShapeTracker.Tests.csproj]")),(0,r.kt)("p",null,"The first compiler error lets us know that our constructor can't take three arguments, even though we are using three arguments for our constructor in our new test."),(0,r.kt)("p",null,"The second compiler error lets us know that the ",(0,r.kt)("inlineCode",{parentName:"p"},"GetSide3()")," instance method that we're invoking in our new test doesn't exist within the ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," class. It asks us if we have forgotten to include a using directive, which implies that we have a ",(0,r.kt)("inlineCode",{parentName:"p"},"GetSide3()")," method defined in another namespace; but that's not our issue."),(0,r.kt)("h3",{id:"4-implement-the-behavior-with-the-least-amount-of-code-possible"},"4. Implement the behavior with the least amount of code possible."),(0,r.kt)("p",null,"Let's add just enough code to get beyond the compiler errors. We'll update our code in the following ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a private field called ",(0,r.kt)("inlineCode",{parentName:"li"},"_side3"),"."),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"length3")," as a parameter to our constructor and have it assigned as the value of our ",(0,r.kt)("inlineCode",{parentName:"li"},"_side3")," field."),(0,r.kt)("li",{parentName:"ul"},"Create a public getter method called ",(0,r.kt)("inlineCode",{parentName:"li"},"GetSide3()")," that returns the ",(0,r.kt)("inlineCode",{parentName:"li"},"_side3")," field.")),(0,r.kt)("div",{class:"filename"},"ShapeTracker/Models/Triangle.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ShapeTracker.Models\n{\n  public class Triangle\n  {\n    private int _side1;\n    public int Side1\n    {\n      get { return _side1; }\n      set { _side1 = value; }\n    }\n    public int Side2 { get; set; }\n    private int _side3;\n\n    public Triangle(int length1, int length2, int length3)\n    {\n      _side1 = length1;\n      Side2 = length2;\n      _side3 = length3;\n    }\n\n    public int GetSide3()\n    {\n      return _side3;\n    }\n  }\n}\n")),(0,r.kt)("h3",{id:"5-run-the-automated-test-to-confirm-it-passes-if-it-doesnt-revisit-step-4"},"5. Run the automated test to confirm it passes. If it doesn't, revisit step 4."),(0,r.kt)("p",null,"We're now ready to see if the code we implemented passes our new test."),(0,r.kt)("p",null,"When we run ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet run")," again, we get many compiler errors:"),(0,r.kt)("pre",null,(0,r.kt)("code",{style:{color:"red"}},"C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ModelTests\\TriangleTests.cs(12,34): error CS7036: There is no argument given that corresponds to the required formal parameter 'length3' of 'Triangle.Triangle(int, int, int)' [C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ShapeTracker.Tests.csproj] C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ModelTests\\TriangleTests.cs(21,34): error CS7036: There is no argument given that corresponds to the required formal parameter 'length3' of 'Triangle.Triangle(int, int, int)' [C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ShapeTracker.Tests.csproj] C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ModelTests\\TriangleTests.cs(32,34): error CS7036: There is no argument given that corresponds to the required formal parameter 'length3' of 'Triangle.Triangle(int, int, int)' [C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ShapeTracker.Tests.csproj] C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ModelTests\\TriangleTests.cs(45,34): error CS7036: There is no argument given that corresponds to the required formal parameter 'length3' of 'Triangle.Triangle(int, int, int)' [C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ShapeTracker.Tests.csproj] C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ModelTests\\TriangleTests.cs(56,34): error CS7036: There is no argument given that corresponds to the required formal parameter 'length3' of 'Triangle.Triangle(int, int, int)' [C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ShapeTracker.Tests.csproj]")),(0,r.kt)("p",null,"This is probably the most compiler errors we've gotten so far! Just like we saw before, these compiler errors are letting us know that we are not calling our ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle()")," constructor appropriately after we've updated it to have a third parameter. We're getting five errors for each of the five times we invoke the ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle()")," constructor in our test file ",(0,r.kt)("inlineCode",{parentName:"p"},"TriangleTests.cs")," without the (now) required third parameter. We need to revisit step 4 and implement more code to get our test to pass. "),(0,r.kt)("p",null,"Before we move on, remember this \u2014 if we resolve a compiler error only to get many, many more compiler errors, that does not automatically mean we're on the wrong track; it just means we've moved on to the next issue in our code."),(0,r.kt)("h3",{id:"again-4-implement-the-behavior-with-the-least-amount-of-code-possible"},"(Again) 4. Implement the behavior with the least amount of code possible."),(0,r.kt)("p",null,"Here's how we'll fix the tests in ",(0,r.kt)("inlineCode",{parentName:"p"},"TriangleTests.cs"),":"),(0,r.kt)("div",{class:"filename"},"ShapeTracker.Solution/ShapeTracker.Tests/ModelTests/TriangleTests.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.VisualStudio.TestTools.UnitTesting;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker.Tests\n{\n  [TestClass]\n  public class TriangleTests\n  {\n    [TestMethod]\n    public void TriangleConstructor_CreatesInstanceOfTriangle_Triangle()\n    {\n      Triangle newTriangle = new Triangle(2, 3, 8); // Updated!!\n      Assert.AreEqual(typeof(Triangle), newTriangle.GetType());\n    }\n\n    [TestMethod]\n    public void GetSide1_ReturnsSide1_Int()\n    {\n      // Arrange\n      int length1 = 3;\n      Triangle newTriangle = new Triangle(length1, 2, 8); // Updated!!\n      // Act\n      int result = newTriangle.Side1;\n      // Assert\n      Assert.AreEqual(length1, result);\n    }\n\n    [TestMethod]\n    public void SetSide1_SetsValueOfSide1_Void()\n    {\n      // Arrange\n      Triangle newTriangle = new Triangle(3, 3, 8); // Updated!!\n      int newLength1 = 44;\n      // Act\n      newTriangle.Side1 = newLength1;\n      // Assert\n      Assert.AreEqual(newLength1, newTriangle.Side1);\n    }\n\n    [TestMethod]\n    public void GetSide2_ReturnsSide2_Int()\n    {\n      // Arrange\n      int length2 = 3;\n      Triangle newTriangle = new Triangle(2, length2, 8); // Updated!!\n      // Act\n      int result = newTriangle.Side2;\n      // Assert\n      Assert.AreEqual(length2, result);\n    }\n\n    [TestMethod]\n    public void SetSide2_SetsValueOfSide2_Void()\n    {\n      // Arrange\n      Triangle newTriangle = new Triangle(3,4, 8); // Updated!!\n      int newLength2 = 6;\n      // Act\n      newTriangle.Side2 = newLength2;\n      // Assert\n      Assert.AreEqual(newLength2, newTriangle.Side2);\n    }\n\n    [TestMethod]\n    public void GetSide3_ReturnsSide3_Int()\n    {\n      // Arrange\n      int length3 = 55;\n      Triangle newTriangle = new Triangle(2, 3, length3);\n      // Act\n      int result = newTriangle.GetSide3();\n      // Assert\n      Assert.AreEqual(length3, result);\n    }\n  }\n}\n")),(0,r.kt)("h3",{id:"5-confirm-the-test-passes-and-6-confirm-all-previous-tests-still-pass-if-they-dont-revisit-step-4"},"5. Confirm the Test Passes, and 6. Confirm all previous tests still pass. If they don't, revisit step 4."),(0,r.kt)("p",null,"We can run ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet test")," again and confirm all our tests are passing now."),(0,r.kt)("pre",null,(0,r.kt)("code",{style:{color:"green"}},"Passed!  - Failed:     0, Passed:     6, Skipped:     0, Total:     2, Duration: 67 ms - ShapeTracker.Tests.dll (net6.0)")),(0,r.kt)("p",null,"Sweet! We now have 6 passing tests. "),(0,r.kt)("h3",{id:"7--check-if-code-can-be-refactored-if-so-refactor-and-repeat-step-6"},"7.  Check if code can be refactored. If so, refactor and repeat step 6."),(0,r.kt)("p",null,"Our code cannot be refactored at this time, since it is still very basic."),(0,r.kt)("h3",{id:"8--commit-your-passing-code"},"8.  Commit your passing code."),(0,r.kt)("p",null,'It\'s time to commit our passing code. The commit message this time will be "add _side3 get functionality + passing test".'),(0,r.kt)("p",null,"We're now ready for step 9: Repeat this process with the next simplest behavior."),(0,r.kt)("h2",{id:"testing-the-private-field-_side3-through-its-setter-method-setside3"},"Testing the Private Field ",(0,r.kt)("inlineCode",{parentName:"h2"},"_side3")," through its Setter Method ",(0,r.kt)("inlineCode",{parentName:"h2"},"SetSide3()")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"1--identify-the-simplest-possible-behavior-the-program-must-exhibit-1"},"1.  Identify the simplest possible behavior the program must exhibit."),(0,r.kt)("p",null,"The next simplest behavior we want to test for is the ability to give the ",(0,r.kt)("inlineCode",{parentName:"p"},"_side3")," field a new value. To do this, we'll need to test and create a setter method called ",(0,r.kt)("inlineCode",{parentName:"p"},"SetSide3()"),"."),(0,r.kt)("h3",{id:"2--write-a-coded-test-for-this-behavior-1"},"2.  Write a coded test for this behavior."),(0,r.kt)("p",null,"Here's our new test:"),(0,r.kt)("div",{class:"filename"},"ShapeTracker.Solution/ShapeTracker.Tests/ModelTests/TriangleTests.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.VisualStudio.TestTools.UnitTesting;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker.Tests\n{\n  [TestClass]\n  public class TriangleTests\n  {\n\n    ... // previous 6 tests omitted for brevity.\n\n    [TestMethod]\n    public void SetSide3_SetsValueOfSide3_Void()\n    {\n      // Arrange\n      Triangle newTriangle = new Triangle(3, 4, 8);\n      int newLength3 = 6;\n      // Act\n      newTriangle.SetSide3(newLength3);\n      // Assert\n      Assert.AreEqual(newLength3, newTriangle.GetSide3());\n    }\n\n  }\n}\n")),(0,r.kt)("h3",{id:"3--before-coding-confirm-the-test-fails"},"3.  Before coding, confirm the test fails."),(0,r.kt)("p",null,"Let's confirm that our test fails by running ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet test")," within the ",(0,r.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{style:{color:"red"}},"C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ModelTests\\TriangleTests.cs(83,19): error CS1061: 'Triangle' does not contain a definition for 'SetSide3' and no accessible extension method 'SetSide3' accepting a first argument of type 'Triangle' could be found (are you missing a using directive or an assembly reference?) [C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ShapeTracker.Tests.csproj]")),(0,r.kt)("p",null,"We get a compiler error, which counts as a test failure. This compiler error lets us know that the ",(0,r.kt)("inlineCode",{parentName:"p"},"SetSide3()")," instance method that we're invoking in our new test doesn't exist within the ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," class. It asks us if we have forgotten to include a using directive, which implies that we have a ",(0,r.kt)("inlineCode",{parentName:"p"},"SetSide3()")," method defined in another namespace; but that's not our issue."),(0,r.kt)("h3",{id:"4--implement-the-behavior-with-the-least-amount-of-code-possible"},"4.  Implement the behavior with the least amount of code possible."),(0,r.kt)("p",null,"Let's create the missing ",(0,r.kt)("inlineCode",{parentName:"p"},"SetSide3()")," setter method within the ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," class:"),(0,r.kt)("div",{class:"filename"},"ShapeTracker/Models/Triangle.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ShapeTracker.Models\n{\n  public class Triangle\n  {\n    private int _side1;\n    public int Side1\n    {\n      get { return _side1; }\n      set { _side1 = value; }\n    }\n    public int Side2 { get; set; }\n    private int _side3;\n\n    public Triangle(int length1, int length2, int length3)\n    {\n      _side1 = length1;\n      Side2 = length2;\n      _side3 = length3;\n    }\n\n    public int GetSide3()\n    {\n      return _side3;\n    }\n\n    public void SetSide3(int newValue)\n    {\n      _side3 = newValue;\n    }\n  }\n}\n")),(0,r.kt)("h3",{id:"steps-5-and-6-confirm-the-new-test-and-all-previous-tests-are-still-passing"},"Steps 5. and 6. Confirm the new test and all previous tests are still passing."),(0,r.kt)("p",null,"With the previous update, we can confirm that all of our tests are now passing: "),(0,r.kt)("pre",null,(0,r.kt)("code",{style:{color:"green"}},"Passed!  - Failed:     0, Passed:     7, Skipped:     0, Total:     2, Duration: 67 ms - ShapeTracker.Tests.dll (net6.0)")),(0,r.kt)("h3",{id:"7--check-if-code-can-be-refactored-if-so-refactor-and-repeat-step-6-1"},"7.  Check if code can be refactored. If so, refactor and repeat step 6."),(0,r.kt)("p",null,"We're still in the early stages of development, so we won't see an opportunity for refactoring for a while."),(0,r.kt)("h3",{id:"8--commit-your-passing-code-1"},"8.  Commit your passing code."),(0,r.kt)("p",null,'Commit your passing code. We\'ll use the commit message "add _side3 set functionality + passing test".'),(0,r.kt)("h3",{id:"9--repeat-this-process-with-the-next-simplest-behavior"},"9.  Repeat this process with the next simplest behavior."),(0,r.kt)("p",null,"We're done with our constructor, field, property, and auto-implemented property. In the next lesson, we'll move on to working on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle.CheckType()")," instance method."))}c.isMDXComponent=!0}}]);