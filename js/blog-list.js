const url = "https://lisagrant-943890.ingress-baronn.easywp.com/wp-json/wp/v2/posts?_embed=true&per_page=10";
const blogContainer = document.querySelector(".all-blog-posts");

const getAllBlogs = async () => {
    try{
        const response = await fetch(url);
        const blogPosts = await response.json();
        console.log(blogPosts)
            for (blog of blogPosts) {
            let data = blog._embedded["wp:featuredmedia"]
                 for (img of data){
                    let post = `
                    <div class="blog-post-box">
                            <img src="${img.source_url}" alt="${img.alt_tex}">
                        <div class="blog-post-text-box">
                        <div class="blog-post-title">
                            <h2>${blog.title.rendered}</h2>
                        </div>
                        <div class="date-post">
                            <p>${blog.date}</p>
                        </div>
                        <div class="short-description">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia nisi delectus perferendis repellat beatae. Tempore, impedit aliquam harum perferendis excepturi non labore. Error, mollitia placeat eligendi suscipit nisi ducimus asperiores.</p>
                        </div>
                        <div class="author">
                            <p></p>
                        </div>
                        <div class="read-more-link">
                            <a href="the-post.html?id=${blog.id}>Read more</a>
                        </div>
                    </div>
                `;
                blogContainer.innerHTML += post;
            }}
    }catch{
        console.log("error")
    }finally{

    }
}

getAllBlogs();
