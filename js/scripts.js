/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//sets focus to first dropdown
function TRex()
{
    document.getElementById("IS201").focus();
}
//Erases/clears the circle
function theSnap()
{
    //clear circle
    document.getElementById("myCircle").style.stroke= "none";
    document.getElementById("myCircle").display = "none";
    //clear dropdowns
    document.getElementById("IS201").value = "none";
    document.getElementById("IS303").value = "none";
    document.getElementById("ACC200").value = "none";
    //clear checkboxes
    document.getElementById("IS201Chk").checked = false;
    document.getElementById("IS303Chk").checked = false;
    document.getElementById("ACC200Chk").checked = false;
    //clear GPA inputs
    document.getElementById("OGPA").value = "";
    document.getElementById("LGPA").value = "";
    document.getElementById("calculatedGPA").innerHTML = "";
    fTotalGPA = "";
    TRex();
}
//This function calculates your total GPA taking inputs from each class,
// your GPA and you last 30 credit GPA and multiplying it by the necessary weight
function bananaPancakes()
{
    //This if statement alerts the user if they left a needed field empty
    if (document.getElementById("IS201").value == "" || document.getElementById("IS303").value == "" ||
    document.getElementById("ACC200").value == "" || document.getElementById("OGPA").value == "" ||
    document.getElementById("LGPA").value == "")
    {
        alert("You must select an item in each drop down and enter a value in the Overall GPA and Last 30 Credits GPA text boxes!");
    }
    else 
    {
        //This takes string inputs from the text boxes and converts them to integers
        //Lowers grade if retake box is checked
        let grade201;
        let grade303;
        let gradeACC;
        let gradeOverall;
        let grade30;
        if (document.getElementById("IS201Chk").checked)
        {
            grade201 = Persevere(parseFloat(document.getElementById("IS201").value));
        }
        else
        {
            grade201 = parseFloat(document.getElementById("IS201").value);
        }
        if (document.getElementById("IS303Chk").checked)
        {
            grade303 = Persevere(parseFloat(document.getElementById("IS303").value));
        }
        else
        {
            grade303 = parseFloat(document.getElementById("IS303").value);
        }
        if (document.getElementById("ACC200Chk").checked)
        {
            gradeACC = Persevere(parseFloat(document.getElementById("ACC200").value));
        }
        else
        {
            gradeACC = parseFloat(document.getElementById("ACC200").value);
        }
        gradeOverall = parseFloat(document.getElementById("OGPA").value);
        grade30 = parseFloat(document.getElementById("LGPA").value);

        //This is the formula that calculates the final GPA
        let fTotalGPA = ((grade201 * .3) + (grade303 * .3) + (gradeACC * .05) + (gradeOverall * .15) + (grade30 * .2));
        //This rounds the GPA to two decimal places
        fTotalGPA = fTotalGPA.toFixed(2);
        //This assigns fTotalGPA to Calculated GPA text box
        document.getElementById("calculatedGPA").innerHTML = fTotalGPA + " GPA";
        //changes color of the SVG circle and displays it
        if (fTotalGPA >= 3.7)
        {
            //green
            document.getElementById("myCircle").style.stroke="#4DA167";
        }
        else if (fTotalGPA >= 3.4)
        {
            //yellow
            document.getElementById("myCircle").style.stroke="#EAC435";
        }
        else
        {
            //red
            document.getElementById("myCircle").style.stroke="#C1292E";
        }
        document.getElementById("myCircle").style.display = "block";
    }
}
//lowers grade level (called when retakes are checked)
function Persevere(iGPA)
{
    let newGPA;
    switch (iGPA)
    {
        case 4.0:
        newGPA = 3.7;
        break;
        case 3.7:
        newGPA = 3.4;
        break;
        case 3.4:
        newGPA = 3;
        break;
        case 3:
        newGPA = 2.7;
        break;
        case 2.7:
        newGPA = 2.4;
        break;
        case 2.4:
        newGPA = 2;
        break;
        case 2:
        newGPA = 1.7;
        break;
        case 1.7:
        newGPA = 1.4;
        break;
        case 1.4:
        newGPA = 1;
        break;
        case 1:
        newGPA = 0.7;
        break;
        default:
        newGPA = 0;
    }
    return newGPA;
}


const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const sectionOneOptions = {
rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
entries,
sectionOneObserver
) {
entries.forEach(entry => {
  if (!entry.isIntersecting) {
    header.classList.add("nav-scrolled");
  } else {
    header.classList.remove("nav-scrolled");
  }
});
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const appearOptions = {
threshold: 0,
rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}