// require("dotenv").config();
let coursesFetched = false;

document.addEventListener('DOMContentLoaded', function() {
    showAdminOrUser();
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
                    localStorage.setItem("UserAuth", result.token);
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
                    localStorage.setItem("AdminAuth", result.token);
                    document.getElementById("admin-login-resp").innerHTML = result.message || 'Login Successful';
                    showAdminOrUser();          
                }
                else document.getElementById("admin-login-resp").innerHTML = result.message || 'Login failed'
                
            }
            catch(error){
                document.getElementById('admin-login-resp').innerText = 'Error during Admin Login';
                console.log(error.message)
            }

        });

        
        
        document.getElementById("mainBtn").addEventListener("click", async function (){
            if (!coursesFetched){
            const coursesDiv = document.querySelector(".courses");
            // const heading = document.createElement("h4");
            // heading.textContent = "Courses"
            // coursesDiv.appendChild(heading);

            const response = await fetch("http://localhost:3001/api/v1/course/preview" , {
                method: "GET"
            });

            const data = await response.json();
            const courses = data.courses; 
            
            courses.forEach(course => {
                let courseTitle = document.createElement('h3');
                let courseDesc = document.createElement('p');
                let coursePrice = document.createElement('p');
                
                courseTitle.textContent = course.title;
                courseDesc.textContent = course.description;
                coursePrice.textContent = `Price: ${course.price}`;

                const SingleC = document.createElement('div');
                SingleC.appendChild(courseTitle);
                SingleC.appendChild(courseDesc);
                SingleC.appendChild(coursePrice);
                SingleC.className = "course";
                coursesDiv.appendChild(SingleC);
                coursesFetched = true;
            })
        }    
        })

    };

    const toggles = document.querySelectorAll('.togglePassword');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
        const inputId = this.getAttribute('data-target');
        const input = document.getElementById(inputId);

      if (input.type === 'password') {
            input.type = 'text';
            this.classList.remove('fa-eye');
            this.classList.add('fa-eye-slash'); // Show slashed icon when visible
        } else {
            input.type = 'password';
            this.classList.remove('fa-eye-slash');
            this.classList.add('fa-eye');
        }
        });
    });

});


function showAdminOrUser(){
    let AdminToken = localStorage.getItem('AdminAuth') 
    let UserToken =  localStorage.getItem('UserAuth');
    if (AdminToken){
        document.querySelector(".container").classList.add("hidden");
        document.querySelector(".admin").classList.remove("hidden");
        loadAdminCourses();
    } 
    else if (UserToken) {
        document.querySelector(".container").classList.add("hidden");
        document.querySelector(".user").classList.remove("hidden");
    } 
}

async function loadAdminCourses(){
    console.log('loadAdminCourses() called');
    const AdminToken = localStorage.getItem('AdminAuth');
    try{
        const response = await fetch("http://localhost:3001/api/v1/admin/course/bulk" , {
            method: "GET",
            headers : {
                "Authorization": `${AdminToken}` 
            }        
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const  { courses } = await response.json();
        if (!courses){
            console.error("No courses for this user")
        }

        if (courses.length === 0){
            let noCourse = document.createElement("h5");
            noCourse.textContent = "You have no course published yet"
            document.querySelector(".admin").appendChild(noCourse);
        }

        const adminCoursesDiv = document.querySelector(".admin-courses");
        adminCoursesDiv.innerHTML = '';

        courses.forEach(course => {
            let courseTitle = document.createElement('h3');
                let courseDesc = document.createElement('p');
                let coursePrice = document.createElement('p');
                
                courseTitle.textContent = course.title;
                courseDesc.textContent = course.description;
                coursePrice.textContent = `Price: ${course.price}`;

                const SingleC = document.createElement('div');
                SingleC.appendChild(courseTitle);
                SingleC.appendChild(courseDesc);
                SingleC.appendChild(coursePrice);
                SingleC.className = "course";
                adminCoursesDiv.appendChild(SingleC);
        })
    }catch(error){
        console.log('Error in fetching the courses' ,error.message);
        //res.json({ message : 'Error in fetching the courses', error: error.message})
    }
}



document.getElementById("login-btn").addEventListener("click", function() {
     document.querySelector(".main").classList.add("hidden");
     document.querySelector(".signup-container").classList.add("hidden");
     document.querySelector(".login-container").classList.remove("hidden");
     document.querySelector(".admin-login-container").classList.add("hidden");
     document.querySelector(".admin-signup-container").classList.add("hidden");
     document.querySelector(".courses").classList.add("hidden");
});

document.getElementById("signup-btn").addEventListener("click", function() {
    document.querySelector(".main").classList.add("hidden");
    document.querySelector(".login-container").classList.add("hidden");
    document.querySelector(".signup-container").classList.remove("hidden");
    document.querySelector(".admin-login-container").classList.add("hidden");
    document.querySelector(".admin-signup-container").classList.add("hidden");
    document.querySelector(".courses").classList.add("hidden");
});

document.getElementById("show-login").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(".signup-container").classList.add("hidden");
    document.querySelector(".login-container").classList.remove("hidden");
    document.querySelector(".admin-login-container").classList.add("hidden");
    document.querySelector(".admin-signup-container").classList.add("hidden");
    document.querySelector(".courses").classList.add("hidden");
});

document.getElementById("show-signup").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(".login-container").classList.add("hidden");
    document.querySelector(".signup-container").classList.remove("hidden");
    document.querySelector(".admin-login-container").classList.add("hidden");
    document.querySelector(".admin-signup-container").classList.add("hidden");
    document.querySelector(".courses").classList.add("hidden");
});

document.getElementById("navTitle").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelectorAll(
      ".main, .login-container, .signup-container, .admin-login-container, .admin-signup-container"
    ).forEach(el => el.classList.add("hidden"));
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".courses").classList.add("hidden");
});

document.getElementById("mainAdminBtn").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(".main").classList.add("hidden");
    document.querySelector(".admin-login-container").classList.add("hidden");
    document.querySelector(".admin-signup-container").classList.remove("hidden");
    document.querySelector(".courses").classList.add("hidden");
});

document.getElementById("show-admin-signup").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(".main").classList.add("hidden");
    document.querySelector(".admin-login-container").classList.add("hidden");
    document.querySelector(".admin-signup-container").classList.remove("hidden");
    document.querySelector(".courses").classList.add("hidden");
});


document.getElementById("show-admin-login").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(".main").classList.add("hidden");
    document.querySelector(".admin-login-container").classList.remove("hidden");
    document.querySelector(".admin-signup-container").classList.add("hidden");
    document.querySelector(".courses").classList.add("hidden");
});

