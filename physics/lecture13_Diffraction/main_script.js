function startSimulation() {
    const wavelength = Math.pow(10, -9) * parseFloat(document.getElementById("wavelength").value);
    const n = parseInt(document.getElementById("n").value);
    const slitWidth = parseFloat(document.getElementById("w").value);
    const step = parseFloat(document.getElementById("step").value);
    const d = slitWidth + step;
    const L = parseFloat(document.getElementById("L").value);
    const screenWidth = parseFloat(document.getElementById("width").value);

    var xValues = [];
    for (let xm = -screenWidth/2 ; xm <= (screenWidth/2); xm+=(screenWidth)/(canvas.width)) {
        xValues.push(toPrecision(xm, 3));
    }
    var intensityArray = calculateIntensityArray(wavelength, n, slitWidth, d, L, xValues);
    console.log(intensityArray);

    const color = nmToRGB(wavelength);
    drawPicture(color, normalizeArray(intensityArray));
    drawChart(xValues, normalizeArray(intensityArray));
}

function validateInput(wavelength, n, d, L, screenWidth) {
    message = "";
    
    if (wavelength <= 0) {
        message += "Длина волны должна быть положительной! \n"
    }

    if (n <= 0) {
        message += "Количество щелей должно быть положительным! \n"
    }
    if (d <= 0) {
        message += "Расстояние между щелями должно быть положительным! \n"
    }
    if (L < 0) {
        message += "Расстояние до экрана должно быть положительным! \n"
    }
    if (screenWidth <= 0) {
        message += "Ширина экрана должна быть положительной! \n"
    }
    
    return message;
}

startSimulation();
window.onresize = startSimulation;
