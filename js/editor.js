const blogTitleField = document.querySelector('.title');
const articleFeild = document.querySelector('.article');
const catagoryFeild = document.querySelector('.catagory');

// banner
const bannerImage = document.querySelector('#banner-upload');
const banner = document.querySelector(".banner");
let bannerPath;

const publishBtn = document.querySelector('.publish-btn');

// Function to display image and call for convert to base 64 string 
bannerImage.addEventListener('change', () => {
    const file = bannerImage.files[0]; // Get the selected file
  if (file) {
    // Create a FileReader to read the selected file
    const reader = new FileReader();

    // Define the callback function when the file is loaded
    reader.onload = (event) => {
      const imageUrl = event.target.result;
      // Update the div's content with the image
      banner.style.backgroundImage = `url("${imageUrl}")`;
      convertImageToBase64(imageUrl);

    };

    // Read the selected file as a data URL (base64 encoded)
    reader.readAsDataURL(file);
  } else {
    // If no file is selected, clear the div's content
    banner.style.backgroundImage = '';
  }
})

var base64String;
// Function to convert the image to Base64
function convertImageToBase64(imageUrl) {
    // Get the Base64 encoded string from the FileReader
    base64String = imageUrl.split(',')[1];        
}
  
function generateGUID() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
  
    return (
      s4() +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      s4() +
      s4()
    );
  }
 
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

publishBtn.addEventListener('click', () => {
    if(articleFeild.value.length && blogTitleField.value.length && catagoryFeild.value.length){
     
        let id = generateGUID();
        let date = new Date(); // for published at info
        //const axios = require('axios');


        //access server method to upload data
        //-------------------------------------------------node.js-------------------------------------------------
        //
        // const data = {
        // param1: id,
        // // param2: base64String,       
        // param2: "1",       
        // param3: blogTitleField.value,
        // param4: articleFeild.value,       
        // param5: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`,
        // param6: catagoryFeild.value,
        // param7: 0,
        // };

        // axios.post('http://localhost:3000/Send', data)
        // .then(response => {
        //     console.log(response.data.message);
        // })
        // .catch(error => {
        //     console.error('Error uploading data:', error);
        // });
        //-------------------------------------------------------------------------------------------------------
        const url = 'https://node.kalafhi.co.bw';
        

        const requestData = new URLSearchParams({
            param1: id,
            //param2: "1",
            param2: base64String,       
            param3: blogTitleField.value,
            param4: articleFeild.value,
            param5: `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`,
            param6: catagoryFeild.value,
            param7: 0,
            // ... provide other parameters and values

        });
        
        base64stringsize = Math.ceil(base64String.length / 4) * 3;
        if (base64stringsize > 900000){
          showWarningToast("Sending A Larger-Than-Life Image! 🌄","Hold tight, we're working with a big one. Its size is over 1MB, so it might take a moment to work its magic. Thanks for your patience!");
        }
        // Define the headers for the request
        const requestHeaders = new Headers();
        requestHeaders.append('Content-Type', 'application/x-www-form-urlencoded'); // Adjust content type if needed

        fetch(url, {
          method: 'POST',
          headers: requestHeaders, // Set the headers
          body: requestData,

       })
      .then(response => response.text())
      .then(data => {
          console.log(data); // Output the response message
          showSuccessToast("Success!","Boom! Your blog post has taken flight! Get ready to touch down on the admin landing zone. 🚀.");
          setTimeout(()=> {
            window.location.href = "home.html"
         }
         ,6000);
      })
      .catch(error => {
          console.error('Error sending data:', error);
          showErrorToast("Something Went Wrong!"," A technical glitch has occured ,we hope you can take note of this problem and alert your software team ASAP!.");

      });
      




       
    }
})