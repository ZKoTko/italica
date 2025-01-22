document.addEventListener("DOMContentLoaded", () => {
    const customSelects = document.querySelectorAll(".custom-select");
  
    customSelects.forEach(customSelect => {
      const trigger = customSelect.querySelector(".custom-select-trigger");
      const options = customSelect.querySelectorAll(".custom-option");
      const hiddenSelect = customSelect.nextElementSibling;
  
      // Открытие/закрытие выпадающего списка
      trigger.addEventListener("click", (e) => {
        // Закрываем все остальные открытые списки
        closeAllSelects();
        customSelect.classList.toggle("open");
        e.stopPropagation();
      });
  
      // Выбор варианта
      options.forEach(option => {
        option.addEventListener("click", () => {
          const value = option.getAttribute("data-value");
          trigger.textContent = option.textContent;
          hiddenSelect.value = value; // Синхронизация значения
          customSelect.classList.remove("open");
        });
      });
    });
  
    // Закрытие всех списков при клике вне
    document.addEventListener("click", () => {
      closeAllSelects();
    });
  
    // Функция закрытия всех открытых списков
    function closeAllSelects() {
      customSelects.forEach(customSelect => {
        customSelect.classList.remove("open");
      });
    }
});

document.querySelector('#checkout-btn-1-1').addEventListener('click', function() {
  // Убираем класс 'active' и добавляем класс 'hidden' для #checkout-forms-content-1
  const content1 = document.querySelector('#checkout-forms-content-1');
  content1.classList.remove('active');
  content1.classList.add('hidden');

  // Убираем класс 'hidden' и добавляем класс 'active' для #checkout-forms-content-2
  const content2 = document.querySelector('#checkout-forms-content-2');
  content2.classList.remove('hidden');
  content2.classList.add('active');

  // Прокручиваем страницу наверх
  window.scrollTo({
      top: 0,
      behavior: 'smooth' // Плавный скроллинг
  });
});

// Добавляем обработчик для кнопки с классом .checkout-forms-content-2-info-btn
document.querySelector('.checkout-forms-content-2-info-btn').addEventListener('click', function() {
  // Убираем класс 'active' и добавляем класс 'hidden' для #checkout-forms-content-2
  const content2 = document.querySelector('#checkout-forms-content-2');
  content2.classList.remove('active');
  content2.classList.add('hidden');

  // Убираем класс 'hidden' и добавляем класс 'active' для #checkout-forms-content-1
  const content1 = document.querySelector('#checkout-forms-content-1');
  content1.classList.remove('hidden');
  content1.classList.add('active');

  // Прокручиваем страницу наверх
  window.scrollTo({
      top: 0,
      behavior: 'smooth' // Плавный скроллинг
  });
});

// Добавляем обработчик для кнопки с классом .checkout-forms-content-2-inner-btn
document.querySelector('.checkout-forms-content-2-inner-btn').addEventListener('click', function() {
  // Убираем класс 'active' и добавляем класс 'hidden' для #checkout-forms-content-2-inner
  const content2Inner = document.querySelector('.checkout-forms-content-2-inner');
  content2Inner.classList.remove('active');
  content2Inner.classList.add('hidden');

  // Убираем класс 'hidden' и добавляем класс 'active' для #checkout-forms-content-3-inner
  const content3Inner = document.querySelector('.checkout-forms-content-3-inner');
  content3Inner.classList.remove('hidden');
  content3Inner.classList.add('active');

  // Прокручиваем страницу наверх
  window.scrollTo({
      top: 0,
      behavior: 'smooth' // Плавный скроллинг
  });
});



function selectRadio(id, element) {
  // Сначала убираем класс active у всех контейнеров
  document.querySelectorAll('.checkout-forms-content-2-delivery-item').forEach((item) => {
    item.classList.remove('active');
  });

  document.querySelectorAll('.accordion-item').forEach((item) => {
    item.classList.remove('active');
  });

  // Добавляем класс active к текущему контейнеру
  element.classList.add('active');

  // Выбираем соответствующую радио-кнопку
  document.getElementById(id).checked = true;
}



const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");

    // Убираем класс active с предыдущего активного элемента, если он существует и не совпадает с текущим
    if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      const currentlyActiveBody = currentlyActiveAccordionItemHeader.nextElementSibling;
      if (currentlyActiveBody) {
        currentlyActiveBody.style.maxHeight = 0;
      }
    }

    // Переключаем класс active на текущем элементе
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;

    // Если у текущего аккордеона есть тело, то изменяем его maxHeight
    if (accordionItemBody) {
      if (accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      } else {
        accordionItemBody.style.maxHeight = 0;
      }
    }
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const customSelects = document.querySelectorAll(".custom-select");

  customSelects.forEach(customSelect => {
    const trigger = customSelect.querySelector(".custom-select-trigger");
    const options = customSelect.querySelectorAll(".custom-option");
    const hiddenSelect = customSelect.nextElementSibling;

    // Открытие/закрытие выпадающего списка
    trigger.addEventListener("click", (e) => {
      // Закрываем все остальные открытые списки
      closeAllSelects();
      customSelect.classList.toggle("open");
      e.stopPropagation();
    });

    // Выбор варианта
    options.forEach(option => {
      option.addEventListener("click", () => {
        const value = option.getAttribute("data-value");
        trigger.textContent = option.textContent;
        hiddenSelect.value = value; // Синхронизация значения
        customSelect.classList.remove("open");
      });
    });
  });

  // Закрытие всех списков при клике вне
  document.addEventListener("click", () => {
    closeAllSelects();
  });

  // Функция закрытия всех открытых списков
  function closeAllSelects() {
    customSelects.forEach(customSelect => {
      customSelect.classList.remove("open");
    });
  }
});