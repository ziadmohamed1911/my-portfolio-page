// ===== Config =====
const EMAIL = "ziadabdellateef7@outlook.com"
const MESSAGE_DURATION = 4000

// ===== Helpers =====
const $ = (id) => document.getElementById(id)

// ===== Mobile menu =====
const menuIcon = $("menu-icon")
const navLinks = document.querySelector(".nav-links")
const menuGlyph = menuIcon?.querySelector("i")

function setMenu(open) {
    navLinks.classList.toggle("active", open)
    menuIcon.setAttribute("aria-expanded", String(open))
    // Swap the hamburger for an X while the menu is open
    menuGlyph?.classList.toggle("fa-bars", !open)
    menuGlyph?.classList.toggle("fa-xmark", open)
}

if (menuIcon && navLinks) {
    menuIcon.addEventListener("click", () => {
        setMenu(!navLinks.classList.contains("active"))
    })

    // Close the menu after clicking a link
    navLinks.addEventListener("click", (event) => {
        if (event.target.closest("a")) setMenu(false)
    })

    // Close on Escape (and return focus to the menu button)
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navLinks.classList.contains("active")) {
            setMenu(false)
            menuIcon.focus()
        }
    })

    // Close when clicking anywhere outside the header
    document.addEventListener("click", (event) => {
        if (!event.target.closest("header")) setMenu(false)
    })
}

// ===== Copy email =====
const contactBtn = $("contact-btn")
const copyMessage = $("copy-message")
let messageTimeout

function showMessage(text) {
    if (!copyMessage) return
    copyMessage.textContent = text
    clearTimeout(messageTimeout) // avoids old timers clearing the new message
    messageTimeout = setTimeout(() => {
        copyMessage.textContent = ""
    }, MESSAGE_DURATION)
}

contactBtn?.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(EMAIL)
        showMessage("My email address has been copied. Feel free to email me!")
    } catch {
        showMessage(`Couldn't copy automatically. My email address is ${EMAIL}`)
    }
})