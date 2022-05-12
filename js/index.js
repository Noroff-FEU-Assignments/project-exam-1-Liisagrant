const url = "https://lisagrant-943890.ingress-baronn.easywp.com/wp-json/wp/v2/posts?_embed=true";
const blogPostContainer = document.querySelector(".blog-post-card");


const getBlogPost = async () => {
    try{
        const response = await fetch(url);
        const blogPosts = await response.json();
        console.log(blogPosts);
        for (blog of blogPosts) {
            let images = blog._embedded["wp:featuredmedia"]
            for (img of images){
                console.log(img)
                blogPostContainer.innerHTML += `
                    <div class="blog-post-image-box">
                        <a href="the-post.html?id=${blog.id}">
                             <img src="${img.source_url}" alt=""/>
                             <div class="text-box-carousel">
                                <h3>${blog.title.rendered}</h3>
                                <p>${blog.excerpt.rendered}</p>
                            </div>
                     </div>
                `
            }
        }
    }
    catch(error){
        blogPostContainer.innerHTML = `Sorry we have an error`
    }
}   

getBlogPost()
