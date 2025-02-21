const items = ["Happy Birthday", "Crazy Clown", "It's Raining", "Quiet Time", "Working Hard", "Work from Home"];
const ul = document.createElement("ul");
document.getElementById("display-list").append(ul);

items.forEach((item) => {
    const li = document.createElement("li");
    ul.append(li);
    li.innerHTML = (`${item}`);
});