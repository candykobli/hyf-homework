async function getYesOrNo() {
  const res = await fetch("https://yesno.wtf/api");
  const data = await res.json();
  console.log(data);
  console.log(data.answer);
}

getYesOrNo();

fetch("https://yesno.wtf/api")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

async function getYesOrNo() {
  const res = await fetch("https://yesno.wtf/api");
  const data = await res.json();
  console.log(data);
  console.log(data.forced);
}

getYesOrNo();

const fetchPromise = fetch("https://yesno.wtf/api");
fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data.forced);
    return data;
  })

  .then((data) => console.log(data.answer))
  .catch((err) => console.log(err));
