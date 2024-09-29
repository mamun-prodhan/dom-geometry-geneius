function calculateRectangleArea(){
     // triangle base value
     const rectangleWidthInput = document.getElementById('rectangle-width');
     const rectangleWidthText = rectangleWidthInput.value;
     const width = parseFloat(rectangleWidthText);
     console.log( width);
 
     // triangle height value
     const rectanlgeLengthInput = document.getElementById('rectangle-length');
     const rectanlgeLengthText = rectanlgeLengthInput.value;
     const length = parseFloat(rectanlgeLengthText);
     console.log( length);
 
     // calculate triangle area
     const area = length * width;
     console.log(area);
 
     // display triangle area
     const rectangleAreaSpan = document.getElementById('rectangle-area');
     rectangleAreaSpan.innerText = area;
}