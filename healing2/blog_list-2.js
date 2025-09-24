// Transform image
let lastScrollTop = window.scrollY;
    let ticking = false;

    function updateTransform() {
        const currentScrollTop = window.scrollY;
        const isScrollingDown = currentScrollTop > lastScrollTop;
        lastScrollTop = currentScrollTop;

        document.querySelectorAll('.scroll-transform').forEach(function(el) {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom > 0) {
                const ratio = rect.top / windowHeight;
                const translateValue = (isScrollingDown ? -1 : 1) * (1 - ratio) * 15;

                el.style.transform = `translateY(${translateValue}px)`;
                el.style.transition = "transform .75s ease-out";
            }
        });

        ticking = false;
    }

    window.addEventListener("scroll", function () {
        if (!ticking) {
            window.requestAnimationFrame(updateTransform);
            ticking = true;
        }
    });

    // Editor pick
    const track = document.getElementById('carousel-track');
    const container = document.getElementById('slider-container');

    let slideWidth, totalSlides, visibleSlides = 3;
    let maxTranslate, currentTranslate = 0;

    function getSlideWidth() {
      const slide = track.children[0];
      const style = window.getComputedStyle(slide);
      const marginRight = parseFloat(style.marginRight);
      return slide.offsetWidth + marginRight;
    }

    function updateContainerWidth() {
      slideWidth = getSlideWidth();
      totalSlides = track.children.length;
      maxTranslate = slideWidth * (totalSlides - visibleSlides);

      container.style.maxWidth = `${slideWidth * visibleSlides}px`;
      container.style.width = `${slideWidth * visibleSlides}px`;

      if (currentTranslate > maxTranslate) {
        currentTranslate = maxTranslate;
        track.style.transform = `translateX(-${currentTranslate}px)`;
      }
    }

    document.getElementById('nextBtn').addEventListener('click', () => {
      if (currentTranslate < maxTranslate) {
        currentTranslate = Math.min(currentTranslate + slideWidth, maxTranslate);
        track.style.transform = `translateX(-${currentTranslate}px)`;
      }
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
      if (currentTranslate > 0) {
        currentTranslate = Math.max(currentTranslate - slideWidth, 0);
        track.style.transform = `translateX(-${currentTranslate}px)`;
      }
    });

    window.addEventListener('resize', updateContainerWidth);
    window.addEventListener('load', updateContainerWidth);

    //Energy Healing Blog
    const blogs = [
      {
        title: "Reiki Therapy: Ancient Wisdom for Modern",
        date: "7 March, 2021",
        author: "MARIEL PELAEZ",
        image: "./images/blog-img1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        title: "Energy Healing Programs to Rejuvenate Your Spirit",
        date: "7 March, 2021",
        author: "MARIEL PELAEZ",
        image: "./images/blog-img2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        title: "Understanding the Seven Chakras: Your Guide",
        date: "7 March, 2021",
        author: "MARIEL PELAEZ",
        image: "./images/blog-img3.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        title: "Reiki Therapy: Ancient Wisdom for Modern",
        date: "7 March, 2021",
        author: "MARIEL PELAEZ",
        image: "./images/blog-img1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        title: "Energy Healing Programs to Rejuvenate Your Spirit",
        date: "7 March, 2021",
        author: "MARIEL PELAEZ",
        image: "./images/blog-img2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        title: "Understanding the Seven Chakras: Your Guide",
        date: "7 March, 2021",
        author: "MARIEL PELAEZ",
        image: "./images/blog-img3.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        title: "Reiki Therapy: Ancient Wisdom for Modern 1",
        date: "7 March, 2021",
        author: "MARIEL PELAEZ",
        image: "./images/blog-img1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        title: "Energy Healing Programs to Rejuvenate Your Spirit 1",
        date: "7 March, 2021",
        author: "MARIEL PELAEZ",
        image: "./images/blog-img2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        title: "Understanding the Seven Chakras: Your Guide",
        date: "7 March, 2021",
        author: "MARIEL PELAEZ",
        image: "./images/blog-img3.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        title: "Reiki Therapy: Ancient Wisdom for Modern",
        date: "7 March, 2021",
        author: "MARIEL PELAEZ",
        image: "./images/blog-img1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        title: "Energy Healing Programs to Rejuvenate Your Spirit",
        date: "7 March, 2021",
        author: "MARIEL PELAEZ",
        image: "./images/blog-img2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        title: "Understanding the Seven Chakras: Your Guide",
        date: "7 March, 2021",
        author: "MARIEL PELAEZ",
        image: "./images/blog-img3.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ];

    const perPage = 6;
    let currentPage = 1;

    const blogContainer = document.getElementById("blog-container");
    const pagination = document.getElementById("pagination");

    function renderBlogs(page) {
      blogContainer.innerHTML = "";
      const start = (page - 1) * perPage;
      const end = start + perPage;
      const items = blogs.slice(start, end);

      items.forEach((blog, index) => {
        const div = document.createElement("div");
        div.className = "bg-white rounded-lg shadow hover:shadow-lg transition p-3 w-[320px] scroll-transform relative overflow-hidden shadow-2xl image__background-container";
        div.innerHTML = `
          <div class="relative">
            <img src="./${blog.image}" class="rounded-lg h-[140px] object-cover w-full mb-3" alt="Blog">
            ${
              (index % 3) === 1
                ? `
                  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div class="bg-white p-2 rounded-full shadow-lg transition duration-300">
                      <div class="w-10 h-10 bg-yellow-400 text-[24px] text-white flex items-center justify-center text-center rounded-full transition duration-300 transform hover:scale-110 hover:bg-yellow-500 hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)]">
                        ▶
                      </div>
                    </div>
                  </div>
                `
                : ""
            }
          </div>
          <div class="flex justify-between items-center mb-1 text-xs">
            <span class="text-gray-400">${blog.date}</span>
            <span class="text-gray-500 text-sm"><a href="#">${blog.author}</a></span>
          </div>
          <span class="inline-block w-fit px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-purple-600 hover:text-white">
            <a href="#">Chakra Healing</a>
          </span>
          <h3 class="text-base font-semibold mt-1 leading-snug text-base font-semibold mt-1 leading-snug hover:text-purple-600 transition-colors duration-300">${blog.title}</h3>
          <p class="text-sm text-[#783766] mt-1">${blog.description}</p>
          <a href="#" class="text-[#783766] text-sm font-medium hover:text-purple-600 hover:no-underline mt-1 inline-block">READ MORE →</a>
        `;

        blogContainer.appendChild(div);
      });
    }

    function renderPagination() {
      pagination.innerHTML = "";

      const totalPages = Math.ceil(blogs.length / perPage);

      const prevBtn = document.createElement("button");
      prevBtn.textContent = "<";
      prevBtn.className = "px-3 py-1 border border-gray-300 text-gray-500 rounded hover:bg-gray-100";
      prevBtn.onclick = () => {
        if (currentPage > 1) {
          currentPage--;
          renderBlogs(currentPage);
          renderPagination();
        }
      };
      pagination.appendChild(prevBtn);

      for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement("button");
        pageBtn.textContent = i;
        pageBtn.className = `px-3 py-1 border border-gray-300 rounded ${
          currentPage === i ? "bg-[#783766] text-white" : "text-gray-700 hover:bg-gray-100"
        }`;
        pageBtn.onclick = () => {
          currentPage = i;
          renderBlogs(currentPage);
          renderPagination();
        };
        pagination.appendChild(pageBtn);
      }
      const nextBtn = document.createElement("button");
      nextBtn.textContent = ">";
      nextBtn.className = "px-3 py-1 border border-gray-300 text-gray-500 rounded hover:bg-gray-100";
      nextBtn.onclick = () => {
        if (currentPage < totalPages) {
          currentPage++;
          renderBlogs(currentPage);
          renderPagination();
        }
      };
      pagination.appendChild(nextBtn);
    }

    document.addEventListener("DOMContentLoaded", () => {
      renderBlogs(currentPage);
      renderPagination();
    });

    // button back to top
    document.addEventListener('DOMContentLoaded', function() {
      'use strict';

      const progressPath = document.querySelector('.progress-wrap path');
      const pathLength = progressPath.getTotalLength();

      progressPath.style.transition = 'none';
      progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
      progressPath.style.strokeDashoffset = pathLength;
      progressPath.getBoundingClientRect(); // force reflow
      progressPath.style.transition = 'stroke-dashoffset 10ms linear';

      function updateProgress() {
        const scroll = window.scrollY || window.pageYOffset;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
      }
      updateProgress();

      window.addEventListener('scroll', () => {
        updateProgress();

        const offset = 50;
        const progressWrap = document.querySelector('.progress-wrap');
        if ((window.scrollY || window.pageYOffset) > offset) {
          progressWrap.classList.add('active-progress');
        } else {
          progressWrap.classList.remove('active-progress');
        }
      });

      const progressWrap = document.querySelector('.progress-wrap');
      progressWrap.addEventListener('click', function(event) {
        event.preventDefault();

        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    });