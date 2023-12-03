import { useState } from 'react';
import './TodoList.scss'

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem.trim()]);
      setNewItem('');
    }
  };

  const handleReset = () => {
    setItems([]);
    setNewItem('');
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div className='list'>
      <h2>Todo List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button className='button' onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className='form'>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className='button' onClick={handleAddItem}>Add Item</button>
        <button className='button' onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default TodoList;