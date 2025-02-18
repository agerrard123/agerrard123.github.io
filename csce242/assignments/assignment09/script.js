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

    document.getElementById("climb-button").onclick = () => {
        console.log("climb those stairs boy");
        let height = 7;
        const interval = setInterval(frame, 10);
        function frame () {
            for(let i = 7; i >= 1; i--) {
                if(i == 2 || i == 4 || i == 6){
                    person.src = "images/right.png";
                    height--;
                }
                else if (i == 3 || i == 5 || i == 7) {
                    person.src = "images/left.png";
                    height--;
                }
                    
                
            }
        }
        
    }
};