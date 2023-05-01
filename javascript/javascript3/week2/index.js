const buttonConvert = document.getElementById("convertButton");
buttonConvert.addEventListener("click", fetchRates);
const latestRate = "https://open.er-api.com/v6/latest/USD";

async function getCurrencies() {
  const res = await fetch(latestRate);
  const data = await res.json();
  console.log(data);
  const currenciesArr = data.rates;
  return Object.keys(currenciesArr)
    .map(
      (currencyCode) =>
        `<option value="${currencyCode}">${currencyCode} </option>`
    )
    .join("");
}
async function insertOptions() {
  const options = await getCurrencies();
  console.log(options);
  const fromCurrencySelect = document.getElementById("from_currency");
  //   fromCurrencySelect.appendChild(options);
  fromCurrencySelect.innerHTML = options;
  const toCurrencySelect = document.getElementById("to_currency");
  toCurrencySelect.innerHTML = options;
}
insertOptions();
async function fetchRates(e) {
  e.preventDefault();
  const fromSelectCurrency = document.getElementById("from_currency").value;
  const toSelectCurrency = document.getElementById("to_currency").value;
  const fromInputAmount = document.getElementById("amountToConvert").value;
  // const toEl = document.querySelector(".result");
  // const form = document.querySelector(".app form");
  const latestRate = `https://open.er-api.com/v6/latest/${fromSelectCurrency}`;
  try {
    const res = await fetch(latestRate);
    const latestCurrenciesDatabase = await res.json();
    const rate = latestCurrenciesDatabase.rates[toSelectCurrency];
    const convertedAmount = fromInputAmount * rate;
    document.getElementById(
      "result"
    ).innerHTML = `${fromInputAmount} ${fromSelectCurrency} is ${convertedAmount.toFixed(
      2
    )} ${toSelectCurrency}`;
  } catch (err) {
    console.erorr(err);
  }
}
