const items = [];
items["Happy Birthday"] = "images/birthday.jpg";
items["Crazy Clown"] = "images/clown.jpg";
items["It's Raining"] = "images/rain.jpg";
items["Quiet Time"] = "images/read.jpg";
items["Working Hard"] = "images/shovel.jpg";
items["Work from Home"] = "images/work.jpg";

const section = document.getElementById("display-list");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupImg = document.getElementById("popup-image");
const closeBtn = document.getElementById("close");

for(let title in items) {
    let container = document.createElement("div");
    container.className = "title";
    container.innerHTML = title;
    container.onclick = () => {
        popupTitle.innerHTML = title;
        popupImg.src = items[title];
        popup.classList.remove("hidden");
        container.append(popup);
        
    };
    section.append(container);
    
    closeBtn.onclick = () => {
        popup.classList.add("hidden");
    };
    
};

