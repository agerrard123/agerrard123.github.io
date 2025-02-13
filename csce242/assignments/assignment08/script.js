//toggleling the nav for ex1
document.getElementById("toggle-nav-ex1").onclick = () => {
    document.getElementById("nav-items-ex1").classList.toggle("hide-small");
};

//toggleling the nav for ex2
document.getElementById("toggle-nav-ex2").onclick = () => {
    document.getElementById("nav-items-ex2").classList.toggle("hide-small");
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
document.getElementById("buttons").onclick = () => {
    if(redButton) {
        console.log("red");
    }
    else if(greenButton) {
        console.log("green");
    }
    else if(blueButton) {
        console.log("blue");
    }
}