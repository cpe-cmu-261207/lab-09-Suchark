import Hobby from "../components/hobby";
import Introduce from "../components/introduce";
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
