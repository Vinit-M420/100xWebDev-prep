let coursesFetched = false;

document.addEventListener('DOMContentLoaded', function() {
    styleBrandNames();
    showAdminOrUser();
    setupPasswordToggles();
    setupFormListeners();
    setupNavigationListeners();
    setupModal();
    setupCoursePreview();
});

    function styleBrandNames() {
        const elements = document.querySelectorAll('h2, h3, h4, p, span, label');
        elements.forEach(element => {
            if (element.innerHTML.includes('100xCoursera')) {
                element.innerHTML = element.innerHTML
                    .replace(/100xCoursera, because/g, '<span class="brand-name">100xCoursera,</span> because')
                    .replace(/100xCoursera/g, '<span class="brand-name">100xCoursera</span>')
            }
        });
    }

    async function handleSignup(e, apiEndpoint, formSelectors, responseSelector, switchContainer){
        e.preventDefault();
        const {fnameId, lnameId, emailId, passwordId} = formSelectors;
        const fname = document.getElementById(fnameId).value;
        const lname = document.getElementById(lnameId).value;
        const email = document.getElementById(emailId).value;
        const password = document.getElementById(passwordId).value;

        try{
            const response = await fetch(`http://localhost:3001/api/v1/${apiEndpoint}` , {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email, password: password, 
                        firstName: fname, lastName: lname })
            });
            const result = await response.json();
            const respEl = document.getElementById(responseSelector);

            if (response.ok){
                respEl.innerHTML = result.message || 'Signup Successful. You can sign in now';
                document.querySelector(switchContainer.from).classList.add('hidden');
                document.querySelector(switchContainer.to).classList.remove('hidden');
            } else {
                respEl.innerHTML = result.message || 'Signup failed';
            }
        }
        catch(error){
            document.getElementById(responseSelector).innerText = 'Error during signup';
            console.error(error);
        }
    }

    async function handleLogin(e, apiEndpoint, emailId, passwordId, responseSelector, tokenKey){
        e.preventDefault();
        const email = document.getElementById(emailId).value;
        const password = document.getElementById(passwordId).value;

        try{
            const response = await fetch(`http://localhost:3001/api/v1/${apiEndpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
                });
            const result = await response.json();
            const respEl = document.getElementById(responseSelector);
            if (response.ok) {
                localStorage.setItem(tokenKey, result.token);
                respEl.innerHTML = result.message || 'Login Successful';
                showAdminOrUser();
            } else {
                respEl.innerHTML = result.message || 'Login failed';
            }
        }
        catch(error){
            document.getElementById(responseSelector).innerText = 'Error during Login';
            console.error(error);
        }
    }    

    function setupFormListeners(){
        // USER Sign Up Form
        const signUpForm = document.getElementById('signup-form');
        if (signUpForm){
            signUpForm.addEventListener("submit", e => handleSignup(e, "user/signup",
                {fnameId: "signup-fname", lnameId: "signup-lname", 
                emailId: "signup-email" , passwordId: "signup-password"},
                "signup-resp", { from: '.signup-container', to: '.login-container' }
            ));
        };
         // USER Login Form
        const loginForm = document.getElementById("login-form");
        if (loginForm){
        loginForm.addEventListener("submit", e => handleLogin(e, "user/signin",
            "login-email", "login-password", "login-resp", 'UserAuth'
        ));
        };
        // ADMIN Sign Up Form
        const AdminsignUpForm = document.getElementById('admin-signup-form');
        if (AdminsignUpForm){
            AdminsignUpForm.addEventListener("submit", e => handleSignup(e, "admin/signup",
                {fnameId: "asignup-fname", lnameId: "asignup-lname", 
                emailId: "asignup-email" , passwordId: "asignup-password"},
                "admin-signup-resp", { from: '.admin-signup-container', to: '.admin-login-container' }
            ));
        };
        // ADMIN Login Form
        const AdminLoginForm = document.getElementById("admin-login-form");
        if (AdminLoginForm){
        AdminLoginForm.addEventListener("submit", e => handleLogin(e, "admin/signin",
            "alogin-email", "alogin-password", "admin-login-resp", 'AdminAuth'
        ));
    };
    }
        
function setupCoursePreview() {    
    document.getElementById("mainBtn").addEventListener("click", async function (){
        if (!coursesFetched){
        const coursesDiv = document.querySelector(".courses");

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
}

function setupPasswordToggles(){
    const toggles = document.querySelectorAll('.togglePassword');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
        const inputId = this.getAttribute('data-target');
        const input = document.getElementById(inputId);

    if (input.type === 'password') {
            input.type = 'text';
            this.classList.remove('fa-eye');
            this.classList.add('fa-eye-slash'); // Show slashed icon when visible
    } else{
            input.type = 'password';
            this.classList.remove('fa-eye-slash');
            this.classList.add('fa-eye');
        }
        });
    });
}


function showAdminOrUser(){
    let AdminToken = localStorage.getItem('AdminAuth') 
    let UserToken =  localStorage.getItem('UserAuth');
    if (AdminToken){
        document.querySelector(".container").classList.add("hidden");
        document.querySelector(".admin").classList.remove("hidden");
        document.querySelector("#navButtons").classList.add("disabled-btn")
        loadAdminCourses();
    } 
    else if (UserToken) {
        document.querySelector(".container").classList.add("hidden");
        document.querySelector(".user").classList.remove("hidden");
    } 
    else document.querySelector(".container").classList.remove("hidden");
}

async function loadAdminCourses() {
    console.log('loadAdminCourses() called');
    const AdminToken = localStorage.getItem('AdminAuth');
    if (!AdminToken) {
        console.error('No admin token found');
        return;
    }

    try {
        const adminHeader = document.querySelector(".admin-header");
        
        // Check if admin name already exists before making API call
        const existingName = adminHeader.querySelector('h3');
        if (!existingName) {
            const adminName = await fetch("http://localhost:3001/api/v1/admin/me", {
                method: "GET",
                headers: {
                    "Authorization": `${AdminToken}`
                }
            });
            
            const adminNameData = await adminName.json();
            const adminFname = document.createElement('h3');
            adminFname.textContent = `Hi ${adminNameData.firstName}`;
            adminHeader.appendChild(adminFname);
        }

        const response = await fetch("http://localhost:3001/api/v1/admin/course/bulk", {
            method: "GET",
            headers: { "Authorization": `${AdminToken}` }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const { courses } = await response.json();
        
        const adminCoursesDiv = document.querySelector(".admin-courses");
        adminCoursesDiv.innerHTML = '';

        if (!courses || courses.length === 0) {
            let noCourse = document.createElement("h5");
            noCourse.textContent = "You have no courses published yet";
            adminCoursesDiv.appendChild(noCourse);
            return;
        }

        courses.forEach(course => {
            let courseTitle = document.createElement('h3');
            let courseDesc = document.createElement('p');
            let coursePrice = document.createElement('p');
            let editBtn = document.createElement('button');
            let deleteBtn = document.createElement('button');

            courseTitle.textContent = course.title;
            courseDesc.textContent = course.description;
            coursePrice.textContent = `Price: ${course.price}`;

            editBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Edit';
            deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i> Delete';

            editBtn.style.marginRight = '10px';
            editBtn.style.color = 'black';
            editBtn.style.border = 'none';
            editBtn.style.padding = '8px 12px';
            editBtn.style.borderRadius = '4px';
            editBtn.style.cursor = 'pointer'; 

            deleteBtn.style.backgroundColor = '#dc3545';
            deleteBtn.style.color = 'white';
            deleteBtn.style.border = 'none';
            deleteBtn.style.padding = '8px 12px';
            deleteBtn.style.borderRadius = '4px';
            deleteBtn.style.cursor = 'pointer';

            deleteBtn.addEventListener("click", () => {
                console.log('Delete course:', course._id);
                if (confirm(`Are you sure you want to delete "${course.title}"?`)) {
                    deleteCourse(course._id, AdminToken);
                }    
            });
            

            const SingleC = document.createElement('div');
            SingleC.appendChild(courseTitle);
            SingleC.appendChild(courseDesc);
            SingleC.appendChild(coursePrice);
            SingleC.appendChild(editBtn);
            SingleC.appendChild(deleteBtn);
            SingleC.className = "course";
            adminCoursesDiv.appendChild(SingleC);
        });

    } catch (error) {
        console.log('Error in fetching the courses:', error.message);
    }
}

function setupModal() {
        const modal = document.getElementById('courseModal');
        const addCoursesBtn = document.getElementById('add-courses');
        const closeModalBtn = document.getElementById('closeModal');
        const cancelBtn = document.getElementById('cancelBtn');
        const addCourseForm = document.getElementById('addCourseForm');

        // Open modal
        addCoursesBtn.addEventListener('click', () => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });

        // Close modal function
        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto'; // Restore scrolling
            addCourseForm.reset(); // Clear form
        }

        // Close modal events
        closeModalBtn.addEventListener('click', closeModal);
        cancelBtn.addEventListener('click', closeModal);

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });

        // Handle form submission
        addCourseForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const AdminToken = localStorage.getItem('AdminAuth');
            if (!AdminToken) {
                alert('No admin token found. Please login again.');
                return;
            }

            const formData = new FormData(addCourseForm);
            const courseData = {
                title: formData.get('title'),
                description: formData.get('description'),
                price: parseFloat(formData.get('price')),
                imageURL: formData.get('imageURL') || ''
            };

            try {
                const response = await fetch('http://localhost:3001/api/v1/admin/course', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${AdminToken}`
                    },
                    body: JSON.stringify(courseData)
                });

                if (response.ok) {
                    const result = await response.json();
                    alert('Course created successfully!');
                    closeModal();
                    // Reload courses to show the new one
                    loadAdminCourses();
                } else {
                    const error = await response.json();
                    alert(`Error: ${error.message || 'Failed to create course'}`);
                }
            } catch (error) {
                console.error('Error creating course:', error);
                alert('Error creating course. Please try again.');
            }
        });
    }

async function deleteCourse(courseId, token){
    try{
        const response = await fetch("http://localhost:3001/api/v1/admin/course" , {
            method: "DELETE",
            headers: {"Authorization": `${token}`, 
                      "Content-Type": "application/json"},
            body: JSON.stringify({ courseId: courseId })   
    });
    
        if (response.ok){
            const result = await response.json();
            alert('Course deleted successfully!');
            loadAdminCourses();
        }
        else {
            const error = await response.json();
            alert(`Error: ${error.message || 'Failed to delete course'}`);
        }
    }
    catch(error){
        console.error('Error deleting course:', error);
        alert('Error deleting course. Please try again.');
    }
}

function setupNavigationListeners() {
  const hideAll = () => {
    document.querySelectorAll('.main, .login-container, .signup-container, .admin-login-container, .admin-signup-container, .courses')
      .forEach(el => el.classList.add('hidden'));
  };

  document.getElementById('login-btn').addEventListener('click', () => 
    { hideAll(); 
      document.querySelector('.login-container').classList.remove('hidden'); });

  document.getElementById('signup-btn').addEventListener('click', () => 
    { hideAll(); document.querySelector('.signup-container').classList.remove('hidden'); });

  document.getElementById('show-login').addEventListener('click', e => 
    { e.preventDefault(); hideAll(); document.querySelector('.login-container').classList.remove('hidden'); });

  document.getElementById('show-signup').addEventListener('click', e => 
    { e.preventDefault(); hideAll(); document.querySelector('.signup-container').classList.remove('hidden'); });

  document.getElementById('navTitle').addEventListener('click', e => 
    { e.preventDefault(); hideAll(); document.querySelector('.main').classList.remove('hidden'); });

  document.getElementById('mainAdminBtn').addEventListener('click', e => 
    { e.preventDefault(); hideAll(); document.querySelector('.admin-signup-container').classList.remove('hidden'); });

  document.getElementById('show-admin-signup').addEventListener('click', e => 
    { e.preventDefault(); hideAll(); document.querySelector('.admin-signup-container').classList.remove('hidden'); });

  document.getElementById('show-admin-login').addEventListener('click', e => 
    { e.preventDefault(); hideAll(); document.querySelector('.admin-login-container').classList.remove('hidden'); });

  document.getElementById('admin-logout').addEventListener('click', e => 
    { e.preventDefault(); localStorage.removeItem('AdminAuth'); showAdminOrUser(); });
}

