// interface Teacher {
//   readonly firstName: string;
//   readonly lastName: string;
//   fullTimeEmployee: boolean;
//   yearsOfExperience?: number;
//   location: string;
//   [key: string]: any;
// }

// const teacher3: Teacher = {
//   firstName: 'John',
//   lastName: 'Doe',
//   fullTimeEmployee: false,
//   location: 'London',
//   contract: false,
//   workFromHome: () => 'Cannot work from home',
//   getCoffeeBreak: () => 'Cannot have a break',
//   workTeacherTasks: () => 'Getting to work'
// };

// interface Directors extends Teacher {
//   numberOfReports: number;
//   workFromHome(): string;
//   getCoffeeBreak(): string;
//   workTeacherTasks(): string;
// }

// const director1: Directors = {
//   firstName: 'John',
//   lastName: 'Doe',
//   fullTimeEmployee: true,
//   location: 'London',
//   numberOfReports: 17,
//   workFromHome: () => 'Working from home',
//   getCoffeeBreak: () => 'Getting a coffee break',
//   workTeacherTasks: () => 'Getting to work'
// };

// // printTeacher function
// interface printTeacherFunction {
//   (firstName: string, lastName: string): string;
// }

// const printTeacher: printTeacherFunction = (firstName, lastName) => {
//   return `${firstName[0]}. ${lastName}`;
// };

// // StudentClass with interface
// interface StudentClassInterface {
//   firstName: string;
//   lastName: string;
//   workOnHomework(): string;
//   displayName(): string;
// }

// class StudentClass implements StudentClassInterface {
//   constructor(public firstName: string, public lastName: string) {}
//   workOnHomework(): string { return 'Currently working'; }
//   displayName(): string { return this.firstName; }
// }

// interface DirectorInterface {
//   workFromHome(): string;
//   getCoffeeBreak(): string;
//   workDirectorTasks(): string;
// }

// interface TeacherInterface {
//   workFromHome(): string;
//   getCoffeeBreak(): string;
//   workTeacherTasks(): string;
// }

// class Director implements DirectorInterface {
//   workFromHome() { return 'Working from home'; }
//   getCoffeeBreak() { return 'Getting a coffee break'; }
//   workDirectorTasks() { return 'Getting to director tasks'; }
// }

// class Teacher implements TeacherInterface {
//   workFromHome() { return 'Cannot work from home'; }
//   getCoffeeBreak() { return 'Cannot have a break'; }
//   workTeacherTasks() { return 'Getting to work'; }
// }

// function createEmployee(salary: number | string): Teacher | Director {
//   if (typeof salary === 'number' && salary < 500) return new Teacher();
//   return new Director();
// }

// function isDirector(employee: Teacher | Director): employee is Director {
//   return (employee as Director).workDirectorTasks !== undefined;
// }

// function executeWork(employee: Teacher | Director) {
//   console.log(isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks());
// }

// type Subjects = 'Math' | 'History';

// function teachClass(todayClass: Subjects): string {
//   return `Teaching ${todayClass}`;
// }

/** ========================
 * Teacher Interface
 * ======================== */
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allow extra attributes
}

/** ========================
 * Director Interface (extends Teacher)
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

/** ========================
 * Directors Interface
 * ======================== */
interface Directors extends Teacher {
  numberOfReports: number;
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Example Director object
const director1: Directors = {
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
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

/** ========================
 * Student Class
 * ======================== */
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

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
