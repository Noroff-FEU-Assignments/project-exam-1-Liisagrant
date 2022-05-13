const query = document.location.search;
const param = new URLSearchParams(query);
const id = param.get("id");

const modal = document.querySelector(".modal");
const image = document.querySelectorAll(".the-post-box-images-grid img");
const orgianl  = document.querySelector(".full-img");
const imageText = document.querySelector("caption");

const apiUrl = `https://lisagrant-943890.ingress-baronn.easywp.com/wp-json/wp/v2/posts/${id}?_embed=true`
const postBox = document.querySelector(".the-post-box");

const getPost = async () => {
    try{
        const response = await fetch(apiUrl);
        const post = await response.json();
        console.log(post)
            postBox.innerHTML += `
            <div class="the-post-box-images-grid">
                    <img 
                    class="image-grid-col-two image-grid-row-two" src="/image/bali.jpg"
                    alt="Image of a cabin on a island in bali. By the sea"
                    data-orginal = "bali.jpg"
                    />

                    <img src="/image/diving.jpg"
                    alt="turtle svimming in the ocean"
                    data-orginal = "diving.jpg"

                    />

                    <img src="/image/food-market.jpg"
                    alt="Foodmarket in Bali"
                    data-orginal = "food-market.jpg"
                    />

                    <img class=" image-grid-col-two" src="/image/savanna.jpg"
                    alt="The savanna"
                    data-orginal = "savanna.jpg"
                    />
            </div>
                <div class="page-title">
                    <h1>${post.title.rendered}</h1>
                </div>
                <article>
                            <p>${post.content.rendered}</p>
                </article>
                <div class="author-name">
                    <p>x Bob</p>
                </div>
            </div> 
            `
        }
    
     catch{
        console.log("error")
     }
    }

getPost();

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