const button = document.getElementById('btn')
const color = document.querySelector('.color')
const hex = [
    '0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'
]


button.addEventListener('click', ()=>{
    let hexColor = generateHex()
    document.body.style.backgroundColor= hexColor
    color.textContent = hexColor
    color.style.color = hexColor
})
function generateHex(){             //генерирует такой :#F42A453
    let hexColor= '#'
    for(let i =0; i<6; i++){
        hexColor += hex[getRandomNmb()]
    }
    return hexColor
} 
function getRandomNmb(){        // |Генерирует число от 0 до 12(длины масива хекс)
    return Math.floor(Math.random()*hex.length)
}
