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
}

let count = 0;
let updateCount;
document.getElementById("btn-count").onclick = (event) => {
    //Start the counter
    if(event.currentTarget.innerHTML.toLowerCase() == "start") {
        event.currentTarget.innerHTML = "Stop";

        updateCount = setInterval(()=>{
            count++;
            document.querySelector("#count-display").innerHTML = count;
        },1000);
    }
    //Stop the counter
    else {
        event.currentTarget.innerHTML = "Start";
        clearInterval(updateCount);
    }
}

//Reset the counter
document.querySelector("#btn-reset-count").onclick = () => {
    count = 0;
    clearInterval(updateCount);
    document.querySelector("#btn-count").innerHTML = "Start";
    document.querySelector("#count-display").innerHTML = "";
}

document.querySelector("#btn-show-toys").onclick = (event) => {
    const toys = ["frisbee", "action figure", "plastic car", "ball", "jump rope"];

    event.currentTarget.disabled = true;

    // //loop through the array
    // for(let i=0; i<toys.length; i++) {
    //     console.log(toys[i]);
    // }

    const ul = document.createElement("ul");
    document.getElementById("display-toys").append(ul);

    toys.forEach((toy, i)=>{
        const li = document.createElement("li");
        ul.append(li);
        li.innerHTML = (`${i+1}. ${toy}`);
    });
}

//loop through an associative array
document.getElementById("btn-show-toy-desc").onclick = () => {
    const toys = [];
    toys["frisbee"] = "A disk that is thrown";
    toys["action figure"] = "A small plastic person";
    toys["plastic car"] = "A small car that is pushed";
    toys["ball"] = "A circular item that is thrown";
    toys["jump rope"] = "A rop that is jumped over";
    const section = document.getElementById("display-toy-desc");

    for(let toy in toys) {
        const p = document.createElement("p");
        section.append(p);
        p.innerHTML = (`${toy}: ${toys[toy]}`);
        p.onclick = () => {
            document.getElementById("toy-message").innerHTML = `Best ${toy} ever. ${toys[toy]}`;
        }
    }
}