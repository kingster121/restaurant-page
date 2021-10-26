import { removeAllChildNodes } from './util/utilityfunction';
import { menuFactory } from './util/menuFactory';
let aboutJson = require('./assets/home/aboutus.json');
let foodJson = require('./assets/menu-data/food.json');

// display the menu page
const contentContainer = document.getElementById('content');

function home() {
    removeAllChildNodes(contentContainer);
    // add about us
    // add mission pbjective
    const aboutContianer = document.createElement('div');
    aboutContianer.setAttribute('class', 'about-container');

    const title = document.createElement('h1');
    title.textContent = "About Us";

    const imageContainer=document.createElement('div');
    imageContainer.setAttribute('class','image-container'); 
    const image = document.createElement('img');
    image.src='./assets/img/AboutUs.jpg'
    imageContainer.appendChild(image);

    const description=document.createElement('p');
    description.textContent=aboutJson.description;


    aboutContianer.appendChild(title);
    aboutContianer.appendChild(imageContainer);
    aboutContianer.appendChild(description);

    contentContainer.appendChild(aboutContianer);
}


// to know where to put each content,by food or beverage, filter by class
// (category,foodName,price,description)
function menu() {
    removeAllChildNodes(contentContainer);
    for (let i = 0; i < foodJson.length; i++) {
        const item = menuFactory(foodJson[i].category, foodJson[i].foodName, foodJson[i].image, foodJson[i].price, foodJson[i].description);
        contentContainer.appendChild(item);
    }
}

function contact() {
    removeAllChildNodes(contentContainer);
}

export { home, menu };

