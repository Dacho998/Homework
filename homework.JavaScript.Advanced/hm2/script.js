// All students with an average grade higher than 3 =====>>> DONE 
// All female student names with an average grade of 5 =====>>> DONE 
// All male student full names who live in Skopje and are over 18 years old =====>>> DONE
// The average grades of all female students over the age of 24 =====>>> DONE
// All male students with a name starting with B and average grade over 2 =====>>> DONE

const ght3 = document.getElementById('ght3')
const favg5 = document.getElementById('favg5')
const ams = document.getElementById('ams')
const fage24 = document.getElementById('fage24')
const bStudents = document.getElementById('bStudents')

const studentsUrl = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"

function fetchUrl() {
     return fetch(studentsUrl)  
        .then(response => response.text()) 
        .then(text => {
            let parsedData = JSON.parse(text);  
            return parsedData;  
        })
        .catch((error) => {
            console.error(`There was a problem fetching the data: ${error}`);  
        });
};

function gradeHigherThan3(students) {
    let output1 = document.getElementById('output1');
    const grades = students.filter((student)=> student.averageGrade > 3);
    output1.innerHTML = '';
    grades.forEach ((student)=>{
        output1.innerHTML += `
        Full name: ${student.firstName} ${student.lastName}<br>
           Grade: ${student.averageGrade}<hr>
        `
    })
    console.log(grades)
    
};

function femaleStudentsAvg5(fstudentsAvg5) {
    let output2 = document.getElementById ('output2');
    const femaleStudents5 = fstudentsAvg5.filter((student)=>student.gender === 'Female' && student.averageGrade === 5);
    output2.innerHTML='';
    femaleStudents5.forEach ((student)=>{
        output2.innerHTML += `
           Name: ${student.firstName} <br>
           Grade: ${student.averageGrade}<br>
           Gender : ${student.gender}<br>
           <hr>
    `
});
console.log (femaleStudents5)
};


function adultMaleStudensSk(maleStudentsSk) {
   let output3 = document.getElementById('output3');
   const adultsMaleSk = maleStudentsSk.filter((student)=>student.gender === 'Male' && student.city === 'Skopje' && student.age > 18);
   output3.innerHTML='';
   adultsMaleSk.forEach((student) => {
    output3.innerHTML += `
           Full name: ${student.firstName} ${student.lastName}<br>
           Age: ${student.age}<br>
           Gender : ${student.gender}<br>
           City : ${student.city}<br>
           <hr>
    `
   })
   console.log(adultsMaleSk);
};

function gradeFStudent24(femaleS24) {
    let output4 = document.getElementById('output4');
    const femaleStudents24 = femaleS24.filter((student) => student.gender === 'Female' && student.age > 24);
    output4.innerHTML = '';
    femaleStudents24.forEach((student) => {
        output4.innerHTML += `
           Full name: ${student.firstName} ${student.lastName}<br>
           Age: ${student.age}<br>
           grade : ${student.averageGrade}<br>
           Gender : ${student.gender}<br>
           <hr>
        `
    })
    console.log(femaleStudents24)
};

function maleStudentsWithB(studentsWithB) {
    let output5 = document.getElementById('output5');
    const maleStudentsB = studentsWithB.filter((student) => student.gender === 'Male' && student.firstName.startsWith('B') && student.averageGrade > 2)
    output5.innerHTML = '';
    maleStudentsB.forEach((student) => {
        output5.innerHTML += `
           Full name: ${student.firstName} ${student.lastName}<br>
            Gender: ${student.gender}<br>
            Grade: ${student.averageGrade}<br>
            <hr>
        `;
    });

    console.log(maleStudentsB);
};


function fetchedData(callback) {
    fetchUrl().then((data) => {
        callback(data);
    });
};

bStudents.addEventListener('click', () => {
    fetchedData(maleStudentsWithB);
});

fage24.addEventListener('click', () => {
    fetchedData(gradeFStudent24);
});

ams.addEventListener('click', () => {
    fetchedData(adultMaleStudensSk);
});

favg5.addEventListener('click', () => {
    fetchedData(femaleStudentsAvg5);
});

ght3.addEventListener("click", () => {
    fetchedData(gradeHigherThan3);
});
