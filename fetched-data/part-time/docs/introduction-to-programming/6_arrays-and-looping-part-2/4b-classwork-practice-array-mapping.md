---
title: 'Practice: Array Mapping'
id: practice-array-mapping
slug: practice-array-mapping
hide_table_of_contents: true
sidebar_position: 13
day: wednesday
type: exercise
url: >-
  https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4b_classwork_practice_array_mapping.md
---

**Goal**:  Now that we've learned about `Array.prototype.map()`, let's further hone our array mapping skills by completing the exercises detailed below.

## Warm Up
<hr />

* What is a callback function? How is it different from a plain old function?
* What portion of the following code is the callback function? What does this particular callback function do?

```javascript
const tripledNumbers = [0,3,6,9].map(function(number) {
  return number * 3;
});
```

* Does `Array.prototype.map()` alter the array it is called upon?
* Discuss with your partner when you would use `Array.prototype.forEach()` and when it might be better to use `Array.prototype.map()`.

## Code
---

### Array Mapping Practice

Complete the following in the JavaScript DevTools console:

* Make an array of numbers, then use `Array.prototype.map()` to return an array containing each of the original numbers + 1.
* Create an array of words. Use `Array.prototype.map()` to return an array of the same words in all uppercase.