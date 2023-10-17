import Age from "./Age";

function Welcome({ name }) {
  return (
    <>
      <p>Welcome {name}!</p>
      <Age age="20"/>
    </>
  );
}

export default Welcome;
