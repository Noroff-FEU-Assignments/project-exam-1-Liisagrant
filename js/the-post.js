const query = document.location.search;
const param = new URLSearchParams(query);
const id = param.get("id");

const modal = document.querySelector(".modal");
const image = document.querySelectorAll(".the-post-box-images-grid img");
const orgianl = document.querySelector(".full-img");
const imageText = document.querySelector("caption");

const apiUrl = `https://lisagrant-943890.ingress-baronn.easywp.com/wp-json/wp/v2/posts/${id}?_embed=true`;
const postBox = document.querySelector(".the-post-box");
const postImgBox = document.querySelector(".the-post-box-images-grid");

const getPost = async () => {
  try {
    const response = await fetch(apiUrl);
    const post = await response.json();
    console.log(post);
    let data = post._embedded["wp:featuredmedia"];
    for (img of data) {
      postImgBox.innerHTML += `
                    <img 

                    class="image-grid-col-two image-grid-row-two" 
                    src="${img.source_url}"
                    alt=""
                    data-orginal = "${img.source_url}"
                    />
      `;

      postBox.innerHTML += `
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
            `;
      document.title = `${post.title.rendered} ||  Mia and Bobs Travel Blog`;
    }
  } catch {
    console.log("error");
  }
};

getPost();

image.forEach((image) => {
  image.addEventListener("click", () => {
    modal.classList.add("open");
    orgianl.classList.add("open");

    const orginalSrc = image.getAttribute("data-orginal");
    orgianl.src = `${orginalSrc}`;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    orgianl.classList.remove("open");
  }
});
