/* ShadowYar Portfolio — Mobile Navigation */

// Find the navigation container and the button that opens its mobile menu.
const navigation = document.querySelector(".nav");
const menuButton = document.querySelector(".menu");

// Only attach the event handler when both elements exist on the current page.
if (navigation && menuButton) {
    menuButton.addEventListener("click", () => {
        // Toggle the CSS class that makes the mobile navigation visible.
        const isOpen = navigation.classList.toggle("open");

        // Keep the accessibility state in sync with the visible menu.
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the mobile menu after a visitor selects a navigation link.
    navigation.querySelectorAll("nav a").forEach((link) => {
        link.addEventListener("click", () => {
            navigation.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}
