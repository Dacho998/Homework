import { Student } from './students';
import { calculateAverageGrade } from './students';

export enum Grade {
    Freshman = "Freshman",
    Sophomore = "Sophomore",
    Junior = "Junior",
    Senior = "Senior"
}

export function getGradeLevel(age: number): Grade {
    if (age < 19) {
        return Grade.Freshman;
    } else if (age < 20) {
        return Grade.Sophomore;
    } else if (age < 22) {
        return Grade.Junior;
    } else {
        return Grade.Senior;
    }
}

export interface Course {
    id: number;
    name: string;
    students: Student[];
    instructor: string;
    maxStudents: number;
}

export class CourseManager {
    private courses: Course[] = [];

    addCourse(course: Course): void {
        this.courses.push(course);
    }

    removeCourse(courseId: number): void {
        this.courses = this.courses.filter(course => course.id !== courseId);
    }

    getCourse(courseId: number): Course | undefined {
        return this.courses.find(course => course.id === courseId);
    }

    getAllCourses(): Course[] {
        return this.courses;
    }
}

export function getTopStudents(course: Course, topN: number): Student[] {
    if (topN <= 0) {
        throw new Error("Number of top students must be greater than 0.");
    }

    const sortedStudents = [...course.students].sort(
        (a, b) => calculateAverageGrade(b.grades) - calculateAverageGrade(a.grades)
    );

    return sortedStudents.slice(0, topN);
}