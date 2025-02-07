//print "Say Hello" when button is clicked
document.getElementById("col1of3").onclick = () => {
    const message = document.getElementById("print-hello");
    message.innerHTML += "hello<br>";
};

//change color when button is clicked
const colorPicker = document.getElementById('color-pick');
const star = document.querySelector('.star');

colorPicker.addEventListener('input', (event) => {
    star.style.borderBottomColor = event.target.value;
    star.style.borderColor = event.target.value;
});