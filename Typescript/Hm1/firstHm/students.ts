export interface Student {
    id: number;
    name: string;
    age: number;
    grades: number[];
};

export function calculateAverageGrade(grades: number[]): number {
    const total = grades.reduce((acc, grade) => acc + grade, 0);
    return total / grades.length;
};
