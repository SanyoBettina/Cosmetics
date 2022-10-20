const getMakeUpBrand = function (brand, index) {
  fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`)
    .then((response) => response.json())
    .then((result) => {
      for (let i = 0; i < result.length; i++) {
        let productHtml = createProdEl(result[i], i);
        document
          .querySelector(".brand:nth-of-type(" + index + ")")
          .insertAdjacentHTML("beforeend", productHtml);
      }
    })
    .catch((error) => console.log("error", error));
};

const createProdEl = function (result) {
  let html = `
    <div class="product-container col">
      <a href="${result.product_link}" target="_blank">
            <div class="brandName">${result.brand}</div>
            <div class="makeUpName">${result.name}</div>
            <div class="makeUpImg">
              <img class="img" src="${result.image_link}"
            </div>`;

  html += result.price_sign
    ? `<div class="price">${result.price}${result.price_sign}</a></div>`
    : `<div class="price">${result.price}$</a></div>`;

  return html;
};

const searchBtBrand = function () {
  const container = document.querySelector(".content");
  const brands = tomSelect.getValue();

  for (let i = 0; i < brands.length; i++) {
    container.insertAdjacentHTML("beforeend", '<div class="brand row row-cols-sm-2 row-cols-md-4 pt-2"></div>');
    getMakeUpBrand(brands[i], i + 1);
  }
};
const button = document.getElementById("button");
button.addEventListener("click", searchBtBrand);

const init = function (selectInput, brands) {
  const selectElement = document.getElementById(selectInput);

  for (let i = 0; i < brands.length; i++) {
    selectElement.add(new Option(brands[i], brands[i]));
  }

  tomSelect = new TomSelect("#" + selectInput, {
    plugins: ["dropdown_input"],
  });
};

var tomSelect;
let brandOptions = [
  "maybelline",
  "l'oreal",
  "revlon",
  "almay",
  "dalish",
  "stila",
  "misa",
  "nyx",
  "anna sui",
  "annabelle",
  "benefit",
  "boosh",
  "burt's bees",
  "butter london",
  "c'est moi",
  "cargo cosmetics",
  "china glaze",
  "clinique",
  "colourpop",
  "covergirl",
  "deciem",
  "dior",
  "essie",
  "fenty",
  "glossier",
  "green people",
  "iman",
  "marcelle",
  "marienatie",
  "milani",
  "mistura",
  "moov",
  "orly",
  "pacifica",
  "pure anada",
  "smashbox",
  "zorah"
];
init("ex-dropdown-input", brandOptions);
