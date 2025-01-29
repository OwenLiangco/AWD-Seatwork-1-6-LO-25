document.getElementById("loginForm").addEventListener("submit", function(event)
{
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (email === ""|| password === "")
    {
        errorMessage.innertext = "Email and Password required";
    }
    else
    {
        window.location.href="/pages/page1/index.html";
    }
});
