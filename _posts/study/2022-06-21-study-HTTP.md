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
    - study
---

---

### 클라이언트에서 서버로 데이터 전송

데이터 전달 방식은 크게 두 가지입니다.

-   쿼리 파라미터를 통한 데이터 전송

    -   GET
    -   주로 정렬 필터(검색어, 게시판 목록에서 정렬 필터)
    -   조회 조건을 줄여주는 필터, 조회 결과를 정렬하는 정렬 조건에 주로 사용

-   메시지 바디를 통한 데이터 전송
    -   POST, PUT, PATCH
    -   회원 가입, 상품 주문, 리소스 등록, 리소스 변경

### HTTP API 설계 예시
