document.addEventListener("DOMContentLoaded", () => {
    const navBurger = document.querySelector(".nav-burger");
    const mobNav = document.querySelector(".mob-nav");
    const pageFilter = document.querySelector(".page-filter");
    const mobNavClose = document.querySelector(".mob-nav-close");
    const body = document.body;
    const html = document.documentElement;

    // Функция для удаления классов
    const removeClasses = () => {
        mobNav.classList.remove("active");
        pageFilter.classList.remove("active");
        body.classList.remove("no-scroll");
        html.classList.remove("no-scroll");
    };

    // Добавление классов при нажатии на .nav-burger
    navBurger.addEventListener("click", () => {
        mobNav.classList.add("active");
        pageFilter.classList.add("active");
        body.classList.add("no-scroll");
        html.classList.add("no-scroll");
    });

    // Удаление классов при нажатии на .mob-nav-close
    mobNavClose.addEventListener("click", removeClasses);

    // Удаление классов при нажатии на .page-filter
    pageFilter.addEventListener("click", removeClasses);
});

document.querySelectorAll('.mob-nav-item-arrow').forEach(arrow => {
    arrow.addEventListener('click', () => {
      const parentItem = arrow.closest('.mob-nav-item');
      const dropdown = parentItem.querySelector('.mob-nav-item-dropdown');
      
      // Закрываем все другие открытые элементы
      document.querySelectorAll('.mob-nav-item-dropdown.active').forEach(openDropdown => {
        if (openDropdown !== dropdown) {
          openDropdown.classList.remove('active');
          openDropdown.previousElementSibling.classList.remove('active'); // Убираем класс активной стрелки
        }
      });
  
      // Если текущий dropdown уже активен, скрываем его
      if (dropdown && dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
        arrow.classList.remove('active');
      } else {
        // Переключаем состояние для текущего элемента
        if (dropdown) {
          dropdown.classList.add('active');
        }
        arrow.classList.add('active');
      }
    });
});
  
  
  
  