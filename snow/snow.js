const createSnow = () => {
    const style = document.createElement('style');

    style.textContent = `
    body {
        position:relative;
    }
    

    .snow {
        width: 30px;
        height: 30px;
        position: absolute;
        top: -30px;
        z-index: 999;
        background-repeat: no-repeat;
        animation-name: fall, snowRotate;
        animation-timing-function: linear, ease;
        animation-iteration-count: 1, infinite;
        pointer-events: none;
        background-position: center;
    }
    @keyframes snowRotate {
        0% {
            transform: rotateX(0) rotateY(0) rotateZ(0);
        }
        50% {
            transform: rotateX(360deg) rotateY(0) rotateZ(360deg);
        }
        100% {
            transform: rotateX(0) rotateY(0) rotateZ(0);
        }
    }

    @keyframes fall {
        0% {
           top: -30px;
        }
        100% {
            top:${document.body.clientHeight}px;
        }
    }
    
    

`;

    document.head.append(style);


    let start = 1;
    const count = 4;

    const createSnowItem = () => {
        const snowItem = document.createElement('div');

        let speedFill = 10;

        let speedRotatae = 10;

        let countHeight = document.body.clientHeight / window.innerHeight;

        let summSpeed = speedFill * countHeight;

        let finalSpeed = summSpeed / 2 + summSpeed / 2 * Math.random();

        snowItem.classList.add('snow');

        document.body.append(snowItem);

        snowItem.style.cssText = `
            left: ${Math.random() * window.innerWidth - 60}px;
            background-image: url("snow/snowflake${start}.svg");
            animation-duration: ${finalSpeed}s, ${Math.random() * speedRotatae + speedRotatae}s;
            opacity: ${Math.random()};
        `;

        if (start == count) {
            start = 1;
        } else {
            start++
        }

        setTimeout(() => {
            snowItem.remove();
        }, finalSpeed * 1000);
    }

    setInterval(createSnowItem, 100);


}


createSnow();