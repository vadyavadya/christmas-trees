const createSnow = (min, max, minRotate, maxRotate, seturation) => {
    const style = document.createElement('style');
    const snowWrapper = document.createElement('div');
    snowWrapper.classList.add('snow-wrapper');


    const body = document.body;
    const html = document.documentElement;

    var height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight) - 30;

    style.textContent = `
    body {
        position:relative;
    }
    
    .snow-wrapper {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        pointer-events: none;
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
            transform: rotateX(80deg) rotateY(0) rotateZ(360deg);
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
            top:${height + 30}px;
        }
    }
`;
    document.head.append(style);
    document.body.append(snowWrapper);

    let start = 1;
    const count = 4;

    const createSnowItem = () => {
        const snowItem = document.createElement('div');


        let documentHeight = height / window.innerHeight;

        let finalSpeed = (min + (max - min) * Math.random()) * documentHeight;

        snowItem.classList.add('snow');

        snowWrapper.append(snowItem);

        snowItem.style.cssText = `
            // left: ${Math.random() * window.innerWidth - 60}px;
            left: ${Math.random() * document.documentElement.clientWidth}px;
            background-image: url("snow/snowflake${start}.svg");
            animation-duration: ${finalSpeed}s, ${Math.random() * (maxRotate - minRotate) + minRotate}s;
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
    //* появление новых через 100ms
    setInterval(createSnowItem, seturation);
}

window.addEventListener('load', (event) => {
    //* мин и макс времени пробывание на экране, мин и мак время вращения, скорость появление новой снежинки 
    createSnow(5, 15, 10, 15, 100);
});