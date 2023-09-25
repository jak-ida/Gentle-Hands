//let blogId = location.pathname.split("/").pop();
// Make a fetch request to the PHP script


    const banner = document.querySelector('.banner');
    const blogTitle = document.querySelector('.title');
    const titleTag = document.querySelector('title');
    const publish = document.querySelector('.published');
    const category = document.querySelector('.category');
    const article = document.querySelector('.article');
    const ID = document.querySelector('.Current-Blog');
    const Likebtn = document.querySelector('.like-btn');
    const Likeamount = document.querySelector('.Likes-amount');
    var BlogGuid ="";
    //banner.style.backgroundImage = `url(${data.bannerImage})`;



const blogSection = document.querySelector('.blogs-section');

if((window.location.href).includes("?")){
    BlogGuid =(window.location.href.split("?")[1]).split("#")[0];

    // Assuming you have a URL to the PHP script
    const url = 'https://node.kalafhi.co.bw?ID='+ BlogGuid;
    const requestHeaders = new Headers();
            requestHeaders.append('Content-Type', 'application/x-www-form-urlencoded'); // Adjust content type if needed
    fetch(url,{
        method: 'GET',
        headers: requestHeaders
        })
        .then(response => response.json())
        .then(responseData => {
            if (responseData.status === 'success') {
            const data = responseData.data;
            
            //loop through all the blog posts so they can be added 1 by 1
            data.forEach(blog => {
                if(blog.ID == BlogGuid){
                    viewingblog(blog);
                }
                ReadMore(blog.Catagory);
            })
        
            if(banner.innerHTML == "" && publish.innerHTML == "" && blogTitle.innerHTML == "" ){

                showErrorToast("Oops!","It looks like the blog post you are looking for is no longer available , You will now be redirected back to the main blog page. Thank You.");
                setTimeout(()=> {
                window.location.href = "home.html"
            }
            ,7000);

            }
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        showErrorToast("Something Went Wrong!"," A technical glitch has occured ,we hope you can take note of this problem and alert your software team ASAP!.");

    });
}else{

    showErrorToast("Oops!","It looks like theres no blog post you have selected , You will now be redirected back to the main blog page. Thank You.");
    setTimeout(()=> {
    window.location.href = "home.html"
    }
    ,7000);
}

    const createBlog = (blog) => {
        let data = blog;
        blogSection.innerHTML += `
        <div class="blog-card">
            <img src="${'data:image/png;base64,' + data.BannerImageBinary}" class="blog-image " alt="">
            <h1 class="blog-title">${data.Title.substring(0, 100)}</h1>
            <p class="date-overview">${formatDate(data.DateTime)}</p>
            <p class="blog-overview">${data.Article.substring(0, 200)}</p>
            <div class="BandI-container">
            <a href="blog.html?${blog.ID}" class="btn red">read</a>
            <div class="icon-container">
                <i class="far fa-heart icon-positioning" onclick="Like(`+"'"+ data.ID+"'" + `) alt"like"></i>
                <a href="blog.html?${data.ID}#comments"><i class="far fa-comment-alt icon-positioning" alt="comment on ${data.Title.substring(0, 100) + " post"}"></i></a>
                <i class="fas fa-share-alt icon-positioning" onclick="Share(`+"'"+data.ID+"'" +",'"+ data.Title+"'" + `)" alt="share"></i>
            </div>
        </div>
        </div>
        `;
    }
    
    function formatDate(timestamp) {
        const date = new Date(timestamp);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear().toString().substr(-2);
    
        return `${day < 10 ? '0' : ''}${day} ${month} ${year}`;
    }
    

    const viewingblog = (blog) => {
        let data = blog;

        banner.innerHTML = `<img src="${'data:image/png;base64,' + data.BannerImageBinary}" class="blog-image banner" alt="">`;
        blogTitle.innerHTML = `${data.Title}`;
        publish.innerHTML = `${formatDate(data.DateTime)}`;
        category.innerHTML = `${data.Catagory}`;
        article.innerHTML = `${data.Article}`;
        ID.innerHTML = `${data.ID}`;
        Likeamount.innerHTML = `${data.Likes}`? 0 :`${data.Likes}`;
    
       
    }



    function ReadMore(Type){
        const url = 'https://node.kalafhi.co.bw?PullBlogByCatagory='+ Type;
        const requestHeaders = new Headers();
                requestHeaders.append('Content-Type', 'application/x-www-form-urlencoded'); // Adjust content type if needed

        fetch(url,{
            method: 'GET',
            headers: requestHeaders
            })
            .then(response => response.json())
            .then(responseData => {
                if (responseData.status === 'success') {
                const data = responseData.data;
    
                //loop through all the blog posts so they can be added 1 by 1
                if(data.length <= 1){
                    ReadMoreRandom();

                }else if (data.length >= 2){
                                                        
                    data.forEach(blog => {
                        
                        if(blog.ID != location.pathname.split("/").pop() && blog.ID != BlogGuid ){
                            createBlog(blog);
                        }
                    })
                }
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            showErrorToast("Something Went Wrong!"," A technical glitch has occured ,we hope you can take note of this problem and alert your software team ASAP!.");
        });
    }

    function ReadMoreRandom(){
        const url = 'https://node.kalafhi.co.bw?PullBlogByCatagoryRandom';
        const requestHeaders = new Headers();
                requestHeaders.append('Content-Type', 'application/x-www-form-urlencoded'); // Adjust content type if needed

        fetch(url,{
            method: 'GET',
            headers: requestHeaders
            })
            .then(response => response.json())
            .then(responseData => {
                if (responseData.status === 'success') {
                const data = responseData.data;
    
                //loop through all the blog posts so they can be added 1 by 1
                if (data.length >= 1){
                    data.forEach(blog => {
                        if(blog.ID != location.pathname.split("/").pop() && blog.ID != BlogGuid ){
                            createBlog(blog);
                        }
                    })
                }
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            showErrorToast("Something Went Wrong!"," A technical glitch has occured ,we hope you can take note of this problem and alert your software team ASAP!.");
    
        });

    }

    Likebtn.addEventListener('click',event =>{

        var heart =  document.getElementById("LikeBTN");
        heart.style.transform = "scale(0.5)";
        heart.style.transition = ".5s";
        if(heart.classList.contains("far")){
            heart.classList.remove("far");
            heart.classList.add("fas");

        }else{
            heart.classList.remove("fas");
            heart.classList.add("far");
        }
        setTimeout(()=>{
            heart.style.transform = "scale(1.4)";
        }
        ,500);
        setTimeout(()=>{
            heart.style.transform = "scale(1.1)";
            var RCC = document.getElementById("RCContainer");
            var Amount = document.getElementById("LikeAmount");
            var Increment = Amount.innerHTML;
            var newChild = document.createElement("span");
            newChild.id = "LikeAmount";
            newChild.classList.add("Likes-amount");

            if(heart.classList.contains("far")){
                newChild.innerHTML = parseInt(Increment) - 1;
                RCC.prepend(newChild);
                RCC.scrollTop = RCC.scrollHeight - RCC.scrollHeight;
                setTimeout(()=>{
                    RCC.removeChild(RCC.lastElementChild)
                }
                ,1000);
            }else{
                newChild.innerHTML = parseInt(Increment) + 1;
                RCC.append(newChild);
                RCC.scrollTop = RCC.scrollHeight;
                setTimeout(()=>{
                    RCC.removeChild(RCC.firstElementChild)
                }
                ,1000);     
            }
        }
        ,1000);

        

        //fetch

    })