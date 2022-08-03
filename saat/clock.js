 let answer = prompt("Lütfen isminizi giriniz.").split('')
let answerFirstBig = answer[0].toUpperCase() + answer.slice(1).join('')
 let text1DOM = document.querySelector('#myName')
text1DOM.innerHTML = answerFirstBig

// saat oluşturma
let dateDOM = new Date();

function saat (){
let dateDOM = new Date();
let s = dateDOM.getSeconds();
let m = dateDOM.getMinutes();
let h = dateDOM.getHours();
h = (h < 10) ? '0' + h : h
m = (m < 10) ? '0' + m : m
s = (s < 10) ? '0' + s : s
let day = dateDOM.getDay()
let günler = ['Pazar','Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']
clockDOM.innerHTML = `${h}:${m}:${s} ${günler[day]}`
setTimeout(saat, 1000)
}
// günler


//gün ve saat çağırma ve değiştirme
let clockDOM = document.querySelector(".clock")

saat()
