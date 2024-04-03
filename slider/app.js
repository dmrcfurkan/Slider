let num = 0;
const auto = true;
let interval = 5000;

let slideInterval;

setTimeout(() => {
  const smallImages = document.querySelectorAll(".small-images img");
  smallImages.forEach((element) => {
    element.addEventListener("click", (e) => {
      interval = setTimeout(0, 0);
      const imageElement = e.target;
      smallImages.forEach((element) => element.classList.remove("font"));
      imageElement.classList.add("font");
    });
  });
}, 50);
function Next() {
  const mainImgs = document.querySelectorAll(".small-images>img");
  mainImgs.forEach((img) => img.classList.remove("font"));
  num = (num + 1) % mainImgs.length;
  mainImgs[num].classList.add("font");
}
if (auto) {
  slideInterval = setInterval(Next, interval);
}
