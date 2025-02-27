class Pizza {
    constructor(name, ingredients, sauce, cheese, price, pic) {
        this.name = name;
        this.ingredients = ingredients;
        this.sauce = sauce;
        this.cheese = cheese;
        this.price = price;
        this.pic = pic;
    }

    get pizza() {
        const pizzaSection = document.createElement("section");
        pizzaSection.classList.add("pizza");

        const heading = document.createElement("h3");
        heading.innerText = this.name;
        pizzaSection.appendChild(heading);

        const image = document.createElement("img");
        image.src = this.pic;
        pizzaSection.appendChild(image);

        return pizzaSection;
    }

    
}

window.onload = () => {
    let pizzas = [];
    let pizzaList = document.getElementById("pizza-list");

    pizzas.push(new Pizza("Hawaiian", "Ham, Pinapple", "Tomato sauce", "Mozzarella", "$12.99", "images/hawaiian.png"));
    pizzas.push(new Pizza("Buffalo Chicken", "Chicken, Onions", "Hot sauce", "Cheddar cheese, Blue cheese", "$18.99", "images/buffaloChicken.png"));
    pizzas.push(new Pizza("Margaritta", "Basil, Tomatoes", "Extra Virgin Olive Oil", "Mozzarella", "$16.99", "images/margaritta.png"));
    pizzas.push(new Pizza("Pepperoni", "Pepperonis", "Tomato sauce", "Mozzarella", "$10.99", "images/pepperoni.png"));
    pizzas.push(new Pizza("Veggie", "Mushrooms, Olives, Bell Peppers, Spinach", "Tomato sauce", "Mozzarella", "$13.99", "images/veggie.png"));

    for(let i in pizzas) {
        pizzaList.append(pizzas[i].pizza);
    }
}