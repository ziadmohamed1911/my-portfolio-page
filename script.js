// ===== Config =====
const EMAIL = "ziadabdellateef7@outlook.com"
const CV_PATH = "files/Ziad_Mohamed_CV.docx"
const MESSAGE_DURATION = 4000

// Element id -> URL to open in a new tab
const LINKS = {
    "github-btn": "https://github.com/ziadmohamed1911",
    "github-icon": "https://github.com/ziadmohamed1911",
    "linkedin-icon": "https://www.linkedin.com/in/ziad-mohamed-905a2129b/",
    "converter-github-repo-btn": "https://github.com/ziadmohamed1911/unit-converter",
    "converter-live-demo-btn": "https://ziadmohamed1911.github.io/unit-converter/",
    "password-github-repo-btn": "https://github.com/ziadmohamed1911/password-generator",
    "password-live-demo-btn": "https://ziadmohamed1911.github.io/password-generator/",
}

// ===== Helpers =====
const $ = (id) => document.getElementById(id)

function openInNewTab(url) {
    window.open(url, "_blank", "noopener,noreferrer")
}

// ===== Mobile menu =====
const menuIcon = $("menu-icon")
const navLinks = document.querySelector(".nav-links")

if (menuIcon && navLinks) {
    menuIcon.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active")
        menuIcon.setAttribute("aria-expanded", String(isOpen))
    })

    // Close the menu after clicking a link
    navLinks.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
            navLinks.classList.remove("active")
            menuIcon.setAttribute("aria-expanded", "false")
        }
    })
}

// ===== Download CV =====
$("download-cv-btn")?.addEventListener("click", () => {
    const link = document.createElement("a")
    link.href = "files/Ziad_Mohamed_CV.docx"
    link.download = "files/Ziad_Mohamed_CV.docx".split("/").pop()
    link.click()
})

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

// ===== External links =====
Object.entries(LINKS).forEach(([id, url]) => {
    $(id)?.addEventListener("click", () => openInNewTab(url))
})