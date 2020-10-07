//Slider
const sliderImages = document.querySelectorAll(".slide");
const arrowLeft = document.querySelector(".fa-chevron-left");
const arrowRight = document.querySelector(".fa-chevron-right");
let counter = 0;

//Clear images
function reset() {
  sliderImages.forEach((slide) => {
    slide.style.display = "none";
  });
}

//Starting image
function startSlide() {
  reset();
  sliderImages[0].style.display = "flex";
}

//Swiping to left
arrowLeft.addEventListener("click", () => {
  if (counter === 0) {
    counter = sliderImages.length;
  }
  reset();
  sliderImages[counter - 1].style.display = "flex";
  counter--;
});

//Swiping to Right
arrowRight.addEventListener("click", () => {
  if (counter === sliderImages.length - 1) {
    counter = -1;
  }
  reset();
  sliderImages[counter + 1].style.display = "flex";
  counter++;
});

startSlide();

//Navbar animations
const burger = document.querySelector(".burger");
const burgerLines = document.querySelectorAll(".burger-line");
const navList = document.querySelector(".nav-list");
const navItems = document.querySelectorAll(".nav-item");

burger.addEventListener("click", () => {
  //Burger animations
  burgerLines[0].classList.toggle("line1-animation");
  burgerLines[1].classList.toggle("line2-animation");
  burgerLines[2].classList.toggle("line3-animation");

  //Navbar animation
  navList.classList.toggle("nav-animation");

  //Nav items animtaions
  navItems.forEach((item, index) => {
    item.classList.toggle("nav-item-animation");
    item.style.transitionDuration = `${0.3 * (index + 1)}s`;
  });
});

//Close navbar when item clicked
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    //Burger animations
    burgerLines[0].classList.remove("line1-animation");
    burgerLines[1].classList.remove("line2-animation");
    burgerLines[2].classList.remove("line3-animation");

    //Hide navbar
    navList.classList.remove("nav-animation");

    //Nav items animations
    navItems.forEach((item) => {
      item.classList.remove("nav-item-animation");
    });
  });
});

//GSAP Animations
//Loader animations
const tl1 = gsap.timeline({
  delay: 2.5,
});

const loaderLines = document.querySelectorAll(".loader-line");

loaderLines.forEach((line) => {
  tl1.to(
    line,
    {
      duration: 2,
      x: "-100%",
      display: "none",
    },
    "-0.4"
  );
});

tl1.to(".loader", {
  display: "none",
});

//Main screen animations
tl1.from(
  ".navbar",
  {
    opacity: 0,
    duration: 1,
    y: -100,
  },
  "-=0.8"
);

const mainContainer = document.querySelector(".main-container");
tl1.from(mainContainer.children, {
  opacity: 0,
  duration: 1,
  y: 30,
  stagger: 0.2,
});

tl1.from("body", {
  overflowY: "hidden",
});

//Wellcome section animations
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".wellcome-section",
    start: "top 60%",
  },
});

tl2.from(".wellcome-section p", {
  duration: 1,
  opacity: 0,
  y: 50,
  stagger: 0.3,
});

tl2.from(
  ".wellcome-section h1",
  {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.3,
  },
  "-0.2"
);

tl2.from(".wellcome-section .btn", {
  duration: 0.5,
  width: 0,
});

tl2.from(".wellcome-section .btn span", {
  duration: 0.8,
  opacity: 0,
  x: -50,
});

//Cooking section animations
const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".cooking-section",
    start: "top 60%",
  },
});

//Cooking image animations
tl3.fromTo(
  ".cooking-animation",
  {
    x: "-100%",
    duration: 1,
  },
  {
    x: "100%",
    duration: 1,
  }
);

tl3.from(
  ".cooking-image",
  {
    duration: 2,
    x: "-100%",
    ease: "power4.inOut",
  },
  "-=0.9"
);

//Cooking content animations
const cookingContent = document.querySelector(".cooking-content");
tl3.from(
  cookingContent.children,
  {
    opacity: 0,
    y: 20,
    x: 20,
    duration: 1,
    stagger: 0.2,
  },
  "-=2"
);

//Baking section animations
const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".baking-section",
    start: "top 50%",
  },
});

tl4.from(".baking-section p", {
  duration: 1,
  opacity: 0,
  y: 50,
  stagger: 0.3,
});

tl4.from(
  ".baking-section h1",
  {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.3,
  },
  "-0.2"
);

tl4.from(".baking-section .btn", {
  duration: 0.5,
  width: 0,
});

tl4.from(".baking-section .btn span", {
  duration: 0.8,
  opacity: 0,
  x: -50,
});

//Shopping section animations
const shoppingContent = document.querySelectorAll(".shopping-content");

shoppingContent.forEach((item) => {
  gsap.from(item, {
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".shopping-section",
      start: "top 50%",
    },
  });
});

//Gallery section animations
const tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".gallery-section",
    start: "top 70%",
  },
});

tl5.from(".gallery-box-1-1", {
  y: 30,
  x: 30,
  duration: 0.5,
  opacity: 0,
});

tl5.from(
  ".gallery-box-1-2",
  {
    y: 30,
    x: 30,
    duration: 0.5,
    opacity: 0,
  },
  "-=0.2"
);

tl5.from(
  ".gallery-box-2",
  {
    y: 30,
    x: 30,
    duration: 0.5,
    opacity: 0,
  },
  "-=0.2"
);

tl5.from(
  ".gallery-box-3",
  {
    y: 30,
    x: 30,
    duration: 0.5,
    opacity: 0,
  },
  "-=0.2"
);

tl5.from(
  ".gallery-box-4-1",
  {
    y: 30,
    x: 30,
    duration: 0.5,
    opacity: 0,
  },
  "-=0.2"
);

tl5.from(
  ".gallery-box-4-2",
  {
    y: 30,
    x: 30,
    duration: 0.5,
    opacity: 0,
  },
  "-=0.2"
);

//Blog section animations
const tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".blog-section",
    start: "top 60%",
  },
});

tl6.from(".blog-title", {
  duration: 1,
  opacity: 0,
  y: 50,
  stagger: 0.3,
});

tl6.from(
  ".blog-paragraph",
  {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.3,
  },
  "-0.2"
);

//Contact bottom section animations
const contactContent = document.querySelectorAll(".contact-content-text");

contactContent.forEach((item) => {
  gsap.from(item.children, {
    y: 40,
    duration: 1,
    opacity: 0,
    stagger: 0.4,
    scrollTrigger: {
      trigger: ".contact-bottom-section",
      start: "top 60%",
    },
  });
});
