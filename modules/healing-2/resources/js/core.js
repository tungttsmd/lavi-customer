$(document).ready(function () {
  // Mobile menu toggle
  $("#mobile-menu-btn").click(function () {
    $("#mobile-menu").toggleClass("hidden");
    $(this).find("svg").toggleClass("rotate-45");
  });

  function handleResize() {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      $("#mobile-menu").addClass("hidden"); // Ẩn menu khi vượt quá 1024px
      $("#mobile-menu-btn svg").removeClass("rotate-45"); // Reset icon nếu cần
    }
  }

  $(window).resize(handleResize); // Khi resize
  $(document).ready(handleResize);
  // Gọi 1 lần khi tải trang
  handleResize();

  // Lắng nghe thay đổi kích thước màn hình
  $(window).on("resize", handleResize);

  $("#toggleDropdown").click(function () {
    $("#dropdownMenu").toggleClass("hidden invisible");
  });

  // Smooth scrolling for navigation links
  $('a[href^="#"]').click(function (e) {
    e.preventDefault();
    const target = $(this.getAttribute("href"));
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 80,
        },
        800
      );
    }
    // Close mobile menu if open
    $("#mobile-menu").slideUp(300);
  });

  // Header background change on scroll
  $(window).scroll(function () {
    const scroll = $(window).scrollTop();
    const header = $("header");

    if (scroll >= 100) {
      header.addClass("bg-white/95 backdrop-blur-sm shadow-lg");
      header.removeClass("bg-white/95");
    } else {
      header.removeClass("bg-white/95 backdrop-blur-sm shadow-lg");
      header.addClass("bg-white/95");
    }
  });

  // Animate elements on scroll
  function animateOnScroll() {
    $(".animate-on-scroll").each(function () {
      const elementTop = $(this).offset().top;
      const elementBottom = elementTop + $(this).outerHeight();
      const viewportTop = $(window).scrollTop();
      const viewportBottom = viewportTop + $(window).height();

      if (elementBottom > viewportTop && elementTop < viewportBottom) {
        $(this).addClass("animated");
      }
    });
  }

  // Initialize animations
  $(window).scroll(animateOnScroll);
  animateOnScroll(); // Run once on load

  // Add animate-on-scroll class to various elements
  $(".grid > div.box-animate, .bg-white.rounded-2xl, .testimonial-card").addClass("animate-on-scroll");

  // Interactive approach cards
  $("[data-approach]").hover(
    function () {
      $(this).find(".group").addClass("scale-105");
      $(this).css("z-index", "10");
    },
    function () {
      $(this).find(".group").removeClass("scale-105");
      $(this).css("z-index", "1");
    }
  );

  // Chakra hover effects
  $(".chakra-glow").hover(
    function () {
      $(this).addClass("scale-110");
    },
    function () {
      $(this).removeClass("scale-110");
    }
  );

  // Newsletter form submission
  $("#newsletter-form").submit(function (e) {
    e.preventDefault();
    const email = $(this).find('input[type="email"]').val();
    const messageDiv = $("#newsletter-message");

    if (validateEmail(email)) {
      // Simulate API call
      messageDiv.html('<div class="message success">Thank you for subscribing to the newsletter!</div>');
      $(this)[0].reset();
    } else {
      messageDiv.html('<div class="message error">Please enter a valid email address.</div>');
    }
  });

  // Footer newsletter form
  $("#footer-newsletter").submit(function (e) {
    e.preventDefault();
    const email = $(this).find('input[type="email"]').val();

    if (validateEmail(email)) {
      // Simulate API call
      $(this).find("button").html('<div class="spinner"></div>');
      setTimeout(() => {
        $(this).find("button").html("Subscribed!").addClass("bg-green-500");
        $(this)[0].reset();
        setTimeout(() => {
          $(this).find("button").html("Subscribe").removeClass("bg-green-500");
        }, 2000);
      }, 1000);
    } else {
      $(this).find("input").addClass("border-red-500");
      setTimeout(() => {
        $(this).find("input").removeClass("border-red-500");
      }, 3000);
    }
  });

  // Email validation function
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Button hover effects
  $("button, .btn-hover-lift").hover(
    function () {
      $(this).addClass("transform -translate-y-1 shadow-lg");
    },
    function () {
      $(this).removeClass("transform -translate-y-1 shadow-lg");
    }
  );

  // Card hover effects
  $(".card-hover").hover(
    function () {
      $(this).addClass("transform -translate-y-2 shadow-xl");
    },
    function () {
      $(this).removeClass("transform -translate-y-2 shadow-xl");
    }
  );

  // Parallax effect for background elements
  $(window).scroll(function () {
    const scroll = $(window).scrollTop();
    $(".parallax-element").css("transform", `translateY(${scroll * 0.5}px)`);
  });

  // Testimonial carousel effect (auto-rotate)
  let currentTestimonial = 0;
  const testimonials = $(".testimonial-card");

  function rotateTestimonials() {
    testimonials.removeClass("opacity-100").addClass("opacity-50");
    $(testimonials[currentTestimonial]).removeClass("opacity-50").addClass("opacity-100");
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  }

  // Start testimonial rotation
  setInterval(rotateTestimonials, 5000);

  // Counter animation for stats
  function animateCounters() {
    $(".counter").each(function () {
      const target = parseInt($(this).data("target"));
      const current = parseInt($(this).text());
      const increment = target / 50;

      if (current < target) {
        $(this).text(Math.ceil(current + increment));
        setTimeout(() => animateCounters(), 50);
      } else {
        $(this).text(target);
      }
    });
  }

  // Trigger counter animation when in view
  $(window).scroll(function () {
    $(".counter").each(function () {
      const elementTop = $(this).offset().top;
      const viewportBottom = $(window).scrollTop() + $(window).height();

      if (elementTop < viewportBottom && !$(this).hasClass("animated")) {
        $(this).addClass("animated");
        animateCounters();
      }
    });
  });

  // Modal functionality for booking
  $('.book-session-btn, button:contains("Book Session"), button:contains("Book your Session")').click(function (e) {
    e.preventDefault();
    showBookingModal();
  });

  function showBookingModal() {
    const modal = $(`
            <div class="fixed inset-0 bg-black bg-opacity-50 z-50 max-h-screen flex items-center justify-center py-4" id="booking-modal">
                <div class="bg-white rounded-2xl  overflow-y-auto hide-scrollbar  max-h-screen max-w-md m-7 w-full my-3 p-10 transform scale-95 opacity-0 transition-all duration-300">
                    <div class="text-center mb-6">
                        <h3 class="font-playfair text-2xl font-bold text-gray-800 mb-2">Book Your Session</h3>
                        <p class="text-gray-600">Choose your preferred treatment and time</p>
                    </div>

                    <form id="booking-form" class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Treatment</label>
                            <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent">
                                <option>Select a treatment</option>
                                <option>Reiki Healing</option>
                                <option>Life Coaching</option>
                                <option>Chakra Balancing</option>
                                <option>Sound Healing</option>
                                <option>Meditation</option>
                                <option>Energy Healing</option>
                            </select>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                            <input type="date" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent">
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                            <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent">
                                <option>Select a time</option>
                                <option>9:00 AM</option>
                                <option>10:00 AM</option>
                                <option>11:00 AM</option>
                                <option>1:00 PM</option>
                                <option>2:00 PM</option>
                                <option>3:00 PM</option>
                                <option>4:00 PM</option>
                            </select>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                            <input type="text" placeholder="Your full name" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent">
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input type="email" placeholder="your@email.com" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent">
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                            <input type="tel" placeholder="Your phone number" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent">
                        </div>

                        <div class="flex space-x-4 pt-4">
                            <button type="button" class="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors" id="cancelBtn" onclick="closeBookingModal()">
                                Cancel
                            </button>
                            <button type="submit" class="flex-1 px-6 py-3 bg-rose-400 text-white rounded-lg hover:bg-rose-500 transition-colors">
                                Book Session
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `);

    $("body").append(modal);

    // Animate modal in
    setTimeout(() => {
      $("#booking-modal .bg-white").removeClass("scale-95 opacity-0").addClass("scale-100 opacity-100");
    }, 10);

    // Handle form submission
    $("#booking-form").submit(function (e) {
      e.preventDefault();
      $(this).find('button[type="submit"]').html('<div class="spinner"></div>').prop("disabled", true);

      setTimeout(() => {
        $(this).find('button[type="submit"]').html("Booked!").removeClass("bg-rose-400").addClass("bg-green-500");
        setTimeout(() => {
          closeBookingModal();
        }, 1500);
      }, 2000);
    });

    // Close modal on outside click
    $("#booking-modal").click(function (e) {
      if (e.target === this) {
        closeBookingModal();
      }
    });

    $("#cancelBtn").click(function () {
      closeBookingModal();
      $("#floating-book-btn").show();
      $("#backToTopBtn").removeClass("hidden");
    });
  }

  // Close booking modal function
  window.closeBookingModal = function () {
    $("#booking-modal .bg-white").addClass("scale-95 opacity-0 hidden").removeClass("scale-100 opacity-100");
    setTimeout(() => {
      $("#booking-modal").remove();
    }, 300);
  };

  // Typing effect for hero title
  function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = "";

    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }

  // Initialize typing effect for main title (optional)
  // setTimeout(() => {
  //     const heroTitle = document.querySelector('h1');
  //     const originalText = heroTitle.textContent;
  //     typeWriter(heroTitle, originalText, 50);
  // }, 1000);

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $(entry.target).addClass("animate-fadeInUp");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections
  $("section").each(function () {
    observer.observe(this);
  });

  // Floating action button for quick booking
  const floatingBtn = $(`
        <button 
        
      class="back-to-top1 transition-opacity duration-300 text-2xl font-bold "
      aria-label="floadingBTn"
      " id="floating-book-btn">
            <svg class="w-6 h-6 items-center flex justify-center mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
        </button>
    `);

  $("body").append(floatingBtn);

  $("#floating-book-btn").click(function () {
    $(this).hide();
    $("#backToTopBtn").addClass("hidden");
    showBookingModal();
  });
  // Hide floating button on scroll up, show on scroll down
  let lastScrollTop = 0;
  $(window).scroll(function () {
    const scrollTop = $(this).scrollTop();

    if (scrollTop > lastScrollTop && scrollTop > 300) {
      $("#floating-book-btn").addClass("translate-y-20 opacity-0");
    } else {
      $("#floating-book-btn").removeClass("translate-y-20 opacity-0");
    }

    lastScrollTop = scrollTop;
  });

  // Add loading animation to buttons on click
  $("#book-online-button").click(function () {
    const originalText = $(this).html();
    $(this).prop("disabled", true).html('<div class="spinner mx-auto"></div>');

    setTimeout(() => {
      $(this).prop("disabled", false).html(originalText);
    }, 1000);
  });

  // Preload images for better performance
  function preloadImages() {
    const images = [
      "https://ext.same-assets.com/1274554740/2854890022.webp",
      "https://ext.same-assets.com/1274554740/1646724801.webp",
      "https://ext.same-assets.com/1274554740/295775052.webp",
      "https://ext.same-assets.com/1274554740/3439545926.webp",
    ];

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }

  preloadImages();

  // Add ripple effect to buttons
  $("button").on("click", function (e) {
    const button = $(this);
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = $(`<span class="ripple" style="width: ${size}px; height: ${size}px; left: ${x}px; top: ${y}px;"></span>`);

    button.append(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add click event to scroll to top
const backToTopBtn = document.getElementById("backToTopBtn");
backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// CSS for ripple effect
const style = document.createElement("style");
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    button {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// show tabs
function showTab(id) {
  document.querySelectorAll(".service-content").forEach((el) => el.classList.add("hidden"));

  document.getElementById(id).classList.remove("hidden");

  document.querySelectorAll('[id^="btn-tab"]').forEach((btn) => {
    btn.classList.remove("bg-[#8B5A8C]", "text-white", "shadow");
    btn.classList.add("bg-[#f5f3ef]", "hover:bg-[#8B5A8C]");
  });

  const btn = document.getElementById("btn-" + id);
  btn.classList.remove("bg-[#f5f3ef]", "hover:bg-[#8B5A8C]");
  btn.classList.add("bg-[#8B5A8C]", "text-white", "shadow");
}

let lastScrollY = window.scrollY;
let rotation = 0;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    rotation += 10;
  } else {
    rotation -= 10;
  }

  lastScrollY = currentScrollY;
});

const videoModal = document.getElementById("videoModal");
const videoPlayer = document.getElementsByClassName("video-player")[0];
const imageContainer = document.querySelector(".image-container");

function handleKeyPress(event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    playVideo();
  }
}

function playVideo() {
  videoModal.style.display = "flex";
  document.body.style.overflow = "hidden";

  const close = document.querySelector(".close-btn");
  close.focus();
  const btt = document.getElementById("backToTopBtn");
  if ((document.body.style.overflow = "hidden")) {
    btt.classList.add("hidden");
  }
}

function closeVideo() {
  videoModal.style.display = "none";
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
  document.body.style.overflow = "auto";

  if (document.body.style.overflow === "auto") {
    const btt = document.getElementById("backToTopBtn");
    btt.classList.remove("hidden");
  }
}

function trapFocus(event) {
  if (videoModal.style.display === "flex") {
    const focusableElements = videoModal.querySelectorAll('button, video, [tabindex]:not([tabindex="-1"])');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.key === "Tab") {
      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && videoModal.style.display === "flex") {
    closeVideo();
  }
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
});
