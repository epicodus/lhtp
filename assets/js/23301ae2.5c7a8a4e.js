"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[84224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return n?i.createElement(h,l(l({ref:t},d),{},{components:n})):i.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={title:"11. Simplifying Business Logic with Properties",id:"simplifying_business_logic_with_properties",slug:"simplifying_business_logic_with_properties",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/4_basic-console-apps/0k_properties.md"},l=void 0,o={unversionedId:"c_and_net/basic-console-apps/simplifying_business_logic_with_properties",id:"c_and_net/basic-console-apps/simplifying_business_logic_with_properties",title:"11. Simplifying Business Logic with Properties",description:"We're going to learn about an important concept in this lesson: C# properties. Yes, properties! These do in fact exist in C#, but they are nothing like JavaScript properties.",source:"@site/docs/c_and_net/4_basic-console-apps/0k_properties.md",sourceDirName:"c_and_net/4_basic-console-apps",slug:"/c_and_net/basic-console-apps/simplifying_business_logic_with_properties",permalink:"/lhtp/c_and_net/basic-console-apps/simplifying_business_logic_with_properties",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"11. Simplifying Business Logic with Properties",id:"simplifying_business_logic_with_properties",slug:"simplifying_business_logic_with_properties",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/4_basic-console-apps/0k_properties.md"},sidebar:"c_and_net",previous:{title:"10. Creating a User Interface for a Console App",permalink:"/lhtp/c_and_net/basic-console-apps/creating_a_user_interface_for_a_console_app"},next:{title:"12. Console App Project Structure: How to Add More Code Files",permalink:"/lhtp/c_and_net/basic-console-apps/console_app_project_structure_how_to_add_more_code_files"}},s={},p=[{value:"C# Properties: A Shortcut to Writing Getter and Setter Methods",id:"c-properties-a-shortcut-to-writing-getter-and-setter-methods",level:2},{value:"A Few More Examples",id:"a-few-more-examples",level:3},{value:"Auto-Implemented Properties: An Even Shorter Shortcut",id:"auto-implemented-properties-an-even-shorter-shortcut",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Repository Reference",id:"repository-reference",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We're going to learn about an important concept in this lesson: C# properties. Yes, ",(0,r.kt)("em",{parentName:"p"},"properties!")," These do in fact exist in C#, but they are nothing like JavaScript properties. "),(0,r.kt)("h2",{id:"c-properties-a-shortcut-to-writing-getter-and-setter-methods"},"C# Properties: A Shortcut to Writing Getter and Setter Methods"),(0,r.kt)("hr",null),(0,r.kt)("p",null,'In C#, a property is a mechanism that we can add to our classes to read, write, and compute the value of class fields. By "mechanism" we really mean that properties are a special type of public method that allows us to access class fields; however, properties do NOT look like typical methods and instead have special syntax.'),(0,r.kt)("p",null,"If properties are special methods that allow us to access our class's fields, why do we need them? We already have our getter and setter methods that do just that! The short answer is that properties are a syntactic shortcut to creating public getter and setter methods."),(0,r.kt)("p",null,"Let's refactor our Shape Tracker ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," logic to use a property. To do this we're going to do three things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Remove the getter and setter methods for our private ",(0,r.kt)("inlineCode",{parentName:"li"},"_side1")," field. We'll only change one field to use a property and leave the rest as they are."),(0,r.kt)("li",{parentName:"ul"},"Add in a property that corresponds to the ",(0,r.kt)("inlineCode",{parentName:"li"},"_side1")," field."),(0,r.kt)("li",{parentName:"ul"},"Update our UI logic in ",(0,r.kt)("inlineCode",{parentName:"li"},"Program.cs")," to use the property.")),(0,r.kt)("p",null,"Let's start by removing the getters and setters for ",(0,r.kt)("inlineCode",{parentName:"p"},"_side1"),". This is what our updated ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle.cs")," should look like (with some code omitted for brevity):"),(0,r.kt)("div",{class:"filename"},"Models/Triangle.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using System.Collections.Generic;\n\nnamespace ShapeTracker.Models \n{\n  public class Triangle \n  {\n    private int _side1;\n    private int _side2;\n    private int _side3;\n    private static List<Triangle> _instances = new List<Triangle> {};\n\n    public Triangle(int length1, int length2, int length3) \n    {\n      ... // omitted for brevity\n    }\n\n    public int GetSide2()\n    {\n      return _side2;\n    }\n\n    public int GetSide3()\n    {\n      return _side3;\n    }\n\n    public void SetSide2(int newSide)\n    {\n      _side2 = newSide;\n    }\n\n    public void SetSide3(int newSide)\n    {\n      _side3 = newSide;\n    }\n\n    public string CheckType() \n    {\n      ... // omitted for brevity\n    }\n\n    public static List<Triangle> GetAll()\n    {\n      return _instances;\n    }\n\n    public static void ClearAll()\n    {\n      _instances.Clear();\n    }\n  }\n}\n")),(0,r.kt)("p",null,"Next, we'll add a property for the ",(0,r.kt)("inlineCode",{parentName:"p"},"_side1")," field:"),(0,r.kt)("div",{class:"filename"},"Models/Triangle.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using System.Collections.Generic;\n\nnamespace ShapeTracker.Models \n{\n  public class Triangle \n  {\n    private int _side1;\n    // new code below!\n    public int Side1\n    {\n      get { return _side1; }\n      set { _side1 = value; }\n    }\n    // new code above!\n    private int _side2;\n    private int _side3;\n    private static List<Triangle> _instances = new List<Triangle> {};\n\n    public Triangle(int length1, int length2, int length3) \n    {\n      ... // omitted for brevity\n    }\n\n    ... // omitted for brevity\n  }\n}\n")),(0,r.kt)("p",null,"Our property is called ",(0,r.kt)("inlineCode",{parentName:"p"},"Side1"),", using Pascal case. Our property's type and name matches the type and name of its corresponding field. These values don't have to match, though it is most typical that they do. "),(0,r.kt)("p",null,"Our property is listed as ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," so that we can access it outside of the class."),(0,r.kt)("p",null,"Unlike typical methods, properties don't have parens. They do however have curly brackets within which we define how our property should access its corresponding field (what we might call the method body). We use special keywords ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," to define getter and setter actions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Within ",(0,r.kt)("inlineCode",{parentName:"li"},"get")," we simply return the private field ",(0,r.kt)("inlineCode",{parentName:"li"},"_side1"),". "),(0,r.kt)("li",{parentName:"ul"},"Within ",(0,r.kt)("inlineCode",{parentName:"li"},"set")," we assigned the private field ",(0,r.kt)("inlineCode",{parentName:"li"},"_side1")," to a new value, represented by another special keyword ",(0,r.kt)("inlineCode",{parentName:"li"},"value"),".")),(0,r.kt)("p",null,"To better understand how the ",(0,r.kt)("inlineCode",{parentName:"p"},"Side1")," property provides getter and setter action, let's see an example of how we would use ",(0,r.kt)("inlineCode",{parentName:"p"},"Side1")," to access the private field ",(0,r.kt)("inlineCode",{parentName:"p"},"_side1"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"Triangle myTri = new Triangle(4,55,6);\nmyTri.Side1;\n// returns 4\nmyTri.Side1 = 12;\nmyTri.Side1;\n// returns 12\n")),(0,r.kt)("p",null,"As we can see, the syntax to access or update the value of a public property looks the exact same as when we access or update a public field. While they look the same, it's in fact very different. The big difference in this case is that we're using a public property that allows us to access a private field, which means we're adhering to the best practice of encapsulation. Remember \u2014 we use ",(0,r.kt)("strong",{parentName:"p"},"encapsulation")," when we hide the internal state and functionality of an object (like making fields private) and only allow access through a public set of methods (like getter and setter methods)."),(0,r.kt)("p",null,"The last task we need to do to complete our refactor to using a property is updating ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All instances of ",(0,r.kt)("inlineCode",{parentName:"li"},"tri.SetSide1(stringNumber1)")," need to be updated to ",(0,r.kt)("inlineCode",{parentName:"li"},"tri.Side1 = stringNumber1"),"."),(0,r.kt)("li",{parentName:"ul"},"All instances of ",(0,r.kt)("inlineCode",{parentName:"li"},"tri.GetSide1()")," need to be updated to ",(0,r.kt)("inlineCode",{parentName:"li"},"tri.Side1"),".")),(0,r.kt)("p",null,"Here is what our updated ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs")," should look like (with some code omitted for brevity):"),(0,r.kt)("div",{class:"filename"},"Program.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing ShapeTracker.Models;\nusing System.Collections.Generic;\n\nnamespace ShapeTracker\n{\n  class Program\n  {\n    static void Main()\n    {\n      ... // code omitted for brevity\n    }\n\n    static void ConfirmOrEditTriangle(Triangle tri)\n    {\n      Console.WriteLine("Please confirm that you entered in your triangle correctly:");\n      // updated code below!!\n      Console.WriteLine($"Side 1 has a length of {tri.Side1}."); \n      Console.WriteLine($"Side 2 has a length of {tri.GetSide2()}.");\n      Console.WriteLine($"Side 3 has a length of {tri.GetSide3()}.");\n      Console.WriteLine("Is that correct? Enter \'yes\' to proceed, or \'no\' to re-enter the triangle\'s sides");\n      string userInput = Console.ReadLine();  \n      if (userInput == "yes")\n      {\n        CheckTriangleType(tri);\n      }\n      else\n      {\n        Console.WriteLine("Let\'s fix your triangle. Please enter the 3 sides again!");\n        Console.WriteLine("Please enter a number:");\n        string stringNumber1 = Console.ReadLine();  \n        Console.WriteLine("Enter another number:");\n        string stringNumber2 = Console.ReadLine();  \n        Console.WriteLine("Enter a third number:");\n        string stringNumber3 = Console.ReadLine(); \n        // updated code below!! \n        tri.Side1 = int.Parse(stringNumber1); \n        tri.SetSide2(int.Parse(stringNumber2));  \n        tri.SetSide3(int.Parse(stringNumber3)); \n        ConfirmOrEditTriangle(tri);\n      }\n    }\n\n    static void CheckTriangleType(Triangle tri)\n    {\n      ... // code omitted for brevity\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Note that we only had two locations to update within the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfirmOrEditTriangle()")," method."),(0,r.kt)("h3",{id:"a-few-more-examples"},"A Few More Examples"),(0,r.kt)("p",null,"Let's check out a few more examples of properties in order to get a good sense of how we can use them. Take a look at the following code, which uses a made up class not from the Shape Tracker project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"class Cat\n{\n  private string _name;\n  public string FullName\n  {\n    get { return _name; }\n  }\n\n  private int _age;\n  public int Age\n  {\n    get \n    { \n      return _age; \n    }\n    set \n    {\n      if (value > 0)\n      {\n        _age = value; \n      }\n    }\n  }\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Cat")," class has two fields, ",(0,r.kt)("inlineCode",{parentName:"p"},"_name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"_age"),", which store a cat's name and age. We've set up a property for each field that shows us a few variations on how we can create properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First, notice that we can name the property something other than the field, just like how the private field ",(0,r.kt)("inlineCode",{parentName:"li"},"_name")," has a corresponding property called ",(0,r.kt)("inlineCode",{parentName:"li"},"FullName")," (instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"Name"),", which would match the field)."),(0,r.kt)("li",{parentName:"ul"},"We can also choose to not create a ",(0,r.kt)("inlineCode",{parentName:"li"},"get")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"set")," action. For example, the ",(0,r.kt)("inlineCode",{parentName:"li"},"_name")," field only has a ",(0,r.kt)("inlineCode",{parentName:"li"},"get")," action declared within the ",(0,r.kt)("inlineCode",{parentName:"li"},"FullName")," property, so we won't be able to edit it."),(0,r.kt)("li",{parentName:"ul"},"We can optionally create multi-line statements for our ",(0,r.kt)("inlineCode",{parentName:"li"},"get")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"set")," actions. As we see within the ",(0,r.kt)("inlineCode",{parentName:"li"},"Age")," property, the ",(0,r.kt)("inlineCode",{parentName:"li"},"set")," action first checks if ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," is greater than ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),", and only in that case sets the value of the corresponding ",(0,r.kt)("inlineCode",{parentName:"li"},"_age")," field. (The only thing missing in the ",(0,r.kt)("inlineCode",{parentName:"li"},"set")," action is error handling when ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," is less than 1.)")),(0,r.kt)("h2",{id:"auto-implemented-properties-an-even-shorter-shortcut"},"Auto-Implemented Properties: An Even Shorter Shortcut"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We can implement all of the functionality of a private field and a public property in shorter syntax by using ",(0,r.kt)("strong",{parentName:"p"},"auto-implemented properties"),". An auto-implemented property does multiple things in one line of code:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It creates a private field. (Yes, that's right!) "),(0,r.kt)("li",{parentName:"ul"},"It creates a public property."),(0,r.kt)("li",{parentName:"ul"},"It creates ",(0,r.kt)("inlineCode",{parentName:"li"},"get")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"set")," actions to access the private field.")),(0,r.kt)("p",null,"To understand how auto-implemented properties work, let's update our Shape Tracker's ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle")," logic to use one. We'll update our private ",(0,r.kt)("inlineCode",{parentName:"p"},"_side2")," field to use an auto-implemented property instead. To do this we're going to do a few things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Remove the getter and setter methods for our private ",(0,r.kt)("inlineCode",{parentName:"li"},"_side2")," field."),(0,r.kt)("li",{parentName:"ul"},"Remove the ",(0,r.kt)("inlineCode",{parentName:"li"},"_side2")," field itself. "),(0,r.kt)("li",{parentName:"ul"},"Add in an auto-implemented property called ",(0,r.kt)("inlineCode",{parentName:"li"},"Side2")," that handles creating an implicit ",(0,r.kt)("inlineCode",{parentName:"li"},"_side2")," field, as well as the usual ",(0,r.kt)("inlineCode",{parentName:"li"},"get")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"set")," actions."),(0,r.kt)("li",{parentName:"ul"},"Update the constructor and ",(0,r.kt)("inlineCode",{parentName:"li"},"CheckType()")," method to reference the new ",(0,r.kt)("inlineCode",{parentName:"li"},"Side2")," property."),(0,r.kt)("li",{parentName:"ul"},"Update the UI logic in ",(0,r.kt)("inlineCode",{parentName:"li"},"Program.cs")," to reference the new ",(0,r.kt)("inlineCode",{parentName:"li"},"Side2")," property.")),(0,r.kt)("p",null,"Let's start by removing the getter and setter methods for the ",(0,r.kt)("inlineCode",{parentName:"p"},"_side2")," field and the ",(0,r.kt)("inlineCode",{parentName:"p"},"_side2")," field itself. This is what our updated ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle.cs")," should look like (with some code omitted for brevity):"),(0,r.kt)("div",{class:"filename"},"Models/Triangle.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using System.Collections.Generic;\n\nnamespace ShapeTracker.Models \n{\n  public class Triangle \n  {\n    private int _side1;\n    public int Side1\n    {\n      get { return _side1; }\n      set { _side1 = value; }\n    }\n    private int _side3;\n    private static List<Triangle> _instances = new List<Triangle> {};\n\n    public Triangle(int length1, int length2, int length3) \n    {\n      _side1 = length1;\n      _side2 = length2;\n      _side3 = length3;\n      _instances.Add(this);\n    }\n\n    public int GetSide3()\n    {\n      return _side3;\n    }\n\n    public void SetSide3(int newSide)\n    {\n      _side3 = newSide;\n    }\n\n    public string CheckType() \n    {\n      ... // omitted for brevity\n    }\n\n    ... // GetAll() and ClearAll() methods omitted for brevity\n\n  }\n}\n")),(0,r.kt)("p",null,"Alright, we've removed the getter and setter for ",(0,r.kt)("inlineCode",{parentName:"p"},"_side2")," as well as the field itself. "),(0,r.kt)("p",null,"Next, let's add in the new ",(0,r.kt)("inlineCode",{parentName:"p"},"Side2")," auto-implemented property and update our constructor and ",(0,r.kt)("inlineCode",{parentName:"p"},"CheckType()")," method to reference the new ",(0,r.kt)("inlineCode",{parentName:"p"},"Side2")," property. Our new ",(0,r.kt)("inlineCode",{parentName:"p"},"Side2")," auto-implemented property will look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public int Side2 { get; set; }\n")),(0,r.kt)("p",null,"And here's how we'll update ",(0,r.kt)("inlineCode",{parentName:"p"},"Triangle.cs"),", with some code omitted for brevity:"),(0,r.kt)("div",{class:"filename"},"Models/Triangle.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections.Generic;\n\nnamespace ShapeTracker.Models \n{\n  public class Triangle \n  {\n    private int _side1;\n    public int Side1\n    {\n      get { return _side1; }\n      set { _side1 = value; }\n    }\n    // new code below!\n    public int Side2 { get; set; }\n    // new code above!\n    private int _side3;\n    private static List<Triangle> _instances = new List<Triangle> {};\n\n    public Triangle(int length1, int length2, int length3) \n    {\n      _side1 = length1;\n      Side2 = length2; // updated code!\n      _side3 = length3;\n      _instances.Add(this);\n    }\n\n    public int GetSide3()\n    {\n      return _side3;\n    }\n\n    public void SetSide3(int newSide)\n    {\n      _side3 = newSide;\n    }\n\n    // updated code in CheckType()\n    public string CheckType() \n    {\n      if ((_side1 > (Side2 + _side3)) || (Side2 > (_side1 + _side3)) || (_side3 > (_side1 + Side2)))\n      {\n        return "not a triangle";\n      } \n      else if ((_side1 != Side2) && ((_side1 != _side3)) && ((Side2 != _side3))) \n      {\n        return "scalene triangle";\n      }  \n      else if ((_side1 == Side2) && (_side1 == _side3)) \n      {\n        return "equilateral triangle";\n      } \n      else \n      {\n        return "isosceles triangle";\n      }\n    }\n\n    ... // GetAll() and ClearAll() methods omitted for brevity\n\n  }\n}\n')),(0,r.kt)("p",null,"It may be a bit confusing or unexpected from the syntax, but the auto-implemented property ",(0,r.kt)("inlineCode",{parentName:"p"},"public int Side2 { get; set; }")," does in fact create a private ",(0,r.kt)("inlineCode",{parentName:"p"},"_side2")," field, only we can't see it because it's ",(0,r.kt)("strong",{parentName:"p"},"implicit"),". This means we are still following the best practices of encapsulation even with the extra short syntax of the auto-implemented property."),(0,r.kt)("p",null,"You may notice one drawback from using auto-implemented properties: we can only use them when we only want to implement standard ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," actions: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When ",(0,r.kt)("inlineCode",{parentName:"li"},"get")," only returns the corresponding private field, without any manipulations. "),(0,r.kt)("li",{parentName:"ul"},"When ",(0,r.kt)("inlineCode",{parentName:"li"},"set")," only sets a new value for the corresponding private field, without performing any validations.")),(0,r.kt)("p",null,"We do have the flexibility to not include a ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," action. For example, we could update ",(0,r.kt)("inlineCode",{parentName:"p"},"Side2")," to allow it to be accessed, but not updated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public int Side2 { get; }\n")),(0,r.kt)("p",null,"We can also optionally set an initial value for auto-implemented properties. That would look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public int Side2 { get; } = 12;\n")),(0,r.kt)("p",null,"or like this, with a static list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public static List<Triangle> Instances { get; set; } = new List<Triangle> {};\n")),(0,r.kt)("p",null,"The last step we need to complete in this refactor is to update the UI logic in ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs")," to reference the ",(0,r.kt)("inlineCode",{parentName:"p"},"Side2")," auto-implemented property: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tri.SetSide2(stringNumber2)")," needs to be updated to ",(0,r.kt)("inlineCode",{parentName:"li"},"tri.Side2 = stringNumber2"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tri.GetSide2()")," needs to be updated to ",(0,r.kt)("inlineCode",{parentName:"li"},"tri.Side2"),".")),(0,r.kt)("p",null,"Here is what our updated ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs")," should look like (with some code omitted for brevity):"),(0,r.kt)("div",{class:"filename"},"Program.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing ShapeTracker.Models;\nusing System.Collections.Generic;\n\nnamespace ShapeTracker\n{\n  class Program\n  {\n    static void Main()\n    {\n      ... // code omitted for brevity\n    }\n\n    static void ConfirmOrEditTriangle(Triangle tri)\n    {\n      Console.WriteLine("Please confirm that you entered in your triangle correctly:");\n      Console.WriteLine($"Side 1 has a length of {tri.Side1}."); \n      // updated code below!!\n      Console.WriteLine($"Side 2 has a length of {tri.Side2}.");\n      Console.WriteLine($"Side 3 has a length of {tri.GetSide3()}.");\n      Console.WriteLine("Is that correct? Enter \'yes\' to proceed, or \'no\' to re-enter the triangle\'s sides");\n      string userInput = Console.ReadLine();  \n      if (userInput == "yes")\n      {\n        CheckTriangleType(tri);\n      }\n      else\n      {\n        Console.WriteLine("Let\'s fix your triangle. Please enter the 3 sides again!");\n        Console.WriteLine("Please enter a number:");\n        string stringNumber1 = Console.ReadLine();  \n        Console.WriteLine("Enter another number:");\n        string stringNumber2 = Console.ReadLine();  \n        Console.WriteLine("Enter a third number:");\n        string stringNumber3 = Console.ReadLine(); \n        tri.Side1 = int.Parse(stringNumber1); \n        // updated code below!! \n        tri.Side2 = int.Parse(stringNumber2);  \n        tri.SetSide3(int.Parse(stringNumber3)); \n        ConfirmOrEditTriangle(tri);\n      }\n    }\n\n    static void CheckTriangleType(Triangle tri)\n    {\n      ... // code omitted for brevity\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In this course section, you should make a point to practice with all of the tools we learned thus far:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creating private fields with getter and setter methods."),(0,r.kt)("li",{parentName:"ul"},"Creating private fields with public properties."),(0,r.kt)("li",{parentName:"ul"},"Creating public auto-implemented properties. ")),(0,r.kt)("p",null,"As the program continues, we'll primarily stick to using auto-implemented properties since they simplify our code, follow best practices, and we often will be needing standard ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," actions."),(0,r.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,r.kt)("p",null,"Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/prework-shape-tracker-csharp-net6/tree/6_class_properties"},(0,r.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for Shape Tracker: ",(0,r.kt)("inlineCode",{parentName:"a"},"6_class_properties")))))}u.isMDXComponent=!0}}]);