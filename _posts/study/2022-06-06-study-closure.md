---
layout: post
title: JavaScript - 클로저(closure)
tags: JavaScript closure
description: >
    JavaScript - 클로저(closure)
accent_image:
    background: url('/assets/img/blog/javascript_bg.jpg') center/cover
    overlay: false
sitemap: false
published: true
# invert_sidebar: true
categories:
    - study
---

> ❗️해당 내용은 2018년 4월 17일 당시 공부한 내용을 그대로 옮겨온 글입니다.

---

함수 내의 지역변수를 함수 외부에서 사용할 수 있게하는 것을 closure라고 합니다.<br>
생명 주기가 종료된 함수의 변수를 참조할 수 있게 하는 기술입니다.<br>

```javascript
function outer(val) {
    var msg = "당신의 메세지 : " + val; // 2
    return function () {
        return msg;
    }; // 3 , return 4, 6,7
}
var fn = outer("하이~"); // 1
//var fn = function() { return msg};
console.log(fn());
```

결과 :<br>
당신의 메세지 : 하이~<br>

---

```javascript
function nextId() {
    var id = 1;
    return function () {
        return id++;
    };
}

var id1 = nextId();
console.log(id1());

var id2 = nextId();
console.log(id2());
```

결과 :<br>
1<br>
1<br>

---

```javascript
function calClosure(num1, num2) {
    return function (comm) {
        switch (comm) {
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "*":
                return num1 * num2;
            case "/":
                return num1 / num2;
        }
    };
}
var cal = calClosure(10, 2);
console.log(cal("+")); // 12
console.log(cal("-")); // 8
console.log(cal("*")); // 20
console.log(cal("/")); // 5
```
