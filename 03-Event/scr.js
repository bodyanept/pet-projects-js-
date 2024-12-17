document.addEventListener('keydown',oneClick)

let x=200
let y=200
let delta=10
const square=document.getElementById('square')

function oneClick(event){
    console.log(event.keyCode);
    // if(event.keyCode===38){             //
    //     alert('нажалась кнопка вверх')
    // }else if(event.keyCode===40){
    //     alert('нажалась кнопка вверх')
    // }
    switch (event.keyCode) {
        case 37:console.log('left');moveLeft() ; break;
        case 38:console.log('up');moveUp() ;break;
        case 39:console.log('right');moveRight() ; break;
        case 40:console.log('down');moveDown() ; break;
        case 32:console.log('space');square.style.backgroundColor='red'  ; break;
        case 107:console.log('space');square.style.backgroundColor='red'  ; break;
        case 109:console.log('space');square.style.backgroundColor='red'  ; break;
    }

    square.style.top=x+'px' 
    square.style.left=y+'px' 
    

}
const moveUp=()=>{x-=delta}
const moveLeft=()=>{y-=delta}
const moveRight=()=>{y+=delta}
const moveDown=()=>{x+=delta}



// document.addEventListener('mouseover',changer)
// document.addEventListener('mouseout',changera)
// function changer(){
//     document.getElementById('square').style.backgroundColor='red'  
// }
// function changera(){
//     document.getElementById('square').style.backgroundColor='rgb(58, 58, 153)'  
// }

square.addEventListener('mouseover',()=>{ square.style.backgroundColor='red'})
square.addEventListener('mouseout',()=>{ square.style.backgroundColor='rgb(58, 58, 153)'})