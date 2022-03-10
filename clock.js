// add UserName

let userName = prompt ("Adınızı giriniz.")
if( (userName != "") && (userName != null) ) {
    document.getElementById("myName").innerHTML=`${userName[0].toUpperCase()}${userName.slice(1)}` 
}
else if(userName == "") 

alert("Boş giriş yaptınız!");

else if(userName == null) 

alert("Giriş yapmaktan vazgeçtiniz!");

// add date

let date = new Date()
let day = date.getDay()
let hour = date.getHours()
let minute = date.getMinutes()
let second = date.getSeconds()



let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

let clock = document.querySelector('#myClock')

hour = (hour < 10) ? "0" + hour : hour
minute = (minute < 10) ? "0" + minute : minute
second = (second < 10) ? "0" + second : second

clock.innerHTML = `${hour}:${minute}:${second} ${days[day]}`

    

