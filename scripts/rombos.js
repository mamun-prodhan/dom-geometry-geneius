function calculateRombosArea(){
    const d1 = getInputValueById('rombos-d1');
    const d2 = getInputValueById('rombos-d2');
    const area = 0.5 * d1 * d2;
    console.log(area);
    setInnerTextById('rombos-area', area);
}