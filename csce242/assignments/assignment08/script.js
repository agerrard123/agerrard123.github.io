//toggleling the nav
document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
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

}