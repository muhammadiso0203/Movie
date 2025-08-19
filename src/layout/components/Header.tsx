import { memo } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../shared/assets/LOGOTYPE – BILETICK.svg";
import { Clapperboard } from "lucide-react";

const Header = () => {
  return (
    <header className="header_container mx-auto flex justify-between items-center p-2">
      <NavLink to={"/"}>
        <img src={logo} alt="" />
      </NavLink>
      <div>
        <NavLink to={"/movie"} className="flex items-center flex-col">
          <Clapperboard className="w-10 h-10" />
          Movie
        </NavLink>
      </div>
      <div>
        <button className="w-[180px] h-[56px] bg-[#C61F1F] border p-2 text-white rounded-xl cursor-pointer">
          Войти
        </button>
      </div>
    </header>
  );
};

export default memo(Header);
