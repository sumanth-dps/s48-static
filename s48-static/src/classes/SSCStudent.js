class SSCStudent {
  static passMarks = 35;
  static aboutTenth = () => {
    console.log(
      "Tenth is the last standard to study in school, afterthat we go for College."
    );
  };
  constructor(name, gender) {
    console.log(name, gender);
    console.log("Inside SSCStudent Constructor");
    this.name = name;
    this.gender = gender;
    this.age = 0;
    this.telMarks = 0;
    this.hinMarks = 0;
    this.engMarks = 0;
    this.matMarks = 0;
    this.sciMarks = 0;
    this.socMarks = 0;
  }
  calculateResult = () => {
    console.log("calculate result");
    if (
      this.telMarks >= SSCStudent.passMarks &&
      this.hinMarks >= SSCStudent.passMarks &&
      this.engMarks >= SSCStudent.passMarks &&
      this.matMarks >= SSCStudent.passMarks &&
      this.sciMarks >= SSCStudent.passMarks &&
      this.socMarks >= SSCStudent.passMarks
    ) {
      console.log("Passed in Tenth");
    } else {
      console.log("Failed in Tenth");
    }
  };
}
export default SSCStudent;
