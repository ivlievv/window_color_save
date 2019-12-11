'use strict';

/*
const [widthElem, heightElem] = document.getElementsByTagName('li');


function refreshSizeValues(event) {
    console.log(event);

    widthElem.innerText = `Inner width = ${window.innerWidth}px`;
    heightElem.innerText = `Inner height = ${window.innerHeight}px`;
}

//
window.onload = refreshSizeValues;
window.onclick = function(e){
    console.log(e);
};
window.onkeydown = function (e){
    console.log(e);
};
window.onresize = refreshSizeValues;




const  img = document.createElement('img');
const  div = document.createElement('div');



*/


/*
function test (node){
    if (node instanceof  Node){
        console.log("Good argument:",node);
    }
    else {
        console.error(new TypeError("argument is not a Node element"))
    }
}



test(img);
test(4);
test({name: "Name"});

test(div);

*/


/*
const rangeInput = document.querySelector('input[type="range"]');
const rangeValue = document.querySelector('h1');

window.onload = refreshValue;

rangeInput.addEventListener('input', refreshValue);

function refreshValue(e) {
    rangeValue.innerText = rangeInput.value;
}

*/

const DOCUMENT_BG_COLOR = 'documentBGColor';

const inputs = document.querySelectorAll('.inputWrapper input[type="range"]');
const  doc = document.querySelector(':root');

let documentBGColor = null;

function refreshDocumentBGColor() {

    let index = 0;
    for(const prop in documentBGColor){
        documentBGColor[prop] = inputs[index].value;
        index++;
    }
    doc.style.backgroundColor = `rgba(${
        documentBGColor.red
    },${
        documentBGColor.green
    },${
        documentBGColor.blue
    },${
        documentBGColor.alpha
    })`
    localStorage.setItem(DOCUMENT_BG_COLOR,JSON.stringify(documentBGColor))
}

for (const  input of inputs){
    input.addEventListener('input', refreshDocumentBGColor);
}

window.onload = loadSavedColor;

function loadSavedColor() {
    documentBGColor = localStorage.getItem(DOCUMENT_BG_COLOR);

    if (documentBGColor){
        documentBGColor = JSON.parse(documentBGColor);
        let index = 0;
        for (const prop in documentBGColor){
            inputs[index].value = documentBGColor[prop];
            index++;
        }
    }else {
        documentBGColor = {
            red: inputs[0],
            green: inputs[1],
            blue: inputs[2],
            alpha: inputs[3],
        }
    }
    refreshDocumentBGColor();
}




































