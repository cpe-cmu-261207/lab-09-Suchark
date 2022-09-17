import Hobby from "../components/Hobby";
import Introduce from "../components/Introduce";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Introduce />
      <Hobby />
    </div>
  );
}
