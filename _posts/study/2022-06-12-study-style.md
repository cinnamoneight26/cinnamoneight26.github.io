---
layout: post
title: JavaScript - css 변경. style / className
tags: JavaScript classNmae css style
description: >
    JavaScript - css 변경. style / className
accent_image:
    background: url('/assets/img/blog/javascript_bg.jpg') center/cover
    overlay: false
sitemap: false
published: true
# invert_sidebar: true
categories:
    - study
---

> ❗️해당 내용은 2018년 4월 22일 당시 공부한 내용을 그대로 옮겨온 글입니다.

---

```javascript
// window.navigator.userAgent // 사용자가 어떤 환경에서 접속했는지 체크
console.log(navigator.userAgent);
var msg;
var agent = navigator.userAgent;
if (agent.indexOf("iPhone") != -1) {
    msg = "iPhone 접속";
} else if (agent.indexOf("Android") != -1) {
    msg = "Android 접속";
} else {
    msg = "PC 환경 접속";
}
alert(msg);
```
