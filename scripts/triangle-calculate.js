function calculateTriangleArea(){
    // triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    console.log( base);

    // triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeighText = triangleHeightInput.value;
    const height = parseFloat(triangleHeighText);
    console.log( height);

    // calculate triangle area
    const area = 0.5 * base * height;
    console.log(area);

    // display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
    

}