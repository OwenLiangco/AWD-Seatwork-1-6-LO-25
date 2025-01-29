document.getElementById("gradeForm")?.addEventListener("submit", function(event)
{
    event.preventDefault();
    let grades = [];
    for (let i = 1; i <= 5; i++)
    {
        grades.push(parseFloat(document.getElementById(`grade${i}`).value));
    }
    let gwa = grades.reduce((a, b) => a + b, 0) / grades.length;
    document.getElementById("result").innerText= "GWA: " + gwa.toFixed(2); //this is where the computation after they input their 5 Grades.


let table = document.getElementById("gradeTable"); //then it will display it inside a table.
table.innerHTML = `
                <tr>
                <th>Grade 1</th>
                <th>Grade 2</th>
                <th>Grade 3</th>
                <th>Grade 4</th>
                <th>Grade 5</th>
                <th>GWA</th>
                </tr>
                <tr>
                <td>${grades[0]}</td>
                <td>${grades[1]}</td>
                <td>${grades[2]}</td>
                <td>${grades[3]}</td>
                <td>${grades[4]}</td>
                <td>${gwa.toFixed(2)}</td>
                </tr>

    `;
});

document.getElementById("logoutButton")?.addEventListener("click", function() //they will be sent back to the login page.
{
    localStorage.removeItem("studentEmail");
    window.location.href = "/index.html";
});