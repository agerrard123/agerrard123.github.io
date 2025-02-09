//print "Say Hello" when button is clicked
document.getElementById("col1of3").onclick = () => {
    const message = document.getElementById("print-hello");
    message.innerHTML += "hello<br>";
};

//change color when button is clicked
document.getElementById("color-pick").addEventListener('input', function(event) {
    const selectedColor = event.target.value;
    document.body.style.setProperty('--star-fill-color', selectedColor);
});

//change image when it is clicked
document.getElementById("image").onclick = () => {
    document.getElementById("image").src = "images/anImage.jpg";
};