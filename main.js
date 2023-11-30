import { studentData } from "./studentData.js";
import { calculateClassroomAverage } from "./calculateClassroomAverage.js";
import { renderStudentTable, updateGrade } from "./studentTable.js";

document.addEventListener("DOMContentLoaded", function () {

    renderStudentTable();
    calculateClassroomAverage(studentData);
    document.addEventListener("change", updateGrade);

});