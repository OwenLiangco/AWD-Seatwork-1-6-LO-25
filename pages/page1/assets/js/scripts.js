document.getElementById("gradeForm")?.addEventListener("submit", function(event)
{
    event.preventDefault();
    let grades = [];
    let units = [];
    let totalWeightedGrade = 0;
    let totalUnits = 0;

    for (let i = 1; i <= 5; i++)
    {
        let grade = parseFloat(document.getElementById(`grade${i}`).value);
        let unit = parseFloat(document.getElementById(`unit${i}`).value);

        grades.push(grade);
        units.push(unit);

        totalWeightedGrade += grade * unit;
        totalUnits += unit;
    }

    let gwa = totalWeightedGrade / totalUnits;
    document.getElementById("result").innerText = "GWA: " + gwa.toFixed(2);

let table = document.getElementById("gradeTable"); //then it will display it inside a table.
table.innerHTML = `
                <tr>
                <th>Grade 1</th>
                <th>Grade 2</th>
                <th>Grade 3</th>
                <th>Grade 4</th>
                <th>Grade 5</th>
                <th>Unit 1</th>
                <th>Unit 2</th>
                <th>Unit 3</th>
                <th>Unit 4</th>
                <th>Unit 5</th>
                <th>GWA</th>
                </tr>
                <tr>
                <td>${grades[0]}</td>
                <td>${grades[1]}</td>
                <td>${grades[2]}</td>
                <td>${grades[3]}</td>
                <td>${grades[4]}</td>
                <td>${units[0]}</td>
                <td>${units[1]}</td>
                <td>${units[2]}</td>
                <td>${units[3]}</td>
                <td>${units[4]}</td>
                <td>${gwa.toFixed(2)}</td>
                </tr>

    `;
});

document.getElementById("logoutButton")?.addEventListener("click", function() //they will be sent back to the login page.
{
    localStorage.removeItem("studentEmail");
    window.location.href = "./index.html";
});