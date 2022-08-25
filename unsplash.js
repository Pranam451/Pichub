const input = document.getElementById("input");
const homeInput = document.getElementById("homeInput");
const grid = document.getElementsByClassName("grid")[0];
const homeMain = document.getElementsByClassName("homeMain")[0];

// window.addEventListener("load", dayNightMode);

// input.addEventListener("keydown", function (event) {
//   if (event.key === "enter") console.log("hey");
//   loadImg();
// });
function home() {
  removeImg();
  input.value = "";
}

function trending() {
  removeImg();
  document.getElementById("input").value = "trending";
  loadImg();
  input.value = "";
}
function popular() {
  removeImg();
  document.getElementById("input").value = "popular";
  loadImg();
  input.value = "";
}
function wallpaper() {
  removeImg();
  document.getElementById("input").value = "wallpaper";
  loadImg();
  input.value = "";
}
function fashion() {
  removeImg();
  document.getElementById("input").value = "fashion";
  loadImg();
  input.value = "";
}
function fitness() {
  removeImg();
  document.getElementById("input").value = "fitness";
  loadImg();
  input.value = "";
}
function nature() {
  removeImg();
  document.getElementById("input").value = "nature";
  loadImg();
  input.value = "";
}
function architecture() {
  removeImg();
  document.getElementById("input").value = "architecture";
  loadImg();
  input.value = "";
}
function technology() {
  removeImg();
  document.getElementById("input").value = "technology";
  loadImg();
  input.value = "";
}
function travel() {
  removeImg();
  document.getElementById("input").value = "travel";
  loadImg();
  input.value = "";
}
function animal() {
  removeImg();
  document.getElementById("input").value = "animal";
  loadImg();
  input.value = "";
}
function homeInputBtn() {
  removeImg();
  const url =
    "https://api.unsplash.com/search/photos/?query=" +
    homeInput.value +
    "&per_page=40&client_id=skFr6RlmieO51MpqtEu7GpbtShnD0BSPS3lD8OsITJA";

  fetch(url)
    //
    .then((Response) => {
      if (Response.ok)
        //
        return Response.json();
      //
      else alert(Response.status);
    })

    .then((data) => {
      result = data.results;

      const imageNodes = [];
      const divNodes = [];
      for (let i = 0; i < data.results.length; i++) {
        // console.log(data.results);
        // const divMain = divNodes;
        divNodes[i] = document.createElement("div");

        divNodes[i].setAttribute("class", "col-12  px-2 py-2  imgDiv");
        imageNodes[i] = document.createElement("img");
        imageNodes[
          i
        ].style.backgroundImage = `url(${data.results[i].urls.small}`;
        // imageNodes[i].setAttribute("src", `${data.results[i].urls.small}`);
        imageNodes[i].setAttribute("width", "100%");

        // imageNodes[i] = document.createElement("div");
        // imageNodes[i].classname = "images";
        // imageNodes[i].style.background =
        // `url(${data.results[i]urls.raw})`

        // "url(" + data.results[i].urls.raw + ")";
        divNodes[i].appendChild(imageNodes[i]);
        grid.appendChild(divNodes[i]);
        // imageNodes[i] = document.createElement("img");
        // imageNodes[i].setAttribute('scr','');
        imageNodes[i].addEventListener("dblclick", function () {
          window.open(data.results[i].links.download, "_blank");
        });
      }
    });
}

function loadImg() {
  removeImg();
  const url =
    "https://api.unsplash.com/search/photos/?query=" +
    input.value +
    "&per_page=40&client_id=skFr6RlmieO51MpqtEu7GpbtShnD0BSPS3lD8OsITJA";

  fetch(url)
    //
    .then((Response) => {
      if (Response.ok)
        //
        return Response.json();
      //
      else alert(Response.status);
    })

    .then((data) => {
      result = data.results;

      const imageNodes = [];
      const divNodes = [];
      for (let i = 0; i < data.results.length; i++) {
        // console.log(data.results);
        // const divMain = divNodes;
        divNodes[i] = document.createElement("div");

        divNodes[i].setAttribute("class", "col-12  px-2 py-2  imgDiv");
        imageNodes[i] = document.createElement("img");
        imageNodes[
          i
        ].style.backgroundImage = `url(${data.results[i].urls.small}`;
        // imageNodes[i].setAttribute("src", `${data.results[i].urls.small}`);
        imageNodes[i].setAttribute("width", "100%");

        // imageNodes[i] = document.createElement("div");
        // imageNodes[i].classname = "images";
        // imageNodes[i].style.background =
        // `url(${data.results[i]urls.raw})`

        // "url(" + data.results[i].urls.raw + ")";
        divNodes[i].appendChild(imageNodes[i]);
        grid.appendChild(divNodes[i]);
        // imageNodes[i] = document.createElement("img");
        // imageNodes[i].setAttribute('scr','');
        imageNodes[i].addEventListener("dblclick", function () {
          window.open(data.results[i].links.download, "_blank");
        });
      }
    });
}

function removeImg() {
  grid.innerHTML = "";
}

function dayNightMode() {
  const date = new Date();
  const hour = date.getHours();
  if (hour >= 7 && hour <= 19) {
    document.body.style.backgroundColor = "whitesmoke";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
}
