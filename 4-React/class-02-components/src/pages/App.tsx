import { ButtonApp } from "../components/ButtonApp";
import { UserCard } from "../components/UserCard";

export function App() {
  return (
    <>
      <h1>Class 02 Components</h1>
      <ButtonApp name="Play" />
      <ButtonApp name="Stop" />
      <ButtonApp name="<<" />
      <ButtonApp name=">>" />

      <UserCard name="Jeanderson" role="Web Developer" color="lightblue" />
      <UserCard name="Gilsara" role="Web Developer" color="lightpink" />
    </>
  );
}
