---
layout: post
title: JavaScript - 3초 후 페이지 이동 / 새로고침
tags: JavaScript 3초후페이지이동 새로고침
description: >
    JavaScript - 3초 후 페이지 이동 / 새로고침
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
// 3초 후 다른 페이지 이동
setTimeout(function () {
    location.href = "http://www.naver.com";
}, 3000);

// 페이지 새로고침
setTimeout(function () {
    // 1번. location.href = location.href;
    // 3초마다
    location.reload();
}, 3000);
```
