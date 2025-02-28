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

        // pizzaSection.onclick = () => displayPopup(this);
        pizzaSection.onclick = () => showInfo(this);


        // document.querySelectorAll("#pizza-list section").forEach((pizza)=>{
        //     pizza.onclick = () => {
        //         // const label = pizza.querySelector("h4").innerHTML;
        //         // document.querySelector("#popup h4").innerHTML = label;
        //         // const h4 = document.createElement("h4");
        //         // h4.innerHTML = pizza.name;
        //         document.querySelector("#popup h2").innerHTML = pizza.name;
        //         const imgSRC = pizza.querySelector("img").src;
        //         document.getElementById("popup").style.display="block";
        //         // document.querySelector("#popup h2").innerText = label;
        //         document.querySelector("#popup img").src = imgSRC;
        //     }
        // });

        return pizzaSection;
    }
}

const showInfo = (pizzas) => {
    document.getElementById("popup").style.display = "block";

    document.querySelector("#popup h4").innerText = pizzas.name;

    document.querySelector("#popup img").src = pizzas.pic;

    const p = document.createElement("p");
    
    document.querySelector("#popup p").innerText = `Ingredients: ${pizzas.ingredients}\n\nSauce: ${pizzas.sauce}\n\nCheese: ${pizzas.cheese}\n\nPrice: ${pizzas.price}`;
}

// const displayPopup = (pizzas) => {
//     const popup = document.getElementById("popup");
//     popup.innerText = "";

//     popup.classList.remove("hidden");
//     popup.classList.add("display");

//     const h4 = document.createElement("h4");
//     h4.textContent = pizzas.name;
//     popup.append(h4);

//     const container = document.createElement("section");
//     container.classList.add("pizza-info");

//     const p = document.createElement("p");
//     p.textContent = `Ingredients: ${pizzas.ingredients}\n\nSauce: ${pizzas.sauce}\n\nCheese: ${pizzas.cheese}\n\nPrice: ${pizzas.price}`;
//     container.append(p);

//     const img = document.createElement("img");
//     img.src = pizzas.pic;
//     container.append(img);

//     popup.append(container);
// }

window.onload = () => {
    let pizzas = [];
    let pizzaList = document.getElementById("pizza-list");

    pizzas.push(new Pizza("Hawaiian", "Ham, Pinapple", "Tomato sauce", "Mozzarella", "$12.99", "images/hawaiian.jpg"));
    pizzas.push(new Pizza("Buffalo Chicken", "Chicken, Onions", "Hot sauce", "Cheddar cheese, Blue cheese", "$18.99", "images/buffaloChicken.jpg"));
    pizzas.push(new Pizza("Margarita", "Basil, Tomatoes", "Extra Virgin Olive Oil", "Mozzarella", "$16.99", "images/margaritta.jpg"));
    pizzas.push(new Pizza("Pepperoni", "Pepperonis", "Tomato sauce", "Mozzarella", "$10.99", "images/pepperoni.jpg"));
    pizzas.push(new Pizza("Veggie", "Mushrooms, Olives, Bell Peppers, Spinach", "Tomato sauce", "Mozzarella", "$13.99", "images/veggie.jpg"));

    for(let i in pizzas) {
        pizzaList.append(pizzas[i].pizza);
    }
}



// document.querySelectorAll("#pizza-list section").forEach((pizza)=>{
//     pizza.onclick = () => {
//         const label = pizza.querySelector("h4").innerHTML;
//         const imgSRC = pizza.querySelector("img").src;
//         document.getElementById("popup").style.display="block";
//         document.querySelector("#popup h2").innerHTML = label;
//         document.querySelector("#popup img").src = imgSRC;
//     }
// });