---
layout: post
title: JavaScript - 특정 시간 뒤 지속적 함수 실행(SetInterval)
tags: JavaScript SetInterval
description: >
    JavaScript - 특정 시간 뒤 함수 실행(SetInterval)
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

특정 시간 뒤 지속적으로 함수를 실행해야 할 때 sSetInterval을 사용합니다.<br>

var id = setInterval (콜백 함수, 밀리세컨드)<br><br>

멈출 때는 clearInterval 사용합니다.<br>

clearInterval(id);<br>

```javascript
function fn() {
    var date = new Date();
    var time = date.toLocaleTimeString();

    console.log(time);
}
var id = setInterval(fn, 1000); //1초마다 fn 함수를 호출해라
setTimeout(function () {
    clearInterval(id);
}, 5100); // 5초 뒤에 멈춰라.
// setTimeout(function () {}, 5100)
// clearInterval(id);
```
