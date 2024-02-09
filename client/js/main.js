import { getNode, addClass, removeClass, setCss, attr } from "../lib/index.js";

const data = [
  {
    color: ["#ff6a00", "#720400"],
    name: "EMBER",
    alt: "엠버 포스터",
  },
  {
    color: ["#1ca9f8", "#000054"],
    name: "WADE",
    alt: "웨이드 포스터",
  },
  {
    color: ["#98d00f", "#002906"],
    name: "CLOD",
    alt: "클로드 포스터",
  },
  {
    color: ["#d968e6", "#30003c"],
    name: "GALE",
    alt: "게일 포스터",
  },
];

/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const navigator = getNode(".nav");
const ul = getNode("ul");
const posteCover = getNode(".visual div img");
const nickName = getNode(".nickName");

function handleSlide(e) {
  e.preventDefault();
  const target = e.target.closest("li");
  const button = e.target.closest("button");
  if (!target | !button) return;
  const index = target.dataset.index;
  const list = [...ul.children];
  setModify(index);
  list.forEach((li) => removeClass(li, "is-active"));
  addClass(target, "is-active");
}

function setModify(index) {
  const dataName = data.map((item) => item.name);
  const dataColor = data.map((item) => item.color);
  attr(posteCover, "src", `./assets/${dataName[index - 1].toLowerCase()}.jpeg`);
  attr(posteCover, "alt", data[index - 1].alt);
  attr(nickName, `${dataName[index - 1]}`);
  nickName.innerText = dataName[index - 1];
  setCss(
    document.body,
    "background",
    `linear-gradient(to bottom, ${dataColor[index - 1]})`
  );
}

navigator.addEventListener("click", handleSlide);
