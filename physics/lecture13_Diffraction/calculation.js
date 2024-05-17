function getIntensityFromDifraction(sinTheta, slitWidth, wavelength, I0) {
    var alpha = Math.PI * slitWidth * sinTheta / wavelength;
    return I0 * Math.pow(sin(alpha)/alpha, 2);
}

function getIntensityFromInterference(sinTheta, d, wavelength, n) {
    var delta = Math.PI * d * sinTheta / wavelength;
    if (delta == 0) {
        return 1;
    }
    return Math.pow(sin(n * delta)/sin(delta), 2);
}

function getTotalIntensity(sinTheta, slitWidth, wavelength, I0, d, n) {
    return getIntensityFromDifraction(sinTheta, slitWidth, wavelength, I0)*getIntensityFromInterference(sinTheta, d, wavelength, n);
}

function sinTheta(x, L) {
    return x/Math.sqrt((Math.pow(x, 2) + Math.pow(L, 2)))
}

function calculateIntensity(I0, wavelength, n, w, d, L, x) {
    return getTotalIntensity(sinTheta(x, L), w, wavelength, I0, d, n).toFixed(14);
}

function calculateIntensityArray(wavelength, n, slitWidth, d, L, xValues) {
    var I0 = 1;

    var intensityArray = [];
    for (i = 0; i < xValues.length; i++) {
        var x = xValues[i];
        if (x === 0) {
            x += Math.pow(10, -30);
        }

        let intensity = calculateIntensity(I0, wavelength, n, slitWidth, d, L, x);
        intensityArray.push(intensity);
    }

    return intensityArray;
}
