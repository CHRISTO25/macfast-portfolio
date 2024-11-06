// Change job title every 2 seconds
const names = ["SOFTWARE ENGINEER", "BACK-END DEVELOPER", "FRONT-END DEVELOPER", "UI/UX DESIGNER"];
let nameIndex = 0;

function changeText() {
    const h1 = document.querySelector('.my_name');
    if (h1) {  // Ensure the element exists
        nameIndex = (nameIndex + 1) % names.length; // Loop through names array
        h1.textContent = names[nameIndex]; // Update the text
    }
}
setInterval(changeText, 2000);  // Change text every 2 seconds



// Typing effect for "My key areas of expertise"
document.addEventListener("DOMContentLoaded", function () {
    const text = "My key areas of expertise"; // Text to type
    const heading = document.getElementById("heading");
    if (heading) {  // Ensure the element exists
        let index = 1;
        let isDeleting = false;

        function typeText() {
            if (index < text.length && !isDeleting) {
                heading.innerHTML = text.substring(0, index + 1);
                index++;
            } else if (index === text.length && !isDeleting) {
                setTimeout(() => { isDeleting = true; }, 1000);  // Pause after typing
            } else if (isDeleting && index > 0) {
                heading.innerHTML = text.substring(0, index - 1);
                index--;
            } else if (isDeleting && index === 0) {
                isDeleting = false;  // Restart typing
            }
            setTimeout(typeText, isDeleting ? 100 : 150);  // Speed for typing and deleting
        }

        // heading.classList.add("blink");  // Add caret blink effect
        typeText();  // Start typing effect
    }
});

// Typing effect for "My key areas of expertise"
document.addEventListener("DOMContentLoaded", function () {
  const text = "Changanacherry,Kottayam"; // Text to type
  const heading = document.getElementById("heading_twn");
  if (heading) {  // Ensure the element exists
      let index = 1;
      let isDeleting = false;

      function typeText() {
          if (index < text.length && !isDeleting) {
              heading_twn.innerHTML = text.substring(0, index + 1);
              index++;
          } else if (index === text.length && !isDeleting) {
              setTimeout(() => { isDeleting = true; }, 1000);  // Pause after typing
          } else if (isDeleting && index > 0) {
              heading_twn.innerHTML = text.substring(0, index - 1);
              index--;
          } else if (isDeleting && index === 0) {
              isDeleting = false;  // Restart typing
          }
          setTimeout(typeText, isDeleting ? 100 : 150);  // Speed for typing and deleting
      }

      // heading.classList.add("blink");  // Add caret blink effect
      typeText();  // Start typing effect
  }
});

// Carousel logic
const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;

function showNextSlide() {
    slides[currentIndex].classList.remove('translate-x-0');
    slides[currentIndex].classList.add('translate-x-full');

    currentIndex = (currentIndex + 1) % slides.length;

    slides[currentIndex].classList.remove('translate-x-full');
    slides[currentIndex].classList.add('translate-x-0');
}

setInterval(showNextSlide, 3000); // Slide every 3 seconds

//second heading
// Typing effect for "My key areas of expertise"
document.addEventListener("DOMContentLoaded", function () {
    const text = "My Services"; // Text to type
    const heading2 = document.getElementById("heading2");
    if (heading2) {  // Ensure the element exists
        let index = 1;
        let isDeleting = false;
       

        function typeText() {
            if (index < text.length && !isDeleting) {
                heading2.innerHTML = text.substring(0, index + 1);
                index++;
            } else if (index === text.length && !isDeleting) {
                setTimeout(() => { isDeleting = true; }, 1000);  // Pause after typing
            } else if (isDeleting && index > 0) {
                heading2.innerHTML = text.substring(0, index - 1);
                index--;
            } else if (isDeleting && index === 0) {
                isDeleting = false;  // Restart typing
            }
            setTimeout(typeText, isDeleting ? 100 : 150);  // Speed for typing and deleting
        }
       
        heading2.classList.add("blink");  // Add caret blink effect
        typeText();  // Start typing effect
    }
});


//video play when hover
const videos = document.querySelectorAll("video");

videos.forEach((video) => {
  video.addEventListener("mouseenter", () => {
    video.currentTime = 0; // Reset to the beginning
    video.muted = false;   // Enable sound
    video.play();          // Play the video
  });

  video.addEventListener("mouseleave", () => {
    video.pause();         // Pause the video
    video.currentTime = 0; // Reset to the start
  });
});

//form validations
const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('mail');
    const textInput = document.getElementById('text');
    const submitBtn = document.getElementById('submitBtn');

    function validateName() {
      const nameError = document.getElementById('nameError');
      if (nameInput.value.length >= 3) {
        nameError.style.display = 'none';
        return true;
      } else {
        nameError.style.display = 'block';
        return false;
      }
    }

    function validatePhone() {
      const phoneError = document.getElementById('phoneError');
      const phoneRegex = /^[0-9]{10}$/;
      if (phoneRegex.test(phoneInput.value)) {
        phoneError.style.display = 'none';
        return true;
      } else {
        phoneError.style.display = 'block';
        return false;
      }
    }

    function validateEmail() {
      const emailError = document.getElementById('emailError');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(emailInput.value)) {
        emailError.style.display = 'none';
        return true;
      } else {
        emailError.style.display = 'block';
        return false;
      }
    }

    function validateText() {
      const textError = document.getElementById('textError');
      if (textInput.value.length >= 10) {
        textError.style.display = 'none';
        return true;
      } else {
        textError.style.display = 'block';
        return false;
      }
    }

    function enableSubmitButton() {
      if (
        validateName() &&
        validatePhone() &&
        validateEmail() &&
        validateText()
      ) {
        submitBtn.disabled = false;
      } else {
        submitBtn.disabled = true;
      }
    }

    nameInput.addEventListener('input', enableSubmitButton);
    phoneInput.addEventListener('input', enableSubmitButton);
    emailInput.addEventListener('input', enableSubmitButton);
    textInput.addEventListener('input', enableSubmitButton);

    //carsol gallery---------
    