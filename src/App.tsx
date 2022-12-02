import { CiDark } from "react-icons/Ci";
import { AiOutlineHome } from "react-icons/Ai";

function App() {
  return (
    <div>
      <main className="bg-white px-10">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-2xl">Omise</h1>
          <ul className="flex items-center">
            <li>
              <a href="#home">
                <AiOutlineHome />
              </a>
            </li>
            <li>
              <button>
                <CiDark className="text-3xl" />
              </button>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
}

export default App;
