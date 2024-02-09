# Poster toggle project

영화 포스터 character introduce toggle 프로젝트

## Project description

> 주어진 이미지를 클릭시 addEventListener("click",)
> 을 이용해</br> HTML에 작성된arrt, class 변경 css Style, html 요소안에 내용변경 구현 (Homewrok2)

## project MRO

> <i>'유지(maintenance)', '보수(repair)', '운영(operation)'</i>

### lib

javascript를 공부하면서 자주 사용되는 dom을 정리하여
모듈방식으로</br>
[Github](https://github.com/yanggengjelly/core-javascript/tree/03.calculator/client/lib) 에서 불러와 적용하여 과제를 진행하였다.

### 함수 분리

처음에는

```js
function handleSlide(e) {
  e.preventDefault();
...
}
```

<b><i>handleSlide( )</i></b> 함수에 UI 변경이 들어가는 코드 로직까지 작성하여 `addEventListener("click",)` 시 한번에 event가 일어나게 구현하였다.

함수 분리를 통해

```js
// addEventListener("click",) 함수
function handleSlide(e) {
  e.preventDefault();
...
}

// UI 유지보수 관리를 위한 함수
function setModify(index) {
...
}
```

코드 로직을 작성하여 가독성을 높였습니다.

---
