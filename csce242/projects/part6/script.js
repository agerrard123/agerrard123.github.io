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
    let winesDiv = document.getElementById("wines-div");

    yourCellar.forEach((wine) =>
        winesDiv.append(getCellarItem(wine))
    );
};

const getCellarItem = (wine) => {
    const wineSection = document.createElement("section");
    wineSection.classList.add("style");

    const img = document.createElement("img");
    img.src = wine.img_name;
    wineSection.append(img);

    wineSection.append(getWineInfo(wine));

    return wineSection;
}

const getWineInfo = (wine) => {
    const p = document.createElement("p");
    p.classList.add("wine-p")
    p.innerHTML = `Winery: ${wine.winery}<br>Vintage: ${wine.vintage}<br>Price: $${wine.price}<br>Country: ${wine.country}<br>Region: ${wine.region}<br>Location in Cellar: ${wine.cellarLocation}<br>Characteristics: ${wine.characteristics}`;
    return p;
}

window.onload = () => showYourCellar();