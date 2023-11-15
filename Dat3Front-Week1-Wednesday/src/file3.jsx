import React from "react";
import { persons } from "./file2";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default function MultiWelcome() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edith" />
      <WelcomePerson person={persons[0]} />
      <WelcomePerson person={persons[1]} />
      <WelcomePerson person={persons[2]} />
      {persons.map(person => <li key={person.email}> <WelcomePerson person={person} /></li>)}
    </div>
  );
}

export function WelcomePerson({person}) {
  return (
    <div>
      <Welcome name={person.firstName} />
    </div>
  )
}
