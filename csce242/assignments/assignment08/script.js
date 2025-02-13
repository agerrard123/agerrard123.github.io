//toggleling the nav
document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

//clicking exercise 1
document.getElementById("ex1").onclick = () => {

}

//clicking exercise 2
document.getElementById("ex2").onclick = () => {
    const display = document.getElementById("container1");
    display.classList.remove("display-ex1");
    display.classList.add("display-ex2");
}

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

}