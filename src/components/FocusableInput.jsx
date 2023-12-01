import { useRef, useEffect } from "react";

const FocusableInput = () => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      console.log("Component is mounted for the first time!");
      isMounted.current = true;
    }

    return () => {
      console.log("Component will unmount");
    };
  }, []);

  return <div>Component with Mount Message</div>;
};

export default FocusableInput;
