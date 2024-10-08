function calculateParallelogramArea(){
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');
    const area = base * height;
    console.log(base, height);
    setInnerTextById('parallelogram-area', area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    console.log(inputValue);
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}
