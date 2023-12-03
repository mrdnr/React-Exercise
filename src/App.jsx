import Container from './components/Container';

const App = () => {
  return (
    <div>
      <Container title="My Container Title">
        <p>This content is inside the custom container.</p>
        {/* Add more child components/content as needed */}
      </Container>
    </div>
  );
};

export default App;
