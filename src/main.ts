import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Pumpkin Farm Game";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

let count: number = 0;

const mainbutton = document.createElement("button");
mainbutton.type = "button"
mainbutton.textContent = `🎃`;
mainbutton.addEventListener("click", setCounter);

const pumpkincount: HTMLDivElement = document.createElement("div");
pumpkincount.textContent = pumpkinstr();

app.append(mainbutton);
app.append(pumpkincount);

function setCounter() {
  count ++;
  pumpkincount.textContent = pumpkinstr();
};

function pumpkinstr(): string{
  return ` Pumpkins: ${count}`;
}

setInterval(setCounter,1000);
