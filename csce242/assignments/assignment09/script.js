const displayArea = document.getElementById("start-end-display");
const displayArea2 = document.getElementById("new-button-area");
let stairsDrawn = false;
document.getElementById("draw-stairs").onclick = () => {
    displayArea.classList.remove("hidden");
    displayArea.classList.add("rows");
    const person = document.createElement("img");
    person.id = "stick-person";
    person.src = "images/left.png";
    if(stairsDrawn) {
        return; //do nothing if the stairs have already been drawn
    }

    for(let i = 1; i <= 10; i++) {
        const tread = document.createElement("hr");
        tread.id = "step";
        displayArea.append(tread);
        if(i == 7) {
            displayArea.append(person);
        }
    }
    stairsDrawn = true;

    if(stairsDrawn) {
        const climbButton = document.createElement("button");
        climbButton.textContent = "Climb Stairs";
        climbButton.id = "climb-button";
        displayArea2.append(climbButton);
    }


    let count = 0;
    const leftRight = ["images/left.png", "images/right.png"];
    let imageIndex = 0;
    let climb;
    document.getElementById("climb-button").onclick = () => {

        climb = setInterval(() => {
            if(count < 8) {
                person.src = leftRight[imageIndex];
                person.style.bottom = `${count*30}px`;
                displayArea.append(person);
                imageIndex = (imageIndex + 1) % leftRight.length;
                count++;
            }
            else{
                clearInterval(climb);
            }
        },500);
    }
};