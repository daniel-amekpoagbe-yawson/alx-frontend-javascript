// interface Teacher {
//   readonly firstName: string;
//   readonly lastName: string;
//   fullTimeEmployee: boolean;
//   yearsOfExperience?: number;
//   location: string;
//   [key: string]: any; // allow extra attributes
// }

// /** ========================
//  * Director Interface (extends Teacher)
//  * ======================== */
// interface Director extends Teacher {
//   numberOfReports: number;
// }

// // Example Teacher object
// const teacher3: Teacher = {
//   firstName: "John",
//   lastName: "Doe",
//   fullTimeEmployee: false,
//   location: "London",
//   contract: false,
//   workFromHome: () => "Cannot work from home",
//   getCoffeeBreak: () => "Cannot have a break",
//   workTeacherTasks: () => "Getting to work",
// };

// /** ========================
//  * Directors Interface
//  * ======================== */
// interface Directors extends Teacher {
//   numberOfReports: number;
//   workFromHome(): string;
//   getCoffeeBreak(): string;
//   workTeacherTasks(): string;
// }

// // Example Director object
// const director1: Directors = {
//   firstName: "John",
//   lastName: "Doe",
//   fullTimeEmployee: true,
//   location: "London",
//   numberOfReports: 17,
//   workFromHome: () => "Working from home",
//   getCoffeeBreak: () => "Getting a coffee break",
//   workTeacherTasks: () => "Getting to work",
// };

// /** ========================
//  * printTeacher Function
//  * ======================== */
// interface PrintTeacherFunction {
//   (firstName: string, lastName: string): string;
// }

// const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
//   return `${firstName[0]}. ${lastName}`;
// };

// /** ========================
//  * Student Class
//  * ======================== */
// interface StudentClassInterface {
//   firstName: string;
//   lastName: string;
//   workOnHomework(): string;
//   displayName(): string;
// }

// class StudentClass implements StudentClassInterface {
//   constructor(public firstName: string, public lastName: string) {}

//   workOnHomework(): string {
//     return "Currently working";
//   }

//   displayName(): string {
//     return this.firstName;
//   }
// }

// /** ========================
//  * Teacher & Director Classes
//  * ======================== */
// interface TeacherInterface {
//   workFromHome(): string;
//   getCoffeeBreak(): string;
//   workTeacherTasks(): string;
// }

// interface DirectorInterface {
//   workFromHome(): string;
//   getCoffeeBreak(): string;
//   workDirectorTasks(): string;
// }

// class TeacherClass implements TeacherInterface {
//   workFromHome(): string {
//     return "Cannot work from home";
//   }
//   getCoffeeBreak(): string {
//     return "Cannot have a break";
//   }
//   workTeacherTasks(): string {
//     return "Getting to work";
//   }
// }

// class DirectorClass implements DirectorInterface {
//   workFromHome(): string {
//     return "Working from home";
//   }
//   getCoffeeBreak(): string {
//     return "Getting a coffee break";
//   }
//   workDirectorTasks(): string {
//     return "Getting to director tasks";
//   }
// }

// /** ========================
//  * Helper Functions
//  * ======================== */
// function createEmployee(salary: number | string): TeacherClass | DirectorClass {
//   if (typeof salary === "number" && salary < 500) return new TeacherClass();
//   return new DirectorClass();
// }

// function isDirector(
//   employee: TeacherClass | DirectorClass
// ): employee is DirectorClass {
//   return (employee as DirectorClass).workDirectorTasks !== undefined;
// }

// function executeWork(employee: TeacherClass | DirectorClass) {
//   console.log(
//     isDirector(employee)
//       ? employee.workDirectorTasks()
//       : employee.workTeacherTasks()
//   );
// }

// /** ========================
//  * Subjects & teachClass Function
//  * ======================== */
// type Subjects = "Math" | "History";

// function teachClass(todayClass: Subjects): string {
//   return `Teaching ${todayClass}`;
// }

// console.log(printTeacher("John", "Doe")); // Output: J. Doe
// console.log(printTeacher("Jane", "Smith")); // Output: J. Smith

/** ========================
 * Teacher Interface
 * ======================== */
/**
 * Interface representing a Teacher
 * - firstName and lastName are readonly and only set at initialization
 * - fullTimeEmployee and location are mandatory
 * - yearsOfExperience is optional
 * - [key: string]: any allows adding arbitrary extra properties
 */
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

/** ========================
 * Director Interface
 * ======================== */
/**
 * Interface representing a Director
 * - Extends Teacher
 * - Adds numberOfReports as a mandatory property
 */
interface Director extends Teacher {
  numberOfReports: number;
}

// Example Teacher object
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false, // extra property
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
/**
 * Interface representing the function signature of printTeacher
 * Accepts a single object with firstName and lastName
 * Returns a string in the format: "J. Doe"
 */
interface PrintTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

/**
 * Function to print teacher name in short format
 */
const printTeacher: PrintTeacherFunction = ({ firstName, lastName }) => {
  return `${firstName[0]}. ${lastName}`;
};

// Example usage
console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // J. Doe
console.log(printTeacher({ firstName: "Jane", lastName: "Smith" })); // J. Smith

/** ========================
 * Student Class
 * ======================== */
/**
 * Interface for a Student class
 */
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

/**
 * Student class implementing StudentClassInterface
 */
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
/**
 * Interface for Teacher class methods
 */
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

/**
 * Interface for Director class methods
 */
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

/**
 * TeacherClass implementing TeacherInterface
 */
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

/**
 * DirectorClass implementing DirectorInterface
 */
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
/**
 * Factory function to create an employee
 * Returns TeacherClass if salary < 500
 * Otherwise returns DirectorClass
 */
function createEmployee(salary: number | string): TeacherClass | DirectorClass {
  if (typeof salary === "number" && salary < 500) return new TeacherClass();
  return new DirectorClass();
}

/**
 * Type guard to check if an employee is DirectorClass
 */
function isDirector(
  employee: TeacherClass | DirectorClass
): employee is DirectorClass {
  return (employee as DirectorClass).workDirectorTasks !== undefined;
}

/**
 * Execute the appropriate work function based on employee type
 */
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

/**
 * Function to teach a class based on Subject type
 */
function teachClass(todayClass: Subjects): string {
  return `Teaching ${todayClass}`;
}

// Example usage
console.log(teachClass("Math")); // Teaching Math
console.log(teachClass("History")); // Teaching History
