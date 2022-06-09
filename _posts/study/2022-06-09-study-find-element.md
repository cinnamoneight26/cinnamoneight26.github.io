---
layout: post
title: JavaScript - DOM으로 엘리먼트 찾기

tags: JavaScript DOM
description: >
    JavaScript - DOM으로 엘리먼트 찾기
accent_image:
    background: url('/assets/img/blog/javascript_bg.jpg') center/cover
    overlay: false
sitemap: false
published: true
# invert_sidebar: true
categories:
    - study
---

> ❗️해당 내용은 2018년 4월 18일 당시 공부한 내용을 그대로 옮겨온 글입니다.

---

### getElementsByTagName

태그 이름으로 엘리먼트를 찾습니다.

### getElementById

아이디로 엘리먼트를 찾습니다.

### getElementsByClassName

클래스로 엘리먼트를 찾습니다.

```html
<body>
    <button onclick="doAction(1);">태그 선택자</button>
    <button onclick="doAction(2);">아이디 선택자</button>
    <button onclick="doAction(3);">클래스 선택자</button>

    <div>테스트1</div>
    <div id="a">테스트2</div>
    <div class="b">테스트3</div>
    <script>
        function doAction(type) {
            switch (type) {
                case 1: // getElementsByTagName : 태그 이름으로 엘리먼트를 찾는다.
                    //document.querySelectorAll("div");
                    var list = document.getElementsByTagName("div"); // 유사 배열 형태
                    for (let i = 0; i < list.length; i++) {
                        console.log(list[i].innerText);
                    }
                    break;

                case 2: // getElementById : 아이디 검색
                    // document.querySelector("#a");

                    var ele = document.getElementById("a"); // id는 한개만 있어서
                    console.log(ele.innerText);
                    break;

                case 3: // getElementsByClassName : 클래스 검색
                    // document.querySelectorAll(".b");
                    var list = document.getElementsByClassName("b");

                    for (let i = 0; i < list.length; i++) {
                        console.log(list[i].innerText);
                    }
                    break;
            }
        }
    </script>
</body>
```

위 코드를 웹 브라우저로 실행하면 아래와 같은 화면이 보입니다.<br><br>

![위 코드를 브라우저에서 본 모습](/assets/img/blog/study/20220609-study-find-element-1.png){:style="display:block; margin-left:auto; margin-right:auto" width="500" height="600"}

---

태그 선택자 버튼을 클릭하면 크롬 개발자 도구의 콘솔을 통해 아래와 같은 내용을 확인 할 수 있습니다.<br>
document.getElementByTagName("div")를 사용하여<br>
모든 div 엘리먼트를 찾습니다.<br>
돌려주는 값은 여러개일 수 있기 때문에 유사배열 형태입니다.<br>

![태그 선택자 버튼을 클릭 후 브라우저에서 본 모습](/assets/img/blog/study/20220609-study-find-element-2.png){:style="display:block; margin-left:auto; margin-right:auto" width="500" height="600"}

---

아이디 선택자를 선택하면 아래와 같습니다.<br>
document.getElementById("a")<br>
id 중 'a'를 찾습니다.<br>
id는 유일하게 한번만 사용하므로 한개만 나옵니다.<br>

![아이디 선택자 버튼을 클릭 후 브라우저에서 본 모습](/assets/img/blog/study/20220609-study-find-element-3.png){:style="display:block; margin-left:auto; margin-right:auto" width="500" height="600"}

---

클래스 선택자를 선택하면 아래와 같습니다.<br>
document.getElementsByClassName('b')<br>
클래스도 여러 개 있을 수 있어 유사배열 형태로 돌려줍니다.<br>

![클래스 선택자 버튼을 클릭 후 브라우저에서 본 모습](/assets/img/blog/study/20220609-study-find-element-4.png){:style="display:block; margin-left:auto; margin-right:auto" width="500" height="600"}

---
