console.log("Script loaded");
const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
  const main = document.querySelector("main");
  const productUl = document.createElement("ul");
  for (let product of products) {
    const prdctLi = document.createElement("li");
    const name = document.createElement("h3");
    const price = document.createElement("p");
    const rating = document.createElement("p");
    name.innerText = product.name;
    price.innerText = `Price: ${product.price}`;
    rating.innerText = `Rating: ${product.rating}`;
    prdctLi.appendChild(name);
    prdctLi.appendChild(price);
    prdctLi.appendChild(rating);
    productUl.appendChild(prdctLi);
  }
  main.innerHTML = "";
  main.appendChild(productUl);
}
renderProducts(products);

const inputSearchName = document.getElementById("searchName");
inputSearchName.addEventListener("input", () => {
  const inputValue = inputSearchName.value.toLowerCase();
  const filteredProductsByName = products.filter((product) => {
    const productName = product.name.toLowerCase();
    const productPrice = product.price;
    return (
      productName.includes(inputValue.toLowerCase()) ||
      productPrice >= inputValue
    );
  });
  console.log(filteredProductsByName);
  renderProducts(filteredProductsByName);
});
