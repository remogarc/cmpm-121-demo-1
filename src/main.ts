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
let up1cost = 10;
let up2cost = 100;
let up3cost = 1000;

const mainbutton = document.createElement("button");
mainbutton.type = "button";
mainbutton.textContent = `🎃`;
mainbutton.style.fontSize = "30px";
mainbutton.addEventListener("click", setCounter);

const upgrade1 = document.createElement("button");
upgrade1.type = "button";
upgrade1.textContent = `Fertilizer: ${up1cost.toFixed(
  2,
)} Pumpkins (${up1count})`;
upgrade1.style.fontSize = "17px";
upgrade1.disabled = true;
upgrade1.addEventListener("click", upgrd1Ctr);

const upgrade2 = document.createElement("button");
upgrade2.type = "button";
upgrade2.textContent = `Tractor: ${up2cost.toFixed(2)} Pumpkins (${up2count})`;
upgrade2.style.fontSize = "17px";
upgrade2.disabled = true;
upgrade2.addEventListener("click", upgrd2Ctr);

const upgrade3 = document.createElement("button");
upgrade3.type = "button";
upgrade3.textContent = `Acre: ${up3cost.toFixed(2)} Pumpkins (${up3count})`;
upgrade3.style.fontSize = "17px";
upgrade3.disabled = true;
upgrade3.addEventListener("click", upgrd3Ctr);

const pumpkincount: HTMLDivElement = document.createElement("div");
pumpkincount.textContent = pumpkinstr();
pumpkincount.style.fontSize = "22px";

const growthcount: HTMLDivElement = document.createElement("div");
growthcount.textContent = growthstr();
growthcount.style.fontSize = "13px";

app.append(pumpkincount);
app.append(mainbutton);
app.append(growthcount);
app.append(upgrade1);
app.append(upgrade2);
app.append(upgrade3);

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
  return `Fertilizer: ${up1cost.toFixed(2)} Pumpkins (${up1count})`;
}
function up2str() {
  return `Tractor: ${up2cost.toFixed(2)} Pumpkins (${up2count})`;
}
function up3str() {
  return `Acre: ${up3cost.toFixed(2)} Pumpkins (${up3count})`;
}

setInterval(() => {
  if (count >= up1cost) {
    upgrade1.disabled = false;
  } else {
    upgrade1.disabled = true;
  }
  if (count >= up2cost) {
    upgrade2.disabled = false;
  } else {
    upgrade2.disabled = true;
  }
  if (count >= up3cost) {
    upgrade3.disabled = false;
  } else {
    upgrade3.disabled = true;
  }
});

function upgrd1Ctr() {
  count -= up1cost;
  up1cost = up1cost * 1.15;
  growth_rate += 0.1;
  up1count++;
  upgrade1.textContent = up1str();
  growthcount.textContent = growthstr();
}
function upgrd2Ctr() {
  count -= up2cost;
  up2cost = up2cost * 1.15;
  growth_rate += 2;
  up2count++;
  upgrade2.textContent = up2str();
  growthcount.textContent = growthstr();
}
function upgrd3Ctr() {
  count -= up3cost;
  up3cost = up3cost * 1.15;
  growth_rate += 50;
  up3count++;
  upgrade3.textContent = up3str();
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
