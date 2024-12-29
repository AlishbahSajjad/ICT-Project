$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Creative", "Innovative", "Dedicated", "Passionate", "Driven"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
	
	
});
function buttonalert(event){
	alert("Your comment has beeen sent");
}
function lightup(){
	var img = document.getElementById('imagechange');  
	img.src = "images/b2.png";
}

function confirmForHome(event) {
	event.preventDefault();
	if (confirm("Do you want to go to home page?")) {
		location.href = "index.html";
	}
}

function changecolor(element, color){
	element.style.color = color; 
}