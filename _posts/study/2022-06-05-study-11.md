---
layout: post
title: JavaScript - 글로벌 변수와 로컬 변수
tags: JavaScript 글로벌변수 로컬변수
description: >
    JavaScript - 글로벌 변수와 로컬 변수
accent_image:
    background: url('/assets/img/blog/javascript_bg.jpg') center/cover
    overlay: false
sitemap: false
published: true
# invert_sidebar: true
categories:
    - study
---

> ❗️해당 내용은 2018년 4월 16일 당시 공부한 내용을 그대로 옮겨온 글입니다.

---

### 글로벌 변수와 로컬 변수

글로벌 변수는 함수 밖에 선언하며, 전역에서 사용이 가능합니다.<br>
로컬 변수는 함수 내에 선언하며, 함수 내에서만 사용이 가능합니다. 함수 종료와 함께 제거됩니다.<br>

```javascript
var msg = "글로벌 변수";
console.log("msg : ", msg);

function fn() {
    var localMsg = "로컬 변수";
    console.log("msg - fn :", msg);
    console.log("localMsg - fn :", localMsg);
}
fn();
```

결과 :<br>
msg : 글로벌 변수<br>
msg - fn : 글로벌 변수<br>
localMsg - fn : 로컬 변수<br>

---

글로벌 변수와 로컬 변수, 두 개의 영역은 독립적으로 관리됩니다.(스코프 체인)<br>

```javascript
var msg = "글로벌 변수";
var msg2 = "test";

console.log("msg : ", msg);

function fn() {
    var msg = "로컬 변수";
    console.log("msg - fn : ", msg);
    console.log("msg2 : " + msg2); // 내 영역에서 못 찾으면 나를 호출한 쪽을 찾는다. 스코프 체인
}
fn(); // 전역 컨텍스트에 존재함

console.log("msg fn 호출 후", msg);
```

결과 :<br>
msg : 글로벌 변수<br>
msg - fn : 로컬 변수<br>
msg2 : test<br>
msg fn 호출 후 글로벌 변수<br>

---

아래 예시에서는 변수 선언 시 var 대신 let을 사용하여 변수 호출에 문제가 있는 코드입니다.<br>
에러가 발생합니다.<br>

```javascript
function fn() {
    var i = 100;
    if (i % 2 == 0) {
        let msg = "짝수";
    }
    for (let k = 1; k <= 5; k++) {
        console.log(`${k}는 ${msg}이다`); // msg is not defined
    }
    console.log("k", k); // k is not defined
}
```
