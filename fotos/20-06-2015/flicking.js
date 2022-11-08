
const container = document.querySelector(".container");
const htmls = [];
src = './foto';
number = 12;

for (let i = 1; i <= number; ++i) {
  htmls.push(`<div class="item">
<div class="image-area">
<div class="image-inner-area">

<a
   data-title="My caption"
   data-lightbox="image-1"
   href="${src}/${i}.jpg" >
   <img src="${src}/${i}.jpg">
</a>

</div>
</div>

</div>`);
}

container.insertAdjacentHTML("beforeend", htmls.join(""));


const flicking = new eg.Flicking(".container", {
  bound: true,
  duration: 500,
  moveType: {type: "snap", count: 4},
  autoResize: true,
});

flicking.addPlugins(
  new eg.Flicking.plugins.Parallax("img", 0.8),
)