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


function toggleContent(hideSelector, showSelector) {
  const hideElement = document.querySelector(hideSelector);
  const showElement = document.querySelector(showSelector);

  if (hideElement && showElement) {
    hideElement.classList.remove('active');
    hideElement.classList.add('hidden');

    showElement.classList.remove('hidden');
    showElement.classList.add('active');

    // Прокручиваем страницу наверх
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}


document.addEventListener('click', (event) => {
  if (event.target.matches('.checkout-form-1-btn-mob')) {
    const content1 = document.querySelector('#checkout-forms-content-1');
    const content2Inner = document.querySelector('.checkout-forms-content-2-inner');

    if (content1.classList.contains('active')) {
      toggleContent('#checkout-forms-content-1', '#checkout-forms-content-2');
      toggleContent(null, '.checkout-forms-content-2-inner');
    } else if (content2Inner.classList.contains('active')) {
      toggleContent('.checkout-forms-content-2-inner', '.checkout-forms-content-3-inner');
    }
  }

  if (event.target.matches('#checkout-btn-1-1')) {
    toggleContent('#checkout-forms-content-1', '#checkout-forms-content-2');
  }

  if (event.target.matches('.checkout-forms-content-2-info-btn')) {
    toggleContent('#checkout-forms-content-2', '#checkout-forms-content-1');
  }

  if (event.target.matches('.checkout-forms-content-2-inner-btn')) {
    toggleContent('.checkout-forms-content-2-inner', '.checkout-forms-content-3-inner');
  }
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