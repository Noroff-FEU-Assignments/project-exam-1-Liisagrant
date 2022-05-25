const url =
  "https://lisagrant-943890.ingress-baronn.easywp.com/wp-json/wp/v2/posts?_embed=true&per_page=12";
const blogPostSlide = document.querySelector(".carousel-slide");
const carouselContainer = document.querySelector(".carousel-container");
const nextBtn = document.querySelector("#btn-next");
const backBtn = document.querySelector("#btn-back");
const loader = document.querySelector(".loader");
const subscribeBox = document.querySelector(".subscribe-newsletter-homepage");

const getBlogPost = async () => {
  try {
    const response = await fetch(url);
    const blogPosts = await response.json();
    for (blog of blogPosts) {
      let data = blog._embedded["wp:featuredmedia"];
      for (img of data) {
        let newPost = `
            <a href="the-post.html?id=${blog.id}">
                         <img class= "img-carousel" src="${img.media_details.sizes.medium_large.source_url}" alt="${img.alt_text}"/>
                        <div class="text-slide-carousel">
                            <h3>${img.title.rendered}</h3>
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
    loader.style.display = "none";
  }
};

getBlogPost();

//hero-banner slider
const slideImages = document.querySelectorAll(".slideshow");
const nextImageDelay = 4000;
let currentImgCounter = 0;

const nextImage = () => {
  slideImages[currentImgCounter].style.opacity = 0;
  currentImgCounter = (currentImgCounter + 1) % slideImages.length;
  slideImages[currentImgCounter].style.opacity = 1;
};

slideImages[currentImgCounter].style.opacity = 1;
setInterval(nextImage, nextImageDelay);

//Carousel
let counter = 0;
const size = carouselContainer.clientWidth;

blogPostSlide.style.tranform = "translateX(" + -size * counter + "px)";

// const reLoadePage = () => {
//   var width = window.size;
//   var screen = "";
//   if (width < 650) {
//     screen = "small";
//   } else if (width < 987) {
//     screen = "medium";
//   } else if (width > 987) {
//     screen = "large";
//   }
//   // window.resize(function doit() {
//   //   var curWidth = window.width();
//   //   if (curWidth < 650 == "small") {
//   //     window.location.reload();
//   //   } else if (curWidth < 987 == "medium") {
//   //     window.location.reload();
//   //   } else if (curWidth > 987 == "large") {
//   //     window.location.reload();
//   //   }
//   // });
// };
// reLoadePage();

const getCarouselNext = () => {
  if (size === 320 && counter >= 11) {
    counter = -1;
    blogPostSlide.style.transform = "translateX(0px)";
  } else if (size === 650 && counter >= 5) {
    counter = -1;
    blogPostSlide.style.transform = "translateX(0px)";
  } else if (size === 987 && counter >= 3) {
    counter = -1;
    blogPostSlide.style.transform = "translateX(0px)";
  }
  blogPostSlide.style.transform = "transform 0.4 ease-in-out";
  counter++;
  blogPostSlide.style.transform = "translateX(" + -size * counter + "px";
};

nextBtn.addEventListener("click", () => {
  getCarouselNext();
});

const getCarouselBack = () => {
  if (size === 320 && counter <= 0) {
    counter = 10;
    blogPostSlide.style.transform = "translateX(0px)";
  } else if (size === 650 && counter <= 0) {
    counter = 4;
    blogPostSlide.style.transform = "translateX(0px)";
  } else if (size === 987 && counter <= 0) {
    counter = 2;
    blogPostSlide.style.transform = "translateX(0px)";
  }
  blogPostSlide.style.transform = "transform 0.4 ease-in-out";
  counter--;
  blogPostSlide.style.transform = "translateX(" + -size * counter + "px";
};

backBtn.addEventListener("click", () => {
  getCarouselBack();
});

//Modal subscribe
const modal = document.getElementById("modalSubscribe");
const nameError = document.querySelector(".error-input-name p");
const emailError = document.querySelector(".error-input-email p");
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
  subscribeBox.style.display = "none";
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
