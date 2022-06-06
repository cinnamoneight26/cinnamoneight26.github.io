---
layout: post
title: JavaScript - parameter default 설정
tags: JavaScript parameter
description: >
    JavaScript - parameter default 설정
accent_image:
    background: url('/assets/img/blog/javascript_bg.jpg') center/cover
    overlay: false
sitemap: false
published: true
# invert_sidebar: true
categories:
    - study
---

> ❗️해당 내용은 2018년 4월 18일 당시 공부한 내용을 그대로 옮겨온 글입니다.

---

ES6에 추가된 기능입니다.<br>

parameter에 default 값을 설정해서 간편하게 사용합니다.<br>

parameter에 값이 없는 경우 초기화 시킵니다.<br>

```javascript
function fn(num1, num2) {
    //if(!num1) num1 = 0;
    //if(!num2) num2 = 0;
    num1 = num1 || 0;
    num2 = num2 || 0;
    console.log(num1, num2);
}
fn();
fn(100);
fn(100, 100);
```

결과 :<br>
0 0<br>
100 0<br>
100 100<br>

---

다음과 같이 사용하는 것도 가능합니다.<br>

```javascript
function fn2(num1 = 0, num2 = 0) {
    console.log(num1, num2);
}
fn2();
fn2(100);
fn2(100, 100);
```

결과 :<br>
0 0<br>
100 0<br>
100 100<br>
