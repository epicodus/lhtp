"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[61695],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),c=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,m=p["".concat(o,".").concat(u)]||p[u]||h[u]||s;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<s;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},20713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const s={title:"Part 1: Testing Static Class Members and Collections",id:"part_1_testing_static_class_members_and_collections",slug:"part_1_testing_static_class_members_and_collections",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0i_testing_static_members_and_collections.md"},r=void 0,l={unversionedId:"c_and_net_classic/tdd-and-debugging/part_1_testing_static_class_members_and_collections",id:"c_and_net_classic/tdd-and-debugging/part_1_testing_static_class_members_and_collections",title:"Part 1: Testing Static Class Members and Collections",description:"When we first created our C# Shape Tracker, we made sure to include a private static field called instances that is a list that stores all Triangle instances ever made. We also made a getter method and setter method that would allow us to access and manage instances: GetAll() and ClearAll(). In this lesson, we're going to test and create this same logic. In the process, we'll learn how to make assertions for collections using the static CollectionAssert.AreEqual() method from MSTest.",source:"@site/docs/c_and_net_classic/5_tdd-and-debugging/0i_testing_static_members_and_collections.md",sourceDirName:"c_and_net_classic/5_tdd-and-debugging",slug:"/c_and_net_classic/tdd-and-debugging/part_1_testing_static_class_members_and_collections",permalink:"/c_and_net_classic/tdd-and-debugging/part_1_testing_static_class_members_and_collections",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Part 1: Testing Static Class Members and Collections",id:"part_1_testing_static_class_members_and_collections",slug:"part_1_testing_static_class_members_and_collections",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0i_testing_static_members_and_collections.md"},sidebar:"c_and_net_classic",previous:{title:"Testing A Method with Multiple Behaviors",permalink:"/c_and_net_classic/tdd-and-debugging/testing_a_method_with_multiple_behaviors"},next:{title:"Part 2: Adding a Teardown Method and Completing the Tests for Static Class Members",permalink:"/c_and_net_classic/tdd-and-debugging/part_2_adding_a_teardown_method_and_completing_the_tests_for_static_class_members"}},o={},c=[{value:"Reference for the &quot;Red, Green, Refactor&quot; (RGR) Workflow",id:"reference-for-the-red-green-refactor-rgr-workflow",level:2},{value:"Testing the Private Static Field <code>_instances</code> through its Getter Method <code>GetAll()</code>",id:"testing-the-private-static-field-_instances-through-its-getter-method-getall",level:2},{value:"1.  Identify the simplest possible behavior the program must exhibit.",id:"1--identify-the-simplest-possible-behavior-the-program-must-exhibit",level:3},{value:"2.  Write a coded test for this behavior.",id:"2--write-a-coded-test-for-this-behavior",level:3},{value:"3. Before coding, confirm the test fails.",id:"3-before-coding-confirm-the-test-fails",level:3},{value:"4. Implement the behavior with the least amount of code possible.",id:"4-implement-the-behavior-with-the-least-amount-of-code-possible",level:3},{value:"5. Run the automated test to confirm it passes. If it doesn&#39;t, revisit step 4.",id:"5-run-the-automated-test-to-confirm-it-passes-if-it-doesnt-revisit-step-4",level:3}],d={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When we first created our C# Shape Tracker, we made sure to include a private ",(0,a.kt)("strong",{parentName:"p"},"static")," field called ",(0,a.kt)("inlineCode",{parentName:"p"},"_instances")," that is a list that stores all ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," instances ever made. We also made a getter method and setter method that would allow us to access and manage ",(0,a.kt)("inlineCode",{parentName:"p"},"_instances"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"GetAll()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ClearAll()"),". In this lesson, we're going to test and create this same logic. In the process, we'll learn how to make assertions for collections using the static ",(0,a.kt)("inlineCode",{parentName:"p"},"CollectionAssert.AreEqual()")," method from MSTest."),(0,a.kt)("p",null,"However, we'll quickly hit a roadblock that we'll need to resolve before we can complete our Shape Tracker logic! "),(0,a.kt)("h2",{id:"reference-for-the-red-green-refactor-rgr-workflow"},'Reference for the "Red, Green, Refactor" (RGR) Workflow'),(0,a.kt)("hr",null),(0,a.kt)("p",null,'For reference, here\'s the "Red, Green, Refactor" (RGR) workflow we follow with TDD:'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Identify the simplest possible behavior the program must exhibit."),(0,a.kt)("li",{parentName:"ol"},"Write a coded test for this behavior."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("font",{color:"red"},"Before coding, confirm the test fails.")),(0,a.kt)("li",{parentName:"ol"},"Implement the behavior with the least amount of code possible."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("font",{color:"green"},"Run the automated test to confirm it passes. If it doesn't, revisit step 4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("font",{color:"green"},"Confirm all previous tests still pass. If it doesn't, revisit step 4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("font",{color:"blue"},"Check if code can be refactored. If so, refactor and repeat step 6.")),(0,a.kt)("li",{parentName:"ol"},"Commit your passing code."),(0,a.kt)("li",{parentName:"ol"},"Repeat this process with the next simplest behavior.")),(0,a.kt)("h2",{id:"testing-the-private-static-field-_instances-through-its-getter-method-getall"},"Testing the Private Static Field ",(0,a.kt)("inlineCode",{parentName:"h2"},"_instances")," through its Getter Method ",(0,a.kt)("inlineCode",{parentName:"h2"},"GetAll()")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"1--identify-the-simplest-possible-behavior-the-program-must-exhibit"},"1.  Identify the simplest possible behavior the program must exhibit."),(0,a.kt)("p",null,"We'll start by creating our private static ",(0,a.kt)("inlineCode",{parentName:"p"},"_instances")," field along with its getter method, ",(0,a.kt)("inlineCode",{parentName:"p"},"GetAll()"),". "),(0,a.kt)("h3",{id:"2--write-a-coded-test-for-this-behavior"},"2.  Write a coded test for this behavior."),(0,a.kt)("p",null,"Here's what the test will look like for the private static ",(0,a.kt)("inlineCode",{parentName:"p"},"_instances")," field and ",(0,a.kt)("inlineCode",{parentName:"p"},"GetAll()")," getter method. We'll explain the new code below the code snippet."),(0,a.kt)("div",{class:"filename"},"ShapeTracker.Solution/ShapeTracker.Tests/ModelTests/TriangleTests.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.VisualStudio.TestTools.UnitTesting;\nusing ShapeTracker.Models;\nusing System.Collections.Generic; // new using directive!\n\nnamespace ShapeTracker.Tests\n{\n  [TestClass]\n  public class TriangleTests\n  {\n\n    ... // other tests omitted for brevity\n\n    [TestMethod]\n    public void GetAll_ReturnsAllTriangleInstances_List()\n    {\n      // Arrange\n      Triangle tri1 = new Triangle(2, 2, 9);\n      Triangle tri2 = new Triangle(21, 3, 9);\n      Triangle tri3 = new Triangle(1, 3, 9);\n      List<Triangle> expected = new List<Triangle> { tri1, tri2, tri3 };\n      // Act\n      List<Triangle> actualResult = Triangle.GetAll();\n      // Assert\n      CollectionAssert.AreEqual(expected, actualResult);\n    }\n\n  }\n}\n")),(0,a.kt)("p",null,"Notice a couple new things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First, we include a new using directive, because we're now working with the ",(0,a.kt)("inlineCode",{parentName:"li"},"List<T>")," type, which lives within the ",(0,a.kt)("inlineCode",{parentName:"li"},"System.Collections.Generic")," namespace."),(0,a.kt)("li",{parentName:"ul"},"Second, we're using the static ",(0,a.kt)("inlineCode",{parentName:"li"},"CollectionAssert.AreEqual()")," method. This method works just in the same way as the ",(0,a.kt)("inlineCode",{parentName:"li"},"Assert.AreEqual()")," method in that it compares an expected value with the actual value, only it's meant to compare collections \u2014 arrays, lists, or dictionaries. ")),(0,a.kt)("p",null,"We're ready to move onto the next step."),(0,a.kt)("h3",{id:"3-before-coding-confirm-the-test-fails"},"3. Before coding, confirm the test fails."),(0,a.kt)("p",null,"If we run ",(0,a.kt)("inlineCode",{parentName:"p"},"$ dotnet test")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ShapeTracker.Tests")," directory, we'll get a compiler error that confirms that our test fails and there are no false positives in our code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{style:{color:"red"}},"C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ModelTests\\TriangleTests.cs(142,46): error CS0117: 'Triangle' does not contain a definition for 'GetAll' [C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ShapeTracker.Tests.csproj]")),(0,a.kt)("h3",{id:"4-implement-the-behavior-with-the-least-amount-of-code-possible"},"4. Implement the behavior with the least amount of code possible."),(0,a.kt)("p",null,"To resolve the compiler error and pass out test, we'll need to do a few things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a private static field called ",(0,a.kt)("inlineCode",{parentName:"li"},"_instances")," set to a new, empty list of triangles."),(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"_instances.Add(this)")," to our constructor to add each triangle object created to the list."),(0,a.kt)("li",{parentName:"ul"},"Create a public getter method called ",(0,a.kt)("inlineCode",{parentName:"li"},"GetAll()")," that returns the ",(0,a.kt)("inlineCode",{parentName:"li"},"_instances")," field.")),(0,a.kt)("p",null,"Here's our updated ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle.cs")," logic:"),(0,a.kt)("div",{class:"filename"},"ShapeTracker/Models/Triangle.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections.Generic;\n\nnamespace ShapeTracker.Models\n{\n  public class Triangle\n  {\n    private int _side1;\n    public int Side1\n    {\n      get { return _side1; }\n      set { _side1 = value; }\n    }\n    public int Side2 { get; set; }\n    private int _side3;\n    private static List<Triangle> _instances = new List<Triangle> {};\n\n    public Triangle(int length1, int length2, int length3)\n    {\n      _side1 = length1;\n      Side2 = length2;\n      _side3 = length3;\n      _instances.Add(this);\n    }\n\n    public int GetSide3()\n    {\n      return _side3;\n    }\n\n    public void SetSide3(int newValue)\n    {\n      _side3 = newValue;\n    }\n\n    public string CheckType()\n    {\n      if ((Side1 > (Side2 + _side3)) || (Side2 > (Side1 + _side3)) || (_side3 > (Side1 + Side2)))\n      {\n        return "not a triangle";\n      } \n      else if ((Side1 != Side2) && ((Side1 != _side3)) && ((Side2 != _side3))) \n      {\n        return "scalene triangle";\n      }  \n      else if ((Side1 == Side2) && (Side1 == _side3)) \n      {\n        return "equilateral triangle";\n      } \n      else \n      {\n        return "isosceles triangle";\n      }\n    }\n\n    public static List<Triangle> GetAll()\n    {\n      return _instances;\n    }\n\n  }\n}\n')),(0,a.kt)("h3",{id:"5-run-the-automated-test-to-confirm-it-passes-if-it-doesnt-revisit-step-4"},"5. Run the automated test to confirm it passes. If it doesn't, revisit step 4."),(0,a.kt)("p",null,"We're now ready to see if the code we implemented passes our new test."),(0,a.kt)("p",null,"When we run ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet run")," again, we our test fails:"),(0,a.kt)("pre",null,(0,a.kt)("code",{style:{color:"red"}},"Failed GetAll_ReturnsAllTriangleInstances_List [87 ms] Error Message: CollectionAssert.AreEqual failed. (Different number of elements.) Stack Trace: at ShapeTracker.Tests.TriangleTests.GetAll_ReturnsAllTriangleInstances_List() in C:\\Users\\staff\\Desktop\\ShapeTracker.Solution\\ShapeTracker.Tests\\ModelTests\\TriangleTests.cs:line 144 Failed!  - Failed:     1, Passed:    11, Skipped:     0, Total:    12, Duration: 304 ms - ShapeTracker.Tests.dll (net6.0)")),(0,a.kt)("p",null,"The failure message says ",(0,a.kt)("inlineCode",{parentName:"p"},"Different number of elements"),", but it doesn't give additional information. "),(0,a.kt)("p",null,"Any ideas about what may be happening here?"),(0,a.kt)("p",null,"Well, the issue is not obvious... In fact, our code and test are written perfectly, and the issue is in our tests: because the tests will run in order, by the time it gets to our final ",(0,a.kt)("inlineCode",{parentName:"p"},"GetAll")," test, we've already many, many ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," objects to our static list \u2014 11 to be precise! "),(0,a.kt)("p",null,"Remember that each time a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," object is created by the constructor, the entire ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," class has a new object added to its static ",(0,a.kt)("inlineCode",{parentName:"p"},"List")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," objects. We can't reset the static list unless we manually clear the list (like with a static ",(0,a.kt)("inlineCode",{parentName:"p"},"ClearAll()")," method)! So, when our ",(0,a.kt)("inlineCode",{parentName:"p"},"GetAll")," test runs, it compares the ",(0,a.kt)("inlineCode",{parentName:"p"},"expected")," list of 3 triangles with a list of 14 ",(0,a.kt)("inlineCode",{parentName:"p"},"Triangle")," objects (11 from the previous tests and 3 from the ",(0,a.kt)("inlineCode",{parentName:"p"},"GetAll")," test). "),(0,a.kt)("p",null,"Well, we can solve this issue with a ",(0,a.kt)("strong",{parentName:"p"},"teardown")," method that will clear out ",(0,a.kt)("inlineCode",{parentName:"p"},"_instances")," between each test. Let's learn how to do that in the next lesson!"))}h.isMDXComponent=!0}}]);