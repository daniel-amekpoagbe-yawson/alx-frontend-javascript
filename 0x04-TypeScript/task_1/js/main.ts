/** ========================
 * Teacher Interface
 * ======================== */
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allow extra properties
}

/** ========================
 * Director Interface
 * ======================== */
interface Director extends Teacher {
  numberOfReports: number;
}

// Example Teacher object
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
  workFromHome: () => "Cannot work from home",
  getCoffeeBreak: () => "Cannot have a break",
  workTeacherTasks: () => "Getting to work",
};

// Example Director object
const director1: Director = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  numberOfReports: 17,
  workFromHome: () => "Working from home",
  getCoffeeBreak: () => "Getting a coffee break",
  workTeacherTasks: () => "Getting to work",
};

/** ========================
 * printTeacher Function
 * ======================== */

interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

const printTeacher: printTeacherFunction = ({ firstName, lastName }) => {
  return `${firstName[0]}. ${lastName}`;
};

// Example usage
console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // Output: J. Doe
console.log(printTeacher({ firstName: "Jane", lastName: "Smith" })); // Output: J. Smith

/** ========================
 * Student Class
 * ======================== */
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

/** ========================
 * Student Class
 * ======================== */
class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student1 = new StudentClass("John", "Doe");
console.log(student1.displayName()); // Output: John
console.log(student1.workOnHomework()); // Output: Currently working

const student2 = new StudentClass("Jane", "Smith");
console.log(student2.displayName()); // Output: Jane
console.log(student2.workOnHomework()); // Output: Currently working

/** ========================
 * Teacher & Director Classes
 * ======================== */
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

class TeacherClass implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

class DirectorClass implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

/** ========================
 * Helper Functions
 * ======================== */
function createEmployee(salary: number | string): TeacherClass | DirectorClass {
  if (typeof salary === "number" && salary < 500) return new TeacherClass();
  return new DirectorClass();
}

function isDirector(
  employee: TeacherClass | DirectorClass
): employee is DirectorClass {
  return (employee as DirectorClass).workDirectorTasks !== undefined;
}

function executeWork(employee: TeacherClass | DirectorClass) {
  console.log(
    isDirector(employee)
      ? employee.workDirectorTasks()
      : employee.workTeacherTasks()
  );
}

/** ========================
 * Subjects & teachClass Function
 * ======================== */
type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  return `Teaching ${todayClass}`;
}

// Example usage
console.log(teachClass("Math")); // Teaching Math
console.log(teachClass("History")); // Teaching History
