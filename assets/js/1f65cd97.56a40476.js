"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[74550],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,m=c["".concat(l,".").concat(u)]||c[u]||h[u]||a;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"Testing A Private Field through its Public Property and Organizing Tests with Arrange, Act, Assert",id:"testing-a-private-field-through-its-public-property-and-organizing-tests-with-arrange-act-assert",slug:"testing-a-private-field-through-its-public-property-and-organizing-tests-with-arrange-act-assert",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0e_testing_property_and_arrange_act_assert.md"},s=void 0,o={unversionedId:"c-and-net-part-time/tdd-and-debugging/testing-a-private-field-through-its-public-property-and-organizing-tests-with-arrange-act-assert",id:"c-and-net-part-time/tdd-and-debugging/testing-a-private-field-through-its-public-property-and-organizing-tests-with-arrange-act-assert",title:"Testing A Private Field through its Public Property and Organizing Tests with Arrange, Act, Assert",description:"In this lesson, we'll begin working on the next simplest behavior our Triangle logic should have",source:"@site/docs/c-and-net-part-time/5_tdd-and-debugging/0e-testing-property-and-arrange-act-assert.md",sourceDirName:"c-and-net-part-time/5_tdd-and-debugging",slug:"/c-and-net-part-time/tdd-and-debugging/testing-a-private-field-through-its-public-property-and-organizing-tests-with-arrange-act-assert",permalink:"/c-and-net-part-time/tdd-and-debugging/testing-a-private-field-through-its-public-property-and-organizing-tests-with-arrange-act-assert",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Testing A Private Field through its Public Property and Organizing Tests with Arrange, Act, Assert",id:"testing-a-private-field-through-its-public-property-and-organizing-tests-with-arrange-act-assert",slug:"testing-a-private-field-through-its-public-property-and-organizing-tests-with-arrange-act-assert",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0e_testing_property_and_arrange_act_assert.md"},sidebar:"c-and-net-part-time",previous:{title:"Using the RGR Workflow to Write our First Test for the Constructor",permalink:"/c-and-net-part-time/tdd-and-debugging/using-the-rgr-workflow-to-write-our-first-test-for-the-constructor"},next:{title:"Testing An Auto-Implemented Property",permalink:"/c-and-net-part-time/tdd-and-debugging/testing-an-auto-implemented-property"}},l={},p=[{value:"Reference for the &quot;Red, Green, Refactor&quot; (RGR) Workflow",id:"reference-for-the-red-green-refactor-rgr-workflow",level:2},{value:"Testing the Private Field <code>_side1</code> through its Public Property <code>Side1</code>",id:"testing-the-private-field-_side1-through-its-public-property-side1",level:2},{value:"1.  Identify the simplest possible behavior the program must exhibit.",id:"1--identify-the-simplest-possible-behavior-the-program-must-exhibit",level:3},{value:"2.  Write a coded test for this behavior.",id:"2--write-a-coded-test-for-this-behavior",level:3},{value:"Arrange, Act, Assert",id:"arrange-act-assert",level:3},{value:"3. Before coding, confirm the test fails.",id:"3-before-coding-confirm-the-test-fails",level:3},{value:"4. Implement the behavior with the least amount of code possible.",id:"4-implement-the-behavior-with-the-least-amount-of-code-possible",level:3},{value:"5. Run the automated test to confirm it passes. If it doesn&#39;t, revisit step 4.",id:"5-run-the-automated-test-to-confirm-it-passes-if-it-doesnt-revisit-step-4",level:3},{value:"(Again) 4. Implement the behavior with the least amount of code possible.",id:"again-4-implement-the-behavior-with-the-least-amount-of-code-possible",level:3},{value:"5. Confirm the Test Passes, and 6. Confirm all previous tests still pass. If they don&#39;t, revisit step 4.",id:"5-confirm-the-test-passes-and-6-confirm-all-previous-tests-still-pass-if-they-dont-revisit-step-4",level:3},{value:"7.  Check if code can be refactored. If so, refactor and repeat step 6.",id:"7--check-if-code-can-be-refactored-if-so-refactor-and-repeat-step-6",level:3},{value:"8.  Commit your passing code.",id:"8--commit-your-passing-code",level:3},{value:"1.  Identify the simplest possible behavior the program must exhibit.",id:"1--identify-the-simplest-possible-behavior-the-program-must-exhibit-1",level:3},{value:"2.  Write a coded test for this behavior.",id:"2--write-a-coded-test-for-this-behavior-1",level:3},{value:"3.  Before coding, confirm the test fails.",id:"3--before-coding-confirm-the-test-fails",level:3},{value:"4.  Implement the behavior with the least amount of code possible.",id:"4--implement-the-behavior-with-the-least-amount-of-code-possible",level:3},{value:"Steps 5. and 6. Confirm the new test and all previous tests are still passing.",id:"steps-5-and-6-confirm-the-new-test-and-all-previous-tests-are-still-passing",level:3},{value:"7.  Check if code can be refactored. If so, refactor and repeat step 6.",id:"7--check-if-code-can-be-refactored-if-so-refactor-and-repeat-step-6-1",level:3},{value:"8.  Commit your passing code.",id:"8--commit-your-passing-code-1",level:3},{value:"9.  Repeat this process with the next simplest behavior.",id:"9--repeat-this-process-with-the-next-simplest-behavior",level:3}],d={toc:p},c="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this lesson, we'll begin working on the next simplest behavior our ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," logic should have: three sides. Since the ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," logic we create now will mirror exactly the ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," logic we created at the end of the last pre-work section, we'll test for the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Testing the private field ",(0,i.kt)("inlineCode",{parentName:"li"},"_side1")," through its public property ",(0,i.kt)("inlineCode",{parentName:"li"},"Side1"),"."),(0,i.kt)("li",{parentName:"ul"},"Testing the auto-implemented public property ",(0,i.kt)("inlineCode",{parentName:"li"},"Side2"),"."),(0,i.kt)("li",{parentName:"ul"},"Testing the private field ",(0,i.kt)("inlineCode",{parentName:"li"},"_side3")," through its getter and setter methods.")),(0,i.kt)("p",null,"We'll tackle each of the above behaviors in multiple lessons. This lesson will focus on two main topics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using the RGR workflow to test and create the private field ",(0,i.kt)("inlineCode",{parentName:"li"},"_side1")," through its public property ",(0,i.kt)("inlineCode",{parentName:"li"},"Side1"),"."),(0,i.kt)("li",{parentName:"ul"},'Using an organizational trick within our tests called "Arrange, Act, Assert". ')),(0,i.kt)("h2",{id:"reference-for-the-red-green-refactor-rgr-workflow"},'Reference for the "Red, Green, Refactor" (RGR) Workflow'),(0,i.kt)("hr",null),(0,i.kt)("p",null,'For reference, here\'s the "Red, Green, Refactor" (RGR) workflow we follow with TDD:'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Identify the simplest possible behavior the program must exhibit."),(0,i.kt)("li",{parentName:"ol"},"Write a coded test for this behavior."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("font",{color:"red"},"Before coding, confirm the test fails.")),(0,i.kt)("li",{parentName:"ol"},"Implement the behavior with the least amount of code possible."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("font",{color:"green"},"Run the automated test to confirm it passes. If it doesn't, revisit step 4.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("font",{color:"green"},"Confirm all previous tests still pass. If it doesn't, revisit step 4.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("font",{color:"blue"},"Check if code can be refactored. If so, refactor and repeat step 6.")),(0,i.kt)("li",{parentName:"ol"},"Commit your passing code."),(0,i.kt)("li",{parentName:"ol"},"Repeat this process with the next simplest behavior.")),(0,i.kt)("h2",{id:"testing-the-private-field-_side1-through-its-public-property-side1"},"Testing the Private Field ",(0,i.kt)("inlineCode",{parentName:"h2"},"_side1")," through its Public Property ",(0,i.kt)("inlineCode",{parentName:"h2"},"Side1")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"1--identify-the-simplest-possible-behavior-the-program-must-exhibit"},"1.  Identify the simplest possible behavior the program must exhibit."),(0,i.kt)("p",null,"The next behavior we want to implement in our ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," class is for triangle objects to save three values to represent the three sides of a triangle. This behavior can actually be broken into three: we can consider implementing one side as one behavior. "),(0,i.kt)("p",null,"However, each side of the triangle can further be broken down into two behaviors: implementing a get action and a set action. We distinguish between the set and get behavior because they are different, and including a set behavior is not required."),(0,i.kt)("p",null,"So the next simplest behavior we'll tackle is creating a get action for the first side of a triangle. In terms of code, we'll create a private field called ",(0,i.kt)("inlineCode",{parentName:"p"},"_side1"),", which we'll access through the ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," action of a public property called ",(0,i.kt)("inlineCode",{parentName:"p"},"Side1"),". "),(0,i.kt)("h3",{id:"2--write-a-coded-test-for-this-behavior"},"2.  Write a coded test for this behavior."),(0,i.kt)("p",null,"Here's the test we'll write, which we'll add just below the test for the constructor:"),(0,i.kt)("div",{class:"filename"},"ShapeTracker.Solution/ShapeTracker.Tests/ModelTests/TriangleTests.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.VisualStudio.TestTools.UnitTesting;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker.Tests\n{\n  [TestClass]\n  public class TriangleTests\n  {\n\n    [TestMethod]\n    public void TriangleConstructor_CreatesInstanceOfTriangle_Triangle()\n    {\n      Triangle newTriangle = new Triangle();\n      Assert.AreEqual(typeof(Triangle), newTriangle.GetType());\n    }\n\n    [TestMethod]\n    public void GetSide1_ReturnsSide1_Int()\n    {\n      int length1 = 3;\n      Triangle newTriangle = new Triangle(length1);\n      int result = newTriangle.Side1;\n      Assert.AreEqual(length1, result);\n    }\n\n  }\n}\n")),(0,i.kt)("p",null,"We've created a new test method called ",(0,i.kt)("inlineCode",{parentName:"p"},"GetSide1_ReturnsSide1_Int"),". Getting the value of a property on an ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," may seem trivial. However, in order to get this test to pass, we'll need to create the public  property, the private field, and also update our constructor. It makes sense to test our property and getter method so we know it's working properly, especially if we utilize custom ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," logic."),(0,i.kt)("p",null,"Within the test method we do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," called ",(0,i.kt)("inlineCode",{parentName:"p"},"length1"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," object, passing in the ",(0,i.kt)("inlineCode",{parentName:"p"},"length1")," value.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Record the result of retrieving the ",(0,i.kt)("inlineCode",{parentName:"p"},"Side1")," property of ",(0,i.kt)("inlineCode",{parentName:"p"},"newTriangle"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Confirm the description retrieved from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," object matches the ",(0,i.kt)("inlineCode",{parentName:"p"},"length1")," string provided to the constructor."))),(0,i.kt)("h3",{id:"arrange-act-assert"},"Arrange, Act, Assert"),(0,i.kt)("p",null,"This test is more complex than our previous tests. Thankfully, there's an easy organizational trick that helps demystify this process and keep our tests clean. It's called ",(0,i.kt)("strong",{parentName:"p"},'"Arrange, Act, Assert"'),". With this organizational method, we break our tests down into three stages:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Arrange"),": We gather, declare and create all necessary components for the test. In the test above, we create ",(0,i.kt)("inlineCode",{parentName:"p"},"length1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"newTriangle"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Act"),": We invoke the functionality we're testing, often by calling a method or retrieving a property. In the test above, we call ",(0,i.kt)("inlineCode",{parentName:"p"},"newTriangle.Side1;"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Assert"),": We confirm the functionality works as anticipated by comparing its actual output with the anticipated output. This is when we call ",(0,i.kt)("inlineCode",{parentName:"p"},"Assert.AreEqual()"),"."))),(0,i.kt)("p",null,'Let\'s take one more look at our test. This time, we add comments to show how we use "Arrange, Act, Assert."'),(0,i.kt)("div",{class:"filename"},"ShapeTracker.Solution/ShapeTracker.Tests/ModelTests/TriangleTests.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"...\n\n    [TestMethod]\n    public void GetSide1_ReturnsSide1_Int()\n    {\n      // Arrange\n      int length1 = 3;\n      Triangle newTriangle = new Triangle(length1);\n      // Act\n      int result = newTriangle.Side1;\n      // Assert\n      Assert.AreEqual(length1, result);\n    }\n\n...\n")),(0,i.kt)("p",null,"We recommend following this same organizational process in your own tests throughout the course."),(0,i.kt)("h3",{id:"3-before-coding-confirm-the-test-fails"},"3. Before coding, confirm the test fails."),(0,i.kt)("p",null,"If we run ",(0,i.kt)("inlineCode",{parentName:"p"},"$ dotnet test")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests")," directory, we'll see errors:"),(0,i.kt)("pre",null,(0,i.kt)("code",{style:{color:"red"}},"C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ModelTests\\TriangleTests.cs(21,34): error CS1729: 'Triangle' does not contain a constructor that takes 1 arguments [C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ShapeTracker.Tests.csproj] C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ModelTests\\TriangleTests.cs(23,32): error CS1061: 'Triangle' does not contain a definition for 'Side1' and no accessible extension method 'Side1' accepting a first argument of type 'Triangle' could be found (are you missing a using directive or an assembly reference?) [C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ShapeTracker.Tests.csproj]")),(0,i.kt)("p",null,"This isn't actually a test failure message \u2014 it's a ",(0,i.kt)("strong",{parentName:"p"},"compiler error")," because the ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," class doesn't have a constructor with a ",(0,i.kt)("inlineCode",{parentName:"p"},"Side1")," property. As a result, our test won't even run. However, for C# this compiler error is enough of a confirmation that our test does not have any false positives, so we can move onto the next step within the RGR workflow."),(0,i.kt)("h3",{id:"4-implement-the-behavior-with-the-least-amount-of-code-possible"},"4. Implement the behavior with the least amount of code possible."),(0,i.kt)("p",null,"Let's add just enough code to get beyond the compiler error. Let's update our code in the following ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a private field called ",(0,i.kt)("inlineCode",{parentName:"li"},"_side1"),"."),(0,i.kt)("li",{parentName:"ul"},"Create a public property called ",(0,i.kt)("inlineCode",{parentName:"li"},"Side1")," with a get action defined."),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"length1")," as a parameter to our constructor and have it assigned as the value of our ",(0,i.kt)("inlineCode",{parentName:"li"},"Side1")," property.")),(0,i.kt)("div",{class:"filename"},"ShapeTracker/Models/Triangle.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ShapeTracker.Models\n{\n  public class Triangle\n  {\n    private int _side1;\n    public int Side1\n    {\n      get { return _side1; }\n    }\n\n    public Triangle(int length1)\n    {\n      _side1 = length1;\n    }\n  }\n}\n")),(0,i.kt)("h3",{id:"5-run-the-automated-test-to-confirm-it-passes-if-it-doesnt-revisit-step-4"},"5. Run the automated test to confirm it passes. If it doesn't, revisit step 4."),(0,i.kt)("p",null,"We're now ready to see if the code we implemented passes our new test. "),(0,i.kt)("p",null,"When we run ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet run")," again, we get another compiler error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{style:{color:"red"}},"C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ModelTests\\TriangleTests.cs(12,34): error CS7036: There is no argument given that corresponds to the required formal parameter 'length1' of 'Triangle.Triangle(int)' [C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ShapeTracker.Tests.csproj]")),(0,i.kt)("p",null,"If we read the compiler error, we can see there's an issue on line 12 of ",(0,i.kt)("inlineCode",{parentName:"p"},"TriangleTests.cs"),". Line 12 is when we call the ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," constructor in our first test: ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle newTriangle = new Triangle();"),". Our ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," constructor now expects an argument that corresponds to the ",(0,i.kt)("inlineCode",{parentName:"p"},"length1")," parameter. We need to revisit step 4 and implement more code to get our test to pass. "),(0,i.kt)("h3",{id:"again-4-implement-the-behavior-with-the-least-amount-of-code-possible"},"(Again) 4. Implement the behavior with the least amount of code possible."),(0,i.kt)("p",null,"Here's how we'll update the first test in ",(0,i.kt)("inlineCode",{parentName:"p"},"TriangleTests.cs"),":"),(0,i.kt)("div",{class:"filename"},"ShapeTracker.Solution/ShapeTracker.Tests/ModelTests/TriangleTests.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"...\n\n    [TestMethod]\n    public void TriangleConstructor_CreatesInstanceOfTriangle_Triangle()\n    {\n      Triangle newTriangle = new Triangle(2); // Updated!\n      Assert.AreEqual(typeof(Triangle), newTriangle.GetType());\n    }\n\n...\n")),(0,i.kt)("h3",{id:"5-confirm-the-test-passes-and-6-confirm-all-previous-tests-still-pass-if-they-dont-revisit-step-4"},"5. Confirm the Test Passes, and 6. Confirm all previous tests still pass. If they don't, revisit step 4."),(0,i.kt)("p",null,"We can run ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet test")," again and confirm all our tests are passing now."),(0,i.kt)("pre",null,(0,i.kt)("code",{style:{color:"green"}},"Passed!  - Failed:     0, Passed:     2, Skipped:     0, Total:     2, Duration: 67 ms - ShapeTracker.Tests.dll (net6.0)")),(0,i.kt)("p",null,'When we\'re following "Red, Green, Refactor" we should be identifying behaviors that ',(0,i.kt)("strong",{parentName:"p"},"remain true for the life of the program"),". Ideally, we should rarely have to go back and edit previous tests. In fact, editing tests to make them pass can be dangerous. We don't want to risk creating falsely-passing tests. However, as applications grow in size, it's occasionally required to edit previous tests. In particular a class's constructor is likely to change a lot until the class logic is done. "),(0,i.kt)("h3",{id:"7--check-if-code-can-be-refactored-if-so-refactor-and-repeat-step-6"},"7.  Check if code can be refactored. If so, refactor and repeat step 6."),(0,i.kt)("p",null,"Our code cannot be refactored at this time, since it is still very basic."),(0,i.kt)("h3",{id:"8--commit-your-passing-code"},"8.  Commit your passing code."),(0,i.kt)("p",null,'Time to commit our passing code. The commit message this time will be "add Side1 get functionality + passing test".'),(0,i.kt)("p",null,"Remember that you can change the wording of your last commit with the command ",(0,i.kt)("inlineCode",{parentName:"p"},"git commit --amend"),"."),(0,i.kt)("p",null,"We're now ready for step 9: Repeat this process with the next simplest behavior."),(0,i.kt)("h3",{id:"1--identify-the-simplest-possible-behavior-the-program-must-exhibit-1"},"1.  Identify the simplest possible behavior the program must exhibit."),(0,i.kt)("p",null,"We want to be able to get and set the value of our ",(0,i.kt)("inlineCode",{parentName:"p"},"_side1")," private field, so the next simplest behavior we want to test for is adding a ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," action to our public ",(0,i.kt)("inlineCode",{parentName:"p"},"Side1")," property."),(0,i.kt)("h3",{id:"2--write-a-coded-test-for-this-behavior-1"},"2.  Write a coded test for this behavior."),(0,i.kt)("p",null,"Here's our new test. Note that we don't have to include the commends ",(0,i.kt)("inlineCode",{parentName:"p"},"// Arrage"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"// Act"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"// Assert"),":"),(0,i.kt)("div",{class:"filename"},"ShapeTracker.Solution/ShapeTracker.Tests/ModelTests/TriangleTests.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.VisualStudio.TestTools.UnitTesting;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker.Tests\n{\n  [TestClass]\n  public class TriangleTests\n  {\n\n    ... // previous 2 tests omitted for brevity.\n\n    [TestMethod]\n    public void SetSide1_SetsValueOfSide1_Void()\n    {\n      // Arrange\n      Triangle newTriangle = new Triangle(3);\n      int newLength1 = 44;\n      // Act\n      newTriangle.Side1 = newLength1;\n      // Assert\n      Assert.AreEqual(newLength1, newTriangle.Side1);\n    }\n\n  }\n}\n")),(0,i.kt)("h3",{id:"3--before-coding-confirm-the-test-fails"},"3.  Before coding, confirm the test fails."),(0,i.kt)("p",null,"Let's confirm that our test fails by running ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet test")," within the ",(0,i.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{style:{color:"red"}},"C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ModelTests\\TriangleTests.cs(35,7): error CS0200: Property or indexer 'Triangle.Side1' cannot be assigned to -- it is read only [C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ShapeTracker.Tests.csproj]")),(0,i.kt)("p",null,"We get a compiler error, which counts as a test failure. The error clearly lets us know that we cannot assign a value to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Side1")," property."),(0,i.kt)("h3",{id:"4--implement-the-behavior-with-the-least-amount-of-code-possible"},"4.  Implement the behavior with the least amount of code possible."),(0,i.kt)("p",null,"We'll add a ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," action to our public ",(0,i.kt)("inlineCode",{parentName:"p"},"Side1")," property, which will handle assigning the private field ",(0,i.kt)("inlineCode",{parentName:"p"},"_side1")," a value."),(0,i.kt)("div",{class:"filename"},"ShapeTracker/Models/Triangle.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ShapeTracker.Models\n{\n  public class Triangle\n  {\n    private int _side1;\n    public int Side1\n    {\n      get { return _side1; }\n      set { _side1 = value; }\n    }\n\n    public Triangle(int length1)\n    {\n      _side1 = length1;\n    }\n  }\n}\n")),(0,i.kt)("h3",{id:"steps-5-and-6-confirm-the-new-test-and-all-previous-tests-are-still-passing"},"Steps 5. and 6. Confirm the new test and all previous tests are still passing."),(0,i.kt)("p",null,"With the previous update, we can confirm that all of our tests are now passing: "),(0,i.kt)("pre",null,(0,i.kt)("code",{style:{color:"green"}},"Passed!  - Failed:     0, Passed:     3, Skipped:     0, Total:     2, Duration: 67 ms - ShapeTracker.Tests.dll (net6.0)")),(0,i.kt)("h3",{id:"7--check-if-code-can-be-refactored-if-so-refactor-and-repeat-step-6-1"},"7.  Check if code can be refactored. If so, refactor and repeat step 6."),(0,i.kt)("p",null,"We're still in the early stages of development, so we won't see an opportunity for refactoring for a while."),(0,i.kt)("h3",{id:"8--commit-your-passing-code-1"},"8.  Commit your passing code."),(0,i.kt)("p",null,'Commit your passing code. We\'ll use the commit message "add passing test, code for Triangle.Side1 SET".'),(0,i.kt)("h3",{id:"9--repeat-this-process-with-the-next-simplest-behavior"},"9.  Repeat this process with the next simplest behavior."),(0,i.kt)("p",null,"We've completed our get and set behavior for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Side1")," property and private ",(0,i.kt)("inlineCode",{parentName:"p"},"_side1")," field. We've also updated the constructor accordingly. In the next lesson, we'll move on to the next simplest behavior."))}h.isMDXComponent=!0}}]);