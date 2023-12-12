---
layout: post
title: HTTP 메서드 활용
tags: HTTP
description: >
  인프런 - 모든 개발자를 위한 HTTP 웹 기본 지식 강의 중 섹션 5을 듣고 정리하였습니다.
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

### 클라이언트에서 서버로 데이터 전송

데이터 전달 방식은 크게 두 가지입니다.

1. 쿼리 파라미터를 통한 데이터 전송

   1-1. GET

   1-2. 주로 정렬 필터

2. 메시지 바디를 통한 데이터 전송

   2-1. POST, PUT, PATCH

   2-2. 회원 가입, 상품 주문, 리소스 등록, 리소스 변경

---



<h2>4가지 상황으로 나누어 보기</h2>

* 정적 데이터 조회(ex: /static/star.jpg)
  * 이미지, 정적 텍스트 문서
  * 조회는 GET을 사용
  * 정적 데이터는 일반적으로 쿼리 파라미터 없이 리소스 경로로 단순하게 조회 가능
* 동적 데이터 조회(ex: /search?q=hello&hl=ko)
  * 주로 검색, 게시판 목록에서 정렬 필터(검색어)
  * 조회는 GET 사용
  * GET은 쿼리 파라미터 사용해서 데이터를 전달
* HTML Form 데이터 전송 
  * HTML Form은 GET 전송도 가능 (단 GET으로 전송하면 쿼리 파라미터 형식으로 들어감)
  * HTML Form submit 시 POST 전송 
    * 회원 가입, 상품 주문, 데이터 변경 등
  * Content-Type : application/x-www-form-urlencoded 사용
    * form의 내용을 메시지 바디를 통해서 전송(Key=value 형태. 쿼리 파라미터 형식)
    * 전송 데이터를 url encoding 처리(예: abc김 -> abc%EA%B9%80)
  * Content-Type: Multipart/form-data
    * 파일 업로드 같은 바이너리 데이터 전송 시 사용
    * 다른 종류의 여러 파일과 폼의 내용을 함께 전송할 수 있음 (이름이 multipart인 이유)
    * 만약 form으로 데이터를 전송하는 데이터가 key, value로 이루어진 데이터가 아니라 이미지 같은 것이 포함되어 있을 때 사용. 웹브라우저가 랜덤으로 데이터의 경계를 잘라서 알아서 보내줌. 이미지의 경우 Content-Type: image/png로 바이트 정보를 보내줌. 이런 방식으로 여러 컨텐츠 타입에 대한 데이터들을 보낼 수 있음.
  * HTML Form 전송은 GET, POST만 지원
* HTTP API 데이터 전송
  * 회원 가입, 상품 주문, 데이터 변경
  * 서버 to 서버
    * 백엔드 시스템 통신
  * 앱 클라이언트
    * 아이폰, 안드로이드
  * 웹 클라이언트
    * HTML에서 form 전송 대신 JavaScript를 통한 통신에 사용(AJAX)
    * React, VueJs 같은 웹 클라이언트와 API 통신
  * POST, PUT, PATCH: 메세지 바디를 통해 데이터 전송
  * GET: 조회, 쿼리 파라미터로 데이터 전달
  * Content-Type: application/json을 주로 사용(사실상 표준)
    * TEXT, XML, JSON 등등

---



### HTTP API 설계 예시
