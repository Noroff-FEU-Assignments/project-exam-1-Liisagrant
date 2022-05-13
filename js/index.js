const url = "https://lisagrant-943890.ingress-baronn.easywp.com/wp-json/wp/v2/posts?_embed=true";
const blogPostContainer = document.querySelector(".blog-post-card");
const backBtn = document.querySelector("#btn-back");
const nextBtn = document.querySelector("#btn-back");



const getBlogPost = async () => {
    try{
        const response = await fetch(url);
        const blogPosts = await response.json();
        console.log(blogPosts);
        for (blog of blogPosts){
            let data = blog._embedded["wp:featuredmedia"]
            for (img of data){
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
        }
    catch(error){
        blogPostContainer.innerHTML = `Sorry we have an error`
    }  
} 

getBlogPost();



