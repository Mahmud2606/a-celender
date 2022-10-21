
const clock = document.querySelector(".clock"),
currentDate = document.querySelector('.curent-date'),
dayesTag = document.querySelector(".dayes"),
prevNext = document.querySelectorAll(".icons span i");

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();



const months = ["January", "February", "March", "April", "May", "June", "July", "August", "Septembar", "Octobar", "Novembar", "Decembar"];

function randerCalender(){
    // clock function
    // function startClock(){
    //     let d = new Date(),
    //     hour = d.getHours(),
    //     minute = d.getMinutes(),
    //     second = d.getSeconds();
    //     minute = checkTime(minute);
    //     second = checkTime(second);
    //     let time = hour +":" + minute + ":" + second;
    //     clock.textContent = time;
    //     setInterval(startClock, 1000);
    //     }
    //     startClock()
    //     function checkTime(i){
    //         if(i < 10){
    //             i = "0" + i
    //         }
    //         return i;
    //     }
        // calender
    let firstDayofMonth = new Date(currYear, currMonth , 1).getDay(),
    lastDateOfMonth = new Date(currYear, currMonth +1, 0).getDate(),
    lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay(),
    lastDateOfLastmonth = new Date(currYear, currMonth, 0).getDate();

    let liTag = "";
    for (let i = firstDayofMonth; i > 0; i--){
        liTag += `<li class="inactive">${lastDateOfLastmonth - i +1}</li>`
        
    }
    for(let i = 1; i<=lastDateOfMonth; i++){
        // showing active date
      let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : ""; // if i mached with current date
      // setting active class 
      liTag += `<li class="${isToday}">${i}</li>`
    }
    
    for (let i = lastDayOfMonth; i < 6; i++){
        liTag += `<li class="inactive">${i - lastDayOfMonth  +1}</li>`
       
    }
    currentDate.innerHTML = `${months[currMonth]} ${currYear}`;
    dayesTag.innerHTML = liTag;

}
randerCalender();

prevNext.forEach(icon);

function icon(x){
    x.addEventListener("click", function(){
        currMonth = x.id === "prev"? currMonth - 1 : currMonth +1;
        // creating new year and date if current year is end
        if(currMonth < 0 || currMonth > 11){
            date = new Date(currYear, currMonth); // creating new date and passing updated year and month into this date
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        }else{
            date = new Date();
        }
        randerCalender();
    })
 }
   randerCalender(); 
let d = new Date(2018, 10);

console.log(d);
