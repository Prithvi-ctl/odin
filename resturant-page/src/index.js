import "./styles.css";
import logo from "../assets/resturantlogo.png";

const context = document.querySelector("#content");

const title = document.createElement("div");
title.classList.add("title");

const img = document.createElement("img");
img.classList.add("logo");
img.src = logo;
img.alt = "Resturant Logo";

title.appendChild(img);

context.appendChild(title);

const container = document.createElement("div");
container.classList.add("container");

//navs
const nav = document.createElement("nav");
nav.classList.add("nav");

const list = document.createElement("ul");
const home = document.createElement("a");
home.textContent = "Home";
home.href = "#";

const menu = document.createElement("a");
menu.textContent = "Menu";
menu.href = "#";

const contact = document.createElement("a");
contact.textContent = "Contact";
contact.href = "#";

list.appendChild(home);
list.appendChild(menu);
list.appendChild(contact);
nav.appendChild(list);
context.appendChild(nav);
context.appendChild(container);
//home
home.addEventListener("click",()=>{

    loadHome();
})

menu.addEventListener("click",()=>{

    loadMenu();
})

contact.addEventListener("click",()=>{

    loadContact();
})
function loadHome(){
    container.replaceChildren();
    const homeContent = document.createElement("div");
    homeContent.classList.add("home-content");

    //
    const div1 = document.createElement("div");
    div1.textContent = "Welcome to our restaurant! We offer a wide variety of delicious dishes made with fresh ingredients. Our menu features both classic and innovative options to satisfy every palate. Whether you're in the mood for a hearty meal or a light snack, we have something for everyone. Come dine with us and experience exceptional service in a cozy atmosphere. We look forward to serving you!";

    div1.classList.add("div1-home");
    homeContent.appendChild(div1);
    const div2 = document.createElement("div");
    div2.classList.add("div2-home");
    div2.textContent = "Hami 3 Bhai resturant has the best food in town. We have been serving our customers for over 10 years and we pride ourselves on our delicious dishes and excellent service. Our menu features a wide variety of options, including vegetarian and gluten-free choices. Whether you're in the mood for a hearty meal or a light snack, we have something for everyone. Come dine with us and experience the best food in town!";
    homeContent.appendChild(div2);

    const div3 = document.createElement("div");
    div3.classList.add("div3-home");
     const h3h = document.createElement("h1");
        h3h.textContent = "Hours";
     const list = document.createElement("ul");
     const li1 = document.createElement("li");
     li1.textContent = "Monday: 9am - 9pm";
     const li2 = document.createElement("li");
     li2.textContent = "Tuesday: 9am - 9pm";
     const li3 = document.createElement("li");
     li3.textContent = "Wednesday: 9am - 9pm";
     const li4 = document.createElement("li");
     li4.textContent = "Thursday: 9am - 9pm";
     const li5 = document.createElement("li");
     li5.textContent = "Friday: 9am - 11pm";
     const li6 = document.createElement("li");
     li6.textContent = "Saturday: 10am - 11pm";
     const li7 = document.createElement("li");
     li7.textContent = "Sunday: 10am - 9pm";

     list.append(li1,li2,li3,li4,li5,li6,li7);
     div3.appendChild(h3h);
     div3.appendChild(list);
     homeContent.appendChild(div3);
     container.appendChild(homeContent);
}


function loadMenu(){
    container.replaceChildren();
    const menuContent = document.createElement("div");
    menuContent.classList.add("menu-content");

    const h1 = document.createElement("h1");
    h1.textContent = "Our Menu";
    menuContent.appendChild(h1);

    const list = document.createElement("ul");
    const li1 = document.createElement("li");
    li1.textContent = "Pizza - $10";
    const li2 = document.createElement("li");
    li2.textContent = "Burger - $8";
    const li3 = document.createElement("li");
    li3.textContent = "Pasta - $12";
    const li4 = document.createElement("li");
    li4.textContent = "Salad - $7";

    list.append(li1,li2,li3,li4);
    menuContent.appendChild(list);
    container.appendChild(menuContent);
    return menuContent;
}       

function loadContact(){
    container.replaceChildren();
    const contactContent = document.createElement("div");
    contactContent.classList.add("contact-content");

    const h1 = document.createElement("h1");
    h1.textContent = "Contact Us";
    contactContent.appendChild(h1); 

    const p = document.createElement("p");
    p.textContent = "Phone: 123-456-7890";
    contactContent.appendChild(p);

    const p2 = document.createElement("p");
    p2.textContent = "Email: info@hami3bhai.com";
    contactContent.appendChild(p2);

    const message = document.createElement("h1");
    message.textContent = "Fuck You man i hate you";
    contactContent.appendChild(message);
    container.appendChild(contactContent);

    
}
console.log("Hello, there bitches!!!");