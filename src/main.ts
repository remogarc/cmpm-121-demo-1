import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Pumpkin Farm";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

let count = 0;
let growth_rate = 0;
let up1count = 0;
let up2count = 0;
let up3count = 0;

const mainbutton = document.createElement("button");
mainbutton.type = "button";
mainbutton.textContent = `🎃`;
mainbutton.style.fontSize = "30px";
mainbutton.addEventListener("click", setCounter);

const upgrade1 = document.createElement("button");
upgrade1.type = "button";
upgrade1.textContent = `Fertilizer: 10 Pumpkins`;
upgrade1.style.fontSize = "15px";
upgrade1.disabled = true;
upgrade1.addEventListener("click", upgrd1Ctr);

const upgrade2 = document.createElement("button");
upgrade2.type = "button";
upgrade2.textContent = `Tractor: 100 Pumpkins`;
upgrade2.style.fontSize = "15px";
upgrade2.disabled = true;
upgrade2.addEventListener("click", upgrd2Ctr);

const upgrade3 = document.createElement("button");
upgrade3.type = "button";
upgrade3.textContent = `Acre: 1000 Pumpkins`;
upgrade3.style.fontSize = "15px";
upgrade3.disabled = true;
upgrade3.addEventListener("click", upgrd3Ctr);

const pumpkincount: HTMLDivElement = document.createElement("div");
pumpkincount.textContent = pumpkinstr();
pumpkincount.style.fontSize = "20px";

const growthcount: HTMLDivElement = document.createElement("div");
growthcount.textContent = growthstr();
growthcount.style.fontSize = "12px";

const up1: HTMLDivElement = document.createElement("div");
up1.textContent = up1str();
up1.style.fontSize = "12px";

const up2: HTMLDivElement = document.createElement("div");
up2.textContent = up2str();
up2.style.fontSize = "12px";

const up3: HTMLDivElement = document.createElement("div");
up3.textContent = up3str();
up3.style.fontSize = "12px";

app.append(pumpkincount);
app.append(mainbutton);
app.append(growthcount);
app.append(upgrade1);
app.append(upgrade2);
app.append(upgrade3);
app.append(up1);
app.append(up2);
app.append(up3);

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
function up1str() {
  return `Fertilizer: ${up1count}`;
}
function up2str() {
  return `Tractors: ${up2count}`;
}
function up3str() {
  return `Acres: ${up3count}`;
}

setInterval(() => {
  if (count >= 1000) {
    upgrade3.disabled = false;
  } else if (count >= 100) {
    upgrade2.disabled = false;
  } else if (count >= 10) {
    upgrade1.disabled = false;
  } else {
    upgrade1.disabled = true;
    upgrade2.disabled = true;
    upgrade3.disabled = true;
  }
});

function upgrd1Ctr() {
  count -= 10;
  growth_rate += 0.1;
  up1count++;
  up1.textContent = up1str();
  growthcount.textContent = growthstr();
}
function upgrd2Ctr() {
  count -= 100;
  growth_rate += 2;
  up2count++;
  up2.textContent = up2str();
  growthcount.textContent = growthstr();
}
function upgrd3Ctr() {
  count -= 1000;
  growth_rate += 50;
  up3count++;
  up3.textContent = up3str();
  growthcount.textContent = growthstr();
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
