document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("errorMessage");

    if(loginForm) {
        loginForm.addEventListener("submit", function(event){
            event.preventDefault();
            if(!emailInput.value ||!passwordInput.value) {
                errorMessage.textContent = "Email and password are required.";
                errorMessage.style.display = "block";
            }
            else {
                localStorage.setItem("loggedIn", "true");
                window.location.href = "/pages/page1/gradeManagement.html";
            }
        });
    }
});
