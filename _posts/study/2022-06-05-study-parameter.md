---
layout: post
title: JavaScript - 매개변수 타입에 따른 원본 데이터 영향
tags: JavaScript parameter
description: >
    JavaScript - 매개변수 타입에 따른 원본 데이터 영향
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

함수의 매개변수 타입이 `기본형`인 경우 원본 데이터에 영향이 없습니다.<br>

```javascript
var i = 100;

function fn(i) {
    i = i + 100;
    console.log("fn i : ", i);
}

fn(i);
console.log("글로벌 i : ", i);
```

결과 :<br>
fn i : 200<br>
글로벌 i : 100<br>

---

매개변수에 `객체 타입`이 넘어온 경우 원본 데이터에 영향을 끼칩니다.<br>

```javascript
var arr = [10, 20, 30]; //값 차제가 아니라 주소값을 참조함

function fn(arr) {
    arr.push(100);
}

fn(arr);
console.log(arr.length);
```

결과 :<br>
4<br>
