---
layout: post
title: JavaScript - 팝업 띄우기
tags: JavaScript popup 팝업
description: >
    JavaScript - 팝업 띄우기
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

브라우저 최상의 객체는 window입니다.<br>

### window.open(url, target, option)

url - 창에 어떤 페이지를 보일지 주소<br>
target - 동일한 이름이면 같은 페이지에서 재활용, 다르면 새 창 띄우기<br>
option - 창의 넓이, 위치, 스크롤 등 옵션 설정<br><br>

```html
<button onclick="openPop(1)">팝업창1</button>
<button onclick="openPop(2)">팝업창2</button>
<button onclick="openPop(3)">팝업창3</button>
<button onclick="openPop(4)">팝업창4</button>

<h2 id="result"></h2>
```

<br>

---

<br>

```javascript
function doResult(msg) {
    document.querySelector("#result").innerHTML = msg;
}

function openPop(type) {
    switch (type) {
        case 1:
            window.open(
                "http://www.naver.com",
                "pop1",
                "width=400, height=300"
            );
            break;
        case 2:
            window.open("http://www.naver.com", "", "width=400, height=300");
            break;
        case 3:
            console.log(screen.width, screen.height); // 해상도 보기 : screen
            // 화면 가운데 자리 구하기
            var left = (screen.width - 400) / 2;
            var top = (screen.height - 300) / 2;
            window.open(
                "http://www.naver.com",
                "",
                `width=400, height=300, left=${left}, top=${top}`
            );
            break;
            break;

        case 4:
            window.open("test01_child.html", "", "width=400, height=300");
            break;
    }
}
```

<br><br>

case 1 : target을 같은 이름으로 주었기 때문에 버튼을 클릭할 때 마다 새 창이 새로고침 됩니다.<br>
case 2 : target을 빈 값을 주어 버튼을 클릭 할 때 마다 새로운 창이 생깁니다.<br>
case 3 : 옵션을 주어 화면 가운데에서 새 창이 뜨도록 합니다.<br>
case 4 : 새로운 주소의 페이지를 띄우고 해당 페이지에서 작성한 내용이 본래의 페이지에 적용됩니다.<br><br>

---

<br><br>
case 4에서 사용한 test01_child.html 코딩<br><br>

```html
<h2>자식 페이지</h2>
메세지 : <input type="text" id="msg" />
<button onclick="winClose()">닫기</button>

<script>
    function winClose() {
        // 자신을 띄운창에 접근 : opener
        opener.doResult(document.querySelector("#msg").value); // 나를 띄운 부모창의 doResult에 접근

        self.close();
    }
</script>
```

<br>
위 상태에서 메세지에 글을 입력하고 닫기를 누르면 <br>
원래 새 창을 띄우기 위해 버튼을 만들었던 페이지에 메세지가 출력됩니다.<br>
