"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[47441],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,b=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const r={title:"Nullable Types",id:"nullable_types",slug:"nullable_types",hide_table_of_contents:!0,sidebar_position:9,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/7_test-driven-development-with-c-part-2/2f_nullable_types.md"},i=void 0,o={unversionedId:"c_and_net_part_time_evening/test-driven-development-with-c-part-2/nullable_types",id:"c_and_net_part_time_evening/test-driven-development-with-c-part-2/nullable_types",title:"Nullable Types",description:"The last fundamental C# concept that we'll learn about in this course section is nullable types, or using null values. We're already familiar with the concept of null from JavaScript \u2014 null means nothing, no value at all. But in a strongly-typed language like C#, how do we set a type to null? In this lesson, we're going to learn exactly how to do that.",source:"@site/docs/c_and_net_part_time_evening/7_test-driven-development-with-c-part-2/2f_nullable_types.md",sourceDirName:"c_and_net_part_time_evening/7_test-driven-development-with-c-part-2",slug:"/c_and_net_part_time_evening/test-driven-development-with-c-part-2/nullable_types",permalink:"/lhtp/c_and_net_part_time_evening/test-driven-development-with-c-part-2/nullable_types",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Nullable Types",id:"nullable_types",slug:"nullable_types",hide_table_of_contents:!0,sidebar_position:9,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/7_test-driven-development-with-c-part-2/2f_nullable_types.md"},sidebar:"c_and_net_part_time_evening",previous:{title:"Weekday Finder, Scrabble Scorer, Rock Paper Scissors, Find and Replace, Prime Sifting - Part 2",permalink:"/lhtp/c_and_net_part_time_evening/test-driven-development-with-c-part-2/weekday_finder_scrabble_scorer_rock_paper_scissors_find_and_replace_prime_sifting___part_2"},next:{title:"Weekday Finder, Scrabble Scorer, Rock Paper Scissors, Find and Replace, Prime Sifting - Part 3 (day 2)",permalink:"/lhtp/c_and_net_part_time_evening/test-driven-development-with-c-part-2/weekday_finder_scrabble_scorer_rock_paper_scissors_find_and_replace_prime_sifting___part_3_day_2"}},s={},p=[{value:"Nullable Types",id:"nullable-types",level:2},{value:"Nullable Value Types",id:"nullable-value-types",level:3},{value:"Nullable Reference Types",id:"nullable-reference-types",level:3},{value:"Other Ways to Create a Nullable Aware Context",id:"other-ways-to-create-a-nullable-aware-context",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The last fundamental C# concept that we'll learn about in this course section is ",(0,l.kt)("strong",{parentName:"p"},"nullable types"),", or using ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," values. We're already familiar with the concept of ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," from JavaScript \u2014 ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," means nothing, no value at all. But in a strongly-typed language like C#, how do we set a type to null? In this lesson, we're going to learn exactly how to do that. "),(0,l.kt)("h2",{id:"nullable-types"},"Nullable Types"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"When we make want a C# type to possibly be ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),", we're working with ",(0,l.kt)("strong",{parentName:"p"},"nullable types")," in C#. Exactly what we need to do to use ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," depends on whether we're working with a value type or a reference type. Let's first look at nullable values types to learn the basics of using ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),". "),(0,l.kt)("h3",{id:"nullable-value-types"},"Nullable Value Types"),(0,l.kt)("p",null,"To create a nullable value type, we need to use ",(0,l.kt)("inlineCode",{parentName:"p"},"?"),". In formal terms, a nullable value type is expressed as ",(0,l.kt)("inlineCode",{parentName:"p"},"T?"),", where ",(0,l.kt)("inlineCode",{parentName:"p"},"T")," is the value type and ",(0,l.kt)("inlineCode",{parentName:"p"},"?")," is the syntax used to turn the value type into a nullable type. Let's see an example suing the ",(0,l.kt)("inlineCode",{parentName:"p"},"dotnet-script")," REPL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> int? test = 1;\n> test\n1\n> test = null;\n> test\n>\n")),(0,l.kt)("p",null,"Pretty simple, right? Just add a question mark ",(0,l.kt)("inlineCode",{parentName:"p"},"?")," to transform a value type into a nullable value type. Now our ",(0,l.kt)("inlineCode",{parentName:"p"},"test")," variable can hold an integer or ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),". "),(0,l.kt)("p",null,"Under the hood, when we use ",(0,l.kt)("inlineCode",{parentName:"p"},"int?"),", or the ",(0,l.kt)("inlineCode",{parentName:"p"},"T?")," syntax, our value type is being transformed into ",(0,l.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1?view=net-6.0"},"the ",(0,l.kt)("inlineCode",{parentName:"a"},"Nullable<T>")," type")," that lives in the ",(0,l.kt)("inlineCode",{parentName:"p"},"System")," namespace. The ",(0,l.kt)("inlineCode",{parentName:"p"},"Nullable<T>")," type has the helpful ",(0,l.kt)("inlineCode",{parentName:"p"},"HasValue")," property that can give us information about whether or not the variable is currently ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),". Here's an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> int? test2 = 33;\n> test2\n33\n> test2.HasValue\ntrue\n> test2 = null;\n> test2.HasValue\nfalse\n")),(0,l.kt)("h3",{id:"nullable-reference-types"},"Nullable Reference Types"),(0,l.kt)("p",null,"Next, let's look at nullable reference types. With ",(0,l.kt)("strong",{parentName:"p"},"nullable reference types"),", the syntax and concept is the same, but with a few differences. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"The first notable difference is that we need to create a nullable aware context"),". For example, we'll get an error when we do the following in the ",(0,l.kt)("inlineCode",{parentName:"p"},"dotnet-script")," REPL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"> string? test = \"test\";\n(1,7): error CS8632: The annotation for nullable reference types should only be used in code within a '#nullable' annotations context.\n")),(0,l.kt)("p",null,"We can resolve this error by creating a nullable context with ",(0,l.kt)("inlineCode",{parentName:"p"},"#nullable enable"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'> #nullable enable\n> string? test = "test";\n> test\n"test"\n> test = null;\n> test\n>\n')),(0,l.kt)("p",null,"We create a ",(0,l.kt)("strong",{parentName:"p"},"nullable aware context")," so that the compiler can track the ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," state of all reference types within the nullable aware context, and issue warnings and errors when necessary. The compiler will issue a warning if a reference type does not match it's expected state:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Non-null reference types are expected to have a "not-null" state.'),(0,l.kt)("li",{parentName:"ul"},'Nullable reference types are expected to have a "maybe-null" state. ')),(0,l.kt)("p",null,"If those states are ever not true, then the compiler will let us know. Take the following class for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Test\n{\n  #nullable enable\n  string NonNullString { get; set; }\n  string? NullableString { get; set; }\n  public Test()\n  {\n\n  }\n  #nullable disable\n}\n")),(0,l.kt)("p",null,"We've created a nullable aware context using the ",(0,l.kt)("inlineCode",{parentName:"p"},"#nullable enable")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"#nullable disable")," annotations. However, if we run ",(0,l.kt)("inlineCode",{parentName:"p"},"dotnet build")," to compile our code, the compiler will issue a warning:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"warning CS8618: Non-nullable property 'NonNullString' must contain a non-null value when exiting constructor. Consider declaring the property as nullable. \n")),(0,l.kt)("p",null,"The compiler is letting us know that the ",(0,l.kt)("inlineCode",{parentName:"p"},"NonNullString"),' property should be in a "not-null" state, but is not! The solution is to either make ',(0,l.kt)("inlineCode",{parentName:"p"},"NonNullString")," nullable, or to give it a value, either in the constructor or a default value. Here's one way we can fix the warning:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Test\n{\n  #nullable enable\n  string NonNullString { get; set; } = "default value";\n  string? NullableString { get; set; }\n  public Test()\n  {\n\n  }\n  #nullable disable\n}\n')),(0,l.kt)("p",null,"To read more about other warnings that the compiler can generate in a nullable aware context, visit the MS Docs on ",(0,l.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/nullable-reference-types#nullable-references-and-static-analysis"},"Nullable References and Static Analysis"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"The second notable difference")," between value types and reference types, is that reference types are not turned into ",(0,l.kt)("inlineCode",{parentName:"p"},"Nullable<T>")," objects, so they don't have access to the ",(0,l.kt)("inlineCode",{parentName:"p"},"HasValue")," property. Here's an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"> #nullable enable\n> string? myVar = \"this is a test\";\n> myVar\n\"this is a test\"\n> myVar.HasValue\n(1,7): error CS1061: 'string' does not contain a definition for 'HasValue' and no accessible extension method 'HasValue' accepting a first argument of type 'string' could be found (are you missing a using directive or an assembly reference?)\n")),(0,l.kt)("p",null,"The error lets us know that we're still dealing with the ",(0,l.kt)("inlineCode",{parentName:"p"},"string")," type, and not a new ",(0,l.kt)("inlineCode",{parentName:"p"},"Nullable<T>"),". In summary, only nullable value types are turned into ",(0,l.kt)("inlineCode",{parentName:"p"},"Nullable<T>")," objects."),(0,l.kt)("h3",{id:"other-ways-to-create-a-nullable-aware-context"},"Other Ways to Create a Nullable Aware Context"),(0,l.kt)("p",null,"We can configure a nullable aware context in a few different ways. As we just saw, we can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"#nullable enable")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"#nullable disable")," annotations to sandwich any amount of code to create a nullable aware context:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Test\n{\n  #nullable enable\n  string NonNullString { get; set; } = "default value";\n  string? NullableString { get; set; }\n  public Test()\n  {\n\n  }\n  #nullable disable\n}\n')),(0,l.kt)("p",null,"We can also simply list the ",(0,l.kt)("inlineCode",{parentName:"p"},"#nullable enable")," annotation on its own at the top of a file to make the entire file have a nullable aware context. That would look something like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'#nullable enable\n\npublic class Test\n{\n  string NonNullString { get; set; } = "default value";\n  string? NullableString { get; set; }\n  public Test()\n  {\n\n  }\n}\n')),(0,l.kt)("p",null,"We can also enable a nullable aware context through our project file (",(0,l.kt)("inlineCode",{parentName:"p"},".csproj"),") by adding the ",(0,l.kt)("inlineCode",{parentName:"p"},"<Nullable>enable</Nullable>")," configuration like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'<Project Sdk="Microsoft.NET.Sdk">\n\n  <PropertyGroup>\n    <OutputType>Exe</OutputType>\n    <TargetFramework>net6.0</TargetFramework>\n    <Nullable>enable</Nullable>\n  </PropertyGroup>\n\n</Project>\n')),(0,l.kt)("p",null,"When you are just starting out with nullable types, we recommend creating a nullable aware context as needed, instead of setting a project-wide configuration. In the end, it's totally up to you and your project as to what makes the most sense. "),(0,l.kt)("p",null,"Finally, you will not be required to use nullable types on the upcoming independent project. However, we encourage you to experiment with nullable types in the projects you create."))}d.isMDXComponent=!0}}]);