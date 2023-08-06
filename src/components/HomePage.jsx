import { Link } from "react-router-dom";

export default function HomePage() {
  <div>
    <h1>Hello from the main page of the app!</h1>
    <p>Here are some examples of links to other pages</p>
    <nav>
      <ul>
        <li>
          <Link to="/">Profile page</Link>
        </li>
        <li>
          <Link to="example" className="bg-red-700">
            Example
          </Link>
        </li>
      </ul>
    </nav>
  </div>;
}
