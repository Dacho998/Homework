function Institution(location, capacity) {
    this.id = Date.now();
    this.location = location;
    this.capacity = capacity;
    this.validateCapacity = function () {
        if (capacity < 1) {
            throw new Error('Capacity must be at least 1');
        }
    };
};

function Course(description, price) {
    this.id = Date.now();
    this.description = description;
    this.price = price;
    this.validatePrice = function () {
        if (price < 0) {
            throw new Error('Price must be positive');
        }
    };
};

function Person(email, phone) {
    this.id = Date.now();
    this.email = email;
    this.phone = phone;
    this.validateEmail = function () {
        if (!this.email.includes('@')) {
            throw new Error('Email must have "@"');
        }
    };
};

function Academy(name, start, end, location, capacity) {
    Object.setPrototypeOf(this, new Institution(location, capacity));
    this.name = name;
    this.start = start;
    this.end = end;
    this.students = [];
    this.subjects = [];
    this.numberOfClasses = function () {
        return this.subjects.length * 10;
    };
    this.printStudents = function () {
        this.students.forEach((student) => {
            console.log(student);
        });
    };
    this.printSubjects = function () {
        this.subjects.forEach((subject) =>
            console.log(subject)
        );
    };
    this.printAcademy = function () {
        console.log(this); 
    };
};

function Subject(title, isElective, description, price) {
    Object.setPrototypeOf(this, new Course(description, price));
    this.title = title;
    this.isElective = isElective;
    this.academy = undefined;
    this.students = [];
    this.overrideClasses = function (classes) {
        if (classes < 3) {
            throw new Error("Number of classes can't be less than 3");
        }
        this.NumberOfClasses = classes;
    };
};

function Students(firstName, lastName, age, email, phone) {
    Object.setPrototypeOf(this, new Person(email, phone));
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = undefined;
    this.currentSubject = null;
    this.email = email;
    this.phone = phone;
    this.validateEmail();
    this.startAcademy = function (academy) {
        this.academy = academy;
    };
    this.startSubject = function (subject) {
        if (!this.academy) {
            console.error("Can't start subject without academy");
            return;
        }
        if (!this.academy.subjects.includes(subject)) {
            console.error("This subject is not offered by the academy");
            return;
        }
        this.currentSubject = subject;
        subject.students.push(this);
    };
};

const subject1 = new Subject('Biology', true, 'Plants', 555);
const subject2 = new Subject('CCNA', false, 'Cisco', 555);

const academy1 = new Academy('Qinshift Academy', '10.02.2025', '11.11.2025', 'Skopje', 8);
const academy2 = new Academy('SEDC', '12.8.2018', '15.3.2019', 'Skopje', 8);

const student1 = new Students('David', 'Krstevski', 26, 'david199818@gmail.com', '075667340');
const student2 = new Students('Vojdan', 'Krstevski', 29, 'vojdan.krste@gmail', '077989666');

academy1.subjects.push(subject1);
academy2.subjects.push(subject2);

academy1.students.push(student1);
academy2.students.push(student2);

student1.startAcademy(academy1);
student2.startAcademy(academy2);

student1.startSubject(subject1);
student2.startSubject(subject2);

academy1.printAcademy();
academy2.printAcademy();

academy1.printStudents();
academy2.printStudents();

academy1.printSubjects();
academy2.printSubjects();