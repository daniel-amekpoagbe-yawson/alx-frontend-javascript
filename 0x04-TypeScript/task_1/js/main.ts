// // interface Teacher {
// //   readonly firstName: string;
// //   readonly lastName: string;
// //   fullTimeEmployee: boolean;
// //   yearsOfExperience?: number;
// //   location: string;
// //   [key: string]: any; // allow extra attributes
// // }

// // /** ========================
// //  * Director Interface (extends Teacher)
// //  * ======================== */
// // interface Director extends Teacher {
// //   numberOfReports: number;
// // }

// // // Example Teacher object
// // const teacher3: Teacher = {
// //   firstName: "John",
// //   lastName: "Doe",
// //   fullTimeEmployee: false,
// //   location: "London",
// //   contract: false,
// //   workFromHome: () => "Cannot work from home",
// //   getCoffeeBreak: () => "Cannot have a break",
// //   workTeacherTasks: () => "Getting to work",
// // };

// // /** ========================
// //  * Directors Interface
// //  * ======================== */
// // interface Directors extends Teacher {
// //   numberOfReports: number;
// //   workFromHome(): string;
// //   getCoffeeBreak(): string;
// //   workTeacherTasks(): string;
// // }

// // // Example Director object
// // const director1: Directors = {
// //   firstName: "John",
// //   lastName: "Doe",
// //   fullTimeEmployee: true,
// //   location: "London",
// //   numberOfReports: 17,
// //   workFromHome: () => "Working from home",
// //   getCoffeeBreak: () => "Getting a coffee break",
// //   workTeacherTasks: () => "Getting to work",
// // };

// // /** ========================
// //  * printTeacher Function
// //  * ======================== */
// // interface PrintTeacherFunction {
// //   (firstName: string, lastName: string): string;
// // }

// // const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
// //   return `${firstName[0]}. ${lastName}`;
// // };

// // /** ========================
// //  * Student Class
// //  * ======================== */
// // interface StudentClassInterface {
// //   firstName: string;
// //   lastName: string;
// //   workOnHomework(): string;
// //   displayName(): string;
// // }

// // class StudentClass implements StudentClassInterface {
// //   constructor(public firstName: string, public lastName: string) {}

// //   workOnHomework(): string {
// //     return "Currently working";
// //   }

// //   displayName(): string {
// //     return this.firstName;
// //   }
// // }

// // /** ========================
// //  * Teacher & Director Classes
// //  * ======================== */
// // interface TeacherInterface {
// //   workFromHome(): string;
// //   getCoffeeBreak(): string;
// //   workTeacherTasks(): string;
// // }

// // interface DirectorInterface {
// //   workFromHome(): string;
// //   getCoffeeBreak(): string;
// //   workDirectorTasks(): string;
// // }

// // class TeacherClass implements TeacherInterface {
// //   workFromHome(): string {
// //     return "Cannot work from home";
// //   }
// //   getCoffeeBreak(): string {
// //     return "Cannot have a break";
// //   }
// //   workTeacherTasks(): string {
// //     return "Getting to work";
// //   }
// // }

// // class DirectorClass implements DirectorInterface {
// //   workFromHome(): string {
// //     return "Working from home";
// //   }
// //   getCoffeeBreak(): string {
// //     return "Getting a coffee break";
// //   }
// //   workDirectorTasks(): string {
// //     return "Getting to director tasks";
// //   }
// // }

// // /** ========================
// //  * Helper Functions
// //  * ======================== */
// // function createEmployee(salary: number | string): TeacherClass | DirectorClass {
// //   if (typeof salary === "number" && salary < 500) return new TeacherClass();
// //   return new DirectorClass();
// // }

// // function isDirector(
// //   employee: TeacherClass | DirectorClass
// // ): employee is DirectorClass {
// //   return (employee as DirectorClass).workDirectorTasks !== undefined;
// // }

// // function executeWork(employee: TeacherClass | DirectorClass) {
// //   console.log(
// //     isDirector(employee)
// //       ? employee.workDirectorTasks()
// //       : employee.workTeacherTasks()
// //   );
// // }

// // /** ========================
// //  * Subjects & teachClass Function
// //  * ======================== */
// // type Subjects = "Math" | "History";

// // function teachClass(todayClass: Subjects): string {
// //   return `Teaching ${todayClass}`;
// // }

// // console.log(printTeacher("John", "Doe")); // Output: J. Doe
// // console.log(printTeacher("Jane", "Smith")); // Output: J. Smith

// /** ========================
//  * Teacher Interface
//  * ======================== */
// /**
//  * Interface representing a Teacher
//  * - firstName and lastName are readonly and only set at initialization
//  * - fullTimeEmployee and location are mandatory
//  * - yearsOfExperience is optional
//  * - [key: string]: any allows adding arbitrary extra properties
//  */
// interface Teacher {
//   readonly firstName: string;
//   readonly lastName: string;
//   fullTimeEmployee: boolean;
//   yearsOfExperience?: number;
//   location: string;
//   [key: string]: any;
// }

// /** ========================
//  * Director Interface
//  * ======================== */
// /**
//  * Interface representing a Director
//  * - Extends Teacher
//  * - Adds numberOfReports as a mandatory property
//  */
// interface Director extends Teacher {
//   numberOfReports: number;
// }

// // Example Teacher object
// const teacher3: Teacher = {
//   firstName: "John",
//   lastName: "Doe",
//   fullTimeEmployee: false,
//   location: "London",
//   contract: false, // extra property
//   workFromHome: () => "Cannot work from home",
//   getCoffeeBreak: () => "Cannot have a break",
//   workTeacherTasks: () => "Getting to work",
// };

// // Example Director object
// const director1: Director = {
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
// /**
//  * Interface representing the function signature of printTeacher
//  * Accepts a single object with firstName and lastName
//  * Returns a string in the format: "J. Doe"
//  */
// interface printTeacherFunction {
//   (firstName: string, lastName: string): string;
// }
// /**
//  * Function to print teacher name in short format
// //  */

// /** ========================
//  * Interface for printTeacher
//  * ======================== */

// /**
//  * Interface for the printTeacher function
//  *
//  * Defines a function signature that:
//  * - Takes two string parameters: firstName and lastName
//  * - Returns a formatted string with first initial and full last name
//  *
//  * @param firstName - The teacher's first name
//  * @param lastName - The teacher's last name
//  * @returns A string in the format "F. LastName"
//  */
// interface printTeacherFunction {
//   (firstName: string, lastName: string): string;
// }

// /**
//  * Prints teacher name in abbreviated format
//  *
//  * Takes a teacher's full name and returns it in a shortened format
//  * where only the first letter of the first name is shown, followed
//  * by a period, space, and the full last name.
//  *
//  * @param firstName - The teacher's first name
//  * @param lastName - The teacher's last name
//  * @returns Formatted string: "FirstInitial. LastName"
//  *
//  * @example
//  * printTeacher("John", "Doe") // Returns: "J. Doe"
//  * printTeacher("Jane", "Smith") // Returns: "J. Smith"
//  */

// function printTeacher(firstName: string, lastName: string): string {
//   firstName = firstName[0];
//   return `${firstName}. ${lastName}`;
// }

// // Example usage
// console.log(printTeacher("John", "Doe")); // Output: J. Doe
// console.log(printTeacher("Jane", "Smith")); // Output: J. Smith
// console.log(printTeacher("Albert", "Einstein")); // Output: A. Einstein
// /**

// /**
//  * Interface for a Student class
//  */
// interface StudentClassInterface {
//   firstName: string;
//   lastName: string;
//   workOnHomework(): string;
//   displayName(): string;
// }

// /**
//  * Student class implementing StudentClassInterface
//  */
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
// /**
//  * Interface for Teacher class methods
//  */
// interface TeacherInterface {
//   workFromHome(): string;
//   getCoffeeBreak(): string;
//   workTeacherTasks(): string;
// }

// /**
//  * Interface for Director class methods
//  */
// interface DirectorInterface {
//   workFromHome(): string;
//   getCoffeeBreak(): string;
//   workDirectorTasks(): string;
// }

// /**
//  * TeacherClass implementing TeacherInterface
//  */
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

// /**
//  * DirectorClass implementing DirectorInterface
//  */
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
// /**
//  * Factory function to create an employee
//  * Returns TeacherClass if salary < 500
//  * Otherwise returns DirectorClass
//  */
// function createEmployee(salary: number | string): TeacherClass | DirectorClass {
//   if (typeof salary === "number" && salary < 500) return new TeacherClass();
//   return new DirectorClass();
// }

// /**
//  * Type guard to check if an employee is DirectorClass
//  */
// function isDirector(
//   employee: TeacherClass | DirectorClass
// ): employee is DirectorClass {
//   return (employee as DirectorClass).workDirectorTasks !== undefined;
// }

// /**
//  * Execute the appropriate work function based on employee type
//  */
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

// /**
//  * Function to teach a class based on Subject type
//  */
// function teachClass(todayClass: Subjects): string {
//   return `Teaching ${todayClass}`;
// }

// // Example usage
// console.log(teachClass("Math")); // Teaching Math
// console.log(teachClass("History")); // Teaching History

// /**
//  * Interface for the StudentClass constructor
//  * Defines the parameters required to create a new Student instance
//  */
// interface StudentConstructor {
//   new (firstName: string, lastName: string): StudentClassInterface;
// }

// /**
//  * Interface describing the StudentClass
//  * Defines the properties and methods that a Student instance must have
//  */
// interface StudentClassInterface {
//   firstName: string;
//   lastName: string;
//   workOnHomework(): string;
//   displayName(): string;
// }

// /**
//  * StudentClass implementation
//  * Represents a student with basic functionality for homework and display
//  */
// class StudentClass implements StudentClassInterface {
//   firstName: string;
//   lastName: string;

//   /**
//    * Creates a new StudentClass instance
//    * @param firstName - The student's first name
//    * @param lastName - The student's last name
//    */
//   constructor(firstName: string, lastName: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   /**
//    * Returns a string indicating the student is currently working on homework
//    * @returns The string "Currently working"
//    */
//   workOnHomework(): string {
//     return "Currently working";
//   }

//   /**
//    * Returns the first name of the student
//    * @returns The student's first name
//    */
//   displayName(): string {
//     return this.firstName;
//   }
// }

// // Example usage
// const student1 = new StudentClass("John", "Doe");
// console.log(student1.displayName());      // Output: John
// console.log(student1.workOnHomework());   // Output: Currently working

// const student2 = new StudentClass("Jane", "Smith");
// console.log(student2.displayName());      // Output: Jane
// console.log(student2.workOnHomework());   // Output: Currently working

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
// // Interface for printTeacher function
// interface printTeacherFunction {
//   (firstName: string, lastName: string): string;
// }

// // Function implementation
// // const printTeacher: printTeacherFunction = (firstName, lastName) => {
// //   return `${firstName[0]}. ${lastName}`;
// // };
// function printTeacher(firstName: string, lastName: string): string {
//   firstName = firstName[0];
//   return `${firstName}. ${lastName}`;
// }

// // Example usage
// console.log(printTeacher("John", "Doe")); // Output: J. Doe
// console.log(printTeacher("Jane", "Smith")); // Output: J. Smith

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
