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