# wplace-kr

[wplace](https://wplace.live) 한국어 번역 Tampermonkey 스크립트.

## 설치

1. [Tampermonkey](https://www.tampermonkey.net/) 또는 [Violentmonkey](https://violentmonkey.github.io/) 설치
2. `src/wplace-kr.user.js` 열기
3. 스크립트 전체 복사 → Tampermonkey 새 스크립트 만들기
4. wplace.live 방문 → 자동으로 한국어 번역됨

## 동작 방식

- 텍스트 노드, `title`/`placeholder`/`aria-label`/`alt`/`innerHTML`을 `translations.js` 사전으로 치환
- `MutationObserver`로 동적 추가 내용도 실시간 추적
- 언어 설정은 `localStorage.WPLACE_USER_LANG` 기준

## 번역 추가

`src/wplace-kr.user.js` 내 `WPLACE_TRANSLATIONS.ko` 객체에 추가:

```js
"Log in": "로그인",
"{n} characters left": "{n}자 남음",
"{s} joined the alliance": "{s}님이 동맹에 참여했습니다",
```

- `{n}` = 숫자, `{s}` = 임의 문자열 (순서대로 치환)
- HTML 태그(`<strong>`, `<br>`, `<b>`)는 보존됨
