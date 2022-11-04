const container = document.querySelector(".container");

const cars = [
  {
    name: "Class A Mercedes",
  },
  {
    name: "Class B Mercedes",
  },
  {
    name: "Class C Mercedes",
  },
  {
    name: "Twingo Renault",
  },
  {
    name: "Clio Renault",
  },
  {
    name: "Megane Renault",
  },
  {
    name: "Audi A1",
  },
  {
    name: "Audi A2",
  }
];

const showCars = () => {
  let output = "";
  for(let [index, car] of cars.entries()) {
    output +=
    `
    <div class="card">
      <img class="card__image" src="https://picsum.photos/500/500?random=${index}" />
      <h1 class="card__title">${car.name}</h1>
    </div>
    `;
  }
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCars);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("/serviceWorker.js");
  });
}