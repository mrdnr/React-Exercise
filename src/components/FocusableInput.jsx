import { useRef, useEffect } from "react";
import { Form, FormControl } from 'react-bootstrap';

const FocusableInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Form.Group>
      <label>Focus İnput :</label>
      <FormControl ref={inputRef} />
    </Form.Group>
  );
};

export default FocusableInput;
