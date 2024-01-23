import { useEffect, useLayoutEffect, useRef } from "react";

function UseLayoutEffect() {
  const inputRef = useRef(null);
  useEffect(() => {
    // console.log("use effect");
    inputRef.current.value = "HELLO";

    //   return () => {
    //     second
    //   }
  }, []);

  //before anything is printed to the user eg UI based
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
    // console.log("use layout effect");

    //   return () => {
    //     second
    //   };
  }, []);

  return (
    <div>
      <p>check console</p>
      <input type="text" ref={inputRef} defaultValue="PEDRO" />
    </div>
  );
}

export default UseLayoutEffect;
