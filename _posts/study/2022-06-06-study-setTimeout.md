---
layout: post
title: JavaScript - 특정 시간 뒤 함수 실행(SetTimeout)
tags: JavaScript settimeout
description: >
  JavaScript - 특정 시간 뒤 함수 실행(settimeout)
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

특정 시간 뒤 함수를 실행해야 할 때 setTimeout을 사용합니다.<br>

id setTimeout(콜백 함수, 밀리세컨드);<br><br>

등록된 setTimeout을 취소할 때는 clearTimeout을 사용합니다.<br>

clearTimeout(id);<br>

```javascript
var id = setTimeout(function () {}, 10000); // 10초 후에 앞의 익명함수를 실행하겠다. (id->구분자라고 함)
console.log("setTimeout 설정 후..."); // 10초 후에 실행되는 것이 아니라 위 시간 설정 이후 실행됨.
```

---

10부터 0까지 1초 간격으로 count하기<br>

```javascript
function fn() {
  var date = new Date();
  var time = date.toLocaleTimeString();

  console.log(time);

  var id = setTimeout(fn, 1000); // fn()함수가 끝나면 다시 실행
  //취소하기
  clearTimeout(id);
}
fn();

function fn2(count, msg) {
  var id = setTimeout(fn2, 1000, --count, msg);
  console.log("count : ", count, ", msg :", msg);

  if (count == 0) clearTimeout(id);
}
fn2(10, "hi");
```
