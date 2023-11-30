import { studentData } from "./studentData.js";
import { calculateClassroomAverage } from "./calculateClassroomAverage.js";


export function renderStudentTable(table, data,) {
    let addStudentButton = document.getElementById("addStudent");
    addStudentButton.addEventListener("click", addStudent)

    function addStudent() {
        let newStudentId = studentData.length + 1;
        let newStudentName = prompt("Enter Your Name")
        let newStudentAddress = prompt("Enter Your Address")
        let newStudentGrade = prompt("Enter Your Grade")
        if (newStudentName === null || newStudentAddress === null || newStudentGrade === null) {
            alert("You cancelled the prompt")
            return;
        } else {
            newStudentGrade = parseInt(newStudentGrade);
            if (isNaN(newStudentGrade)) {
                alert("Please Enter Valid Number");
                return;
            }
            let newStudent = {
                id: newStudentId,
                name: newStudentName,
                address: newStudentAddress,
                averageGrade: newStudentGrade,
            }
            studentData.push(newStudent);
        }

        let table = document.getElementById("student-table")
        let row = table.insertRow();

        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);

        cell1.textContent = newStudentId;
        cell2.textContent = newStudentName;
        cell3.textContent = newStudentAddress;
        cell4.id = "studentAverage";

        let averageInput = document.createElement("input");
        averageInput.type = "number";
        averageInput.value = newStudentGrade;
        cell4.appendChild(averageInput);

        calculateClassroomAverage(studentData);
        averageInput.addEventListener("change", updateGrade)
    }



    for (let i = 0; i < studentData.length; i++) {
        let table = document.getElementById("student-table")
        let student = studentData[i];
        let row = table.insertRow();

        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);

        cell1.textContent = student.id;
        cell2.textContent = student.name;
        cell3.textContent = student.address;
        cell4.id = "studentAverage";

        let averageInput = document.createElement("input");
        averageInput.type = "number";
        averageInput.value = student.averageGrade;
        averageInput.placeholder = student.averageGrade;
        cell4.appendChild(averageInput);

        averageInput.addEventListener("change", updateGrade);
    }
}



export function updateGrade(event) {
    let newGrade = event.target.value;
    let studentId = event.target.parentElement.parentElement.cells[0].textContent;
    let student = studentData.find(student => student.id === parseInt(studentId));

    student.averageGrade = newGrade;

    calculateClassroomAverage(studentData);
}


