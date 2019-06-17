function waitForScroll () {
    return new Promise ((resolve) => {
window.addEventListener('scroll', resolve);
    });
}



function drawOnScroll () {
    const colors = ['white', 'red', 'green', 'black', 'yellow', 'brown'];
    const div = document.getElementById('big');
    waitForScroll().then(() => {
        let rand = Math.floor(Math.random() * 6);
        div.style.background = colors[rand];
    })
}



function waitForAnswer () {
   return new Promise ((resolve, reject) => {
        window.addEventListener('keydown', (e) => {
            let key = e.key;
            //console.log(key);
            if (key == "Y") resolve;
            else if (key == 'N') reject;
            //else console.log('Try again');
        });
   });
}


function setText (text) {
let div = document.createElement('div');
document.body.append(div);
text = "Вы сделали домашнее задание? Y / N";
div.innerHTML = text;
}

setText()
.then(waitForAnswer)
.then(() => {
    text = 'Так держать!';
    div.innerHTML = text;
})
.catch(() => {
    text = 'Нужно подтянуть(';
    div.innerHTML = text;
});

function waitForClicks (num) {
    return new Promise ((resolve) => {
        for (let i=0; i<num; i+=1) {
           window.addEventListener('click', resolve);
        }
    });
}



    function waitForTime (sec) {
        return new Promise ((resolve) => {
            let ms = sec * 1000;
            setTimeout (resolve, ms);
        });
        }

function clickChallange (num, time) {
   let text = `У вас есть ${time} секунд, чтобы сделать ${num} кликов`
setText(text).then(() => waitForTime(time)).then(()=> console.log ('Stop'));
setText().then(() => waitForClicks(num)).then(() => {
    let nextText = 'Good job, comrade.';
    setText(nextText);
}).catch(() => {let nextText = '100 кликов вне очереди.';
setText(nextText);});

}