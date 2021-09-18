const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(()=>{
        event.target.classList.add('hide')
    },0)
}
function dragend(event) {
    event.target.className = 'item'
}

for(let placeholder of placeholders) {
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
}

function dragenter(){
 console.log('dat is DRAGENTER')
    event.target.classList.add('hovered')
}

function dragleave(){
    console.log('dat is dragleave')
    event.target.classList.remove('hovered')
}

function dragover(){
    event.preventDefault() //без этого не сработает dragdrop
    console.log('dat is dragover')
}

function dragdrop(){
    event.target.append(item)
    event.target.classList.remove('hovered')
    console.log('dat is drop')
}