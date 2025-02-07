//print "Say Hello" when button is clicked
document.getElementById("col1of3").onclick = () => {
    const message = document.getElementById("print-hello");
    message.innerHTML += "hello<br>";
}

//change color when button is clicked
