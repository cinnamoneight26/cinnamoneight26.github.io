---
layout: post
title: JavaScript - 마우스 휠 이벤트 mousewheel, wheel
tags: JavaScript mousewheel wheel 마우스휠이벤트 휠이벤트
description: >
  JavaScript - 마우스 휠 이벤트 mousewheel, wheel
accent_image:
  background: url('/assets/img/blog/javascript_bg.jpg') center/cover
  overlay: false
sitemap: false
published: true
# invert_sidebar: true
categories:
  - 탐구생활
---

---

### mousewheel

마우스 휠 이벤트로 Page Zoom 기능을 구현하는 과정 중 wheel 이벤트 정보를 찾았습니다.<br><br>

MDN web docs에 따르면 'mousewheel' 이벤트는 비표준이며, 'wheel'로 대체되었다고 합니다.<br>
(wheel 이벤트와 scroll 이벤트는 다릅니다.)<br>
그리고 IE, 크롬, 사파리 등의 브라우저는 wheel 이벤트를 사용하지만.<br>
파이어폭스 브라우저는 'wheel' 대신 'DOMMouseScroll' 이벤트를 사용합니다.<br><br>

```javascript
$(window).bind("wheel", function (event) {
  if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
    // scroll up
    console.log("스크롤 위로");
  } else {
    // scroll down
    console.log("스크롤 아래로");
  }
});
```

---

아래는 event로 받아오는 정보들입니다.<br>

![wheel event를 개발자도구로 본 모습](/assets/img/blog/study/20220613-study-wheelEvent-1.png){:style="display:block; margin-left:auto; margin-right:auto" width="auto" height="600"}

<br>

---

아래는 event.originalEvent로 받아오는 정보들입니다.<br>

![event.originalEvent를 개발자도구로 본 모습](/assets/img/blog/study/20220613-study-wheelEvent-2.png){:style="display:block; margin-left:auto; margin-right:auto" width="auto" height="600"}

---

event.originalEvent.wheelDelta 로 정보를 받아보면<br>
휠을 아래로 내렸을 때 `-120`<br>
휠을 위로 올렸을 때 `120`<br>
입니다.<br>

![event.originalEvent.wheelDelta를 개발자도구로 본 모습](/assets/img/blog/study/20220613-study-wheelEvent-3.png){:style="display:block; margin-left:auto; margin-right:auto" width="auto" height="600"}

---

<br>
아래는 휠 이벤트를 통해 요소의 크기를 키우고 줄이는 (Scale변경) 예제입니다.<br>

```html
<div>Scale me with your mouse wheel.</div>
```

```css
body {
  min-height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  width: 105px;
  height: 105px;
  background: #cdf;
  padding: 5px;
}
```

```javascript
function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector("div");
el.onwheel = zoom;
```

---

\*\* 참고 사이트<br>
<a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event#Listening_to_this_event_across_browser" target="_blank">https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event#Listening_to_this_event_across_browser</a>
