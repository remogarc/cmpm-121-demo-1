import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Pumpkin Farm";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

let count = 0;

const mainbutton = document.createElement("button");
mainbutton.type = "button";
mainbutton.textContent = `🎃`;
mainbutton.style.fontSize = "30px";
mainbutton.addEventListener("click", setCounter);

const pumpkincount: HTMLDivElement = document.createElement("div");
pumpkincount.textContent = pumpkinstr();
pumpkincount.style.fontSize = "20px";

app.append(mainbutton);
app.append(pumpkincount);

function setCounter() {
  count++;
  pumpkincount.textContent = pumpkinstr();
}

function pumpkinstr() {
  return `Pumpkins: ${count.toFixed(0)}`;
}

let previousTimeStamp = 0;

requestAnimationFrame(step);
function step(timeStamp: number) {
  if (!previousTimeStamp) {
    previousTimeStamp = timeStamp;
  }

  const elapsed = (timeStamp - previousTimeStamp) / 1000;
  count += elapsed;
  pumpkincount.textContent = pumpkinstr();
  previousTimeStamp = timeStamp;
  requestAnimationFrame(step);
}
