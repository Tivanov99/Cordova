document.addEventListener('deviceready', function() {
    // Когато устройството е готово
    const calculateBtn = document.getElementById('calculate-btn');
    const totalCaloriesElem = document.getElementById('total-calories');

    // Функция за изчисляване на калориите
    function calculateTotalCalories() {
        const items = document.querySelectorAll('#calorie-list ons-list-item');
        let totalCalories = 0;

        items.forEach(item => {
            const calories = parseInt(item.getAttribute('data-calories'));
            totalCalories += calories;
        });

        totalCaloriesElem.textContent = totalCalories;
    }

    // Добавяне на слушател на събитие за бутона
    calculateBtn.addEventListener('click', calculateTotalCalories);
});
