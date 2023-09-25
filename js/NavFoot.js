document.getElementById('Header').innerHTML = `<img onclick="redirectToHome()" class="Logo" src="Main Images/Gentle Hands Dental Logo [Colour].png" />
<div class="navbar">
    <a href="index.html" class="active-pg">HOME</a>
    <a href="about.html">ABOUT US</a>
    <a class="no-a" href="services.html">SERVICES</a>
    <a href="home.html">BLOG</a>
    <a href="contact.html">CONTACT US</a>
    
</div>
<div id="HamburgerDrop" class="dropdown-3"></div>
` 


document.getElementById('Footer').innerHTML = `<div class="row end">
<div class="col-3-6-12">
    <h3> OUR LOCATION </h3>
    <br>
    <p> Plot 686 Main Mall,</p>
    <p> Gaborone, Botswana</p>
    <br>
</div>
<div class="col-3-6-12">
    <h3> WORKING HOURS</h3>
    <br>
    <h4> Monday: 09:00 - 17:00</h4>
    <h4> Tuesday: 09:00 - 17:00</h4>
    <h4> Wednesday: 09:00 - 17:00</h4>
    <h4> Thursday: 09:00 - 17:00</h4>
    <h4> Friday: 09:00 - 17:00</h4>
    <h4> Saturday: 09:00 - 13:00</h4>
    <h4> Closed on Sundays and Public Holidays</h4>
    <br>
</div>
<div class="col-3-6-12 quicklinks">
    <h3> QUICK LINKS</h3>
    <br>
    <p> <a onclick="redirectToHome()"> Home</a> </p>
    <p> <a onclick="redirectToAbout()"> About Us</a> </p>
    <p> <a onclick="redirectToServices()"> Services</a>
    <p> <a onclick="redirectToContact()"> Contact Us </a>
        <br>
</div>
<div class="col-3-6-12">
    <div class="">
        <h3> CONTACT US </h3>
        <br>
        <p><i class="fas fa-phone"></i>&nbsp;&nbsp;
            (+267) 316 4269 </p>
        <p><i class="fas fa-phone"></i>&nbsp;&nbsp;
            (+267) 73 440 666</p>
        <p><i class="fas fa-phone"></i>&nbsp;&nbsp;
            (+267) 78 377 955</p>
        <br>
        <p><i class="fas fa-email"></i>&nbsp;&nbsp;
            ghdgaborone@gmail.com</p>
    </div>
    <br>
    <ul class="social-list">
        <li class="odd-fa-f-radius">
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100083895025905">
                <i class="fab fa-facebook-f" src="facebook-f.svg"></i>
            </a>
        </li>

        <li class="odd-fa-insta-radius">
            <a target="_blank" href="https://www.instagram.com/gentle_hands_dental/">
                <i class="fab fa-instagram" src="instagram.svg"></i>
            </a>
        </li>
    </ul>
</div>
</div>
<footer >
        <p class="copy-end"> Gentle Hands &copy; Designed by KIDA</p>
    </footer>`