const url =
  "https://lisagrant-943890.ingress-baronn.easywp.com/wp-json/wp/v2/posts?_embed=true";
const blogPostContainer = document.querySelector(".blog-post-card");
const backBtn = document.querySelector("#btn-back");
const nextBtn = document.querySelector("#btn-back");

const getBlogPost = async () => {
  try {
    const response = await fetch(url);
    const blogPosts = await response.json();
    console.log(blogPosts);
    for (blog of blogPosts) {
      let data = blog._embedded["wp:featuredmedia"];
      for (img of data) {
        let newPost = `
            <a href="the-post.html?id=${blog.id}">
                <div class="blog-post-image-box">
                         <img src="${img.source_url}" alt=""/>
                        <div class="text-box-carousel">
                            <h3>${blog.title.rendered}</h3>
                            <p>${blog.excerpt.rendered}</p>
                        </div>
                </div>
            </a>
            `;
        blogPostContainer.innerHTML = newPost;
      }
    }
  } catch (error) {
    blogPostContainer.innerHTML = `Sorry we have an error`;
  }
};

getBlogPost();

const modal = document.getElementById("modalSubscribe");
const nameError = document.querySelector(".error-input-name");
const emailError = document.querySelector(".error-input-email");
const email = document.getElementById("e-mail");
const nameInput = document.getElementById("name");
const modalBtn = document.getElementById("modalBTN");

modalBtn.onclick = (event) => {
  event.preventDefault();
  if (ValidEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(nameInput.value, 2) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (
    checkLength(nameInput.value, 2) === true &&
    (ValidEmail(email.value) === true) === true
  ) {
    modal.style.display = "block";
  }
};

modal.onclick = () => {
  modal.style.display = "none";
};

const checkLength = (value, len) => {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
};

const ValidEmail = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toUpperCase());
};
