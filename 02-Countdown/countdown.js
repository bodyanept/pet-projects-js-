const countDownElement=document.querySelector('.countdown')
const items= document.querySelectorAll('.cuntdown-item >h1')
//назначаем дату отсчета
let countDownDate= new Date(2024,12,1,10,0,0)

function getCountTime(){
    //получаем текущее время
    const now=new Date()

    //находим разницу времени

    const distance= countDownDate-now

    //1c=1000mc
    //создаем переменные в мс

    const oneDay= 1000*60*60*24
    const oneHr= 1000*60*60
    const oneMin= 1000*60
    

    //Подсчет дней,часов,секунд
    let days=Math.floor(distance/oneDay)
    let hours=Math.floor((distance%oneDay)/oneHr)
    let minutes=Math.floor((distance%oneHr)/oneMin)
    let seconds=Math.floor((distance%oneMin)/1000)

    //массив для переменных
    const values=[days, hours, minutes, seconds]

    items.forEach(function (item,index) {
        item.textConent=values[index]
    })
}

let countdown=setInterval(getCountTime,1000)

getCountTime()