---
layout: post
title: 16진수를 2진수로, 2진수를 8진수로 변환
tags: 16진수 8진수 2진수 10진수 이진수 십진수 16진수를2진수로 2진수를8진수로 이진수를8진수로변환 진수변환 진수
description: >
    16진수를 2진수로, 2진수를 8진수로 변환
accent_image:
    background: url('/assets/img/blog/javascript_bg.jpg') center/cover
    overlay: false
sitemap: false
published: true
# invert_sidebar: true
categories:
    - study
---

---

![image1](/assets/img/blog/study/20220613-study-hexadecimal-1.png){:style="display:block; margin-left:auto; margin-right:auto" width="auto" height="600"}

<br>

16진수는 숫자 0부터 9까지 사용하며 10부터 15까지는 A ~ F로 대응합니다.<br><br>

굳이 써보자면<br>
16진수 A = 10진수 10<br>
16진수 B = 10진수 11<br>
16진수 C = 10진수 12<br>
16진수 D = 10진수 13<br>
16진수 E = 10진수 14<br>
16진수 F = 10진수 15<br><br>

이렇게 대응합니다.<br>

---

예를들어 16진수 `'81DF'` 를 십진수로 변환한다면 아래와 같습니다.<br>

![image2](/assets/img/blog/study/20220613-study-hexadecimal-2.png){:style="display:block; margin-left:auto; margin-right:auto" width="auto" height="600"}

<br>

위에서 구한 십진수를 다시 이진수로 전환합니다.<br><br>

33247를 2로 더이상 나누어지지 않을 때까지 나누면 아래와 같은 이진수가 나옵니다.<br>
(십진수를 이진수로 변환하는 방법은 다른 곳에 <a href="https://cinnamoneight26.github.io/study/2022-06-13-study-decimaltobinary" target="_blank">포스팅</a> 해놓았습니다.)<br><br>

이제 구한 이진수를 8진수로 변환하려면 먼저 이진수의 숫자를 세자리씩 묶어주어야 합니다.<br>

![image3](/assets/img/blog/study/20220613-study-hexadecimal-3.png){:style="display:block; margin-left:auto; margin-right:auto" width="auto" height="600"}

<br>
그리고 세자리씩 묶은 숫자에 이진수 자리곱을 곱합니다.<br>
<br>

![image4](/assets/img/blog/study/20220613-study-hexadecimal-4.png){:style="display:block; margin-left:auto; margin-right:auto" width="auto" height="600"}

<br>
위의 식을 구한 답을 보면 아래와 같습니다.<br>
<br>

![image5](/assets/img/blog/study/20220613-study-hexadecimal-5.png){:style="display:block; margin-left:auto; margin-right:auto" width="auto" height="600"}

<br><br>

16진수 81DF에 대한 8진수는 `100737`입니다.<br><br>

16진수를 이진수로 변환하고, 이진수를 8진수로 변환하는 여러 방법이 있겠지만<br>
저는 십진수로 우선 변환한 다음에 계산하는 게 편해서 이런 방법을 쓰고 있습니다.<br>

1. 16진수에 대한 십진수값을 먼저 구한다.
2. 십진수에 대한 이진수를 구한다.
3. 이진수를 8진수로 변환한다.

---

\*\* 굳이 머리쓰지 않고 구하려면 아래 페이지로 가서 구하는 방법도 있습니다.<br>
(풀이는 나오지 않습니다.)<br><br>

<a href="https://www.mathwarehouse.com/solved-problems/conversions" target="_blank">https://www.mathwarehouse.com/solved-problems/conversions</a>
