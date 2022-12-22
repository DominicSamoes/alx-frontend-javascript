# 0x01. ES6 Promises

## Description

What I learned from the tasks:

* Promises (how, why, and what)
* How to use the then, resolve, catch methods
* How to use every method of the Promise object
* Throw / Try
* The await operator
* How to use an async function

---

## General Requirements
* Allowed editors: vi, vim, emacs, Visual Studio Code.
* Your code should use the js extension
* Your code will be tested using the Jest Testing Framework
* Your code will be analyzed using the linter ESLint along with specific rules that we’ll provide
* All of your functions must be exported
---

# Tasks

###[0. Keep every promise you make and only make promises you can keep](./0-promise.js)
* Return a Promise using this prototype function getResponseFromAPI()

```
bob@dylan:~$ cat 0-main.js
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
true
bob@dylan:~$ 
```

### [1. Don't make a promise...if you know you can't keep it](./ 1-promise.js)

* Modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.

```
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
```

### [](./)




---

### Author
* **Dominic Samo** - (https://github.com/DominicSamoes)
