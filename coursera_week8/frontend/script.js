// require("dotenv").config();

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

    // USER Sign Up Form
    const signUpForm = document.getElementById("signup-form");
    if (signUpForm){
        signUpForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const fname = document.getElementById("signup-fname").value;
            const lname = document.getElementById("signup-lname").value;
            const email = document.getElementById("signup-email").value;
            const password = document.getElementById("signup-password").value;
            console.log({ fname, lname, email, password });

            try{
                const response = await fetch(`http://localhost:3001/api/v1/user/signup`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: email, password: password, 
                        firstName: fname, lastName: lname })
                });

                const result = await response.json();

                if (response.ok){
                    // console.log(response);
                    console.log('Signup successful, switching to signin');
                    document.getElementById("login-resp").innerHTML = result.message || 'Signup Successful. You can sign in now'
                    document.querySelector(".signup-container").classList.add("hidden");
                    document.querySelector(".login-container").classList.remove("hidden");
                }
                else document.getElementById("signup-resp").innerHTML = result.message || 'Signup failed'
                
            }
            catch(error){
                document.getElementById('signup-resp').innerText = 'Error during signup';
            }

        });
    };

    // USER Login Form
    const LoginForm = document.getElementById("login-form");
    if (LoginForm){
        LoginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;
            try{
                const response = await fetch("http://localhost:3001/api/v1/user/signin", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: email, password: password })
                });

                const result = await response.json();

                if (response.ok){
                    // console.log(response);
                    // console.log('Login successful');
                    localStorage.setItem("Authorization", result.token);
                    document.getElementById("login-resp").innerHTML = result.message || 'Login Successful';
                    
                }
                else document.getElementById("login-resp").innerHTML = result.message || 'Login failed'
                
            }
            catch(error){
                document.getElementById('login-resp').innerText = 'Error during Login';
            }

        });
    };
    
    // ADMIN Sign up form
    const AdminsignUpForm = document.getElementById("admin-signup-form");
    if (AdminsignUpForm){
        AdminsignUpForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const fname = document.getElementById("asignup-fname").value;
            const lname = document.getElementById("asignup-lname").value;
            const email = document.getElementById("asignup-email").value;
            const password = document.getElementById("asignup-password").value;
            try{
                const response = await fetch(`http://localhost:3001/api/v1/admin/signup`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: email, password: password, 
                        firstName: fname, lastName: lname })
                });

                const result = await response.json();

                if (response.ok){
                    // console.log(response);
                    console.log('Signup successful, switching to signin');
                    document.getElementById("admin-login-resp").innerHTML = result.message || 'Signup Successful. You can sign in now'
                    document.querySelector(".admin-signup-container").classList.add("hidden");
                    document.querySelector(".admin-login-container").classList.remove("hidden");
                }
                else document.getElementById("admin-signup-resp").innerHTML = result.message || 'Signup failed'
                
            }
            catch(error){
                document.getElementById('admin-signup-resp').innerText = 'Error during Admin signup';
            }

        });
    };

    // ADMIN Login Form
    const AdminLoginForm = document.getElementById("admin-login-form");
    if (AdminLoginForm){
        AdminLoginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = document.getElementById("alogin-email").value;
            const password = document.getElementById("alogin-password").value;
            try{
                const response = await fetch("http://localhost:3001/api/v1/admin/signin", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: email, password: password })
                });

                const result = await response.json();

                if (response.ok){
                    // console.log(response);
                    // console.log('Login successful');
                    localStorage.setItem("Authorization", result.token);
                    document.getElementById("admin-login-resp").innerHTML = result.message || 'Login Successful';
                    
                }
                else document.getElementById("admin-login-resp").innerHTML = result.message || 'Login failed'
                
            }
            catch(error){
                document.getElementById('admin-login-resp').innerText = 'Error during Admin Login';
            }

        });
    };

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
    document.querySelectorAll(
      ".main, .login-container, .signup-container, .admin-login-container, .admin-signup-container"
    ).forEach(el => el.classList.add("hidden"));
    document.querySelector(".main").classList.remove("hidden");
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

