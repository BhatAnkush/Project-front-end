function signup() {
    var username = document.getElementById("signupUsername").value;
    var password = document.getElementById("signupPassword").value;
   
   
    
    // Check if username already exists
    if (localStorage.getItem(username) !== null) {
        alert("Username already exists. Please choose another one.");
        return;
    }
    var passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{6,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must contain at least one uppercase letter, one special character, one number, and be at least 6 characters long.");
        return;
    }


    // Store user details as a JSON object
    var userDetails = {
        username: username,
        password: password
    };


    localStorage.setItem(username, JSON.stringify(userDetails));
    alert("Signup successful! Redirecting to login page...");
    document.getElementById("signupForm").reset();

    window.location.href = 'login.html';

}

function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    // Retrieve user details from local storage
    var userDetailsString = localStorage.getItem(username);

    // Check if userDetailsString exists and parse it into an object
    if (userDetailsString !== null) {
        var userDetails = JSON.parse(userDetailsString);

        // Check if entered password matches stored password
        if (userDetails.password === password) {
            alert("Login successful!");
            window.location.href = 'index.html'
            document.getElementById("loginForm").reset();
        } else {
            alert("Incorrect password. Please try again.");
        }
    } else {
        alert("Username not found. Please sign up.");
    }
}
