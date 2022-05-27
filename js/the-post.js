const query = document.location.search;
const param = new URLSearchParams(query);
const id = param.get("id");

const apiUrl = `https://lisagrant-943890.ingress-baronn.ewp.live//wp-json/wp/v2/posts/${id}?_embed=true`;
const postBox = document.querySelector(".the-post-box");
const postImgBox = document.querySelector(".the-post-box-image");
const bredcrumbsTitle = document.querySelector(".breadcrumbs-title");
const loader = document.querySelector(".loader");

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
        <p class="caption">${img.title.rendered}</p>
      `;
    }
  } catch {
    postBox.innerHTML = `<div class="error-text"><p>Sorry, we have an error</p></div>`;
  } finally {
    loader.style.display = "none";
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
