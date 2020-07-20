let images = document.querySelectorAll(".landImages");
let modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
let land = document.getElementById("land");
console.log(span);

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function (e) {
    modal.style.display = "block";
    land.src = e.target.src;
  });
}

span.addEventListener("click", function () {
  setTimeout(() => {
    modal.style.display = "none";
  }, 550);
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
