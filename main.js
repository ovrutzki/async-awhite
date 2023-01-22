// A
// 1
// const getData = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("hello");
//   }, 3000);
// });

// getData.then((value) => {
//   console.log(value);
// });

// // 2
// const processData = async () => {
//   const data = await getData;
//   console.log(data);
// };

// processData();

// B
// function myFunction(data) {
//   return new Promise((resolve, reject) => {
//     if (typeof data != typeof 1) {
//       reject(new Error("something went wrong"));
//     } else if (data % 2 === 0) {
//       setInterval(() => {
//         resolve("even");
//       }, 2000);
//     } else if (data % 2 !== 0) {
//       setTimeout(() => {
//         resolve("odd");
//       }, 1000);
//     }
//   });
// }

// myFunction(4)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//   EX2

// async function getCountries() {
//   try {
//     const response = await axios.get("https://restcountries.com/v2/all");
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }
let data = [];
let arrOfCards = [];
let h1 = [];
function getData() {
  const response = fetch("https://restcountries.com/v2/all")
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
  return response;
}

const countryMake = async () => {
  data = await getData();
  const countries = document.getElementById("countries");

  for (let i = 0; i < data.length; i++) {
    const card = document.createElement("div");
    card.className = "card";
    card.id = data[i].name;
    const downer = document.createElement("div");
    downer.className = "downer";
    const flag = document.createElement("img");
    flag.className = "flag";
    flag.src = data[i].flags.svg;
    const name = document.createElement("h1");
    name.className = "name";
    name.innerHTML = data[i].name;
    const details = document.createElement("div");
    details.className = "details";
    const population = document.createElement("p");
    population.className = "detail";
    population.innerHTML =
      "population: " + Intl.NumberFormat().format(data[i].population);
    const region = document.createElement("p");
    region.className = "detail";
    region.innerHTML = "Region: " + data[i].region;
    const capital = document.createElement("p");
    capital.className = "detail";
    capital.innerHTML = "Capital: " + data[i].capital;
    details.append(population, region, capital);
    downer.append(name, details);
    card.append(flag, downer);
    countries.appendChild(card);
  }

  arrOfCards = document.querySelectorAll(".card");
  h1 = document.querySelectorAll("h1");
  let search = document.getElementById("search-input");
  let button = document.getElementById("btn");
  search.addEventListener("keydown", searchCountry);
  function searchCountry() {
    let searchInput = document.getElementById("search-input").value;
    for (let i = 0; i < arrOfCards.length; i++) {
      if (h1[i].textContent.toLowerCase().includes(searchInput.toLowerCase())) {
        arrOfCards[i].classList.remove("is-hidden");
      } else {
        arrOfCards[i].classList.add("is-hidden");
      }
    }
  }
};
countryMake();
