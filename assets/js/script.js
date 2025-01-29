document.getElementById("loginForm").addEventListener("submit", function(event)
{
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("errorMessage");

    if (email === ""|| password === "") //If they don't enter an email or password, it will prompt an error message that tells them to input their email or password.
    {
        errorMessage.innertext = "Email and Password required";
        errorMessage.style.display = "block";
    }
    else //if they do enter their login info, they will be sent to the grading system. (also their email will be put into the local storage.)
    {
        localStorage.setItem("studentEmail", email)
        window.location.href="/pages/page1/index.html";
    }
});

