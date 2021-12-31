const IMAGE_URL = "https://picsum.photos/id/[[id]]/400/268";

const container = document.querySelector(".container");

function getImage() {
  const img = document.createElement("img");
  img.src = IMAGE_URL.replace("[[id]]", Math.floor(Math.random() * 1000));
  container.appendChild(img);
}

function loadImages(noOfImages) {
  let count = 0;
  while (count <= noOfImages) {
    getImage();
    count++;
  }
}

loadImages(15);

document.addEventListener("scroll", () => {
  let innerHeight = window.innerHeight;
  let scrollY = window.scrollY;
  let scrollHeight = document.documentElement.scrollHeight;
  if (scrollY + innerHeight >= scrollHeight - 10) {
    loadImages(10);
  }
});
