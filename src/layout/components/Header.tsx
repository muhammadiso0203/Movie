import { memo, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../shared/assets/LOGOTYPE – BILETICK.svg";
import {
  Bookmark,
  Clapperboard,
  Home,
  Menu,
  Moon,
  Search,
  Sun,
} from "lucide-react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const handleMode = () => {
    const newMode = !darkMode;
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
  };

  const navigate = useNavigate();

  {
  }
  return (
    <header className="header_container mx-auto ">
      <nav className="gap-50 flex items-center p-2 justify-center max-[1230px]:gap-70 max-[1160px]:gap-60 max-[900px]:gap-[30px] max-[900px]:p-4 max-[640px]:gap-[20px] max-lg:gap-150 max-md:gap-120 max-sm:gap-60">
        <NavLink to={"/"}>
          <img
            src={logo}
            alt=""
            className="min-w-[100px] max-[900px]:min-w-[80px] "
          />
        </NavLink>
        <div className="flex gap-10 max-lg:hidden">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-[#C61F1F]"
                  : "dark:text-[#fff] dark:transition-all"
              } flex items-center flex-col`
            }
          >
            <Home />
            <h1>Home</h1>
          </NavLink>
          <NavLink
            end={true}
            to={"/movie"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-[#C61F1F]"
                  : "dark:text-[#fff] dark:transition-all text-black"
              } flex items-center flex-col`
            }
          >
            <Clapperboard className=" max-[900px]:min-w-[40px]" />
            <h1>Movie</h1>
          </NavLink>
          <NavLink
            to={"/search"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-[#C61F1F]"
                  : "dark:text-[#fff] dark:transition-all"
              } flex items-center flex-col`
            }
          >
            <Search />
            <h1>Search</h1>
          </NavLink>
          <NavLink
            to={"/saved"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-[#C61F1F]"
                  : "dark:text-[#fff] dark:transition-all"
              } flex items-center flex-col`
            }
          >
            <Bookmark />
            <h1 className="dark:text-white">Saved</h1>
          </NavLink>
        </div>
        <div className="flex items-center gap-20">
          <button
            onClick={() => navigate("/register")}
            className="w-[180px] h-[56px] bg-[#C61F1F] border p-2 text-white rounded-xl cursor-pointer max-lg:w-[100px] max-lg:h-[40px] max-lg:hidden"
          >
            Войти
          </button>
          <div
            className="cursor-pointer select-none max-lg:hidden"
            onClick={handleMode}
          >
            {!darkMode ? (
              <Moon className="text-[#111111] hover:opacity-80" />
            ) : (
              <Sun className="hover:opacity-80 dark:text-[#C61F1F]" />
            )}
          </div>
        </div>

        <Menu className="min-lg:hidden" />
      </nav>
    </header>
  );
};

export default memo(Header);
