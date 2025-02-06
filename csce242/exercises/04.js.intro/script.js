//do stuff when button clicked
document.getElementById("btn-click-me").onclick = () => {
    console.log("WOW!");
    document.getElementById("result").innerHTML="Good Times";
};

//change color
document.getElementById("btn-color").onclick = () => {
    const messageP = document.getElementById("message");
    messageP.innerHTML = "Bad Times";
    messageP.classList.toggle("sad");

}

//clear the text
document.getElementById("btn-clear-me").onclick = () => {
    const messageC = document.getElementById("message", "result");
    messageC.classList.remove("hidden");
}

//enter feeling
document.getElementById("fname").onkeydown = (event) => {
    //const emotion = document.getElementById("fname").value;
    const emotion = event.currentTarget.value;
    console.log(emotion);
}