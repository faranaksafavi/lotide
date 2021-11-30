# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @faranaksafavi/lotide`

**Require it:**

`const _ = require('@faranaksafavi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(a , b)`:  taking two arrays and return passed if it is equal and failed otherwise.
* `assertEqual(a,b)`: return passed if it is equal and failed otherwise.
* `assertObjectEqual(a,b)`: taking two objects and return passed if it is equal and failed otherwise.
* `countLetters(a)`: taking string and return object with numbers of occurrence of each letter.
* `countOnly(a,b)`: taking an array "a" and  object "b" and return object with numbers of occurrence of each item in array.
* `eqArray(a,b)`: taking two arrays and return true if those are equal.
* `eqObject(a,b)`: taking two objects and return true if those are equal.
* `findKey(a,b)`: takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value.
* `head(a)`: take  an array and return the first item in array.
* `letterPositions(a)`: taking a string  and return an object with numbers of occurrence of each letter in the string.
* `map(a , b)`: taking  an array and
a callback function and return a new array based on the results of the callback function.
* `map(a , b)`: taking  an array  with the middle item of first array if it's length is odd and mean of two middle items if the length is even.