---
title: 'Whiteboading Practice: Asynchrony'
id: whiteboading-practice-asynchrony
slug: whiteboading-practice-asynchrony
hide_table_of_contents: true
sidebar_position: 7
day: wednesday
type: exercise
url: >-
  https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/4a_classwork_whiteboarding_practice_asynchrony.md
---

## Whiteboard Practice
---

When and how whiteboarding practice is implemented will be up to your teacher. Below is a recommended prompt.

### Goal

For this section's whiteboarding lesson, we'll focus on whiteboarding functions that use asynchrony. This isn't just good whiteboarding practice — it will also help you solidify these key concepts.

### Prompts

For both prompts, try to get the syntax and methods as close to correct as you can. That said, it's also okay to write some pseudocode or ask for assistance.

**Prompt 1**: Write a method that returns a promise. The promise should be wrapped around an GET request to a theoretical geography API (either using `fetch()` or an `XMLHttpRequest` object). Next, use `Promise.prototype.then()` to handle the return of the promise. The method should be able to handle errors.

**Prompt 2**: Write an async function that handles a GET request to a theoretical geography API using either `fetch()` or an `XMLHttpRequest` object. The async function should also handle the return of the API request (such as via a UI function or even just a `console.log()` statement). Make sure to include a `try...catch` block for error handling.