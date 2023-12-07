---
layout: post
title: JavaScript - 동적으로 엘리먼트 추가하기
tags: JavaScript
description: >
  JavaScript - 동적으로 엘리먼트 추가하기
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

### 1. div 엘리먼트 만들기

document.createElement(태그명)<br>
var divEle = document.createElement("div");<br>
메모리에 `<div></div>` 생성된 상태<br>

### 2. 텍스트 노드 만들기

document.createTextNode(내용)<br>
var txt = document.createTextNode("테스트")<br>

### 3. 생성된 div 엘리먼트의 자식으로 텍스트 노드를 추가하기

부모.appendChild(자식) <br>
divEle.appendChile(txt)<br>

### 4. 아이디가 "list"인 엘리먼트에 생성된 div를 추가하기

var divList = document.querySelector("#list");<br>
divList.appendChile(divEle)<br>

---

![추가 버튼 외 아무것도 없는 브라우저의 모습](/assets/img/blog/study/20220609-study-add-element-1.png){:style="display:block; margin-left:auto; margin-right:auto" width="500" height="600"}

추가 버튼을 클릭하면 엘리먼트가 늘어납니다.<br><br>

![엘리먼트가 늘어난 브라우저의 모습](/assets/img/blog/study/20220609-study-add-element-2.png){:style="display:block; margin-left:auto; margin-right:auto" width="500" height="600"}

<br>

```html
<body>
  <button onclick="doAdd();">추가</button>
  <div id="list"></div>

  <script>
    var count = 1;
    function doAdd() {
      var list = document.querySelector("#list");

      //list.innerHTML = "<h2>추가" + count++ + "</h2>"

      // list.innerHTML += "<h2>추가" + count++ + "</h2>"

      // createElement 사용하기
      var h2 = document.createElement("h2"); // <h2></h2>
      var txt = document.createTextNode("추가" + count++);

      h2.appendChild(txt); // <h2>추가?</h2>

      list.appendChild(h2);
    }
  </script>
</body>
```
