const query = document.location.search;
const param = new URLSearchParams(query);
const id = param.get("id");

const apiUrl = `https://lisagrant-943890.ingress-baronn.easywp.com/wp-json/wp/v2/posts/${id}?_embed=true`;
const postBox = document.querySelector(".the-post-box");
const postImgBox = document.querySelector(".the-post-box-image");
const bredcrumbsTitle = document.querySelector(".breadcrumbs-title");

const getPost = async () => {
  try {
    const response = await fetch(apiUrl);
    const post = await response.json();
    let data = post._embedded["wp:featuredmedia"];
    for (img of data) {
      bredcrumbsTitle.innerHTML += `
                    <a href="#">${post.title.rendered}</a>
      `;
      postImgBox.innerHTML += `
                    <img 
                    class= "img"
                    onClick ="getModal()"
                    src="${img.source_url}"
                    alt="${img.alt_text}"
                    />
      `;

      postBox.innerHTML += `
                <div class="page-title">
                    <h1>${post.title.rendered}</h1>
                </div>
                <article>
                            <p>${post.content.rendered}</p>
                </article>
            </div> 
            `;
      document.title = `${post.title.rendered} ||  Mia and Bobs Travel Blog`;

      modal.innerHTML += `
        <img
          src="${img.source_url}"
          alt="${img.alt_text}"
          class="full-img"
        />
        <p class="caption">${img.slug}</p>
      `;
    }
  } catch {
    postBox.innerHTML = `Sorry, we have a problem!`;
  }
};

getPost();

const modal = document.querySelector(".modal");

const getModal = () => {
  modal.style.display = "flex";
};

modal.addEventListener("click", () => {
  modal.style.display = "none";
});
