const displayArea = document.getElementById("start-end-display");
const displayArea2 = document.getElementById("new-button-area");
let stairsDrawn = false;
document.getElementById("draw-stairs").onclick = () => {
    if(stairsDrawn) {
        return; //do nothing if the stairs have already been drawn
    }

    for(let i = 1; i <= 10; i++) {
        const tread = document.createElement("hr");
        tread.id = "step";
        displayArea.append(tread);
    }
    stairsDrawn = true;

    if(stairsDrawn) {
        const climbButton = document.createElement("button");
        climbButton.textContent = "Climb Stairs";
        climbButton.id = "climb-button";
        displayArea2.append(climbButton);
    }

    document.getElementById("climb-button").onclick = () => {
        console.log("climb those stairs boy");
    }
};