document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('h2, h3, h4, p, span, label');
    
    elements.forEach(element => {
        if (element.innerHTML.includes('100xCoursera')) {
            element.innerHTML = element.innerHTML
                .replace(/100xCoursera, because/g, '<span class="brand-name">100xCoursera,</span> because')
                .replace(/100xCoursera/g, '<span class="brand-name">100xCoursera</span>')
                .replace(/100xCoursera/g, '<span class="brand-name">100xCoursera</span>');
        }
    });
});


document.getElementById("login-btn").addEventListener("click", function() {
     document.querySelector(".main").classList.add("hidden");
     document.querySelector(".signup-container").classList.add("hidden");
     document.querySelector(".login-container").classList.remove("hidden");
     document.querySelector(".admin-login-container").classList.add("hidden");
     document.querySelector(".admin-signup-container").classList.add("hidden");
});

document.getElementById("signup-btn").addEventListener("click", function() {
    document.querySelector(".main").classList.add("hidden");
    document.querySelector(".login-container").classList.add("hidden");
    document.querySelector(".signup-container").classList.remove("hidden");
    document.querySelector(".admin-login-container").classList.add("hidden");
    document.querySelector(".admin-signup-container").classList.add("hidden");
});

document.getElementById("show-login").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(".signup-container").classList.add("hidden");
    document.querySelector(".login-container").classList.remove("hidden");
    document.querySelector(".admin-login-container").classList.add("hidden");
    document.querySelector(".admin-signup-container").classList.add("hidden");
});

document.getElementById("show-signup").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(".login-container").classList.add("hidden");
    document.querySelector(".signup-container").classList.remove("hidden");
    document.querySelector(".admin-login-container").classList.add("hidden");
    document.querySelector(".admin-signup-container").classList.add("hidden");
});

document.getElementById("navTitle").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".login-container").classList.add("hidden");
    document.querySelector(".signup-container").classList.add("hidden");
    document.querySelector(".admin-login-container").classList.add("hidden");
    document.querySelector(".admin-signup-container").classList.add("hidden");
});

document.getElementById("mainAdminBtn").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(".main").classList.add("hidden");
    document.querySelector(".admin-login-container").classList.add("hidden");
    document.querySelector(".admin-signup-container").classList.remove("hidden");
});

document.getElementById("show-admin-signup").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(".main").classList.add("hidden");
    document.querySelector(".admin-login-container").classList.add("hidden");
    document.querySelector(".admin-signup-container").classList.remove("hidden");
});


document.getElementById("show-admin-login").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(".main").classList.add("hidden");
    document.querySelector(".admin-login-container").classList.remove("hidden");
    document.querySelector(".admin-signup-container").classList.add("hidden");
});

