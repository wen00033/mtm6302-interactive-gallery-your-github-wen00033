let imagesObjects = [
  {
    name: "RedChameleon",
    src: "https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg?auto=compress&cs=tinysrgb&w=640&h=750&dpr=1",
    datalarge:
      "https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500&dpr=1",
  },
  {
    name: "Green Reptile",
    src: "https://images.pexels.com/photos/927497/pexels-photo-927497.jpeg?auto=compress&cs=tinysrgb&w=640&h=750&dpr=1",
    datalarge:
      "https://images.pexels.com/photos/927497/pexels-photo-927497.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500&dpr=1",
  },
  {
    name: "Adult Fox on Grass",
    src: "https://images.pexels.com/photos/2786709/pexels-photo-2786709.jpeg?auto=compress&cs=tinysrgb&w=640&h=750&dpr=1",
    datalarge:
      "https://images.pexels.com/photos/2786709/pexels-photo-2786709.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500&dpr=1",
  },
  {
    name: "Black Alligator on Water",
    src: "https://images.pexels.com/photos/1386560/pexels-photo-1386560.jpeg?auto=compress&cs=tinysrgb&w=640&h=750&dpr=1",
    datalarge:
      "https://images.pexels.com/photos/1386560/pexels-photo-1386560.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500&dpr=1",
  },
  {
    name: "Sea Turtle",
    src: "https://images.pexels.com/photos/2570524/pexels-photo-2570524.jpeg?auto=compress&cs=tinysrgb&w=640&h=750&dpr=1",
    datalarge:
      "https://images.pexels.com/photos/2570524/pexels-photo-2570524.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500&dpr=1",
  },
  {
    name: "Dolphins Undewater",
    src: "https://images.pexels.com/photos/2922672/pexels-photo-2922672.jpeg?auto=compress&cs=tinysrgb&w=640&h=750&dpr=1",
    datalarge:
      "https://images.pexels.com/photos/2922672/pexels-photo-2922672.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500&dpr=1",
  },
  {
    name: "Clownfish",
    src: "https://images.pexels.com/photos/1125979/pexels-photo-1125979.jpeg?auto=compress&cs=tinysrgb&w=640&h=750&dpr=1",
    datalarge:
      "https://images.pexels.com/photos/1125979/pexels-photo-1125979.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500&dpr=1",
  },
  {
    name: "Jellyfish",
    src: "https://images.pexels.com/photos/8598770/pexels-photo-8598770.jpeg?auto=compress&cs=tinysrgb&w=640&h=750&dpr=1",
    datalarge:
      "https://images.pexels.com/photos/8598770/pexels-photo-8598770.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500&dpr=1",
  },
  {
    name: "Lion",
    src: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=640&h=750&dpr=1",
    datalarge:
      "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500&dpr=1",
  },
  {
    name: "Brown Deer",
    src: "https://images.pexels.com/photos/34231/antler-antler-carrier-fallow-deer-hirsch.jpg?auto=compress&cs=tinysrgb&w=640&h=750&dpr=1",
    datalarge:
      "https://images.pexels.com/photos/34231/antler-antler-carrier-fallow-deer-hirsch.jpg?auto=compress&cs=tinysrgb&w=2000&h=1500&dpr=1",
  },
  {
    name: "Duck",
    src: "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&w=640&h=750&dpr=1",
    datalarge:
      "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500&dpr=1",
  },
  {
    name: "Blue Peacock",
    src: "https://images.pexels.com/photos/45911/peacock-plumage-bird-peafowl-45911.jpeg?auto=compress&cs=tinysrgb&w=640&h=750&dpr=1",
    datalarge:
      "https://images.pexels.com/photos/45911/peacock-plumage-bird-peafowl-45911.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500&dpr=1",
  },
];
const $container = document.querySelector(".container");
const $detail = document.querySelector(".detail");
const imageArray = [];

for (const object of imagesObjects) {
  imageArray.push(`<div class="card">
    <img src="${object.src}" class="card-img-top" alt="${object.name}" data-large="${object.datalarge}">
    <div class="card-body">
      <h5 class="card-title">guess me!</h5>
    </div>
  </div>`);
  $container.innerHTML = imageArray.join("");
}

$container.addEventListener("click", function (e) {
  if (e.target.classList.contains("card-img-top")) {
    $detail.innerHTML = `<img src="${e.target.dataset.large}">
  <h3 class =photoTitle>${e.target.alt}</h3>`;
  }
});

$detail.addEventListener("click", function () {
  $detail.innerHTML = "";
});

// $detail.addEventListener("click", function () {
//   $detail.innerHTML = "";
// });

// $img.addEventListener("click", function (e) {
//   $detail.innerHTML = `
//     <img src="${$img.dataset.large}">
//     <small>${$img.dataset.source}</small>`;
//   $detail.classList.add("popup");
// });
// $detail.addEventListener("click", function () {
//   $detail.innerHTML = "";
// });
