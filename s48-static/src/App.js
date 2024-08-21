import "./App.css";
import SSCStudent from "./classes/SSCStudent";
import TenthStudent from "./components/TenthStudent";

function App() {
  // let ravi = new SSCStudent();
  // ravi.engMarks = 100;
  // ravi.telMarks = 90;
  console.log(SSCStudent.passMarks);
  SSCStudent.aboutTenth();
  // let dharmaraj = new SSCStudent("sumanth", "male");
  // let bheem = new SSCStudent();
  // let arjun = new SSCStudent();
  // let nakul = new SSCStudent();
  // let sahadev = new SSCStudent();
  // sahadev.age = 666;
  // sahadev.calculateResult();
  // console.log(sahadev.age);

  return (
    <div>
      <TenthStudent name="sumanth" />
      <TenthStudent name="pavan" />
      <TenthStudent name="satya" />
      <TenthStudent name="gopal" />
      <TenthStudent name="krishna" />
    </div>
  );
}

export default App;
