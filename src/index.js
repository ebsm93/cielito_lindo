import './style.css';
import birPiz from './images/birPizza.jpg';
import dTac from './images/drownTacos.jpg';
import restView from './images/restaurantView.png';

const content = document.createElement('div');
content.classList.add('pageContentWrapper')

function head() {
    const header = document.createElement('div');
    header.classList.add('header');
    
    const title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML = `Cielito's Mexican Restaurant!`;
    header.appendChild(title);
    
    const nav = document.createElement('div');
    nav.classList.add('nav');
    
    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    homeBtn.onclick = homeTab;
    
    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact';
    contactBtn.onclick = contactTab;
    
    const favoritesBtn = document.createElement('button');
    favoritesBtn.textContent = 'Favorite Dishes';
    favoritesBtn.onclick = favoritesTab;
    
    nav.append(homeBtn, favoritesBtn, contactBtn);
    header.appendChild(nav);
    
    return header
}

function resetContent() {
    console.log('home');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

function homeTab() {
    resetContent();

    const homeContent = document.createElement('div');
    homeContent.classList.add('homeContent');
    
    const buildingPic = new Image();
    buildingPic.src = restView;
    homeContent.appendChild(buildingPic);

    content.appendChild(homeContent);

}

class FavoritesItem {
    constructor(imgSrc, itemName, price, desc, category) {
        this.imgSrc = imgSrc; 
        this.itemName = itemName;
        this.price = price;
        this.desc = desc;
        this.category = category;
    }
    
    generateItemDOM() {

        const itemDOM = document.createElement('div');
        itemDOM.classList.add('favoritesItem');

        const img = new Image();
        img.classList.add('menuItemPic');
        img.src = this.imgSrc;

        const name = document.createElement('div');
        name.textContent = this.itemName;
        name.classList.add('itemName');

        const price = document.createElement('div');
        price.textContent = this.price;
        name.classList.add('itemPrice');

        const desc = document.createElement('div');
        desc.textContent = this.desc;
        desc.classList.add('itemDesc');
        
        itemDOM.append(name, img, price, desc)
        return itemDOM;
    }

}

function favoritesTab() {

    resetContent();
    const topText = document.createElement('div')
    topText.textContent = `CUSTOMER FAVORITES`;
    topText.classList.add('pageTitle');
    content.appendChild(topText);
    
    const favoritesContent = document.createElement('div');
    favoritesContent.setAttribute('id', 'favoritesContent');
    
    const birPizza = new FavoritesItem(birPiz, 'Birria Pizza', '$13.99', 'Pizza made out of Birria!', 'PLATES');
    favoritesContent.appendChild(birPizza.generateItemDOM());

    const drownTacos = new FavoritesItem(dTac, 'Tacos Ahogados', '$11.99', 'Chicken or Beef tacos drowned in salsa verde', 'TACOS');
    favoritesContent.appendChild(drownTacos.generateItemDOM());
    
    content.appendChild(favoritesContent);
}

function contactTab() {
    resetContent();
    const topText = document.createElement('div')
    topText.textContent = ` Contact Us!`;
    topText.classList.add('pageTitle');
    content.appendChild(topText);

    const form = document.createElement('form');

    const nameInput = document.createElement('input');
    nameInput.setAttribute('id','messageFrom');
    nameInput.setAttribute('name','messageFrom');
    const nameLabel = document.createElement('label')
    nameLabel.setAttribute('for', 'messageFrom');
    nameLabel.textContent = 'Your name:';
    form.append(nameLabel, nameInput);

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type','email');
    emailInput.setAttribute('id','emailFrom');
    emailInput.setAttribute('name','emailFrom');
    const emailLabel = document.createElement('label')
    emailLabel.setAttribute('for', 'emailFrom');
    emailLabel.textContent = 'Your email:';
    form.append(emailLabel, emailInput);

    const messageInput = document.createElement('textarea');
    messageInput.setAttribute('id','message');
    messageInput.setAttribute('name','message');
    messageInput.setAttribute('rows','20');
    messageInput.setAttribute('cols','40');
    const messageLabel = document.createElement('label')
    messageLabel.setAttribute('for', 'message');
    messageLabel.textContent = 'Your message:';
    form.append(messageLabel, messageInput);

    const submtBtn = document.createElement('button');
    submtBtn.setAttribute('type', 'submit');
    submtBtn.textContent = 'submit';
    form.append(submtBtn);

    content.appendChild(form)
}

document.body.appendChild(head());
document.body.appendChild(content);
homeTab();
