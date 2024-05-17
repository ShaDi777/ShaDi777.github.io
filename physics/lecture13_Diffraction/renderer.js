function drawPicture(color, intensityArray) {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let x = 0; x < intensityArray.length; x++) {
        var intensity = intensityArray[x];
        ctx.fillStyle = "rgb(" + color[0]*intensity + ", " + color[1]*intensity + ", " + color[2]*intensity + ")";
        ctx.fillRect(x, 0, 1, canvas.height);
    }
}

function drawChart(xValues, intensityArray) {
    const canvas_intensity = document.getElementById("canvas_intensity");
    const ctx = canvas_intensity.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (this.canvas_intensity instanceof Chart) {
        this.canvas_intensity.destroy();
    }

    this.canvas_intensity = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xValues,
            datasets: [{
                label: 'Интенсивность',
                data: intensityArray,
                backgroundColor: 'rgba(0, 0, 255, 0.3)',
                borderColor: 'rgba(0, 0, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: false,
                        text: 'Координата x, м'
                    }
                },
                y: {
                    title: {
                        display: false,
                        text: 'Интенсивность'
                    }
                }
            }, 
            plugins: {
                legend: {
                    display: false,
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Зависимость интенсивности от координаты'
                }
            }
        }
    });
}
