
//  <div id="garlend" class="garlend garlend_2"></div>

const garlend = document.createElement('div')
garlend.classList.add('garlend', 'gerlend_2');

document.body.append(garlend)

const styleChristmas = document.createElement('style')
styleChristmas.textContent = `
body {
    position: relative;
}

.christmas::before {
    content: "";
    width: 200px;
    height: 250px;
    position: fixed;
    top: 0;
    left: 0;
    background-image: url("garlend/elka.png");
    z-index: 499;
}
@media (max-width: 1000px) {
    .header__burger {
        justify-self: end;
    }
}

.garlend {
    position: fixed;
    top: 0;
    left: 0;
    height: 36px;
    width: 100%;
    background-image: url("garlend/christmas.png");
    z-index: 500;
}

.garlend_1 {
    background-position: 0 0;
}

.garlend_2 {
    background-position: 0 -36px;
}

.garlend_3 {
    background-position: 0 -72px;
}

.garlend_4 {
    background-position: 0 -108px;
}
`;
document.head.append(styleChristmas)

let orderGerland = 2;
setInterval(function () {
    if (orderGerland == 2) {
        garlend.classList.add("garlend_3");
        garlend.classList.remove("garlend_2");
        orderGerland = 3;
    } else if (orderGerland == 3) {
        garlend.classList.add("garlend_4");
        garlend.classList.remove("garlend_3");
        orderGerland = 4;
    } else if (orderGerland == 4) {
        garlend.classList.add("garlend_2");
        garlend.classList.remove("garlend_4");
        orderGerland = 2;
    }
}, 500);