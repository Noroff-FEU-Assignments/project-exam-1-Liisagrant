const url =
  "https://lisagrant-943890.ingress-baronn.easywp.com/wp-json/wp/v2/posts?_embed=true";
const blogPostSlide = document.querySelector(".carousel-slide");
const carouselContainer = document.querySelector(".carousel-container");
const nextBtn = document.querySelector("#btn-next");
const backBtn = document.querySelector("#btn-back");

const getBlogPost = async () => {
  try {
    const response = await fetch(url);
    const blogPosts = await response.json();
    for (blog of blogPosts) {
      let data = blog._embedded["wp:featuredmedia"];
      for (img of data) {
        let newPost = `
            <a href="the-post.html?id=${blog.id}">
                         <img class= "img-carousel" src="${img.source_url}" alt="${img.alt_text}"/>
                        <div class="text-slide-carousel">
                            <h3>${blog.title.rendered}</h3>
                        </div>
                </div>
            </a>
            `;
        blogPostSlide.innerHTML += newPost;
      }
    }
  } catch (error) {
    blogPostSlide.innerHTML = `Sorry we have an error`;
  } finally {
    // loader.style.display = "none";
  }
};

getBlogPost();

//Carousel
let counter = 0;
const size = carouselContainer.clientWidth;

blogPostSlide.style.tranform = "translateX(" + -size * counter + "px)";

//Modal subscribe
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
    ValidEmail(email.value) === true
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
