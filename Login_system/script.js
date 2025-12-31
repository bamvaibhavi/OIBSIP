// --- 1. Toggle Forms ---
function showRegister() {
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("register-form").classList.remove("hidden");
}

function showLogin() {
    document.getElementById("register-form").classList.add("hidden");
    document.getElementById("login-form").classList.remove("hidden");
}

// --- 2. Register Function ---
function register() {
    const user = document.getElementById("reg-user").value;
    const pass = document.getElementById("reg-pass").value;

    if(user === "" || pass === "") {
        alert("Please fill in all fields");
        return;
    }

    // Save to LocalStorage (Simulates a Database)
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    alert("Registration Successful! Please Login.");
    showLogin();
}

// --- 3. Login Function ---
function login() {
    const enteredUser = document.getElementById("login-user").value;
    const enteredPass = document.getElementById("login-pass").value;

    // Get stored data
    const storedUser = localStorage.getItem("username");
    const storedPass = localStorage.getItem("password");

    if(enteredUser === storedUser && enteredPass === storedPass) {
        // Create a "Session"
        localStorage.setItem("loggedInUser", enteredUser);
        
        // Redirect to Secured Page
        window.location.href = "welcome.html";
    } else {
        alert("Invalid Username or Password");
    }
}