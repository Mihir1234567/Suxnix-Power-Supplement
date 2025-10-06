// SHARED COMPONENTS (reusable across all pages)
const templates = {
    navbar: `         <nav class="navbar">
            <div class="logo">
              <a href="/index.html">
  <img src="/images/Hoarding7.webp" alt="Logo" /></a>
            </div>

            <ul class="links desktop-links">
                <li class="dropdown">
                    <a href="/index.html">Home</a>
                    <ul class="dropdown-menu">
                        <li><a href="/index.html">Home One</a></li>
                        <li><a href="#">Home Two</a></li>
                        <li><a href="#">Home Three</a></li>
                    </ul>
                </li>
                <li><a href="/index.html#Features">Features</a></li>
                <li><a href="/index.html#Product">Product</a></li>
                <li><a href="/index.html#Ingredient">Ingredient</a></li>
                <li><a href="/index.html#Pricing">Pricing</a></li>
                <li class="dropdown">
                    <a href="#">Shop</a>
                    <ul class="dropdown-menu">
                        <li><a href="/shopPages/ourShop/ourShop.html">Our Shop</a></li>
                        <li><a href="/shopPages/shopDetails/shopDetails.html">Shop Details</a></li>
                        <li><a href="#">Cart Page</a></li>
                        <li><a href="/userPages/login/login.html">Login Page</a></li>
                        <li><a href="/userPages/signup/signup.html">Register</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#">News</a>
                    <ul class="dropdown-menu">
                        <li><a href="/newsPages/ourBlog/ourBlog.html">Our Blogs</a></li>
                        <li><a href="/newsPages/blogDetails/blogDetails.html">Blog Details</a></li>
                    </ul>
                </li>
                <li><a href="/contactsPage/contacts.html">Contacts</a></li>
            </ul>

            <div class="buttons">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-solid fa-magnifying-glass"></i>
                <div class="menu">
                    <img
                        src="/images/square.png"
                        alt=""
                        height="25px"
                        width="25px"
                    />
                </div>
            </div>
        </nav>
        <div class="side-menu" id="sideMenu" aria-hidden="true">
            <div
                class="circle"
                id="closeMenu"
                aria-label="Close side menu"
                role="button"
                tabindex="0"
            >
                <span class="close">&times;</span>
            </div>

            <div class="desktop-content">
                <div class="content1">
                    GETTING ALL OF THE
                    <span style="color: #0d9b4d">NUTRIENTS</span> YOU NEED
                    SIMPLY CANNOT BE DONE WITHOUT SUPPLEMENTS.
                </div>
                <p class="content2">
                    Nam libero tempore, cum soluta nobis eligendi cumque quod
                    placeat facere possimus assumenda omnis dolor repellendus
                    autem temporibus officiis.
                </p>
                <div class="contact">+1 599 162 4545</div>
                <div class="contact">INFO@EXAMPLE.COM</div>
                <div class="location">
                    5689 Lotaso Terrace, Culver City, CA, United States
                </div>
            </div>

            <nav class="mobile-nav">
                <ul class="mobile-links">
                    <li class="mobile-dropdown">
                        <button
                            class="mobile-dropdown-toggle"
                            aria-expanded="false"
                        >
                            Home <span class="caret">▾</span>
                        </button>
                        <ul class="mobile-dropdown-menu">
                            <li><a href="/index.html">Home One</a></li>
                            <li><a href="#">Home Two</a></li>
                            <li><a href="#">Home Three</a></li>
                        </ul>
                    </li>

                    <li><a href="/index.html#Features">Features</a></li>
                    <li><a href="/index.html#Product">Product</a></li>
                    <li><a href="/index.html#Ingredient">Ingredient</a></li>
                    <li><a href="/index.html#Pricing">Pricing</a></li>

                    <li class="mobile-dropdown">
                        <button
                            class="mobile-dropdown-toggle"
                            aria-expanded="false"
                        >
                            Shop <span class="caret">▾</span>
                        </button>
                        <ul class="mobile-dropdown-menu">
                            <li><a href="/shopPages/ourShop/ourShop.html">Our Shop</a></li>
                            <li><a href="/shopPages//shopDetails/shopDetails.html">Shop Details</a></li>
                            <li><a href="#">Cart Page</a></li>
                            <li><a href="/userPages/login/login.html">Login Page</a></li>
                            <li><a href="/userPages/signup/signup.html">Register</a></li>
                        </ul>
                    </li>

                    <li class="mobile-dropdown">
                        <button
                            class="mobile-dropdown-toggle"
                            aria-expanded="false"
                        >
                            News <span class="caret">▾</span>
                        </button>
                        <ul class="mobile-dropdown-menu">
                            <li><a href="/newsPages/ourBlog/ourBlog.html">Our Blogs</a></li>
                            <li><a href="/newsPages/blogDetails/blogDetails.html">Blog Details</a></li>
                        </ul>
                    </li>

                    <li><a href="/contactsPage/contacts.html">Contacts</a></li>
                </ul>
            </nav>

            <div class="icons mobile-icons" aria-hidden="false">
                <a class="icon-circle" href="#"
                    ><i class="fab fa-facebook-f"></i
                ></a>
                <a class="icon-circle" href="#"
                    ><i class="fab fa-twitter"></i
                ></a>
                <a class="icon-circle" href="#"
                    ><i class="fab fa-instagram"></i
                ></a>
                <a class="icon-circle" href="#"
                    ><i class="fab fa-youtube"></i
                ></a>
                <a class="icon-circle" href="#"
                    ><i class="fab fa-vimeo-v"></i
                ></a>
            </div>
        </div>
        `,

    footer: `           <footer class="footer-area">
            <img
                src="/images/footer_shape01.avif"
                alt=""
                class="footer-shape1"
            />
            <img
                src="/images/footer_shape02.avif"
                alt=""
                class="footer-shape2"
            />
            <div class="footer-instagram swiper mySwiper">
                <div class="instagram-active swiper-wrapper">
                    <div class="insta-item swiper-slide">
                        <a href="#" class="popup-image">
                            <img
                                src="//suxnix-dev.myshopify.com/cdn/shop/files/instagram_post01_e129213d-f718-4e47-a5f4-d6ec8f7ab64d.jpg?v=1737134057"
                                alt="Workout Image 1"
                            />
                        </a>
                        <i class="fab fa-instagram instagram-icon"></i>
                    </div>

                    <div class="insta-item swiper-slide">
                        <a href="#" class="popup-image">
                            <img
                                src="//suxnix-dev.myshopify.com/cdn/shop/files/instagram_post02_a85b661a-67ea-4a36-ad29-c9e84ee797ae.jpg?v=1737134121"
                                alt="Workout Image 2"
                            />
                        </a>
                        <i class="fab fa-instagram instagram-icon"></i>
                    </div>

                    <div class="insta-item swiper-slide">
                        <a href="#" class="popup-image">
                            <img
                                src="//suxnix-dev.myshopify.com/cdn/shop/files/instagram_post03_8902567f-4641-4a0d-8a5d-d9ab44870ead.jpg?v=1737134471"
                                alt="Workout Image 3"
                            />
                        </a>
                        <i class="fab fa-instagram instagram-icon"></i>
                    </div>

                    <div class="insta-item swiper-slide">
                        <a href="#" class="popup-image">
                            <img
                                src="//suxnix-dev.myshopify.com/cdn/shop/files/instagram_post04_f36edf63-f2ee-407c-ad8f-24edd6fcf69d.jpg?v=1737134471"
                                alt="Workout Image 4"
                            />
                        </a>
                        <i class="fab fa-instagram instagram-icon"></i>
                    </div>

                    <div class="insta-item swiper-slide">
                        <a href="#" class="popup-image">
                            <img
                                src="//suxnix-dev.myshopify.com/cdn/shop/files/instagram_post05_076fdf6c-6ffe-45f7-8388-6900702b3b4b.jpg?v=1737134471"
                                alt="Workout Image 5"
                            />
                        </a>
                        <i class="fab fa-instagram instagram-icon"></i>
                    </div>

                    <div class="insta-item swiper-slide">
                        <a href="#" class="popup-image">
                            <img
                                src="//suxnix-dev.myshopify.com/cdn/shop/files/instagram_post06_ec34de05-56ce-4943-96eb-fdbc6f239030.jpg?v=1737134471"
                                alt="Workout Image 6"
                            />
                        </a>
                        <i class="fab fa-instagram instagram-icon"></i>
                    </div>
                </div>
                <div class="swiper-button-prev" style="opacity: 0"></div>
                <div class="swiper-button-next" style="opacity: 0"></div>
            </div>

            <div class="footer-top-wrap">
                <div class="container">
                    <div class="footer-widgets-wrap">
                        <div class="footer-grid">
                            <div class="footer-widget footer-about">
                                <div class="footer-logo logo">
                                    <img
                                        src="/images/white_logo.webp"
                                        alt="Suxnix Power Supplement"
                                        class="logo-image"
                                    />
                                </div>
                                <div class="footer-text">
                                    <p>
                                        Making beauty especially relating
                                        complot especial common questions tend
                                        to recur through posts or queries
                                        standards vary orem donor command tei.
                                    </p>
                                </div>
                                <div class="footer-social">
                                    <a href="#" aria-label="Facebook"
                                        ><i class="fab fa-facebook-f"></i
                                    ></a>
                                    <a href="#" aria-label="Twitter"
                                        ><i class="fab fa-twitter"></i
                                    ></a>
                                    <a href="#" aria-label="Pinterest"
                                        ><i class="fab fa-pinterest-p"></i
                                    ></a>
                                    <a href="#" aria-label="LinkedIn"
                                        ><i class="fab fa-linkedin-in"></i
                                    ></a>
                                </div>
                            </div>

                            <div class="footer-widget">
                                <h4 class="fw-title">ABOUT US</h4>
                                <ul class="list-wrap">
                                    <li><a href="">Shop</a></li>
                                    <li><a href="/contactsPage/contacts.html">Contact</a></li>
                                    <li><a href="/newsPages/ourBlog/ourBlog.html">Blogs</a></li>
                                    <li><a href="/shopPages/shopDetails/shopDetails.html">Product</a></li>
                                </ul>
                            </div>
    
                            <div class="footer-widget">
                                <h4 class="fw-title">SUPPORT</h4>
                                <ul class="list-wrap">
                                    <li><a href="/index.html">Home</a></li>
                                    <li><a href="/newsPages/ourBlog/ourBlog.html">Blogs</a></li>
                                    <li><a href="/newsPages/blogDetails/blogDetails.html">Blog Post</a></li>
                                    <li><a href="/contactsPage/contacts.html">Contact</a></li>
                                </ul>
                            </div>

                            <div class="footer-widget footer-contact">
                                <h4 class="fw-title">CONTACT US</h4>
                                <div class="footer-contact-wrap">
                                    <p>
                                        4140 Parker Rd. Allentown, New Mexico
                                        31134
                                    </p>
                                    <ul class="list-wrap">
                                        <li class="phone">
                                            <i class="fas fa-phone"></i>
                                            +1 31-6555-0116
                                        </li>
                                        <li class="mail">
                                            <i class="fas fa-envelope"></i>
                                            Suxnix@example.com
                                        </li>
                                        <li class="website">
                                            <i class="fas fa-globe"></i>
                                            www.suxnixdomain.com
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="copyright-wrap">
                <div class="container">
                    <div class="copyright-content">
                        <div class="copyright-text">
                            <p>Copyright © 2025 Suxnix All Rights Reserved.</p>
                        </div>
                        <div class="payment-card">
                            <img
                                src="/images/card_img.avif"
                                alt="payment methods"
                                class="payment-image"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <button
                id="scroll-to-top"
                class="scroll-to-top-btn"
                aria-label="Scroll to top"
            >
                <i class="fas fa-chevron-up"></i>
            </button>
        </footer>

        <div id="lightbox-modal" class="lightbox-modal">
            <span class="close-btn">&times;</span>
            <button class="nav-btn prev" aria-label="Previous Image">
                <i class="fas fa-chevron-left"></i>
            </button>
            <div class="lightbox-content">
                <img id="lightbox-image" src="" alt="Full Screen Image" />
                <div id="lightbox-caption" class="lightbox-caption"></div>
            </div>
            <button class="nav-btn next" aria-label="Next Image">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>`,

    hero: (options) => `
        <header class="hero-section" style="${options.style || ""}">
            <div class="overlay">
                <div class="content-box">
                    <h1>${options.title.toUpperCase()}</h1>
                    <p>
                        <a href="/index.html" class="breadcrumb-link">Home</a>
                        <span class="separator">|</span>
                        <a href="${
                            options.currentLink || "#"
                        }" class="breadcrumb-link">${options.currentTitle}</a>
                    </p>
                </div>
            </div>
            ${options.shapes}
        </header>
    `,
};

window.renderHero = function (options = {}) {
    const defaults = {
        title: "DEFAULT TITLE",
        currentTitle: "Default Page",
        currentLink: "#",
        style: "",
        shapes: `
            <img src="/images/video_shape01.avif" class="shape01" alt="" />
            <img src="/images/video_shape02.avif" class="shape02" alt="" />
        `,
    };

    const config = { ...defaults, ...options };

    if (document.getElementById("hero-placeholder")) {
        document.getElementById("hero-placeholder").innerHTML =
            templates.hero(config);
    }
};

function loadCSS(url) {
    if (!document.querySelector(`link[href="${url}"]`)) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = url;
        document.head.appendChild(link);
    }
}

function loadScript(url, callback) {
    if (!document.querySelector(`script[src="${url}"]`)) {
        const script = document.createElement("script");
        script.src = url;
        if (callback) {
            script.onload = callback;
        }
        document.body.appendChild(script);
    } else if (callback) {
        callback();
    }
}

// Load CSS files immediately (early in the page load process) for better performance and to avoid potential flash of unstyled content.
// The local /style.css is loaded last in this sequence to give it higher priority (it can override the library styles).
loadCSS(
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
);
loadCSS("https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css");
loadCSS("/style.css");
// In template.js

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("navbar-placeholder")) {
        document.getElementById("navbar-placeholder").innerHTML =
            templates.navbar;
    }

    if (document.getElementById("footer-placeholder")) {
        document.getElementById("footer-placeholder").innerHTML =
            templates.footer;

        loadScript(
            "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",
            () => {
                if (typeof initInstagramSwiper === "function") {
                    initInstagramSwiper();
                }
                if (typeof initLightbox === "function") {
                    initLightbox();
                }
            }
        );
    }
});

/*

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>___ YOUR PAGE TITLE HERE (e.g., Suxnix | Contacts) ___</title>
        <link rel="icon" type="image/png" href="/images/HulkArm.PNG" />
        
    <script src="/template.js"></script>
</head>
<body>

    <div id="navbar-placeholder"></div>

    <div id="hero-placeholder"></div>



    <div id="footer-placeholder"></div>


    <script>
        document.addEventListener("DOMContentLoaded", () => {
            window.renderHero({
                // 2. Custom H1 Title for this page
                title: "___", 
                

                // 3. Current item in the breadcrumb: Home | [THIS TEXT]
                currentTitle: "___", 
                
                // 4. Optional: The link for the current page
                currentLink: "___",
                
                // 5. Optional: Set a custom background image/color
                //    (Uncomment and modify the line below to add custom styling)
                // style: "background-image: url('___ PATH TO IMAGE (e.g., /images/contact-bg.jpg) ___'); background-color: #2a683e;"
                
                // 6. Optional: To remove the decorative shapes, uncomment the line below:
                // shapes: ""
            });
        });
    </script>
    
    <script src="/script.js"></script>
</body>
</html>

*/
