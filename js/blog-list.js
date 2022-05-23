const url =
  "https://lisagrant-943890.ingress-baronn.easywp.com/wp-json/wp/v2/posts?_embed=true&per_page=10";
const urlLoadMore =
  "https://lisagrant-943890.ingress-baronn.easywp.com/wp-json/wp/v2/posts?_embed=true&per_page=10&offset=10";
const blogPostsContainer = document.querySelector(".all-blog-posts");
const loadMore = document.querySelector("#blog-btn");
const loader = document.querySelector(".loader");

const getAllBlogs = async () => {
  try {
    const response = await fetch(url);
    const blogPosts = await response.json();
    for (blog of blogPosts) {
      let data = blog._embedded["wp:featuredmedia"];
      for (img of data) {
        let post = `
                    <div class="blog-post-box">
                            <img src="${img.source_url}" alt="${img.alt_tex}">
                        <div class="blog-post-text-box">
                        <div class="blog-post-title">
                            <h2>${blog.title.rendered}</h2>
                        </div>
                        <div class="short-description">
                            <p>${img.caption.rendered}</p>
                        </div>
                        <div class="blog-date">
                          <p>${blog.acf.date}<p>
                        <div>
                        <div class="blog-author">
                          <p>Author: ${blog.acf.author}<p>
                        </div>
                        <div class="read-more-link">
                            <a href="the-post.html?id=${blog.id}""><p>Click here to read more</p></a>
                        </div>
                    </div>
                `;
        blogPostsContainer.innerHTML += post;
      }
    }
  } catch {
    blogPostsContainer.innerHTML = `Sorry, we have an error`;
  } finally {
    loader.style.display = "none";
  }
};

getAllBlogs();

const getMorePost = async () => {
  try {
    const response = await fetch(urlLoadMore);
    const blogPosts = await response.json();
    for (blog of blogPosts) {
      let data = blog._embedded["wp:featuredmedia"];
      for (img of data) {
        let post = `
                    <div class="blog-post-box">
                            <img src="${img.source_url}" alt="${img.alt_tex}">
                        <div class="blog-post-text-box">
                        <div class="blog-post-title">
                            <h2>${blog.title.rendered}</h2>
                        </div>
                        <div class="short-description">
                            <p>${img.caption.rendered}</p>
                        </div>
                        <div class="blog-date">
                          <p>${blog.acf.date}<p>
                        <div>
                        <div class="blog-author">
                          <p>Author: ${blog.acf.author}<p>
                        </div>
                        <div class="read-more-link">
                            <a href="the-post.html?id=${blog.id}""><p>Click here to read more</p></a>
                        </div>
                    </div>
                `;
        blogPostsContainer.innerHTML += post;
      }
    }
  } catch {
    blogPostsContainer.innerHTML = `Sorry, we have an error`;
  } finally {
  }
};

loadMore.addEventListener("click", () => {
  getMorePost();
  loadMore.style.display = "none";
});
