function sneak() {

    const body = [];
    let head = { x: 5, y: 5 }
    let direction = 'stop'

    function movePlayer(keyPressed) {

        const keys = {
            's': () => head.y++,
            'w': () => head.y--,
            'd': () => head.x++,
            'a': () => head.x--,
            stop: () => { }
        }

        if (keys[keyPressed]) {
            direction = keyPressed
        }

        keys[direction]();

        body.shift()
        body.unshift({...head});
    }

    function growUp() {
        body.push({...body[body.length-1]})
    }

    function getData() {
        return body
    }

    return {
        movePlayer,
        getData,
        growUp
    }
}


//#4023e0