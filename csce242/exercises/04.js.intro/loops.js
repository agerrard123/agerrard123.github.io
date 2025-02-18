document.getElementById("btn-display").onclick = () => {
    const startNum = parseInt(document.getElementById("txt-start").value);
    const endNum = parseInt(document.getElementById("txt-end").value);
    const displayArea = document.getElementById("start-end-display");
    displayArea.innerHTML = "";
    const errorDisplay = document.getElementById("error-num-order");
    errorDisplay.innerHTML = " "; //clear out any previous errors
    const favMessageP = document.getElementById("fav-message");
    favMessageP.innerHTML = "";

    if(parseInt(endNum) < parseInt(startNum)) {
        errorDisplay.innerHTML = `${endNum} is less than ${startNum}.`
        return; //dont do anything else if you already have an error
    }

    for(let i = startNum; i <= endNum; i++) {
        const listItem = document.createElement("li");
        listItem.innerHTML = i;
        displayArea.append(listItem);
        //attach event to onclick listitem
        listItem.onclick = () => {
            favMessageP.innerHTML = `You clicked ${i}.`
        }
    }

    //////////For Loop Assignment Start
    document.getElementById("build-stairs").onclick = () => {
        console.log("button clicked");
    }
}