---
layout: post
title: JavaScript - Arguments
tags: JavaScript Arguments
description: >
  JavaScript - Arguments
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

### Arguments

함수의 매개변수입니다. <br>
기본 제공되는 property(내부 프로퍼티)를 Arguments라고 합니다.<br>
유사 배열 객체는 배열과 유사하게 사용할 수 있도록 선언된 객체이며 length 사용이 가능합니다.<br>

```javascript
function fn() {
  //   console.log(arguments);
  //   console.log(arguments.length);

  for (var i = 0; i < arguments.length; i++) {
    console.log("호출 시 넘어 온 매개변수 개수 : " + arguments[i]);
  }
}
// 결과 :
// {}
// { '0': 1, '1': 10 }
// { '0': 1, '1': 10, '2': 100, '3': 1000 }

fn();
fn(1, 10);
fn(1, 10, 100, 1000); // 이름만 맞으면 매개변수의 개수와 상관없이 호출됨
```
