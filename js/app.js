/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const fragment = document.createDocumentFragment();
const icon = document.querySelector("i")
const ul = document.getElementById("navbar__list")
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// Adding any section you want

function addSection(...sectionNums) {
  for (let sectionNum of sectionNums) {
    const element = document.createElement("section");
    element.setAttribute("id", `section${sectionNum}`);
    element.setAttribute("data-nav", `Section ${sectionNum}`);
    element.innerHTML = `<div class='landing__container'>
            <h2>Section ${sectionNum}</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.
            </p>
            <p>
            Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.
            </p>
        </div>`;
    document.querySelector("main").appendChild(element);
  }
}
addSection(4, 5 );

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
let sectionsNodeList = document.querySelectorAll("section");
function buildNav() {
  for (let i = 1; i <= sectionsNodeList.length; i++) {
    const listItem = document.createElement("li");
    listItem.classList.add(`section${i}`)
    listItem.innerHTML = `<a href=#section${i}>Section ${i}</a>`;
    fragment.appendChild(listItem);
  }
  ul.appendChild(fragment);
}
buildNav();

// Add class 'active' to section when near top of viewport
const listItems = document.querySelectorAll("li")
const anchorLinks = document.querySelectorAll("a");
window.addEventListener("scroll" , function(){
  sectionsNodeList.forEach(function(section){
    const sectionId = section.getAttribute("id")
    let top = section.getBoundingClientRect().top
    // let bottom = section.getBoundingClientRect().bottom
    // let getBound = section.getBoundingClientRect()
    // console.log(getBound)
    // let scrollY = window.pageYOffset;
    // const sectionHeight = section.offsetHeight;
    // const sectionTop = section.offsetTop - 50;
    // if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
    if(top > 0 && top < 400){

      section.classList.add("active")
      document.querySelector(`a[href*=${sectionId}]`).classList.add("highlight")
    }else{
      section.classList.remove("active")
      document.querySelector(`a[href*=${sectionId}]`).classList.remove("highlight")
    }
   
  })
  
})



// console.log(sectionsNodeList[0].getBoundingClientRect())
// console.log(sectionsNodeList[1].getBoundingClientRect())
// console.log(sectionsNodeList[2].getBoundingClientRect())



// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click
anchorLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    // console.log("The link is",link)
    event.preventDefault();
    let linkHref = link.getAttribute("href");
    // console.log(linkHref)
    document.querySelector(linkHref).scrollIntoView({ behavior: "smooth" });
  });
});

// Menu icon click on mobile screens

icon.addEventListener("click" , function(){
  listItems.forEach(function(listItem){
    listItem.classList.add("menu__link")
  })
  if (ul.style.display == "none"){
    ul.style.display = "block"
  }else{
    ul.style.display = "none"
  }
})


// var isScrolling;

// Listen for scroll events
// window.addEventListener('scroll', function () {

// 	// Clear our timeout throughout the scroll
  
//   window.clearTimeout( isScrolling );
// 	// Set a timeout to run after scrolling ends
// 	isScrolling = setTimeout(function() {
    
//     // Run the callback
// 		console.log( 'Scrolling has stopped.' );
//     document.getElementById("navbar__list").style.display = "none"
    
// 	}, 66);

// });


// const onScrollStop = callback => {
//   let isScrolling;
//   window.addEventListener(
//     'scroll',
//     e => {
//       clearTimeout(isScrolling);
//       isScrolling = setTimeout(() => {
//         callback();
//       }, 150);
//     },
//     false
//   );
// };

// onScrollStop(() => {
//   console.log('The user has stopped scrolling');
// });


// (function() {        
//   var timer;
//   window.addEventListener('scroll',function () {
//       clearTimeout(timer);
//       timer = setTimeout(  function () { 
//         // do stuff
//         console.log('Stopped Scrolling'); 
//         // document.getElementById("navbar__list").style.display = "none";

//     } , 150 );
//   });
  
// })();