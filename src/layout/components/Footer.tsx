import { memo } from "react";
import footlogo from "../../shared/assets/LOGOTYPE.svg";
import playmarket from "../../shared/assets/image 7.svg";
import appstore from "../../shared/assets/image 8.svg";
import file from "../../shared/assets/file-list-2-line.svg";
import reklama from "../../shared/assets/shining-line.svg";
import savol from "../../shared/assets/question-line.svg";
import kontakt from "../../shared/assets/phone-line.svg";
import movie from "../../shared/assets/movie-line.svg";
import teatr from "../../shared/assets/clapperboard-line.svg";
import konsert from "../../shared/assets/movie-2-line.svg";
import sport from "../../shared/assets/basketball-line.svg";
import insta from "../../shared/assets/Vector (3).svg";
import facebook from "../../shared/assets/facebook-circle-line.svg";
import youtube from "../../shared/assets/youtube-line.svg";

const Footer = () => {
  return (
    <footer className="footer_container mx-auto mb-10 rounded-xl mt-[118px]">
      <div className="flex">
        <div className=" flex flex-col gap-12 ml-[30px] pt-[30px]">
          <div>
            <img src={footlogo} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <img src={playmarket} alt="" />
            <img src={appstore} alt="" />
          </div>
        </div>
        <div className="mt-[23px] ml-[120px] text-black">
          <ul className="flex flex-col gap-[18px]">
            <li className="flex gap-2 items-center">О нас</li>
            <li className="flex gap-2 items-center">
              {" "}
              <img src={file} alt="" />
              Публичная оферта
            </li>
            <li className="flex gap-2 items-center">
              {" "}
              <img src={reklama} alt="" />
              Реклама
            </li>
            <li className="flex gap-2 items-center">
              {" "}
              <img src={savol} alt="" />
              F.A.Q
            </li>
            <li className="flex gap-2 items-center">
              {" "}
              <img src={kontakt} alt="" />
              Контакты
            </li>
          </ul>
        </div>
        <div className="mt-[23px] ml-[120px] text-black">
          <ul className="flex flex-col gap-[18px]">
            <li>Категории</li>
            <li className="flex items-center gap-2">
              <img src={movie} alt="" />
              Кино
            </li>
            <li className="flex items-center gap-2">
              <img src={teatr} alt="" />
              Театр
            </li>
            <li className="flex items-center gap-2">
              <img src={konsert} alt="" />
              Концерты
            </li>
            <li className="flex items-center gap-2">
              <img src={sport} alt="" />
              Спорт
            </li>
          </ul>
        </div>
        <div className="mt-[23px] ml-[120px] text-black">
          <ul className="flex flex-col">
            <li>Связаться с нами</li>
            <li className="text-[#C61F1F] text-[20px] mt-5">+998 (95) 897-33-38</li>
            <li className="mt-[54px]">Социальные сети</li>
          </ul>
          <div className="flex gap-5 mt-4">
            <img src={insta} alt="" />
            <img src={facebook} alt="" />
            <img src={youtube} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
