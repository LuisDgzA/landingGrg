console.log("demo")
var events = [
  
  {'type':'evento','Date': new Date(2025, 7, 10), 'Title': '25 year anniversary', "img": "https://universidadindex.com/assets/img/calendario/Noviembre-01.png"},  
  {'type':'evento','Date': new Date(2025, 8, 11), 'Title': '25 year anniversary', "img": "https://universidadindex.com/assets/img/calendario/Noviembre-30.png"},
  {'type':'inscripcion','Date': new Date(2025, 7, 12), 'Title': '25 year anniversary', "img": "https://universidadindex.com/assets/img/calendario/Noviembre-01.png"},  
  {'type':'inscripcion','Date': new Date(2025, 8, 13), 'Title': '25 year anniversary', "img": "https://universidadindex.com/assets/img/calendario/Noviembre-30.png"},

];


const eventsInscripcion = events.filter(event => event.type === 'inscripcion')
console.log("🚀 ~ eventsInscripcion:", eventsInscripcion)
const eventsNormal = events.filter(event => event.type === 'evento')
console.log("🚀 ~ eventsNormal:", eventsNormal)

console.log(events)
var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, eventsNormal, settings);
// console.log("hola")

// const btncalendar = document.getElementById('btncalendar')

// btncalendar.addEventListener('click', () => {
//     element.innerHTML = ''
//     caleandar(element, eventsInscripcion, settings);
// })

document.addEventListener("click", function(e){
    const target = e.target.closest(".eventday"); // Or any other selector.

    if(target){
        // Do something with `target`.
        // console.log(target.getAttribute('data-index'))
        let index = Number(target.getAttribute('data-index'))
        // imgCalendario.setAttribute("src",target.getAttribute("data-src"))

    }
});