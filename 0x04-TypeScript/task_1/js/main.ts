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
};

// Example Director object
const director1: Director = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  numberOfReports: 17,
};

/** ========================
 * printTeacher Function
 * ======================== */
/**
 * Interface for the printTeacher function
 * Defines a function signature that accepts firstName and lastName
 * and returns a formatted string
 */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * Prints teacher name in abbreviated format
 * Returns the first letter of firstName followed by period and full lastName
 *
 * @param firstName - The teacher's first name
 * @param lastName - The teacher's last name
 * @returns Formatted string: "F. LastName"
 */
function printTeacher(firstName: string, lastName: string): string {
  firstName = firstName[0];
  return `${firstName}. ${lastName}`;
}

/** ========================
 * Student Class
 * ======================== */
/**
 * Interface for the StudentClass constructor
 * Defines the parameters required to create a new Student instance
 */
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

/**
 * Interface describing the StudentClass
 * Defines the properties and methods that a Student instance must have
 */
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

/**
 * StudentClass implementation
 * Represents a student with basic functionality for homework and display
 */
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  /**
   * Creates a new StudentClass instance
   * @param firstName - The student's first name
   * @param lastName - The student's last name
   */
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  /**
   * Returns a string indicating the student is currently working on homework
   * @returns The string "Currently working"
   */
  workOnHomework(): string {
    return "Currently working";
  }

  /**
   * Returns the first name of the student
   * @returns The student's first name
   */
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
function executeWork(employee: TeacherClass | DirectorClass): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

/** ========================
 * Subjects & teachClass Function
 * ======================== */
/**
 * String literal type for allowed subjects
 */
type Subjects = "Math" | "History";

/**
 * Function to teach a class based on Subject type
 * @param todayClass - The subject being taught today
 * @returns A string indicating what is being taught
 */
function teachClass(todayClass: Subjects): string {
  return `Teaching ${todayClass}`;
}
