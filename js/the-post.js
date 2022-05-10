const modal = document.querySelector(".modal");
const image = document.querySelectorAll(".the-post-box-images-grid img");
const orgianl  = document.querySelector(".full-img");
const imageText = document.querySelector("caption");


image.forEach(image => {
    image.addEventListener("click", () => {
        modal.classList.add("open");
        orgianl.classList.add("open");

        const orginalSrc = image.getAttribute("data-orginal");
        orgianl.src= 
        `./image/${orginalSrc}`
    })
})


modal.addEventListener("click", (e) => {
    if(e.target.classList.contains("modal")) {
        modal.classList.remove("open");
        orgianl.classList.remove("open");
    }
})