---
layout: post
title: JavaScript - css 변경. style / className
tags: JavaScript className css style
description: >
  JavaScript - css 변경. style / className
accent_image:
  background: url('/assets/img/blog/javascript_bg.jpg') center/cover
  overlay: false
sitemap: false
published: true
# invert_sidebar: true
categories:
  - 탐구생활
---

> ❗️해당 내용은 2018년 4월 22일 당시 공부한 내용을 그대로 옮겨온 글입니다.

---

특정 행동 시 css를 변경할 수 있습니다.<br>

```html
<h2 onclick="changeCss()">css 적용하기</h2>
```

---

<br>

![html의 h2가 적용된 브라우저의 모습](/assets/img/blog/study/20220612-study-cssChange-1.png){:style="display:block; margin-left:auto; margin-right:auto" width="500" height="600"}

<br>

```javascript
function changeCss() {
  var h2Ele = document.querySelector("h2"); // 적용대상 h2

  h2Ele.style.border = "5px solid tomato"; // 테두리
  h2Ele.style.height = "100px"; // 높이
  h2Ele.style.color = "blue"; // 글씨색
  h2Ele.style.padding = "30px"; // 안쪽 여백
  h2Ele.style.margin = "30px"; // 바깥 여백
  h2Ele.style.borderRadius = "30px"; // 테두리 둥굴게
  h2Ele.style.backgroundColor = "skyblue"; // 배경색
  h2Ele.style["line-height"] = "100px"; // inline 세로 가운데 정렬
  h2Ele.style.textAlign = "center"; // 가로 가운데 정렬
}
```

---

글자를 클릭하면 아래와 같이 변경됩니다.<br>

![글자를 클릭했을 때 css가 변경된 브라우저의 모습](/assets/img/blog/study/20220612-study-cssChange-2.png){:style="display:block; margin-left:auto; margin-right:auto" width="500" height="600"}

---

위 방법 보다는 특정 클래스에 대한 style을 지정해주고<br>
이벤트 발생 시 (예제에서는 클릭할 때 - onclick) 엘리먼트에 클래스 이름을 붙여주도록 하는 게 좋습니다.<br>

```css
.a {
  border: 5px solid tomato;
  color: blue;
  height: 100px;
  padding: 30px;
  margin: 30px;
  border-radius: 30px;
  background-color: skyblue;
  line-height: 100px;
  text-align: center;
}
```

<br>

```javascript
function changeCss() {
  var h2Ele = document.querySelector("h2"); // 적용 대상 h2

  // 클릭 시 해당 엘리먼트에 a라는 이름의 클래스를 생성한다.
  h2Ele.className = "a";
}
```
