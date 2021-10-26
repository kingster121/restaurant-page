import './css/style.css';
import './css/home.css';
import './css/menu.css';
import {home,menu,contact} from './page.js';

// creates a unordered list consisting of Home, Menu and Contact?
// add an event-listener to click of list element
const mainContainer=document.getElementById('pages');
let tab=document.createElement('ul');
tab.setAttribute('id','top-bar');

let item1=document.createElement('li');
item1.addEventListener('click',home);
let item2=document.createElement('li');
item2.addEventListener('click',menu);
let item3=document.createElement('li');
item3.addEventListener('click',contact);
item1.textContent="Home";
item2.textContent="Menu";
item3.textContent="Contact";
tab.appendChild(item1);
tab.appendChild(item2);
tab.appendChild(item3);

mainContainer.appendChild(tab);
menu();



