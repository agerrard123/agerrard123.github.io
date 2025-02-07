//print "Say Hello" when button (col1of3) is clicked
document.getElementById("col1of3").onclick = () => {
    console.log("help");
    document.getElementById("say-hello").innerHTML = "Say Hello";
};