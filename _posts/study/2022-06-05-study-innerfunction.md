---
layout: post
title: JavaScript - 내부 함수
tags: JavaScript 내부함수
description: >
  JavaScript - 내부 함수
accent_image:
  background: url('/assets/img/blog/javascript_bg.jpg') center/cover
  overlay: false
sitemap: false
published: true
# invert_sidebar: true
categories:
  - 탐구생활
---

> ❗️해당 내용은 2018년 4월 16일 당시 공부한 내용을 그대로 옮겨온 글입니다.

---

### 글로벌 변수와 로컬 변수

함수 안에 선언된 함수를 내부 함수라 합니다.<br>
내부 함수의 호출은 자신이 선언된 외부 함수 내에서만 접근이 가능합니다.<br>

```javascript
function outerFn() {
  console.log("outerFn");

  //내부함수
  function innerFn() {
    console.log("innerFn");
  }
  innerFn(); // 내부함수 호출
}
outerFn();
```

결과 :<br>
outerFn<br>
innerFn
<br>
