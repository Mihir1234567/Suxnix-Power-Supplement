document.addEventListener("DOMContentLoaded", () => {
    // --- PRODUCT DATA ---
    const allProducts = [
        {
            image: "/images/ourShopP1.avif",
            category: "Fat Burners",
            title: "Amino Energy Health 2kg",
            price: 59.99,
        },
        {
            image: "/images/ourShopP2.avif",
            category: "Nutrition",
            title: "Antiaging and Longevity",
            price: 49.99,
        },
        {
            image: "/images/ourShopP3.avif",
            category: "Burners",
            title: "Box Full of Muscles",
            price: 85.99,
        },
        {
            image: "/images/ourShopP4.avif",
            category: "Medicine",
            title: "Protein Powder 2kg",
            price: 85.99,
        },
        {
            image: "/images/ourShopP5.avif",
            category: "Fat Burners",
            title: "SERIOUR MASS 2kg",
            price: 49.99,
        },
        {
            image: "/images/ourShopP6.avif",
            category: "Nutrition",
            title: "SERIOUR MASS 2kg",
            price: 85.99,
        },
        {
            image: "/images/ourShopP7.avif",
            category: "",
            title: "Suxnix Natural Vitamin Supplement",
            price: 29.99,
        },
        {
            image: "/images/ourShopP8.avif",
            category: "Nutrition",
            title: "Whey Protein Powder",
            price: 49.99,
        },
    ];

    const gridContainer = document.getElementById(
        "suxnix-products-grid-container"
    );
    const priceSlider = document.getElementById("price-range-slider");
    const priceMinValue = document.getElementById("price-min-value");
    const priceMaxValue = document.getElementById("price-max-value");
    const filterButton = document.getElementById("suxnix-filter-button");
    const resultsCount = document.querySelector(".suxnix-results-count");
    const categoryLinks = document.querySelectorAll(".suxnix-category-list a");

    // --- RENDER PRODUCTS FUNCTION ---
    function renderProducts(productsToRender) {
        if (!gridContainer) return;
        gridContainer.innerHTML = "";

        if (productsToRender.length === 0) {
            gridContainer.innerHTML = "<p>No products match your filter.</p>";
            return;
        }

        productsToRender.forEach((product) => {
            const productCard = `
                <div class="suxnix-product-item-card">
                    <div class="suxnix-product-image-wrapper">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <div class="suxnix-product-details">
                        <span class="suxnix-product-category">${
                            product.category || "Uncategorized"
                        }</span>
                        <h3 class="suxnix-product-title">${product.title}</h3>
                        <p class="suxnix-product-price">Tk ${product.price.toFixed(
                            2
                        )}</p>
                        <div class="suxnix-product-actions">
                            <button class="suxnix-cart-button" title="Add to Cart"><i class="fa-solid fa-shopping-cart"></i></button>
                            <button class="suxnix-buy-now-button">Buy Now</button>
                        </div>
                    </div>
                </div>
            `;
            gridContainer.innerHTML += productCard;
        });

        if (resultsCount) {
            resultsCount.textContent = `Showing ${productsToRender.length} of ${allProducts.length} results`;
        }
    }

    // --- EVENT LISTENERS ---

    // Price Slider
    if (priceSlider && priceMinValue && priceMaxValue) {
        priceSlider.addEventListener("input", () => {
            const minPrice = 20; // Fixed minimum as per image
            const maxPrice = parseInt(priceSlider.value);
            priceMinValue.textContent = minPrice;
            priceMaxValue.textContent = maxPrice;
        });
    }

    // Filter Button
    if (filterButton) {
        filterButton.addEventListener("click", () => {
            const maxPrice = parseInt(priceSlider.value);
            let filteredProducts = allProducts.filter(
                (product) => product.price <= maxPrice
            );

            // Apply category filter if active
            const activeCategory = document.querySelector(
                ".suxnix-category-list a.active"
            )?.dataset.category;
            if (activeCategory && activeCategory !== "all") {
                filteredProducts = filteredProducts.filter(
                    (product) => product.category === activeCategory
                );
            }

            renderProducts(filteredProducts);
        });
    }

    // Category Filter
    categoryLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            categoryLinks.forEach((a) => a.classList.remove("active"));
            link.classList.add("active");
            const category = link.dataset.category;
            let filteredProducts = allProducts;

            if (category !== "all") {
                filteredProducts = allProducts.filter(
                    (product) => product.category === category
                );
            }

            renderProducts(filteredProducts);
        });
    });

    // --- INITIAL RENDER ---
    renderProducts(allProducts);
    if (priceMinValue && priceMaxValue) {
        priceMinValue.textContent = 20; // Initial min value
        priceMaxValue.textContent = 280; // Initial max value
    }
    categoryLinks[categoryLinks.length - 1].classList.add("active"); // Set "All" as default
});
