import React ,{ useState ,useEffect} from "react";
import { FaSun, FaMoon } from "react-icons/fa";
 
export default function Navbar() {

    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
      );

      const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
      };

      useEffect(() => {
        const element = document.querySelector("html");
        element.classList.remove("light", "dark");
        if (darkMode) {
          element.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          element.classList.add("light");
          localStorage.setItem("theme", "light");
        }
      }, [darkMode]);

    return (
        <nav>
            <button className="p-5 rounded-full text-lg font-semibold">
        {darkMode ? (
          <FaSun size={26} className="text-white" onClick={toggleDarkMode} />
        ) : (
          <FaMoon
            size={26}
            className="text-gray-900"
            onClick={toggleDarkMode}
          />
        )}
      </button>
        </nav>
    )
}