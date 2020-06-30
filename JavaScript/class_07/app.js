var text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore\
blanditiis perferendis minus, eos atque in repudiandae nemo praesentium\
dolores exercitationem totam corporis hic esse veritatis a quia, repellat\
voluptates animi!";

function readMore() {
  document.querySelector("#pera").innerHTML = text;
  var second = document.querySelector(".second");
  second.innerHTML = text;
}

document.querySelector("#btn").addEventListener("click", function () {
  readMore();
});

var image = document.getElementById("car");
image.className += " hidden";
image.style.width = "100%";

function changeImage() {
  image.src =
    "https://corporate.ferrari.com/sites/ferrari15ipo/files/cover_comunicati/ferrari_f8_tributo_1_1_9.jpg";
}

function changeImageBefore() {
  image.src =
    "https://indianewengland.com/wp-content/uploads/2020/01/Car-red.jpg";
}
