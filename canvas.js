function canvas() {
    const c = document.getElementById("canvas");
    const ctx = c.getContext("2d");

    function clear() {
        ctx.clearRect(0, 0, c.width, c.height);
    }

    function drawPixel(x = 0, y = 0, color = '#FF0000') {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 1, 1);
    }

    return {
        clear,
        drawPixel
    }
}