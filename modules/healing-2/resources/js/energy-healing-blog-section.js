// Energy Healing Blog
const blogs = [
  {
    title: "Reiki Therapy: The Healing Touch",
    category: "Reiki Therapy",
    date: "7 March, 2021",
    author: "MARIEL PELAEZ",
    image: "./resources/images/blog-img1.jpg",
    description: "Explore the healing benefits of Reiki therapy, an ancient practice that restores balance and energy to the body and mind.",
  },
  {
    title: "Energy Healing Programs for a Renewed Life",
    category: "Energy Healing",
    date: "10 March, 2021",
    author: "MARIEL PELAEZ",
    image: "./resources/images/blog-img2.jpg",
    description: "Discover energy healing programs designed to rejuvenate your spirit and promote holistic wellness in everyday life.",
  },
  {
    title: "Understanding the Seven Chakras: A Complete Guide",
    category: "Chakra",
    date: "15 March, 2021",
    author: "MARIEL PELAEZ",
    image: "./resources/images/blog-img3.jpg",
    description: "Learn how each chakra influences your physical and emotional well-being, and how to balance them for inner peace.",
  },
  {
    title: "Harnessing the Power of Reiki for Stress Relief",
    category: "Reiki Therapy",
    date: "20 March, 2021",
    author: "MARIEL PELAEZ",
    image: "./resources/images/blog-img1.jpg",
    description: "Find out how Reiki therapy can help reduce stress, anxiety, and promote a sense of calm and relaxation.",
  },
  {
    title: "Energy Healing: Techniques to Transform Your Energy",
    category: "Energy Healing",
    date: "25 March, 2021",
    author: "MARIEL PELAEZ",
    image: "./resources/images/blog-img3.jpg",
    description: "An in-depth look at energy healing techniques that can transform your life, enhance vitality, and empower your spirit.",
  },
  {
    title: "Chakra Balancing: Steps to Achieve Harmonious Energy Flow",
    category: "Chakra",
    date: "30 March, 2021",
    author: "MARIEL PELAEZ",
    image: "./resources/images/blog-img2.jpg",
    description: "Unlock the secrets to chakra balancing with simple steps to restore energy flow and achieve a harmonious life.",
  },
  {
    title: "Reiki Therapy: Ancient Wisdom for Modern Times",
    category: "Reiki Therapy",
    date: "2 April, 2021",
    author: "MARIEL PELAEZ",
    image: "./resources/images/blog-img1.jpg",
    description: "Explore how ancient Reiki wisdom can be applied to modern healing practices to improve overall well-being.",
  },
  {
    title: "Energy Healing Programs to Restore Your Inner Peace",
    category: "Energy Healing",
    date: "5 April, 2021",
    author: "MARIEL PELAEZ",
    image: "./resources/images/blog-img1.jpg",
    description: "Embark on a journey of self-discovery and restoration with energy healing programs that help restore your inner peace.",
  },
  {
    title: "Chakra Healing for Emotional Balance",
    category: "Chakra",
    date: "10 April, 2021",
    author: "MARIEL PELAEZ",
    image: "./resources/images/blog-img3.jpg",
    description: "Learn how chakra healing can help you regain emotional balance and reduce feelings of stress, anxiety, and negativity.",
  },
  {
    title: "Reiki and Meditation: A Perfect Pairing",
    category: "Reiki Therapy",
    date: "12 April, 2021",
    author: "MARIEL PELAEZ",
    image: "./resources/images/blog-img3.jpg",
    description: "Discover the power of combining Reiki therapy with meditation to amplify healing and foster deep inner peace.",
  },
  {
    title: "Energy Healing for Physical Pain Relief",
    category: "Energy Healing",
    date: "15 April, 2021",
    author: "MARIEL PELAEZ",
    image: "./resources/images/blog-img2.jpg",
    description: "Explore how energy healing techniques can help alleviate physical pain and promote healing at a cellular level.",
  },
  {
    title: "The Role of Chakras in Spiritual Awakening",
    category: "Chakra",
    date: "18 April, 2021",
    author: "MARIEL PELAEZ",
    image: "./resources/images/blog-img3.jpg",
    description: "Uncover how the chakra system plays a crucial role in spiritual awakening and how to align your chakras for greater enlightenment.",
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
    div.className = "bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300";
    div.innerHTML = `
        <img src="./${blog.image}" class="w-full h-[256px] object-cover" alt="${blog.title}">
        <div class="p-6">
          <div class="flex justify-between items-center mb-2">
            <span class="text-sm text-gray-500">${blog.date}</span>
            <a href="#" class="text-[#783766] text-sm">By ${blog.author}</a>
          </div>
          <p class="my-4 d-flex w-fit px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-purple-600 hover:text-white">
            <a href="#">${blog.category}</a>
          </p>
          <a href="#"><h3 class="text-xl font-semibold mb-3 text-left">${blog.title}</h3></a>
          <p class="text-gray-600 text-left mb-4">${blog.description}</p>
          <a href="#" class="text-[#783766] hover:text-[#a86295] font-medium inline-flex items-center">
            Read More <span class="ml-1">→</span>
          </a>
        </div>
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
    pageBtn.className = `px-3 py-1 border border-gray-300 rounded ${currentPage === i ? "bg-[#783766] text-white" : "text-gray-700 hover:bg-gray-100"}`;
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
