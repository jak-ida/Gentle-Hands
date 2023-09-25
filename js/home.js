
const blogSection = document.querySelector('.blogs-section');
const GeneralBlog =  document.querySelector(".hide");
//var publicdata = null;
var Offset = 0;
var NextBtn = document.querySelector(".NextBtn");
const cardTemplate = document.getElementById("card-template");
    for (let i = 0; i < 2; i++) {
        blogSection.append(cardTemplate.content.cloneNode(true));
    }

// Assuming you have a URL to the PHP script
const url = 'https://node.kalafhi.co.bw?PullTenBlogsHome';
const requestHeaders = new Headers();
      requestHeaders.append('Content-Type', 'application/x-www-form-urlencoded'); // Adjust content type if needed

// Make a fetch request to the PHP script
fetch(url,{
    method: 'GET',
    headers: requestHeaders
    })
    .then(response => response.json())
    .then(responseData => {
        if (responseData.status === 'success') {
        const data = responseData.data;
        if(data.length == 0){
            GeneralBlog.classList.remove("hide");
        }
        else if(data.length >= 1)
        {
            // Handle the retrieved data here
            //showSuccessToast("Success!","Boom! Your blog post has taken flight! Get ready to touch down on the admin landing zone. 🚀.");
            
            blogSection.innerHTML = "";
            //publicdata = data;

            //loop through all the blog posts so they can be added 1 by 1
            data.forEach(blog => {

                if(blog.ID != location.pathname.split("/").pop()){
                    createBlog(blog);
                }
            }) 
            Offset = Offset + data.length;
            if(Offset == 10){
                NextBtn.classList.remove("hide");

            }
        }
    }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        showErrorToast("Something Went Wrong!"," A technical glitch has occured ,we hope you can take note of this problem and alert your software team ASAP!.");

    });

const createBlog = (blog) => {
    let data = blog;
    blogSection.innerHTML += `
    <div class="blog-card">
        <img src="${'data:image/png;base64,' + data.BannerImageBinary}" class="blog-image" alt="">
        <h1 class="blog-title">${data.Title.substring(0, 100)}</h1>
        <p class="date-overview">${formatDate(data.DateTime)}</p>
        <p class="blog-overview">${data.Article.substring(0, 200)}</p>
        <div class="BandI-container">
        <a href="blog.html?${data.ID}" class="btn red">read</a>
        <div class="icon-container">
            <i class="far fa-heart icon-positioning" onclick="Like(`+"'"+ data.ID+"'" + `) alt="like"></i>
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

function Share(ID , Titleto) {

    var urlto ="file:///C:/Users/PC/Desktop/Blog/blogging-site/public/blog.html?" + ID;

    if(navigator.share){
        navigator.share({
            text:"A Blog by Gentle Hands",
            url: urlto,
            title: Titleto

        }).then(()=>{
            
        }).catch(
            showErrorToast("Share Failed"," Try using another browser or sharing while off of incognito mode, if you are. ")
        );
    }else{
        showErrorToast("Not Possible!"," The current browser does not support the share function. Please attempt to manually share the link we have copied to your clipboard.");
        navigator.clipboard.writeText(urlto);
    }

}
function Like(Guid){
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
    })

}
// Likebtn.addEventListener('click',event =>{

//     var heart =  document.getElementById("LikeBTN");
//     heart.style.transform = "scale(0.5)";
//     heart.style.transition = ".5s";
//     if(heart.classList.contains("far")){
//         heart.classList.remove("far");
//         heart.classList.add("fas");

//     }else{
//         heart.classList.remove("fas");
//         heart.classList.add("far");
//     }
//     setTimeout(()=>{
//         heart.style.transform = "scale(1.4)";
//     }
//     ,500);
//     setTimeout(()=>{
//         heart.style.transform = "scale(1.1)";
//         var RCC = document.getElementById("RCContainer");
//         var Amount = document.getElementById("LikeAmount");
//         var Increment = Amount.innerHTML;
//         var newChild = document.createElement("span");
//         newChild.id = "LikeAmount";
//         newChild.classList.add("Likes-amount");

//         if(heart.classList.contains("far")){
//             newChild.innerHTML = parseInt(Increment) - 1;
//             RCC.prepend(newChild);
//             RCC.scrollTop = RCC.scrollHeight - RCC.scrollHeight;
//             setTimeout(()=>{
//                 RCC.removeChild(RCC.lastElementChild)
//             }
//             ,1000);
//         }else{
//             newChild.innerHTML = parseInt(Increment) + 1;
//             RCC.append(newChild);
//             RCC.scrollTop = RCC.scrollHeight;
//             setTimeout(()=>{
//                 RCC.removeChild(RCC.firstElementChild)
//             }
//             ,1000);     
//         }
//     }
//     ,1000);

    

//     //fetch

// })


NextBtn.addEventListener("click",event =>{ 
    const nexturl = 'https://node.kalafhi.co.bw?PullTenBlogsHomeOffset=' + Offset;
    const nextrequestHeaders = new Headers();
    nextrequestHeaders.append('Content-Type', 'application/x-www-form-urlencoded'); // Adjust content type if needed

    // Make a fetch request to the PHP script
    fetch(nexturl,{
        method: 'GET',
        headers: nextrequestHeaders
    })
    .then(response => response.json())
    .then(responseData => {
        if (responseData.status === 'success') {
        const data = responseData.data;
        if(data.length == 0){
            showInfoToast("You're all caught up!","Keep checking in from time to time to make sure you dont miss out.");
        }
        else if(data.length >= 1)
        {
            NextBtn.classList.add("hide");

            // Handle the retrieved data here
            //showSuccessToast("Success!","Boom! Your blog post has taken flight! Get ready to touch down on the admin landing zone. 🚀.");
            

            //loop through all the blog posts so they can be added 1 by 1
            data.forEach(blog => {

                if(blog.ID != location.pathname.split("/").pop()){
                    createBlog(blog);
                }
            }) 
            Offset = Offset + data.length;
            if(data.length == 10){
                NextBtn.classList.remove("hide");

            }
        }
    }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        showErrorToast("Something Went Wrong!"," A technical glitch has occured ,we hope you can take note of this problem and alert your software team ASAP!.");

    });
})