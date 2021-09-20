const board = document.getElementById('board');
//const board = document.querySelector('#board');
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    board.append(square)

    square.addEventListener('mouseover', () => {
        colorify(square);
    })

    square.addEventListener('mouseleave', () => {
        clearColor(square)
    })

}

function colorify(element){
    let rndColor = () => Math.round(Math.random()*255)
    let rndRGB = `rgb(${rndColor()},${rndColor()},${rndColor()})`
    element.style.backgroundColor = rndRGB
    element.style.boxShadow = `0 0 2px ${rndRGB}, 0 0 20px ${rndRGB}`
}

function clearColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}