---
layout: post
title: HTTP 기본
tags: HTTP stateful stateless
description: >
    인프런 - 모든 개발자를 위한 HTTP 웹 기본 지식 강의 중 섹션 3을 듣고 정리하였습니다.
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

### 모든 것이 HTTP(HyperText Transfer Protocol)

요즘에는 모든 것을 http 메시지에 담아서 전송합니다.
html, text, image, 음성, 영상, 파일, json, xml 등 거의 모든 형태의 데이터를 전송할 수 있으며
서버간에 데이터를 주고 받을 때도 대부분 HTTP를 사용합니다.

-   HTTP/0.9 (1991년) : GET 메서드만 지원, HTTP 헤더 없음
-   HTTP/1.0 (1996년) : 메서드, 헤더 추가
-   HTTP/1/1 (1997년) : 가장 많이 사용, 우리에게 가장 중요한 버전.
-   HTTP/2 (2015년) : 성능 개선. TCP 기반 프로토콜
-   HTTP/3 진행 중 : TCP 대신 UCP 사용. 성능 개선. UCP 기반 프로토콜

아래 이미지를 확인해보면 구글에서는 프로토콜 h3이라고 볼 수 있는데 HTTP/3을 사용하고 있다는 의미입니다.

![image1](/assets/img/blog/study/20220617-study-http-1.png){:style="display:block; margin-left:auto; margin-right:auto" width="auto" height="600"}

---

HTTP의 특징에 대해서는 아래에서 자세히 기술하겠습니다.

-   클라이언트 서버 구조
-   무상태 프로토콜(스테이스리스), 비 연결성
-   HTTP 메시지
-   단순함, 확장 가능

### 클라이언트 서버 구조

HTTP는 Request Response 구조로 이루어져 있습니다. 클리이언트는 서버에 요청을 보내고 응답을 대기합니다.
서버가 요청에 대한 결과를 만들어서 응답합니다.
비즈니스 로직, 데이터 등은 서버에 두고 클라이언트는 UI를 그리는 등 사용성에 집중합니다.
서버와 클라이언트를 분리하면 양쪽이 독립적으로 진화할 수 있습니다.

### Stateful, Stateless

무상태 프로토콜(stateless)는 서버가 클라이언트의 상태를 보존하지 않습니다.
이는 서버의 확장성이 높다는 장점을 지니지만(스케일 아웃) 클라이언트가 추가 데이터를 전송해야 한다는 단점을 가지고 있습니다.(데이터를 많이 보냅니다.)
반대 개념은 상태 유지(stateful)입니다.

모든 것을 무상태로 설계할 수 있는 경우도 있고 없는 경우도 있습니다.
예로, 로그인이 필요 없는 단순한 서비스 소개화면(이벤트 소개 페이지)의 경우 무상태로 진행 가능하지만 로그인은 상태를 유지해야 합니다.
로그인 한 사용자의 경우 로그인을 했다는 상태를 서버에 유지해야합니다.
일반적으로 브라우저 쿠키와 서버 세션 등을 사용해서 상태를 유지합니다.
상태 유지는 최소한만 사용합니다.

### 비 연결성(connenctionless)

연결을 유지하는 모델의 경우 여러 개의 클라이언트가 서버에 연결되어 있을 때 클라이언트가 별 다른 요청을 하지않아도 서버는 계속 연결을 유지해야하기 때문에 서버 자원을 소모합니다.
연결을 유지하지 않는 모델의 경우 클라이언트에서 요청이 왔을 때 서버에서 응답을 하고 TCP/IP 연결을 종료합니다. 서버는 연결을 유지하지 않으며 최소한의 자원을 유지합니다.
HTTP는 기본적으로 연결을 유지하지 않는 모델입니다. 일반적으로 초 단위 이하의 빠른 속도로 응답하며 1시간 동안 수천명이 서비스를 사용해도 실제 서버에서 동시에 처리하는 요청은 수십개 이하로 매우 작습니다. 그렇기 때문에 서버 자원을 매우 효율적으로 사용할 수 있습니다.

하지만 이런 비 연결성에도 단점은 존재합니다.
TCP/IP 연결을 새로 맺어야 하기 때문에 3 way handshake를 진행하는 시간이 추가됩니다.
웬 브라우저로 사이트를 요청하면 HTML 뿐만 아니라 자바스크립트, css, 추가 이미지 등등 수 많은 자원이 함께 다운로드됩니다.
현재는 HTTP 지속 연결(Presistent Connections)로 문제를 해결하였으며 HTTP/2, HTTP/3에서 더 많은 최적화가 이루어진 상태입니다.

### HTTP 메시지

HTTP 메시지 구조

![image1](/assets/img/blog/study/20220617-study-http-2.png){:style="display:block; margin-left:auto; margin-right:auto" width="auto" height="300"}

요청 메시지<br>

-   start-line = request-line / status-line
-   request-line = method SP(공백) request-target SP HTTP-version CRLF(엔터)
-   HTTP 메서드<br>
    종류: GET, POST, PUT, DELETE...<br>
    서버가 수행해야 할 동작을 지정합니다.(GET: 리소스 조회, POST: 요청 내역 처리)
-   요청 대상 (/search?q=hello&hl=ko)<br>
    absolute-path[?query] (절대경로[?쿼리])<br>
    절대 경로: "/"로 시작하는 경로<br>
-   HTTP Version
    <br><br>

응답 메시지<br>

-   start-line = request-line / status-line
-   status-line = HTTP-version SP status-code SP reason-phrase CRLF
-   HTTP 버전
-   HTTP 상태 코드: 요청 성공, 실패를 나타냄
    200: 성공
    400: 클라이언트 요청 오류
    500: 서버 내부 오류
-   이유 문구: 사람이 이해할 수 있는 짧은 상태 코드 설명 글(OK)

<br>

---

<br>
HTTP 헤더
<br>

HTTP 전송에 필요한 모든 부가 정보가 다 들어있습니다.<br>
예를들어 메시지 바디의 내용, 메시지 바디의 크기, 압축, 인증, 요청 클라이언트(브라우저) 정보, 서버 애플리케이션 정보, 캐시 관리 정보 등...<br>
표준 헤더가 정말 많고, 필요 시 임의의 헤더 추가가 가능합니다.<br><br>

-   header-field = field-name ":" OWS(OWS: 띄어쓰기 허용) field-value OWS
-   field-name은 대소문자 구분 없음

<br>

---

<br>
메시지 바디
<br>
* 실제 전송할 데이터
* HTML 문서, 이미지, 영상, JSON 등등 byte로 표현할 수 있는 모든 데이터 전송 가능
