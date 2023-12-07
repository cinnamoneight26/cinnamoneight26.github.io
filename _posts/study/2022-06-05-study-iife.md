---
layout: post
title: JavaScript - 즉시 실행 함수
tags: JavaScript IIFE
description: >
  JavaScript - 즉시 실행 함수
accent_image:
  background: url('/assets/img/blog/javascript_bg.jpg') center/cover
  overlay: false
sitemap: false
published: true
# invert_sidebar: true
categories:
  - 탐구생활
---

> ❗️해당 내용은 2018년 4월 17일 당시 공부한 내용을 그대로 옮겨온 글입니다.

---

함수를 정의함과 동시에 바로 실행하는 함수입니다.<br>
최초 한번만 실행하는 코드를 처리하기에 적합합니다.<br>
대다수의 라이브러리에서 사용합니다.<br><br>

(함수 정의)(실행하기 위한 매개변수 값)<br>

```javascript
(function () {
  console.log("즉시 실행 함수 호출됨");
})();
(function (msg) {
  console.log("즉시 실행", msg);
})("abc"); // 앞의 괄호에서는 정의. 뒤에는 매개변수의 값을 넣을 수 있다.
```

결과 :<br>
즉시 실행 함수 호출됨<br>
즉시 실행 abc<br>
