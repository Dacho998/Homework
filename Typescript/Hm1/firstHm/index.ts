import { Student, calculateAverageGrade } from './students';
import { Course, CourseManager, getGradeLevel,getTopStudents, Grade } from './class';


const students: Student[] = [
    {
        id: 1,
        name: "David Krstevski",
        age: 19,
        grades: [6, 7, 8]
    },
    {
        id: 2,
        name: "Vojdan Krstevski",
        age: 20,
        grades: [7, 9, 10]
    },
    {
        id: 3,
        name: "Radmila Jovanoska",
        age: 22,
        grades: [9, 10, 9]
    },
    {
        id: 4,
        name: "Damjan Stankovski",
        age: 24,
        grades: [7, 8, 10]
    }
];


const courseManager = new CourseManager();


const courses: Course[] = [
{
   id: 1,
    name: "Typescript",
    students: students,
    instructor: "Ivo Kostvoski",
    maxStudents: 30
},
{
        id: 2,
        name: "SQL",
        students: [],
        instructor: "Ivo Kostvoski",
        maxStudents: 30
},
{
        id: 3,
        name: "Node.js",
        students: [],
        instructor: "Ivo Kostvoski",
        maxStudents: 30
 }
];

courses.forEach(course => courseManager.addCourse(course));

    students.forEach(student => {
        console.log(`${student.name} grades:`);
        
        courses.forEach((course, index) => {
            const grade = student.grades[index];
           if(grade){
            console.log(`${course.name}:${grade}`);
           } else {
            console.log(`${course.name}: No grade available`);
           }
        });
    });

students.forEach(student => {
    const avg = calculateAverageGrade(student.grades);
    const gradeLevel = getGradeLevel(student.age);
    console.log(`${student.name} (Age ${student.age}) is a ${gradeLevel} with an average grade of ${Math.trunc(avg)}. Instructor: ${courses[0].instructor}`);
});

const topStudent = getTopStudents(courses[0], 1);
if (topStudent) {
    console.log(`Top student is ${topStudent[0].name} with an average grade of ${Math.trunc(calculateAverageGrade(topStudent[0].grades))}.`);
} else {
    console.log("No top student found.");
}

