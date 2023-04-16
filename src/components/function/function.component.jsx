import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Still have some hooks like useCallback, useMemo and so on.
function Function() {
  // Functional component didn't cover getSnapshotBeforeUpdate, getDerivedStateFromError and componentDidCatch
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // This will act as componentDidMount, componentDidUpdate and componentWillUnmount
    console.log("useEffect");
  }, [counter]);

  return (
    <>
      <Link to="/class">Class component</Link>
      <br />
      <button onClick={() => setCounter(counter + 1)}>
        counter - {counter}
      </button>
    </>
  );
}

export default Function;
