import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Pumpkin Farm";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

let count = 0;
let growth_rate = 0;

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
upgrade1.addEventListener("click", upgrade1Counter);

const pumpkincount: HTMLDivElement = document.createElement("div");
pumpkincount.textContent = pumpkinstr();
pumpkincount.style.fontSize = "20px";

app.append(mainbutton);
app.append(pumpkincount);
app.append(upgrade1);

function setCounter() {
  count++;
  pumpkincount.textContent = pumpkinstr();
}

function pumpkinstr() {
  return `Pumpkins: ${count.toFixed(0)}`;
}

setInterval(() => {
  if (count >= 10) {
    upgrade1.disabled = false;
  } else {
    upgrade1.disabled = true;
  }
});

function upgrade1Counter() {
  count -= 10;
  growth_rate += 0.1;
  let previousTimeStamp = 0;

  requestAnimationFrame(step);
  function step(timeStamp: number) {
    if (!previousTimeStamp) {
      previousTimeStamp = timeStamp;
    }

    const elapsed = ((timeStamp - previousTimeStamp) / 1000) * growth_rate;
    count += elapsed;
    pumpkincount.textContent = pumpkinstr();
    previousTimeStamp = timeStamp;
    requestAnimationFrame(step);
  }
}
