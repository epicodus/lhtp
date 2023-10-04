---
title: Introduction to Functional Programming
id: introduction-to-functional-programming
slug: introduction-to-functional-programming
hide_table_of_contents: true
sidebar_position: 2
day: weekend
type: lesson
url: >-
  https://github.com/epicodus-curriculum/react-full-stack/blob/main/0b_introduction_to_functional_programming.md
---

Up to this point, we have mostly focused on object-oriented programming. We've built objects that store information and have methods attached to them. Object-oriented programming relies on techniques like **inheritance** and **encapsulation**.

Functional programming is a completely different paradigm. In general, the goal of a functional program is to be **stateless**, which means we can no longer store information in objects. Functional programming focuses on what objects _do_, not on what they _are_. Instead of storing information in objects, we will pass information between functions. We will no longer **mutate** state — that means we won't even reassign values to variables. In other words, no more `let`, only `const`.

Object-oriented programming focuses on objects themselves while functional programming is focused on functions. We've used OOP in very concrete ways; for instance, a dog barks or a player stores a score.

In functional programming, our goal is to make our functions more abstract. This can make functional programming harder to grasp at first. However, once a function is abstracted, we can use it with many different objects. While OOP uses inheritance to give many kinds of objects functionality, functional programming uses a technique called **composition**. We will learn more about composition and how it works in a future lesson.

While we will focus on functional programming techniques during this course section, both object-oriented and functional programming have their advantages and disadvantages. A good coder will incorporate both paradigms, even in the same application.