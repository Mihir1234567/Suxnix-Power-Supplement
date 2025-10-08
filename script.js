// Robust side menu + overlay + mobile accordion script
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu");
    const sideMenu = document.querySelector(".side-menu");
    const closeBtn = sideMenu
        ? sideMenu.querySelector(".close") ||
          sideMenu.querySelector(".cl") ||
          sideMenu.querySelector(".circle")
        : null;

    let overlay = document.getElementById("overlay");
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "overlay";
        document.body.appendChild(overlay);
    }

    function openMenu() {
        if (!sideMenu) return;
        sideMenu.classList.add("active");
        overlay.classList.add("active");
        sideMenu.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeMenu() {
        if (!sideMenu) return;
        sideMenu.classList.remove("active");
        overlay.classList.remove("active");
        sideMenu.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    if (menuBtn) {
        menuBtn.addEventListener("click", (e) => {
            if (sideMenu && sideMenu.classList.contains("active")) closeMenu();
            else openMenu();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", closeMenu);
    }

    overlay.addEventListener("click", closeMenu);

    document.addEventListener("keydown", function (e) {
        if (
            e.key === "Escape" &&
            sideMenu &&
            sideMenu.classList.contains("active")
        ) {
            closeMenu();
        }
    });

    function setupMobileDropdowns(context) {
        const toggles = (context || document).querySelectorAll(
            ".mobile-dropdown-toggle, .dropdown-toggle"
        );
        toggles.forEach((btn) => {
            if (btn.dataset.accordionAttached) return;
            btn.dataset.accordionAttached = "true";

            btn.addEventListener("click", function (ev) {
                const parentLi =
                    btn.closest(".mobile-dropdown") || btn.closest("li");
                if (!parentLi) return;
                const isOpen = parentLi.classList.contains("open");
                const root = parentLi.closest(".mobile-links") || document;
                const otherOpen = root.querySelectorAll(
                    ".mobile-dropdown.open"
                );
                otherOpen.forEach((o) => {
                    if (o !== parentLi) {
                        o.classList.remove("open");
                        const toggleBtn = o.querySelector(
                            ".mobile-dropdown-toggle, .dropdown-toggle"
                        );
                        if (toggleBtn)
                            toggleBtn.setAttribute("aria-expanded", "false");
                    }
                });

                if (isOpen) {
                    parentLi.classList.remove("open");
                    btn.setAttribute("aria-expanded", "false");
                } else {
                    parentLi.classList.add("open");
                    btn.setAttribute("aria-expanded", "true");
                }
            });
        });
    }

    setupMobileDropdowns(sideMenu);

    try {
        const desktopNav = document.querySelector(".desktop-links");
        const mobileLinks = document.querySelector(".mobile-links");
        if (desktopNav && mobileLinks && mobileLinks.children.length === 0) {
            desktopNav.querySelectorAll(":scope > li").forEach((li) => {
                const cloneLi = document.createElement("li");
                const sub = li.querySelector("ul");
                const link = li.querySelector("a");
                if (sub) {
                    cloneLi.classList.add("mobile-dropdown");
                    const btn = document.createElement("button");
                    btn.className = "mobile-dropdown-toggle";
                    btn.type = "button";
                    btn.innerHTML =
                        (link ? link.textContent.trim() : "Menu") +
                        ' <span class="caret">▾</span>';
                    btn.setAttribute("aria-expanded", "false");
                    cloneLi.appendChild(btn);

                    const subList = document.createElement("ul");
                    subList.className = "mobile-dropdown-menu";
                    sub.querySelectorAll("li > a").forEach((sa) => {
                        const subLi = document.createElement("li");
                        const a = document.createElement("a");
                        a.href = sa.getAttribute("href") || "#";
                        a.textContent = sa.textContent.trim();
                        subLi.appendChild(a);
                        subList.appendChild(subLi);
                    });
                    cloneLi.appendChild(subList);
                } else {
                    const a = document.createElement("a");
                    a.href = (link && link.getAttribute("href")) || "#";
                    a.textContent = (link && link.textContent.trim()) || "Link";
                    cloneLi.appendChild(a);
                }
                mobileLinks.appendChild(cloneLi);
            });
            setupMobileDropdowns(sideMenu);
        }
    } catch (err) {
        // console.warn("mobile clone error", err);
    }
});

// Donut chart animation
document.addEventListener("DOMContentLoaded", function () {
    const donuts = document.querySelectorAll(".donut");
    if (!donuts.length) return;

    donuts.forEach((donut) => {
        const target = Math.max(
            0,
            Math.min(100, Number(donut.getAttribute("data-percent")) || 0)
        );
        const svgRing = donut.querySelector(".donut-ring");
        const label = donut.querySelector(".donut-label");
        if (!svgRing) {
            if (label) label.textContent = `${target}%`;
            return;
        }

        let r = 38;
        const rAttr = svgRing.getAttribute("r");
        if (rAttr && !Number.isNaN(Number(rAttr))) r = Number(rAttr);

        const circumference = 2 * Math.PI * r;
        svgRing.style.strokeDasharray = `${circumference} ${circumference}`;
        svgRing.style.strokeDashoffset = `${circumference}`;

        try {
            svgRing.getBoundingClientRect();
        } catch (e) {
            /* ignore */
        }

        requestAnimationFrame(() => {
            const offset = circumference * (1 - target / 100);
            svgRing.style.strokeDashoffset = `${offset}`;
        });

        let duration = 900;
        let start = null;
        function countStep(ts) {
            if (!start) start = ts;
            const elapsed = ts - start;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.round(progress * target);
            if (label) label.textContent = `${current}%`;
            if (progress < 1) requestAnimationFrame(countStep);
        }
        requestAnimationFrame(countStep);
    });
});

// Testimonial Slider
let slideIndex = 0;
function showSlide(n) {
    const slidesContainer = document.querySelector(".slides");
    const dots = document.querySelectorAll(".dot");
    const numSlides = document.querySelectorAll(".slide").length;
    if (!slidesContainer || !dots.length) return;

    slideIndex = (n + numSlides) % numSlides;
    slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[slideIndex].classList.add("active");
}

function plusSlides(n) {
    showSlide(slideIndex + n);
}
function currentSlide(n) {
    showSlide(n);
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".testimonial-slider")) {
        showSlide(slideIndex);
        let autoSlideInterval = setInterval(() => plusSlides(1), 5000);

        document
            .querySelector(".testimonial-slider")
            .addEventListener("mouseenter", () =>
                clearInterval(autoSlideInterval)
            );
        document
            .querySelector(".testimonial-slider")
            .addEventListener(
                "mouseleave",
                () =>
                    (autoSlideInterval = setInterval(() => plusSlides(1), 5000))
            );
    }
});

// FAQ Toggle
function toggleAnswer(element) {
    const item = element.parentElement;
    const answer = element.nextElementSibling;
    const wasActive = item.classList.contains("active");

    document
        .querySelectorAll(".FAQItem")
        .forEach((i) => i.classList.remove("active"));
    document.querySelectorAll(".FAQAnswer").forEach((a) => {
        a.style.display = "none";
    });
    document
        .querySelectorAll(".FAQQuestion")
        .forEach((q) => q.classList.remove("active"));

    if (!wasActive) {
        item.classList.add("active");
        element.classList.add("active");
        answer.style.display = "block";
    }
}

// Swiper for Instagram feed
function initInstagramSwiper() {
    if (typeof Swiper !== "undefined" && document.querySelector(".mySwiper")) {
        new Swiper(".mySwiper", {
            loop: true,
            speed: 600,
            autoplay: { delay: 3000, disableOnInteraction: false },
            slidesPerView: 2,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                576: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                992: { slidesPerView: 5 },
            },
        });
    }
}

// Scroll-to-top button
document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.getElementById("scroll-to-top");
    if (!scrollToTopBtn) return;

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add("visible");
        } else {
            scrollToTopBtn.classList.remove("visible");
        }
    });

    scrollToTopBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

// Lightbox for Instagram feed
function initLightbox() {
    const modal = document.getElementById("lightbox-modal");
    if (!modal) return;

    const imageLinks = document.querySelectorAll(
        ".footer-instagram .insta-item a"
    );
    const lightboxImage = document.getElementById("lightbox-image");
    const closeBtn = modal.querySelector(".close-btn");

    imageLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Stop the link from navigating
            const imgSrc = this.querySelector("img").src;
            lightboxImage.src = imgSrc;
            modal.style.display = "flex"; // Show the modal
        });
    });

    function closeModal() {
        modal.style.display = "none";
    }

    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && modal.style.display === "flex") {
            closeModal();
        }
    });
}

// Price Slider for Shop Page
document.addEventListener("DOMContentLoaded", () => {
    const priceSlider = document.getElementById("price-slider");
    const priceValue = document.getElementById("price-value");

    if (priceSlider && priceValue) {
        priceSlider.addEventListener("input", () => {
            priceValue.textContent = `Tk ${priceSlider.value}`;
        });
    }
});

// NEW: Infinite slider for Featured Products
document.addEventListener("DOMContentLoaded", () => {
    const productsRow = document.querySelector(
        ".FeaturedProducts .products-row"
    );
    const prevButton = document.querySelector(".FeaturedProducts .fp-prev");
    const nextButton = document.querySelector(".FeaturedProducts .fp-next");

    if (!productsRow || !prevButton || !nextButton) {
        return;
    }

    let isTransitioning = false;
    const transitionSpeed = 500; // milliseconds

    // Function to slide to the next item
    const slideNext = () => {
        if (isTransitioning) return;
        isTransitioning = true;

        const firstCard = productsRow.firstElementChild;
        if (!firstCard) {
            isTransitioning = false;
            return;
        }

        const cardWidth = firstCard.offsetWidth;
        const gap = parseFloat(window.getComputedStyle(productsRow).gap);
        const scrollAmount = cardWidth + gap;

        // Apply transition and transform
        productsRow.style.transition = `transform ${transitionSpeed}ms ease-in-out`;
        productsRow.style.transform = `translateX(-${scrollAmount}px)`;

        // After the transition ends, move the card and reset
        setTimeout(() => {
            productsRow.appendChild(firstCard);
            productsRow.style.transition = "none";
            productsRow.style.transform = "translateX(0)";
            isTransitioning = false;
        }, transitionSpeed);
    };

    // Function to slide to the previous item
    const slidePrev = () => {
        if (isTransitioning) return;
        isTransitioning = true;

        const lastCard = productsRow.lastElementChild;
        if (!lastCard) {
            isTransitioning = false;
            return;
        }

        const cardWidth = lastCard.offsetWidth;
        const gap = parseFloat(window.getComputedStyle(productsRow).gap);
        const scrollAmount = cardWidth + gap;

        // Move last card to the beginning and instantly shift the container
        productsRow.insertBefore(lastCard, productsRow.firstElementChild);
        productsRow.style.transition = "none";
        productsRow.style.transform = `translateX(-${scrollAmount}px)`;

        // Force browser to apply the transform instantly
        // The setTimeout of 0ms or requestAnimationFrame helps ensure this
        setTimeout(() => {
            productsRow.style.transition = `transform ${transitionSpeed}ms ease-in-out`;
            productsRow.style.transform = "translateX(0)";
        }, 0);

        // After the transition ends, reset the flag
        setTimeout(() => {
            isTransitioning = false;
        }, transitionSpeed);
    };

    nextButton.addEventListener("click", slideNext);
    prevButton.addEventListener("click", slidePrev);
});
