import Color from './Color';

const Colors = ({ items }) => {
  return (
    <ul>
      {items.map(({ id, name }) => (
        <Color key={id} id={id} name={name} />
      ))}
    </ul>
  );
};

export default Colors;

