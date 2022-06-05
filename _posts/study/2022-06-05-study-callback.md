---
layout: post
title: JavaScript - callback
tags: JavaScript callback
description: >
    JavaScript - callback
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

### Callback

자바스크립트 라이브러리에서 가장 많이 사용되는 형태입니다.<br>
함수도 데이터 타입의 일종이기 때문에 값처럼 주고 받을 수 있습니다.<br>

```javascript
function fn() {
    console.log("fn 호출됨");
}

//함수는 객체의 값처럼 사용 가능하기 때문에 변수에 담을 수 있다.
var f1 = fn;
var f2 = f1;
fn();
f1();
f2();
```

결과 :<br>
fn 호출됨<br>
fn 호출됨<br>
fn 호출됨<br>

---

### 매개 변수로 함수 넘기기

매개 변수로 함수를 넘길 때 주로 익명함수를 사용합니다.<br>

```javascript
function fn(cb) {
    console.log(typeof cb);
    cb(); // 함수 형태의 값을 가지고 있어야 함 ()가 붙었음. cb에 들어온 함수를 받아서 실행
}

fn(function () {
    console.log("익명 함수 실행됨");
});

// 화살표 함수 변경
fn(() => console.log("익명 함수 실행됨"));
```

결과 :<br>
function<br>
익명 함수 실행됨<br>
function<br>
익명 함수 실행됨<br>
