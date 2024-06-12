'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  navigationLinks.forEach(link => {
    link.addEventListener("click", function () {
      const targetPage = this.getAttribute("data-nav-link");

      pages.forEach(page => {
        if (page.getAttribute("data-page") === targetPage) {
          page.classList.add("active");
        } else {
          page.classList.remove("active");
        }
      });

      navigationLinks.forEach(link => link.classList.remove("active"));
      this.classList.add("active");

      window.scrollTo(0, 0);
    });
  });
});

// Element toggle function
const elementToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
}

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", function () { 
    elementToggleFunc(sidebar); 
  });
} else {
  console.log("Sidebar or sidebar button not found");
}

// Testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Modal variables
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Modal toggle function
const testimonialsModalFunc = function () {
  if (modalContainer && overlay) {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  } else {
    console.log("Modal container or overlay not found");
  }
}

// Add click event to all modal items
if (testimonialsItem.length > 0 && modalContainer && modalCloseBtn && overlay) {
  for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener("click", function () {
      modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
      modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
      modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
      modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
      testimonialsModalFunc();
    });
  }

  // Add click event to modal close button
  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  overlay.addEventListener("click", testimonialsModalFunc);
} else {
  console.log("Testimonials items, modal elements or overlay not found");
}

// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select && selectValue) {
  select.addEventListener("click", function () { 
    elementToggleFunc(this); 
  });

  // Add event in all select items
  for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  }
} else {
  console.log("Select or select value element not found");
}

// Filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// Add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

if (filterBtn.length > 0) {
  for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      filterFunc(selectedValue);
      lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  }
} else {
  console.log("Filter buttons not found");
}

// Contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Add event to all form input fields
if (form) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
      // Check form validation
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  }
} else {
  console.log("Form or form inputs not found");
}

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all nav links
if (navigationLinks.length > 0 && pages.length > 0) {
  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
      for (let j = 0; j < pages.length; j++) {
        if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
          pages[j].classList.add("active");
          navigationLinks[j].classList.add("active");
          window.scrollTo(0, 0);
        } else {
          pages[j].classList.remove("active");
          navigationLinks[j].classList.remove("active");
        }
      }
    });
  }
} else {
  console.log("Navigation links or pages not found");

// Function to update visitor count
function updateVisitorCount() {
  // Get the visitor count from local storage
  let visitorCount = localStorage.getItem('visitorCount');

  // If there is no visitor count, initialize it to 0
  if (!visitorCount) {
    visitorCount = 0;
  }

  // Increment the visitor count
  visitorCount++;

  // Store the updated visitor count in local storage
  localStorage.setItem('visitorCount', visitorCount);

  // Display the visitor count on the page
  const visitorCountElement = document.getElementById('visitor-count');
  visitorCountElement.textContent = `You are the ${visitorCount}th visitor! Thank you for checking my website!`;
}

// Call the function to update the visitor count when the page loads
document.addEventListener('DOMContentLoaded', updateVisitorCount);

}

