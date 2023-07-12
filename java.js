const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",this.window > this.scrollY > 0);
})
Add functionality here, such as handling the "Add to Cart" button clicks, managing the cart, etc.
