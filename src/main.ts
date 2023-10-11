import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Reese Pumpkin Farm Game";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `🎃 ${counter} Pumpkins`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
