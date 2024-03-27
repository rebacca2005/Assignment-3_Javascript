document.addEventListener('DOMContentLoaded', function() {
    // Dynamically add student info
    var studentInfo = document.getElementById('student-info');
    studentInfo.textContent = 'Student ID: 200549269 | Name: Rebacca Min';

    // Array of non-vegetarian pizzas with toppings and rates
    var nonVegPizzas = [
        { name: 'Chicken Supreme', toppings: 'Chicken, Olives, Bell Peppers', rate: '$12.99' },
        { name: 'Meat Lovers', toppings: 'Pepperoni, Sausage, Ham', rate: '$14.99' },
        { name: 'BBQ Chicken', toppings: 'BBQ Chicken, Bacon, Onions', rate: '$13.99' }
    ];

    // Array of vegetarian pizzas with toppings and rates
    var vegPizzas = [
        { name: 'Margherita', toppings: 'Tomato Sauce, Mozzarella, Basil', rate: '$10.99' },
        { name: 'Vegetarian Deluxe', toppings: 'Mushrooms, Onions, Bell Peppers', rate: '$11.99' },
        { name: 'Mushroom Lovers', toppings: 'Mushrooms, Garlic, Parmesan', rate: '$11.49' }
    ];

    // Selected pizza details
    var selectedPizza = {
        name: '',
        size: '',
        toppings: [],
        crust: ''
    };

    // Populate non-veg pizza options
    var nonVegPizzasContainer = document.getElementById('non-veg-pizzas');
    nonVegPizzas.forEach(function(pizza) {
        var option = createPizzaButton(pizza);
        nonVegPizzasContainer.appendChild(option);
    });

    // Populate veg pizza options
    var vegPizzasContainer = document.getElementById('veg-pizzas');
    vegPizzas.forEach(function(pizza) {
        var option = createPizzaButton(pizza);
        vegPizzasContainer.appendChild(option);
    });

    // Build Your Own Pizza button
    var buildYourOwnButton = document.getElementById('build-your-own-btn');
    buildYourOwnButton.addEventListener('click', function() {
        selectedPizza.name = "Custom Pizza"; // Set name for custom pizza
        displayCustomization();
    });

    // Order button click event
    var orderButton = document.getElementById('order-btn');
    orderButton.addEventListener('click', function() {
        var size = document.getElementById('size').value;
        var toppings = [];
        var toppingsCheckboxes = document.querySelectorAll('input[name="toppings"]:checked');
        toppingsCheckboxes.forEach(function(checkbox) {
            toppings.push(checkbox.value);
        });
        var crust = document.getElementById('crust').value;
        var customerName = document.getElementById('customer-name').value;

        selectedPizza.size = size;
        selectedPizza.toppings = toppings;
        selectedPizza.crust = crust;

        var confirmationMessage = `Dear ${customerName}, your ${size} ${selectedPizza.name} with ${toppings.join(', ')} and ${crust} crust is ordered successfully. Thanks!`;
        document.getElementById('confirmation-message').textContent = confirmationMessage;
        document.getElementById('order-confirmation').style.display = 'block';
    });

    function createPizzaButton(pizza) {
        var button = document.createElement('button');
        button.textContent = pizza.name;
        button.addEventListener('click', function() {
            selectedPizza.name = pizza.name;
            displayCustomization(pizza);
        });
        return button;
    }

    function displayCustomization() {
        document.getElementById('customization').style.display = 'block';
        document.getElementById('order-btn').style.display = 'block';
    }
});
