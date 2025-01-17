const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

        accordionItemHeaders.forEach(accordionItemHeader => {
        accordionItemHeader.addEventListener("click", event => {
            
            // Разворачивается только один (при разворачивании второго первый сворачивается)
            
            // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
            // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
            //   currentlyActiveAccordionItemHeader.classList.toggle("active");
            //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
            // }

            accordionItemHeader.classList.toggle("active");
            const accordionItemBody = accordionItemHeader.nextElementSibling;
            if(accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            }
            else {
            accordionItemBody.style.maxHeight = 0;
            }
            
    });
});



const rangeMin = document.getElementById('range-min');
const rangeMax = document.getElementById('range-max');
const sliderTrack = document.querySelector('.slider-track');
const minValueInput = document.querySelector('.filter-cost-input-1'); // Инпут для минимального значения
const maxValueInput = document.querySelector('.filter-cost-input-2'); // Инпут для максимального значения

function updateTrack() {
  let min = parseInt(rangeMin.value);
  let max = parseInt(rangeMax.value);

  // Если значение пустое, не обновлять ползунок
  if (isNaN(min)) min = 0;
  if (isNaN(max)) max = 0;

  const percentMin = (min / rangeMin.max) * 100;
  const percentMax = (max / rangeMax.max) * 100;

  sliderTrack.style.background = `linear-gradient(
    to right, 
    #A4A4A4 ${percentMin}%, 
    #151515 ${percentMin}%, 
    #151515 ${percentMax}%, 
    #A4A4A4 ${percentMax}%
  )`;

  // Обновляем значения в инпутах
  minValueInput.value = min;
  maxValueInput.value = max;
}

// Слушатели для ползунков
rangeMin.addEventListener('input', updateTrack);
rangeMax.addEventListener('input', updateTrack);

// Слушатели для инпутов
minValueInput.addEventListener('input', function() {
  const min = parseInt(minValueInput.value);
  rangeMin.value = isNaN(min) ? 0 : min;
  updateTrack();
});

maxValueInput.addEventListener('input', function() {
  const max = parseInt(maxValueInput.value);
  rangeMax.value = isNaN(max) ? 0 : max;
  updateTrack();
});

updateTrack();




