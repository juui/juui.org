let polygons = {};

function createPolygon(sides, radius, id) {

    let d = '';

    let canvas = document.getElementById(id);
    if (canvas && canvas.getContext) {
        let ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.fillStyle = '#6ab150';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 3;

            let originX = 0;
            let originY = 0;

            // si sides == 6 el ángulo es de 2π/6 o sea 60°
            let rad = (2 * Math.PI) / sides;
            // traslada el contexto en el centro del canvas
            // para poder girar el contexto alrededor del centro

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            ctx.translate(centerX, centerY);
            //d += `M${centerX} ${centerY}`;
            //gira el contexto unos 270deg
            ctx.rotate(3 * Math.PI / 2);
            // dibuja el trazado
            ctx.beginPath();
            for (let i = 1; i <= sides; i++) {
                let x = originX + radius * Math.cos(rad * i);
                let y = originY + radius * Math.sin(rad * i);
                ctx.lineTo(x, y);

                const _x = x + centerX;
                const _y = y + centerY;

                if (i === 1) {
                    d += `M ${_x} ${_y} `;
                }
                else if (i === sides) {
                    d += `L ${_x} ${_y}z`;
                }
                else {
                    d += `L ${_x} ${_y} `;
                }

            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
    }

    return d;

}

for (let i = 3; i <= 10; i++) {
    polygons[i] = createPolygon(3, 100, 'canvas');
    console.log(polygons);
}