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