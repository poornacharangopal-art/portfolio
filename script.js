```javascript
// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menuToggle")
const navLinks = document.getElementById("navLinks")

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open")

    menuToggle.setAttribute("aria-expanded", String(isOpen))
    menuToggle.textContent = isOpen ? "✕" : "☰"
})

// Close mobile navigation after clicking a link.

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open")
        menuToggle.setAttribute("aria-expanded", "false")
        menuToggle.textContent = "☰"
    })
})

// =========================
// PROJECT FILTERS
// =========================

const filterButtons = document.querySelectorAll(".filter-button")
const projectCards = document.querySelectorAll(".project-card")

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedFilter = button.dataset.filter

        // Update active filter button.
        filterButtons.forEach((item) => {
            item.classList.remove("active")
        })

        button.classList.add("active")

        // Display projects matching the selected category.
        projectCards.forEach((card) => {
            const category = card.dataset.category

            const shouldShow =
                selectedFilter === "all" ||
                category === selectedFilter

            card.classList.toggle("hidden", !shouldShow)
        })
    })
})

// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(".reveal")

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible")
                    currentObserver.unobserve(entry.target)
                }
            })
        },
        {
            threshold: 0.12,
        }
    )

    revealElements.forEach((element) => {
        observer.observe(element)
    })
} else {
    // Fallback for older browsers.
    revealElements.forEach((element) => {
        element.classList.add("visible")
    })
}

// =========================
// DYNAMIC FOOTER YEAR
// =========================

const currentYear = document.getElementById("currentYear")

currentYear.textContent = new Date().getFullYear()
```
