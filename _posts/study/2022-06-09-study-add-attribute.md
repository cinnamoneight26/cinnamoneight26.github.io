---
layout: post
title: JavaScript - 엘리먼트에 속성을 추가하는 두 가지 방법
tags: JavaScript attribute
description: >
  JavaScript - 엘리먼트에 속성을 추가하는 두 가지 방법
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

엘리먼트에 속성을 추가하는 방법은 아래와 같습니다.<br><br>

1. 객체.속성명 = 값<br>
2. DOM API 인 setAttribute 사용하기<br><br>

두 개의 차이점은 사용자 정의 속성을 확인할 수 있느냐 없느냐의 차이가 있습니다.<br><br>

---

### 1. 객체.속성명 = 값

```html
<body>
  <button onclick="doAdd();">추가</button>
  <div id="list"></div>

  <script>
    function doAdd() {
      var list = document.querySelector("#list");
      // <img msg="test" width="200" height="150" src="test1.jpg" />
      var img = document.createElement("img");
      img.src = "test1.jpg";
      img.width = 200;
      img.height = 150;

      // 사용자가 직접 속성을 추가 : 브라우저에 추가되지 않는다.
      img.msg = "text";

      list.appendChild(img);
    }
  </script>
</body>
```

사용자 정의 속성 msg를 지정했으나 콘솔에서 확인되지 않습니다.<br><br>

![사용자 정의 속성 msg를 지정했으나 콘솔에서 확인되지 않는 모습](/assets/img/blog/study/20220609-study-add-attribute-1.png){:style="display:block; margin-left:auto; margin-right:auto" width="500" height="600"}

---

### 2. DOM API인 setAttribute 사용하기

```html
<body>
  <button onclick="doAdd();">추가</button>
  <div id="list"></div>

  <script>
    function doAdd() {
      var list = document.querySelector("#list");
      // <img msg="test" width="200" height="150" src="test1.jpg" />
      var img = document.createElement("img");

      img.setAttribute("src", "test1.jpg");
      img.setAttribute("width", 200);
      img.setAttribute("height", 150);

      // 사용자 정의 속성
      img.setAttribute("msg", "text");

      list.appendChild(img);
    }
  </script>
</body>
```

사용자가 지정한 속성명을 확인할 수 있습니다.<br><br>

![지정한 사용자 정의 속성을 확인](/assets/img/blog/study/20220609-study-add-attribute-2.png){:style="display:block; margin-left:auto; margin-right:auto" width="500" height="600"}

---

사용자 정의 태그 사용 시 웹표준에 어긋나므로 지정해 준 이름을 앞에 붙여서 사용합니다.<br>
'data-'로 시작하면 됩니다.<br>
아래는 웹표준에 맞는 사용자 정의 태그 예시입니다.<br>

```html
<body>
  <!-- data- 으로 시작하는 것은 사용자 정의 태그. 안 쓰면 표준에 어긋남 -->
  <button onclick="doAction();">확인</button>
  <div id="result" data-msg="test">속성 확인용</div>

  <script>
    function doAction() {
      var divObj = document.querySelector("div");
      console.log("id", divObj.id); //  가져오는 방식1
      console.log("id", divObj.getAttribute("id")); //  가져오는 방식2
      console.log("id", divObj["id"]); //  가져오는 방식 3

      //console.log("id",divObj.data-msg);
      // console.log("id",divObj.getAttribute("data-msg"));
      console.log("id", divObj["data-msg"]);
    }
  </script>
</body>
```
