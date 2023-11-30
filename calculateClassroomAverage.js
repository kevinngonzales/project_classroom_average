import { studentData } from "./studentData.js";



export function calculateClassroomAverage(studentData) {
let studentGradesArray = studentData.map(student => student.averageGrade);
let gradesTotal = studentGradesArray.reduce((acc, current) => {
        return (parseInt(acc)) + (parseInt(current)); 
    },0);

let averageGrade = gradesTotal / studentData.length;
averageGrade = averageGrade.toFixed(2);
let classroomAverage = document.getElementById("classroomAverage");
classroomAverage.innerHTML = averageGrade;

return averageGrade; 
}

