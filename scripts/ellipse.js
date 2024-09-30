function calculateEllipseArea(){
    const a = getInputValueById('ellipse-a');
    const b = getInputValueById('ellipse-b');
    const area = 3.1416 * a * b;
    console.log(area);
    setInnerTextById('ellipse-area', area);
}