const url = "https://lisagrant-943890.ingress-baronn.easywp.com/wp-json/wp/v2/posts?_embed=true";
const BlogPostContainer = document.querySelector(".blog-post-card");


const getBlogPost = async () => {
    try{
        const response = await fetch(url);
        const blogPostInfo = await response.json();
        console.log(blogPostInfo);

        
    }
    catch(error){
        

    }

}   

getBlogPost()