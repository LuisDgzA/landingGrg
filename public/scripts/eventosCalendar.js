// console.log("demo")
var events = [
  
  {'type':'evento','Date': "2025-08-10", 'title': 'Ceremonia de Graduación Otoño 2025 ','description':'La Universidad GRG celebra los logros de sus egresados en una emotiva ceremonia virtual. '},  
  {'type':'evento','Date': "2025-08-11", 'title': 'Ceremonia de Graduación Otoño 2025 ','description':'La Universidad GRG celebra los logros de sus egresados en una emotiva ceremonia virtual. ' },
  {'type':'inscripcion','Date': "2025-09-10", 'title': 'Ceremonia de Graduación Otoño 2025 ','description':'La Universidad GRG celebra los logros de sus egresados en una emotiva ceremonia virtual. '},
  {'type':'evento','Date': "2025-09-10", 'title': 'Ceremonia de Graduación Otoño 2025','description':'La Universidad GRG celebra los logros de sus egresados en una emotiva ceremonia virtual. '},  

  {'type':'inscripcion','Date': "2025-10-11", 'title': 'Ceremonia de Graduación Otoño 2025 ','description':'La Universidad GRG celebra los logros de sus egresados en una emotiva ceremonia virtual. ' },
  {'type':'graduacion','Date': "2025-10-12", 'title': 'Ceremonia de Graduación Otoño 2025 ','description':'La Universidad GRG celebra los logros de sus egresados en una emotiva ceremonia virtual. ' },


];


const eventsInscripcion = events.filter(event => event.type === 'inscripcion')
// console.log("🚀 ~ eventsInscripcion:", eventsInscripcion)
const eventsNormal = events.filter(event => event.type === 'evento')
// console.log("🚀 ~ eventsNormal:", eventsNormal)

// console.log(events)
var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);

document.addEventListener("click", function(e){
    const target = e.target.closest(".eventday"); // Or any other selector.

    if(target){
        // Do something with `target`.
        // console.log(target.getAttribute('data-index'))
        let dateToFilter = target.getAttribute('data-date')
        console.log("🚀 ~ dateToFilter:", dateToFilter)
        let eventsFiltered = events.filter(event => 
          event.Date === dateToFilter
        )
        console.log("🚀 ~ eventsFiltered:", eventsFiltered)
        setCarouselMini(eventsFiltered)
        // element.innerHTML = ''
        // caleandar(element, eventsFiltered, settings);
        // imgCalendario.setAttribute("src",target.getAttribute("data-src"))

    }
});


const allCheckboxes = document.querySelectorAll('.checkCalendar')
const arrayFilters = new Set()

allCheckboxes.forEach(check => {
  check.addEventListener('click', () => {
    allCheckboxes.forEach(check => {
      if(check.checked){
        arrayFilters.add(check.value)
        return
      }
      arrayFilters.delete(check.value)
    })
    if(arrayFilters.size > 0){
      
      let eventsFiltered = events.filter(event => 
            arrayFilters.has(event.type)
          )
      console.log("🚀 ~ eventsFiltered:", eventsFiltered)
      element.innerHTML = ''
      caleandar(element, eventsFiltered, settings);
      return

    }
      element.innerHTML = ''

    caleandar(element, events, settings);
  })
})

function setCarouselMini(itemsCarousel){
  const miniCarousel = document.getElementById('miniCarousel')
  miniCarousel.style.opacity = 1
  const img = document.getElementById('carouselMini');
    const rightBtn = document.getElementById('right-btn');
    const leftBtn = document.getElementById('left-btn');

   
    let titleCarousel = img.querySelector("#titleMini")
    // console.log("🚀 ~ titleCarousel:", titleCarousel)
    let descCarousel = img.querySelector("#descriptionMini")

    let dateCarousel = img.querySelector("#dateMini")

    // console.log("🚀 ~ descCarousel:", descCarousel)
    let position = 0;
    titleCarousel.innerText = itemsCarousel[position].title
            descCarousel.inneText = itemsCarousel[position].description

    const moveRight = () => {
        if (position >= itemsCarousel.length - 1) {
            position = 0
            titleCarousel.innerText = itemsCarousel[position].title
            descCarousel.innerText = itemsCarousel[position].description
            dateCarousel.innerText = itemsCarousel[position].Date

            return;
        }
        titleCarousel.innerText = itemsCarousel[position+1].title
        descCarousel.innerText = itemsCarousel[position+1].description
        dateCarousel.innerText = itemsCarousel[position].Date

        position++;
    }

    const moveLeft = () => {
        if (position < 1) {
            position = itemsCarousel.length - 1;
            titleCarousel.innerText = itemsCarousel[position].title
            descCarousel.innerText = itemsCarousel[position].description
            dateCarousel.innerText = itemsCarousel[position].Date


            return;
        }
        titleCarousel.innerText = itemsCarousel[position-1].title
        descCarousel.innerText = itemsCarousel[position-1].description
        dateCarousel.innerText = itemsCarousel[position].Date

        position--;
    }

    rightBtn.addEventListener("click", moveRight);
    leftBtn.addEventListener("click", moveLeft);
}