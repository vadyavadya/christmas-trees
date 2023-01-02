const timer = () => {
    const declOfNum = (n, titles) => n + ' ' + titles[n % 10 === 1 && n % 100 !== 11 ?
        0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];

    const timer = document.createElement('div');
    const timerText = document.createElement('p');
    const timerCount = document.createElement('span');

    timer.classList.add('timer');
    timerText.classList.add('timer__text');
    timerCount.classList.add('timer__count');

    timerText.textContent = 'До конца распродажи остаось: ';
    timerCount.textContent = '3 дня 21 час 53 минуты 59 секунд';

    document.body.prepend(timer);
    timer.append(timerText);
    timer.append(timerCount);

    const startTimer = () => {

        const dedline = new Date(2024, 0, 0, 0, 0, 0, 0);
        const now = new Date();
        let timeRemaning = Math.floor((dedline - now) / 1000);


        const seconds = Math.floor(timeRemaning % 60);
        const minutes = Math.floor(timeRemaning / 60 % 60);
        const hours = Math.floor(timeRemaning / 60 / 60 % 24);
        const day = Math.floor(timeRemaning / 60 / 60 / 24 % 31);

        /* 
        // ! сложности из за 30-31 дней
        const mounth = Math.floor(timeRemaning / 60 / 60 / 24 / 31 % 12);
        const yer = Math.floor(timeRemaning / 60 / 60 / 24 / 31 / 12); 
        */

        const s = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
        const m = declOfNum(minutes, ['минута', 'минуты', 'минут']);
        const h = declOfNum(hours, ['час', 'часа', 'часов']);
        const d = declOfNum(day, ['день', 'дня', 'дней']);

        timerCount.textContent = `${d} ${h} ${m} ${s}`;

        if (timeRemaning > 0) {
            setTimeout(startTimer, 1000);
        } else {
            timer.remove();
        }
    }

    startTimer();
}


timer();