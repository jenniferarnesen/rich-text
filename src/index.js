import Parser from "./Parser";
import Editor from "./Editor";

let inputEl;

let outputDiv;
const parser = new Parser();
const editor = new Editor();

const convert = () => {
    const text = parser.render(inputEl.value);
    outputDiv.innerHTML = text;
};
const setInputVal = val => {
    inputEl.value = val;
};

const parseKeys = event => {
    editor.checkCtrlKey(event, setInputVal);
};

function component() {
    outputDiv = document.createElement("div");
    return outputDiv;
}

function input() {
    inputEl = document.createElement("input");

    inputEl.setAttribute("type", "text");
    inputEl.addEventListener("keydown", parseKeys);

    return inputEl;
}

function button() {
    let el = document.createElement("button");
    let buttonText = document.createTextNode("convert");
    el.appendChild(buttonText);
    el.addEventListener("click", convert);

    return el;
}

document.body.appendChild(input());
document.body.appendChild(button());
document.body.appendChild(component());
