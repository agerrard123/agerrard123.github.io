//toggleling the nav for ex1
document.getElementById("toggle-nav-ex1").onclick = () => {
    document.getElementById("nav-items-ex1").classList.toggle("hide-small");
    if(document.querySelector(".arrow-down").style.display == "none") {
        document.querySelector(".arrow-up").style.display="none";
        document.querySelector(".arrow-down").style.display="block";
    }
    else if(document.querySelector(".arrow-up").style.display == "none") {
        document.querySelector(".arrow-up").style.display="block";
        document.querySelector(".arrow-down").style.display="none";

    }
};

//toggleling the nav for ex2
document.getElementById("toggle-nav-ex2").onclick = () => {
    document.getElementById("nav-items-ex2").classList.toggle("hide-small");
    if(document.querySelector(".arrow-down-2").style.display == "none") {
        document.querySelector(".arrow-up-2").style.display="none";
        document.querySelector(".arrow-down-2").style.display="block";
    }
    else if(document.querySelector(".arrow-up-2").style.display == "none") {
        document.querySelector(".arrow-up-2").style.display="block";
        document.querySelector(".arrow-down-2").style.display="none";

    }
};


//clicking exercise 2
document.getElementById("ex2-item").onclick = () => {
    const display = document.getElementById("container1");
    display.classList.add("hidden");
    document.getElementById("container2").classList.remove("hidden");
};

//clicking exercise 1
document.getElementById("ex1-item").onclick = () => {
    const display = document.getElementById("container1");
    display.classList.remove("hidden");
    document.getElementById("container2").classList.add("hidden");
};

//changing mode of transportation
document.getElementById("txt-transportation").onkeyup = () => {
    const transportation = document.getElementById("txt-transportation").value.toLowerCase().trim();
    document.getElementById("img-transportation").src = "";

    if(transportation == "bike") {
        document.getElementById("img-transportation").src = "images/bike.jpg";
    }
    else if(transportation == "scooter") {
        document.getElementById("img-transportation").src = "images/scooter.png";
    }
    else if(transportation == "car") {
        document.getElementById("img-transportation").src = "images/car.jpeg";
    }
    else if(transportation == "skateboard") {
        document.getElementById("img-transportation").src = "images/skateboard.jpeg";
    }
};

//changing color of heart
const redButton = document.getElementById("red-button");
const greenButton = document.getElementById("green-button");
const blueButton = document.getElementById("blue-button");
const changeHeartColor = (event) => {
    let color = event.target.textContent.toLowerCase();
    if(color == "red") {
        document.documentElement.style.setProperty('--heart-fill-color', 'red');
    }
    else if(color == "green") {
        document.documentElement.style.setProperty('--heart-fill-color', 'green');
    }
    else if(color == "blue") {
        document.documentElement.style.setProperty('--heart-fill-color', 'blue');
    }
}
redButton.addEventListener("click", changeHeartColor);
greenButton.addEventListener("click", changeHeartColor);
blueButton.addEventListener("click", changeHeartColor);