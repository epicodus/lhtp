---
title: The Problems of Classical Inheritance
id: the-problems-of-classical-inheritance
slug: the-problems-of-classical-inheritance
hide_table_of_contents: true
sidebar_position: 24
day: sunday
type: lesson
url: >-
  https://github.com/epicodus-curriculum/react-full-stack/blob/main/0h_the_problems_of_classical_inheritance_old.md
---

In Intermediate JavaScript, we learned about the concept of **inheritance**. We explored this concept further in both Ruby/Rails and C#/.NET. A quick refresher: inheritance is when a child object gains the functionality of a parent object. In the case of classical inheritance, that functionality is passed down through classes. For instance, objects from a `Cat` class could inherit from a `Mammal` class and so on. In the case of JavaScript, that functionality is passed down via prototypal inheritance, though we have the syntactic sugar of classes with ES6.

There are some issues with inheritance, however. One big issue is that it doesn't always make sense for an object to inherit all the functionality of another kind of object. This is more of an issue with classical inheritance, since prototypal inheritance can be targeted to individual objects and not just classes. As our codebases get more complex, we could end up in a situation where we're stuck giving objects all kinds of functionality that they don't need — and some of that unneeded functionality could lead to bugs as well as code that's hard to understand. Joe Armstrong, the creator of the functional language Erlang, has the perfect quote for this issue: "You wanted a banana but what you got was a gorilla holding the banana and the entire jungle."

There are several other issues with classical inheritance. Imagine you're building an application that characterizes the behavior of various mammals. For that reason, you decide to start with a `Mammal` class and to add various methods that should presumably apply to all mammals. As your application begins to grow, however, not all the methods apply to all of the mammals inheriting from the `Mammal` class. After all, there's a lot of variance in the animal kingdom — and by the time you need to add a `Platypus` class, the entire application is in desperate need of a refactor. If only the `Reptile` and `Bird` classes allow for egg-laying methods, how would that method be incorporated into `Platypus`? Not only is a `Platypus` neither type of animal, but it's already inheriting from another class, anyway.

The problem here is that classical inheritance forces us to add functionality up front that may cause us problems further down the road. We should always aim to make our code as flexible as possible. After all, we never know what our application will need as it gets bigger and scales up. Unfortunately, classical inheritance isn't very flexible.

This is because inheritance **tightly couples** classes and their objects. A piece of code is tightly coupled to another piece of code when they are reliant on each other for functionality. That means if something breaks or needs to be changed in one piece of the code, it will likely also break or need to be changed in another piece of code. This becomes increasingly problematic as an application gets larger and more and more things become reliant on a single piece of code.

For that reason, we should always endeavor to keep our code **loosely coupled**. Loosely coupled code isn't overly reliant on another piece of code to work. While two pieces of code may be related, they can work independently of each other. Pure functions are a good example of this — they take a value and return a value and don't really care about the rest of the application.

We'll discuss functional solutions to the problem of classical inheritance soon. While you should know what classical inheritance is and how to use it, it's also important to be aware that it can cause problems because it results in tightly coupled, less flexible code.
