const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const dishes =[
    {
        id:1,
        title: "Samosa",
        price: 8,
        img: "./images/samosa.jpeg"
    },
    {
        id:2,
        title: "Garlic Naan",
        price: 6,
        desc: "Roasted Bread with Garlic",
        img: "./images/naan.png"
    },
    {
        id:3,
        title: "Lamb Rice",
        price: 20,
        desc: "Mildly spiced chicken.",
        img: "./images/Biryani.png"
    },
    {
        id:4,
        title: "Paneer Masala",
        price: 15.25,
        desc: "Cottage Cheese in a tomato garlic sauce.",
        img: "./images/Paneer.png"
    },
    {
        id:5,
        title: "Chickpea Curry",
        price: 22,
        desc: "Chickpeas in a spiced creamy tomato sauce.",
        img: "./images/Curry.jpeg"
    },
    {
        id:6,
        title: "Tiramisu",
        price: 5.65,
        desc: "Coffee Cake",
        img: "./images/tiramisu.png"
    },
    {
        id:7,
        title: "Mango Lassi",
        price: 7.99,
        desc: "Mango yogurt frappe.",
        img: "./images/Lassi.jpeg"
    },
]

let choosendish = dishes[0]

const currentdishImg = document.querySelector(".dishImg");
const currentdishTitle = document.querySelector(".dishTitle");
const currentdishPrice = document.querySelector(".dishPrice");
const currentdishDesc = document.querySelector(".dishDesc");
const currentdishSizes = document.querySelectorAll(".spice");

menuItems.forEach((item, index)=> {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosendish = dishes[index]

        //change texts of currentdish
        currentdishTitle.textContent = choosendish.title;
        currentdishPrice.textContent = "$" + choosendish.price;
        currentdishImg.src = choosendish.img;
        currentdishDesc.textContent = choosendish.desc;
    });
});

currentdishSizes.forEach((size,index) =>{
    size.addEventListener("click",()=>{
        currentdishSizes.forEach((size) =>{
            size.style.backgroundColor = "white";
            size.style.color="black";
        })
        size.style.backgroundColor = "black";
        size.style.color="white";
    });
});

const dishButton = document.querySelector(".dishButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

dishButton.addEventListener("click",() =>{
    payment.style.display="flex"
})

close.addEventListener("click",() =>{
    payment.style.display="none"
})