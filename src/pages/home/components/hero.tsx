import { memo } from "react";
import hero from "../../../shared/assets/Rectangle 64.png";
import rasm1 from "../../../shared/assets/Rectangle 7.png";
import rasm2 from "../../../shared/assets/Rectangle 8.png";
import rasm3 from "../../../shared/assets/Rectangle 9.png";
import rasm4 from "../../../shared/assets/Rectangle 6.png";
import chiziq from "../../../shared/assets/Vector (1).svg";
import chiziq2 from "../../../shared/assets/Vector (2).svg";

const Home = () => {
  return (
    <section className="container mx-auto">
      <div>
        <img src={hero} alt="" />
      </div>
      <div className="flex items-center justify-center gap-3">
        <button className="w-12 h-12 bg-[#1D1D1D] rounded-[50%] cursor-pointer">
          <img src={chiziq} alt="" className="mx-auto" />
        </button>
        <div className="flex justify-center mt-1 gap-1">
          <img src={rasm4} alt="" />
          <img src={rasm1} alt="" />
          <img src={rasm2} alt="" />
          <img src={rasm3} alt="" />
        </div>
        <button className="w-12 h-12 bg-[#1D1D1D] rounded-[50%] cursor-pointer">
          <img src={chiziq2} alt="" className="mx-auto" />
        </button>
      </div>
    </section>
  );
};

export default memo(Home);
