
const Colors = ({ items }) => {
  return (
    <ul>
      {items.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

export default Colors;
