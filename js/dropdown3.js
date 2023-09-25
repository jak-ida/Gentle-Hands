document.getElementById("HamburgerDrop").innerHTML = `<!-- Button one -->
<button class="btn button-one dropdown" data-widget="pushmenu" href="#" role="button"
    aria-controls="primary-navigation" aria-expanded="false"
    style="width:35px; height:31px;border-radius:.2rem!important;padding:inherit!important;">
    <svg fill="var(--button-color)" class="hamburger" viewBox="0 0 100 100" width="20">
        <rect class="line top" width="80" height="10" x="10" y="25" rx="5">
        </rect>
        <rect class="line middle" width="80" height="10" x="10" y="45" rx="5">
        </rect>
        <rect class="line bottom" width="80" height="10" x="10" y="65" rx="5">
        </rect>
    </svg>
</button>
<div class="dropdown-content">
    <a Id="index" href="index.html" >HOME</a>
    <a Id="about" href="about.html">ABOUT US</a>
    <a Id="service" href="services.html">SERVICES</a>
    <a Id="Home" href="home.html">BLOG</a>
    <a Id="contact" href="contact.html">CONTACT US</a>
</div>`


//Navbar settings for mobile starts// 
        var page = window.location.href.split("bw/");
        if (page.length > 1) {
            var location = page[1].split(".")[0];
            document.getElementById(location).classList.add("active-pg")
            document.getElementById(location).classList.add("no-a")
        }else{

        }

        // Get the dropdown and sub-dropdown buttons
        const dropdownBtn = document.querySelector('.dropdown-3 .button-one');
        const subDropdownBtns = document.querySelectorAll('.dropdown .dropbtn');

        // Add click event listener to the dropdown button
        dropdownBtn.addEventListener('click', () => {
            // Toggle active class on the dropdown
            dropdownBtn.parentNode.classList.toggle('active');
        });

        // Add click event listener to the sub-dropdown buttons
        subDropdownBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                // Toggle active class on the sub-dropdown
                btn.parentNode.classList.toggle('active');
            });
        });


        const buttons = document.querySelectorAll("button");

        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                const currentState = button.getAttribute("data-state");

                if (!currentState || currentState === "closed") {
                    button.setAttribute("data-state", "opened");
                    button.setAttribute("aria-expanded", "true");
                } else {
                    button.setAttribute("data-state", "closed");
                    button.setAttribute("aria-expanded", "false");
                }
            });
        });

        //Navbar settings for mobile ends//    

