let block1 = document.querySelector('.block1')
let block2 = document.querySelector('.block2')
function changeBackgroundColorOne(){
    block2.style.backgroundColor = 'green' 
}
function changeBackgroundColorTwo(){
    block1.style.backgroundColor = 'red' 
}
block1.addEventListener('click', changeBackgroundColorOne)
block2.addEventListener('click', changeBackgroundColorTwo)