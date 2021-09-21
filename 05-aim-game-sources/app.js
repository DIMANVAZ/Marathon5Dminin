const all3screens = document.querySelectorAll('.screen')
const startBtn = document.getElementById('startBtn')
const timeList = document.getElementById('time-list')
const board = document.getElementById('board')
const timeEl = document.getElementById('time')
let time = 0;
let score = 0;

startBtn.addEventListener('click', () => {
    event.preventDefault();
    all3screens[0].classList.add('up')
})

timeList.addEventListener('click', () => {
    if(event.target.classList.contains('time-btn')){
        time = parseInt(event.target.getAttribute('data-time'))
        all3screens[1].classList.add('up')
        startGame()
        console.log(`time = ${time}`)
    }
})

function decreaseTime() {
    let currentTime = --time
    if(currentTime >= 0) {
        timeEl.innerText = currentTime >= 10 ? `00:${currentTime}` : `00:0${currentTime}`
    } else finishGame();
}

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    timeEl.innerText = `00:${time}`
}

board.addEventListener('click', ()=> {
    if(event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRndNumber(10,60)
    circle.classList.add('circle')
    colorify(circle)

    const {height, width} = board.getBoundingClientRect()

    circle.style.width = `${size}px`
    circle.style.height = `${size}px`

    let x = getRndNumber(0, width - size)
    let y = getRndNumber(0, height - size)

    circle.style.top = `${y}px`
    circle.style.left = `${x}px`

    board.append(circle)
    colorify(circle)
}

function getRndNumber(min, max) {
    return Math.round(Math.random() * (max-min) + min)
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Cчёт: <span class="primary">${score}</span></h1>`
}

function colorify(element){
    let rndColor = () => Math.round(Math.random()*255)
    let rndRGB = `rgb(${rndColor()},${rndColor()},${rndColor()})`
    element.style.backgroundColor = rndRGB
    element.style.boxShadow = `0 0 2px ${rndRGB}, 0 0 20px ${rndRGB}`
}

//----------чит----
function winTheGame() {
    function kill() {
        const circle = document.querySelector('.circle')
        if(circle){
            circle.click();
        }
    }
    setInterval(kill, 42)
}

