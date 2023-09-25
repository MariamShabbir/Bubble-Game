var timer = 60;
var score = 0;
var hitrn = 0;




function makebubble() {
    var clutter = "";

    for (var i = 1; i <= 168; i++) {
        rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector('#pbtm').innerHTML = clutter;
}


function runTimer() {
    let timeInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#time').innerHTML = timer
        }
        else {
            document.querySelector('#pbtm').innerHTML = `<h1>GAME OVER</h1>`
            clearInterval(timeInt)
        }
    }, 1000)

}

function getNewhit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector('#hitval').innerHTML = hitrn;
}

function increaseScore() {
    score += 10;
    document.querySelector('#scoreval').innerHTML = score;
}

document.querySelector('#pbtm').addEventListener('click', function (e) {
    var clickedNum = Number(e.target.textContent);
    if (clickedNum === hitrn) {
        increaseScore();
        makebubble();
        getNewhit();
    }

})



makebubble()
runTimer()
getNewhit()

