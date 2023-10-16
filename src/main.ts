import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "🍂 Pumpkin Farm 🍂";

document.title = gameName;

const header = document.createElement("h1");
header.style.fontFamily = "impact";
header.style.letterSpacing = "1.5px";
header.innerHTML = gameName;
app.append(header);

let count = 0;
let growth_rate = 0;

interface Item {
  name: string;
  cost: number;
  rate: number;
  button: HTMLButtonElement;
  amount: number;
}

const availableItems: Item[] = [
  {
    name: "🌱 Fertilizer",
    cost: 10,
    rate: 0.1,
    button: document.createElement("button"),
    amount: 0,
  },
  {
    name: "🚜 Tractor",
    cost: 100,
    rate: 2,
    button: document.createElement("button"),
    amount: 0,
  },
  {
    name: "👨‍🌾 Acre",
    cost: 1000,
    rate: 50,
    button: document.createElement("button"),
    amount: 0,
  },
];

const mainbutton = document.createElement("button");
mainbutton.type = "button";
mainbutton.textContent = `🎃`;
mainbutton.style.fontSize = "75px";
mainbutton.addEventListener("click", setCounter);

const pumpkincount: HTMLDivElement = document.createElement("div");
pumpkincount.textContent = pumpkinstr();
pumpkincount.style.lineHeight = "2.2";
pumpkincount.style.fontFamily = "impact";
pumpkincount.style.letterSpacing = "1px";
pumpkincount.style.fontSize = "25px";

const growthcount: HTMLDivElement = document.createElement("div");
growthcount.textContent = growthstr();
growthcount.style.lineHeight = "2.2";
growthcount.style.fontFamily = "impact";
growthcount.style.letterSpacing = ".8px";
growthcount.style.fontSize = "18px";

app.append(pumpkincount);
app.append(mainbutton);
app.append(growthcount);

availableItems.forEach((item) => {
  item.button.disabled = item.cost > count;
  item.button.addEventListener("click", () => upCtr(item));
  item.button.innerHTML = `<p style = "font-size: 22px;" >${item.name} 
  </br> Cost: ${item.cost.toFixed(2)} ~ Rate: ${item.rate.toFixed(1)}`;
  app.append(item.button);
});

function setCounter() {
  count++;
  pumpkincount.textContent = pumpkinstr();
}

function pumpkinstr() {
  return `Pumpkins: ${count.toFixed(0)}`;
}
function growthstr() {
  return `Growth Rate: ${growth_rate.toFixed(1)}`;
}

setInterval(() => {
  availableItems.forEach((item) => {
    item.button.disabled = item.cost > count;
  });
});

function upCtr(item: Item) {
  if (item.cost <= count) {
    count -= item.cost;
    item.cost *= 1.15;
    item.amount += 1;
    growth_rate += item.rate;
    item.button.innerHTML = `<p style = "font-size: 22px;" >${item.name} (${
      item.amount
    }) </br> Cost: ${item.cost.toFixed(2)} ~ Rate: ${item.rate.toFixed(1)}`;
    growthcount.textContent = growthstr();
  }
}

let previousTimeStamp = 0;
requestAnimationFrame(step);
function step(timeStamp: number) {
  if (!previousTimeStamp) {
    previousTimeStamp = timeStamp;
  }

  const elapsed = ((timeStamp - previousTimeStamp) * growth_rate) / 1000;
  count += elapsed;
  console.log(timeStamp - previousTimeStamp);
  console.log(elapsed);
  console.log(growth_rate);
  pumpkincount.textContent = pumpkinstr();
  previousTimeStamp = timeStamp;
  requestAnimationFrame(step);
}
