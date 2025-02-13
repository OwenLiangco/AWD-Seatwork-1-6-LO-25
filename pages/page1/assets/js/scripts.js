document.getElementById("gradeForm")?.addEventListener("submit", function (event) {
    event.preventDefault();
    
    let grades = [];
    let units = [];
    let totalWeightedGrade = 0;
    let totalUnits = 0;

    for (let i = 1; i <= 5; i++) {
        let grade = parseFloat(document.getElementById(`grade${i}`).value);
        let unit = parseFloat(document.getElementById(`unit${i}`).value);

        grades.push(grade);
        units.push(unit);

        totalWeightedGrade += grade * unit;
        totalUnits += unit;
    }

    let gwa = totalWeightedGrade / totalUnits;
    let studentName = document.getElementById("name").value.trim();
    let entry = { grades, units, gwa: gwa.toFixed(2) };

    let records = JSON.parse(localStorage.getItem("gradeRecords")) || [];

    records.push(entry);

    localStorage.setItem("gradeRecords", JSON.stringify(records));

    displayRecords();
});

function displayRecords() {
    let records = JSON.parse(localStorage.getItem("gradeRecords")) || [];
    let table = document.getElementById("gradeTable");
    
    table.innerHTML = `
        <tr>
            <th>Grade 1</th>
            <th>Grade 2</th>
            <th>Grade 3</th>
            <th>Grade 4</th>
            <th>Grade 5</th>
            <th>Units 1</th>
            <th>Units 2</th>
            <th>Units 3</th>
            <th>Units 4</th>
            <th>Units 5</th>
            <th>GWA</th>
        </tr>
    `;

    records.forEach(record => {
        table.innerHTML += `
            <tr>
                <td>${record.grades[0]}</td>
                <td>${record.grades[1]}</td>
                <td>${record.grades[2]}</td>
                <td>${record.grades[3]}</td>
                <td>${record.grades[4]}</td>
                <td>${record.units[0]}</td>
                <td>${record.units[1]}</td>
                <td>${record.units[2]}</td>
                <td>${record.units[3]}</td>
                <td>${record.units[4]}</td>
                <td>${record.gwa}</td>
            </tr>
        `;
    });
}

document.addEventListener("DOMContentLoaded", displayRecords);

function clearRecords() {
    localStorage.removeItem("gradeRecords");
    displayRecords();
}
document.getElementById("logoutButton")?.addEventListener("click", function()
{
    localStorage.removeItem("studentEmail");
});