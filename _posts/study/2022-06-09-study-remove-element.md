---
layout: post
title: JavaScript - 엘리먼트 동적으로 삭제(remove())
tags: JavaScript element remove
description: >
  JavaScript - 엘리먼트 동적으로 삭제(remove())
accent_image:
  background: url('/assets/img/blog/javascript_bg.jpg') center/cover
  overlay: false
sitemap: false
published: true
# invert_sidebar: true
categories:
  - 탐구생활
---

> ❗️해당 내용은 2018년 4월 19일 당시 공부한 내용을 그대로 옮겨온 글입니다.

---

![브라우저에 추가 버튼과 삭제 버튼이 있는 모습](/assets/img/blog/study/20220609-study-remove-element-1.png){:style="display:block; margin-left:auto; margin-right:auto" width="500" height="600"}

해당 화면에서 추가 버튼을 누르면 내용이 추가되고 삭제 버튼을 누르면 삭제됩니다.

```html
<body>
  <button onclick="doAdd();">추가</button>
  <button onclick="doDel();">삭제</button>
  <div id="list"></div>

  <script>
    function doAdd() {
      var count = 1;
      var list = document.querySelector("#list");
      list.innerHTML += "<h1>테스트</h1>";
    }
    function doDel() {
      var h1 = document.querySelector("h1");
      //h1.remove();
      //h1.parentNode.remove();          // 오류
      h1.parentElement.innerHTML = ""; // 한꺼번에 전체 다 삭제하기
    }
  </script>
</body>
```
