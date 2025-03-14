//toggleling the nav
document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

//parsing your cellar information into website
const getYourCellar = async () => {
    const url = "https://agerrard123.github.io/csce242/projects/part6/wineStorage.json";

    try {
        const response = await fetch(url);
        return await response.json();
    }   catch (error) {
        console.log(error);
    }
};

const showYourCellar = async () => {
    let yourCellar = await getYourCellar();
    let winesDiv = document.getElementById("wine-list");

    yourCellar.forEach((wine) =>
        winesDiv.append(getCellarItem(wine))
    );
};

const getCellarItem = (wine) => {
    const wineSection = document.createElement("section");
    wineSection.classList.add("style");

    const img = document.createElement("img");
    img.classList.add("image");
    img.src = wine.img_name;
    wineSection.append(img);

    const wineInfoContainer = document.createElement("div");
    wineInfoContainer.classList.add("wine-info-container");

    const p = document.createElement("p");
    p.classList.add("wine-p-1");
    p.innerHTML = `Winery: <br>Vintage: <br>Price: <br>Country: <br>Region: <br>Description: <br>Grape: <br>Cellar Location: `;

    const wineInfo = getWineInfo(wine);

    wineInfoContainer.append(p, wineInfo);
    wineSection.append(wineInfoContainer);

    const button = document.createElement("button");
    button.classList.add("remove-wine");
    button.innerHTML = "Remove Wine";
    wineSection.append(button);

    return wineSection;
}

const getWineInfo = (wine) => {
    const p = document.createElement("p");
    p.classList.add("wine-p-2");
    p.innerHTML = `${wine.winery}<br>${wine.vintage}<br>$${wine.price}<br>${wine.country}<br>${wine.region}<br>${wine.description}<br>${wine.grape}<br>${wine.cellarLocation}`;
    return p;
}

window.onload = () => showYourCellar();