import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Life cycle</h1>
      <Link to="/class">Class component</Link>
      <br />
      <br />
      <Link to="/function">Function component</Link>
    </div>
  );
}
