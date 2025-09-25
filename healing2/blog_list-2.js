// Transform image
let lastScrollTop = window.scrollY;
let ticking = false;

function updateTransform() {
    const currentScrollTop = window.scrollY;
    const isScrollingDown = currentScrollTop > lastScrollTop;
    lastScrollTop = currentScrollTop;

    document.querySelectorAll(".scroll-transform").forEach(function(el) {
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

window.addEventListener("scroll", function() {
    if (!ticking) {
        window.requestAnimationFrame(updateTransform);
        ticking = true;
    }
});