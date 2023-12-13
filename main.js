const timer3 = ()=>{
    let date = document.getElementById('date')
    let day = document.getElementById('day')
    let month = document.getElementById('month')
    let time = document.getElementById('time')
    let sec1 = document.getElementById('sec')

    const timer = new Date()

    let hours = timer.getHours()
    let min = timer.getMinutes()
    let sec = timer.getSeconds()

    if(hours <= 9)hours="0"+hours 
    if(min <= 9)min="0"+min
    if(sec <= 9)sec="0"+sec 

    let timer2 = hours +":"+ min 
    
    time.innerHTML = timer2
    sec1.innerHTML = sec
 
    

    let week = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"]
    let montH =["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]


    date.innerHTML =  timer.getDate()
    day.innerHTML=week[timer.getDay()]
    month.innerHTML=montH[timer.getMonth()]
    
    
    setTimeout(()=>{
        timer3()

    },1000)
}
timer3()







