import upper, {text1, text2, text3} from "./file1";
import obj, {males, females} from "./file2";
import MultiWelcome, {} from "./file3";

function App() {
  const person = obj;
  const {firstName, email} = person;
  const people = [...males, ...females];
  printPeople(people);

  const personv2 = {...person, phone: 123456, friends: [...people]};
  console.log(personv2);
  
  return (
    <>
      <h2>ex 1</h2>
      <p>{upper("please uppercase me")}</p>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <br></br>
      <h2>ex 2</h2>
      <p>{firstName}</p>
      <p>{email}</p>
      <br></br>
      <h2>ex 3</h2>
      <MultiWelcome />
    </>
  )
}

function printPeople(...people) {
  console.log(...people);
}

export default App
