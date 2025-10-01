document.addEventListener("DOMContentLoaded", function () {
    // --- Image Gallery ---
    const mainImage = document.getElementById("main-product-image");
    const thumbnails = document.querySelectorAll(".thumbnail-image");

    if (mainImage && thumbnails.length) {
        thumbnails.forEach((thumbnail) => {
            thumbnail.addEventListener("click", function () {
                // Update main image source
                mainImage.src = this.src;

                // Update active class
                thumbnails.forEach((t) => t.classList.remove("active"));
                this.classList.add("active");
            });
        });
    }

    // --- Quantity Selector ---
    const quantityInput = document.getElementById("quantity-input");
    const plusBtn = document.getElementById("quantity-plus");
    const minusBtn = document.getElementById("quantity-minus");

    if (quantityInput && plusBtn && minusBtn) {
        plusBtn.addEventListener("click", () => {
            quantityInput.value = parseInt(quantityInput.value) + 1;
        });

        minusBtn.addEventListener("click", () => {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });
    }

    // --- Info Tabs ---
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabPanels = document.querySelectorAll(".tab-panel");

    if (tabButtons.length && tabPanels.length) {
        tabButtons.forEach((button) => {
            button.addEventListener("click", function () {
                const targetPanelId = this.getAttribute("data-target");

                // Update button active state
                tabButtons.forEach((btn) => btn.classList.remove("active"));
                this.classList.add("active");

                // Update panel active state
                tabPanels.forEach((panel) => {
                    if ("#" + panel.id === targetPanelId) {
                        panel.classList.add("active");
                    } else {
                        panel.classList.remove("active");
                    }
                });
            });
        });
    }
});
