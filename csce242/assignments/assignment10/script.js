const items = ["Happy Birthday", "Crazy Clown", "It's Raining", "Quiet Time", "Working Hard", "Work from Home"];
// items["Happy Birthday"] = "";
// items["Crazy Clown"] = "";
// items["It's Raining"] = "";
// items["Quiet Time"] = "";
// items["Working Hard"] = "";
// items["Work from Home"] = "";
const section = document.getElementById("display-list");
const ul = document.createElement("ul");
document.getElementById("display-list").append(ul);

for(let item in items) {
    const li = document.createElement("li");
    ul.append(li);
    li.innerHTML = items[item];

    li.onclick = () => {
        console.log("clicked: ", items[item]);
    }
}