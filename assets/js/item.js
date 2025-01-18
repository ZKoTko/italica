// Находим все кнопки с классом .item-size-button
const buttons = document.querySelectorAll('.item-size-button');

// Добавляем обработчик события на каждую кнопку
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Убираем класс active у всех кнопок
        buttons.forEach(b => b.classList.remove('active'));
        
        // Добавляем класс active на нажатую кнопку
        button.classList.add('active');
    });
});

document.querySelectorAll('.suggestion-item-price-wrapper').forEach(wrapper => {
    const saleElement = wrapper.querySelector('.suggestion-item-sale');
    const priceElement = wrapper.querySelector('.suggestion-item-price');

    if (!saleElement && priceElement) {
        priceElement.classList.add('active');
    }
});
