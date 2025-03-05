const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// feature container
ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 500,
});

// news container
ScrollReveal().reveal(".news__card", {
  ...scrollRevealOption,
  interval: 500,
});



function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let checkin = document.getElementById('checkin').value;
    let checkout = document.getElementById('checkout').value;
    let roomType = document.getElementById('roomType').value;
    let guests = document.getElementById('guests').value;

    let errorMessage = '';

    // Validate that all fields are filled out
    if (!name || !email || !phone || !checkin || !checkout || !roomType || !guests) {
        errorMessage = 'All fields are required!';
    }

    // Ensure check-out date is after check-in date
    if (new Date(checkout) <= new Date(checkin)) {
        errorMessage = 'Check-out date must be after check-in date.';
    }

    if (errorMessage) {
        alert(errorMessage); // Show an alert message for errors
        return false; // Prevent form submission if there are errors
    }

    // If everything is okay, show a success message
    function validateForm() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const checkin = document.getElementById('checkin').value;
      const checkout = document.getElementById('checkout').value;
      const roomType = document.getElementById('roomType').value;
      const guests = document.getElementById('guests').value;
    
      let errorMessage = '';
    
      // Validate all fields
      if (!name || !email || !phone || !checkin || !checkout || !roomType || !guests) {
        errorMessage = 'All fields are required!';
      }
    
      // Validate check-in and check-out dates
      if (new Date(checkout) <= new Date(checkin)) {
        errorMessage = 'Check-out date must be after check-in date.';
      }
    
      if (errorMessage) {
        alert(errorMessage);
        return false;
      }
    
      // Simulate form submission
      fetch('http://localhost:5678/webhook/bc91c7eb-3d04-46a6-a35a-5cb77e96d302', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          checkin,
          checkout,
          roomType,
          guests,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          alert('Booking successful!');
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('An error occurred. Please try again.');
        });
    
      return true;
    }
}