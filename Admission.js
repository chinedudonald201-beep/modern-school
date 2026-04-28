// // Admission Page JavaScript

// // Hamburger Menu Toggle
// const hamburger = document.getElementById("hamburger");
// const navTabs = document.getElementById("navTabs");

// if (hamburger) {
//   hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     navTabs.classList.toggle("active");
//   });

//   // Close menu when a link is clicked
//   const navLinks = navTabs.querySelectorAll("a");
//   navLinks.forEach((link) => {
//     link.addEventListener("click", () => {
//       hamburger.classList.remove("active");
//       navTabs.classList.remove("active");
//     });
//   });
// }

// // Smooth scroll for internal links
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     const href = this.getAttribute("href");
//     if (href !== "#" && document.querySelector(href)) {
//       e.preventDefault();
//       document.querySelector(href).scrollIntoView({ behavior: "smooth" });
//     }
//   });
// });

// // Admission Form Validation
// const admissionForm = document.querySelector(".admission-form");

// if (admissionForm) {
//   const formInputs = admissionForm.querySelectorAll("input, select, textarea");

//   // Form validation
//   function validateForm() {
//     let isValid = true;

//     formInputs.forEach((input) => {
//       const value = input.value.trim();
//       const errorElement = input.parentElement.querySelector(".error-message");

//       if (!value && input.hasAttribute("required")) {
//         isValid = false;
//         if (errorElement) {
//           errorElement.textContent = "This field is required";
//           errorElement.style.display = "block";
//         }
//         input.style.borderColor = "#e74c3c";
//       } else {
//         if (errorElement) {
//           errorElement.style.display = "none";
//         }
//         input.style.borderColor = "";
//       }

//       // Email validation
//       if (input.type === "email" && value) {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(value)) {
//           isValid = false;
//           if (errorElement) {
//             errorElement.textContent = "Please enter a valid email address";
//             errorElement.style.display = "block";
//           }
//           input.style.borderColor = "#e74c3c";
//         }
//       }

//       // Phone validation
//       if (input.type === "tel" && value) {
//         const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
//         if (!phoneRegex.test(value)) {
//           isValid = false;
//           if (errorElement) {
//             errorElement.textContent = "Please enter a valid phone number";
//             errorElement.style.display = "block";
//           }
//           input.style.borderColor = "#e74c3c";
//         }
//       }
//     });

//     return isValid;
//   }

//   // Form submission
//   admissionForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       const submitBtn = admissionForm.querySelector('button[type="submit"]');
//       const originalText = submitBtn.textContent;
//       submitBtn.textContent = "Submitting...";
//       submitBtn.disabled = true;

//       // Collect form data
//       const formData = new FormData(admissionForm);
//       console.log(
//         "Admission Application Submitted:",
//         Object.fromEntries(formData),
//       );

//       setTimeout(() => {
//         submitBtn.textContent = originalText;
//         submitBtn.disabled = false;
//         alert(
//           "Thank you for submitting your admission application! We will review your information and contact you shortly.",
//         );
//         admissionForm.reset();
//       }, 2000);
//     }
//   });

//   // Real-time validation on input
//   formInputs.forEach((input) => {
//     input.addEventListener("blur", function () {
//       validateForm();
//     });

//     input.addEventListener("input", function () {
//       if (this.value.trim()) {
//         this.style.borderColor = "";
//         const errorElement = this.parentElement.querySelector(".error-message");
//         if (errorElement) {
//           errorElement.style.display = "none";
//         }
//       }
//     });
//   });
// }

// // Timeline Animation
// const timelineItems = document.querySelectorAll(".timeline-item");
// const observerOptions = {
//   threshold: 0.1,
//   rootMargin: "0px 0px -50px 0px",
// };

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.style.animation = "slideUp 0.6s ease forwards";
//       observer.unobserve(entry.target);
//     }
//   });
// }, observerOptions);

// timelineItems.forEach((item, index) => {
//   item.style.opacity = "0";
//   item.style.animationDelay = `${index * 0.1}s`;
//   observer.observe(item);
// });

// // Requirement Cards Animation
// const requirementCards = document.querySelectorAll(".requirement-card");
// requirementCards.forEach((card, index) => {
//   card.style.opacity = "0";
//   card.style.animationDelay = `${index * 0.1}s`;
//   observer.observe(card);
// });

// // Class Level Cards Animation
// const classCards = document.querySelectorAll(".class-card");
// classCards.forEach((card, index) => {
//   card.style.opacity = "0";
//   card.style.animationDelay = `${index * 0.1}s`;
//   observer.observe(card);
// });

// // FAQ Toggle
// const faqItems = document.querySelectorAll(".faq-item");
// faqItems.forEach((item) => {
//   const question = item.querySelector(".faq-question");
//   if (question) {
//     question.addEventListener("click", function () {
//       const answer = this.nextElementSibling;
//       const isOpen = answer.style.maxHeight && answer.style.maxHeight !== "0px";

//       // Close all other FAQs
//       faqItems.forEach((otherItem) => {
//         if (otherItem !== item) {
//           const otherAnswer = otherItem.querySelector(".faq-answer");
//           if (otherAnswer) {
//             otherAnswer.style.maxHeight = "0";
//             otherAnswer.style.opacity = "0";
//           }
//         }
//       });

//       // Toggle current FAQ
//       if (isOpen) {
//         answer.style.maxHeight = "0";
//         answer.style.opacity = "0";
//       } else {
//         answer.style.maxHeight = answer.scrollHeight + "px";
//         answer.style.opacity = "1";
//       }
//     });
//   }
// });

// // File upload preview
// const fileInputs = document.querySelectorAll('input[type="file"]');
// fileInputs.forEach((input) => {
//   input.addEventListener("change", function () {
//     if (this.files.length > 0) {
//       const fileName = this.files[0].name;
//       const label =
//         this.previousElementSibling ||
//         this.parentElement.querySelector("label");
//       if (label) {
//         label.textContent = `✓ ${fileName}`;
//         label.style.color = "#27ae60";
//       }
//     }
//   });
// });

// // Pricing Calculator
// const tuitionSelect = document.querySelector('select[name="class-level"]');
// const feesDisplay = document.querySelector(".estimated-fees");

// if (tuitionSelect && feesDisplay) {
//   const fees = {
//     "nursery-1": "₦150,000/Term",
//     "nursery-2": "₦160,000/Term",
//     "primary-1": "₦180,000/Term",
//     "primary-2": "₦180,000/Term",
//     "primary-3": "₦190,000/Term",
//     "primary-4": "₦190,000/Term",
//     "primary-5": "₦200,000/Term",
//     "primary-6": "₦200,000/Term",
//   };

//   tuitionSelect.addEventListener("change", function () {
//     const selectedFee = fees[this.value];
//     if (selectedFee && feesDisplay) {
//       feesDisplay.textContent = selectedFee;
//     }
//   });
// }

// // Add CSS Animations
// const style = document.createElement("style");
// style.textContent = `
//     @keyframes slideUp {
//         from {
//             opacity: 0;
//             transform: translateY(30px);
//         }
//         to {
//             opacity: 1;
//             transform: translateY(0);
//         }
//     }

//     .hamburger.active span:nth-child(1) {
//         transform: rotate(45deg) translate(10px, 10px);
//     }

//     .hamburger.active span:nth-child(2) {
//         opacity: 0;
//     }

//     .hamburger.active span:nth-child(3) {
//         transform: rotate(-45deg) translate(8px, -8px);
//     }

//     .faq-answer {
//         max-height: 0;
//         opacity: 0;
//         overflow: hidden;
//         transition: max-height 0.3s ease, opacity 0.3s ease;
//     }

//     .error-message {
//         color: #e74c3c;
//         font-size: 0.85rem;
//         margin-top: 0.3rem;
//         display: none;
//     }

//     input:invalid,
//     select:invalid,
//     textarea:invalid {
//         border-color: #e74c3c;
//     }

//     .requirement-card {
//         transition: all 0.3s ease;
//     }

//     .requirement-card:hover {
//         transform: translateY(-5px);
//         box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
//     }

//     .timeline-item {
//         transition: all 0.3s ease;
//     }

//     .timeline-item:hover {
//         transform: translateX(10px);
//     }
// `;
// document.head.appendChild(style);

// // Initialize page
// document.addEventListener("DOMContentLoaded", () => {
//   console.log("Admission page loaded successfully");
// });
