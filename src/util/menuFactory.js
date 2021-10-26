function menuFactory(category,foodName,image,price,description){
    const outerContainer=document.createElement('div');
    outerContainer.setAttribute('class','food');
    

    const foodNameText=document.createElement('h1');
    foodNameText.textContent=foodName;
    const img=document.createElement('img');
    img.src=`${image}`;
    const priceText=document.createElement('h2');
    priceText.textContent=price;
    const descriptionText=document.createElement('p');
    descriptionText.textContent=description;

    outerContainer.appendChild(foodNameText);
    outerContainer.appendChild(img);
    outerContainer.appendChild(priceText);
    outerContainer.appendChild(descriptionText);

    return outerContainer;
}

export {menuFactory};