const menuIcon = document.getElementById("menu-icon")
const navLinks = document.querySelector(".nav-links")
const downloadCvBtn = document.getElementById("download-cv-btn")
const contactBtn = document.getElementById("contact-btn")
const copyMessage= document.getElementById("copy-message")
const githubBtn = document.getElementById("github-btn")
const githubIcon = document.getElementById("github-icon")
const linkedinIcon = document.getElementById("linkedin-icon")
const converterGithubRepoBtn = document.getElementById("converter-github-repo-btn")
const converterLiveDemoBtn = document.getElementById("converter-live-demo-btn")
const passwordGithubRepoBtn = document.getElementById("password-github-repo-btn")
const passowrdLiveDemoBtn = document.getElementById("password-live-demo-btn")

menuIcon.onclick = () => {
    navLinks.classList.toggle("active")
}

downloadCvBtn.addEventListener ("click", () => {
    const a =document.createElement("a")
    a.href = "files/Ziad_Mohamed_CV.docx"
    a.download = "Ziad_Mohamed_CV.docx"
    a.click()
})

contactBtn.addEventListener ("click", async () => {
    try {
        await navigator.clipboard.writeText("ziadabdellateef7@outlook.com")
        copyMessage.textContent = "My email address has been copied. Feel free to email me!"
    }catch (error){
        copyMessage.textContent= `Couldn't copy automatically. My email address is "ziadabdellateef7@outlook.com"`
    }
    
    setTimeout(() => {
        copyMessage.textContent = ""
    }, 4000)
})

githubBtn.addEventListener ("click", () => {
    window.open("https://github.com/ziadmohamed1911", "_blank", "noopener")
})


githubIcon.addEventListener ("click", () => {
    window.open("https://github.com/ziadmohamed1911", "_blank", "noopener")
})

linkedinIcon.addEventListener ("click", () => {
    window.open("https://www.linkedin.com/in/ziad-mohamed-905a2129b/", "_blank", "noopener")
})

converterGithubRepoBtn.addEventListener ("click", () => {
    window.open("https://github.com/ziadmohamed1911/unit-converter", "_blank", "noopener")
})

converterLiveDemoBtn.addEventListener ("click", () => {
    window.open("https://ziadmohamed1911.github.io/unit-converter/", "_blank", "noopener")
})

passwordGithubRepoBtn.addEventListener ("click", () => {
    window.open("https://github.com/ziadmohamed1911/password-generator", "_blank", "noopener")
})

passowrdLiveDemoBtn.addEventListener ("click", () => {
    window.open("https://ziadmohamed1911.github.io/password-generator/", "_blank", "noopener")
})